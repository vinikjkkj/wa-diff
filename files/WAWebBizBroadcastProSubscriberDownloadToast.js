__d(
  "WAWebBizBroadcastProSubscriberDownloadToast",
  [
    "Promise",
    "WAWebBizBroadcastProSubscriberDownloadRegistry",
    "WAWebBizBroadcastProSubscriberDownloadStore",
    "WAWebBizBroadcastProSubscriberDownloadStrings",
    "WDSToastImperativeHost",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t;
      if (
        ((t = o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).getSubscriberDownload(e)) == null
          ? void 0
          : t.status) === "preparing"
      ) {
        var n = u(e),
          r = null,
          a = function () {
            var t = o(
              "WAWebBizBroadcastProSubscriberDownloadRegistry",
            ).getSubscriberDownload(e);
            if ((t == null ? void 0 : t.status) === "preparing") {
              var a = o(
                "WAWebBizBroadcastProSubscriberDownloadRegistry",
              ).getPreparingPercentage(t.completionPercentage);
              a !== r &&
                ((r = a),
                o("WDSToastImperativeHost").showWDSToast({
                  dedupId: "bb_pro_subscriber_download_toast:" + e,
                  isAnchoredToBottom: !0,
                  message: function (t) {
                    return c(t, a);
                  },
                  process: n,
                  testid: "bb_pro_download_progress_toast",
                  type: "loading",
                }));
            }
          },
          i = function () {
            return o(
              "WAWebBizBroadcastProSubscriberDownloadRegistry",
            ).SubscriberDownloadEmitter.off(
              o("WAWebBizBroadcastProSubscriberDownloadRegistry")
                .SUBSCRIBER_DOWNLOADS_CHANGED,
              a,
            );
          };
        (n.then(i, i),
          o(
            "WAWebBizBroadcastProSubscriberDownloadRegistry",
          ).SubscriberDownloadEmitter.on(
            o("WAWebBizBroadcastProSubscriberDownloadRegistry")
              .SUBSCRIBER_DOWNLOADS_CHANGED,
            a,
          ),
          a());
      }
    }
    function u(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var a = function () {
            (window.clearTimeout(l),
              o(
                "WAWebBizBroadcastProSubscriberDownloadRegistry",
              ).SubscriberDownloadEmitter.off(
                o("WAWebBizBroadcastProSubscriberDownloadRegistry")
                  .SUBSCRIBER_DOWNLOADS_CHANGED,
                i,
              ));
          },
          i = function () {
            var i,
              l =
                (i = o(
                  "WAWebBizBroadcastProSubscriberDownloadRegistry",
                ).getSubscriberDownload(t)) == null
                  ? void 0
                  : i.status;
            l !== "preparing" &&
              (a(),
              l === "ready"
                ? e()
                : n(r("err")("BB Pro subscriber download did not finish")));
          },
          l = window.setTimeout(function () {
            var e;
            ((e = o(
              "WAWebBizBroadcastProSubscriberDownloadRegistry",
            ).getSubscriberDownload(t)) == null
              ? void 0
              : e.exportId) == null &&
              (a(), n(r("err")("BB Pro subscriber download did not start")));
          }, o("WAWebBizBroadcastProSubscriberDownloadStore").MAX_POLL_DURATION_MS);
        (o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).SubscriberDownloadEmitter.on(
          o("WAWebBizBroadcastProSubscriberDownloadRegistry")
            .SUBSCRIBER_DOWNLOADS_CHANGED,
          i,
        ),
          i());
      });
    }
    function c(e, t) {
      return e === "success"
        ? o("WAWebBizBroadcastProSubscriberDownloadStrings").getFileReadyLabel()
        : e === "error"
          ? o(
              "WAWebBizBroadcastProSubscriberDownloadStrings",
            ).getFileFailedLabel()
          : e === "default" || e === "loading"
            ? o(
                "WAWebBizBroadcastProSubscriberDownloadStrings",
              ).getPreparingFileLabel(t)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.showSubscriberDownloadToast = s;
  },
  98,
);
