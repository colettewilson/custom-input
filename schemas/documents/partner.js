import { FiBriefcase } from 'react-icons/fi'

export default {
  title: 'Partner',
  name: 'partner',
  type: 'document',
  icon: FiBriefcase,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'mainImage'
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Partners',
      };
    },
  },
}