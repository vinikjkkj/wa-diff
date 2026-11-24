__d(
  "AdsConnectedSourcesProductsOptOutUtils",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return u(e) && r("justknobx")._("7591");
    }
    function s(e, t, n) {
      var o;
      return (
        ((o = t.creative) == null ||
        (o = o.creative_sourcing_spec) == null ||
        (o = o.catalog) == null ||
        (o = o.action_metadata) == null
          ? void 0
          : o.type) === "DEFAULT" &&
        u(t, n) &&
        !u(e, n) &&
        r("justknobx")._("8713")
      );
    }
    function u(e, t) {
      var n, r, o;
      t === void 0 && (t = !1);
      var a =
        (n = e.creative) == null ||
        (n = n.degrees_of_freedom_spec) == null ||
        (n = n.creative_features_spec) == null
          ? void 0
          : n.product_extensions;
      return (
        (a == null ? void 0 : a.enroll_status) === "OPT_OUT" &&
        (a == null || (r = a.action_metadata) == null ? void 0 : r.type) ===
          "STICKY" &&
        (t ||
          (a == null ||
          (o = a.customizations) == null ||
          (o = o.pe_carousel) == null
            ? void 0
            : o.enroll_status) !== "OPT_IN")
      );
    }
    ((l.shouldSkipDefaultCatalogForStickyProductsOptOut = e),
      (l.shouldWithdrawDefaultCatalogForNewStickyProductsOptOut = s));
  },
  98,
);
