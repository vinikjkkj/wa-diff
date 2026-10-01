__d(
  "WAWebBizAiSetupThirdPartyIntegrationMutation.graphql",
  ["WAWebBizAiSetupThirdPartyIntegrationMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "asset_id" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "authorization_params",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "connection_id",
        },
        o = { defaultValue: null, kind: "LocalArgument", name: "plugin_id" },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "url_template_params",
        },
        i = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "asset_id", variableName: "asset_id" },
              {
                kind: "Variable",
                name: "authorization_params",
                variableName: "authorization_params",
              },
              {
                kind: "Variable",
                name: "connection_id",
                variableName: "connection_id",
              },
              {
                kind: "Variable",
                name: "plugin_id",
                variableName: "plugin_id",
              },
              { kind: "Literal", name: "source", value: "whatsapp" },
              {
                kind: "Variable",
                name: "url_template_params",
                variableName: "url_template_params",
              },
            ],
            concreteType: "SetupMembrane3PIntegrationReturnType",
            kind: "LinkedField",
            name: "setup_3p_integration",
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
                name: "error_code",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o, a],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiSetupThirdPartyIntegrationMutation",
          selections: i,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [o, r, e, t, a],
          kind: "Operation",
          name: "WAWebBizAiSetupThirdPartyIntegrationMutation",
          selections: i,
        },
        params: {
          id: n(
            "WAWebBizAiSetupThirdPartyIntegrationMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiSetupThirdPartyIntegrationMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
