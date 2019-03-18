<template>
  <div
    id="userDefinedDiagram"
    style="width:100%; height:500px; background-color: #DAE4E4;margin-top:20px;"
  ></div>
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
    let $ = go.GraphObject.make;
    // if (window.goSamples) goSamples()
    // 初始化
    let myDiagram = $(go.Diagram, "userDefinedDiagram", {
      initialContentAlignment: go.Spot.Center, // 居中显示内容
      "undoManager.isEnabled": false, // 打开 Ctrl-Z 和 Ctrl-Y 撤销重做功能
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelNone, //鼠标滚轮事件禁止
      isReadOnly: true // 只读
    });
    // 定义布局
    let nodeLayout = $(
      go.TreeLayout, // 1个特殊的树形排列 Diagram.layout布局
      { angle: 270, layerSpacing: 60 }
    );
    // 定义第一节点
    let first = $(
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
    // 定义第二节点
    let second = $(
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
    // 第一第三节点
    let third = $(
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
    // 定义连线
    let nodeLink = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      $(go.Shape, { strokeWidth: 2, stroke: "#555" }),
      $(go.TextBlock, new go.Binding("text", "text"))
    );
    // 数据
    let data = [
      { key: "1", text: "asd", name: "灭霸", source: mieba, category: "first" },
      {
        key: "2",
        text: "asd\n",
        parent: "1",
        name: "奥创",
        source: aochuang,
        category: "first"
      },
      {
        key: "3",
        text: "asd\n",
        parent: "1",
        name: "恶灵骑士",
        source: elingqishi,
        category: "first"
      },
      {
        key: "4",
        text: "asd\n",
        parent: "3",
        name: "绯红女巫",
        source: feihongnvwu,
        category: "first"
      },
      {
        key: "5",
        text: "asd\n",
        parent: "3",
        name: "红骷髅",
        source: hongkulou,
        category: "first"
      },
      {
        key: "6",
        text: "asd\n",
        parent: "2",
        name: "奇异博士",
        source: qiyiboshi,
        category: "first"
      },
      {
        key: "6",
        text: "asd\n",
        parent: "2",
        name: "钢铁侠",
        source: gangtiexia,
        category: "first"
      },
      {
        text: "asd\n",
        name: "钢侠",
        source: gangtiexia,
        category: "second"
      },
      {
        text: "asd\n ",
        name: "钢铁侠",
        source: gangtiexia,
        category: "third"
      }
    ];
    var templmap = new go.Map(); 
    templmap.add("first", first); // 添加节点 add()函数第一个参数对应数据中category属性
    templmap.add("second", second);
    templmap.add("third", third);
    templmap.add("", myDiagram.nodeTemplate);

    myDiagram.nodeTemplateMap = templmap;
    // myDiagram.nodeTemplateMap.add("", mainNode);
    // myDiagram.nodeTemplateMap.add("", secondNode);
    myDiagram.linkTemplate = nodeLink;
    myDiagram.layout = nodeLayout;
    let model = $(go.TreeModel);
    model.nodeDataArray = data;
    myDiagram.model = model;
  }
};
</script>

<style>
</style>
