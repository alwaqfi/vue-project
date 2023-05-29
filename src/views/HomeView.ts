import { defineComponent, ref } from 'vue'
import Child from '@/components/Child.vue'

export default defineComponent({
  components: { Child },
  setup() {
    const childRef = ref<InstanceType<typeof Child>>()

    const clicked = function () {
      childRef.value?.print()
    }

    return {
      clicked
    }
  }
})
