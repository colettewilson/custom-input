export default {
  name: 'pageBuilderContent',
  type: 'object',
  title: 'Content & Image',
  fields: [
    { 
      name: 'layout', 
      type: 'string', 
      title: 'Layout', 
      options: { 
        list: [
          { title: 'Cover', value: 'cover'},
          { title: 'Auto', value: 'auto'}
        ]
      },
      description: 'Set the image/content layout. To create equal columns with full size image select `Cover`, to vertically center image and content select `Auto`.'
    },
    { name: 'label', type: 'string', title: 'Label' },
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'body', type: 'bodyPortableText', title: 'Body' },
    { name: 'image', type: 'themeImage', title: 'Image' },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Content & Image',
        media,
      };
    },
  },
};
