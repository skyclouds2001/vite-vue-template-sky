import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import MainPage from '@/views/MainPage.vue'
import store from '@/stores'
import i18n from '@/i18n'

describe('basic tests', () => {
  it('basic test', () => {
    render(MainPage, {
      global: {
        plugins: [store, i18n],
      },
    })
    expect(screen.getByText(i18n.global.t('main.title'))).not.toBeNull()
  })
})
