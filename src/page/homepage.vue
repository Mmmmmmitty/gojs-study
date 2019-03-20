<template>
  <div>
    <vGoExample></vGoExample>
    <!-- <vUserDefinedExample></vUserDefinedExample>
    <vDoubleTreeExample></vDoubleTreeExample> -->
  </div>
</template>

<script>
import vGoExample from '@/components/go_example'
import vUserDefinedExample from '@/components/user_defined_example'
import vDoubleTreeExample from '@/components/double_tree_example'
export default {
  data () {
    return {
      
    }
  },
  components:{
    vGoExample,
    vUserDefinedExample,
    vDoubleTreeExample
  }
}
</script>

<style>

</style>
