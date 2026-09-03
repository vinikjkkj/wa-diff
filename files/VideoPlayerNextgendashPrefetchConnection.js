__d(
  "VideoPlayerNextgendashPrefetchConnection",
  [
    "ExecutionEnvironment",
    "VideoPlayerNextgendashConnectionMainToWorker",
    "VideoPlayerNextgendashLoggingAPI",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n,
        a = t.config,
        i = t.hostAPI,
        l = t.instanceKey,
        s = t.workQueue,
        u = new Map(),
        c = {
          config: a,
          host: i,
          logging: o(
            "VideoPlayerNextgendashLoggingAPI",
          ).combineLoggingDestinations(t.loggingDestinations),
          loggingState: {
            logstampPrefix: l,
            logstampTint: 0.5,
            metadata: babelHelpers.extends(
              {},
              (n = t.siteMetadata) != null ? n : {},
              { nextgendashCreatedAt: i.clock(), playerInstanceKey: l },
            ),
          },
          workQueue: s,
        },
        d = o("VideoPlayerNextgendashConnectionMainToWorker").connectToWorker(
          c,
          t.workerPortFactories,
          t.workerType,
          l,
          function (e) {
            if (e.type === "from_worker_to_main_prefetch_task_complete") {
              var t = u.get(e.prefetchKey);
              t != null && (u.delete(e.prefetchKey), t());
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
              c,
              "VideoPlayerNextgendashUnexpectedEventFromWorkerPrefetcher",
              "Unexpected event received: type=%s, event=%s",
              n,
              r,
            );
          },
        );
      return {
        prefetch: function (n, o, l, s, c) {
          if (n.representations.length === 0) {
            c == null || c();
            return;
          }
          if (c != null) {
            var t = u.get(n.prefetchKey);
            (u.set(n.prefetchKey, c), t == null || t());
          }
          var m = 1,
            p = !1;
          if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            var _;
            ((m = (_ = window.devicePixelRatio) != null ? _ : 1),
              (p = document.hidden));
          }
          d.sendToWorker({
            eventToWorker: {
              groupId: s,
              initialAbrParams: {
                abrConfig: o,
                bandwidthDiagnostics: i.networkDiagnosticsReadBandwidth(
                  a.enableBandwidthDiagnosticsFallback,
                ),
                devicePixelRatio: m,
                isDocumentHidden: p,
                playerDimensions: l,
                prefetchResolutionThreshold: a.prefetchResolutionThreshold,
              },
              prefetchInfo: n,
              type: "from_main_to_worker_prefetch",
            },
            type: "send_to_worker",
          });
        },
        releasePrefetchKey: function (t) {
          var e = u.get(t);
          (e != null && (u.delete(t), e()),
            d.sendToWorker({
              eventToWorker: {
                prefetchKey: t,
                type: "from_main_to_worker_release_prefetch_key",
              },
              type: "send_to_worker",
            }));
        },
        sendPrefetchGroupAction: function (t) {
          d.sendToWorker({
            eventToWorker: {
              prefetchGroupAction: t,
              type: "from_main_to_worker_prefetch_group_action",
            },
            type: "send_to_worker",
          });
        },
      };
    }
    l.createVideoPlayerNextgendashPrefetchConnection = s;
  },
  98,
);
