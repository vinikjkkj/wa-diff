__d(
  "useWAWebBizAdCreationAdAccountUpdate_AdAccountDetailsQuery.graphql",
  [
    "useWAWebBizAdCreationAdAccountUpdate_AdAccountDetailsQuery_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "adAccountID",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: "legacyAccountID",
          args: null,
          kind: "ScalarField",
          name: "legacy_account_id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        i = {
          alias: "currencyCodeEnum",
          args: null,
          kind: "ScalarField",
          name: "currency_code_enum",
          storageKey: null,
        },
        l = {
          alias: "canSeeSAFRV3",
          args: [
            {
              kind: "Literal",
              name: "capability",
              value: "CAN_SEE_SAFR_V3_FLOW",
            },
          ],
          kind: "ScalarField",
          name: "has_capability",
          storageKey: 'has_capability(capability:"CAN_SEE_SAFR_V3_FLOW")',
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "useWAWebBizAdCreationAdAccountUpdate_AdAccountDetailsQuery",
          selections: [
            {
              alias: "adAccount",
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                r,
                o,
                a,
                i,
                l,
                {
                  alias: "paymentAccount",
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "payment_account",
                  plural: !1,
                  selections: [r],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizAdCreationAdAccountUpdate_AdAccountDetailsQuery",
          selections: [
            {
              alias: "adAccount",
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                r,
                o,
                a,
                i,
                l,
                {
                  alias: "paymentAccount",
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "payment_account",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    r,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "useWAWebBizAdCreationAdAccountUpdate_AdAccountDetailsQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizAdCreationAdAccountUpdate_AdAccountDetailsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
