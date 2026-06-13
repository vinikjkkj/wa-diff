__d(
  "cometComposedTextV2GenAiImagePrimitiveParser",
  [
    "cometComposedTextV2GenAiImagePrimitiveToImageItem",
    "cometComposedTextV2NodeBuilders",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("cometComposedTextV2GenAiImagePrimitiveToImageItem")(e);
      return n == null
        ? null
        : o("cometComposedTextV2NodeBuilders")
            .buildRootNode()
            .append(
              o("cometComposedTextV2NodeBuilders").buildImageNode(n.url, t),
            );
    }
    l.default = e;
  },
  98,
);
