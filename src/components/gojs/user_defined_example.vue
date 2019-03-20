<template>
  <div
    id="userDefinedDiagram"
    style="width:100%; height:500px; background-color: #DAE4E4;margin-top:20px;"
  ></div>
</template>

<script>
import aochuang from "@/assets/images/manwei/aochuang.png";
import elingqishi from "@/assets/images/manwei/elingqishi.png";
import feihongnvwu from "@/assets/images/manwei/feihongnvwu.png";
import hongkulou from "@/assets/images/manwei/hongkulou.png";
import jiaochagu from "@/assets/images/manwei/jiaochagu.png";
import luoji from "@/assets/images/manwei/luoji.png";
import mieba from "@/assets/images/manwei/mieba.png";
import qiyiboshi from "@/assets/images/manwei/qiyiboshi.png";
import pilihuo from "@/assets/images/manwei/pilihuo.png";
import zhengfuzhekang from "@/assets/images/manwei/zhengfuzhekang.png";
import gangtiexia from "@/assets/images/manwei/gangtiexia.png";
export default {
  data() {
    return {};
  },
  mounted() {
    let go = this.go;
    let $ = go.GraphObject.make;
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
    // 第一第三节点
    let third = $(
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
    // 定义连线
    let nodeLink = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      $(go.Shape, { strokeWidth: 2, stroke: "#555" }),
      $(go.TextBlock, new go.Binding("text", "text"))
    );
    // 数据
    let data = [
      { key: "Root", text: "asd", name: "灭霸", source: mieba, category: "first" },
      {
        key: "2",
        text: "asd\n",
        parent: "Root",
        name: "奥创",
        source: aochuang,
        category: "first"
      },
      {
        key: "3",
        text: "asd\n",
        parent: "Root",
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
        key:'third',
        text: "asd\n",
        name: "钢侠",
        source: gangtiexia,
        category: "second"
      },
      {
        text: "asd\n ",
        name: "钢铁侠",
        parent: "third",
        source: gangtiexia,
        category: "third"
      }
    ];
    // var templmap = new go.Map();
    // templmap.add("first", first); // 添加节点 add()函数第一个参数对应数据中category属性
    // templmap.add("second", second);
    // templmap.add("third", third);
    // templmap.add("", myDiagram.nodeTemplate);

    // myDiagram.nodeTemplateMap = templmap;
    myDiagram.nodeTemplateMap.add("first", first)
    myDiagram.nodeTemplateMap.add("second", second)
    myDiagram.nodeTemplateMap.add("third", third)
    myDiagram.linkTemplate = nodeLink;
    // myDiagram.layout = nodeLayout; //定义布局
    let model = $(go.TreeModel);
    model.nodeDataArray = data;
    myDiagram.model = model;
    this.doubleLayout(myDiagram);
  },
  methods: {
    doubleLayout(diagram) {
      // Within this function override the definition of '$' from jQuery:
      var go = this.go;
      var $ = go.GraphObject.make; // for conciseness in defining templates
      diagram.startTransaction("Double Tree Layout");

      // split the nodes and links into two Sets, depending on direction
      var leftParts = new go.Set(/*go.Part*/);
      var rightParts = new go.Set(/*go.Part*/);
      this.separatePartsByLayout(diagram, leftParts, rightParts);
      // but the ROOT node will be in both collections

      // create and perform two TreeLayouts, one in each direction,
      // without moving the ROOT node, on the different subsets of nodes and links
      var layout1 = $(go.TreeLayout, {
        angle: 270,
        arrangement: go.TreeLayout.ArrangementFixedRoots,
        setsPortSpot: false
      });

      var layout2 = $(go.TreeLayout, {
        angle: 270,
        arrangement: go.TreeLayout.ArrangementFixedRoots,
        // setsPortSpot: false
      });

      layout1.doLayout(leftParts);
      layout2.doLayout(rightParts);

      diagram.commitTransaction("Double Tree Layout");
    },
    separatePartsByLayout(diagram, leftParts, rightParts) {
      var root = diagram.findNodeForKey("Root");
      if (root === null) return;
      // the ROOT node is shared by both subtrees!
      //leftParts.add(root);
      rightParts.add(root);
      // look at all of the immediate children of the ROOT node
      root.findTreeChildrenNodes().each(function(child) {
        // in what direction is this child growing?
        var dir = child.data.dir;
        var coll = dir === "top" ? leftParts : rightParts;
        // add the whole subtree starting with this child node
        coll.addAll(child.findTreeParts());
        // and also add the link from the ROOT node to this child node
        coll.add(child.findTreeParentLink());
      });
    }
  }
};
</script>

<style>
</style>
