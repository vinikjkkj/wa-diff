__d(
  "WASmaxInMessageDeliverEncTypeMessageSecretMessageMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncPayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "msmsg",
      );
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverEncPayloadMixin").parseEncPayloadMixin(
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: n.value }, r.value),
          )
        : r;
    }
    l.parseEncTypeMessageSecretMessageMixin = e;
  },
  98,
);
