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
        c = new Map(),
        d = !1,
        m = {
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
        p = o("VideoPlayerNextgendashConnectionMainToWorker").connectToWorker(
          m,
          t.workerPortFactories,
          t.workerType,
          l,
          function (e) {
            if (e.type === "__exception") {
              (m.logging.log(m, {
                error: e.exception,
                type: "generic_error_as_warning",
              }),
                (d = !0));
              var t = Array.from(c.values());
              c.clear();
              for (var n of t) u(m, n);
              return;
            }
            if (e.type === "from_worker_to_main_prefetch_task_complete") {
              var r = c.get(e.prefetchKey);
              r != null && (c.delete(e.prefetchKey), r());
              return;
            }
            var a =
                typeof e == "object" && e != null && typeof e.type == "string"
                  ? e.type
                  : "[unknown]",
              i;
            try {
              i = JSON.stringify(e);
            } catch (e) {
              i = "[serialization failed]";
            }
            throw o("nextgendasherr").nextgendasherr(
              m,
              "VideoPlayerNextgendashUnexpectedEventFromWorkerPrefetcher",
              "Unexpected event received: type=%s, event=%s",
              a,
              i,
            );
          },
        );
      return {
        prefetch: function (n, o, l, s, u) {
          if (n.representations.length === 0 || d) {
            u == null || u();
            return;
          }
          if (u != null) {
            var t = c.get(n.prefetchKey);
            (c.set(n.prefetchKey, u), t == null || t());
          }
          var m = 1,
            _ = !1;
          if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            var f;
            ((m = (f = window.devicePixelRatio) != null ? f : 1),
              (_ = document.hidden));
          }
          p.sendToWorker({
            eventToWorker: {
              groupId: s,
              initialAbrParams: {
                abrConfig: o,
                bandwidthDiagnostics: i.networkDiagnosticsReadBandwidth(
                  a.enableBandwidthDiagnosticsFallback,
                  a.bandwidthDiagnosticsFallbackDefaultEstimate,
                ),
                devicePixelRatio: m,
                enableSmartPlayerStaticCapabilityFiltering:
                  a.enableSmartPlayerStaticCapabilityFiltering,
                isDocumentHidden: _,
                playerDimensions: l,
                prefetchResolutionThreshold: a.prefetchResolutionThreshold,
                smartPlayerVideoDecodeCapabilities:
                  a.smartPlayerVideoDecodeCapabilities,
              },
              prefetchInfo: n,
              type: "from_main_to_worker_prefetch",
            },
            type: "send_to_worker",
          });
        },
        releasePrefetchKey: function (t) {
          var e = c.get(t);
          (e != null && (c.delete(t), e()),
            p.sendToWorker({
              eventToWorker: {
                prefetchKey: t,
                type: "from_main_to_worker_release_prefetch_key",
              },
              type: "send_to_worker",
            }));
        },
        sendPrefetchGroupAction: function (t) {
          p.sendToWorker({
            eventToWorker: {
              prefetchGroupAction: t,
              type: "from_main_to_worker_prefetch_group_action",
            },
            type: "send_to_worker",
          });
        },
      };
    }
    function u(e, t) {
      try {
        t();
      } catch (t) {
        e.logging.log(e, {
          error: o("nextgendasherr").nextgendasherrFromCause(
            e,
            t,
            "VideoPlayerNextgendashPrefetchOnCompleteFailed",
          ),
          type: "generic_error_as_warning",
        });
      }
    }
    l.createVideoPlayerNextgendashPrefetchConnection = s;
  },
  98,
);
