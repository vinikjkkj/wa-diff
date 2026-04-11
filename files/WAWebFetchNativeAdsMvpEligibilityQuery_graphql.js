__d(
  "WAWebFetchNativeAdsMvpEligibilityQuery.graphql",
  ["WAWebFetchNativeAdsMvpEligibilityQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "phone_number" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "phone_number",
                variableName: "phone_number",
              },
            ],
            concreteType: "WaSmbNativeAdsWebInfo",
            kind: "LinkedField",
            name: "wa_smb_native_ads_web_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "lifetime_native_ctwa_advertiser",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "webclient_l90_ad_creator",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_page_asset_linked",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_pageless_asset_linked",
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
          name: "WAWebFetchNativeAdsMvpEligibilityQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebFetchNativeAdsMvpEligibilityQuery",
          selections: t,
        },
        params: {
          id: n(
            "WAWebFetchNativeAdsMvpEligibilityQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebFetchNativeAdsMvpEligibilityQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
