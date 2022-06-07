module.exports = {
  richText: function richText({ content }) {
    return {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [content],
        },
      ],
    }
  },
}
