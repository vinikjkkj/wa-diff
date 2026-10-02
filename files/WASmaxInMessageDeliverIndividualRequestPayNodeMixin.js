__d(
  "WASmaxInMessageDeliverIndividualRequestPayNodeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBasePayNodeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "sender",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "expiry-ts");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "request-id");
      if (!a.success) return a;
      var i = o("WASmaxInMessageDeliverBasePayNodeMixin").parseBasePayNodeMixin(
        e,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { sender: n.value, expiryTs: r.value, requestId: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseIndividualRequestPayNodeMixin = e;
  },
  98,
);
