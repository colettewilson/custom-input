import { HiViewGrid } from 'react-icons/hi'

export default {
  title: 'Statistic Grid',
  name: 'statGrid',
  type: 'object',
  icon: HiViewGrid,
  fields: [
    {
      title: 'Columns',
      name: 'columns',
      type: 'string',
      options: {
        list: ['1', '2', '3', '4']
      }
    },
    {
      title: 'Statistics',
      name: 'stats',
      type: 'array',
      of: [{type: 'statBlock'}]
    }
  ],
  preview: {
    select: {
      cols: 'columns',
      stats: 'stats.length'
    },
    prepare({ cols, stats}) {
      return {
        title: `${stats} statistic(s) in ${cols} column(s)`,
        subtitle: `Statistic Grid`
      }
    }
  }
}