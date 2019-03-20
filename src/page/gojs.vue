<template>
  <div>
    <vGoExample></vGoExample>
    <vUserDefinedExample></vUserDefinedExample>
    <vDoubleTreeExample></vDoubleTreeExample>
  </div>
</template>

<script>
import vGoExample from "@/components/gojs/go_example";
import vUserDefinedExample from "@/components/gojs/user_defined_example";
import vDoubleTreeExample from "@/components/gojs/double_tree_example";
export default {
  data() {
    return {};
  },
  mounted() {
  },
  components: {
    vGoExample,
    vUserDefinedExample,
    vDoubleTreeExample
  }
};
</script>

<style>
</style>
