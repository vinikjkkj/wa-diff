__d(
  "WAWebBizAiPrepareOAuthAppInstallationMutation.graphql",
  ["WAWebBizAiPrepareOAuthAppInstallationMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "plugin_id" },
          { defaultValue: null, kind: "LocalArgument", name: "redirect_uri" },
          { defaultValue: null, kind: "LocalArgument", name: "source" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "plugin_id",
                variableName: "plugin_id",
              },
              {
                kind: "Variable",
                name: "redirect_uri",
                variableName: "redirect_uri",
              },
              { kind: "Variable", name: "source", variableName: "source" },
            ],
            concreteType: "XFBBizAIPrepareOAuthAppInstallationResponse",
            kind: "LinkedField",
            name: "prepare_oauth_app_installation",
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
                name: "app_installation_url",
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
          name: "WAWebBizAiPrepareOAuthAppInstallationMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiPrepareOAuthAppInstallationMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiPrepareOAuthAppInstallationMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiPrepareOAuthAppInstallationMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
