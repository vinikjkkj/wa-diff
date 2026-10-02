__d(
  "WASmaxInMessageDeliverBroadcastSingleEncMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeTextOrMediaSingleMixinGroup",
    "WASmaxInMessageDeliverRetryOrBroadcastRegularMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverContentTypeTextOrMediaSingleMixinGroup",
      ).parseContentTypeTextOrMediaSingleMixinGroup(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverRetryOrBroadcastRegularMixinGroup",
      ).parseRetryOrBroadcastRegularMixinGroup(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            contentTypeTextOrMediaSingleMixinGroup: n.value,
            retryOrBroadcastRegularMixinGroup: r.value,
          })
        : r;
    }
    l.parseBroadcastSingleEncMixin = e;
  },
  98,
);
