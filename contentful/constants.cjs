module.exports = {
  richText: function richText({ content }) {
    return {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            content,
            // CONTENT MUST BE IN THE FOLLOWING SHAPE
            // {
            //   data: {},
            //   marks: [],
            //   value: 'this is text',
            //   nodeType: 'text',
            // }
          ],
        },
      ],
    }
  },
}
