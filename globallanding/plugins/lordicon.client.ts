import { defineElement } from '@lordicon/element'
import lottie from 'lottie-web'

export default defineNuxtPlugin(() => {
  defineElement(lottie as any)
})
