__d(
  "AdsPromoAdsStickySettingStoreSourceServerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adgroup_id" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "adgroup_id",
                variableName: "adgroup_id",
              },
            ],
            concreteType: "XFBPromoAdgroupStickySettingData",
            kind: "LinkedField",
            name: "xfb_promo_ad_am_adgroup_data_query",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_always_on_enabled_email",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_always_on_enabled_promo",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "draft_product_catalog_email_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "draft_product_catalog_promo_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "product_catalog_email_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "product_catalog_promo_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "turn_off_promo",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "turn_off_email",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsPromoAdsStickySettingStoreSourceServerQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsPromoAdsStickySettingStoreSourceServerQuery",
          selections: t,
        },
        params: {
          id: "27385657204452769",
          metadata: {},
          name: "AdsPromoAdsStickySettingStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
