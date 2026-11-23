__d(
  "AdsStatusPillScaleGoodCampaignCard_boostedComponent.graphql",
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
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "currency",
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "AdsStatusPillScaleGoodCampaignCard_boostedComponent",
        selections: [
          e,
          {
            alias: null,
            args: null,
            concreteType: "AdCampaignGroup",
            kind: "LinkedField",
            name: "campaign_group",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                concreteType: "EventTimeRange",
                kind: "LinkedField",
                name: "time_range",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "objective_for_cost_per_label",
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
                name: "caller_id",
                value: "BIZWEB_CONTENT_TAB_SGC",
              },
              { kind: "Literal", name: "channel", value: "AD_CENTER" },
            ],
            concreteType: "XFBLWIScaleGoodCampaignRecommendation",
            kind: "LinkedField",
            name: "lwi_boosted_component_scale_good_campaign_recommendation",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AdAccount",
                kind: "LinkedField",
                name: "ad_account",
                plural: !1,
                selections: [t],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBLWIScaleGoodCampaignMapping",
                kind: "LinkedField",
                name: "lwi_scale_good_campaign_mappings",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "recommended_change_type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBGoodSmbcampaignMappingsForGQLGen",
                    kind: "LinkedField",
                    name: "scale_good_campaign_mapping",
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "useScaleGoodCampaignRecommendedChange_mapping",
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey:
              'lwi_boosted_component_scale_good_campaign_recommendation(caller_id:"BIZWEB_CONTENT_TAB_SGC",channel:"AD_CENTER")',
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "spec",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "budget_type",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "CurrencyQuantity",
                kind: "LinkedField",
                name: "budget",
                plural: !1,
                selections: [
                  t,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "offset_amount",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "offset",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "duration_in_days",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "BoostedComponentCommonWrapper",
        abstractKey: "__isBoostedComponentCommonWrapper",
      };
    })();
    a.exports = e;
  },
  null,
);
