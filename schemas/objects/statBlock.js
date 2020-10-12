export default {
  title: 'Statistic Block',
  name: 'statBlock',
  type: 'object',
  fields: [
    {
      title: 'Statistic',
      name: 'statistic',
      type: 'string'
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string'
    }
  ],
  preview: {
    select: {
      stat: `statistic`,
      label: `label`
    },
    prepare({ stat, label }) {
      return {
        title: `${stat} ${label ? label : ''}`
      }
    }
  }
}