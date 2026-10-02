__d(
  "WASmaxInMessageDeliverGroupDualEncNonMediaMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentDualMixins",
    "WASmaxInMessageDeliverEncMediaTypeDeprecatedMixin",
    "WASmaxInMessageDeliverEncSenderType",
    "WASmaxInMessageDeliverEncVersion",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o(
          "WASmaxInMessageDeliverEncMediaTypeDeprecatedMixin",
        ).parseEncMediaTypeDeprecatedMixin(e),
        r = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(e);
      if (!r.success) return r;
      var a = o("WASmaxInMessageDeliverEncSenderType").parseEncSenderType(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            encMediaTypeDeprecatedMixin: n.success ? n.value : null,
            encVersion: r.value,
            encSenderType: a.value,
          })
        : a;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentDualMixins",
      ).parseContentDualMixins(t);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(t, "enc", 2, 2, e);
      return a.success
        ? o("WAResultOrError").makeResult({
            contentDualMixins: r.value,
            enc: a.value,
          })
        : a;
    }
    ((l.parseGroupDualEncNonMediaEnc = e),
      (l.parseGroupDualEncNonMediaMixin = s));
  },
  98,
);
