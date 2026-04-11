__d(
  "WAWebBizAdCreationNoticesUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return Object.keys(e).some(function (t) {
        return e[t].some(function (e) {
          return e.severity === "ERROR" || e.severity === "BLOCKING_TIP";
        });
      });
    }
    function l(t, n) {
      var r = e(t);
      return r ? !0 : n != null ? e(n) : !1;
    }
    i.hasBlockingErrors = l;
  },
  66,
);
