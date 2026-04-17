__d(
  "CometFeedStoryAggregatedStoriesMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAggregatedStoriesMatchRenderer_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
          concreteType: "CometStorySections",
          kind: "LinkedField",
          name: "comet_sections",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [{ kind: "Literal", name: "supported", value: "3AbuAz" }],
              concreteType: null,
              kind: "LinkedField",
              name: "aggregated_stories",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAggregatedStoriesMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryAggregatedStoriesStrategy_aggregatedStories",
                      fragmentPropName: "aggregatedStories",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAggregatedStoriesStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'aggregated_stories(supported:"3AbuAz")',
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
