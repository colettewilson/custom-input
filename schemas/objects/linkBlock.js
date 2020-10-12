export default {
  title: 'Link Block',
  name: 'linkBlock',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Body',
      name: 'body',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: Rule => Rule.uri({allowRelative: true})
    },
    {
      title: 'New Tab',
      name: 'newTab',
      type: 'boolean',
      description: 'Please avoid using for internal links.',
      options: {
        layout: 'checkbox'
      }
    },
    {
      title: 'No Follow',
      name: 'noFollow',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    }
  ]
}