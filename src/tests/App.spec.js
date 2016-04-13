import React from 'react'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import TestUtils from 'react-addons-test-utils'
import App from '../components/App.jsx'

expect.extend(expectJSX)

describe('App', () => {
  it('should render', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<App radiumConfig={{userAgent: 'testing'}}/>)
    const actual = renderer.getRenderOutput()
    const expected = <p>Hello World!</p>
    expect(actual).toIncludeJSX(expected)
    expect(actual.type).toEqual('div')
  })
})
