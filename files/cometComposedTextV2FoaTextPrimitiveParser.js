__d(
  "cometComposedTextV2FoaTextPrimitiveParser",
  [
    "CometComposedTextV2RootNode.react",
    "CometComposedTextV2RootNodeRenderer.react",
    "cometComposedTextV2MarkdownParser",
    "cometComposedTextV2NodeBuilders",
    "cometComposedTextV2NodeKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.text;
      if (n == null || n === "")
        return o("cometComposedTextV2NodeBuilders")
          .buildRootNode()
          .append(o("cometComposedTextV2NodeBuilders").buildTextNode(""));
      var a = r("cometComposedTextV2MarkdownParser")(n, null, t);
      return new (o(
        "CometComposedTextV2RootNode.react",
      ).CometComposedTextV2RootNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2RootNodeRenderer.react"),
      ).appendMany(a);
    }
    l.default = e;
  },
  98,
);
