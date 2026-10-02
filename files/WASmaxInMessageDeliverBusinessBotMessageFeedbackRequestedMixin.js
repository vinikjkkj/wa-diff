__d(
  "WASmaxInMessageDeliverBusinessBotMessageFeedbackRequestedMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "feedback_requested",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ botFeedbackRequested: r.value })
        : r;
    }
    l.parseBusinessBotMessageFeedbackRequestedMixin = e;
  },
  98,
);
