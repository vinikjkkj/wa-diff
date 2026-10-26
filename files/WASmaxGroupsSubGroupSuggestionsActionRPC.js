__d(
  "WASmaxGroupsSubGroupSuggestionsActionRPC",
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
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseSetGroupMixin",
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
          var n = E(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = h(r, n);
          if (a.success)
            return {
              name: "SubGroupSuggestionsActionResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "SubGroupSuggestionsActionResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "SubGroupSuggestionsActionResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "SubGroupSuggestionsAction",
              { Success: a, ClientError: i, ServerError: l },
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
      var i = T(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSubGroupSuggestionsActionClientErrors: i.value,
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
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = k(e);
      if (!n.success) return n;
      var r = o(
          "WASmaxInGroupsGroupCreatorUsernameMixin",
        ).parseGroupCreatorUsernameMixin(e),
        a = y(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          groupCreatorUsernameMixin: r.success ? r.value : null,
          subGroupSuggestionsApprovalErrors: a.success ? a.value : null,
        }),
      );
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "approve");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "sub_group_suggestion",
        1,
        1e3,
        d,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ subGroupSuggestion: n.value })
        : n;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = k(e);
      if (!n.success) return n;
      var r = o(
          "WASmaxInGroupsGroupCreatorUsernameMixin",
        ).parseGroupCreatorUsernameMixin(e),
        a = N(e),
        i = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          groupCreatorUsernameMixin: r.success ? r.value : null,
          subGroupSuggestionsActionSubGroupSuggestionNotFoundMixin: a.success
            ? a.value
            : null,
          identityMixin: i.success ? i.value : null,
        }),
      );
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "reject");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "sub_group_suggestion",
        1,
        1e3,
        p,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ subGroupSuggestion: n.value })
        : n;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = I(e);
      if (!n.success) return n;
      var r = N(e),
        a = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          subGroupSuggestionsActionSubGroupSuggestionNotFoundMixin: r.success
            ? r.value
            : null,
          identityMixin: a.success ? a.value : null,
        }),
      );
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "cancel");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "sub_group_suggestion",
        1,
        1e3,
        f,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ subGroupSuggestion: n.value })
        : n;
    }
    function h(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "sub_group_suggestions_action",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "approve", m);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "reject", _);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(r.value, "cancel", g);
      if (!l.success) return l;
      var s = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!s.success) return s;
      var u = o(
        "WASmaxInGroupsGroupAddressingModeMixin",
      ).parseGroupAddressingModeMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, s.value, {
          groupAddressingModeMixin: u.success ? u.value : null,
          subGroupSuggestionsActionApprove: a.value,
          subGroupSuggestionsActionReject: i.value,
          subGroupSuggestionsActionCancel: l.value,
        }),
      );
    }
    function y(e) {
      var t = N(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupSuggestionNotFound",
          value: t.value,
        });
      var n = P(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupSuggestionConflict",
          value: n.value,
        });
      var r = $(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupResourceConstraint",
          value: r.value,
        });
      var a = x(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupPendingGroupAddsError",
          value: a.value,
        });
      var i = D(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "SubGroupSuggestionsActionSubGroupCreationInternalServerError",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "SubGroupSuggestionNotFound",
              "SubGroupSuggestionConflict",
              "SubGroupResourceConstraint",
              "SubGroupPendingGroupAddsError",
              "SubGroupCreationInternalServerError",
            ],
            [t, n, r, a, i],
          );
    }
    function C(e) {
      var t = w(o("WASmaxJsx").smax("sub_group_suggestion", null), e);
      return t;
    }
    function b(e) {
      var t = e.subGroupSuggestionArgs,
        n = o("WASmaxJsx").smax(
          "approve",
          null,
          o("WASmaxChildren").REPEATED_CHILD(C, t, 1, 1e3),
        );
      return n;
    }
    function v(e) {
      var t = w(o("WASmaxJsx").smax("sub_group_suggestion", null), e);
      return t;
    }
    function S(e) {
      var t = e.subGroupSuggestionArgs,
        n = o("WASmaxJsx").smax(
          "reject",
          null,
          o("WASmaxChildren").REPEATED_CHILD(v, t, 1, 1e3),
        );
      return n;
    }
    function R(e) {
      var t = F(o("WASmaxJsx").smax("sub_group_suggestion", null), e);
      return t;
    }
    function L(e) {
      var t = e.subGroupSuggestionArgs,
        n = o("WASmaxJsx").smax(
          "cancel",
          null,
          o("WASmaxChildren").REPEATED_CHILD(R, t, 1, 1e3),
        );
      return n;
    }
    function E(e) {
      var t = e.approveArgs,
        n = e.rejectArgs,
        r = e.cancelArgs,
        a = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "sub_group_suggestions_action",
              null,
              o("WASmaxChildren").OPTIONAL_CHILD(b, t),
              o("WASmaxChildren").OPTIONAL_CHILD(S, n),
              o("WASmaxChildren").OPTIONAL_CHILD(L, r),
            ),
          ),
          e,
        );
      return a;
    }
    function k(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "creator");
      if (!n.success) return n;
      var r = I(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsGroupCreatorPhoneNumberMixin",
      ).parseGroupCreatorPhoneNumberMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ creator: n.value }, r.value, {
          groupCreatorPhoneNumberMixin: a.success ? a.value : null,
        }),
      );
    }
    function I(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function T(e) {
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
      var r = o(
        "WASmaxInGroupsIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
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
              "IQErrorBadRequest",
              "IQErrorItemNotFound",
              "IQErrorNotAuthorized",
              "IQErrorRateOverlimit",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i],
          );
    }
    function D(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "500",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function x(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "433",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function $(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "419",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function P(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "409",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function N(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "404",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function M(e) {
      var t = e.subGroupSuggestionCreator,
        n = e.groupCreatorPhoneNumberMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          B,
          F(
            o("WASmaxJsx").smax("sub_group_suggestion", {
              creator: o("WAWap").USER_JID(t),
            }),
            e,
          ),
          n,
        );
      return r;
    }
    function w(e, t) {
      var n = M(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function A(e) {
      var t = e.subGroupSuggestionJid,
        n = o("WASmaxJsx").smax("sub_group_suggestion", {
          jid: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function F(e, t) {
      var n = A(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function O(e) {
      var t = e.anyCreatorPn,
        n = o("WASmaxJsx").smax("smax$any", { creator_pn: o("WAWap").JID(t) });
      return n;
    }
    function B(e, t) {
      var n = O(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendSubGroupSuggestionsActionRPC = e),
      (l.parseSubGroupSuggestionsActionResponseClientError = u),
      (l.parseSubGroupSuggestionsActionResponseServerError = c),
      (l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionApproveSubGroupSuggestion =
        d),
      (l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionApprove =
        m),
      (l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionRejectSubGroupSuggestion =
        p),
      (l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionReject =
        _),
      (l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionCancelSubGroupSuggestion =
        f),
      (l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionCancel =
        g),
      (l.parseSubGroupSuggestionsActionResponseSuccess = h),
      (l.parseSubGroupSuggestionsApprovalErrors = y),
      (l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionApproveSubGroupSuggestion =
        C),
      (l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionApprove =
        b),
      (l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionRejectSubGroupSuggestion =
        v),
      (l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionReject =
        S),
      (l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionCancelSubGroupSuggestion =
        R),
      (l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionCancel =
        L),
      (l.makeSubGroupSuggestionsActionRequest = E),
      (l.parseSubGroupSuggestionMixin = k),
      (l.parseSubGroupSuggestionWithoutCreatorMixin = I),
      (l.parseSubGroupSuggestionsActionClientErrors = T),
      (l.parseSubGroupSuggestionsActionSubGroupCreationInternalServerErrorMixin =
        D),
      (l.parseSubGroupSuggestionsActionSubGroupPendingGroupAddsErrorMixin = x),
      (l.parseSubGroupSuggestionsActionSubGroupResourceConstraintMixin = $),
      (l.parseSubGroupSuggestionsActionSubGroupSuggestionConflictMixin = P),
      (l.parseSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin = N),
      (l.mergeSubGroupSuggestionMixin = w),
      (l.mergeSubGroupSuggestionWithoutCreatorMixin = F),
      (l.mergeGroupCreatorPhoneNumberMixin = B));
  },
  98,
);
