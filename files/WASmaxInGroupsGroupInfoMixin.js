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
      var t = o("WASmaxParseUtils").assertTag(e, "default_reaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group_reaction_settings");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "default_reaction",
        0,
        6,
        g,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ defaultReaction: n.value })
        : n;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "linked_parent");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "evolution_version");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "value", 0, 100);
      return n.success
        ? o("WAResultOrError").makeResult({ value: n.value })
        : n;
    }
    function b(e) {
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
    function v(t) {
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
      var g = o("WASmaxParseUtils").optionalChild(t, "no_frequently_forwarded");
      if (!g.success) return g;
      var v = o("WASmaxParseUtils").optionalChild(t, "support");
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optionalChildWithTag(t, "ephemeral", c);
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optionalChildWithTag(t, "suspended", d);
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optionalChildWithTag(t, "appeal_status", m);
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "appeal_update_time",
        p,
      );
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").optionalChildWithTag(t, "growth_locked", _);
      if (!k.success) return k;
      var I = o("WASmaxParseUtils").optionalChild(t, "default_sub_group");
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "membership_approval_mode",
        f,
      );
      if (!T.success) return T;
      var D = o("WASmaxParseUtils").optionalChild(t, "incognito");
      if (!D.success) return D;
      var x = o("WASmaxParseUtils").optionalChild(t, "allow_admin_reports");
      if (!x.success) return x;
      var $ = o("WASmaxParseUtils").optionalChild(
        t,
        "allow_non_admin_sub_group_creation",
      );
      if (!$.success) return $;
      var P = o("WASmaxParseUtils").optionalChild(t, "general_chat");
      if (!P.success) return P;
      var N = o("WASmaxParseUtils").optionalChild(t, "auto_add_disabled");
      if (!N.success) return N;
      var M = o("WASmaxParseUtils").optionalChild(t, "group_history");
      if (!M.success) return M;
      var w = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "group_reaction_settings",
        h,
      );
      if (!w.success) return w;
      var A = o("WASmaxParseUtils").optionalChildWithTag(t, "linked_parent", y);
      if (!A.success) return A;
      var F = o("WASmaxParseUtils").optionalChild(t, "hidden_group");
      if (!F.success) return F;
      var O = o("WASmaxParseUtils").optionalChild(t, "capi");
      if (!O.success) return O;
      var B = o("WASmaxParseUtils").optionalChild(t, "work");
      if (!B.success) return B;
      var W = o("WASmaxParseUtils").optionalChild(t, "light_e2ee");
      if (!W.success) return W;
      var q = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "evolution_version",
        C,
      );
      if (!q.success) return q;
      var U = o("WASmaxParseUtils").optionalChild(t, "group_safety_check");
      if (!U.success) return U;
      var V = o("WASmaxParseUtils").optionalChild(
        t,
        "participant_label_enabled",
      );
      if (!V.success) return V;
      var H = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "limit_sharing_enabled",
        b,
      );
      if (!H.success) return H;
      var G = o("WASmaxParseUtils").optionalChild(
        t,
        "limit_companion_sharing_enabled",
      );
      if (!G.success) return G;
      var z = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        t,
        "ack",
        "false",
      );
      if (!z.success) return z;
      var j = o(
        "WASmaxInGroupsGroupInfoAttributesMixin",
      ).parseGroupInfoAttributesMixin(t);
      if (!j.success) return j;
      var K = o(
          "WASmaxInGroupsGroupMemberAddModeMixin",
        ).parseGroupMemberAddModeMixin(t),
        Q = o(
          "WASmaxInGroupsGroupMemberLinkModeMixin",
        ).parseGroupMemberLinkModeMixin(t),
        X = o(
          "WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin",
        ).parseGroupMemberShareGroupHistoryModeMixin(t),
        Y = o("WASmaxParseUtils").mapChildrenWithTag(
          t,
          "participant",
          0,
          19999,
          e,
        );
      return Y.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ ack: z.value }, j.value, {
              groupMemberAddModeMixin: K.success ? K.value : null,
              groupMemberLinkModeMixin: Q.success ? Q.value : null,
              groupMemberShareGroupHistoryModeMixin: X.success ? X.value : null,
              description: r.value,
              hasLocked: a.value != null,
              hasAnnouncement: i.value != null,
              parent: l.value,
              hasNoFrequentlyForwarded: g.value != null,
              hasSupport: v.value != null,
              ephemeral: S.value,
              suspended: R.value,
              appealStatus: L.value,
              appealUpdateTime: E.value,
              growthLocked: k.value,
              hasDefaultSubGroup: I.value != null,
              membershipApprovalMode: T.value,
              hasIncognito: D.value != null,
              hasAllowAdminReports: x.value != null,
              hasAllowNonAdminSubGroupCreation: $.value != null,
              hasGeneralChat: P.value != null,
              hasAutoAddDisabled: N.value != null,
              hasGroupHistory: M.value != null,
              groupReactionSettings: w.value,
              linkedParent: A.value,
              hasHiddenGroup: F.value != null,
              hasCapi: O.value != null,
              hasWork: B.value != null,
              hasLightE2ee: W.value != null,
              evolutionVersion: q.value,
              hasGroupSafetyCheck: U.value != null,
              hasParticipantLabelEnabled: V.value != null,
              limitSharingEnabled: H.value,
              hasLimitCompanionSharingEnabled: G.value != null,
              participant: Y.value,
            }),
          )
        : Y;
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
      (l.parseGroupInfoGroupReactionSettingsDefaultReaction = g),
      (l.parseGroupInfoGroupReactionSettings = h),
      (l.parseGroupInfoLinkedParent = y),
      (l.parseGroupInfoEvolutionVersion = C),
      (l.parseGroupInfoLimitSharingEnabled = b),
      (l.parseGroupInfoMixin = v));
  },
  98,
);
