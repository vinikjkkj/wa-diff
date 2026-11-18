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
      };
    function d(e, t, n) {
      if (e.forceUnholdWhenInvisible === !0) return n != null;
      var r = e.interactionUnholdWhenInvisible;
      return r != null ? r && n != null : t;
    }
    var m = s.createContext(c);
    ((l.DEFAULT_CONTEXT_VALUE = c),
      (l.isUnholdWhenInvisible = d),
      (l.Context = m));
  },
  98,
);
