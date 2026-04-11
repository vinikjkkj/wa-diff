__d(
  "cometComposedTextV2GenAiSpacerPrimitiveParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = (t = e.spacing) != null ? t : 1;
      if (n <= 1)
        return o("cometComposedTextV2NodeBuilders")
          .buildRootNode()
          .append(
            o("cometComposedTextV2NodeBuilders").buildThematicBreakNode(),
          );
      for (
        var r = o("cometComposedTextV2NodeBuilders").buildRootNode(), a = 0;
        a < n;
        a++
      )
        r.append(o("cometComposedTextV2NodeBuilders").buildNewLineNode());
      return r;
    }
    l.default = e;
  },
  98,
);
