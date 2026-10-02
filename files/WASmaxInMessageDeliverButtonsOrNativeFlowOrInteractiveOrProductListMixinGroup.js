__d(
  "WASmaxInMessageDeliverButtonsOrNativeFlowOrInteractiveOrProductListMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverButtonsMixin",
    "WASmaxInMessageDeliverInteractiveMixin",
    "WASmaxInMessageDeliverNativeFlowMixin",
    "WASmaxInMessageDeliverProductListMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverButtonsMixin").parseButtonsMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Buttons",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverNativeFlowMixin").parseNativeFlowMixin(
        e,
      );
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NativeFlow",
          value: n.value,
        });
      var r = o("WASmaxInMessageDeliverInteractiveMixin").parseInteractiveMixin(
        e,
      );
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Interactive",
          value: r.value,
        });
      var a = o("WASmaxInMessageDeliverProductListMixin").parseProductListMixin(
        e,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "ProductList",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Buttons", "NativeFlow", "Interactive", "ProductList"],
            [t, n, r, a],
          );
    }
    l.parseButtonsOrNativeFlowOrInteractiveOrProductListMixinGroup = e;
  },
  98,
);
