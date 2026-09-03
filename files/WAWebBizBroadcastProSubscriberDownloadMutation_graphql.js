__d(
  "WAWebBizBroadcastProSubscriberDownloadMutation.graphql",
  ["WAWebBizBroadcastProSubscriberDownloadMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "business_id",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "subscriber_pool_id",
        },
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "business_id",
                variableName: "business_id",
              },
              {
                kind: "Variable",
                name: "subscriber_pool_id",
                variableName: "subscriber_pool_id",
              },
            ],
            concreteType: "MarketingMessagesSubscriberDownloadByPoolOutput",
            kind: "LinkedField",
            name: "marketing_messages_subscriber_download_by_pool",
            plural: !1,
            selections: [
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
                name: "export_id",
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
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProSubscriberDownloadMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebBizBroadcastProSubscriberDownloadMutation",
          selections: r,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProSubscriberDownloadMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProSubscriberDownloadMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
