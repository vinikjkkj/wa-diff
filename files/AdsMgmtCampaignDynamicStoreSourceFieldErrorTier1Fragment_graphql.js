__d(
  "AdsMgmtCampaignDynamicStoreSourceFieldErrorTier1Fragment.graphql",
  ["AdCampaign-dynamic_ad_object_field_error_spec_tier1-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "AdsMgmtCampaignDynamicStoreSourceFieldErrorTier1Fragment",
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
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "AdCampaignDynamicAdObjectFieldErrorSpecTier1Resolver",
          },
          kind: "RelayResolver",
          name: "dynamic_campaign_field_error_spec_tier1",
          resolverModule: n(
            "AdCampaign-dynamic_ad_object_field_error_spec_tier1-resolver",
          ).dynamic_campaign_field_error_spec_tier1,
          path: "dynamic_campaign_field_error_spec_tier1",
        },
      ],
      type: "AdCampaign",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
