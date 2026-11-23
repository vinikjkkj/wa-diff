__d(
  "AdsUEditorCampaignBudgetVVDeprecationMessageContainerFragment.graphql",
  [
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        args: null,
        kind: "FragmentSpread",
        name: "CombinedCampaign____relay_model_instance",
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { plural: !0, throwOnFieldError: !0 },
        name: "AdsUEditorCampaignBudgetVVDeprecationMessageContainerFragment",
        selections: [
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "ad_object_id",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("CombinedCampaign____relay_model_instance.graphql"),
              n("CombinedCampaign-resolvers").ad_object_id,
              "__relay_model_instance",
              !0,
            ),
            path: "ad_object_id",
          },
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "end_time",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("CombinedCampaign____relay_model_instance.graphql"),
              n("CombinedCampaign-resolvers").end_time,
              "__relay_model_instance",
              !0,
            ),
            path: "end_time",
          },
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "lifetime_budget",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("CombinedCampaign____relay_model_instance.graphql"),
              n("CombinedCampaign-resolvers").lifetime_budget,
              "__relay_model_instance",
              !0,
            ),
            path: "lifetime_budget",
          },
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "optimization_goal",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("CombinedCampaign____relay_model_instance.graphql"),
              n("CombinedCampaign-resolvers").optimization_goal,
              "__relay_model_instance",
              !0,
            ),
            path: "optimization_goal",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useUniformBudgetModeFragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsUEditorODAXTranslatedObjectivesForSelectedCampaignsFragment",
          },
        ],
        type: "CombinedCampaign",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
