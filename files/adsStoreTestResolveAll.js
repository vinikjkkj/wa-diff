__d(
  "adsStoreTestResolveAll",
  ["adsStoreTestReject", "adsStoreTestResolve"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e) {
        var t = !0;
        if (
          (e.forEach(function (e) {
            !r("adsStoreTestResolve")(e, !0) &&
              !r("adsStoreTestReject")(e) &&
              (t = !1);
          }),
          t)
        )
          return !0;
      }
      return !1;
    }
    l.default = e;
  },
  98,
);
