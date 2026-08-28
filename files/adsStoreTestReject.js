__d(
  "adsStoreTestReject",
  ["AdsLoadState_LEGACY", "LoadObject", "isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        r("isFalsey")(e) ||
        (typeof e == "object" &&
          e != null &&
          e.loadState === r("AdsLoadState_LEGACY").ERROR) ||
        (e instanceof r("LoadObject") && e.hasError())
      );
    }
    l.default = e;
  },
  98,
);
