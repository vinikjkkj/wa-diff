__d(
  "WASmaxInStatusPublishPostNewsletterStatusResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInStatusPublishStatusAckMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "server_id",
        99,
        2147476647,
      );
      if (!r.success) return r;
      var a = o("WASmaxInStatusPublishStatusAckMixin").parseStatusAckMixin(
        e,
        t,
      );
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ serverId: r.value }, a.value),
          )
        : a;
    }
    l.parsePostNewsletterStatusResponseSuccess = e;
  },
  98,
);
