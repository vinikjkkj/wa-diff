__d(
  "CometFeedStoryTriggeredCallToActionContainer_bumperData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryTriggeredCallToActionContainer_bumperData",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "triggered_bumpers",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "StoryBumperExposureHandler",
              kind: "LinkedField",
              name: "exposure_handler",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedStoryCallToActionExposureHandler_exposureHandler",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryBumperData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
