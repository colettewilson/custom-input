const defaults = {nonTextBehavior: 'remove'}

const blocksToText = (blocks, opts = {}) => {
  const options = Object.assign({}, defaults, opts)
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
      }

      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

const returnString = (content) => {
  const string = blocksToText(content)
  return string.length > 35 ? `${string.substring(0, 35)} ...` : string
}

export default {
  title: 'Column',
  name: 'column',
  type: 'object',
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'bodyPortableText'
    }
  ],
  preview: {
    select: {
      content: 'content'
    },
    prepare({ content }) {
      return {
        title: returnString(content)
      }
    }
  }
}