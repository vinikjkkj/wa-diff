__d(
  "CometFeedStoryActorPhotoStrategy_actorPhoto$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        n = {
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
        r = {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "first_story_to_show",
          plural: !1,
          selections: [
            t,
            {
              alias: null,
              args: null,
              concreteType: "StoryCardSeenState",
              kind: "LinkedField",
              name: "story_card_seen_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_seen_by_viewer",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        o = {
          alias: null,
          args: [{ kind: "Literal", name: "location", value: "feed" }],
          concreteType: "Video",
          kind: "LinkedField",
          name: "live_video_for_comet_live_ring",
          plural: !1,
          selections: [t],
          storageKey: 'live_video_for_comet_live_ring(location:"feed")',
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_business_page_active",
          storageKey: null,
        },
        i = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "whatsapp_presence",
            storageKey: null,
          },
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryActorPhotoStrategy_actorPhoto$normalization",
        selections: [
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
                concreteType: null,
                kind: "LinkedField",
                name: "actors",
                plural: !0,
                selections: [
                  e,
                  { kind: "TypeDiscriminator", abstractKey: "__isActor" },
                  t,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "height", value: 40 },
                      {
                        kind: "Variable",
                        name: "scale",
                        variableName: "scale",
                      },
                      { kind: "Literal", name: "width", value: 40 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "uri",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "width",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "height",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "scale",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
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
                        alias: "profile_url",
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
                          n,
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
                            args: [
                              {
                                kind: "Literal",
                                name: "surface",
                                value: "FEED",
                              },
                            ],
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
                          n,
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
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "pages_story_bucket_v2",
                        plural: !1,
                        selections: [e, t, r],
                        storageKey: null,
                      },
                      o,
                      a,
                    ],
                    type: "Page",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: [{ kind: "Literal", name: "first", value: 1 }],
                        concreteType: "DirectInboxBroadcastBucketConnection",
                        kind: "LinkedField",
                        name: "story_bucket",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "DirectMessageThreadBucket",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "should_show_close_friend_badge",
                                storageKey: null,
                              },
                              t,
                              r,
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: "story_bucket(first:1)",
                      },
                      o,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_additional_profile_plus",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "Page",
                        kind: "LinkedField",
                        name: "delegate_page",
                        plural: !1,
                        selections: [a, t],
                        storageKey: null,
                      },
                      {
                        kind: "ClientExtension",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "availability",
                            storageKey: null,
                          },
                        ],
                      },
                    ],
                    type: "User",
                    abstractKey: null,
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
                    args: [
                      { kind: "Literal", name: "supported", value: "2rhVpW" },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "action_link",
                    plural: !1,
                    selections: [
                      e,
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
              {
                alias: null,
                args: null,
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "attachments",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "action_links",
                    plural: !0,
                    selections: [
                      e,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "link_type",
                            storageKey: null,
                          },
                        ],
                        type: "LinkOpenActionLink",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              t,
              {
                condition:
                  "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
                kind: "Condition",
                passingValue: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "SponsoredData",
                    kind: "LinkedField",
                    name: "sponsored_data",
                    plural: !1,
                    selections: i,
                    storageKey: null,
                  },
                ],
              },
              {
                condition:
                  "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
                kind: "Condition",
                passingValue: !0,
                selections: [
                  {
                    alias: "th_dat_spo",
                    args: null,
                    concreteType: "SponsoredData",
                    kind: "LinkedField",
                    name: "sponsored_data",
                    plural: !1,
                    selections: i,
                    storageKey: null,
                  },
                ],
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "has_commerce_attachment",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              e,
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
