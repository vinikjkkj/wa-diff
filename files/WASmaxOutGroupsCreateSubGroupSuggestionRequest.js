__d(
  "WASmaxOutGroupsCreateSubGroupSuggestionRequest",
  [
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxOutGroupsSuggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t =
          e.suggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroupArgs,
        n = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o(
              "WASmaxOutGroupsSuggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroup",
            ).mergeSuggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroup(
              o("WASmaxJsx").smax("sub_group_suggestion", null),
              t,
            ),
          ),
          e,
        );
      return n;
    }
    l.makeCreateSubGroupSuggestionRequest = e;
  },
  98,
);
