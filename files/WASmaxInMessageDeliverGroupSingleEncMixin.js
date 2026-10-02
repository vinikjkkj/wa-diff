__d(
  "WASmaxInMessageDeliverGroupSingleEncMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentSingleMixins",
    "WASmaxInMessageDeliverGroupMessageTypes",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverContentSingleMixins",
      ).parseContentSingleMixins(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverGroupMessageTypes",
      ).parseGroupMessageTypes(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            contentSingleMixins: n.value,
            groupMessageTypes: r.value,
          })
        : r;
    }
    l.parseGroupSingleEncMixin = e;
  },
  98,
);
