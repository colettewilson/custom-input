export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Link',
      name: 'href',
      type: 'url',
      description: 'Please use relative urls for internal links.',
      validation: Rule => Rule.uri({
        allowRelative: true,
        scheme: ['https', 'http', 'mailto', 'tel']
      }).required()
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