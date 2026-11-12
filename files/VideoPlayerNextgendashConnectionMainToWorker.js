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
    var e = {},
      s = new WeakMap();
    function u(e) {
      var t = e.envForErrors,
        n = e.virtualWorkerHostAPI,
        r = e.workerEnvConfig,
        o = e.workerPortFactories,
        a = e.workerType;
      try {
        d(o, a, r, t, n);
      } catch (e) {}
    }
    function c(e) {
      e.addMessageListener(
        "comet_video_player_nextgendash__worker_to_main_ods_calls",
        function (e) {
          e.calls.forEach(function (e) {
            o("VideoPlayerODS").bumpEntityKey(e.entity, e.key, e.sampleRate);
          });
        },
      );
    }
    function d(t, n, r, a, i) {
      var l = n + ":" + r.mediaSinkType,
        u = e[l];
      if (u != null) {
        if (u.port != null) return u.port;
        throw u.exception;
      }
      var d = "VideoPlayerNextgendashConnectionMainToWorker_" + n,
        m = t[n];
      if (m == null)
        throw o("nextgendasherr").nextgendasherr(a, d + "/PortFactoryMissing");
      try {
        var p = m(d, babelHelpers.extends({}, r, { isInWorkerType: n }), i);
        return (
          s.has(p) || s.set(p, r.enableWorkerOptimizations === !0),
          c(p),
          (e[l] = { port: p }),
          p
        );
      } catch (t) {
        var _ = o("nextgendasherr").nextgendasherrFromCause(
          a,
          t,
          d + "/PortFactoryException",
        );
        throw ((e[l] = { exception: _ }), _);
      }
    }
    function m(t, n, a, i, l) {
      var u = "VideoPlayerNextgendashConnectionMainToWorker_" + a,
        c = String(i),
        m = d(n, a, t.config, t, t.host),
        p = s.get(m) === !0,
        _ = o(
          "VideoPlayerNextgendashConnectionUtils",
        ).createInboundOutboundQueues(
          t,
          u,
          c,
          m,
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
            var n = m.addMessageListener(
              "comet_video_player_nextgendash__worker_to_main",
              t,
            );
            e.push(function () {
              m.removeMessageListener(
                "comet_video_player_nextgendash__worker_to_main",
                n,
              );
            });
          },
          function (e) {
            var n = t.loggingState.metadata.nextgendashInstanceIndex,
              r = m.addMessageListener(
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
                m.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_qpl_calls",
                  r,
                );
              }),
              t.config.debugViz)
            ) {
              var o = m.addMessageListener(
                "comet_video_player_nextgendash__worker_to_main_debug_snapshot",
                function (e) {
                  t.logging.log(t, {
                    snapshot: e.snapshot,
                    type: "state_machine_debug_snapshot_from_worker",
                  });
                },
              );
              e.push(function () {
                m.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_debug_snapshot",
                  o,
                );
              });
              var a = m.addMessageListener(
                "comet_video_player_nextgendash__worker_to_main_debug_events",
                function (e) {
                  t.logging.log(t, {
                    events: e.events,
                    type: "state_machine_debug_events_from_worker",
                  });
                },
              );
              e.push(function () {
                m.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_debug_events",
                  a,
                );
              });
            }
          },
        ),
        f = _.getStats,
        g = _.send,
        h = _.disconnect,
        y = t.config.realWorkerConnectTimeoutMs;
      if (a !== "VirtualWorker" && y > 0) {
        var C = !1;
        r("promiseDone")(
          m.fullyConnected,
          function () {
            C = !0;
          },
          function () {
            C = !0;
          },
        );
        var b = t.host.timers.setTimeout(function () {
            if (!C) {
              var n = o("nextgendasherr").nextgendasherr(
                  t,
                  u + "/ConnectTimeout",
                  "Worker did not complete its handshake within %sms",
                  y,
                ),
                r = !1;
              for (var a of Object.keys(e)) {
                var i;
                ((i = e[a]) == null ? void 0 : i.port) === m &&
                  ((e[a] = { exception: n }), (r = !0));
              }
              try {
                p && r && t.config.mediaSinkType !== "HYBRID" && m.close();
              } finally {
                l({ exception: n, type: "__exception" });
              }
            }
          }, y),
          v = h;
        h = function (n) {
          (t.host.timers.clearTimeout(b), v(n));
        };
      }
      function S(e) {
        m.postMessage(
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
        disconnectFromWorker: h,
        getStats: f,
        sendHaltedToWorker: S,
        sendToWorker: g,
      });
    }
    ((l.preloadWorker = u), (l.connectToWorker = m));
  },
  98,
);
