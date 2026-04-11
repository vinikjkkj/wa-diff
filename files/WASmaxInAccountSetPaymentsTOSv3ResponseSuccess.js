__d(
  "WASmaxInAccountSetPaymentsTOSv3ResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInAccountIQResultResponseMixin",
    "WASmaxInAccountSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3ResponseMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "accept_pay");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "outage",
        "1",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "sandbox",
        "1",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInAccountIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!l.success) return l;
      var s = o(
        "WASmaxInAccountSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3ResponseMixinGroup",
      ).parseSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3ResponseMixinGroup(
        r.value,
      );
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { acceptPayOutage: a.value, acceptPaySandbox: i.value },
              l.value,
              {
                acceptPaySetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3ResponseMixinGroup:
                  s.value,
              },
            ),
          )
        : s;
    }
    l.parseSetPaymentsTOSv3ResponseSuccess = e;
  },
  98,
);
