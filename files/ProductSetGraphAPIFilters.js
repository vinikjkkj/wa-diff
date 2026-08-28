__d(
  "ProductSetGraphAPIFilters",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      (e === void 0 && (e = !1),
        t === void 0 && (t = !1),
        n === void 0 && (n = !1));
      var r = [{ field: "product_count", operator: "GREATER_THAN", value: 0 }];
      return (
        e &&
          r.push({
            field: "amazon_buy_with_prime_eligibility",
            operator: "EQUAL",
            value: "ELIGIBLE",
          }),
        t &&
          r.push({
            field: "is_all_products_product_set",
            operator: "EQUAL",
            value: 1,
          }),
        n &&
          r.push({
            field: "is_autogen_product_set",
            operator: "EQUAL",
            value: 0,
          }),
        r
      );
    }
    i.getProductSetFilters = e;
  },
  66,
);
