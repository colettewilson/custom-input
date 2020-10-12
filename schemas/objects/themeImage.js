import { FaImage } from 'react-icons/fa'

export default {
  title: 'Image',
  name: 'themeImage',
  type: 'image',
  options: {
    hotspot: true,
  },
  icon: FaImage,
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule =>
        Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true,
      },
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
}
