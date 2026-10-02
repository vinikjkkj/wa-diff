__d(
  "WASmaxInMessageDeliverInteractiveMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverNativeFlowMessageTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "interactive",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "v",
        "1",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInMessageDeliverNativeFlowMessageTypeMixin",
      ).parseNativeFlowMessageTypeMixin(r.value);
      return i.success
        ? o("WAResultOrError").makeResult({
            bizInteractiveV: a.value,
            bizInteractiveNativeFlowMessageTypeMixin: i.value,
          })
        : i;
    }
    l.parseInteractiveMixin = e;
  },
  98,
);
