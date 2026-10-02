__d(
  "WASmaxInMessageDeliverBroadcastDualEncNonMediaMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxInMessageDeliverEncSenderType",
    "WASmaxInMessageDeliverEncVersion",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(e);
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverEncSenderType").parseEncSenderType(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            encVersion: n.value,
            encSenderType: r.value,
          })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(t);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(t, "enc", 2, 2, e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, { enc: a.value }),
          )
        : a;
    }
    ((l.parseBroadcastDualEncNonMediaEnc = e),
      (l.parseBroadcastDualEncNonMediaMixin = s));
  },
  98,
);
