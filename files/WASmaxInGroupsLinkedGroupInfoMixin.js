__d(
  "WASmaxInGroupsLinkedGroupInfoMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupInfoAttributesMixin",
    "WASmaxInGroupsGroupInfoDescriptionMixin",
    "WASmaxInGroupsGroupInfoParticipantMixin",
    "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsGroupInfoParticipantMixin",
      ).parseGroupInfoParticipantMixin(e);
      return (n.success, n);
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
      ).parseMembershipApprovalGroupJoinModeEnabledMixin(e);
      return (n.success, n);
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_request");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "304",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "suspended");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "can_auto_file",
        "true",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ canAutoFile: n.value })
        : n;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "limit_sharing_enabled");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "trigger",
        0,
        20,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ trigger: n.value })
        : n;
    }
    function m(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "linked_group");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "group");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "description",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "membership_approval_mode",
        s,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "membership_approval_request",
        u,
      );
      if (!l.success) return l;
      var m = o("WASmaxParseUtils").optionalChild(
        r.value,
        "admin_request_required",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optionalChild(r.value, "hidden_group");
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "suspended",
        c,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optionalChild(
        r.value,
        "group_safety_check",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optionalChild(
        r.value,
        "participant_label_enabled",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "limit_sharing_enabled",
        d,
      );
      if (!h.success) return h;
      var y = o("WASmaxParseJid").attrGroupJid(t, "jid");
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").attrIntRange(r.value, "size", 1, 19999);
      if (!C.success) return C;
      var b = o(
          "WASmaxInGroupsGroupInfoDescriptionMixin",
        ).parseGroupInfoDescriptionMixin(a.value),
        v = o(
          "WASmaxInGroupsGroupInfoAttributesMixin",
        ).parseGroupInfoAttributesMixin(r.value);
      if (!v.success) return v;
      var S = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(r.value),
        R = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "participant",
          0,
          19999,
          e,
        );
      return R.success
        ? o("WAResultOrError").makeResult({
            jid: y.value,
            groupSize: C.value,
            groupDescriptionGroupInfoDescriptionMixin: b.success
              ? b.value
              : null,
            groupGroupInfoAttributesMixin: v.value,
            groupGroupAddressingModeMixin: S.success ? S.value : null,
            groupMembershipApprovalMode: i.value,
            groupMembershipApprovalRequest: l.value,
            hasGroupAdminRequestRequired: m.value != null,
            hasGroupHiddenGroup: p.value != null,
            groupSuspended: _.value,
            hasGroupGroupSafetyCheck: f.value != null,
            hasGroupParticipantLabelEnabled: g.value != null,
            groupLimitSharingEnabled: h.value,
            groupParticipant: R.value,
          })
        : R;
    }
    ((l.parseLinkedGroupInfoGroupParticipant = e),
      (l.parseLinkedGroupInfoGroupMembershipApprovalMode = s),
      (l.parseLinkedGroupInfoGroupMembershipApprovalRequest = u),
      (l.parseLinkedGroupInfoGroupSuspended = c),
      (l.parseLinkedGroupInfoGroupLimitSharingEnabled = d),
      (l.parseLinkedGroupInfoMixin = m));
  },
  98,
);
