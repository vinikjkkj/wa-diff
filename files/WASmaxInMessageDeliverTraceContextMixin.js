__d(
  "WASmaxInMessageDeliverTraceContextMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverRequestOrTraceIDMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "trace");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverRequestOrTraceIDMixinGroup",
      ).parseRequestOrTraceIDMixinGroup(t.value);
      return n.success
        ? o("WAResultOrError").makeResult({
            traceRequestOrTraceIDMixinGroup: n.value,
          })
        : n;
    }
    l.parseTraceContextMixin = e;
  },
  98,
);
