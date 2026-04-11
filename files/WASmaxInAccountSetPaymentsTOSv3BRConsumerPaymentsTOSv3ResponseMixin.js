__d(
  "WASmaxInAccountSetPaymentsTOSv3BRConsumerPaymentsTOSv3ResponseMixin",
  ["WAResultOrError", "WASmaxInAccountEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "additional_notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "notice",
        o("WASmaxInAccountEnums")
          .ENUM_BRP2PCONSENT_BRPAYPRIVACYPOLICY_BRPAYTOS_BRPAYWATOS,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ notice: n.value })
        : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "accept_pay");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "service",
        "FBPAY",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "additional_notice",
        1,
        10,
        e,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            service: r.value,
            additionalNotice: a.value,
          })
        : a;
    }
    ((l.parseSetPaymentsTOSv3BRConsumerPaymentsTOSv3ResponseAdditionalNotice =
      e),
      (l.parseSetPaymentsTOSv3BRConsumerPaymentsTOSv3ResponseMixin = s));
  },
  98,
);
