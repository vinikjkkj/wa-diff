__d(
  "WASmaxInMessageDeliverBizAutoResponseMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "auto_response",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_COUNTRY_ES_REACT_SYSMSGVERSION_TOS3_TRUE,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ bizAutoResponse: r.value })
        : r;
    }
    l.parseBizAutoResponseMixin = e;
  },
  98,
);
