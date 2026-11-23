__d(
  "MAIBACreativeSuggestionsExperience.entrypoint",
  [
    "JSResourceForInteraction",
    "MAIBACreativeSuggestionsExperienceQuery$Parameters",
    "MAIBACreativeSuggestionsExperienceSourceAdQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e,
          n = t.adgroupID;
        return {
          queries: babelHelpers.extends(
            {},
            n != null && n !== ""
              ? {
                  sourceAdQueryRef: {
                    parameters: r(
                      "MAIBACreativeSuggestionsExperienceSourceAdQuery$Parameters",
                    ),
                    variables: { adgroupID: n },
                  },
                }
              : {},
            {
              creativeSuggestionsQueryRef: {
                parameters: r(
                  "MAIBACreativeSuggestionsExperienceQuery$Parameters",
                ),
                variables: { ideaID: t.ideaID, unitID: t.unitID },
                options: {
                  fetchKey: String((e = t.workspaceVersion) != null ? e : 0),
                  fetchPolicy: "store-and-network",
                },
              },
            },
          ),
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBACreativeSuggestionsExperience.react",
      ).__setRef("MAIBACreativeSuggestionsExperience.entrypoint"),
    };
    l.default = e;
  },
  98,
);
