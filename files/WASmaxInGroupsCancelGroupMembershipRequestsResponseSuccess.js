__d(
  "WASmaxInGroupsCancelGroupMembershipRequestsResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsMembershipRequestsCancellationParticipantMixins",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e),
        a = o(
          "WASmaxInGroupsMembershipRequestsCancellationParticipantMixins",
        ).parseMembershipRequestsCancellationParticipantMixins(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        phoneNumberMixin: r.success ? r.value : null,
        membershipRequestsCancellationParticipantMixins: a.success
          ? a.value
          : null,
      });
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        t,
        "cancel_membership_requests",
      );
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
          1,
          19999,
          e,
        );
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, i.value, {
              groupAddressingModeMixin: l.success ? l.value : null,
              cancelMembershipRequestsParticipant: s.value,
            }),
          )
        : s;
    }
    ((l.parseCancelGroupMembershipRequestsResponseSuccessCancelMembershipRequestsParticipant =
      e),
      (l.parseCancelGroupMembershipRequestsResponseSuccess = s));
  },
  98,
);
