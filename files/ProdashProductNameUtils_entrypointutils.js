__d(
  "ProdashProductNameUtils.entrypointutils",
  [
    "FBCreatorToolkitProductNameVariant",
    "ProdashProductNameStrings",
    "ProdashProductNameVariant",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return r("gkx")("9259") ? !0 : (e = r("gkx")("25839")) != null ? e : !1;
    }
    function s() {
      var e;
      return (e = r("FBCreatorToolkitProductNameVariant").cast(
        r("ProdashProductNameVariant").variant,
      )) != null
        ? e
        : "professional_dashboard";
    }
    function u() {
      return (function (e) {
        if (e === "business_dashboard")
          return r("ProdashProductNameStrings").TITLE_BUSINESS_DASHBOARD;
        if (e === "creator_dashboard")
          return r("ProdashProductNameStrings").TITLE_CREATOR_DASHBOARD;
        if (e === "dashboard")
          return r("ProdashProductNameStrings").TITLE_RENAMED;
        if (e === "professional_dashboard")
          return r("ProdashProductNameStrings").TITLE;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(s());
    }
    function c(e) {
      return (function (t) {
        if (t === "professional_dashboard") return e.professionalDashboard;
        if (t === "dashboard") return e.dashboard;
        if (t === "creator_dashboard") return e.creatorDashboard;
        if (t === "business_dashboard") return e.businessDashboard;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(s());
    }
    ((l.isProdashProductRenameEnabled = e),
      (l.getProdashProductName = u),
      (l.selectProdashString = c));
  },
  98,
);
