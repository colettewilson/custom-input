import { FiCalendar, FiPaperclip } from 'react-icons/fi';

export default {
  title: 'Posts',
  name: 'pageBuilderPosts',
  type: 'object',
  fields: [
    {
      title: 'Section Label',
      name: 'sectionLabel',
      type: 'string'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Posts Label',
      name: 'postsLabel',
      type: 'string'
    },
    {
      title: 'Post Type',
      name: 'postType',
      type: 'string',
      description: 'Select which post type to pull through',
      options: {
        list: [
          {title: 'Blog', value: 'blog'},
          {title: 'Event', value: 'events'}
        ]
      }
    },
    {
      title: 'Link',
      name: 'link',
      type: 'link'
    },
  ],
  preview: {
    select: {
      title: 'title',
      postType: 'postType'
    },
    prepare({ title,postType }) {
      return {
        title,
        subtitle: 'Posts',
        media: postType === 'blog' ? FiPaperclip : FiCalendar
      }
    },
  },
}