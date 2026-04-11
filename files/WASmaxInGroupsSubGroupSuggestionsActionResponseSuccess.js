__d(
  "WASmaxInGroupsSubGroupSuggestionsActionResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxInGroupsSubGroupSuggestionMixin",
    "WASmaxInGroupsSubGroupSuggestionWithoutCreatorMixin",
    "WASmaxInGroupsSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin",
    "WASmaxInGroupsSubGroupSuggestionsApprovalErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsSubGroupSuggestionMixin",
      ).parseSubGroupSuggestionMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsSubGroupSuggestionsApprovalErrors",
      ).parseSubGroupSuggestionsApprovalErrors(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          subGroupSuggestionsApprovalErrors: r.success ? r.value : null,
        }),
      );
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "approve");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "sub_group_suggestion",
        1,
        1e3,
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ subGroupSuggestion: r.value })
        : r;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsSubGroupSuggestionMixin",
      ).parseSubGroupSuggestionMixin(e);
      if (!n.success) return n;
      var r = o(
          "WASmaxInGroupsSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin",
        ).parseSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin(e),
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
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "reject");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "sub_group_suggestion",
        1,
        1e3,
        u,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ subGroupSuggestion: n.value })
        : n;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsSubGroupSuggestionWithoutCreatorMixin",
      ).parseSubGroupSuggestionWithoutCreatorMixin(e);
      if (!n.success) return n;
      var r = o(
          "WASmaxInGroupsSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin",
        ).parseSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin(e),
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
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "cancel");
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
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "sub_group_suggestions_action",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "approve", s);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "reject", c);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(r.value, "cancel", m);
      if (!l.success) return l;
      var u = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!u.success) return u;
      var d = o(
        "WASmaxInGroupsGroupAddressingModeMixin",
      ).parseGroupAddressingModeMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, u.value, {
          groupAddressingModeMixin: d.success ? d.value : null,
          subGroupSuggestionsActionApprove: a.value,
          subGroupSuggestionsActionReject: i.value,
          subGroupSuggestionsActionCancel: l.value,
        }),
      );
    }
    ((l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionApproveSubGroupSuggestion =
      e),
      (l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionApprove =
        s),
      (l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionRejectSubGroupSuggestion =
        u),
      (l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionReject =
        c),
      (l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionCancelSubGroupSuggestion =
        d),
      (l.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionCancel =
        m),
      (l.parseSubGroupSuggestionsActionResponseSuccess = p));
  },
  98,
);
