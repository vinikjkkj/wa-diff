__d(
  "AdsSimpleCreateHeader_Fragment.graphql",
  [
    "relay-runtime/experimental",
    "CombinedCampaignGroup____relay_model_instance.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGroup____relay_model_instance.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGroup____relay_model_instance.graphql",
    "CombinedCampaignGroup-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        args: null,
        kind: "FragmentSpread",
        name: "CombinedCampaignGroup____relay_model_instance",
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "AdsSimpleCreateHeader_Fragment",
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
              n("CombinedCampaignGroup____relay_model_instance.graphql"),
              n("CombinedCampaignGroup-resolvers").ad_object_id,
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
            name: "name",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("CombinedCampaignGroup____relay_model_instance.graphql"),
              n("CombinedCampaignGroup-resolvers").name,
              "__relay_model_instance",
              !0,
            ),
            path: "name",
          },
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "status",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("CombinedCampaignGroup____relay_model_instance.graphql"),
              n("CombinedCampaignGroup-resolvers").status,
              "__relay_model_instance",
              !0,
            ),
            path: "status",
          },
        ],
        type: "CombinedCampaignGroup",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
