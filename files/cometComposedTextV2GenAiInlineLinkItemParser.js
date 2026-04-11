__d(
  "cometComposedTextV2GenAiInlineLinkItemParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("cometComposedTextV2NodeBuilders").buildLinkNode(e.url);
      return (
        n.append(
          o("cometComposedTextV2NodeBuilders").buildTextNode(
            e.display_name || t,
          ),
        ),
        [n]
      );
    }
    l.default = e;
  },
  98,
);
