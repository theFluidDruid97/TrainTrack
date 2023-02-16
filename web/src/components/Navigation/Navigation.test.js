import { render } from '@redwoodjs/testing/web'

import TopNavigation from './TopNavigation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TopNavigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopNavigation />)
    }).not.toThrow()
  })
})
