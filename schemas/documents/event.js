import { FiCalendar } from 'react-icons/fi'

export default {
  title: 'Event Post',
  name: 'event',
  type: 'document',
  icon: FiCalendar,
  orderings: [
    {
      title: 'Start Date',
      name: 'startDate',
      by: [
        {field: 'startDate', direction: 'desc'}
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
      title: 'Location',
      name: 'location',
      type: 'string'
    },
    {
      title: 'Start Date',
      name: 'startDate',
      type: 'date'
    },
    {
      title: 'End Date',
      name: 'endDate',
      type: 'date',
      description: 'Optional for multiday events. For 1 day events leave blank.'
    },
    {
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'eventCategory'}]
      }],
      validation: Rule => Rule.required()
    },
  ]
}