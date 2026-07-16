__d(
  "WAWebBizAiGoogleDriveGetFilesMutation.graphql",
  ["WAWebBizAiGoogleDriveGetFilesMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "MetaAIBizAgentWAGDriveGetFilesResponse",
          kind: "LinkedField",
          name: "meta_ai_biz_agent_wa_gdrive_get_files",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MetaAIBizAgentWAGDriveFileInfo",
              kind: "LinkedField",
              name: "files",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "google_file_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "file_name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "mime_type",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "sync_status",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "sync_failure_reason",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_thumbnail",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "thumbnail_link",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "synced_at",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "cdn_url",
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
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiGoogleDriveGetFilesMutation",
          selections: e,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiGoogleDriveGetFilesMutation",
          selections: e,
        },
        params: {
          id: n("WAWebBizAiGoogleDriveGetFilesMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiGoogleDriveGetFilesMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
