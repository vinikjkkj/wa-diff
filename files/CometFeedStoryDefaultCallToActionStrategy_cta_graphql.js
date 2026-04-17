__d(
  "CometFeedStoryDefaultCallToActionStrategy_cta.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryDefaultCallToActionStrategy_cta",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
        },
        {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "story",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "StoryBumperData",
              kind: "LinkedField",
              name: "bumpers",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "persistent_bumper",
                  plural: !1,
                  selections: [
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
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "cta_renderer",
                      plural: !1,
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedStoryDefaultCallToActionStrategy_cta",
                              fragmentName:
                                "CometShowMoreShowLessCallToAction_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometShowMoreShowLessCallToActionRenderer",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedStoryTriggeredCallToActionContainer_bumperData",
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tracking",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometStoryDefaultCallToActionStrategy",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
