import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Cart from '../Cart.vue'

describe('Cart', () => {
  it('renders properly', () => {
    const wrapper = mount(Cart)
    expect(wrapper.text()).toContain('socks')
  })
})
