__d(
  "VideoPlayerNextgendashConnectionMainToWorker",
  [
    "VideoPlayerNextgendashConnectionUtils",
    "VideoPlayerNextgendashStateMachine",
    "VideoPlayerODS",
    "nextgendasherr",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
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
      var l = n + ":" + r.mediaSinkType,
        s = e[l];
      if (s != null) {
        if (s.port != null) return s.port;
        throw s.exception;
      }
      var c = "VideoPlayerNextgendashConnectionMainToWorker_" + n,
        d = t[n];
      if (d == null)
        throw o("nextgendasherr").nextgendasherr(a, c + "/PortFactoryMissing");
      try {
        var m = d(c, babelHelpers.extends({}, r, { isInWorkerType: n }), i);
        return (u(m), (e[l] = { port: m }), m);
      } catch (t) {
        var p = o("nextgendasherr").nextgendasherrFromCause(
          a,
          t,
          c + "/PortFactoryException",
        );
        throw ((e[l] = { exception: p }), p);
      }
    }
    function d(t, n, a, i, l) {
      var s = "VideoPlayerNextgendashConnectionMainToWorker_" + a,
        u = String(i),
        d = c(n, a, t.config, t, t.host),
        m = o(
          "VideoPlayerNextgendashConnectionUtils",
        ).createInboundOutboundQueues(
          t,
          s,
          u,
          d,
          function (e) {
            (e.type === "__exception" ||
              (e.workerType === a &&
                (e.playerInstanceKey == null || e.playerInstanceKey === i))) &&
              l(e);
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
            var n = d.addMessageListener(
              "comet_video_player_nextgendash__worker_to_main",
              t,
            );
            e.push(function () {
              d.removeMessageListener(
                "comet_video_player_nextgendash__worker_to_main",
                n,
              );
            });
          },
          function (e) {
            var n = t.loggingState.metadata.nextgendashInstanceIndex,
              r = d.addMessageListener(
                "comet_video_player_nextgendash__worker_to_main_qpl_calls",
                function (e) {
                  e.calls.forEach(function (e) {
                    e.instanceKey === n &&
                      t.logging.log(t, { qplCall: e, type: "qpl_call" });
                  });
                },
              );
            if (
              (e.push(function () {
                d.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_qpl_calls",
                  r,
                );
              }),
              t.config.debugViz)
            ) {
              var o = d.addMessageListener(
                "comet_video_player_nextgendash__worker_to_main_debug_snapshot",
                function (e) {
                  t.logging.log(t, {
                    snapshot: e.snapshot,
                    type: "state_machine_debug_snapshot_from_worker",
                  });
                },
              );
              e.push(function () {
                d.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_debug_snapshot",
                  o,
                );
              });
              var a = d.addMessageListener(
                "comet_video_player_nextgendash__worker_to_main_debug_events",
                function (e) {
                  t.logging.log(t, {
                    events: e.events,
                    type: "state_machine_debug_events_from_worker",
                  });
                },
              );
              e.push(function () {
                d.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_debug_events",
                  a,
                );
              });
            }
          },
        ),
        p = m.getStats,
        _ = m.send,
        f = m.disconnect,
        g = t.config.realWorkerConnectTimeoutMs;
      if (a !== "VirtualWorker" && g > 0) {
        var h = !1;
        r("promiseDone")(
          d.fullyConnected,
          function () {
            h = !0;
          },
          function () {
            h = !0;
          },
        );
        var y = t.host.timers.setTimeout(function () {
            if (!h) {
              var n = o("nextgendasherr").nextgendasherr(
                t,
                s + "/ConnectTimeout",
                "Worker did not complete its handshake within %sms",
                g,
              );
              for (var r of Object.keys(e)) {
                var a;
                ((a = e[r]) == null ? void 0 : a.port) === d &&
                  (e[r] = { exception: n });
              }
              l({ exception: n, type: "__exception" });
            }
          }, g),
          C = f;
        f = function (n) {
          (t.host.timers.clearTimeout(y), C(n));
        };
      }
      function b(e) {
        d.postMessage(
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
        disconnectFromWorker: f,
        getStats: p,
        sendHaltedToWorker: b,
        sendToWorker: _,
      });
    }
    ((l.preloadWorker = s), (l.connectToWorker = d));
  },
  98,
);
