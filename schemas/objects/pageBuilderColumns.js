import { FiColumns } from 'react-icons/fi';

export default {
  title: 'Content Columns',
  name: 'pageBuilderColumns',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      description: 'Optional section label.'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Optional section title.'
    },
    {
      title: 'Content Columns',
      name: 'columns',
      type: 'array',
      of: [{type: 'column'}],
      validation: Rule => Rule.max(2)
    }
  ],
  preview: {
    select: {
      title: 'title',
      columns: `columns.length`
    },
    prepare({ title, columns }) {
      return {
        title: title ? title : `${columns} Columns`,
        subtitle: `Content Columns`,
        media: FiColumns
      }
    }
  }
}