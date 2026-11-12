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
    var e = new WeakMap();
    function s(t, n, r, o) {
      var a,
        i = e.get(t);
      if (i == null) {
        var l = new Map(),
          s = new Set();
        ((i = { byPlayer: l, subscriptions: s }),
          e.set(t, i),
          t.addMessageListener(
            "comet_video_player_nextgendash__worker_to_main",
            function (e) {
              var t = Array.from(s),
                n = new Map();
              for (var r of e.events) {
                var o,
                  a =
                    r.playerInstanceKey == null
                      ? t
                      : (o = l.get(r.playerInstanceKey)) != null
                        ? o
                        : [];
                for (var i of a)
                  if (i.workerType === r.workerType) {
                    var u = n.get(i);
                    (u == null && ((u = []), n.set(i, u)), u.push(r));
                  }
              }
              for (var c of t) {
                var d = n.get(c);
                d != null &&
                  s.has(c) &&
                  c.listener(babelHelpers.extends({}, e, { events: d }));
              }
            },
          ));
      }
      var u = i,
        c = { listener: o, workerType: n },
        d = (a = u.byPlayer.get(r)) != null ? a : new Set();
      return (
        d.add(c),
        u.byPlayer.set(r, d),
        u.subscriptions.add(c),
        function () {
          u.subscriptions.delete(c) &&
            (d.delete(c), d.size === 0 && u.byPlayer.delete(r));
        }
      );
    }
    var u = new WeakMap();
    function c(e, t) {
      var n,
        r = u.get(e);
      if (r == null) {
        var o = new Map(),
          a = { byIndex: o, nextOrder: 0 };
        ((r = a),
          u.set(e, r),
          e.addMessageListener(
            "comet_video_player_nextgendash__worker_to_main_qpl_calls",
            function (e) {
              var t = new Map();
              for (var n of e.calls) {
                var r = o.get(n.instanceKey);
                if (r != null) {
                  for (var a of r)
                    if (n.instanceKey === a.instanceIndex) {
                      var i = t.get(a);
                      (i == null && ((i = []), t.set(a, i)), i.push(n));
                    }
                }
              }
              var l = Array.from(t.keys()).sort(function (e, t) {
                return e.order - t.order;
              });
              for (var s of l) {
                var u = t.get(s);
                if (u != null)
                  for (var c of u)
                    s.env.logging.log(s.env, { qplCall: c, type: "qpl_call" });
              }
            },
          ));
      }
      var i = t.loggingState.metadata.nextgendashInstanceIndex,
        l = { env: t, instanceIndex: i, order: r.nextOrder++ },
        s = r.byIndex,
        c = (n = s.get(i)) != null ? n : new Set();
      return (
        c.add(l),
        s.set(i, c),
        function () {
          c.delete(l) && c.size === 0 && s.delete(i);
        }
      );
    }
    var d = {},
      m = new WeakMap();
    function p(e) {
      var t = e.envForErrors,
        n = e.virtualWorkerHostAPI,
        r = e.workerEnvConfig,
        o = e.workerPortFactories,
        a = e.workerType;
      try {
        f(o, a, r, t, n);
      } catch (e) {}
    }
    function _(e) {
      e.addMessageListener(
        "comet_video_player_nextgendash__worker_to_main_ods_calls",
        function (e) {
          e.calls.forEach(function (e) {
            o("VideoPlayerODS").bumpEntityKey(e.entity, e.key, e.sampleRate);
          });
        },
      );
    }
    function f(e, t, n, r, a) {
      var i = t + ":" + n.mediaSinkType,
        l = d[i];
      if (l != null) {
        if (l.port != null) return l.port;
        throw l.exception;
      }
      var s = "VideoPlayerNextgendashConnectionMainToWorker_" + t,
        u = e[t];
      if (u == null)
        throw o("nextgendasherr").nextgendasherr(r, s + "/PortFactoryMissing");
      try {
        var c = u(s, babelHelpers.extends({}, n, { isInWorkerType: t }), a);
        return (
          m.has(c) || m.set(c, n.enableWorkerOptimizations === !0),
          _(c),
          (d[i] = { port: c }),
          c
        );
      } catch (e) {
        var p = o("nextgendasherr").nextgendasherrFromCause(
          r,
          e,
          s + "/PortFactoryException",
        );
        throw ((d[i] = { exception: p }), p);
      }
    }
    function g(e, t, n, a, i) {
      var l = "VideoPlayerNextgendashConnectionMainToWorker_" + n,
        u = String(a),
        p = f(t, n, e.config, e, e.host),
        _ = m.get(p) === !0,
        g = o(
          "VideoPlayerNextgendashConnectionUtils",
        ).createInboundOutboundQueues(
          e,
          l,
          u,
          p,
          _
            ? i
            : function (e) {
                (e.type === "__exception" ||
                  (e.workerType === n &&
                    (e.playerInstanceKey == null ||
                      e.playerInstanceKey === a))) &&
                  i(e);
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
            if (_) e.push(s(p, n, a, t));
            else {
              var r = p.addMessageListener(
                "comet_video_player_nextgendash__worker_to_main",
                t,
              );
              e.push(function () {
                p.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main",
                  r,
                );
              });
            }
          },
          function (t) {
            if (_) t.push(c(p, e));
            else {
              var n = e.loggingState.metadata.nextgendashInstanceIndex,
                r = p.addMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_qpl_calls",
                  function (t) {
                    t.calls.forEach(function (t) {
                      t.instanceKey === n &&
                        e.logging.log(e, { qplCall: t, type: "qpl_call" });
                    });
                  },
                );
              t.push(function () {
                p.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_qpl_calls",
                  r,
                );
              });
            }
            if (e.config.debugViz) {
              var o = p.addMessageListener(
                "comet_video_player_nextgendash__worker_to_main_debug_snapshot",
                function (t) {
                  e.logging.log(e, {
                    snapshot: t.snapshot,
                    type: "state_machine_debug_snapshot_from_worker",
                  });
                },
              );
              t.push(function () {
                p.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_debug_snapshot",
                  o,
                );
              });
              var a = p.addMessageListener(
                "comet_video_player_nextgendash__worker_to_main_debug_events",
                function (t) {
                  e.logging.log(e, {
                    events: t.events,
                    type: "state_machine_debug_events_from_worker",
                  });
                },
              );
              t.push(function () {
                p.removeMessageListener(
                  "comet_video_player_nextgendash__worker_to_main_debug_events",
                  a,
                );
              });
            }
          },
        ),
        h = g.getStats,
        y = g.send,
        C = g.disconnect,
        b = e.config.realWorkerConnectTimeoutMs;
      if (n !== "VirtualWorker" && b > 0) {
        var v = !1;
        r("promiseDone")(
          p.fullyConnected,
          function () {
            v = !0;
          },
          function () {
            v = !0;
          },
        );
        var S = e.host.timers.setTimeout(function () {
            if (!v) {
              var t = o("nextgendasherr").nextgendasherr(
                  e,
                  l + "/ConnectTimeout",
                  "Worker did not complete its handshake within %sms",
                  b,
                ),
                n = !1;
              for (var r of Object.keys(d)) {
                var a;
                ((a = d[r]) == null ? void 0 : a.port) === p &&
                  ((d[r] = { exception: t }), (n = !0));
              }
              try {
                _ && n && e.config.mediaSinkType !== "HYBRID" && p.close();
              } finally {
                i({ exception: t, type: "__exception" });
              }
            }
          }, b),
          R = C;
        C = function (n) {
          (e.host.timers.clearTimeout(S), R(n));
        };
      }
      function L(e) {
        p.postMessage(
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
        disconnectFromWorker: C,
        getStats: h,
        sendHaltedToWorker: L,
        sendToWorker: y,
      });
    }
    ((l.preloadWorker = p), (l.connectToWorker = g));
  },
  98,
);
