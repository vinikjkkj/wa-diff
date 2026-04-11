__d(
  "WASmaxInGroupsPromoteDemoteAdminResponseSuccessMultiAdmin",
  [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "admin",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "error",
        o("WASmaxInGroupsEnums").ENUM_403_404_406_419,
      );
      if (!a.success) return a;
      var i = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e),
        l = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        type: r.value,
        error: a.value,
        phoneNumberMixin: i.success ? i.value : null,
        usernameAttMixin: l.success ? l.value : null,
      });
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "admin");
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      if (!i.success) return i;
      var l = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(t),
        s = o("WASmaxParseUtils").mapChildrenWithTag(
          a.value,
          "participant",
          0,
          19999,
          e,
        );
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, i.value, {
              groupAddressingModeMixin: l.success ? l.value : null,
              adminParticipant: s.value,
            }),
          )
        : s;
    }
    ((l.parsePromoteDemoteAdminResponseSuccessMultiAdminAdminParticipant = e),
      (l.parsePromoteDemoteAdminResponseSuccessMultiAdmin = s));
  },
  98,
);
