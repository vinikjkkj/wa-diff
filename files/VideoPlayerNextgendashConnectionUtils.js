__d(
  "VideoPlayerNextgendashConnectionUtils",
  ["Promise", "nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, r, a, i, l, s, u, c, d) {
      var m = [],
        p = !1,
        _ = null,
        f = [],
        g = [],
        h = 0,
        y = 0,
        C = 0,
        b = 0,
        v = 0,
        S = {
          clock: t.host.clock(),
          disconnectedReason: _,
          displayInstanceKey: a,
          displayName: r,
          fullyConnected: p,
          inboundEventsReceivedCount: y,
          inboundMessagesReceivedCount: h,
          inboundMessagesReceivedPerMs: 0,
          inboundQueueLength: f.length,
          outboundEventsQueuedCount: C,
          outboundEventsSentCount: b,
          outboundMessagesSentCount: v,
          outboundMessagesSentPerMs: 0,
          outboundQueueLength: g.length,
        };
      function R() {
        var e = {
            clock: t.host.clock(),
            disconnectedReason: _,
            displayInstanceKey: a,
            displayName: r,
            fullyConnected: p,
            inboundEventsReceivedCount: y,
            inboundMessagesReceivedCount: h,
            inboundMessagesReceivedPerMs: 0,
            inboundQueueLength: f.length,
            outboundEventsQueuedCount: C,
            outboundEventsSentCount: b,
            outboundMessagesSentCount: v,
            outboundMessagesSentPerMs: 0,
            outboundQueueLength: g.length,
          },
          n = Math.max(1, e.clock.perfMs - S.clock.perfMs);
        return (
          (e.outboundMessagesSentPerMs = e.outboundMessagesSentCount / n),
          (e.inboundMessagesReceivedPerMs = e.inboundMessagesReceivedCount / n),
          e
        );
      }
      var L = function () {
          for (var e; _ == null && ((e = f.shift()), e != null); )
            (e.type === "__exception" && T(e.exception), l(e));
        },
        E = t.host.timers.throttle(L, 0, { leading: !0, trailing: !0 }),
        k = function () {
          if (!(!p || g.length <= 0)) {
            if (i.hasErrored()) {
              x(
                o("nextgendasherr").nextgendasherr(
                  t,
                  r + "/FlushToErroredPort",
                ),
              );
              return;
            }
            var e = g.length,
              n = u(g),
              a = n.message,
              l = n.transferList;
            ((g.length = 0), i.postMessage(a, l), (v += 1), (b += e));
          }
        },
        I = t.host.timers.throttle(k, 0, { leading: !0, trailing: !0 }),
        T = function (n) {
          (k(), (_ = n), (p = !1));
          var e = m.slice();
          ((m.length = 0),
            e.forEach(function (e) {
              return e();
            }),
            (g.length > 0 || f.length > 0) &&
              t.logging.log(t, {
                error: n,
                format:
                  "[" +
                  r +
                  "][%s] disconnected (" +
                  n.name +
                  "); dropped outbound: %s %s; dropped inbound: %s %s; stats=%s",
                params: [
                  a,
                  g.length,
                  g.map(s).join(","),
                  f.length,
                  f
                    .map(function (e) {
                      return e.type;
                    })
                    .join(","),
                  JSON.stringify(R()),
                ],
                type: "generic_error_as_warning",
              }),
            (g.length = 0),
            (f.length = 0));
        };
      function D(e) {
        if (_ == null) {
          if (e.canSendOnlyLatestOfTypeIfThrottled === !0)
            for (var t = 0; t < g.length; ++t)
              s(g[t]) === s(e) && (g.splice(t, 1), (C -= 1), --t);
          (g.push(e), (C += 1), I());
        }
      }
      function x(e) {
        (f.push({ exception: e, type: "__exception" }), L());
      }
      try {
        i.hasErrored()
          ? x(
              o("nextgendasherr").nextgendasherr(
                t,
                r + "/CreateQueuesOnErroredPort",
              ),
            )
          : t.config.isInWorkerType === "RealWorkerV2"
            ? ((p = !0), k())
            : i.fullyConnected
                .then(function () {
                  _ == null && ((p = !0), k());
                })
                .catch(function (e) {
                  _ == null &&
                    ((p = !1),
                    x(
                      o("nextgendasherr").nextgendasherrFromCause(
                        t,
                        e,
                        r + "/FullyConnectedRejection",
                      ),
                    ));
                });
        var $ = i.onError.add(function (e) {
          x(
            o("nextgendasherr").nextgendasherrFromCause(
              t,
              e,
              r + "/ErrorFromPort",
            ),
          );
        });
        (m.push(function () {
          i.onError.remove($);
        }),
          c(m, function (e) {
            ((h += 1),
              (y += e.events.length),
              e.events.forEach(function (e) {
                f.push(e);
              }),
              E());
          }),
          d(m));
      } catch (a) {
        (e || (e = n("Promise"))).reject(a).catch(function () {
          x(
            o("nextgendasherr").nextgendasherrFromCause(
              t,
              a,
              r + "/InitException",
            ),
          );
        });
      }
      return { disconnect: T, getStats: R, send: D };
    }
    l.createInboundOutboundQueues = s;
  },
  98,
);
