__d(
  "AdsSmartDefaultStoreSourceServerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "ad_account_id" },
        ],
        t = [
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
        n = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "ad_account_id",
              },
            ],
            concreteType: "XFBXAdsSmartDefaultController",
            kind: "LinkedField",
            name: "xfb_andromeda_XAdsSmartDefaultControllerUpdated",
            plural: !1,
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
                selections: t,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBXAdsSmartDefaultControllerDefaultData",
                kind: "LinkedField",
                name: "engagement",
                plural: !0,
                selections: t,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBXAdsSmartDefaultControllerDefaultData",
                kind: "LinkedField",
                name: "traffic",
                plural: !0,
                selections: t,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBXAdsSmartDefaultControllerDefaultData",
                kind: "LinkedField",
                name: "sales",
                plural: !0,
                selections: t,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBXAdsSmartDefaultControllerDefaultData",
                kind: "LinkedField",
                name: "lead_gen",
                plural: !0,
                selections: t,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBXAdsSmartDefaultControllerDefaultData",
                kind: "LinkedField",
                name: "conversions",
                plural: !0,
                selections: t,
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
          name: "AdsSmartDefaultStoreSourceServerQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsSmartDefaultStoreSourceServerQuery",
          selections: n,
        },
        params: {
          id: "26788945787454366",
          metadata: {},
          name: "AdsSmartDefaultStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
