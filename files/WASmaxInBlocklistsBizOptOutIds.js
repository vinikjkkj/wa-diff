__d(
  "WASmaxInBlocklistsBizOptOutIds",
  [
    "WAResultOrError",
    "WASmaxInBlocklistsBizOptOutBrandIDMixin",
    "WASmaxInBlocklistsBizOptOutJidMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInBlocklistsBizOptOutBrandIDMixin",
      ).parseBizOptOutBrandIDMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BizOptOutBrandID",
          value: t.value,
        });
      var n = o("WASmaxInBlocklistsBizOptOutJidMixin").parseBizOptOutJidMixin(
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "BizOptOutJid",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BizOptOutBrandID", "BizOptOutJid"],
            [t, n],
          );
    }
    l.parseBizOptOutIds = e;
  },
  98,
);
