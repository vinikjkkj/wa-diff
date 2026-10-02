__d(
  "WASmaxInMessageDeliverBizAcceptTsMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "accept_ts",
        0,
        void 0,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ bizAcceptTs: r.value })
        : r;
    }
    l.parseBizAcceptTsMixin = e;
  },
  98,
);
