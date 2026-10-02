__d(
  "WASmaxInGroupsRemoveNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsParticipantIdentityMixin",
    "WASmaxInGroupsRemoveNotificationOrRemoveNotificationNonMemberMixinGroup",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "remove");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChild(
        e,
        "missing_participant_identification",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsCommonNotificationMixin",
      ).parseCommonNotificationMixin(e);
      if (!i.success) return i;
      var l = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        s = o(
          "WASmaxInGroupsParticipantIdentityMixin",
        ).parseParticipantIdentityMixin(e),
        u = o(
          "WASmaxInGroupsRemoveNotificationOrRemoveNotificationNonMemberMixinGroup",
        ).parseRemoveNotificationOrRemoveNotificationNonMemberMixinGroup(
          n.value,
        );
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ participant: a.value }, i.value, {
              groupAddressingModeMixin: l.success ? l.value : null,
              participantIdentityMixin: s.success ? s.value : null,
              removeRemoveNotificationOrRemoveNotificationNonMemberMixinGroup:
                u.value,
              hasMissingParticipantIdentification: r.value != null,
            }),
          )
        : u;
    }
    l.parseRemoveNotificationRequest = e;
  },
  98,
);
