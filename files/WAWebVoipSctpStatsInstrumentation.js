__d(
  "WAWebVoipSctpStatsInstrumentation",
  ["WALogger", "WAWebABProps", "WAWebNoop", "WAWebVoipStatsTracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = new Map();
    function g() {
      var e = [],
        t = Array.from(f.values());
      for (var n of t) e.push.apply(e, n.getConnections());
      return e;
    }
    function h() {
      var e = Array.from(f.values());
      for (var t of e) {
        var n = t.getDcThread == null ? void 0 : t.getDcThread();
        if (n != null && n.isActive()) return n;
      }
      return null;
    }
    function y(t, n, a) {
      (f.has(t) &&
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpStats] Replacing existing connection source '",
              "'",
            ])),
          t,
        ),
        f.set(t, { getConnections: n, getDcThread: a }),
        o("WAWebABProps").getABPropConfigValue(
          "voip_enable_webrtc_stats_polling",
        ) &&
          (R ||
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpStats] WebRTC stats poll start (",
                  "ms)",
                ])),
              v,
            ),
            (R = !0),
            E()),
          I.isPolling() ||
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpStats] Starting RTT polling (interval: ",
                  "ms)",
                ])),
              o("WAWebVoipStatsTracker").DEFAULT_POLL_INTERVAL_MS,
            ),
            T().catch(r("WAWebNoop")),
            I.startPolling({
              intervalMs: o("WAWebVoipStatsTracker").DEFAULT_POLL_INTERVAL_MS,
              onInterval: function () {
                T().catch(r("WAWebNoop"));
              },
            }))));
    }
    function C(e) {
      (f.delete(e), f.size === 0 && D());
    }
    function b(e) {
      (k.delete(e), I.remove(e));
    }
    var v = 1e3,
      S = null,
      R = !1;
    async function L() {
      var e = g(),
        t = h();
      await Promise.all(
        e.map(async function (e) {
          var n = e.connectionId,
            r = e.peerConnection;
          try {
            var a = await r.getStats();
            a.forEach(function (e) {
              if (e.type === "candidate-pair" && e.nominated === !0) {
                var n = e,
                  r = n.currentRoundTripTime;
                if (r != null && t != null && t.isActive()) {
                  var o,
                    i,
                    l = n.remoteCandidateId,
                    s = l != null ? a.get(l) : null,
                    u = (o = s == null ? void 0 : s.address) != null ? o : "",
                    c = (i = s == null ? void 0 : s.port) != null ? i : 0;
                  if (u !== "" && c > 0) {
                    var d = Math.round(r * 1e3);
                    t.updateIceRtt(d, u, c);
                  }
                }
              }
            });
          } catch (e) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpStats] getStats failed for ",
                  ": ",
                  "",
                ])),
              n,
              e,
            );
          }
        }),
      );
    }
    function E() {
      R &&
        (S != null && window.clearTimeout(S),
        (S = window.setTimeout(function () {
          ((S = null), L().then(E));
        }, v)));
    }
    var k = new Map(),
      I = new (o("WAWebVoipStatsTracker").VoipStatsTracker)();
    async function T() {
      var e,
        t = g(),
        n = [];
      await Promise.all(
        t.map(async function (e) {
          var t = e.connectionId,
            r = e.peerConnection;
          try {
            var o = null,
              a = "N/A",
              i = 0;
            ((await r.getStats()).forEach(function (e) {
              if (e.type === "candidate-pair" && e.nominated === !0) {
                var t;
                ((o =
                  typeof e.currentRoundTripTime == "number"
                    ? e.currentRoundTripTime
                    : null),
                  (i = (t = e.bytesSent) != null ? t : 0));
              } else if (e.type === "transport") {
                var n;
                a = String((n = e.dtlsState) != null ? n : "N/A");
              }
            }),
              n.push({ id: t, rtt: o, dtls: a, sent: i }));
          } catch (e) {}
        }),
      );
      var r = null,
        a = 0;
      for (var i of n) {
        var l,
          s = i.sent - ((l = k.get(i.id)) != null ? l : 0);
        s > a && ((a = s), (r = i));
      }
      for (var u of n) k.set(u.id, u.sent);
      if (r != null) {
        var c = r.rtt != null ? Math.round(r.rtt * 1e3) : null;
        c != null && I.record(r.id, c);
        var m = (e = I.formatStats(r.id)) != null ? e : "N/A";
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpStats] ",
              " rtt=",
              "ms (",
              "), dtls=",
              "",
            ])),
          r.id,
          c != null ? String(c) : "N/A",
          m,
          r.dtls,
        );
      }
    }
    function D() {
      if (
        (R &&
          ((R = !1),
          S != null && (window.clearTimeout(S), (S = null)),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] Stopped WebRTC stats polling",
              ])),
          )),
        I.isPolling())
      ) {
        var e = I.stopPolling();
        (e != null &&
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] Call RTT summary: ",
                "",
              ])),
            e,
          ),
          k.clear(),
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] Stopped RTT polling",
              ])),
          ));
      }
    }
    ((l.addConnectionSource = y),
      (l.removeConnectionSource = C),
      (l.removeConnectionFromRttStats = b));
  },
  98,
);
