__d(
  "useAdsLWIExposeAdAccountBoolUniverseHookQuery.graphql",
  ["useAdsLWIExposeAdAccountBoolUniverseHookQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "account_id" },
          { defaultValue: null, kind: "LocalArgument", name: "default_value" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "expose_with_multiple_ad_accounts",
          },
          { defaultValue: null, kind: "LocalArgument", name: "log_exposure" },
          { defaultValue: null, kind: "LocalArgument", name: "param_name" },
          { defaultValue: null, kind: "LocalArgument", name: "should_fetch" },
          { defaultValue: null, kind: "LocalArgument", name: "universe_name" },
        ],
        t = [
          {
            alias: null,
            args: null,
            concreteType: "LWIAPI",
            kind: "LinkedField",
            name: "lwi",
            plural: !1,
            selections: [
              {
                condition: "should_fetch",
                kind: "Condition",
                passingValue: !0,
                selections: [
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Variable",
                        name: "account_id",
                        variableName: "account_id",
                      },
                      {
                        kind: "Variable",
                        name: "default_value",
                        variableName: "default_value",
                      },
                      {
                        kind: "Variable",
                        name: "expose_with_multiple_ad_accounts",
                        variableName: "expose_with_multiple_ad_accounts",
                      },
                      {
                        kind: "Variable",
                        name: "log_exposure",
                        variableName: "log_exposure",
                      },
                      {
                        kind: "Variable",
                        name: "param_name",
                        variableName: "param_name",
                      },
                      {
                        kind: "Variable",
                        name: "universe_name",
                        variableName: "universe_name",
                      },
                    ],
                    kind: "ScalarField",
                    name: "expose_ad_account_for_qe_bool",
                    storageKey: null,
                  },
                ],
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
          name: "useAdsLWIExposeAdAccountBoolUniverseHookQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useAdsLWIExposeAdAccountBoolUniverseHookQuery",
          selections: t,
        },
        params: {
          id: n(
            "useAdsLWIExposeAdAccountBoolUniverseHookQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "useAdsLWIExposeAdAccountBoolUniverseHookQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
