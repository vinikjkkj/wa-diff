__d(
  "WASmaxInGroupsSubGroupSuggestionsApprovalErrors",
  [
    "WAResultOrError",
    "WASmaxInGroupsSubGroupSuggestionsActionSubGroupCreationInternalServerErrorMixin",
    "WASmaxInGroupsSubGroupSuggestionsActionSubGroupPendingGroupAddsErrorMixin",
    "WASmaxInGroupsSubGroupSuggestionsActionSubGroupResourceConstraintMixin",
    "WASmaxInGroupsSubGroupSuggestionsActionSubGroupSuggestionConflictMixin",
    "WASmaxInGroupsSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin",
      ).parseSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupSuggestionNotFound",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsSubGroupSuggestionsActionSubGroupSuggestionConflictMixin",
      ).parseSubGroupSuggestionsActionSubGroupSuggestionConflictMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupSuggestionConflict",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsSubGroupSuggestionsActionSubGroupResourceConstraintMixin",
      ).parseSubGroupSuggestionsActionSubGroupResourceConstraintMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupResourceConstraint",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsSubGroupSuggestionsActionSubGroupPendingGroupAddsErrorMixin",
      ).parseSubGroupSuggestionsActionSubGroupPendingGroupAddsErrorMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionsActionSubGroupPendingGroupAddsError",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsSubGroupSuggestionsActionSubGroupCreationInternalServerErrorMixin",
      ).parseSubGroupSuggestionsActionSubGroupCreationInternalServerErrorMixin(
        e,
      );
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
    l.parseSubGroupSuggestionsApprovalErrors = e;
  },
  98,
);
