__d(
  "WASmaxInGroupsGroupInfoMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupInfoAttributesMixin",
    "WASmaxInGroupsGroupInfoDescriptionMixin",
    "WASmaxInGroupsGroupInfoParticipantMixin",
    "WASmaxInGroupsGroupMemberAddModeMixin",
    "WASmaxInGroupsGroupMemberLinkModeMixin",
    "WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin",
    "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
    "WASmaxInGroupsParentGroupDefaultMembershipApprovalModeMixin",
    "WASmaxInGroupsParticipantNotAddressableMixin",
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
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "description");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsGroupInfoDescriptionMixin",
      ).parseGroupInfoDescriptionMixin(e);
      return o("WAResultOrError").makeResult({
        groupInfoDescriptionMixin: n.success ? n.value : null,
      });
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "parent");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsParentGroupDefaultMembershipApprovalModeMixin",
      ).parseParentGroupDefaultMembershipApprovalModeMixin(e);
      return o("WAResultOrError").makeResult({
        parentGroupDefaultMembershipApprovalModeMixin: n.success
          ? n.value
          : null,
      });
    }
    function c(e) {
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
    function d(e) {
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
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "growth_locked");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "invite",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "expiration", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({
            type: n.value,
            expiration: r.value,
          })
        : r;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
      ).parseMembershipApprovalGroupJoinModeEnabledMixin(e);
      return o("WAResultOrError").makeResult({
        membershipApprovalGroupJoinModeEnabledMixin: n.success ? n.value : null,
      });
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "linked_parent");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "evolution_version");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "value", 0, 100);
      return n.success
        ? o("WAResultOrError").makeResult({ value: n.value })
        : n;
    }
    function g(e) {
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
    function h(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "group");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "description", s);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChild(t, "locked");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChild(t, "announcement");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(t, "parent", u);
      if (!l.success) return l;
      var h = o("WASmaxParseUtils").optionalChild(t, "no_frequently_forwarded");
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optionalChild(t, "support");
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optionalChildWithTag(t, "ephemeral", c);
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optionalChildWithTag(t, "suspended", d);
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optionalChildWithTag(t, "growth_locked", m);
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optionalChild(t, "default_sub_group");
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "membership_approval_mode",
        p,
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optionalChild(t, "incognito");
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optionalChild(t, "allow_admin_reports");
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").optionalChild(
        t,
        "allow_non_admin_sub_group_creation",
      );
      if (!k.success) return k;
      var I = o("WASmaxParseUtils").optionalChild(t, "general_chat");
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").optionalChild(t, "auto_add_disabled");
      if (!T.success) return T;
      var D = o("WASmaxParseUtils").optionalChild(t, "group_history");
      if (!D.success) return D;
      var x = o("WASmaxParseUtils").optionalChildWithTag(t, "linked_parent", _);
      if (!x.success) return x;
      var $ = o("WASmaxParseUtils").optionalChild(t, "hidden_group");
      if (!$.success) return $;
      var P = o("WASmaxParseUtils").optionalChild(t, "capi");
      if (!P.success) return P;
      var N = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "evolution_version",
        f,
      );
      if (!N.success) return N;
      var M = o("WASmaxParseUtils").optionalChild(t, "group_safety_check");
      if (!M.success) return M;
      var w = o("WASmaxParseUtils").optionalChild(
        t,
        "participant_label_enabled",
      );
      if (!w.success) return w;
      var A = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "limit_sharing_enabled",
        g,
      );
      if (!A.success) return A;
      var F = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        t,
        "ack",
        "false",
      );
      if (!F.success) return F;
      var O = o(
        "WASmaxInGroupsGroupInfoAttributesMixin",
      ).parseGroupInfoAttributesMixin(t);
      if (!O.success) return O;
      var B = o(
          "WASmaxInGroupsGroupMemberAddModeMixin",
        ).parseGroupMemberAddModeMixin(t),
        W = o(
          "WASmaxInGroupsGroupMemberLinkModeMixin",
        ).parseGroupMemberLinkModeMixin(t),
        q = o(
          "WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin",
        ).parseGroupMemberShareGroupHistoryModeMixin(t),
        U = o("WASmaxParseUtils").mapChildrenWithTag(
          t,
          "participant",
          0,
          19999,
          e,
        );
      return U.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ ack: F.value }, O.value, {
              groupMemberAddModeMixin: B.success ? B.value : null,
              groupMemberLinkModeMixin: W.success ? W.value : null,
              groupMemberShareGroupHistoryModeMixin: q.success ? q.value : null,
              description: r.value,
              hasLocked: a.value != null,
              hasAnnouncement: i.value != null,
              parent: l.value,
              hasNoFrequentlyForwarded: h.value != null,
              hasSupport: y.value != null,
              ephemeral: C.value,
              suspended: b.value,
              growthLocked: v.value,
              hasDefaultSubGroup: S.value != null,
              membershipApprovalMode: R.value,
              hasIncognito: L.value != null,
              hasAllowAdminReports: E.value != null,
              hasAllowNonAdminSubGroupCreation: k.value != null,
              hasGeneralChat: I.value != null,
              hasAutoAddDisabled: T.value != null,
              hasGroupHistory: D.value != null,
              linkedParent: x.value,
              hasHiddenGroup: $.value != null,
              hasCapi: P.value != null,
              evolutionVersion: N.value,
              hasGroupSafetyCheck: M.value != null,
              hasParticipantLabelEnabled: w.value != null,
              limitSharingEnabled: A.value,
              participant: U.value,
            }),
          )
        : U;
    }
    ((l.parseGroupInfoParticipant = e),
      (l.parseGroupInfoDescription = s),
      (l.parseGroupInfoParent = u),
      (l.parseGroupInfoEphemeral = c),
      (l.parseGroupInfoSuspended = d),
      (l.parseGroupInfoGrowthLocked = m),
      (l.parseGroupInfoMembershipApprovalMode = p),
      (l.parseGroupInfoLinkedParent = _),
      (l.parseGroupInfoEvolutionVersion = f),
      (l.parseGroupInfoLimitSharingEnabled = g),
      (l.parseGroupInfoMixin = h));
  },
  98,
);
