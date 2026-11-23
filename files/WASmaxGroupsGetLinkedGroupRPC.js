__d(
  "WASmaxGroupsGetLinkedGroupRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupInfoAttributesMixin",
    "WASmaxInGroupsGroupInfoDescriptionMixin",
    "WASmaxInGroupsGroupInfoParticipantMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseGetGroupMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = C(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = c(r, n);
      if (a.success)
        return { name: "GetLinkedGroupResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "GetLinkedGroupResponseClientError", value: i.value };
      var l = u(r, n);
      if (l.success)
        return { name: "GetLinkedGroupResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetLinkedGroup", {
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
      var i = S(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetLinkedGroupClientErrors: i.value,
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
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "linked_group");
      if (!r.success) return r;
      var a = y(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!i.success) return i;
      var l = o(
        "WASmaxInGroupsGroupAddressingModeMixin",
      ).parseGroupAddressingModeMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { linkedGroupLinkedGroupInfoMixin: a.value },
          i.value,
          { groupAddressingModeMixin: l.success ? l.value : null },
        ),
      );
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
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
      ).parseMembershipApprovalGroupJoinModeEnabledMixin(e);
      return (n.success, n);
    }
    function p(e) {
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
    function _(e) {
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
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "appeal_status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInGroupsEnums").ENUM_APPROVED_INREVIEW_NONE_REJECTED,
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "appeal_update_time");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "value", 0, void 0);
      return n.success
        ? o("WAResultOrError").makeResult({ value: n.value })
        : n;
    }
    function h(e) {
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
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "linked_group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "group");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "description",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "membership_approval_mode",
        m,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "membership_approval_request",
        p,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChild(
        n.value,
        "admin_request_required",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChild(n.value, "hidden_group");
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "suspended",
        _,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "appeal_status",
        f,
      );
      if (!c.success) return c;
      var y = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "appeal_update_time",
        g,
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optionalChild(
        n.value,
        "group_safety_check",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optionalChild(
        n.value,
        "participant_label_enabled",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "limit_sharing_enabled",
        h,
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optionalChild(
        n.value,
        "limit_companion_sharing_enabled",
      );
      if (!S.success) return S;
      var R = o("WASmaxParseJid").attrGroupJid(e, "jid");
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").attrIntRange(n.value, "size", 1, 19999);
      if (!L.success) return L;
      var E = o(
          "WASmaxInGroupsGroupInfoDescriptionMixin",
        ).parseGroupInfoDescriptionMixin(r.value),
        k = o(
          "WASmaxInGroupsGroupInfoAttributesMixin",
        ).parseGroupInfoAttributesMixin(n.value);
      if (!k.success) return k;
      var I = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(n.value),
        T = o("WASmaxParseUtils").mapChildrenWithTag(
          n.value,
          "participant",
          0,
          19999,
          d,
        );
      return T.success
        ? o("WAResultOrError").makeResult({
            jid: R.value,
            groupSize: L.value,
            groupDescriptionGroupInfoDescriptionMixin: E.success
              ? E.value
              : null,
            groupGroupInfoAttributesMixin: k.value,
            groupGroupAddressingModeMixin: I.success ? I.value : null,
            groupMembershipApprovalMode: a.value,
            groupMembershipApprovalRequest: i.value,
            hasGroupAdminRequestRequired: l.value != null,
            hasGroupHiddenGroup: s.value != null,
            groupSuspended: u.value,
            groupAppealStatus: c.value,
            groupAppealUpdateTime: y.value,
            hasGroupGroupSafetyCheck: C.value != null,
            hasGroupParticipantLabelEnabled: b.value != null,
            groupLimitSharingEnabled: v.value,
            hasGroupLimitCompanionSharingEnabled: S.value != null,
            groupParticipant: T.value,
          })
        : T;
    }
    function C(e) {
      var t = v(
        o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
          o("WASmaxJsx").smax("iq", null),
          e,
        ),
        e,
      );
      return t;
    }
    function b(e) {
      var t = e.queryLinkedType,
        n = e.queryLinkedJid,
        r = e.optionalSubGroupMixinArgs,
        a = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxMixins").optionalMerge(
            L,
            o("WASmaxJsx").smax("query_linked", {
              type: o("WAWap").CUSTOM_STRING(t),
              jid: o("WAWap").GROUP_JID(n),
            }),
            r,
          ),
        );
      return a;
    }
    function v(e, t) {
      var n = b(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function S(e) {
      var t = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorItemNotFound",
              "IQErrorForbidden",
              "IQErrorBadRequest",
              "IQErrorNotAllowed",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i],
          );
    }
    function R(e) {
      var t = e.anySubGroupJid,
        n = o("WASmaxJsx").smax("smax$any", {
          sub_group_jid: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function L(e, t) {
      var n = R(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendGetLinkedGroupRPC = e),
      (l.parseGetLinkedGroupResponseClientError = s),
      (l.parseGetLinkedGroupResponseServerError = u),
      (l.parseGetLinkedGroupResponseSuccess = c),
      (l.makeGetLinkedGroupRequest = C));
  },
  98,
);
