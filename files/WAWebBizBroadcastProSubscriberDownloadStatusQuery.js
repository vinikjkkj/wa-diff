__d(
  "WAWebBizBroadcastProSubscriberDownloadStatusQuery",
  [
    "WAWebBizBroadcastProSubscriberDownloadStatusQuery.graphql",
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
          : (e = n(
              "WAWebBizBroadcastProSubscriberDownloadStatusQuery.graphql",
            ));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
              function (t) {
                return o("WAWebRelayClient").fetchQuery(
                  s,
                  { export_id: e },
                  {
                    accessToken: { type: "FB", token: t.token, bp_id: t.bp_id },
                    environmentType: "facebook",
                    fetchPolicy: "network-only",
                  },
                );
              },
            ),
            a =
              n == null
                ? void 0
                : n.marketing_messages_subscriber_download_export_status;
          if (a == null)
            throw r("err")("Subscriber download export status unavailable");
          return {
            cdnUrl: a.cdn_url,
            completionPercentage: (t = a.completion_percentage) != null ? t : 0,
            errorMsg: a.error_msg,
            exportStatus: a.export_status,
            filename: a.filename,
          };
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchSubscriberDownloadStatus = u;
  },
  98,
);
