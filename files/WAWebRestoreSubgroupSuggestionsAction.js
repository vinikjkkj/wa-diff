__d(
  "WAWebRestoreSubgroupSuggestionsAction",
  [
    "WAWebApiSubgroupSuggestionStore",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e),
        r = await o("WAWebApiSubgroupSuggestionStore").getSubgroupSuggestions(
          n.id,
        );
      (t = n.groupMetadata) == null ||
        t.subgroupSuggestions.add(
          r.map(function (e) {
            return babelHelpers.extends({}, e, {
              id: o(
                "WAWebCommunitySubgroupSuggestionsUtils",
              ).getSubgroupSuggestionId(e.id, e.owner),
              groupId: e.id,
            });
          }),
          { merge: !0 },
        );
    }
    l.restoreSubgroupSuggestionsFromDb = e;
  },
  98,
);
