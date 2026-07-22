$ErrorActionPreference = 'Stop'

$items = @(
  @('M-9501', '(What''s the Story) Morning Glory?'),
  @('C-9501', 'Initial D'),
  @('G-9501', 'Chrono Trigger'),
  @('M-9601', 'Endtroducing.....'),
  @('A-9601', 'Rurouni Kenshin (1996 TV series)'),
  @('C-9601', 'Yu-Gi-Oh!'),
  @('M-9701', 'OK Computer'),
  @('A-9701', 'Princess Mononoke'),
  @('G-9701', 'Final Fantasy VII'),
  @('M-9801', 'The Miseducation of Lauryn Hill'),
  @('A-9801', 'Cowboy Bebop'),
  @('C-9801', ('Hunter ' + [char]0x00D7 + ' Hunter')),
  @('G-9801', 'Metal Gear Solid (1998 video game)'),
  @('M-9901', 'The Battle of Los Angeles (album)'),
  @('A-9901', 'Digimon Adventure (1999 TV series)'),
  @('C-9901', 'Naruto'),
  @('G-9901', 'Counter-Strike (video game)'),
  @('A-0001', 'FLCL'),
  @('C-0001', 'Dorohedoro'),
  @('G-0001', 'The Sims (video game)'),
  @('M-0101', 'Discovery (Daft Punk album)'),
  @('C-0101', 'Fullmetal Alchemist'),
  @('G-0101', 'Halo: Combat Evolved'),
  @('M-0201', 'The Eminem Show'),
  @('A-0201', 'Ghost in the Shell: Stand Alone Complex'),
  @('C-0201', 'Eyeshield 21'),
  @('G-0201', 'Grand Theft Auto: Vice City'),
  @('M-0301', 'Elephant (album)'),
  @('A-0301', 'Fullmetal Alchemist (TV series)'),
  @('C-0301', 'Death Note'),
  @('G-0301', 'Prince of Persia: The Sands of Time'),
  @('M-0401', 'American Idiot'),
  @('A-0401', 'Samurai Champloo'),
  @('C-0401', 'Gintama'),
  @('M-0501', 'Demon Days'),
  @('A-0501', 'Mushishi'),
  @('C-0501', 'Sayonara, Zetsubou-Sensei'),
  @('G-0501', 'Shadow of the Colossus'),
  @('C-9502', 'Preacher (comics)'),
  @('C-9602', 'Kingdom Come (comics)'),
  @('M-9702', 'Faye Wong (1997 album)'),
  @('A-9702', 'South Park'),
  @('C-9802', 'Priest (manhwa)'),
  @('G-9802', 'StarCraft (video game)'),
  @('A-9902', 'The Iron Giant'),
  @('C-0003', 'Blacksad'),
  @('C-0102', 'The Ravages of Time'),
  @('M-0202', 'Moffou'),
  @('C-0202', 'Y: The Last Man'),
  @('G-0202', 'Ragnarok Online'),
  @('C-0302', 'Blankets (comics)'),
  @('C-0402', 'Scott Pilgrim'),
  @('M-0502', 'Arular'),
  @('A-0502', 'Avatar: The Last Airbender')
)

$headers = @{ 'User-Agent' = 'ACGN-9505s/1.0 (https://github.com/Courtshipfy/acgn-9505s)' }
$output = @()
$coverDir = Join-Path $PSScriptRoot '..\public\covers'
$rawPath = Join-Path $PSScriptRoot '..\content\imports\wikimedia-collection-raw.json'

foreach ($item in $items) {
  $code = $item[0]
  $title = $item[1]
  $query = [Uri]::EscapeDataString($title)
  $uri = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&redirects=1&prop=pageprops%7Cpageimages%7Cinfo%7Crevisions%7Cextracts&titles=$query&piprop=name%7Coriginal&pilicense=any&inprop=url&rvprop=ids%7Ctimestamp&exintro=1&explaintext=1"
  $page = (Invoke-RestMethod -Uri $uri -Headers $headers -TimeoutSec 45).query.pages[0]
  if ($page.missing -or -not $page.pageprops.wikibase_item) { throw "No verified page for $code / $title" }
  # The English Yu-Gi-Oh! article describes the wider franchise; the catalog
  # entry is specifically the original 1996 manga, which has its own entity.
  $qid = if ($code -eq 'C-9601') { 'Q4023139' } else { $page.pageprops.wikibase_item }

  $image = $null
  if ($page.pageimage) {
    $imageTitle = [Uri]::EscapeDataString("File:$($page.pageimage)")
    $imageUri = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=imageinfo&titles=$imageTitle&iiprop=url%7Cextmetadata"
    $imageInfo = (Invoke-RestMethod -Uri $imageUri -Headers $headers -TimeoutSec 45).query.pages[0].imageinfo[0]
    if ($imageInfo.url) {
      $extension = [System.IO.Path]::GetExtension(([Uri]$imageInfo.url).AbsolutePath).ToLowerInvariant()
      if ($extension -notmatch '^\.(jpg|jpeg|png|webp|gif|svg)$') { $extension = '.jpg' }
      $localName = "$($code.ToLowerInvariant())$extension"
      $localPath = Join-Path $coverDir $localName
      Invoke-WebRequest -Uri $imageInfo.url -Headers $headers -OutFile $localPath -TimeoutSec 90
      $image = [ordered]@{
        filename = $page.pageimage
        sourcePage = $imageInfo.descriptionurl
        originalUrl = $imageInfo.url
        localSrc = "./covers/$localName"
        license = $imageInfo.extmetadata.LicenseShortName.value
        licenseUrl = $imageInfo.extmetadata.LicenseUrl.value
        artist = ($imageInfo.extmetadata.Artist.value -replace '<[^>]+>', '' -replace '&[^;]+;', ' ').Trim()
      }
    }
  }

  $output += [ordered]@{
    code = $code
    requestedTitle = $title
    title = $page.title
    qid = $qid
    wikipediaUrl = $page.fullurl
    revisionId = $page.revisions[0].revid
    revisionTimestamp = $page.revisions[0].timestamp
    extract = $page.extract
    cover = $image
    retrievedAt = '2026-07-22'
  }
  Write-Host "$code $($page.title) $($page.pageprops.wikibase_item)"
  Start-Sleep -Milliseconds 150
}

$output | ConvertTo-Json -Depth 8 | Set-Content -Path $rawPath -Encoding utf8
Write-Host "Saved $($output.Count) records to $rawPath"
