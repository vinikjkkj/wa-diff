__d(
  "AdsConvergenceHasUserCreatedLoggerPlugin",
  [
    "AdAsyncRequestStatus",
    "AdsInterfacesLogger",
    "CometEDFLoggerLogDismiss",
    "adsConvergenceHasUserCreatedAd",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e,
            n =
              (e = t.response) == null || (e = e.fragment_statuses) == null
                ? void 0
                : e.data;
          n == null ||
            r("adsConvergenceHasUserCreatedAd")() ||
            (n.some(function (e) {
              return (
                e.ad_object_type === "ad" &&
                e.status === r("AdAsyncRequestStatus").SUCCESS &&
                e.action !== "delete"
              );
            }) &&
              (r("AdsInterfacesLogger").log(
                { eventName: "first_time_ad_creation" },
                r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
              ),
              o("CometEDFLoggerLogDismiss").markMessageSeenByUser(
                "1215687395446138",
              )));
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
