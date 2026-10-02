__d(
  "WASmaxInMessageDeliverClientReportingTokenValidationPolicyMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "reporting");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        t.value,
        "validation_policy",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_DROPINVALIDREPORTINGTOKEN_DROPMISSINGREPORTINGTOKEN,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            reportingValidationPolicy: n.value,
          })
        : n;
    }
    l.parseClientReportingTokenValidationPolicyMixin = e;
  },
  98,
);
