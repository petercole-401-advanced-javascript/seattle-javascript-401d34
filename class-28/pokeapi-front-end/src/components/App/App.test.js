import React from 'react'
import { shallow } from 'enzyme'
// import { act } from 'react-dom/test-utils'
// import waitForExpect from 'wait-for-expect'

import App from './'

describe('<App />', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('is alive at application start', () => {
    const app = shallow(<App />)
    expect(app.find({ children: 'Get Many Pokemon' }).exists()).toBeTruthy()
  })

  // it('changes state on click', async () => {
  //   expect.assertions(1)
  //   fetch.mockResponse(JSON.stringify({ name: 'bulbasaur' }))
  //   const app = mount(<App />)
  //
  //   await act(async () => {
  //     app.find({ children: 'Get Many Pokemon' }).simulate('click')
  //   })
  //
  //   await waitForExpect(() => {
  //     app.update()
  //     expect(app.state('pokemon')).toEqual([ { name: 'bulbasaur' } ])
  //   })
  // })
})
