__d(
  "WASmaxInGroupsAddNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsParticipantIdentityMixin",
    "WASmaxInGroupsParticipantMixin",
    "WASmaxInGroupsParticipantNotAddressableMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxInGroupsParticipantMixin").parseParticipantMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsParticipantNotAddressableMixin",
      ).parseParticipantNotAddressableMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          participantNotAddressableMixin: r.success ? r.value : null,
        }),
      );
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "notification");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "add");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChild(
        t,
        "missing_participant_identification",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        t,
        "participant",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(r.value, "v_id");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "prev_v_id",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "reason",
        o("WASmaxInGroupsEnums")
          .ENUM_ACCEPT_AUTOADD_DEFAULTSUBGROUPPROMOTE_INVITE_INVITEAUTOADD_LINKEDGROUPJOIN,
      );
      if (!u.success) return u;
      var c = o(
        "WASmaxInGroupsCommonNotificationMixin",
      ).parseCommonNotificationMixin(t);
      if (!c.success) return c;
      var d = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(t),
        m = o(
          "WASmaxInGroupsParticipantIdentityMixin",
        ).parseParticipantIdentityMixin(t),
        p = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "participant",
          1,
          1024,
          e,
        );
      return p.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                participant: i.value,
                addVId: l.value,
                addPrevVId: s.value,
                addReason: u.value,
              },
              c.value,
              {
                groupAddressingModeMixin: d.success ? d.value : null,
                participantIdentityMixin: m.success ? m.value : null,
                hasMissingParticipantIdentification: a.value != null,
                addParticipant: p.value,
              },
            ),
          )
        : p;
    }
    ((l.parseAddNotificationRequestAddParticipant = e),
      (l.parseAddNotificationRequest = s));
  },
  98,
);
