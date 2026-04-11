__d(
  "WASmaxOutGroupsSuggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutGroupsCreateSubGroupSuggestionSuggestionForExistingGroupsMixin",
    "WASmaxOutGroupsCreateSubGroupSuggestionSuggestionForNewGroupMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.createSubGroupSuggestionSuggestionForNewGroup)
        return o(
          "WASmaxOutGroupsCreateSubGroupSuggestionSuggestionForNewGroupMixin",
        ).mergeCreateSubGroupSuggestionSuggestionForNewGroupMixin(
          e,
          t.createSubGroupSuggestionSuggestionForNewGroup,
        );
      if (t.createSubGroupSuggestionSuggestionForExistingGroups)
        return o(
          "WASmaxOutGroupsCreateSubGroupSuggestionSuggestionForExistingGroupsMixin",
        ).mergeCreateSubGroupSuggestionSuggestionForExistingGroupsMixin(
          e,
          t.createSubGroupSuggestionSuggestionForExistingGroups,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeSuggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroup =
      e;
  },
  98,
);
