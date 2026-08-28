__d(
  "AdsSmartDefaultStoreSourceServerLoadedQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "conversion_location",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "source",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "default_page_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "default_commerce_product_set_id",
            storageKey: null,
          },
        ],
        t = [
          {
            kind: "ClientExtension",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBXAdsSmartDefaultController",
                kind: "LinkedField",
                name: "loaded_ads_smart_default",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "ad_account_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "attribution_model_default",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBXAdsSmartDefaultControllerDefaultData",
                    kind: "LinkedField",
                    name: "leads",
                    plural: !0,
                    selections: e,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBXAdsSmartDefaultControllerDefaultData",
                    kind: "LinkedField",
                    name: "engagement",
                    plural: !0,
                    selections: e,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBXAdsSmartDefaultControllerDefaultData",
                    kind: "LinkedField",
                    name: "traffic",
                    plural: !0,
                    selections: e,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBXAdsSmartDefaultControllerDefaultData",
                    kind: "LinkedField",
                    name: "sales",
                    plural: !0,
                    selections: e,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBXAdsSmartDefaultControllerDefaultData",
                    kind: "LinkedField",
                    name: "lead_gen",
                    plural: !0,
                    selections: e,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBXAdsSmartDefaultControllerDefaultData",
                    kind: "LinkedField",
                    name: "conversions",
                    plural: !0,
                    selections: e,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdsSmartDefaultStoreSourceServerLoadedQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsSmartDefaultStoreSourceServerLoadedQuery",
          selections: t,
        },
        params: {
          cacheID: "c8393a7756a46e9a7cb94cd8f01933ec",
          id: null,
          metadata: {},
          name: "AdsSmartDefaultStoreSourceServerLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
