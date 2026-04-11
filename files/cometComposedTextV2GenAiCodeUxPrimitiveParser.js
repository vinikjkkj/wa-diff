__d(
  "cometComposedTextV2GenAiCodeUxPrimitiveParser",
  [
    "CometComposedTextV2CodeBlockNode.react",
    "CometComposedTextV2CodeBlockNodeRenderer.react",
    "CometComposedTextV2RootNode.react",
    "CometComposedTextV2RootNodeRenderer.react",
    "cometComposedTextV2NodeKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return new (o(
        "CometComposedTextV2CodeBlockNode.react",
      ).CometComposedTextV2CodeBlockNode)(
        {
          content: e.code_blocks
            .map(function (e) {
              return e.content;
            })
            .join(""),
          key: r("cometComposedTextV2NodeKey")(),
          language: e.language,
        },
        r("CometComposedTextV2CodeBlockNodeRenderer.react"),
      );
    }
    function s(t) {
      return new (o(
        "CometComposedTextV2RootNode.react",
      ).CometComposedTextV2RootNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2RootNodeRenderer.react"),
      ).append(e(t));
    }
    l.default = s;
  },
  98,
);
