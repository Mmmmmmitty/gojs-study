<template>
  <div>
    <div id="myDiagramDiv" style="width:100%; height:400px; background-color: #DAE4E4;"></div>
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
      isReadOnly: true // 只读
      // layout: $(
      //   go.TreeLayout, // 1个特殊的树形排列 Diagram.layout布局
      //   { angle: 270, layerSpacing: 60 }
      // )
    });

    // 上半部分节点模板
    let topNode = $(
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
    // 第三名节点模板
    let thirdNode = $(
      go.Node,
      "Horizontal",
      { background: "#fff",position: new go.Point(-180, 100) },
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
    // 第四名节点模板
    let fourthNode = $(
      go.Node,
      "Horizontal",
      { background: "#fff",position: new go.Point(180, 100) },
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
      $(go.TextBlock, new go.Binding("text", "text"))
    ); // the link shape
    //
    myDiagram.nodeTemplateMap.add('top',topNode)
    myDiagram.nodeTemplateMap.add('thirdNode',thirdNode)
    myDiagram.nodeTemplateMap.add('fourthNode',fourthNode)
    var model = $(go.TreeModel);
    model.nodeDataArray = [
      { key: "1", text: "asd\n", name: "灭霸", source: mieba,category:'top' },
      { key: "2", text: "asd\n", parent: "1", name: "奥创", source: aochuang,category:'top' },
      {
        key: "3",
        text: "asd\n",
        parent: "1",
        name: "恶灵骑士",
        source: elingqishi,category:'top'
      },
      {
        key: "4",
        text: "asd\n",
        parent: "3",
        name: "绯红女巫",
        source: feihongnvwu,category:'top'
      },
      { key: "5", text: "asd\n", parent: "3", name: "红骷髅", source: hongkulou,category:'top' },
      {
        key: "6",
        text: "asd\n",
        parent: "2",
        name: "奇异博士",
        source: qiyiboshi,category:'top'
      },
      { key: "6", text: "asd\n", parent: "2", name: "钢铁侠", source: gangtiexia,category:'top' },
      { key: "third", text: "asd\n", name: "第三名", source: gangtiexia,category:'thirdNode' },
      { key: "fourth", text: "asd\n", parent: "third", name: "第四名", source: gangtiexia,category:'fourthNode' }
    ];
    myDiagram.model = model;
    myDiagram.layout = $(
      go.TreeLayout, // 1个特殊的树形排列 Diagram.layout布局
      { angle: 270, layerSpacing: 60 }
    );
  }
};
</script>

<style>
canvas {
  border: 0px;
  outline: none;
}
</style>

