import S from '@sanity/desk-tool/structure-builder';

import EditIcon from 'part:@sanity/base/edit-icon';
import SearchIcon from 'part:@sanity/base/search-icon';
import EyeIcon from 'part:@sanity/base/eye-icon';
import { GrTest } from 'react-icons/gr'

const remoteURL = 'https://www.under2.agency';
const localURL = 'http://localhost:8000';
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL;

export default (title, schema, slugType) =>
  S.listItem()
    .title(title)
    .schemaType(schema)
    .child(
      S.documentTypeList(schema)
        .title(title)
        .child(documentId =>
          S.document()
            .documentId(documentId)
            .schemaType(schema)
            .views([
              S.view.form().icon(EditIcon)
            ])
        )
    );
