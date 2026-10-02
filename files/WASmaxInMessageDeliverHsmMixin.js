__d(
  "WASmaxInMessageDeliverHsmMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverHSMReviewMetadataMixin",
    "WASmaxInMessageDeliverQualityTokenMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "hsm");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverHSMReviewMetadataMixin",
      ).parseHSMReviewMetadataMixin(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverQualityTokenMixin",
      ).parseQualityTokenMixin(n.value);
      return o("WAResultOrError").makeResult({
        hsmHSMReviewMetadataMixin: r.value,
        hsmQualityTokenMixin: a.success ? a.value : null,
      });
    }
    l.parseHsmMixin = e;
  },
  98,
);
