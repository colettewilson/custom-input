import { FaRuler } from "react-icons/fa";

export default {
  title: 'Card',
  name: 'card',
  type: 'object',
  fieldsets: [
    {title: 'Section Link', name: 'sectionLink'},
  ],
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text'
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: Rule => Rule.uri({
        allowRelative: true
      }),
      fieldset: 'sectionLink'
    },
    {
      title: 'New Tab',
      name: 'newTab',
      type: 'boolean',
      description: 'Please avoid using for internal links.',
      options: {
        layout: 'checkbox'
      },
      fieldset: 'sectionLink'
    },
    {
      title: 'No Follow',
      name: 'noFollow',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      },
      fieldset: 'sectionLink'
    }
  ]
}