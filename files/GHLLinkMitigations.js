__d(
  "GHLLinkMitigations",
  ["GHLMitigationsGating", "cr:19714", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = r("react")),
      u = function (t) {
        var e = t;
        return (
          o(
            "GHLMitigationsGating",
          ).getIsGHLRandomElementWrapperForLinksEnabled() &&
            n("cr:19714") &&
            (e = s.jsx(n("cr:19714"), {
              elementTag: "randomSpan",
              children: e,
            })),
          e
        );
      };
    l.createGHLLinkContent = u;
  },
  98,
);
