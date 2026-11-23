__d(
  "MAIBASimpleCreateExperience.entrypoint",
  ["JSResourceForInteraction", "MAIBASimpleCreateExperienceQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            adsManagerContextQueryRef: {
              parameters: r("MAIBASimpleCreateExperienceQuery$Parameters"),
              variables: {
                accountID: t.accountID,
                campaignGroupID: t.campaignGroupID,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBASimpleCreateExperience.react",
      ).__setRef("MAIBASimpleCreateExperience.entrypoint"),
    };
    l.default = e;
  },
  98,
);
