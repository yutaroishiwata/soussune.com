import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'
import { withScreenshot } from 'storybook-chrome-screenshot'
import AppHeader from '~/components/AppHeader.vue'

storiesOf('AppHeader', module)
  .addDecorator(withKnobs)
  .addDecorator(withScreenshot())
  .add(
    'default',
    withNotes(`WIP`)(() => {
      const fixed = boolean('fixed', false)
      return {
        template: `<AppHeader class="app_header" :fixed=${fixed} />`,
        components: { AppHeader },
        render: (h) => h(AppHeader, { props: { fixed: fixed } })
      }
    })
  )
