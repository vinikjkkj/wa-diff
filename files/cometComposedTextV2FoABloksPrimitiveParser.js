__d(
  "cometComposedTextV2FoABloksPrimitiveParser",
  [
    "CometComposedTextV2UnsupportedURType.react",
    "cometComposedTextV2NodeBuilders",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return (t == null || (n = t.renderers) == null
        ? void 0
        : n.foABloksNodeRenderer) == null
        ? o("cometComposedTextV2NodeBuilders")
            .buildRootNode()
            .append(
              o(
                "CometComposedTextV2UnsupportedURType.react",
              ).buildUnsupportedURTypeNode(
                "FoaBloksPrimitive (missing renderer for " + e.type + ")",
              ),
            )
        : o("cometComposedTextV2NodeBuilders")
            .buildRootNode()
            .append(
              o("cometComposedTextV2NodeBuilders").buildFoABloksNode(
                e.type,
                e.data,
                e.uuid,
                e.initial_response,
                e.versioning_id,
              ),
            );
    }
    l.default = e;
  },
  98,
);
