import React from 'react'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock-jest'
import waitForExpect from 'wait-for-expect'

import App from './'

describe('<App />', () => {
  beforeEach(() => {
    fetchMock.restore()
  })

  it('is alive at application start', () => {
    const app = shallow(<App />)
    expect(app.find({ children: 'Get Many Pokemon' }).exists()).toBeTruthy()
  })

  it('the get many pokemon button changes component state', async () => {
    const testPokemon = [
      { name: 'test pokemon one', url: 'http://example.com/1' },
      { name: 'test pokemon two', url: 'http://example.com/2' }
    ]
    fetchMock.getAny({ results: testPokemon })
    const app = mount(<App />)
    const button = app.find({ children: 'Get Many Pokemon' })
    button.simulate('click')
    await waitForExpect(() => {
      expect(app.state('pokemon')).toEqual(testPokemon)
    })
  })

  it('the get one pokemon button changes component state', async () => {
    const testPokemon = {
      name: 'test pokemon one', url: 'http://example.com/1'
    }
    fetchMock.getAny(testPokemon)
    const app = mount(<App />)
    const button = app.find({ children: 'Get One Pokemon' })
    button.simulate('click')
    await waitForExpect(() => {
      expect(app.state('pokemon')).toEqual([testPokemon])
    })
  })

})
