__d(
  "BillingThirdPartyScreenQuery.graphql",
  ["BillingThirdPartyScreenQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "billing_token" },
          { defaultValue: null, kind: "LocalArgument", name: "eventContext" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "savingRecurringLPM",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "billing_token",
            variableName: "billing_token",
          },
          {
            kind: "Variable",
            name: "event_context",
            variableName: "eventContext",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "request_status",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "result_payload",
          storageKey: null,
        },
        a = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "consent_status",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "require_auto_reload",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "supports_auto_reload",
              storageKey: null,
            },
          ],
          type: "LPMCredential",
          abstractKey: null,
        },
        i = {
          condition: "savingRecurringLPM",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "charge_status",
              storageKey: null,
            },
          ],
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BillingThirdPartyScreenQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBBillingThirdPartyRequestRecord",
              kind: "LinkedField",
              name: "billing_third_party_request_record_from_token",
              plural: !1,
              selections: [
                r,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "payment_method",
                  plural: !1,
                  selections: [a],
                  storageKey: null,
                },
                i,
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
          name: "BillingThirdPartyScreenQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBBillingThirdPartyRequestRecord",
              kind: "LinkedField",
              name: "billing_third_party_request_record_from_token",
              plural: !1,
              selections: [
                r,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "payment_method",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    a,
                    l,
                  ],
                  storageKey: null,
                },
                i,
                l,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("BillingThirdPartyScreenQuery_facebookRelayOperation"),
          metadata: { live: { polling_interval: 1e3 } },
          name: "BillingThirdPartyScreenQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
