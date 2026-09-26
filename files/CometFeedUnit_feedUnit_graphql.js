__d(
  "CometFeedUnit_feedUnit.graphql",
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
        t = [
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
            name: "brs_filter_setting",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "client_token",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "post_rendering_loggers",
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
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedUnit_feedUnit",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "debug_info",
                storageKey: null,
              },
              e,
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
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Group",
                    kind: "LinkedField",
                    name: "associated_group",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "context_actor_hovercard",
                        storageKey: null,
                      },
                      e,
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
                name: "is_story_civic",
                storageKey: null,
              },
            ],
            type: "Story",
            abstractKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedUnitCard_feedUnit",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedUnitContainerSection_feedUnit",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedUnitErrorBoundary_feedUnit",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedUnit_trackableFeedUnit",
          },
        ],
        type: "FeedUnit",
        abstractKey: "__isFeedUnit",
      };
    })();
    a.exports = e;
  },
  null,
);
