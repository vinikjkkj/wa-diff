__d(
  "CometFeedStoryLayoutMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryLayoutMatchRenderer_story",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
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
              args: [{ kind: "Literal", name: "supported", value: "67WoN" }],
              concreteType: null,
              kind: "LinkedField",
              name: "layout",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryLayoutMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryLongReadPostContentLayoutStrategy_layout",
                      fragmentPropName: "layout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryLongReadPostContentLayoutStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryLayoutMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryDefaultLayoutStrategy_layout",
                      fragmentPropName: "layout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryDefaultLayoutStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryLayoutMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryPendingParticipationPostLayoutStrategy_layout",
                      fragmentPropName: "layout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryPendingParticipationPostLayoutStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryLayoutMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryFullbleedContentLayoutStrategy_layout",
                      fragmentPropName: "layout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFullbleedContentLayoutStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'layout(supported:"67WoN")',
            },
          ],
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
