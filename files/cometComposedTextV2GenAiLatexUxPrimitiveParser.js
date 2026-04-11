__d(
  "cometComposedTextV2GenAiLatexUxPrimitiveParser",
  [
    "CometComposedTextV2RootNode.react",
    "CometComposedTextV2RootNodeRenderer.react",
    "cometComposedTextV2NodeBuilders",
    "cometComposedTextV2NodeKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.match(/^\$\$([\s\S]*)\$\$$/);
      return t ? t[1] : e;
    }
    function s(t) {
      var n = e(t.item != null ? t.item.latex_expression : t.latex_expression);
      return new (o(
        "CometComposedTextV2RootNode.react",
      ).CometComposedTextV2RootNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2RootNodeRenderer.react"),
      ).append(o("cometComposedTextV2NodeBuilders").buildMathNode(n));
    }
    l.default = s;
  },
  98,
);
