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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = h(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = p(r, n);
          if (a.success)
            return {
              name: "CreateSubGroupSuggestionResponseNewGroupSuggestionSuccess",
              value: a.value,
            };
          var i = d(r, n);
          if (i.success)
            return {
              name: "CreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess",
              value: i.value,
            };
          var l = u(r, n);
          if (l.success)
            return {
              name: "CreateSubGroupSuggestionResponseClientError",
              value: l.value,
            };
          var s = _(r, n);
          if (s.success)
            return {
              name: "CreateSubGroupSuggestionResponseServerError",
              value: s.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "CreateSubGroupSuggestion",
              {
                NewGroupSuggestionSuccess: a,
                ExistingGroupsSuggestionSuccess: i,
                ClientError: l,
                ServerError: s,
              },
            ),
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
      var i = C(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCreateSubGroupSuggestionErrors: i.value,
            }),
          )
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      if (!n.success) return n;
      var r = f(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        subGroupNotAuthorizedOrNotExistOrConflictOrSuggestionNotAllowedOrResourceLimitOrBadRequestOrNotAcceptableOrServerErrorMixinGroup:
          r.success ? r.value : null,
      });
    }
    function d(e, t) {
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
          c,
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
    function m(e) {
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
    function p(e, t) {
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
        m,
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
        d = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(
          e,
          t,
        );
      if (!d.success) return d;
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
          d.value,
          {
            groupAddressingModeMixin: p.success ? p.value : null,
            subGroupSuggestionDescription: a.value,
          },
        ),
      );
    }
    function _(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function f(e) {
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
      var a = g(e);
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
    function g(e) {
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
    function h(e) {
      var t =
          e.suggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroupArgs,
        n = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            y(o("WASmaxJsx").smax("sub_group_suggestion", null), t),
          ),
          e,
        );
      return n;
    }
    function y(e, t) {
      if (t.createSubGroupSuggestionSuggestionForNewGroup)
        return x(e, t.createSubGroupSuggestionSuggestionForNewGroup);
      if (t.createSubGroupSuggestionSuggestionForExistingGroups)
        return R(e, t.createSubGroupSuggestionSuggestionForExistingGroups);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function C(e) {
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
    function b(e) {
      var t = e.hasHiddenGroup,
        n = e.groupJid,
        r = o("WASmaxJsx").smax(
          "group",
          { jid: o("WAWap").GROUP_JID(n) },
          o("WASmaxChildren").HAS_OPTIONAL_CHILD(v, t),
        );
      return r;
    }
    function v() {
      var e = o("WASmaxJsx").smax("hidden_group", null);
      return e;
    }
    function S(e) {
      var t = e.groupArgs,
        n = o("WASmaxJsx").smax(
          "sub_group_suggestion",
          null,
          o("WASmaxChildren").REPEATED_CHILD(b, t, 1, 1e3),
        );
      return n;
    }
    function R(e, t) {
      var n = S(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function L(e) {
      var t = e.bodyElementValue,
        n = o("WASmaxJsx").smax(
          "description",
          null,
          o("WASmaxJsx").smax("body", null, t),
        );
      return n;
    }
    function E() {
      var e = o("WASmaxJsx").smax("locked", null);
      return e;
    }
    function k() {
      var e = o("WASmaxJsx").smax("announcement", null);
      return e;
    }
    function I() {
      var e = o("WASmaxJsx").smax("hidden_group", null);
      return e;
    }
    function T(e) {
      var t = o(
        "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
      ).mergeMembershipApprovalGroupJoinModeMixin(
        o("WASmaxJsx").smax("membership_approval_mode", null),
        e,
      );
      return t;
    }
    function D(e) {
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
                (t = o("WASmaxChildren")).OPTIONAL_CHILD(L, n),
                t.HAS_OPTIONAL_CHILD(E, r),
                t.HAS_OPTIONAL_CHILD(k, a),
                t.HAS_OPTIONAL_CHILD(I, i),
                t.OPTIONAL_CHILD(T, l),
              ),
              s,
            ),
            u,
          ),
          c,
        );
      return m;
    }
    function x(e, t) {
      var n = D(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendCreateSubGroupSuggestionRPC = e),
      (l.parseCreateSubGroupSuggestionResponseClientError = u),
      (l.parseCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccessSubGroupSuggestionGroup =
        c),
      (l.parseCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess =
        d),
      (l.parseCreateSubGroupSuggestionResponseNewGroupSuggestionSuccessSubGroupSuggestionDescription =
        m),
      (l.parseCreateSubGroupSuggestionResponseNewGroupSuggestionSuccess = p),
      (l.parseCreateSubGroupSuggestionResponseServerError = _),
      (l.parseSubGroupNotAuthorizedOrNotExistOrConflictOrSuggestionNotAllowedOrResourceLimitOrBadRequestOrNotAcceptableOrServerErrorMixinGroup =
        f),
      (l.parseSubGroupSuggestionNotAllowedMixin = g),
      (l.makeCreateSubGroupSuggestionRequest = h),
      (l.mergeSuggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroup =
        y),
      (l.parseCreateSubGroupSuggestionErrors = C),
      (l.makeCreateSubGroupSuggestionSuggestionForExistingGroupsGroup = b),
      (l.makeCreateSubGroupSuggestionSuggestionForExistingGroupsGroupHiddenGroup =
        v),
      (l.mergeCreateSubGroupSuggestionSuggestionForExistingGroupsMixin = R),
      (l.makeCreateSubGroupSuggestionSuggestionForNewGroupDescription = L),
      (l.makeCreateSubGroupSuggestionSuggestionForNewGroupLocked = E),
      (l.makeCreateSubGroupSuggestionSuggestionForNewGroupAnnouncement = k),
      (l.makeCreateSubGroupSuggestionSuggestionForNewGroupHiddenGroup = I),
      (l.makeCreateSubGroupSuggestionSuggestionForNewGroupMembershipApprovalMode =
        T),
      (l.mergeCreateSubGroupSuggestionSuggestionForNewGroupMixin = x));
  },
  98,
);
