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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = L(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = g(r, n);
      if (a.success)
        return {
          name: "SubGroupSuggestionsActionResponseSuccess",
          value: a.value,
        };
      var i = s(r, n);
      if (i.success)
        return {
          name: "SubGroupSuggestionsActionResponseClientError",
          value: i.value,
        };
      var l = u(r, n);
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
      var i = I(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSubGroupSuggestionsActionClientErrors: i.value,
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
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = E(e);
      if (!n.success) return n;
      var r = o(
          "WASmaxInGroupsGroupCreatorUsernameMixin",
        ).parseGroupCreatorUsernameMixin(e),
        a = h(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          groupCreatorUsernameMixin: r.success ? r.value : null,
          subGroupSuggestionsApprovalErrors: a.success ? a.value : null,
        }),
      );
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "approve");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "sub_group_suggestion",
        1,
        1e3,
        c,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ subGroupSuggestion: n.value })
        : n;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = E(e);
      if (!n.success) return n;
      var r = o(
          "WASmaxInGroupsGroupCreatorUsernameMixin",
        ).parseGroupCreatorUsernameMixin(e),
        a = P(e),
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
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "reject");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "sub_group_suggestion",
        1,
        1e3,
        m,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ subGroupSuggestion: n.value })
        : n;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = k(e);
      if (!n.success) return n;
      var r = P(e),
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
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "cancel");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "sub_group_suggestion",
        1,
        1e3,
        _,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ subGroupSuggestion: n.value })
        : n;
    }
    function g(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "sub_group_suggestions_action",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "approve", d);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "reject", p);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(r.value, "cancel", f);
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
    function h(e) {
      var t = P(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupSuggestionNotFound",
          value: t.value,
        });
      var n = $(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupSuggestionConflict",
          value: n.value,
        });
      var r = x(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupResourceConstraint",
          value: r.value,
        });
      var a = D(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupPendingGroupAddsError",
          value: a.value,
        });
      var i = T(e);
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
    function y(e) {
      var t = M(o("WASmaxJsx").smax("sub_group_suggestion", null), e);
      return t;
    }
    function C(e) {
      var t = e.subGroupSuggestionArgs,
        n = o("WASmaxJsx").smax(
          "approve",
          null,
          o("WASmaxChildren").REPEATED_CHILD(y, t, 1, 1e3),
        );
      return n;
    }
    function b(e) {
      var t = M(o("WASmaxJsx").smax("sub_group_suggestion", null), e);
      return t;
    }
    function v(e) {
      var t = e.subGroupSuggestionArgs,
        n = o("WASmaxJsx").smax(
          "reject",
          null,
          o("WASmaxChildren").REPEATED_CHILD(b, t, 1, 1e3),
        );
      return n;
    }
    function S(e) {
      var t = A(o("WASmaxJsx").smax("sub_group_suggestion", null), e);
      return t;
    }
    function R(e) {
      var t = e.subGroupSuggestionArgs,
        n = o("WASmaxJsx").smax(
          "cancel",
          null,
          o("WASmaxChildren").REPEATED_CHILD(S, t, 1, 1e3),
        );
      return n;
    }
    function L(e) {
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
              o("WASmaxChildren").OPTIONAL_CHILD(C, t),
              o("WASmaxChildren").OPTIONAL_CHILD(v, n),
              o("WASmaxChildren").OPTIONAL_CHILD(R, r),
            ),
          ),
          e,
        );
      return a;
    }
    function E(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "creator");
      if (!n.success) return n;
      var r = k(e);
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
    function k(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function I(e) {
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
    function T(e) {
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
    function D(e) {
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
    function x(e) {
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
    function $(e) {
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
    function P(e) {
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
    function N(e) {
      var t = e.subGroupSuggestionCreator,
        n = e.groupCreatorPhoneNumberMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          O,
          A(
            o("WASmaxJsx").smax("sub_group_suggestion", {
              creator: o("WAWap").USER_JID(t),
            }),
            e,
          ),
          n,
        );
      return r;
    }
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w(e) {
      var t = e.subGroupSuggestionJid,
        n = o("WASmaxJsx").smax("sub_group_suggestion", {
          jid: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function A(e, t) {
      var n = w(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function F(e) {
      var t = e.anyCreatorPn,
        n = o("WASmaxJsx").smax("smax$any", { creator_pn: o("WAWap").JID(t) });
      return n;
    }
    function O(e, t) {
      var n = F(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendSubGroupSuggestionsActionRPC = e),
      (l.parseSubGroupSuggestionsActionResponseClientError = s),
      (l.parseSubGroupSuggestionsActionResponseServerError = u),
      (l.parseSubGroupSuggestionsActionResponseSuccess = g),
      (l.makeSubGroupSuggestionsActionRequest = L));
  },
  98,
);
