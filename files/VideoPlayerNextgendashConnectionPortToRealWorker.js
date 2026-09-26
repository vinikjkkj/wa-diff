__d(
  "VideoPlayerNextgendashConnectionPortToRealWorker",
  [
    "CometVideoPlayerNextgendashWorkerResource",
    "CometVideoPlayerNextgendashWorkerWithDebugResource",
    "WorkerSyncedMessagePortWithErrored",
    "cr:9583",
    "cr:9584",
    "fb-error",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, a) {
      if (n("cr:9583") == null) {
        var e = r("fb-error").err("WorkerBundleResource is missing");
        throw ((e.name = "WorkerBundleResourceMissing"), e);
      }
      if (n("cr:9584") == null) {
        var i = r("fb-error").err("WorkerClient is missing");
        throw ((i.name = "WorkerClientMissing"), i);
      }
      var l =
          a.debugLog || a.debugViz
            ? r("CometVideoPlayerNextgendashWorkerWithDebugResource")
            : r("CometVideoPlayerNextgendashWorkerResource"),
        s =
          l === r("CometVideoPlayerNextgendashWorkerWithDebugResource")
            ? "CometVideoPlayerNextgendashWorkerWithDebug"
            : "CometVideoPlayerNextgendashWorker",
        u = n("cr:9583").createDedicatedWebWorker(
          l,
          { logImportScriptsErrors: !0, name: s },
          { workerEnvConfig: a },
        ),
        c = new (o(
          "WorkerSyncedMessagePortWithErrored",
        ).WorkerSyncedMessagePortWithErrored)(u, t);
      return (n("cr:9584").init(c), c);
    };
    l.createVideoPlayerNextgendashConnectionPortToRealWorker = e;
  },
  98,
);
