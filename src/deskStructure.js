import S from '@sanity/desk-tool/structure-builder'

import deskListAdvanced from './desk/deskListAdvanced'

// const AssetDoc = assetId => S.document().documentId(assetId)

export default () =>
  S.list()
    .title('Content')
    .items([
      // Complex lists
      deskListAdvanced('Pages', 'page', null),
      // Add a visual divider (optional)
      // S.divider(),
      // Included links to assets as a curiosity, these don't have great functional purpose in Sanity
      // S.listItem()
      //   .title('Assets')
      //   .child(
      //     S.list()
      //       .title('All Assets')
      //       .items([
      //         S.listItem()
      //           .title('Images')
      //           .child(S.documentTypeList('sanity.imageAsset').child(AssetDoc)),
      //         S.listItem()
      //           .title('Files')
      //           .child(S.documentTypeList('sanity.fileAsset').child(AssetDoc)),
      //       ])
      //   ),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        listItem => !['siteSettings', 'page'].includes(listItem.getId())
      ),
    ])
