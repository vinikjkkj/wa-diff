__d(
  "WASmaxInSupportIQErrorNoticeRequiredMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "notice-required",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        475,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(e, "tos_version", 1, 65535);
      return a.success
        ? o("WAResultOrError").makeResult({
            text: n.value,
            code: r.value,
            tosVersion: a.value,
          })
        : a;
    }
    l.parseIQErrorNoticeRequiredMixin = e;
  },
  98,
);
