<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { Profile } from '@/types'

import Logo from '@/assets/logo.svg'

type Props = {
  model: Profile
}

const props = defineProps<Props>()
const preview = ref<HTMLElement>()

const copy = () => {
  try {
    const blob = new Blob([signature.value], {
      type: 'text/html',
    })
    navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })])
  } catch (error) {
    console.error(error)
  }
}

const shouldDisplayCopy = computed<boolean>(() =>
  Boolean(props.model.email && props.model.name && props.model.position)
)

const signature = computed<string>(
  () => `
  <span>&nbsp;</span>
    <table
      border='0'
      cellpadding='0'
      cellspacing='0'
      style='font-family: Helvetica, Arial, sans-serif; font-size: 12px; border-collapse: separate!important; table-layout: fixed; line-height: 16px'
      width='320'
    >
      <tbody>
        <tr>
          <td align='center' valign='top' class='logo-td' style='text-align: center; padding: 4px 16px 4px 8px'>
            <img src="${Logo}" alt="Smartup Technology" />
          </td>
          <td align='left' valign='top' nowrap='nowrap' class='content-td' width='220'>
            <div class='content-pad' style="margin-bottom: 8px;">
              <span style='font-family: Helvetica, Arial, sans-serif; font-size: 12px; line-height: 16px; color: rgb(33, 33, 33); display: block;'>
                <span style='font-weight: bold; color: rgb(33, 33, 33); display: inline;font-size: 12px;' class='txt signature_name-target sig-hide'>
                  ${props.model.name}
                </span><br>
                <span style='color: rgb(33, 33, 33); display: inline;' class='txt signature_jobtitle-target sig-hide'>
                  ${props.model.position}
                </span><br>
                </span>
                <a class='link email signature_email-target sig-hide'
                  href='mailto:${props.model.email}'
                  style='color: #1976d2; text-decoration: none; display: inline;'>
                  ${props.model.email}
                </a>
                ${
                  props.model.phone
                    ? `
                      <span class='signature_email-sep sep' style='display: inline;'><br /></span>
                      <a class='link email signature_email-target sig-hide'
                        href='tel://${props.model.phone}'
                        style='#1976d2; text-decoration: none; display: inline;'
                      >${props.model.phone}</a>
                      </span>
                    `
                    : ''
                }
              </span>
            </div>
            <div>
              <span style='font-family: Helvetica, Arial, sans-serif; font-size: 12px; line-height: 16px; margin-bottom: 10px;'>
                <span style='font-weight: bold; color: rgb(33, 33, 33); display: inline;'
                  class='txt signature_companyname-target sig-hide'>Smartup Technology</span>
                  <br>
                <a class='link signature_website-target sig-hide' href='https://smartup.ru'
                  style='color: #1976d2; text-decoration: none; display: inline;'>www.smartup.ru</a>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <span>&nbsp;</span>
  `
)
</script>

<template>
  <div class="signature-preview">
    <button
      v-if="shouldDisplayCopy"
      class="signature-preview__copy"
      @click="copy"
    >
      Копировать
    </button>
    <div ref="preview" v-html="signature" />
  </div>
</template>

<style lang="scss" scoped>
.signature-preview {
  position: relative;
  padding: 2rem;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.signature-preview__copy {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;

  &:hover {
    color: rgba(0, 0, 0, 0.75);
    background: rgba(0, 0, 0, 0.05);
  }
}
</style>
