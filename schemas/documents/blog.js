import { FiPaperclip } from 'react-icons/fi'

export default {
  title: 'Blog Post',
  name: 'blog',
  type: 'document',
  icon: FiPaperclip,
  initialValue: () => ({
    publishDate: new Date().toISOString(),
  }),
  orderings: [
    {
      title: 'Last Published',
      name: 'publishDate',
      by: [
        { field: 'publishDate', direction: 'desc' }
      ]
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      description: 'A slug forms the last section of the URL and is usually based on the title of the document though you may wish to truncate particularly long titles.',
      validation: Rule => Rule.custom(slug => {
        if (typeof slug === 'undefined') {
          return true // Allow undefined values
        }

        const reg = /^\/|\/$/g
        return reg.test(slug.current)
          ? 'Please ensure there are no slashes in the slug'
          : true
      }).required()
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      title: 'Publish Date',
      name: 'publishDate',
      type: 'datetime'
    },
    {
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'blogCategory' }]
      }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      rows: 3
    }
  ]
}