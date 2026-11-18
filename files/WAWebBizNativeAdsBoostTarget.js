__d(
  "WAWebBizNativeAdsBoostTarget",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return (e == null ? void 0 : e.type) === "catalog_product"
        ? e.productId
        : null;
    }
    function l(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "catalog_product" &&
          "productId" in e
        ) {
          var t = e.productId;
          return "catalog_product:" + t;
        }
        if (e == null) return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    ((i.getBoostedProductId = e), (i.getBoostTargetKey = l));
  },
  66,
);
