__d(
  "VideoPlayerAutoplayContexts",
  ["VideoPlayerAutoplayRulesProvider", "cometUniqueID", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).createContext,
      u = s({
        autoplayLocalRules: o(
          "VideoPlayerAutoplayRulesProvider",
        ).provideAutoplayRules("basic"),
        autoplayScopeID: "null",
      }),
      c = s(null);
    function d() {
      return "id-vpas-" + r("cometUniqueID")();
    }
    ((l.VideoAutoplayLocalScopeContext = u),
      (l.AutoplayApiContext = c),
      (l.makeAutoplayScopeID = d));
  },
  98,
);
