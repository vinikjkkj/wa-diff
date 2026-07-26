__d(
  "WAWebAttachMenuStrings",
  ["fbt", "WAWebOrderGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Catalog");
    }
    function u() {
      return s._(/*BTDS*/ "Document");
    }
    function c() {
      return o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled()
        ? s._(/*BTDS*/ "Charge")
        : s._(/*BTDS*/ "Order");
    }
    ((l.CatalogText = e), (l.DocumentText = u), (l.OrderText = c));
  },
  226,
);
