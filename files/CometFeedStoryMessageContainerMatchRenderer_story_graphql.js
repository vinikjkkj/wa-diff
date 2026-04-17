__d(
  "CometFeedStoryMessageContainerMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMessageContainerMatchRenderer_story",
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
              args: [{ kind: "Literal", name: "supported", value: "2IOiQ2" }],
              concreteType: null,
              kind: "LinkedField",
              name: "message_container",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageContainerMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy_messageContainer",
                      fragmentPropName: "messageContainer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageContainerMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryTranslatedMessageContainerRenderingStrategy_messageContainer",
                      fragmentPropName: "messageContainer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryTranslatedMessageContainerRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageContainerMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryMessageContainerRenderingStrategy_messageContainer",
                      fragmentPropName: "messageContainer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMessageContainerRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageContainerMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryKeyUpdateFeedUnitMessageContainerSectionStrategy_messageContainer",
                      fragmentPropName: "messageContainer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryKeyUpdateFeedUnitMessageContainerSectionStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'message_container(supported:"2IOiQ2")',
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
