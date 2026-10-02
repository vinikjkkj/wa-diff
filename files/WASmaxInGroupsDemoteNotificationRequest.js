__d(
  "WASmaxInGroupsDemoteNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsParticipantIdentityMixin",
    "WASmaxInGroupsParticipantMixins",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "type",
        o("WASmaxInGroupsEnums").ENUM_ADMIN_SUPERADMIN,
      );
      if (!n.success) return n;
      var r = o("WASmaxInGroupsParticipantMixins").parseParticipantMixins(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            type: n.value,
            participantMixins: r.value,
          })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "notification");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "demote");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChild(
        t,
        "missing_participant_identification",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseJid").attrUserJid(t, "participant");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(r.value, "v_id");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "prev_v_id",
      );
      if (!s.success) return s;
      var u = o(
        "WASmaxInGroupsCommonNotificationMixin",
      ).parseCommonNotificationMixin(t);
      if (!u.success) return u;
      var c = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(t),
        d = o(
          "WASmaxInGroupsParticipantIdentityMixin",
        ).parseParticipantIdentityMixin(t),
        m = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "participant",
          1,
          19999,
          e,
        );
      return m.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                participant: i.value,
                demoteVId: l.value,
                demotePrevVId: s.value,
              },
              u.value,
              {
                groupAddressingModeMixin: c.success ? c.value : null,
                participantIdentityMixin: d.success ? d.value : null,
                hasMissingParticipantIdentification: a.value != null,
                demoteParticipant: m.value,
              },
            ),
          )
        : m;
    }
    ((l.parseDemoteNotificationRequestDemoteParticipant = e),
      (l.parseDemoteNotificationRequest = s));
  },
  98,
);
