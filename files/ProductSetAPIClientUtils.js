__d(
  "ProductSetAPIClientUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = "DEFAULT"),
        e === "PRODUCT_EXTENSIONS" ||
          e === "PRODUCT_EXTENSIONS_ELIGIBILITY_CHECK"
      );
    }
    function s() {
      return r("gkx")("14402");
    }
    var u = (function (e) {
      function t() {
        return e.call(this, "No catalogs with product sets found") || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    ((l.isA2CAPIImprovementEnabled = e),
      (l.isA2CLatencyLimitCutEnabled = s),
      (l.NoEligibleProductSetsError = u));
  },
  98,
);
