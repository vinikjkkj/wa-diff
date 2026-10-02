__d(
  "WASmaxInMessageDeliverSingleSelectListOrProductListDeprecatedOrProductListMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverProductListDeprecatedMixin",
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
      var n = o(
        "WASmaxInMessageDeliverProductListDeprecatedMixin",
      ).parseProductListDeprecatedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ProductListDeprecated",
          value: n.value,
        });
      var r = o("WASmaxInMessageDeliverProductListMixin").parseProductListMixin(
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "ProductList",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["SingleSelectList", "ProductListDeprecated", "ProductList"],
            [t, n, r],
          );
    }
    l.parseSingleSelectListOrProductListDeprecatedOrProductListMixinGroup = e;
  },
  98,
);
