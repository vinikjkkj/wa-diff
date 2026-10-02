__d(
  "WASmaxInMessageDeliverBizEngagementDataMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "engagement",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "conversation_state",
        o("WASmaxInMessageDeliverEnums").ENUM_CLOSED_OPEN,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "customer_service_state",
        o("WASmaxInMessageDeliverEnums").ENUM_CLOSED_OPEN,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            bizEngagementConversationState: a.value,
            bizEngagementCustomerServiceState: i.value,
          })
        : i;
    }
    l.parseBizEngagementDataMixin = e;
  },
  98,
);
