__d(
  "CometFeedStoryTitleWithActorStrategy_contextTitle$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "username",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          concreteType: "WorkForeignEntityInfo",
          kind: "LinkedField",
          name: "work_foreign_entity_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        i = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "category_type",
                  storageKey: null,
                },
              ],
              type: "Page",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                a,
                {
                  alias: null,
                  args: null,
                  concreteType: "WorkUserInfo",
                  kind: "LinkedField",
                  name: "work_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_active_account",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [{ kind: "Literal", name: "surface", value: "FEED" }],
                  kind: "ScalarField",
                  name: "show_promode_badge",
                  storageKey: 'show_promode_badge(surface:"FEED")',
                },
              ],
              type: "User",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                a,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_multi_company_group",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "work_official_status",
                  storageKey: null,
                },
              ],
              type: "Group",
              abstractKey: null,
            },
          ],
          type: "Entity",
          abstractKey: "__isEntity",
        },
        l = [
          {
            kind: "Variable",
            name: "location",
            variableName: "renderLocation",
          },
        ],
        s = [e];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryTitleWithActorStrategy_contextTitle$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "story",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "post_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "actors",
                plural: !0,
                selections: [
                  t,
                  r,
                  e,
                  { kind: "TypeDiscriminator", abstractKey: "__isActor" },
                  {
                    kind: "InlineFragment",
                    selections: [o],
                    type: "InstagramUserV2",
                    abstractKey: null,
                  },
                  i,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  {
                    kind: "Literal",
                    name: "include_post_collaborators",
                    value: !0,
                  },
                ],
                concreteType: null,
                kind: "LinkedField",
                name: "collaborators",
                plural: !0,
                selections: [t, e, r],
                storageKey: "collaborators(include_post_collaborators:true)",
              },
              {
                alias: null,
                args: l,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "title",
                plural: !1,
                selections: [
                  {
                    args: null,
                    fragment: n(
                      "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
                    ),
                    kind: "FragmentSpread",
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "EntityAtRange",
                    kind: "LinkedField",
                    name: "ranges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "entity",
                        plural: !1,
                        selections: [
                          t,
                          {
                            kind: "InlineFragment",
                            selections: [
                              o,
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "should_prioritize_ig_display_name",
                                storageKey: null,
                              },
                            ],
                            type: "InstagramUserV2",
                            abstractKey: null,
                          },
                          {
                            kind: "InlineFragment",
                            selections: s,
                            type: "Node",
                            abstractKey: "__isNode",
                          },
                          {
                            kind: "InlineFragment",
                            selections: s,
                            type: "XFBTopicTag",
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: l,
                concreteType: "CometStorySections",
                kind: "LinkedField",
                name: "comet_sections",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "supported", value: "2rhVpW" },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "action_link",
                    plural: !1,
                    selections: [
                      t,
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
                      t,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName:
                              "CometFeedStoryFollowButtonSection_story",
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
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "supported", value: "11RbGN" },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "badge",
                    plural: !1,
                    selections: [
                      t,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometBadgeSection_story",
                            fragmentName:
                              "CometFeedUserVerifiedBadgeStrategy_badge",
                            fragmentPropName: "badge",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedUserVerifiedBadgeStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometBadgeSection_story",
                            fragmentName:
                              "CometFeedPageVerifiedBadgeStrategy_badge",
                            fragmentPropName: "badge",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedPageVerifiedBadgeStrategy",
                        abstractKey: null,
                      },
                    ],
                    storageKey: 'badge(supported:"11RbGN")',
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
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "to",
                plural: !1,
                selections: [
                  t,
                  r,
                  e,
                  {
                    kind: "InlineFragment",
                    selections: [i],
                    type: "Actor",
                    abstractKey: "__isActor",
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              t,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_prod_eligible",
                storageKey: null,
              },
            ],
            type: "ICometStorySection",
            abstractKey: "__isICometStorySection",
          },
        ],
      };
    })();
    a.exports = e;
  },
  null,
);
