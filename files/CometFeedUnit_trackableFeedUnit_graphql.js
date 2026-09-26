__d(
  "CometFeedUnit_trackableFeedUnit.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedUnit_trackableFeedUnit",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TrackingData",
          kind: "LinkedField",
          name: "trackingdata",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "viewability_config",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "CometClientViewConfig",
              kind: "LinkedField",
              name: "client_view_config",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_delay_log_impression",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "use_banzai_signal_imp",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "use_banzai_vital_imp",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Story",
          abstractKey: null,
        },
      ],
      type: "TrackableFeedUnit",
      abstractKey: "__isTrackableFeedUnit",
    };
    a.exports = e;
  },
  null,
);
