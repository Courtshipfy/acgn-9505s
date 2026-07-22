import collection from '../content/wikimedia-collection.json' with { type: 'json' }
import { pilotMetadata } from './pilot-metadata.js'

const textLicense = {
  textLicense: 'CC BY-SA 4.0',
  textLicenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  reviewedAt: '2026-07-22',
  modified: true,
}

const rightsNotice = '非自由素材，仅用于作品识别与资料说明；版权归原权利人，不授予转载或再利用权。'

const importedMetadata = Object.fromEntries(collection.map(item => [item.code, {
  note: item.note,
  source: {
    ...textLicense,
    qid: item.qid,
    wikipediaTitle: item.wikipediaTitle,
    wikipediaUrl: item.wikipediaUrl,
    wikidataUrl: `https://www.wikidata.org/wiki/${item.qid}`,
    revisionId: item.revisionId,
    revisionTimestamp: item.revisionTimestamp,
  },
  cover: {
    status: 'referenced',
    statusLabel: item.assetType === 'logo' ? '资料性引用标志' : '资料性引用封面',
    sourcePage: item.sourcePage,
    originalUrl: item.originalUrl,
    localSrc: item.localSrc,
    assetType: item.assetType || 'cover',
    verifiedAt: '2026-07-22',
    reason: item.license || 'Wikipedia identification image; non-free or reuse status not independently granted',
    rightsNotice,
  },
}]))

export const collectionMetadata = { ...importedMetadata, ...pilotMetadata }
