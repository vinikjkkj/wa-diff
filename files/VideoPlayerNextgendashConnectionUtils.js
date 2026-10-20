__d(
  "VideoPlayerNextgendashConnectionUtils",
  ["Promise", "nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, r, a, i, l, s, u, c, d) {
      var m = [],
        p = !1,
        _ = !1,
        f = null;
      function g(e) {
        var t = typeof e == "function" ? e() : e;
        return ((f = t), t);
      }
      function h() {
        var e = f;
        return e == null ? null : g(e);
      }
      var y = [],
        C = [],
        b = 0,
        v = 0,
        S = 0,
        R = 0,
        L = 0,
        E = {
          clock: t.host.clock(),
          disconnectedReason: null,
          displayInstanceKey: a,
          displayName: r,
          fullyConnected: p,
          inboundEventsReceivedCount: v,
          inboundMessagesReceivedCount: b,
          inboundMessagesReceivedPerMs: 0,
          inboundQueueLength: y.length,
          outboundEventsQueuedCount: S,
          outboundEventsSentCount: R,
          outboundMessagesSentCount: L,
          outboundMessagesSentPerMs: 0,
          outboundQueueLength: C.length,
        };
      function k() {
        var e = {
            clock: t.host.clock(),
            disconnectedReason: h(),
            displayInstanceKey: a,
            displayName: r,
            fullyConnected: p,
            inboundEventsReceivedCount: v,
            inboundMessagesReceivedCount: b,
            inboundMessagesReceivedPerMs: 0,
            inboundQueueLength: y.length,
            outboundEventsQueuedCount: S,
            outboundEventsSentCount: R,
            outboundMessagesSentCount: L,
            outboundMessagesSentPerMs: 0,
            outboundQueueLength: C.length,
          },
          n = Math.max(1, e.clock.perfMs - E.clock.perfMs);
        return (
          (e.outboundMessagesSentPerMs = e.outboundMessagesSentCount / n),
          (e.inboundMessagesReceivedPerMs = e.inboundMessagesReceivedCount / n),
          e
        );
      }
      var I = function () {
          for (var e; !_ && ((e = y.shift()), e != null); )
            (e.type === "__exception" && $(e.exception), l(e));
        },
        T = t.host.timers.throttle(I, 0, { leading: !0, trailing: !0 }),
        D = function () {
          if (!(!p || C.length <= 0)) {
            if (i.hasErrored()) {
              N(
                o("nextgendasherr").nextgendasherr(
                  t,
                  r + "/FlushToErroredPort",
                ),
              );
              return;
            }
            var e = C.length,
              n = u(C),
              a = n.message,
              l = n.transferList;
            ((C.length = 0), i.postMessage(a, l), (L += 1), (R += e));
          }
        },
        x = t.host.timers.throttle(D, 0, { leading: !0, trailing: !0 }),
        $ = function (n) {
          (D(), (_ = !0), (f = n), (p = !1));
          var e = m.slice();
          if (
            ((m.length = 0),
            e.forEach(function (e) {
              return e();
            }),
            C.length > 0 || y.length > 0)
          ) {
            var o = g(n);
            t.logging.log(t, {
              error: o,
              format:
                "[" +
                r +
                "][%s] disconnected (" +
                o.name +
                "); dropped outbound: %s %s; dropped inbound: %s %s; stats=%s",
              params: [
                a,
                C.length,
                C.map(s).join(","),
                y.length,
                y
                  .map(function (e) {
                    return e.type;
                  })
                  .join(","),
                JSON.stringify(k()),
              ],
              type: "generic_error_as_warning",
            });
          }
          ((C.length = 0), (y.length = 0));
        };
      function P(e) {
        if (!_) {
          if (e.canSendOnlyLatestOfTypeIfThrottled === !0)
            for (var t = 0; t < C.length; ++t)
              s(C[t]) === s(e) && (C.splice(t, 1), (S -= 1), --t);
          (C.push(e), (S += 1), x());
        }
      }
      function N(e) {
        (y.push({ exception: e, type: "__exception" }), I());
      }
      try {
        i.hasErrored()
          ? N(
              o("nextgendasherr").nextgendasherr(
                t,
                r + "/CreateQueuesOnErroredPort",
              ),
            )
          : t.config.isInWorkerType === "RealWorkerV2"
            ? ((p = !0), D())
            : i.fullyConnected
                .then(function () {
                  _ || ((p = !0), D());
                })
                .catch(function (e) {
                  _ ||
                    ((p = !1),
                    N(
                      o("nextgendasherr").nextgendasherrFromCause(
                        t,
                        e,
                        r + "/FullyConnectedRejection",
                      ),
                    ));
                });
        var M = i.onError.add(function (e) {
          N(
            o("nextgendasherr").nextgendasherrFromCause(
              t,
              e,
              r + "/ErrorFromPort",
            ),
          );
        });
        (m.push(function () {
          i.onError.remove(M);
        }),
          c(m, function (e) {
            ((b += 1),
              (v += e.events.length),
              e.events.forEach(function (e) {
                y.push(e);
              }),
              T());
          }),
          d(m));
      } catch (a) {
        (e || (e = n("Promise"))).reject(a).catch(function () {
          N(
            o("nextgendasherr").nextgendasherrFromCause(
              t,
              a,
              r + "/InitException",
            ),
          );
        });
      }
      return { disconnect: $, getStats: k, send: P };
    }
    l.createInboundOutboundQueues = s;
  },
  98,
);
