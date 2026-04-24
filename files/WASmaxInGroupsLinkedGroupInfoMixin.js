__d(
  "WASmaxInGroupsLinkedGroupInfoMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
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
      var t = o("WASmaxParseUtils").assertTag(e, "appeal_status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInGroupsEnums").ENUM_APPROVED_INREVIEW_NONE_REJECTED,
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "appeal_update_time");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "value", 0, void 0);
      return n.success
        ? o("WAResultOrError").makeResult({ value: n.value })
        : n;
    }
    function p(e) {
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
    function _(t) {
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
      var _ = o("WASmaxParseUtils").optionalChild(
        r.value,
        "admin_request_required",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optionalChild(r.value, "hidden_group");
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "suspended",
        c,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "appeal_status",
        d,
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "appeal_update_time",
        m,
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optionalChild(
        r.value,
        "group_safety_check",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optionalChild(
        r.value,
        "participant_label_enabled",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "limit_sharing_enabled",
        p,
      );
      if (!v.success) return v;
      var S = o("WASmaxParseJid").attrGroupJid(t, "jid");
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").attrIntRange(r.value, "size", 1, 19999);
      if (!R.success) return R;
      var L = o(
          "WASmaxInGroupsGroupInfoDescriptionMixin",
        ).parseGroupInfoDescriptionMixin(a.value),
        E = o(
          "WASmaxInGroupsGroupInfoAttributesMixin",
        ).parseGroupInfoAttributesMixin(r.value);
      if (!E.success) return E;
      var k = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(r.value),
        I = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "participant",
          0,
          19999,
          e,
        );
      return I.success
        ? o("WAResultOrError").makeResult({
            jid: S.value,
            groupSize: R.value,
            groupDescriptionGroupInfoDescriptionMixin: L.success
              ? L.value
              : null,
            groupGroupInfoAttributesMixin: E.value,
            groupGroupAddressingModeMixin: k.success ? k.value : null,
            groupMembershipApprovalMode: i.value,
            groupMembershipApprovalRequest: l.value,
            hasGroupAdminRequestRequired: _.value != null,
            hasGroupHiddenGroup: f.value != null,
            groupSuspended: g.value,
            groupAppealStatus: h.value,
            groupAppealUpdateTime: y.value,
            hasGroupGroupSafetyCheck: C.value != null,
            hasGroupParticipantLabelEnabled: b.value != null,
            groupLimitSharingEnabled: v.value,
            groupParticipant: I.value,
          })
        : I;
    }
    ((l.parseLinkedGroupInfoGroupParticipant = e),
      (l.parseLinkedGroupInfoGroupMembershipApprovalMode = s),
      (l.parseLinkedGroupInfoGroupMembershipApprovalRequest = u),
      (l.parseLinkedGroupInfoGroupSuspended = c),
      (l.parseLinkedGroupInfoGroupAppealStatus = d),
      (l.parseLinkedGroupInfoGroupAppealUpdateTime = m),
      (l.parseLinkedGroupInfoGroupLimitSharingEnabled = p),
      (l.parseLinkedGroupInfoMixin = _));
  },
  98,
);
