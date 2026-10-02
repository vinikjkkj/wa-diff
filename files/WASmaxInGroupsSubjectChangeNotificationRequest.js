__d(
  "WASmaxInGroupsSubjectChangeNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
    "WASmaxInGroupsParentGroupMixin",
    "WASmaxInGroupsParticipantIdentityMixin",
    "WASmaxInGroupsSubjectOwnerIdentityMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "subject");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChild(
        e,
        "missing_participant_identification",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrUserJid(e, "participant");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        n.value,
        "s_o",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrIntRange(n.value, "s_t", 0, void 0);
      if (!l.success) return l;
      var s = o("WASmaxInGroupsParentGroupMixin").parseParentGroupMixin(
          n.value,
        ),
        u = o(
          "WASmaxInGroupsSubjectOwnerIdentityMixin",
        ).parseSubjectOwnerIdentityMixin(n.value),
        c = o(
          "WASmaxInGroupsCommonNotificationMixin",
        ).parseCommonNotificationMixin(e);
      if (!c.success) return c;
      var d = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        m = o(
          "WASmaxInGroupsParticipantIdentityMixin",
        ).parseParticipantIdentityMixin(e),
        p = o(
          "WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
        ).parseNamedSubjectOrUnnamedSubjectFallbackMixinGroup(n.value);
      return p.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                participant: a.value,
                subjectSO: i.value,
                subjectST: l.value,
                subjectParentGroupMixin: s.success ? s.value : null,
                subjectSubjectOwnerIdentityMixin: u.success ? u.value : null,
              },
              c.value,
              {
                groupAddressingModeMixin: d.success ? d.value : null,
                participantIdentityMixin: m.success ? m.value : null,
                subjectNamedSubjectOrUnnamedSubjectFallbackMixinGroup: p.value,
                hasMissingParticipantIdentification: r.value != null,
              },
            ),
          )
        : p;
    }
    l.parseSubjectChangeNotificationRequest = e;
  },
  98,
);
