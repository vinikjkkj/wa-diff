__d(
  "CometFeedStoryFollowButtonSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "referringStoryRenderLocation" },
        { kind: "RootArgument", name: "renderLocation" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryFollowButtonSection_story",
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
              args: [
                {
                  kind: "Variable",
                  name: "referring_story_render_location",
                  variableName: "referringStoryRenderLocation",
                },
                { kind: "Literal", name: "supported", value: "7FSt" },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "follow_button",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFollowButtonSection_story",
                      fragmentName:
                        "CometFeedStoryFollowButtonStrategy_followButton",
                      fragmentPropName: "followButton",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryFollowButtonStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: null,
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
