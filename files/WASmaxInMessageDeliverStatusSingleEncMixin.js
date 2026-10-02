__d(
  "WASmaxInMessageDeliverStatusSingleEncMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverRetryOrBroadcastRegularMixinGroup",
    "WASmaxInMessageDeliverStatusDeliverContentTypeMixins",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverStatusDeliverContentTypeMixins",
      ).parseStatusDeliverContentTypeMixins(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverRetryOrBroadcastRegularMixinGroup",
      ).parseRetryOrBroadcastRegularMixinGroup(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            statusDeliverContentTypeMixins: n.value,
            retryOrBroadcastRegularMixinGroup: r.value,
          })
        : r;
    }
    l.parseStatusSingleEncMixin = e;
  },
  98,
);
