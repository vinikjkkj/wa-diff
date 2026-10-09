__d(
  "DGWBestEffortCallbacks",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n) {
      var e = !1,
        r = null;
      for (var o of t)
        try {
          o();
        } catch (t) {
          e || ((e = !0), (r = t));
        }
      e && n(r);
    };
    i.runCallbacksBestEffort = e;
  },
  66,
);
