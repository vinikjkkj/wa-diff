__d(
  "WAWebBizBroadcastProSubscriberDownloadMutation",
  [
    "WAPromiseTimeout",
    "WAWebBizBroadcastProSubscriberDownloadMutation.graphql",
    "WAWebFetchWithAdAccountToken",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProSubscriberDownloadMutation.graphql")),
      u = 3e4;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = yield o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
              function (n) {
                return o("WAPromiseTimeout").promiseTimeout(
                  o("WAWebRelayClient").commitMutation(
                    s,
                    { business_id: t, subscriber_pool_id: e },
                    {
                      accessToken: {
                        type: "FB",
                        token: n.token,
                        bp_id: n.bp_id,
                      },
                      environmentType: "facebook",
                    },
                  ),
                  u,
                  "BB Pro start subscriber download timed out",
                );
              },
            ),
            i =
              a == null
                ? void 0
                : a.marketing_messages_subscriber_download_by_pool,
            l = i == null ? void 0 : i.export_id;
          if (
            l == null ||
            (i == null ? void 0 : i.export_status) === "FAILED"
          ) {
            var c;
            throw r("err")(
              (c = i == null ? void 0 : i.error_msg) != null
                ? c
                : "Failed to start subscriber download",
            );
          }
          return {
            completionPercentage:
              (n = i == null ? void 0 : i.completion_percentage) != null
                ? n
                : 0,
            exportId: l,
            filename: i == null ? void 0 : i.filename,
          };
        })),
        d.apply(this, arguments)
      );
    }
    l.startSubscriberDownload = c;
  },
  98,
);
