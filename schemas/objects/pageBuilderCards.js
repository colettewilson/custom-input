import { FiLayers } from 'react-icons/fi';

export default {
  title: 'Cards',
  name: 'pageBuilderCards',
  type: 'object',
  fieldsets: [
    {
      title: 'Style Options', 
      name: 'styling',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
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
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [{type: 'card'}]
    },
  ],
  preview: {
    select: {
      title: 'title',
      cards: 'cards.length'
    },
    prepare({ title, cards }) {
      return {
        title: title ? title : `${cards} Cards`,
        subtitle: 'Cards',
        media: FiLayers
      }
    },
  },
}
