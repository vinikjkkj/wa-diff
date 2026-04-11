__d(
  "WASmaxInGroupsCreateResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsCreateParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup",
    "WASmaxInGroupsDedupAttrsMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupCreatorIdentityMixin",
    "WASmaxInGroupsGroupMemberAddModeMixin",
    "WASmaxInGroupsGroupMemberLinkModeMixin",
    "WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin",
    "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
    "WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
    "WASmaxInGroupsParentGroupDefaultMembershipApprovalModeMixin",
    "WASmaxInGroupsSubjectOwnerIdentityMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsCreateParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup",
      ).parseCreateParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup(
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            createParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup:
              n.value,
          })
        : n;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "description");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "error",
        o("WASmaxInGroupsEnums").ENUM_406_500,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, error: r.value })
        : r;
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
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
      ).parseMembershipApprovalGroupJoinModeEnabledMixin(e);
      return (n.success, n);
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "linked_parent");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function p(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "group");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "description",
        s,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChild(a.value, "locked");
      if (!l.success) return l;
      var p = o("WASmaxParseUtils").optionalChild(a.value, "announcement");
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optionalChildWithTag(a.value, "parent", u);
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optionalChild(
        a.value,
        "no_frequently_forwarded",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "ephemeral",
        c,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "membership_approval_mode",
        d,
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optionalChild(a.value, "breakout");
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "linked_parent",
        m,
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optionalChild(a.value, "hidden_group");
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optionalChild(
        a.value,
        "allow_non_admin_sub_group_creation",
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optionalChild(a.value, "group_history");
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optionalChild(a.value, "capi");
      if (!R.success) return R;
      var L = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        t,
        "from",
        "g.us",
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "result",
      );
      if (!E.success) return E;
      var k = o("WASmaxParseReference").attrStringFromReference(n, ["id"]);
      if (!k.success) return k;
      var I = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "id",
        k.value,
      );
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").attrString(a.value, "id");
      if (!T.success) return T;
      var D = o("WASmaxParseJid").attrUserJid(a.value, "creator");
      if (!D.success) return D;
      var x = o("WASmaxParseUtils").attrIntRange(
        a.value,
        "creation",
        0,
        void 0,
      );
      if (!x.success) return x;
      var $ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        a.value,
        "s_t",
        0,
        void 0,
      );
      if (!$.success) return $;
      var P = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        a.value,
        "s_o",
      );
      if (!P.success) return P;
      var N = o("WASmaxInGroupsDedupAttrsMixin").parseDedupAttrsMixin(a.value),
        M = o(
          "WASmaxInGroupsGroupMemberAddModeMixin",
        ).parseGroupMemberAddModeMixin(a.value),
        w = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(a.value),
        A = o(
          "WASmaxInGroupsSubjectOwnerIdentityMixin",
        ).parseSubjectOwnerIdentityMixin(a.value),
        F = o(
          "WASmaxInGroupsGroupCreatorIdentityMixin",
        ).parseGroupCreatorIdentityMixin(a.value),
        O = o(
          "WASmaxInGroupsGroupMemberLinkModeMixin",
        ).parseGroupMemberLinkModeMixin(a.value),
        B = o(
          "WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin",
        ).parseGroupMemberShareGroupHistoryModeMixin(a.value),
        W = o(
          "WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
        ).parseNamedSubjectOrUnnamedSubjectFallbackMixinGroup(a.value);
      if (!W.success) return W;
      var q = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "participant",
        1,
        1024,
        e,
      );
      return q.success
        ? o("WAResultOrError").makeResult({
            from: L.value,
            type: E.value,
            groupId: T.value,
            groupCreator: D.value,
            groupCreation: x.value,
            groupST: $.value,
            groupSO: P.value,
            groupDedupAttrsMixin: N.success ? N.value : null,
            groupGroupMemberAddModeMixin: M.success ? M.value : null,
            groupGroupAddressingModeMixin: w.success ? w.value : null,
            groupSubjectOwnerIdentityMixin: A.success ? A.value : null,
            groupGroupCreatorIdentityMixin: F.success ? F.value : null,
            groupGroupMemberLinkModeMixin: O.success ? O.value : null,
            groupGroupMemberShareGroupHistoryModeMixin: B.success
              ? B.value
              : null,
            groupNamedSubjectOrUnnamedSubjectFallbackMixinGroup: W.value,
            groupDescription: i.value,
            hasGroupLocked: l.value != null,
            hasGroupAnnouncement: p.value != null,
            groupParent: _.value,
            hasGroupNoFrequentlyForwarded: f.value != null,
            groupEphemeral: g.value,
            groupMembershipApprovalMode: h.value,
            hasGroupBreakout: y.value != null,
            groupLinkedParent: C.value,
            hasGroupHiddenGroup: b.value != null,
            hasGroupAllowNonAdminSubGroupCreation: v.value != null,
            hasGroupGroupHistory: S.value != null,
            hasGroupCapi: R.value != null,
            groupParticipant: q.value,
          })
        : q;
    }
    ((l.parseCreateResponseSuccessGroupParticipant = e),
      (l.parseCreateResponseSuccessGroupDescription = s),
      (l.parseCreateResponseSuccessGroupParent = u),
      (l.parseCreateResponseSuccessGroupEphemeral = c),
      (l.parseCreateResponseSuccessGroupMembershipApprovalMode = d),
      (l.parseCreateResponseSuccessGroupLinkedParent = m),
      (l.parseCreateResponseSuccess = p));
  },
  98,
);
