__d(
  "WASmaxGroupsCreateSubGroupSuggestionRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupCreatorPhoneNumberMixin",
    "WASmaxInGroupsGroupCreatorUsernameMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAcceptableMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResourceLimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsSubGroupBadRequestMixin",
    "WASmaxInGroupsSubGroupConflictMixin",
    "WASmaxInGroupsSubGroupNotAcceptableMixin",
    "WASmaxInGroupsSubGroupNotAuthorizedMixin",
    "WASmaxInGroupsSubGroupNotExistMixin",
    "WASmaxInGroupsSubGroupResourceLimitMixin",
    "WASmaxInGroupsSubGroupServerErrorMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxOutGroupsGroupMemberAddModeMixin",
    "WASmaxOutGroupsGroupMemberLinkModeMixin",
    "WASmaxOutGroupsGroupMemberShareGroupHistoryModeMixin",
    "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = g(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = m(r, n);
      if (a.success)
        return {
          name: "CreateSubGroupSuggestionResponseNewGroupSuggestionSuccess",
          value: a.value,
        };
      var i = c(r, n);
      if (i.success)
        return {
          name: "CreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess",
          value: i.value,
        };
      var l = s(r, n);
      if (l.success)
        return {
          name: "CreateSubGroupSuggestionResponseClientError",
          value: l.value,
        };
      var u = p(r, n);
      if (u.success)
        return {
          name: "CreateSubGroupSuggestionResponseServerError",
          value: u.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("CreateSubGroupSuggestion", {
          NewGroupSuggestionSuccess: a,
          ExistingGroupsSuggestionSuccess: i,
          ClientError: l,
          ServerError: u,
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
      var i = y(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCreateSubGroupSuggestionErrors: i.value,
            }),
          )
        : i;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      if (!n.success) return n;
      var r = _(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        subGroupNotAuthorizedOrNotExistOrConflictOrSuggestionNotAllowedOrResourceLimitOrBadRequestOrNotAcceptableOrServerErrorMixinGroup:
          r.success ? r.value : null,
      });
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "sub_group_suggestion",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        l = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "group",
          1,
          1e3,
          u,
        );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              groupAddressingModeMixin: i.success ? i.value : null,
              subGroupSuggestionGroup: l.value,
            }),
          )
        : l;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "description");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "406",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "sub_group_suggestion",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "description",
        d,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseJid").attrGroupJid(r.value, "jid");
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrUserJid(r.value, "creator");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrIntRange(
        r.value,
        "creation",
        0,
        void 0,
      );
      if (!s.success) return s;
      var u = o(
          "WASmaxInGroupsGroupCreatorPhoneNumberMixin",
        ).parseGroupCreatorPhoneNumberMixin(r.value),
        c = o(
          "WASmaxInGroupsGroupCreatorUsernameMixin",
        ).parseGroupCreatorUsernameMixin(r.value),
        m = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(
          e,
          t,
        );
      if (!m.success) return m;
      var p = o(
        "WASmaxInGroupsGroupAddressingModeMixin",
      ).parseGroupAddressingModeMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            subGroupSuggestionJid: i.value,
            subGroupSuggestionCreator: l.value,
            subGroupSuggestionCreation: s.value,
            subGroupSuggestionGroupCreatorPhoneNumberMixin: u.success
              ? u.value
              : null,
            subGroupSuggestionGroupCreatorUsernameMixin: c.success
              ? c.value
              : null,
          },
          m.value,
          {
            groupAddressingModeMixin: p.success ? p.value : null,
            subGroupSuggestionDescription: a.value,
          },
        ),
      );
    }
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function _(e) {
      var t = o(
        "WASmaxInGroupsSubGroupNotAuthorizedMixin",
      ).parseSubGroupNotAuthorizedMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotAuthorized",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsSubGroupNotExistMixin",
      ).parseSubGroupNotExistMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotExist",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsSubGroupConflictMixin",
      ).parseSubGroupConflictMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupConflict",
          value: r.value,
        });
      var a = f(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionNotAllowed",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsSubGroupResourceLimitMixin",
      ).parseSubGroupResourceLimitMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupResourceLimit",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsSubGroupBadRequestMixin",
      ).parseSubGroupBadRequestMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupBadRequest",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsSubGroupNotAcceptableMixin",
      ).parseSubGroupNotAcceptableMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotAcceptable",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsSubGroupServerErrorMixin",
      ).parseSubGroupServerErrorMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult({
            name: "SubGroupServerError",
            value: u.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "SubGroupNotAuthorized",
              "SubGroupNotExist",
              "SubGroupConflict",
              "SubGroupSuggestionNotAllowed",
              "SubGroupResourceLimit",
              "SubGroupBadRequest",
              "SubGroupNotAcceptable",
              "SubGroupServerError",
            ],
            [t, n, r, a, i, l, s, u],
          );
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "405",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function g(e) {
      var t =
          e.suggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroupArgs,
        n = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            h(o("WASmaxJsx").smax("sub_group_suggestion", null), t),
          ),
          e,
        );
      return n;
    }
    function h(e, t) {
      if (t.createSubGroupSuggestionSuggestionForNewGroup)
        return D(e, t.createSubGroupSuggestionSuggestionForNewGroup);
      if (t.createSubGroupSuggestionSuggestionForExistingGroups)
        return S(e, t.createSubGroupSuggestionSuggestionForExistingGroups);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function y(e) {
      var t = o(
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
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
      var r = o(
        "WASmaxInGroupsIQErrorResourceLimitMixin",
      ).parseIQErrorResourceLimitMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorResourceLimit",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorNotAcceptableMixin",
      ).parseIQErrorNotAcceptableMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
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
        "WASmaxInGroupsIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: u.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorForbidden",
              "IQErrorItemNotFound",
              "IQErrorResourceLimit",
              "IQErrorNotAcceptable",
              "IQErrorRateOverlimit",
              "IQErrorBadRequest",
              "IQErrorNotAllowed",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s, u],
          );
    }
    function C(e) {
      var t = e.hasHiddenGroup,
        n = e.groupJid,
        r = o("WASmaxJsx").smax(
          "group",
          { jid: o("WAWap").GROUP_JID(n) },
          o("WASmaxChildren").HAS_OPTIONAL_CHILD(b, t),
        );
      return r;
    }
    function b() {
      var e = o("WASmaxJsx").smax("hidden_group", null);
      return e;
    }
    function v(e) {
      var t = e.groupArgs,
        n = o("WASmaxJsx").smax(
          "sub_group_suggestion",
          null,
          o("WASmaxChildren").REPEATED_CHILD(C, t, 1, 1e3),
        );
      return n;
    }
    function S(e, t) {
      var n = v(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function R(e) {
      var t = e.bodyElementValue,
        n = o("WASmaxJsx").smax(
          "description",
          null,
          o("WASmaxJsx").smax("body", null, t),
        );
      return n;
    }
    function L() {
      var e = o("WASmaxJsx").smax("locked", null);
      return e;
    }
    function E() {
      var e = o("WASmaxJsx").smax("announcement", null);
      return e;
    }
    function k() {
      var e = o("WASmaxJsx").smax("hidden_group", null);
      return e;
    }
    function I(e) {
      var t = o(
        "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
      ).mergeMembershipApprovalGroupJoinModeMixin(
        o("WASmaxJsx").smax("membership_approval_mode", null),
        e,
      );
      return t;
    }
    function T(e) {
      var t,
        n = e.descriptionArgs,
        r = e.hasLocked,
        a = e.hasAnnouncement,
        i = e.hasHiddenGroup,
        l = e.membershipApprovalModeArgs,
        s = e.groupMemberAddModeMixinArgs,
        u = e.groupMemberLinkModeMixinArgs,
        c = e.groupMemberShareGroupHistoryModeMixinArgs,
        d = e.subjectElementValue,
        m = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutGroupsGroupMemberShareGroupHistoryModeMixin")
            .mergeGroupMemberShareGroupHistoryModeMixin,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutGroupsGroupMemberLinkModeMixin")
              .mergeGroupMemberLinkModeMixin,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutGroupsGroupMemberAddModeMixin")
                .mergeGroupMemberAddModeMixin,
              o("WASmaxJsx").smax(
                "sub_group_suggestion",
                null,
                o("WASmaxJsx").smax("subject", null, d),
                (t = o("WASmaxChildren")).OPTIONAL_CHILD(R, n),
                t.HAS_OPTIONAL_CHILD(L, r),
                t.HAS_OPTIONAL_CHILD(E, a),
                t.HAS_OPTIONAL_CHILD(k, i),
                t.OPTIONAL_CHILD(I, l),
              ),
              s,
            ),
            u,
          ),
          c,
        );
      return m;
    }
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendCreateSubGroupSuggestionRPC = e),
      (l.parseCreateSubGroupSuggestionResponseClientError = s),
      (l.parseCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess =
        c),
      (l.parseCreateSubGroupSuggestionResponseNewGroupSuggestionSuccess = m),
      (l.parseCreateSubGroupSuggestionResponseServerError = p),
      (l.makeCreateSubGroupSuggestionRequest = g));
  },
  98,
);
