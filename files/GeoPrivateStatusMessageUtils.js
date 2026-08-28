__d(
  "GeoPrivateStatusMessageUtils",
  ["isEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n) {
        return !(e || (e = r("isEmpty")))(n);
      };
    function u(e) {
      var t = e.hasError,
        n = e.hasInfo,
        r = e.hasWarning,
        o = e.isValid;
      if (t) return "error";
      if (r) return "warning";
      if (o === !0) return "valid";
      if (n === !0) return "info";
    }
    function c(e) {
      return e === "error" || e === "warning";
    }
    ((l.isNotEmptyMessage = s), (l.getStatus = u), (l.getHasInvalidStatus = c));
  },
  98,
);
