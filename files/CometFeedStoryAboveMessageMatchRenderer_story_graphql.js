__d(
  "CometFeedStoryAboveMessageMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAboveMessageMatchRenderer_story",
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
              args: [{ kind: "Literal", name: "supported", value: "JT5dm" }],
              concreteType: null,
              kind: "LinkedField",
              name: "above_message",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAboveMessageMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryAboveMessageFunFactsRenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAboveMessageFunFactsRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAboveMessageMatchRenderer_story",
                      fragmentName:
                        "WorkFeedStoryAboveMessageMajorEventRenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "WorkFeedStoryAboveMessageMajorEventRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAboveMessageMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryAboveMessageCommunityQARenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAboveMessageCommunityQARenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAboveMessageMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryAboveMessageCoAuthorConfirmationRenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryAboveMessageCoAuthorConfirmationRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAboveMessageMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryAboveMessageCoAuthorPendingPublishRenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryAboveMessageCoAuthorPendingPublishRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAboveMessageMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryAboveMessageVideoReadyStateRenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryAboveMessageVideoReadyStateRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAboveMessageMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryAboveMessageShareablePostRenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryAboveMessageShareablePostRenderingStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'above_message(supported:"JT5dm")',
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
