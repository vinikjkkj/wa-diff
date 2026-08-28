__d(
  "AdsAccountDataDispatcherViewerPermissionsQuery.graphql",
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
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "ad_account_id",
              },
            ],
            concreteType: "XFBXAdsAccountViewerPermissionsGetController",
            kind: "LinkedField",
            name: "xfb_andromeda_XAdsAccountViewerPermissionsGetController",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "permissions",
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
          name: "AdsAccountDataDispatcherViewerPermissionsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsAccountDataDispatcherViewerPermissionsQuery",
          selections: t,
        },
        params: {
          id: "24024824467114826",
          metadata: {},
          name: "AdsAccountDataDispatcherViewerPermissionsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
