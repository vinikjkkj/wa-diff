__d(
  "WASmaxInGroupsInviteLinkGroupInfoMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupInfoAttributesMixin",
    "WASmaxInGroupsGroupInfoDescriptionMixin",
    "WASmaxInGroupsGroupInfoParticipantMixin",
    "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
    "WASmaxInGroupsNamedSubjectMixin",
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
      var t = o("WASmaxParseUtils").assertTag(e, "parent");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "num_sub_groups", 1, 1e3);
      return n.success
        ? o("WAResultOrError").makeResult({ numSubGroups: n.value })
        : n;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "linked_parent");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsNamedSubjectMixin").parseNamedSubjectMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ jid: n.value }, r.value),
          )
        : r;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
      ).parseMembershipApprovalGroupJoinModeEnabledMixin(e);
      return (n.success, n);
    }
    function d(e) {
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
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ephemeral");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "expiration",
        0,
        2147483647,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "trigger",
        0,
        20,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            expiration: n.value,
            trigger: r.value,
          })
        : r;
    }
    function p(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "group");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "description");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "parent", s);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(t, "linked_parent", u);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChild(t, "hidden_group");
      if (!l.success) return l;
      var p = o("WASmaxParseUtils").optionalChild(t, "default_sub_group");
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optionalChild(t, "general_chat");
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "membership_approval_mode",
        c,
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "membership_approval_request",
        d,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optionalChild(t, "capi");
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optionalChildWithTag(t, "ephemeral", m);
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").attrIntRange(t, "size", 0, 19999);
      if (!C.success) return C;
      var b = o(
          "WASmaxInGroupsGroupInfoDescriptionMixin",
        ).parseGroupInfoDescriptionMixin(r.value),
        v = o(
          "WASmaxInGroupsGroupInfoAttributesMixin",
        ).parseGroupInfoAttributesMixin(t);
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "participant",
        0,
        19999,
        e,
      );
      return S.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                size: C.value,
                descriptionGroupInfoDescriptionMixin: b.success
                  ? b.value
                  : null,
              },
              v.value,
              {
                parent: a.value,
                linkedParent: i.value,
                hasHiddenGroup: l.value != null,
                hasDefaultSubGroup: p.value != null,
                hasGeneralChat: _.value != null,
                membershipApprovalMode: f.value,
                membershipApprovalRequest: g.value,
                hasCapi: h.value != null,
                ephemeral: y.value,
                participant: S.value,
              },
            ),
          )
        : S;
    }
    ((l.parseInviteLinkGroupInfoParticipant = e),
      (l.parseInviteLinkGroupInfoParent = s),
      (l.parseInviteLinkGroupInfoLinkedParent = u),
      (l.parseInviteLinkGroupInfoMembershipApprovalMode = c),
      (l.parseInviteLinkGroupInfoMembershipApprovalRequest = d),
      (l.parseInviteLinkGroupInfoEphemeral = m),
      (l.parseInviteLinkGroupInfoMixin = p));
  },
  98,
);
