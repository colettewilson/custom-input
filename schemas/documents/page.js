import { FiFile } from 'react-icons/fi'

export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: FiFile,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule =>
        Rule.required().custom(slug => {
          const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
          return regex.test(slug.current)
        }),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'test',
      description:
        'Build a page using these "blocks", or a standard content page using the "body" field below',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `/${subtitle}`,
        media,
      }
    },
  },
}
