__d(
  "CometFeedStoryActorPhotoStrategy_actorPhoto.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_business_page_active",
          storageKey: null,
        },
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "whatsapp_presence",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [
          {
            kind: "RootArgument",
            name: "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
          },
          { kind: "RootArgument", name: "scale" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryActorPhotoStrategy_actorPhoto",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCometFeedStoryMatchDebugger_iCometStorySection",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "Story",
              kind: "LinkedField",
              name: "story",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedStoryActorLink_story",
                },
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
                      name: "useActorStoryStatus_actor",
                    },
                    {
                      args: [
                        { kind: "Literal", name: "location", value: "feed" },
                      ],
                      kind: "FragmentSpread",
                      name: "useActorCometLiveRing_actor",
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "id",
                          storageKey: null,
                        },
                        e,
                      ],
                      type: "Page",
                      abstractKey: null,
                    },
                    {
                      args: [
                        { kind: "Literal", name: "height", value: 40 },
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
                        { kind: "Literal", name: "width", value: 40 },
                      ],
                      kind: "FragmentSpread",
                      name: "FDSProfilePhotoForActor_actor",
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
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
                          selections: [e],
                          storageKey: null,
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
                      selections: t,
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
                      selections: t,
                      storageKey: null,
                    },
                  ],
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "story",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "has_commerce_attachment",
            storageKey: null,
          },
        ],
        type: "CometFeedStoryActorPhotoStrategy",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
