__d(
  "WASmaxInStatusPublishStatusApplicationNegativeAckMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "application_error",
        0,
        void 0,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ applicationError: n.value })
        : n;
    }
    l.parseStatusApplicationNegativeAckMixin = e;
  },
  98,
);
