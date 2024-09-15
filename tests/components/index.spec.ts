import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import MainPage from '@/views/MainPage.vue'
import router from '@/router'
import store from '@/stores'

describe('basic tests', () => {
  it('basic test', () => {
    render(MainPage, {
      global: {
        plugins: [router, store],
      },
    })
    expect(screen.getByText('Main')).not.toBeNull()
  })
})
