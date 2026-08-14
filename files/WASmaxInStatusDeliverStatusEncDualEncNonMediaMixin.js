__d(
  "WASmaxInStatusDeliverStatusEncDualEncNonMediaMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncVersion",
    "WASmaxInStatusDeliverStatusContentTypeTextOrReactionMixinGroup",
    "WASmaxInStatusDeliverStatusEncSenderType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxInStatusDeliverEncVersion").parseEncVersion(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInStatusDeliverStatusEncSenderType",
      ).parseStatusEncSenderType(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            encVersion: n.value,
            statusEncSenderType: r.value,
          })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "status");
      if (!n.success) return n;
      var r = o(
        "WASmaxInStatusDeliverStatusContentTypeTextOrReactionMixinGroup",
      ).parseStatusContentTypeTextOrReactionMixinGroup(t);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(t, "enc", 2, 2, e);
      return a.success
        ? o("WAResultOrError").makeResult({
            statusContentTypeTextOrReactionMixinGroup: r.value,
            enc: a.value,
          })
        : a;
    }
    ((l.parseStatusEncDualEncNonMediaEnc = e),
      (l.parseStatusEncDualEncNonMediaMixin = s));
  },
  98,
);
