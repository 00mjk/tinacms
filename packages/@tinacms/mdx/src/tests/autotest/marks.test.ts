/**



*/
import { describe, it, expect } from 'vitest'
import { field, output, parseMDX, stringifyMDX } from './_config'
import markdownString from './marks.md?raw'

const out = output({
  type: 'root',
  children: [
    {
      type: 'p',
      children: [
        { type: 'text', text: 'Some ' },
        { type: 'text', text: 'bold', bold: true },
        { type: 'text', text: ' text' },
      ],
    },
    {
      type: 'p',
      children: [
        { type: 'text', text: 'Some ' },
        { type: 'text', text: 'bold and emphasized', italic: true, bold: true },
        { type: 'text', text: ' text' },
      ],
    },
    {
      type: 'p',
      children: [
        { type: 'text', text: 'Marks with ' },
        { type: 'text', text: 'emphasized text nesting ', italic: true },
        { type: 'text', text: 'bold', italic: true, bold: true },
        { type: 'text', text: ' text', italic: true },
      ],
    },
    {
      type: 'p',
      children: [
        { type: 'text', text: 'Hello ', bold: true },
        { type: 'text', text: 'world', bold: true, italic: true },
        { type: 'text', text: ', again', bold: true },
        { type: 'text', text: ' ' },
        { type: 'text', text: 'here', italic: true },
      ],
    },
    {
      type: 'p',
      children: [
        { type: 'text', text: 'Some ' },
        { type: 'text', text: 'inline code', code: true },
        { type: 'text', text: ' examples' },
      ],
    },
    {
      type: 'p',
      children: [
        { type: 'text', text: 'Hello ', italic: true },
        { type: 'text', text: 'some code', code: true, italic: true },
        { type: 'text', text: ', again', italic: true },
      ],
    },
    {
      type: 'p',
      children: [
        { type: 'text', text: 'Hello ', bold: true },
        {
          type: 'a',
          url: 'https://example.com',
          title: 'Example Site',
          children: [{ type: 'text', text: 'world', bold: true }],
        },
      ],
    },
    {
      type: 'p',
      children: [
        { type: 'text', text: 'Hello ', italic: true, bold: true },
        {
          type: 'a',
          url: 'https://example.com',
          title: 'Example Site',
          children: [{ type: 'text', text: 'world', italic: true, bold: true }],
        },
        {
          type: 'text',
          text: ' And some other text, which has a ',
          italic: true,
        },
        {
          type: 'a',
          url: 'https://something.com',
          title: null,
          children: [{ type: 'text', text: 'link to something', italic: true }],
        },
      ],
    },
  ],
})

describe('./marks.md', () => {
  it('parses the string in the expected AST', () => {
    expect(parseMDX(markdownString, field, (v) => v)).toMatchObject(out)
  })
  it('stringifies the AST into the expect string', () => {
    expect(stringifyMDX(out, field, (v) => v)).toEqual(markdownString)
  })
})
