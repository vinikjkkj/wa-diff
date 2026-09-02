__d(
  "WABizAIGDriveSyncFilesDocumentMutation.graphql",
  ["WABizAIGDriveSyncFilesDocumentMutation_facebookRelayOperation"],
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
            name: "meta_ai_biz_agent_wa_gdrive_sync_files",
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
          name: "WABizAIGDriveSyncFilesDocumentMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WABizAIGDriveSyncFilesDocumentMutation",
          selections: t,
        },
        params: {
          id: n(
            "WABizAIGDriveSyncFilesDocumentMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WABizAIGDriveSyncFilesDocumentMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
