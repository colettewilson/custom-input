import { FiPercent } from "react-icons/fi"

export default {
  title: 'Statistics',
  name: 'pageBuilderStatistics',
  type: 'object',
  fields: [
    { name: 'intro', title: 'Intro', type: 'bodyPortableText' },
    { name: 'label', type: 'string', title: 'Label' },
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'statistics', type: 'statGrid', title: 'Statistics Grid' },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Statistics',
        media: FiPercent
      }
    },
  },
}