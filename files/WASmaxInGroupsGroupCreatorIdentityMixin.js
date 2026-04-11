__d(
  "WASmaxInGroupsGroupCreatorIdentityMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupCreatorCountryCodeMixin",
    "WASmaxInGroupsGroupCreatorPhoneNumberMixin",
    "WASmaxInGroupsGroupCreatorUsernameMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
          "WASmaxInGroupsGroupCreatorPhoneNumberMixin",
        ).parseGroupCreatorPhoneNumberMixin(e),
        n = o(
          "WASmaxInGroupsGroupCreatorUsernameMixin",
        ).parseGroupCreatorUsernameMixin(e),
        r = o(
          "WASmaxInGroupsGroupCreatorCountryCodeMixin",
        ).parseGroupCreatorCountryCodeMixin(e);
      return o("WAResultOrError").makeResult({
        groupCreatorPhoneNumberMixin: t.success ? t.value : null,
        groupCreatorUsernameMixin: n.success ? n.value : null,
        groupCreatorCountryCodeMixin: r.success ? r.value : null,
      });
    }
    l.parseGroupCreatorIdentityMixin = e;
  },
  98,
);
