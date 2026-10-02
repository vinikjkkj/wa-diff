__d(
  "WASmaxInMessageDeliverQualityControlMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "decision_source");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "value",
        o("WASmaxInMessageDeliverEnums").ENUM_DF_DS_FC_GE,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ value: n.value })
        : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "biz");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "quality_control",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        a.value,
        "source_type",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_ADSMANAGER_MAIBA_MAIBAAIHUB_MARKETINGMESSAGESWITHOPTIMIZATIONS_THIRDPARTY_UNIFIEDINBOX,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        a.value,
        "decision_id",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "decision_source",
        0,
        1 / 0,
        e,
      );
      return s.success
        ? o("WAResultOrError").makeResult({
            bizQualityControlSourceType: i.value,
            bizQualityControlDecisionId: l.value,
            bizQualityControlDecisionSource: s.value,
          })
        : s;
    }
    ((l.parseQualityControlBizQualityControlDecisionSource = e),
      (l.parseQualityControlMixin = s));
  },
  98,
);
