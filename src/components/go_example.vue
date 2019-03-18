<template>
  <div>
    <div id="myDiagramDiv" style="width:100%; height:600px; background-color: #DAE4E4;"></div>
  </div>
</template>

<script>
import aochuang from "../assets/images/manwei/aochuang.png";
import elingqishi from "../assets/images/manwei/elingqishi.png";
import feihongnvwu from "../assets/images/manwei/feihongnvwu.png";
import hongkulou from "../assets/images/manwei/hongkulou.png";
import jiaochagu from "../assets/images/manwei/jiaochagu.png";
import luoji from "../assets/images/manwei/luoji.png";
import mieba from "../assets/images/manwei/mieba.png";
import qiyiboshi from "../assets/images/manwei/qiyiboshi.png";
import pilihuo from "../assets/images/manwei/pilihuo.png";
import zhengfuzhekang from "../assets/images/manwei/zhengfuzhekang.png";
import gangtiexia from "../assets/images/manwei/gangtiexia.png";
export default {
  data() {
    return {};
  },
  mounted() {
    let go = this.go;
    var $ = go.GraphObject.make;

    var myDiagram = $(go.Diagram, "myDiagramDiv", {
      initialContentAlignment: go.Spot.Center, // 居中显示内容
      "undoManager.isEnabled": false, // 打开 Ctrl-Z 和 Ctrl-Y 撤销重做功能
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelNone, //鼠标滚轮事件禁止
      isReadOnly: true,
      layout: $(
        go.TreeLayout, // 1个特殊的树形排列 Diagram.layout布局
        { angle: 270, layerSpacing: 60 }
      )
    });

    // 我们早先定义的模板
    myDiagram.nodeTemplate = $(
      go.Node,
      "Horizontal",
      { background: "#fff" },
      $(
        go.Picture,
        { margin: 10, width: 50, height: 50, background: "#ddd" },
        new go.Binding("source")
      ),
      $(
        go.TextBlock,
        "Default Text",
        {
          margin: 12,
          width: 150,
          stroke: "#333",
          font: "bold 16px sans-serif"
        },
        new go.Binding("text", "name")
      )
    );

    // 定义一个直角路由形式的连线模板, 去掉箭头
    myDiagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      $(go.Shape, { strokeWidth: 2, stroke: "#555" }),
      $(
        go.TextBlock,
        {
          margin: 12,
          background:'#ccc',
          width: 30,
          stroke: "#333",
          font: "bold 16px sans-serif"
        },
        new go.Binding("text", "text")
      )
    ); // the link shape

    var model = $(go.TreeModel);
    model.nodeDataArray = [
      { text: "1:0", key: "1", name: "灭霸", source: mieba },
      { text: "1:0", key: "2", parent: "1", name: "奥创", source: aochuang },
      {
        text: "1:0",
        key: "3",
        parent: "1",
        name: "恶灵骑士",
        source: elingqishi
      },
      {
        text: "1:0",
        key: "4",
        parent: "3",
        name: "绯红女巫",
        source: feihongnvwu
      },
      { text: "1:0", key: "5", parent: "3", name: "红骷髅", source: hongkulou },
      {
        text: "1:0",
        key: "6",
        parent: "2",
        name: "奇异博士",
        source: qiyiboshi
      },
      { text: "1:0", key: "6", parent: "2", name: "钢铁侠", source: gangtiexia }
    ];
    myDiagram.model = model;
  }
};
</script>

<style>
</style>

