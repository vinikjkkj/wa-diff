__d(
  "VideoPlayerNextgendashConnectionMainToWorker",
  [
    "VideoPlayerNextgendashConnectionUtils",
    "VideoPlayerNextgendashStateMachine",
    "VideoPlayerODS",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { RealWorker: null, RealWorkerV2: null, VirtualWorker: null };
    function s(e) {
      var t = e.envForErrors,
        n = e.virtualWorkerHostAPI,
        r = e.workerEnvConfig,
        o = e.workerPortFactories,
        a = e.workerType;
      try {
        c(o, a, r, t, n);
      } catch (e) {}
    }
    function u(e) {
      e.addMessageListener(
        "comet_video_player_nextgendash__worker_to_main_ods_calls",
        function (e) {
          e.calls.forEach(function (e) {
            o("VideoPlayerODS").bumpEntityKey(e.entity, e.key, e.sampleRate);
          });
        },
      );
    }
    function c(t, n, r, a, i) {
      var l = e[n];
      if (l != null) {
        if (l.port != null) return l.port;
        throw l.exception;
      }
      var s = "VideoPlayerNextgendashConnectionMainToWorker_" + n,
        c = t[n];
      if (c == null)
        throw o("nextgendasherr").nextgendasherr(a, s + "/PortFactoryMissing");
      try {
        var d = c(s, babelHelpers.extends({}, r, { isInWorkerType: n }), i);
        return (u(d), (e[n] = { port: d }), d);
      } catch (t) {
        var m = o("nextgendasherr").nextgendasherrFromCause(
          a,
          t,
          s + "/PortFactoryException",
        );
        throw ((e[n] = { exception: m }), m);
      }
    }
    function d(e, t, n, r, a) {
      var i = "VideoPlayerNextgendashConnectionMainToWorker_" + n,
        l = String(r),
        s = c(t, n, e.config, e, e.host),
        u = o(
          "VideoPlayerNextgendashConnectionUtils",
        ).createInboundOutboundQueues(
          e,
          i,
          l,
          s,
          function (e) {
            (e.type === "__exception" ||
              (e.workerType === n &&
                (e.playerInstanceKey == null || e.playerInstanceKey === r))) &&
              a(e);
          },
          function (e) {
            return e.eventToWorker.type;
          },
          function (e) {
            return {
              message: {
                events: e.map(function (e) {
                  return e.eventToWorker;
                }),
                type: "comet_video_player_nextgendash__main_to_worker",
              },
              transferList: e.reduce(function (e, t) {
                var n;
                return e.concat((n = t.transferList) != null ? n : []);
              }, []),
            };
          },
          function (e, t) {
            var n = s.addMessageListener(
              "comet_video_player_nextgendash__worker_to_main",
              t,
            );
            e.push(function () {
              s.removeMessageListener(
                "comet_video_player_nextgendash__worker_to_main",
                n,
              );
            });
          },
          function (t) {
            var n = e.loggingState.metadata.nextgendashInstanceIndex,
              r = s.addMessageListener(
                "comet_video_player_nextgendash__worker_to_main_qpl_calls",
                function (t) {
                  t.calls.forEach(function (t) {
                    t.instanceKey === n &&
                      e.logging.log(e, { qplCall: t, type: "qpl_call" });
                  });
                },
              );
            if (
              (t.push(function () {
                s.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_qpl_calls",
                  r,
                );
              }),
              e.config.debugViz)
            ) {
              var o = s.addMessageListener(
                "comet_video_player_nextgendash__worker_to_main_debug_snapshot",
                function (t) {
                  e.logging.log(e, {
                    snapshot: t.snapshot,
                    type: "state_machine_debug_snapshot_from_worker",
                  });
                },
              );
              t.push(function () {
                s.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_debug_snapshot",
                  o,
                );
              });
              var a = s.addMessageListener(
                "comet_video_player_nextgendash__worker_to_main_debug_events",
                function (t) {
                  e.logging.log(e, {
                    events: t.events,
                    type: "state_machine_debug_events_from_worker",
                  });
                },
              );
              t.push(function () {
                s.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_debug_events",
                  a,
                );
              });
            }
          },
        ),
        d = u.disconnect,
        m = u.getStats,
        p = u.send;
      function _(e) {
        s.postMessage(
          {
            haltReason: e,
            type: "comet_video_player_nextgendash__main_to_worker_debug_halt",
          },
          [],
        );
      }
      return o(
        "VideoPlayerNextgendashStateMachine",
      ).skipAutoDisposeInsideThisObject({
        disconnectFromWorker: d,
        getStats: m,
        sendHaltedToWorker: _,
        sendToWorker: p,
      });
    }
    ((l.preloadWorker = s), (l.connectToWorker = d));
  },
  98,
);
