__d(
  "WASmaxInGroupsMemberAddModeChangeNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupMemberAddModeMixin",
    "WASmaxInGroupsParticipantIdentityMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChild(
        e,
        "missing_participant_identification",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsCommonNotificationMixin",
      ).parseCommonNotificationMixin(e);
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsGroupMemberAddModeMixin",
      ).parseGroupMemberAddModeMixin(e);
      if (!i.success) return i;
      var l = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        s = o(
          "WASmaxInGroupsParticipantIdentityMixin",
        ).parseParticipantIdentityMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ participant: r.value }, a.value, i.value, {
          groupAddressingModeMixin: l.success ? l.value : null,
          participantIdentityMixin: s.success ? s.value : null,
          hasMissingParticipantIdentification: n.value != null,
        }),
      );
    }
    l.parseMemberAddModeChangeNotificationRequest = e;
  },
  98,
);
