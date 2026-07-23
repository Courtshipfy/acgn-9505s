from pathlib import Path

from PIL import Image, ImageOps


SOURCE_DIR = Path(__file__).resolve().parents[1] / "public" / "covers"
OUTPUT_DIR = SOURCE_DIR / "thumbs"
SUPPORTED_SUFFIXES = {".jpg", ".jpeg", ".png"}
MAX_SIZE = (480, 640)
WEBP_QUALITY = 84


def prepare_image(source: Path) -> Image.Image:
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened)
        image.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
        has_alpha = image.mode in {"RGBA", "LA"} or "transparency" in image.info
        return image.convert("RGBA" if has_alpha else "RGB")


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    sources = sorted(path for path in SOURCE_DIR.iterdir() if path.suffix.lower() in SUPPORTED_SUFFIXES)
    destinations: set[Path] = set()
    original_bytes = 0
    thumbnail_bytes = 0

    for source in sources:
        destination = OUTPUT_DIR / f"{source.stem}.webp"
        if destination in destinations:
            raise RuntimeError(f"Thumbnail filename collision: {destination.name}")
        destinations.add(destination)

        image = prepare_image(source)
        image.save(destination, "WEBP", quality=WEBP_QUALITY, method=6)
        original_bytes += source.stat().st_size
        thumbnail_bytes += destination.stat().st_size

    reduction = 100 * (1 - thumbnail_bytes / original_bytes) if original_bytes else 0
    print(
        f"Generated {len(sources)} WebP thumbnails: "
        f"{original_bytes / 1024:.1f} KiB -> {thumbnail_bytes / 1024:.1f} KiB "
        f"({reduction:.1f}% smaller)"
    )


if __name__ == "__main__":
    main()
