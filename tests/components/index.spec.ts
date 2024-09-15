import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { setActivePinia, createPinia } from 'pinia'
import MainPage from '@/views/MainPage.vue'

describe('basic tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('basic test', () => {
    render(MainPage)
    expect(screen.getByText('Main')).not.toBeNull()
  })
})
