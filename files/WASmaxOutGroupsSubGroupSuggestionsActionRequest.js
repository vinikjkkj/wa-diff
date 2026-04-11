__d(
  "WASmaxOutGroupsSubGroupSuggestionsActionRequest",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxOutGroupsSubGroupSuggestionMixin",
    "WASmaxOutGroupsSubGroupSuggestionWithoutCreatorMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutGroupsSubGroupSuggestionMixin",
      ).mergeSubGroupSuggestionMixin(
        o("WASmaxJsx").smax("sub_group_suggestion", null),
        e,
      );
      return t;
    }
    function s(t) {
      var n = t.subGroupSuggestionArgs,
        r = o("WASmaxJsx").smax(
          "approve",
          null,
          o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 1e3),
        );
      return r;
    }
    function u(e) {
      var t = o(
        "WASmaxOutGroupsSubGroupSuggestionMixin",
      ).mergeSubGroupSuggestionMixin(
        o("WASmaxJsx").smax("sub_group_suggestion", null),
        e,
      );
      return t;
    }
    function c(e) {
      var t = e.subGroupSuggestionArgs,
        n = o("WASmaxJsx").smax(
          "reject",
          null,
          o("WASmaxChildren").REPEATED_CHILD(u, t, 1, 1e3),
        );
      return n;
    }
    function d(e) {
      var t = o(
        "WASmaxOutGroupsSubGroupSuggestionWithoutCreatorMixin",
      ).mergeSubGroupSuggestionWithoutCreatorMixin(
        o("WASmaxJsx").smax("sub_group_suggestion", null),
        e,
      );
      return t;
    }
    function m(e) {
      var t = e.subGroupSuggestionArgs,
        n = o("WASmaxJsx").smax(
          "cancel",
          null,
          o("WASmaxChildren").REPEATED_CHILD(d, t, 1, 1e3),
        );
      return n;
    }
    function p(e) {
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
              o("WASmaxChildren").OPTIONAL_CHILD(s, t),
              o("WASmaxChildren").OPTIONAL_CHILD(c, n),
              o("WASmaxChildren").OPTIONAL_CHILD(m, r),
            ),
          ),
          e,
        );
      return a;
    }
    ((l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionApproveSubGroupSuggestion =
      e),
      (l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionApprove =
        s),
      (l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionRejectSubGroupSuggestion =
        u),
      (l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionReject =
        c),
      (l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionCancelSubGroupSuggestion =
        d),
      (l.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionCancel =
        m),
      (l.makeSubGroupSuggestionsActionRequest = p));
  },
  98,
);
