__d(
  "isHelpTrayDeprecationEnabled",
  ["MAIBASurfacesUtils", "isHelpTrayDeprecationEligible", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e ? r("qex")._("2283") === !0 : r("qex")._("2386") === !0;
    }
    function s(e) {
      return e ? r("qex")._("74") === !0 : r("qex")._("357") === !0;
    }
    function u(e) {
      return e ? r("qex")._("435") === !0 : r("qex")._("467") === !0;
    }
    function c(t) {
      if ((t === void 0 && (t = !0), !r("isHelpTrayDeprecationEligible")()))
        return !1;
      var n = o("MAIBASurfacesUtils").getCurrentAutoLoggingTool();
      return n != null && o("MAIBASurfacesUtils").ADS_MANAGER_SURFACES.has(n)
        ? s(t)
        : n === "MBS"
          ? u(t)
          : e(t);
    }
    l.default = c;
  },
  98,
);
