__d(
  "VideoPlayerNextgendashWorkerEnvironment",
  [
    "VideoPlayerNextgendashLoggingAPI",
    "VideoPlayerNextgendashLoggingDestinationFBLogger",
    "VideoPlayerNextgendashLoggingDestinationODSWorkerToMain",
    "VideoPlayerNextgendashLoggingDestinationQPLWorkerToMain",
    "VideoPlayerNextgendashWorkQueue",
    "VideoPlayerNextgendashWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i,
        l = e,
        u = (i = l.isInWorkerType) != null ? i : "VirtualWorker",
        c = t,
        d = {
          config: l,
          host: c,
          logging: o(
            "VideoPlayerNextgendashLoggingAPI",
          ).combineLoggingDestinations([
            o(
              "VideoPlayerNextgendashLoggingDestinationFBLogger",
            ).createVideoPlayerNextgendashLoggingDestinationFBLogger(),
            l.debugLog ? r : null,
            l.debugViz
              ? a == null
                ? void 0
                : a.createLoggingDestination({
                    hostAPI: c,
                    portToMain: n,
                    workerType: u,
                  })
              : null,
            o(
              "VideoPlayerNextgendashLoggingDestinationQPLWorkerToMain",
            ).createVideoPlayerNextgendashLoggingDestinationQPLWorkerToMain(
              n,
              c.timers,
            ),
            o(
              "VideoPlayerNextgendashLoggingDestinationODSWorkerToMain",
            ).createVideoPlayerNextgendashLoggingDestinationODSWorkerToMain(
              n,
              c.timers,
            ),
          ]),
          loggingState: s(u),
          workQueue: o(
            "VideoPlayerNextgendashWorkQueue",
          ).createVideoPlayerNextgendashWorkQueue(c.scheduleToRun),
        },
        m = o(
          "VideoPlayerNextgendashWorker",
        ).VideoPlayerNextgendashWorkerSM.createSM(
          "VideoPlayerNextgendashWorker",
          d,
          null,
          {
            portToMain: n,
            subscribeToDebugHalt: a == null ? void 0 : a.subscribeToDebugHalt,
            workerType: u,
          },
        );
    }
    function s(e) {
      return {
        logstampPrefix: {
          RealWorker: "nextgendash_real_worker",
          RealWorkerV2: "nextgendash_real_worker_v2",
          VirtualWorker: "nextgendash_virtual_worker",
        }[e],
        logstampTint: {
          RealWorker: 0.9,
          RealWorkerV2: 0.8,
          VirtualWorker: 0.3,
        }[e],
        metadata: {},
      };
    }
    ((l.createVideoPlayerNextgendashWorkerEnvironment = e),
      (l.createWorkerDefaultLoggingState = s));
  },
  98,
);
