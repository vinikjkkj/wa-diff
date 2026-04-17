__d(
  "CometFeedStoryAttachmentSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          condition:
            "__relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider",
          kind: "Condition",
          passingValue: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ad_id",
              storageKey: null,
            },
          ],
        },
        {
          condition:
            "__relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: "lbl_adv_iden",
              args: null,
              kind: "ScalarField",
              name: "ad_id",
              storageKey: null,
            },
          ],
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ad_conversion_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "SensitiveVerticalDataFields",
          kind: "LinkedField",
          name: "ad_sensitive_vertical_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_sensitive_tier_1",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_sensitive_tier_2",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "client_token",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [
          {
            kind: "RootArgument",
            name: "__relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider",
          },
          {
            kind: "RootArgument",
            name: "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
          },
          { kind: "RootArgument", name: "renderLocation" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryAttachmentSection_story",
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
            concreteType: "StoryAttachment",
            kind: "LinkedField",
            name: "attachments",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "deduplication_key",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "target",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryAttachmentRenderer_attachment",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryAttachmentFooterSection_attachment",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryAttachmentDisclaimerFooterSection_attachment",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "FutureOfFeedInfo",
            kind: "LinkedField",
            name: "future_of_feed_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "dominant_readable_color",
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
                selections: e,
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
                selections: e,
                storageKey: null,
              },
            ],
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "encrypted_tracking",
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryInfoIconSection_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryAttachmentOverlaySection_story",
          },
          { args: null, kind: "FragmentSpread", name: "useIsSATPStory_story" },
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoryAttachmentContext_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometGHLMockGenericShareFooter_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GeminiFeedSafariDrmDeprecationMessageWrapper_story",
          },
          {
            alias: "wwwURL",
            args: [{ kind: "Literal", name: "site", value: "www" }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"www")',
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
