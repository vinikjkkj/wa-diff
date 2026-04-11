__d(
  "WASmaxInBlocklistsBizOptOutResponseMixin",
  ["WAResultOrError", "WASmaxInBlocklistsBizOptOutIds", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "expiry_at",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxInBlocklistsBizOptOutIds").parseBizOptOutIds(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            action: t.value,
            category: n.value,
            expiryAt: r.value,
            bizOptOutIds: a.value,
          })
        : a;
    }
    l.parseBizOptOutResponseMixin = e;
  },
  98,
);
