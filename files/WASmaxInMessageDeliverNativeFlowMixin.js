__d(
  "WASmaxInMessageDeliverNativeFlowMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "native_flow_name",
        o("WASmaxInMessageDeliverEnums")
          .ENUM__CALLPERMISSIONREQUEST_CATALOGMESSAGE_MENUOPTIONS_ORDERDETAILS_ORDERSTATUS_OTP_PAYMENTINFO_PAYMENTKEYINFO_PAYMENTMETHOD_PAYMENTSTATUS_SPLITPAYMENT_VIDEOCALL_VOICECALL,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "native_flow_version",
        1,
        void 0,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            bizNativeFlowName: r.value,
            bizNativeFlowVersion: a.value,
          })
        : a;
    }
    l.parseNativeFlowMixin = e;
  },
  98,
);
