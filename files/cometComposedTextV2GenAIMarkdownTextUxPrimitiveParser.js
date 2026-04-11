__d(
  "cometComposedTextV2GenAIMarkdownTextUxPrimitiveParser",
  [
    "CometComposedTextV2RootNode.react",
    "CometComposedTextV2RootNodeRenderer.react",
    "cometComposedTextV2MarkdownParser",
    "cometComposedTextV2NodeKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("cometComposedTextV2MarkdownParser")(
        e.text,
        e.inline_entities,
        t,
      );
      return new (o(
        "CometComposedTextV2RootNode.react",
      ).CometComposedTextV2RootNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2RootNodeRenderer.react"),
      ).appendMany(n);
    }
    l.default = e;
  },
  98,
);
