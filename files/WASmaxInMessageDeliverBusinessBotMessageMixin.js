__d(
  "WASmaxInMessageDeliverBusinessBotMessageMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "biz_bot",
        o("WASmaxInMessageDeliverEnums").ENUM_1_3,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ botBizBot: r.value })
        : r;
    }
    l.parseBusinessBotMessageMixin = e;
  },
  98,
);
