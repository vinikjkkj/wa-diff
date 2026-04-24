__d(
  "WASmaxInGroupsGroupInfoMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
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
      var t = o("WASmaxParseUtils").assertTag(e, "appeal_status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInGroupsEnums").ENUM_APPROVED_INREVIEW_NONE_REJECTED,
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "appeal_update_time");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "value", 0, void 0);
      return n.success
        ? o("WAResultOrError").makeResult({ value: n.value })
        : n;
    }
    function _(e) {
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
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
      ).parseMembershipApprovalGroupJoinModeEnabledMixin(e);
      return o("WAResultOrError").makeResult({
        membershipApprovalGroupJoinModeEnabledMixin: n.success ? n.value : null,
      });
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "linked_parent");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "evolution_version");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "value", 0, 100);
      return n.success
        ? o("WAResultOrError").makeResult({ value: n.value })
        : n;
    }
    function y(e) {
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
    function C(t) {
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
      var C = o("WASmaxParseUtils").optionalChild(t, "no_frequently_forwarded");
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optionalChild(t, "support");
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optionalChildWithTag(t, "ephemeral", c);
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optionalChildWithTag(t, "suspended", d);
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optionalChildWithTag(t, "appeal_status", m);
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "appeal_update_time",
        p,
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optionalChildWithTag(t, "growth_locked", _);
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").optionalChild(t, "default_sub_group");
      if (!k.success) return k;
      var I = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "membership_approval_mode",
        f,
      );
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").optionalChild(t, "incognito");
      if (!T.success) return T;
      var D = o("WASmaxParseUtils").optionalChild(t, "allow_admin_reports");
      if (!D.success) return D;
      var x = o("WASmaxParseUtils").optionalChild(
        t,
        "allow_non_admin_sub_group_creation",
      );
      if (!x.success) return x;
      var $ = o("WASmaxParseUtils").optionalChild(t, "general_chat");
      if (!$.success) return $;
      var P = o("WASmaxParseUtils").optionalChild(t, "auto_add_disabled");
      if (!P.success) return P;
      var N = o("WASmaxParseUtils").optionalChild(t, "group_history");
      if (!N.success) return N;
      var M = o("WASmaxParseUtils").optionalChildWithTag(t, "linked_parent", g);
      if (!M.success) return M;
      var w = o("WASmaxParseUtils").optionalChild(t, "hidden_group");
      if (!w.success) return w;
      var A = o("WASmaxParseUtils").optionalChild(t, "capi");
      if (!A.success) return A;
      var F = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "evolution_version",
        h,
      );
      if (!F.success) return F;
      var O = o("WASmaxParseUtils").optionalChild(t, "group_safety_check");
      if (!O.success) return O;
      var B = o("WASmaxParseUtils").optionalChild(
        t,
        "participant_label_enabled",
      );
      if (!B.success) return B;
      var W = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "limit_sharing_enabled",
        y,
      );
      if (!W.success) return W;
      var q = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        t,
        "ack",
        "false",
      );
      if (!q.success) return q;
      var U = o(
        "WASmaxInGroupsGroupInfoAttributesMixin",
      ).parseGroupInfoAttributesMixin(t);
      if (!U.success) return U;
      var V = o(
          "WASmaxInGroupsGroupMemberAddModeMixin",
        ).parseGroupMemberAddModeMixin(t),
        H = o(
          "WASmaxInGroupsGroupMemberLinkModeMixin",
        ).parseGroupMemberLinkModeMixin(t),
        G = o(
          "WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin",
        ).parseGroupMemberShareGroupHistoryModeMixin(t),
        z = o("WASmaxParseUtils").mapChildrenWithTag(
          t,
          "participant",
          0,
          19999,
          e,
        );
      return z.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ ack: q.value }, U.value, {
              groupMemberAddModeMixin: V.success ? V.value : null,
              groupMemberLinkModeMixin: H.success ? H.value : null,
              groupMemberShareGroupHistoryModeMixin: G.success ? G.value : null,
              description: r.value,
              hasLocked: a.value != null,
              hasAnnouncement: i.value != null,
              parent: l.value,
              hasNoFrequentlyForwarded: C.value != null,
              hasSupport: b.value != null,
              ephemeral: v.value,
              suspended: S.value,
              appealStatus: R.value,
              appealUpdateTime: L.value,
              growthLocked: E.value,
              hasDefaultSubGroup: k.value != null,
              membershipApprovalMode: I.value,
              hasIncognito: T.value != null,
              hasAllowAdminReports: D.value != null,
              hasAllowNonAdminSubGroupCreation: x.value != null,
              hasGeneralChat: $.value != null,
              hasAutoAddDisabled: P.value != null,
              hasGroupHistory: N.value != null,
              linkedParent: M.value,
              hasHiddenGroup: w.value != null,
              hasCapi: A.value != null,
              evolutionVersion: F.value,
              hasGroupSafetyCheck: O.value != null,
              hasParticipantLabelEnabled: B.value != null,
              limitSharingEnabled: W.value,
              participant: z.value,
            }),
          )
        : z;
    }
    ((l.parseGroupInfoParticipant = e),
      (l.parseGroupInfoDescription = s),
      (l.parseGroupInfoParent = u),
      (l.parseGroupInfoEphemeral = c),
      (l.parseGroupInfoSuspended = d),
      (l.parseGroupInfoAppealStatus = m),
      (l.parseGroupInfoAppealUpdateTime = p),
      (l.parseGroupInfoGrowthLocked = _),
      (l.parseGroupInfoMembershipApprovalMode = f),
      (l.parseGroupInfoLinkedParent = g),
      (l.parseGroupInfoEvolutionVersion = h),
      (l.parseGroupInfoLimitSharingEnabled = y),
      (l.parseGroupInfoMixin = C));
  },
  98,
);
