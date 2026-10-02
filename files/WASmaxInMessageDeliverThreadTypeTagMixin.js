__d(
  "WASmaxInMessageDeliverThreadTypeTagMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverThreadTypeTagEnumOrLegacyMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverThreadTypeTagEnumOrLegacyMixinGroup",
      ).parseThreadTypeTagEnumOrLegacyMixinGroup(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            metaThreadTypeTagEnumOrLegacyMixinGroup: r.value,
          })
        : r;
    }
    l.parseThreadTypeTagMixin = e;
  },
  98,
);
