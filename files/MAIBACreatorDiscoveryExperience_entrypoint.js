__d(
  "MAIBACreatorDiscoveryExperience.entrypoint",
  [
    "JSResourceForInteraction",
    "MAIBACreatorDiscoveryExperienceQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e;
        return {
          queries: {
            creatorsQueryRef: {
              parameters: r("MAIBACreatorDiscoveryExperienceQuery$Parameters"),
              variables: {
                brandIgUserID: t.brandIgUserID,
                camBrandParams:
                  t.brandIgUserID != null
                    ? { ig_user_id: t.brandIgUserID }
                    : null,
                creatorIDs: t.creatorIDs,
                insightsTimePeriod: t.insightsTimePeriod,
              },
              options: {
                fetchKey: String((e = t.workspaceVersion) != null ? e : 0),
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBACreatorDiscoveryExperience.react",
      ).__setRef("MAIBACreatorDiscoveryExperience.entrypoint"),
    };
    l.default = e;
  },
  98,
);
