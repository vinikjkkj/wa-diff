__d(
  "BizWebUnifiedTableRowHeaderVideoPublishingAlertPill_videoInfo.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BizWebUnifiedTableRowHeaderVideoPublishingAlertPill_videoInfo",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Video",
          kind: "LinkedField",
          name: "video",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "publishing_state_enum",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "publishing_alerts",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "TofuEntityWithVideoInfo",
      abstractKey: "__isTofuEntityWithVideoInfo",
    };
    a.exports = e;
  },
  null,
);
