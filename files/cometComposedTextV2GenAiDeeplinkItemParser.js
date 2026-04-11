__d(
  "cometComposedTextV2GenAiDeeplinkItemParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("cometComposedTextV2NodeBuilders").buildLinkNode(
        e.deeplink_url,
      );
      return (
        n.append(
          o("cometComposedTextV2NodeBuilders").buildTextNode(e.text || t),
        ),
        [n]
      );
    }
    l.default = e;
  },
  98,
);
