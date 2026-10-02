__d(
  "WASmaxInMessageDeliverSingleSelectOrProductListMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverProductListMixin",
    "WASmaxInMessageDeliverSingleSelectListMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverSingleSelectListMixin",
      ).parseSingleSelectListMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SingleSelectList",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverProductListMixin").parseProductListMixin(
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ProductList",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["SingleSelectList", "ProductList"],
            [t, n],
          );
    }
    l.parseSingleSelectOrProductListMixinGroup = e;
  },
  98,
);
