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
    "WASmaxInGroupsIQErrorGrowthLockedMixin",
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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = y(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = c(r, n);
      if (a.success)
        return { name: "GetInviteGroupInfoResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return {
          name: "GetInviteGroupInfoResponseClientError",
          value: i.value,
        };
      var l = u(r, n);
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
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInGroupsIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = C(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetInviteGroupInfoClientErrors: i.value,
            }),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function c(e, t) {
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
      var d = h(r.value);
      return d.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            groupSize: c.value,
            groupInviteLinkGroupInfoMixin: d.value,
          })
        : d;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsGroupInfoParticipantMixin",
      ).parseGroupInfoParticipantMixin(e);
      return (n.success, n);
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "parent");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "num_sub_groups", 1, 1e3);
      return n.success
        ? o("WAResultOrError").makeResult({ numSubGroups: n.value })
        : n;
    }
    function p(e) {
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
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
      ).parseMembershipApprovalGroupJoinModeEnabledMixin(e);
      return (n.success, n);
    }
    function f(e) {
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
    function g(e) {
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
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "description");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "parent", m);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(e, "linked_parent", p);
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
        _,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "membership_approval_request",
        f,
      );
      if (!c.success) return c;
      var h = o("WASmaxParseUtils").optionalChild(e, "capi");
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optionalChild(e, "work");
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optionalChildWithTag(e, "ephemeral", g);
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optionalChild(e, "group_join_context");
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").attrIntRange(e, "size", 0, 19999);
      if (!v.success) return v;
      var S = o(
          "WASmaxInGroupsGroupInfoDescriptionMixin",
        ).parseGroupInfoDescriptionMixin(n.value),
        R = o(
          "WASmaxInGroupsGroupInfoAttributesMixin",
        ).parseGroupInfoAttributesMixin(e);
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "participant",
        0,
        19999,
        d,
      );
      return L.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                size: v.value,
                descriptionGroupInfoDescriptionMixin: S.success
                  ? S.value
                  : null,
              },
              R.value,
              {
                parent: r.value,
                linkedParent: a.value,
                hasHiddenGroup: i.value != null,
                hasDefaultSubGroup: l.value != null,
                hasGeneralChat: s.value != null,
                membershipApprovalMode: u.value,
                membershipApprovalRequest: c.value,
                hasCapi: h.value != null,
                hasWork: y.value != null,
                ephemeral: C.value,
                hasGroupJoinContext: b.value != null,
                participant: L.value,
              },
            ),
          )
        : L;
    }
    function y(e) {
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
    function C(e) {
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
      var s = o(
        "WASmaxInGroupsIQErrorGrowthLockedMixin",
      ).parseIQErrorGrowthLockedMixin(e);
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
    ((l.sendGetInviteGroupInfoRPC = e),
      (l.parseGetInviteGroupInfoResponseClientError = s),
      (l.parseGetInviteGroupInfoResponseServerError = u),
      (l.parseGetInviteGroupInfoResponseSuccess = c),
      (l.makeGetInviteGroupInfoRequest = y));
  },
  98,
);
