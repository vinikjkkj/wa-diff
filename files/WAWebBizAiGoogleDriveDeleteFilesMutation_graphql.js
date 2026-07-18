__d(
  "WAWebBizAiGoogleDriveDeleteFilesMutation.graphql",
  ["WAWebBizAiGoogleDriveDeleteFilesMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "input" },
            ],
            concreteType: "MetaAIBizAgentWAGDriveResponse",
            kind: "LinkedField",
            name: "meta_ai_biz_agent_wa_gdrive_delete_files",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "WAWebBizAiGoogleDriveDeleteFilesMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiGoogleDriveDeleteFilesMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiGoogleDriveDeleteFilesMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiGoogleDriveDeleteFilesMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
