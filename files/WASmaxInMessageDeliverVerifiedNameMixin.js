__d(
  "WASmaxInMessageDeliverVerifiedNameMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverVerifiedNameCertificateMixin",
    "WASmaxInMessageDeliverVerifiedNameLevelMixin",
    "WASmaxInMessageDeliverVerifiedNameNameMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverVerifiedNameNameMixin",
      ).parseVerifiedNameNameMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverVerifiedNameLevelMixin",
      ).parseVerifiedNameLevelMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverVerifiedNameCertificateMixin",
      ).parseVerifiedNameCertificateMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, r.value, {
          verifiedNameCertificateMixin: a.success ? a.value : null,
        }),
      );
    }
    l.parseVerifiedNameMixin = e;
  },
  98,
);
