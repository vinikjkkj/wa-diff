__d(
  "WASmaxInMessageDeliverRequestOrTraceIDMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverRequestIDMixin",
    "WASmaxInMessageDeliverTraceIDMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverRequestIDMixin").parseRequestIDMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "RequestID",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverTraceIDMixin").parseTraceIDMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "TraceID", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["RequestID", "TraceID"],
            [t, n],
          );
    }
    l.parseRequestOrTraceIDMixinGroup = e;
  },
  98,
);
