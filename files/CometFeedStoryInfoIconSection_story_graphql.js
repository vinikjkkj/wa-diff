__d(
  "CometFeedStoryInfoIconSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryInfoIconSection_story",
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
              args: [{ kind: "Literal", name: "supported", value: "17xwNy" }],
              concreteType: null,
              kind: "LinkedField",
              name: "info_icon",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryInfoIconSection_story",
                      fragmentName:
                        "CometFeedStoryArticleContextIconStrategy_infoIcon",
                      fragmentPropName: "infoIcon",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryArticleContextIconStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryInfoIconSection_story",
                      fragmentName:
                        "CometFeedStoryBrandedContentIconStrategy_infoIcon",
                      fragmentPropName: "infoIcon",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryBrandedContentIconStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryInfoIconSection_story",
                      fragmentName:
                        "CometFeedStoryRightsManagerAttributionIconStrategy_infoIcon",
                      fragmentPropName: "infoIcon",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryRightsManagerAttributionIconStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'info_icon(supported:"17xwNy")',
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
