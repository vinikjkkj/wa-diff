__d(
  "WAWebBizAiDisconnectIntegrationMutation.graphql",
  ["WAWebBizAiDisconnectIntegrationMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "integration_configuration_id",
          },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "integration_configuration_id",
                variableName: "integration_configuration_id",
              },
            ],
            concreteType: "Disconnect3PIntegrationReturnType",
            kind: "LinkedField",
            name: "disconnect_3p_integration",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_message",
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
          name: "WAWebBizAiDisconnectIntegrationMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiDisconnectIntegrationMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiDisconnectIntegrationMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiDisconnectIntegrationMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
