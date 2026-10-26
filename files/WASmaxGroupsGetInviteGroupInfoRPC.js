__d(
  "WASmaxGroupsGetInviteGroupInfoRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsGroupInfoAttributesMixin",
    "WASmaxInGroupsGroupInfoDescriptionMixin",
    "WASmaxInGroupsGroupInfoParticipantMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorGoneMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAcceptableMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
    "WASmaxInGroupsNamedSubjectMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseGetServerMixin",
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
          var n = C(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = d(r, n);
          if (a.success)
            return {
              name: "GetInviteGroupInfoResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetInviteGroupInfoResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetInviteGroupInfoResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetInviteGroupInfo", {
              Success: a,
              ClientError: i,
              ServerError: l,
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
      var i = b(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetInviteGroupInfoClientErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "group");
      if (!r.success) return r;
      var a = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        s.value,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrIntRange(r.value, "size", 0, 19999);
      if (!c.success) return c;
      var d = y(r.value);
      return d.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            groupSize: c.value,
            groupInviteLinkGroupInfoMixin: d.value,
          })
        : d;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsGroupInfoParticipantMixin",
      ).parseGroupInfoParticipantMixin(e);
      return (n.success, n);
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "parent");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "num_sub_groups", 1, 1e3);
      return n.success
        ? o("WAResultOrError").makeResult({ numSubGroups: n.value })
        : n;
    }
    function _(e) {
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
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
      ).parseMembershipApprovalGroupJoinModeEnabledMixin(e);
      return (n.success, n);
    }
    function g(e) {
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
    function h(e) {
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
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "description");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "parent", p);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(e, "linked_parent", _);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChild(e, "hidden_group");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChild(e, "default_sub_group");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChild(e, "general_chat");
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "membership_approval_mode",
        f,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "membership_approval_request",
        g,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optionalChild(e, "capi");
      if (!d.success) return d;
      var y = o("WASmaxParseUtils").optionalChild(e, "work");
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optionalChild(e, "light_e2ee");
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optionalChildWithTag(e, "ephemeral", h);
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optionalChild(e, "group_join_context");
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").attrIntRange(e, "size", 0, 19999);
      if (!S.success) return S;
      var R = o(
          "WASmaxInGroupsGroupInfoDescriptionMixin",
        ).parseGroupInfoDescriptionMixin(n.value),
        L = o(
          "WASmaxInGroupsGroupInfoAttributesMixin",
        ).parseGroupInfoAttributesMixin(e);
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "participant",
        0,
        19999,
        m,
      );
      return E.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                size: S.value,
                descriptionGroupInfoDescriptionMixin: R.success
                  ? R.value
                  : null,
              },
              L.value,
              {
                parent: r.value,
                linkedParent: a.value,
                hasHiddenGroup: i.value != null,
                hasDefaultSubGroup: l.value != null,
                hasGeneralChat: s.value != null,
                membershipApprovalMode: u.value,
                membershipApprovalRequest: c.value,
                hasCapi: d.value != null,
                hasWork: y.value != null,
                hasLightE2ee: C.value != null,
                ephemeral: b.value,
                hasGroupJoinContext: v.value != null,
                participant: E.value,
              },
            ),
          )
        : E;
    }
    function C(e) {
      var t = e.inviteCode,
        n = o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("invite", {
              code: o("WAWap").CUSTOM_STRING(t),
            }),
          ),
        );
      return n;
    }
    function b(e) {
      var t = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: n.value,
        });
      var r = o("WASmaxInGroupsIQErrorGoneMixin").parseIQErrorGoneMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorGone",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
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
      var l = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorLocked",
          value: l.value,
        });
      var s = S(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorGrowthLocked",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
      ).parseIQErrorParentGroupSuspendedMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorParentGroupSuspended",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return c.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: c.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorItemNotFound",
              "IQErrorGone",
              "IQErrorNotAuthorized",
              "IQErrorNotAcceptable",
              "IQErrorLocked",
              "IQErrorGrowthLocked",
              "IQErrorParentGroupSuspended",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s, u, c],
          );
    }
    function v(e) {
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
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "growth_locked", v);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "growth-locked",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        436,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            text: r.value,
            code: a.value,
            growthLocked: n.value,
          })
        : a;
    }
    ((l.sendGetInviteGroupInfoRPC = e),
      (l.parseGetInviteGroupInfoResponseClientError = u),
      (l.parseGetInviteGroupInfoResponseServerError = c),
      (l.parseGetInviteGroupInfoResponseSuccess = d),
      (l.parseInviteLinkGroupInfoParticipant = m),
      (l.parseInviteLinkGroupInfoParent = p),
      (l.parseInviteLinkGroupInfoLinkedParent = _),
      (l.parseInviteLinkGroupInfoMembershipApprovalMode = f),
      (l.parseInviteLinkGroupInfoMembershipApprovalRequest = g),
      (l.parseInviteLinkGroupInfoEphemeral = h),
      (l.parseInviteLinkGroupInfoMixin = y),
      (l.makeGetInviteGroupInfoRequest = C),
      (l.parseGetInviteGroupInfoClientErrors = b),
      (l.parseIQErrorGrowthLockedGrowthLocked = v),
      (l.parseIQErrorGrowthLockedMixin = S));
  },
  98,
);
