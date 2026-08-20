__d(
  "VideoPlayerNextgendashPrefetchConnection",
  [
    "VideoPlayerNextgendashConnectionMainToWorker",
    "VideoPlayerNextgendashLoggingAPI",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.config,
        r = e.hostAPI,
        a = e.instanceKey,
        i = e.workQueue,
        l = new Map(),
        s = {
          config: n,
          host: r,
          logging: o(
            "VideoPlayerNextgendashLoggingAPI",
          ).combineLoggingDestinations(e.loggingDestinations),
          loggingState: {
            logstampPrefix: a,
            logstampTint: 0.5,
            metadata: babelHelpers.extends(
              {},
              (t = e.siteMetadata) != null ? t : {},
              { nextgendashCreatedAt: r.clock(), playerInstanceKey: a },
            ),
          },
          workQueue: i,
        },
        u = o("VideoPlayerNextgendashConnectionMainToWorker").connectToWorker(
          s,
          e.workerPortFactories,
          e.workerType,
          a,
          function (e) {
            if (e.type === "from_worker_to_main_prefetch_task_complete") {
              var t = l.get(e.prefetchKey);
              t != null && (l.delete(e.prefetchKey), t());
              return;
            }
            var n =
                typeof e == "object" && e != null && typeof e.type == "string"
                  ? e.type
                  : "[unknown]",
              r;
            try {
              r = JSON.stringify(e);
            } catch (e) {
              r = "[serialization failed]";
            }
            throw o("nextgendasherr").nextgendasherr(
              s,
              "VideoPlayerNextgendashUnexpectedEventFromWorkerPrefetcher",
              "Unexpected event received: type=%s, event=%s",
              n,
              r,
            );
          },
        );
      return {
        prefetch: function (t, o, a, i, s) {
          var e;
          if (t.representations.length === 0) {
            s == null || s();
            return;
          }
          if (s != null) {
            var c = l.get(t.prefetchKey);
            (l.set(t.prefetchKey, s), c == null || c());
          }
          u.sendToWorker({
            eventToWorker: {
              groupId: i,
              initialAbrParams: {
                abrConfig: o,
                bandwidthDiagnostics: r.networkDiagnosticsReadBandwidth(
                  n.enableBandwidthDiagnosticsFallback,
                ),
                devicePixelRatio: (e = window.devicePixelRatio) != null ? e : 1,
                isDocumentHidden: document.hidden,
                playerDimensions: a,
                prefetchResolutionThreshold: n.prefetchResolutionThreshold,
              },
              prefetchInfo: t,
              type: "from_main_to_worker_prefetch",
            },
            type: "send_to_worker",
          });
        },
        releasePrefetchKey: function (t) {
          var e = l.get(t);
          (e != null && (l.delete(t), e()),
            u.sendToWorker({
              eventToWorker: {
                prefetchKey: t,
                type: "from_main_to_worker_release_prefetch_key",
              },
              type: "send_to_worker",
            }));
        },
        sendPrefetchGroupAction: function (t) {
          u.sendToWorker({
            eventToWorker: {
              prefetchGroupAction: t,
              type: "from_main_to_worker_prefetch_group_action",
            },
            type: "send_to_worker",
          });
        },
      };
    }
    l.createVideoPlayerNextgendashPrefetchConnection = e;
  },
  98,
);
