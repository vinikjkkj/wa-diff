__d(
  "WASmaxInGroupsIdentityTypes",
  [
    "WAResultOrError",
    "WASmaxInGroupsPhoneNumberAndUsernameAttMixin",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsPhoneNumberAndUsernameAttMixin",
      ).parsePhoneNumberAndUsernameAttMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "PhoneNumberAndUsernameAtt",
          value: t.value,
        });
      var n = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "PhoneNumber",
          value: n.value,
        });
      var r = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "UsernameAtt",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PhoneNumberAndUsernameAtt", "PhoneNumber", "UsernameAtt"],
            [t, n, r],
          );
    }
    l.parseIdentityTypes = e;
  },
  98,
);
