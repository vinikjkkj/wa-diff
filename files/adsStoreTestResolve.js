__d(
  "adsStoreTestResolve",
  ["AdsLoadState_LEGACY", "LoadObject", "adsStoreTestResolveAll"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e)
        if (e.loadState) {
          if (e.loadState === r("AdsLoadState_LEGACY").LOADED) return !0;
        } else {
          if (e instanceof r("LoadObject")) return e.hasValueWithoutError();
          if (!t) return r("adsStoreTestResolveAll")(e);
        }
      return !1;
    }
    l.default = e;
  },
  98,
);
