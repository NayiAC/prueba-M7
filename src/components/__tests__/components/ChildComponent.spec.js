import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChildComponent from '@/components/ChildComponent.vue'

describe('ChildComponent.vue', () => {
  it('al hacer click en el botón se envía el texto', async () => {
    const wrapper = mount(ChildComponent)

    // ingreso del texto
    await wrapper.find('input').setValue('texto ingresado')
    // click en el botón
    await wrapper.find('button').trigger('click')
    // await wrapper.vm.$nextTick()

    console.log(wrapper.emitted('enviar-texto'))
    expect(wrapper.emitted('enviar-texto')[0]).toEqual(['texto ingresado'])
  })
})
