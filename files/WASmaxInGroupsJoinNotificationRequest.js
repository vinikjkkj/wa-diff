__d(
  "WASmaxInGroupsJoinNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsDedupAttrsMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupInfoMixin",
    "WASmaxInGroupsOptionalContextGroupMixin",
    "WASmaxInGroupsParticipantIdentityAndCountryCodeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "create");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "group");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChild(
        e,
        "missing_participant_identification",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
        "new",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "reason",
        o("WASmaxInGroupsEnums")
          .ENUM_ACCEPT_AUTOADD_DEFAULTSUBGROUPADMINADD_GENERALCHATAUTOADD_INVITE_INVITEAUTOADD_LINKEDGROUPJOIN_SUBGROUPSUGGESTIONAPPROVED,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrIntRange(r.value, "size", 1, 19999);
      if (!u.success) return u;
      var c = o("WASmaxInGroupsGroupInfoMixin").parseGroupInfoMixin(r.value);
      if (!c.success) return c;
      var d = o(
          "WASmaxInGroupsOptionalContextGroupMixin",
        ).parseOptionalContextGroupMixin(n.value),
        m = o("WASmaxInGroupsDedupAttrsMixin").parseDedupAttrsMixin(n.value),
        p = o(
          "WASmaxInGroupsCommonNotificationMixin",
        ).parseCommonNotificationMixin(e);
      if (!p.success) return p;
      var _ = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        f = o(
          "WASmaxInGroupsParticipantIdentityAndCountryCodeMixin",
        ).parseParticipantIdentityAndCountryCodeMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            participant: i.value,
            createType: l.value,
            createReason: s.value,
            createGroupSize: u.value,
            createGroupGroupInfoMixin: c.value,
            createOptionalContextGroupMixin: d.success ? d.value : null,
            createDedupAttrsMixin: m.success ? m.value : null,
          },
          p.value,
          {
            groupAddressingModeMixin: _.success ? _.value : null,
            participantIdentityAndCountryCodeMixin: f.success ? f.value : null,
            hasMissingParticipantIdentification: a.value != null,
          },
        ),
      );
    }
    l.parseJoinNotificationRequest = e;
  },
  98,
);
