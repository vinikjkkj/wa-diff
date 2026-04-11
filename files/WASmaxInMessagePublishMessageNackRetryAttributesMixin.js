__d(
  "WASmaxInMessagePublishMessageNackRetryAttributesMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "backoff", 0, 86400);
      return n.success
        ? o("WAResultOrError").makeResult({ backoff: n.value })
        : n;
    }
    l.parseMessageNackRetryAttributesMixin = e;
  },
  98,
);
