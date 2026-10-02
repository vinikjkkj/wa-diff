__d(
  "KeyTransparencyGraphQLClient_Query.graphql",
  ["KeyTransparencyGraphQLClient_Query_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "auditor_ids",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "requested_accounts",
        },
        r = { defaultValue: "BASE64", kind: "LocalArgument", name: "serfmt" },
        o = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "auditor_ids",
                variableName: "auditor_ids",
              },
              {
                kind: "Variable",
                name: "requested_accounts",
                variableName: "requested_accounts",
              },
              { kind: "Variable", name: "serfmt", variableName: "serfmt" },
            ],
            concreteType: "XFBMessengerKTResponse",
            kind: "LinkedField",
            name: "xfb_messenger_kt_lookup",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBMessengerKTAccountResponse",
                kind: "LinkedField",
                name: "account_responses",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "account_fbid",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "proto_for_client",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "pending_sequencing",
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
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "KeyTransparencyGraphQLClient_Query",
          selections: o,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e, r],
          kind: "Operation",
          name: "KeyTransparencyGraphQLClient_Query",
          selections: o,
        },
        params: {
          id: n("KeyTransparencyGraphQLClient_Query_facebookRelayOperation"),
          metadata: {},
          name: "KeyTransparencyGraphQLClient_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
