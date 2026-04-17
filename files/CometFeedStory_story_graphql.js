__d(
  "CometFeedStory_story.graphql",
  [],
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
        t = [e],
        n = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryContextSection_story",
        },
        r = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryFooterSection_story",
        },
        o = {
          alias: null,
          args: null,
          concreteType: "TombstoneFeedUnit",
          kind: "LinkedField",
          name: "tombstone_feedunit",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_hidden_from_client",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "Tombstone",
              kind: "LinkedField",
              name: "tombstone",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "action",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedTombstoneFactory_tombstoneFeedUnit",
            },
          ],
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          {
            kind: "RootArgument",
            name: "__relay_internal__pv__CometFeedStory_enable_post_permalink_white_space_clickrelayprovider",
          },
          { kind: "RootArgument", name: "renderLocation" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStory_story",
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
            args: [
              { kind: "Literal", name: "framework", value: "WARNING_SCREENS" },
              { kind: "Literal", name: "location", value: "unknown" },
            ],
            concreteType: "CIXScreen",
            kind: "LinkedField",
            name: "cix_screen",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "view_model",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "render_type",
                        storageKey: null,
                      },
                    ],
                    type: "OverlayWarningScreenViewModel",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey:
              'cix_screen(framework:"WARNING_SCREENS",location:"unknown")',
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
                name: "media",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: t,
                    type: "Video",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFutureOfFeedStoryContextProvider_story",
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "attached_story",
            plural: !1,
            selections: [n, r, { kind: "ClientExtension", selections: [o] }],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "StoryBumperData",
            kind: "LinkedField",
            name: "bumpers",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryCallToActionTriggerContextProvider_bumperData",
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
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryContentMatchRenderer_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryLayoutMatchRenderer_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryCopyrightViolationHeaderSection_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryHeaderSection_story",
          },
          n,
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryAYMTFooterSection_story",
          },
          r,
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryFeedbackSection_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryOuterFooterSection_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryCallToActionSection_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryPostInformTreatmentSection_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useGroupsCometFetchStory_story",
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
            kind: "ScalarField",
            name: "debug_info",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "feedback",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                concreteType: "Group",
                kind: "LinkedField",
                name: "associated_group",
                plural: !1,
                selections: t,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "WhatsAppStoryAdContext",
            kind: "LinkedField",
            name: "whatsapp_ad_context",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "action_link",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "schema_context",
            storageKey: null,
          },
          {
            condition:
              "__relay_internal__pv__CometFeedStory_enable_post_permalink_white_space_clickrelayprovider",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                fragment: {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "useCometFeedStoryClickablePostPermalink_story",
                    },
                  ],
                  type: "Story",
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "useCometFeedStoryClickablePostPermalink_story",
              },
            ],
          },
          {
            kind: "ClientExtension",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "tombstone_is_loading",
                storageKey: null,
              },
              o,
            ],
          },
        ],
        type: "Story",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
