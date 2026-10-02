__d(
  "WASmaxInMessageDeliverBroadcastDualEncMediaMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverEncTypeSenderKeyAndBroadcastMediaOrIndividualMixinGroup",
    "WASmaxInMessageDeliverEncVersion",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverEncTypeSenderKeyAndBroadcastMediaOrIndividualMixinGroup",
      ).parseEncTypeSenderKeyAndBroadcastMediaOrIndividualMixinGroup(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            encVersion: n.value,
            encTypeSenderKeyAndBroadcastMediaOrIndividualMixinGroup: r.value,
          })
        : r;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rcat");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function u(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "rcat", s);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(t);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(t, "enc", 2, 2, e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { rcat: r.value, enc: i.value }),
          )
        : i;
    }
    ((l.parseBroadcastDualEncMediaEnc = e),
      (l.parseBroadcastDualEncMediaRcat = s),
      (l.parseBroadcastDualEncMediaMixin = u));
  },
  98,
);
