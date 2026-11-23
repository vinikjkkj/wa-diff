__d(
  "AdsConnectedSourcesProductsOptOutUtils",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a =
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null
            ? void 0
            : t.product_extensions;
      return (
        (a == null ? void 0 : a.enroll_status) === "OPT_OUT" &&
        (a == null || (n = a.action_metadata) == null ? void 0 : n.type) ===
          "STICKY" &&
        (a == null ||
        (o = a.customizations) == null ||
        (o = o.pe_carousel) == null
          ? void 0
          : o.enroll_status) !== "OPT_IN" &&
        r("justknobx")._("7591")
      );
    }
    l.shouldSkipDefaultCatalogForStickyProductsOptOut = e;
  },
  98,
);
