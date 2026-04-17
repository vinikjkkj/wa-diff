__d(
  "CometFeedStoryActorLink_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryActorLink_story",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "actors",
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
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryTitleEntity_actor",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryTitleEntityRenderersRelay_entity",
            },
          ],
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
              args: [{ kind: "Literal", name: "supported", value: "2rhVpW" }],
              concreteType: null,
              kind: "LinkedField",
              name: "action_link",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryActorLink_story",
                      fragmentName:
                        "CometFeedStoryTitleGroupSellerActor_actionLink",
                      fragmentPropName: "actionLink",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GroupSellerProfileActionLink",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryActorLink_story",
                      fragmentName:
                        "CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink",
                      fragmentPropName: "groupMemberProfileActionLink",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GroupMemberProfileActionLink",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryActorLink_story",
                      fragmentName:
                        "CometFeedStoryTitleGroupAnonProfileActor_actionLink",
                      fragmentPropName: "actionLink",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GroupMemberAnonProfileActionLink",
                  abstractKey: null,
                },
              ],
              storageKey: 'action_link(supported:"2rhVpW")',
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
