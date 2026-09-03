__d(
  "WAWebBizBroadcastProSubscriberDownloadStatusQuery.graphql",
  ["WAWebBizBroadcastProSubscriberDownloadStatusQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "export_id" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "export_id",
                variableName: "export_id",
              },
            ],
            concreteType:
              "MarketingMessagesSubscriberDownloadExportStatusOutput",
            kind: "LinkedField",
            name: "marketing_messages_subscriber_download_export_status",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "cdn_url",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "completion_percentage",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_msg",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "export_status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "filename",
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
          name: "WAWebBizBroadcastProSubscriberDownloadStatusQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProSubscriberDownloadStatusQuery",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProSubscriberDownloadStatusQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProSubscriberDownloadStatusQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
