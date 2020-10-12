import { FiBriefcase } from "react-icons/fi"

export default {
  title: 'Partners',
  name: 'pageBuilderPartners',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Partners',
      name: 'partners',
      type: 'array',
      description: 'If empty, will show all Partner logos',
      of: [
        {
          type: 'reference',
          to: {type: 'partner'}
        }
      ]
    },
    {
      title: 'Link',
      name: 'link',
      type: 'link'
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Partners',
        media: FiBriefcase,
      }
    },
  },
}