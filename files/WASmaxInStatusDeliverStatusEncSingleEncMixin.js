__d(
  "WASmaxInStatusDeliverStatusEncSingleEncMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncTypeIndividualOrSenderKeyMixinGroup",
    "WASmaxInStatusDeliverEncVersion",
    "WASmaxInStatusDeliverStatusEncContentTypeMixins",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o("WASmaxInStatusDeliverEncVersion").parseEncVersion(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInStatusDeliverEncTypeIndividualOrSenderKeyMixinGroup",
      ).parseEncTypeIndividualOrSenderKeyMixinGroup(n.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInStatusDeliverStatusEncContentTypeMixins",
      ).parseStatusEncContentTypeMixins(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            encEncVersion: r.value,
            encEncTypeIndividualOrSenderKeyMixinGroup: a.value,
            statusEncContentTypeMixins: i.value,
          })
        : i;
    }
    l.parseStatusEncSingleEncMixin = e;
  },
  98,
);
