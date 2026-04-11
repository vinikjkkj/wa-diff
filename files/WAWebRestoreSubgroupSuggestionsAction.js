__d(
  "WAWebRestoreSubgroupSuggestionsAction",
  [
    "WAWebApiSubgroupSuggestionStore",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o("WAWebStateUtils").unproxy(e),
            r = yield o(
              "WAWebApiSubgroupSuggestionStore",
            ).getSubgroupSuggestions(n.id);
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
        })),
        s.apply(this, arguments)
      );
    }
    l.restoreSubgroupSuggestionsFromDb = e;
  },
  98,
);
