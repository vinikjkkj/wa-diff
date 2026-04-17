__d(
  "CometFeedStoryContentMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryContentMatchRenderer_story",
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
              args: [{ kind: "Literal", name: "supported", value: "20GvtT" }],
              concreteType: null,
              kind: "LinkedField",
              name: "content",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryContentMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryInitiallyCollapsedContentStrategy_content",
                      fragmentPropName: "content",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryInitiallyCollapsedContentStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryContentMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryAttachmentOnlyContentStrategy_content",
                      fragmentPropName: "content",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAttachmentOnlyContentStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryContentMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryDefaultContentStrategy_content",
                      fragmentPropName: "content",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryDefaultContentStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryContentMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryKeyUpdateFeedUnitContentStrategy_content",
                      fragmentPropName: "content",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryKeyUpdateFeedUnitContentStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'content(supported:"20GvtT")',
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
