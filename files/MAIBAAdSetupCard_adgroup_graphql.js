__d(
  "MAIBAAdSetupCard_adgroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: !0, kind: "LocalArgument", name: "isAdsManager" },
      ],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAAdSetupCard_adgroup",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_source",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_format",
          storageKey: null,
        },
        {
          condition: "isAdsManager",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "creative_product_set_id",
              storageKey: null,
            },
          ],
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "multi_advertiser_ads_enabled",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "multi_advertiser_ads_eligible",
          storageKey: null,
        },
      ],
      type: "AdAdgroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
