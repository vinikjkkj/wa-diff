__d(
  "WASmaxGroupsCreateRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsCreateOrAddGroupRateLimitErrorMixin",
    "WASmaxInGroupsDedupAttrsMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupCreatorIdentityMixin",
    "WASmaxInGroupsGroupMemberAddModeMixin",
    "WASmaxInGroupsGroupMemberLinkModeMixin",
    "WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAcceptableMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
    "WASmaxInGroupsIQErrorParentLinkedGroupsParticipantsResourceLimitMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResourceConstraintMixin",
    "WASmaxInGroupsIQErrorResourceLimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
    "WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
    "WASmaxInGroupsNonRegisteredWaUserParticipantErrorLidResponseMixin",
    "WASmaxInGroupsParentGroupDefaultMembershipApprovalModeMixin",
    "WASmaxInGroupsParticipantBotAlreadyExistsMixin",
    "WASmaxInGroupsParticipantBotIncompatibleVersionMixin",
    "WASmaxInGroupsParticipantHasInvalidPNMixin",
    "WASmaxInGroupsParticipantNotAcceptableMixin",
    "WASmaxInGroupsParticipantNotAddressableMixin",
    "WASmaxInGroupsParticipantNotAuthorizedMixin",
    "WASmaxInGroupsParticipantNotFoundMixin",
    "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
    "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
    "WASmaxInGroupsParticipantResourceConstraintMixin",
    "WASmaxInGroupsParticipantResourceLimitMixin",
    "WASmaxInGroupsParticipantTemporarilyBlockedFromDefaultSubGroupMixin",
    "WASmaxInGroupsParticipantWorkUserNotAllowedMixin",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsSubjectOwnerIdentityMixin",
    "WASmaxInGroupsUsernameAttMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseSetServerMixin",
    "WASmaxOutGroupsGroupMemberAddModeMixin",
    "WASmaxOutGroupsGroupMemberLinkModeMixin",
    "WASmaxOutGroupsGroupMemberShareGroupHistoryModeMixin",
    "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
    "WASmaxOutGroupsPermissionTokenMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = A(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = y(r, n);
          if (a.success)
            return { name: "CreateResponseSuccess", value: a.value };
          var i = c(r, n);
          if (i.success)
            return { name: "CreateResponseGroupAlreadyExists", value: i.value };
          var l = u(r, n);
          if (l.success)
            return { name: "CreateResponseClientError", value: l.value };
          var s = d(r, n);
          if (s.success)
            return { name: "CreateResponseServerError", value: s.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("Create", {
              Success: a,
              GroupAlreadyExists: i,
              ClientError: l,
              ServerError: s,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInGroupsIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = H(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCreateClientErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "group");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "g.us",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        l.value,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseJid").attrGroupJid(r.value, "jid");
      return u.success
        ? o("WAResultOrError").makeResult({
            from: a.value,
            type: i.value,
            groupJid: u.value,
          })
        : u;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = G(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            createParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup:
              n.value,
          })
        : n;
    }
    function p(e) {
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
    function _(e) {
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
    function f(e) {
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
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
      ).parseMembershipApprovalGroupJoinModeEnabledMixin(e);
      return (n.success, n);
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "linked_parent");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function y(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "group");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "description",
        p,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChild(r.value, "locked");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChild(r.value, "announcement");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChildWithTag(r.value, "parent", _);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optionalChild(
        r.value,
        "no_frequently_forwarded",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "ephemeral",
        f,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "membership_approval_mode",
        g,
      );
      if (!d.success) return d;
      var y = o("WASmaxParseUtils").optionalChild(r.value, "breakout");
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "linked_parent",
        h,
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optionalChild(r.value, "hidden_group");
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optionalChild(
        r.value,
        "allow_non_admin_sub_group_creation",
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optionalChild(r.value, "group_history");
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optionalChild(r.value, "capi");
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optionalChild(r.value, "light_e2ee");
      if (!L.success) return L;
      var E = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "g.us",
      );
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!k.success) return k;
      var I = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        I.value,
      );
      if (!T.success) return T;
      var D = o("WASmaxParseUtils").attrString(r.value, "id");
      if (!D.success) return D;
      var x = o("WASmaxParseJid").attrUserJid(r.value, "creator");
      if (!x.success) return x;
      var $ = o("WASmaxParseUtils").attrIntRange(
        r.value,
        "creation",
        0,
        void 0,
      );
      if (!$.success) return $;
      var P = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "s_t",
        0,
        void 0,
      );
      if (!P.success) return P;
      var N = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        r.value,
        "s_o",
      );
      if (!N.success) return N;
      var M = o("WASmaxInGroupsDedupAttrsMixin").parseDedupAttrsMixin(r.value),
        w = o(
          "WASmaxInGroupsGroupMemberAddModeMixin",
        ).parseGroupMemberAddModeMixin(r.value),
        A = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(r.value),
        F = o(
          "WASmaxInGroupsSubjectOwnerIdentityMixin",
        ).parseSubjectOwnerIdentityMixin(r.value),
        O = o(
          "WASmaxInGroupsGroupCreatorIdentityMixin",
        ).parseGroupCreatorIdentityMixin(r.value),
        B = o(
          "WASmaxInGroupsGroupMemberLinkModeMixin",
        ).parseGroupMemberLinkModeMixin(r.value),
        W = o(
          "WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin",
        ).parseGroupMemberShareGroupHistoryModeMixin(r.value),
        q = o(
          "WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
        ).parseNamedSubjectOrUnnamedSubjectFallbackMixinGroup(r.value);
      if (!q.success) return q;
      var U = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "participant",
        1,
        1024,
        m,
      );
      return U.success
        ? o("WAResultOrError").makeResult({
            from: E.value,
            type: k.value,
            groupId: D.value,
            groupCreator: x.value,
            groupCreation: $.value,
            groupST: P.value,
            groupSO: N.value,
            groupDedupAttrsMixin: M.success ? M.value : null,
            groupGroupMemberAddModeMixin: w.success ? w.value : null,
            groupGroupAddressingModeMixin: A.success ? A.value : null,
            groupSubjectOwnerIdentityMixin: F.success ? F.value : null,
            groupGroupCreatorIdentityMixin: O.success ? O.value : null,
            groupGroupMemberLinkModeMixin: B.success ? B.value : null,
            groupGroupMemberShareGroupHistoryModeMixin: W.success
              ? W.value
              : null,
            groupNamedSubjectOrUnnamedSubjectFallbackMixinGroup: q.value,
            groupDescription: a.value,
            hasGroupLocked: i.value != null,
            hasGroupAnnouncement: l.value != null,
            groupParent: s.value,
            hasGroupNoFrequentlyForwarded: u.value != null,
            groupEphemeral: c.value,
            groupMembershipApprovalMode: d.value,
            hasGroupBreakout: y.value != null,
            groupLinkedParent: C.value,
            hasGroupHiddenGroup: b.value != null,
            hasGroupAllowNonAdminSubGroupCreation: v.value != null,
            hasGroupGroupHistory: S.value != null,
            hasGroupCapi: R.value != null,
            hasGroupLightE2ee: L.value != null,
            groupParticipant: U.value,
          })
        : U;
    }
    function C(e) {
      var t = e.participantJid,
        n = e.participantPhoneNumber,
        r = e.participantUsername,
        a = e.permissionTokenMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutGroupsPermissionTokenMixin").mergePermissionTokenMixin,
          o("WASmaxJsx").smax("participant", {
            jid: o("WAWap").JID(t),
            phone_number: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
            username: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
          }),
          a,
        );
      return i;
    }
    function b(e) {
      var t = e.descriptionId,
        n = e.bodyElementValue,
        r = o("WASmaxJsx").smax(
          "description",
          { id: o("WAWap").CUSTOM_STRING(t) },
          o("WASmaxJsx").smax("body", null, n),
        );
      return r;
    }
    function v() {
      var e = o("WASmaxJsx").smax("locked", null);
      return e;
    }
    function S() {
      var e = o("WASmaxJsx").smax("announcement", null);
      return e;
    }
    function R(e) {
      var t = e.hasParentGroupDefaultMembershipApprovalMode,
        n = o("WASmaxMixins").optionalMerge(
          q,
          o("WASmaxJsx").smax("parent", null),
          t,
        );
      return n;
    }
    function L() {
      var e = o("WASmaxJsx").smax("no_frequently_forwarded", null);
      return e;
    }
    function E(e) {
      var t = e.ephemeralExpiration,
        n = e.ephemeralTrigger,
        r = o("WASmaxJsx").smax("ephemeral", {
          expiration: o("WAWap").INT(t),
          trigger: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function k(e) {
      var t = o(
        "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
      ).mergeMembershipApprovalGroupJoinModeMixin(
        o("WASmaxJsx").smax("membership_approval_mode", null),
        e,
      );
      return t;
    }
    function I() {
      var e = o("WASmaxJsx").smax("breakout", null);
      return e;
    }
    function T() {
      var e = o("WASmaxJsx").smax("created_as_lid", null);
      return e;
    }
    function D(e) {
      var t = e.addressingModeOverrideMode,
        n = o("WASmaxJsx").smax("addressing_mode_override", {
          mode: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function x(e) {
      var t = e.linkedParentJid,
        n = o("WASmaxJsx").smax("linked_parent", {
          jid: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function $() {
      var e = o("WASmaxJsx").smax("hidden_group", null);
      return e;
    }
    function P() {
      var e = o("WASmaxJsx").smax("allow_non_admin_sub_group_creation", null);
      return e;
    }
    function N() {
      var e = o("WASmaxJsx").smax("create_general_chat", null);
      return e;
    }
    function M() {
      var e = o("WASmaxJsx").smax("capi", null);
      return e;
    }
    function w() {
      var e = o("WASmaxJsx").smax("light_e2ee", null);
      return e;
    }
    function A(e) {
      var t,
        n,
        r = e.participantArgs,
        a = e.descriptionArgs,
        i = e.hasLocked,
        l = e.hasAnnouncement,
        s = e.parentArgs,
        u = e.hasNoFrequentlyForwarded,
        c = e.ephemeralArgs,
        d = e.membershipApprovalModeArgs,
        m = e.hasBreakout,
        p = e.hasCreatedAsLid,
        _ = e.addressingModeOverrideArgs,
        f = e.linkedParentArgs,
        g = e.hasHiddenGroup,
        h = e.hasAllowNonAdminSubGroupCreation,
        y = e.hasCreateGeneralChat,
        A = e.hasCapi,
        F = e.hasLightE2ee,
        W = e.dedupAttrsMixinArgs,
        q = e.groupMemberAddModeMixinArgs,
        U = e.groupMemberLinkModeMixinArgs,
        V = e.groupMemberShareGroupHistoryModeMixinArgs,
        H = e.namedSubjectOrUnnamedSubjectFallbackMixinGroupArgs,
        G = o("WASmaxOutGroupsBaseSetServerMixin").mergeBaseSetServerMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            B(
              (t = o("WASmaxMixins")).optionalMerge(
                o("WASmaxOutGroupsGroupMemberShareGroupHistoryModeMixin")
                  .mergeGroupMemberShareGroupHistoryModeMixin,
                t.optionalMerge(
                  o("WASmaxOutGroupsGroupMemberLinkModeMixin")
                    .mergeGroupMemberLinkModeMixin,
                  t.optionalMerge(
                    o("WASmaxOutGroupsGroupMemberAddModeMixin")
                      .mergeGroupMemberAddModeMixin,
                    t.optionalMerge(
                      O,
                      o("WASmaxJsx").smax(
                        "create",
                        null,
                        [].concat(
                          (n = o("WASmaxChildren")).REPEATED_CHILD(
                            C,
                            r,
                            0,
                            19999,
                          ),
                          [
                            n.OPTIONAL_CHILD(b, a),
                            n.HAS_OPTIONAL_CHILD(v, i),
                            n.HAS_OPTIONAL_CHILD(S, l),
                            n.OPTIONAL_CHILD(R, s),
                            n.HAS_OPTIONAL_CHILD(L, u),
                            n.OPTIONAL_CHILD(E, c),
                            n.OPTIONAL_CHILD(k, d),
                            n.HAS_OPTIONAL_CHILD(I, m),
                            n.HAS_OPTIONAL_CHILD(T, p),
                            n.OPTIONAL_CHILD(D, _),
                            n.OPTIONAL_CHILD(x, f),
                            n.HAS_OPTIONAL_CHILD($, g),
                            n.HAS_OPTIONAL_CHILD(P, h),
                            n.HAS_OPTIONAL_CHILD(N, y),
                            n.HAS_OPTIONAL_CHILD(M, A),
                            n.HAS_OPTIONAL_CHILD(w, F),
                          ],
                        ),
                      ),
                      W,
                    ),
                    q,
                  ),
                  U,
                ),
                V,
              ),
              H,
            ),
          ),
        );
      return G;
    }
    function F(e) {
      var t = e.anyKey,
        n = e.anyCreateCtx,
        r = o("WASmaxJsx").smax("smax$any", {
          key: o("WAWap").CUSTOM_STRING(t),
          create_ctx: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
        });
      return r;
    }
    function O(e, t) {
      var n = F(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function B(e, t) {
      if (t.namedSubject) return Q(e, t.namedSubject);
      if (t.unnamedSubjectFallback) return V(e, t.unnamedSubjectFallback);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function W() {
      var e = o("WASmaxJsx").smax("parent", {
        default_membership_approval_mode: "request_required",
      });
      return e;
    }
    function q(e) {
      var t = W();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function U(e) {
      var t = e.anySubject,
        n = o("WASmaxJsx").smax("smax$any", {
          subject: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
        });
      return n;
    }
    function V(e, t) {
      var n = U(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function H(e) {
      var t = o(
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorResourceConstraintMixin",
      ).parseIQErrorResourceConstraintMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorResourceConstraint",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorResourceLimitMixin",
      ).parseIQErrorResourceLimitMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorResourceLimit",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsIQErrorNotAcceptableMixin",
      ).parseIQErrorNotAcceptableMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsCreateOrAddGroupRateLimitErrorMixin",
      ).parseCreateOrAddGroupRateLimitErrorMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "CreateOrAddGroupRateLimitError",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsIQErrorParentLinkedGroupsParticipantsResourceLimitMixin",
      ).parseIQErrorParentLinkedGroupsParticipantsResourceLimitMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorParentLinkedGroupsParticipantsResourceLimit",
          value: d.value,
        });
      var m = o(
        "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
      ).parseIQErrorParentGroupSuspendedMixin(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorParentGroupSuspended",
          value: m.value,
        });
      var p = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return p.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: p.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorForbidden",
              "IQErrorResourceConstraint",
              "IQErrorItemNotFound",
              "IQErrorResourceLimit",
              "IQErrorNotAcceptable",
              "IQErrorBadRequest",
              "CreateOrAddGroupRateLimitError",
              "IQErrorRateOverlimit",
              "IQErrorNotAllowed",
              "IQErrorParentLinkedGroupsParticipantsResourceLimit",
              "IQErrorParentGroupSuspended",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p],
          );
    }
    function G(e) {
      var t = z(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "CreateParticipantAddedResponse",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsNonRegisteredWaUserParticipantErrorLidResponseMixin",
      ).parseNonRegisteredWaUserParticipantErrorLidResponseMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NonRegisteredWaUserParticipantErrorLidResponse",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantAddedResponse",
              "NonRegisteredWaUserParticipantErrorLidResponse",
            ],
            [t, n],
          );
    }
    function z(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInGroupsEnums").USERJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e),
        a = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e),
        i = j(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            jid: n.value,
            phoneNumberMixin: r.success ? r.value : null,
            usernameAttMixin: a.success ? a.value : null,
            createParticipantMixins: i.value,
          })
        : i;
    }
    function j(e) {
      var t = o(
        "WASmaxInGroupsParticipantTemporarilyBlockedFromDefaultSubGroupMixin",
      ).parseParticipantTemporarilyBlockedFromDefaultSubGroupMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantTemporarilyBlockedFromDefaultSubGroup",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsParticipantNotFoundMixin",
      ).parseParticipantNotFoundMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotFound",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsParticipantNotAuthorizedMixin",
      ).parseParticipantNotAuthorizedMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAuthorized",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
      ).parseParticipantRequestCodeCanBeSentMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantRequestCodeCanBeSent",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
      ).parseParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsParticipantHasInvalidPNMixin",
      ).parseParticipantHasInvalidPNMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantHasInvalidPN",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsParticipantResourceConstraintMixin",
      ).parseParticipantResourceConstraintMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantResourceConstraint",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsParticipantNotAcceptableMixin",
      ).parseParticipantNotAcceptableMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAcceptable",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsParticipantWorkUserNotAllowedMixin",
      ).parseParticipantWorkUserNotAllowedMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantWorkUserNotAllowed",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsParticipantResourceLimitMixin",
      ).parseParticipantResourceLimitMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantResourceLimit",
          value: d.value,
        });
      var m = o(
        "WASmaxInGroupsParticipantBotIncompatibleVersionMixin",
      ).parseParticipantBotIncompatibleVersionMixin(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantBotIncompatibleVersion",
          value: m.value,
        });
      var p = o(
        "WASmaxInGroupsParticipantBotAlreadyExistsMixin",
      ).parseParticipantBotAlreadyExistsMixin(e);
      if (p.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantBotAlreadyExists",
          value: p.value,
        });
      var _ = X(e);
      return _.success
        ? o("WAResultOrError").makeResult({
            name: "CreateParticipantAdded",
            value: _.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantTemporarilyBlockedFromDefaultSubGroup",
              "ParticipantNotFound",
              "ParticipantNotAuthorized",
              "ParticipantRequestCodeCanBeSent",
              "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
              "ParticipantHasInvalidPN",
              "ParticipantResourceConstraint",
              "ParticipantNotAcceptable",
              "ParticipantWorkUserNotAllowed",
              "ParticipantResourceLimit",
              "ParticipantBotIncompatibleVersion",
              "ParticipantBotAlreadyExists",
              "ParticipantAdded",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p, _],
          );
    }
    function K(e) {
      var t = e.anySubject,
        n = o("WASmaxJsx").smax("smax$any", {
          subject: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function Q(e, t) {
      var n = K(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function X(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "type",
        o("WASmaxInGroupsEnums").ENUM_ADMIN_SUPERADMIN,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "join_time",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsParticipantNotAddressableMixin",
      ).parseParticipantNotAddressableMixin(e);
      return o("WAResultOrError").makeResult({
        type: n.value,
        joinTime: r.value,
        participantNotAddressableMixin: a.success ? a.value : null,
      });
    }
    ((l.sendCreateRPC = e),
      (l.parseCreateResponseClientError = u),
      (l.parseCreateResponseGroupAlreadyExists = c),
      (l.parseCreateResponseServerError = d),
      (l.parseCreateResponseSuccessGroupParticipant = m),
      (l.parseCreateResponseSuccessGroupDescription = p),
      (l.parseCreateResponseSuccessGroupParent = _),
      (l.parseCreateResponseSuccessGroupEphemeral = f),
      (l.parseCreateResponseSuccessGroupMembershipApprovalMode = g),
      (l.parseCreateResponseSuccessGroupLinkedParent = h),
      (l.parseCreateResponseSuccess = y),
      (l.makeCreateRequestCreateParticipant = C),
      (l.makeCreateRequestCreateDescription = b),
      (l.makeCreateRequestCreateLocked = v),
      (l.makeCreateRequestCreateAnnouncement = S),
      (l.makeCreateRequestCreateParent = R),
      (l.makeCreateRequestCreateNoFrequentlyForwarded = L),
      (l.makeCreateRequestCreateEphemeral = E),
      (l.makeCreateRequestCreateMembershipApprovalMode = k),
      (l.makeCreateRequestCreateBreakout = I),
      (l.makeCreateRequestCreateCreatedAsLid = T),
      (l.makeCreateRequestCreateAddressingModeOverride = D),
      (l.makeCreateRequestCreateLinkedParent = x),
      (l.makeCreateRequestCreateHiddenGroup = $),
      (l.makeCreateRequestCreateAllowNonAdminSubGroupCreation = P),
      (l.makeCreateRequestCreateCreateGeneralChat = N),
      (l.makeCreateRequestCreateCapi = M),
      (l.makeCreateRequestCreateLightE2ee = w),
      (l.makeCreateRequest = A),
      (l.mergeDedupAttrsMixin = O),
      (l.mergeNamedSubjectOrUnnamedSubjectFallbackMixinGroup = B),
      (l.mergeParentGroupDefaultMembershipApprovalModeMixin = q),
      (l.mergeUnnamedSubjectFallbackMixin = V),
      (l.parseCreateClientErrors = H),
      (l.parseCreateParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup =
        G),
      (l.parseCreateParticipantAddedResponseMixin = z),
      (l.parseCreateParticipantMixins = j),
      (l.mergeNamedSubjectMixin = Q),
      (l.parseCreateParticipantAddedMixin = X));
  },
  98,
);
