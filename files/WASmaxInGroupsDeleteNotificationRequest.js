__d(
  "WASmaxInGroupsDeleteNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsParticipantIdentityMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "delete");
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
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "reason",
        o("WASmaxInGroupsEnums")
          .ENUM_DEACTIVATEGENERALCHAT_DELETECAPI_DELETEPARENT_INTEGRITYDELETEPARENT,
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInGroupsCommonNotificationMixin",
      ).parseCommonNotificationMixin(e);
      if (!l.success) return l;
      var s = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        u = o(
          "WASmaxInGroupsParticipantIdentityMixin",
        ).parseParticipantIdentityMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { participant: a.value, deleteReason: i.value },
          l.value,
          {
            groupAddressingModeMixin: s.success ? s.value : null,
            participantIdentityMixin: u.success ? u.value : null,
            hasMissingParticipantIdentification: r.value != null,
          },
        ),
      );
    }
    l.parseDeleteNotificationRequest = e;
  },
  98,
);
