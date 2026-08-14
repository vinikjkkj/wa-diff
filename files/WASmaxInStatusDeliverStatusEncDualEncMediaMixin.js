__d(
  "WASmaxInStatusDeliverStatusEncDualEncMediaMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncMediaTypeMixin",
    "WASmaxInStatusDeliverEncTypeSenderKeyOrIndividualMixinGroup",
    "WASmaxInStatusDeliverEncVersion",
    "WASmaxInStatusDeliverStatusContentTypeMediaMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o(
          "WASmaxInStatusDeliverEncMediaTypeMixin",
        ).parseEncMediaTypeMixin(e),
        r = o("WASmaxInStatusDeliverEncVersion").parseEncVersion(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInStatusDeliverEncTypeSenderKeyOrIndividualMixinGroup",
      ).parseEncTypeSenderKeyOrIndividualMixinGroup(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            encMediaTypeMixin: n.success ? n.value : null,
            encVersion: r.value,
            encTypeSenderKeyOrIndividualMixinGroup: a.value,
          })
        : a;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "status");
      if (!n.success) return n;
      var r = o(
        "WASmaxInStatusDeliverStatusContentTypeMediaMixin",
      ).parseStatusContentTypeMediaMixin(t);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(t, "enc", 2, 2, e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, { enc: a.value }),
          )
        : a;
    }
    ((l.parseStatusEncDualEncMediaEnc = e),
      (l.parseStatusEncDualEncMediaMixin = s));
  },
  98,
);
