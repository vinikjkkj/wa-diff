__d(
  "AdsVideoUploadStartDataLoggerPlugin",
  [
    "AdsPerfInteractionsController",
    "InteractionTracingMetrics",
    "VideoAdsCreationTypedLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e,
            n =
              (e = r("AdsPerfInteractionsController")
                .getAllOngoingInteraction()
                .get("am.toast_card.video_upload")) == null
                ? void 0
                : e.interactionID;
          if (n != null) {
            var o;
            r("InteractionTracingMetrics").addMarkerPoint(
              n,
              (o = t.actionType) != null ? o : "VIDEO.UPLOAD_START",
              "AppTiming",
            );
          }
          new (r("VideoAdsCreationTypedLogger"))()
            .setEvent("upload.client.action_dispatch_started")
            .setWaterfallID(t.waterfallID == null ? "undefined" : t.waterfallID)
            .setSourceType("ads_interfaces")
            .setAdAccountID(t.accountID)
            .setTriggerTime(Date.now())
            .log();
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
