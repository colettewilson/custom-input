import { HiViewGrid } from 'react-icons/hi'

export default {
  title: 'Link Grid',
  name: 'linkGrid',
  type: 'object',
  icon: HiViewGrid,
  fields: [
    {
      title: 'Columns',
      name: 'columns',
      type: 'string',
      options: {
        list: ['1', '2', '3', '4']
      }
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{type: 'linkBlock'}]
    }
  ],
  preview: {
    select: {
      cols: 'columns',
      links: 'links.length'
    },
    prepare({ cols, links }) {
      return {
        title: `${links} link(s) in ${cols} column(s)`,
        subtitle: `Link Grid`
      }
    }
  }
}