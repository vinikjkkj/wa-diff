__d(
  "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
  ["arrayContainsArray", "deepEquals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ids"],
      s = ["ids", "skip_data_transform"];
    function u(t, n) {
      var o = t.ids,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = n.ids,
        l = n.skip_data_transform,
        u = babelHelpers.objectWithoutPropertiesLoose(n, s),
        c = o,
        d = i;
      return r("deepEquals")(a, u) && Array.isArray(c) && Array.isArray(d)
        ? r("arrayContainsArray")(c, d)
        : !1;
    }
    function c(e, t, n) {
      return e === n.actorID && u(n.variables, t);
    }
    l.default = c;
  },
  98,
);
