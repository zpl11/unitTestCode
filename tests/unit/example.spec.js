import { mount, createLocalVue } from '@vue/test-utils'
import HelloWorld from "@/components/HelloWorld";

describe('HelloWorld.vue', () => {
    it('测试', () => {
      const wrapper = mount(HelloWorld);
      wrapper.find('button').trigger('click')
      expect(wrapper.vm.count).toBe(1)
    })
})
