__d(
  "VideoPlayerNextgendashConnectionPortToVirtualWorker",
  [
    "JSResourceForInteraction",
    "VirtualMessageChannel",
    "WorkerSyncedMessagePortWithErrored",
    "cr:9585",
    "cr:9712",
    "cr:9719",
    "fb-error",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
      "VideoPlayerNextgendashWorkerEnvironment",
    ).__setRef("VideoPlayerNextgendashConnectionPortToVirtualWorker");
    function s() {
      n("cr:9585") == null && e.preload();
    }
    var u = function (a, i, l) {
      var t = !0,
        s = new (o("VirtualMessageChannel").VirtualMessageChannel)(t, t),
        u = s.port1,
        c = s.port2,
        d = new (o(
          "WorkerSyncedMessagePortWithErrored",
        ).WorkerSyncedMessagePortWithErrored)(
          c,
          "VideoPlayerNextgendashConnectionWorkerToMain_VirtualWorker",
        ),
        m = new (o(
          "WorkerSyncedMessagePortWithErrored",
        ).WorkerSyncedMessagePortWithErrored)(u, a),
        p = n("cr:9585") != null ? n("cr:9585") : e.getModuleIfRequireable();
      return (
        p != null
          ? p.createVideoPlayerNextgendashWorkerEnvironment(
              i,
              l,
              d,
              n("cr:9712"),
              n("cr:9719"),
            )
          : e
              .load()
              .then(function (e) {
                e.createVideoPlayerNextgendashWorkerEnvironment(
                  i,
                  l,
                  d,
                  n("cr:9712"),
                  n("cr:9719"),
                );
              })
              .catch(function (e) {
                var t = r("fb-error").getErrorSafe(e);
                r("fb-error")
                  .FBLogger(
                    "comet_video_player_nextgendash",
                    "WorkerEnvironmentJSResourceLoadRejection",
                  )
                  .catching(t)
                  .fatal(
                    'Failed to load module "VideoPlayerNextgendashWorkerEnvironment" / ' +
                      String(t),
                  );
              }),
        m
      );
    };
    ((l.preloadWorkerEnvironmentJSResourceWhenVirtualWorkerOnly = s),
      (l.createVideoPlayerNextgendashConnectionPortToVirtualWorker = u));
  },
  98,
);
