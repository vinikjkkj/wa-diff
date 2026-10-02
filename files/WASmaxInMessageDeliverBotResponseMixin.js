__d(
  "WASmaxInMessageDeliverBotResponseMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bot");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "edit_target_id",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "sender_timestamp_ms",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "edit",
        o("WASmaxInMessageDeliverEnums").ENUM_FIRST_FULL_INNER_LAST,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "voice",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            editTargetId: n.value,
            senderTimestampMs: r.value,
            edit: a.value,
            type: i.value,
          })
        : i;
    }
    l.parseBotResponseMixin = e;
  },
  98,
);
