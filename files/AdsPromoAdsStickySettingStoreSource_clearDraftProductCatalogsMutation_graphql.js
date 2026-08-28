__d(
  "AdsPromoAdsStickySettingStoreSource_clearDraftProductCatalogsMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "XFBPromoAdAccountDataMutationPayload",
            kind: "LinkedField",
            name: "xfb_promo_ad_sticky_setting_mutation",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBPromoAdgroupStickySettingData",
                kind: "LinkedField",
                name: "promo_ad_adgroup_data",
                plural: !1,
                selections: [
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
                    name: "draft_product_catalog_email_id",
                    storageKey: null,
                  },
                ],
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
          name: "AdsPromoAdsStickySettingStoreSource_clearDraftProductCatalogsMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsPromoAdsStickySettingStoreSource_clearDraftProductCatalogsMutation",
          selections: t,
        },
        params: {
          id: "27732051586389671",
          metadata: {},
          name: "AdsPromoAdsStickySettingStoreSource_clearDraftProductCatalogsMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
