__d(
  "AdCampaignDynamicAdObjectFieldErrorSpecTier1Resolver.graphql",
  [
    "AdDeliveryStatusNode-ad_object_spec-resolver",
    "AdsOptimalDeliveryGrowthOpportunity-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "AdCampaignDynamicAdObjectFieldErrorSpecTier1Resolver",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "AdDeliveryStatusNode",
          kind: "LinkedField",
          name: "delivery_status",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              fragment: {
                args: null,
                kind: "FragmentSpread",
                name: "AdDeliveryStatusNodeAdObjectSpecResolver",
              },
              kind: "RelayResolver",
              name: "ad_delivery_status_spec",
              resolverModule: n("AdDeliveryStatusNode-ad_object_spec-resolver")
                .ad_delivery_status_spec,
              path: "delivery_status.ad_delivery_status_spec",
            },
          ],
          storageKey: null,
        },
        {
          kind: "CatchField",
          field: {
            alias: null,
            args: null,
            concreteType: "AdsOptimalDeliveryGrowthOpportunity",
            kind: "LinkedField",
            name: "optimal_delivery_growth_opportunities",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                fragment: {
                  args: null,
                  kind: "FragmentSpread",
                  name: "AdsOptimalDeliveryGrowthOpportunityResolver",
                },
                kind: "RelayResolver",
                name: "ads_optimal_delivery_growth_opportunity_spec",
                resolverModule: n(
                  "AdsOptimalDeliveryGrowthOpportunity-resolver",
                ).ads_optimal_delivery_growth_opportunity_spec,
                path: "optimal_delivery_growth_opportunities.ads_optimal_delivery_growth_opportunity_spec",
              },
            ],
            storageKey: null,
          },
          to: "NULL",
        },
        {
          kind: "CatchField",
          field: {
            alias: null,
            args: null,
            concreteType: "XFBGuidanceLiftEstimateType",
            kind: "LinkedField",
            name: "guidance_lift_estimate",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "adoption_date",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "guidance_name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "actual_7d_cpr",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "predicted_7d_cpr",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          to: "NULL",
        },
        {
          kind: "CatchField",
          field: {
            alias: null,
            args: null,
            concreteType: "XFBRepeatReachStateType",
            kind: "LinkedField",
            name: "repeat_reach_state",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "current_saturation_level",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "forecasted_saturation_level",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "high_saturation_threshold",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "should_display_cpr",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          to: "NULL",
        },
      ],
      type: "AdCampaign",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
