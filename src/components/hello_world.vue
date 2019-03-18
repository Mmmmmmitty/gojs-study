<template>
  <div id="myDiagramDiv" style="width:400px; height:150px; background-color: #DAE4E4;"></div>
</template>

<script>
export default {
  mounted() {
    var diagram = new go.Diagram("myDiagramDiv");
    diagram.model = new go.GraphLinksModel(
      [
        { key: "Hello" }, // two node data, in an Array
        { key: "World!" }
      ],
      [{ from: "Hello", to: "World!" }] // one link, in an Array
    );
  }
};
</script>

<style>
</style>
