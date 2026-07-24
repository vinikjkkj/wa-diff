__d(
  "WASmaxInBrPaymentAliasMixin",
  ["WAResultOrError", "WASmaxInBrPaymentUPIAliasMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "alias");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
      );
      if (!n.success) return n;
      var r = o("WASmaxInBrPaymentUPIAliasMixin").parseUPIAliasMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: n.value }, r.value),
          )
        : r;
    }
    l.parseAliasMixin = e;
  },
  98,
);
