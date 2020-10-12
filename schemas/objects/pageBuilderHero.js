import { FiFeather } from "react-icons/fi"

export default {
  title: 'Hero',
  name: 'pageBuilderHero',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Strapline',
      name: 'strapline',
      type: 'text',
      rows: 3
    },
    {
      title: 'Secondary Label',
      name: 'label',
      type: 'string'
    },
    {
      title: 'Secondary Title',
      name: 'subTitle',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: `Hero`,
        media: FiFeather
      }
    }
  }
}