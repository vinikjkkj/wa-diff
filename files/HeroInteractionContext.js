__d(
  "HeroInteractionContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = function () {},
      c = {
        consumeBootload: u,
        hold: function () {
          return "";
        },
        logHeroRender: u,
        logMetadata: u,
        logPageletVC: u,
        logReactCommit: u,
        logReactPostCommit: u,
        logReactRender: u,
        pageletStack: [],
        registerPlaceholder: u,
        removePlaceholder: u,
        suspenseCallback: u,
        unhold: u,
      },
      d = s.createContext(c);
    ((l.DEFAULT_CONTEXT_VALUE = c), (l.Context = d));
  },
  98,
);
