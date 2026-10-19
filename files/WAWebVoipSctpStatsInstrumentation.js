__d(
  "WAWebVoipSctpStatsInstrumentation",
  [
    "Promise",
    "WALogger",
    "WAWebNoop",
    "WAWebVoipSctpDiagnostics",
    "WAWebVoipStatsTracker",
    "asyncToGeneratorRuntime",
  ],
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
      f,
      g = new Map();
    function h() {
      var e = [],
        t = Array.from(g.values());
      for (var n of t) e.push.apply(e, n.getConnections());
      return e;
    }
    function y() {
      var e = Array.from(g.values());
      for (var t of e) {
        var n = t.getDcThread == null ? void 0 : t.getDcThread();
        if (n != null && n.isActive()) return n;
      }
      return null;
    }
    function C(t, n, a) {
      (g.has(t) &&
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpStats] Replacing existing connection source '",
              "'",
            ])),
          t,
        ),
        g.set(t, { getConnections: n, getDcThread: a }),
        L ||
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] WebRTC stats poll start (",
                "ms)",
              ])),
            S,
          ),
          (L = !0),
          I()),
        D.isPolling() ||
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] Starting RTT polling (interval: ",
                "ms)",
              ])),
            o("WAWebVoipStatsTracker").DEFAULT_POLL_INTERVAL_MS,
          ),
          x().catch(r("WAWebNoop")),
          D.startPolling({
            intervalMs: o("WAWebVoipStatsTracker").DEFAULT_POLL_INTERVAL_MS,
            onInterval: function () {
              x().catch(r("WAWebNoop"));
            },
          })));
    }
    function b(e) {
      (g.delete(e), g.size === 0 && P());
    }
    function v(e) {
      (T.delete(e), D.remove(e));
    }
    var S = 1e3,
      R = null,
      L = !1;
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = h(),
            t = y();
          yield (f || (f = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e.connectionId,
                      r = e.peerConnection;
                    try {
                      var a = yield r.getStats(),
                        i = o(
                          "WAWebVoipSctpDiagnostics",
                        ).findSelectedCandidatePair(a);
                      if (i == null) return;
                      var l = i.currentRoundTripTime;
                      if (l != null && t != null && t.isActive()) {
                        var s,
                          u,
                          c = i.remoteCandidateId,
                          d = c != null ? a.get(c) : null,
                          m =
                            (s = d == null ? void 0 : d.address) != null
                              ? s
                              : "",
                          _ = (u = d == null ? void 0 : d.port) != null ? u : 0;
                        if (m !== "" && _ > 0) {
                          var f = Math.round(l * 1e3);
                          t.updateIceRtt(f, m, _);
                        }
                      }
                    } catch (e) {
                      o("WALogger").WARN(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [SctpStats] getStats failed for ",
                            ": ",
                            "",
                          ])),
                        n,
                        e,
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      L &&
        (R != null && window.clearTimeout(R),
        (R = window.setTimeout(function () {
          ((R = null), E().then(I));
        }, S)));
    }
    var T = new Map(),
      D = new (o("WAWebVoipStatsTracker").VoipStatsTracker)();
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = h(),
            r = [];
          yield (f || (f = n("Promise"))).all(
            t.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.connectionId,
                      n = e.peerConnection;
                    try {
                      var a,
                        i = yield n.getStats(),
                        l = o(
                          "WAWebVoipSctpDiagnostics",
                        ).findSelectedCandidatePair(i),
                        s = "N/A";
                      (i.forEach(function (e) {
                        if (e.type === "transport") {
                          var t;
                          s = String((t = e.dtlsState) != null ? t : "N/A");
                        }
                      }),
                        r.push({
                          id: t,
                          rtt: l == null ? void 0 : l.currentRoundTripTime,
                          dtls: s,
                          sent:
                            (a = l == null ? void 0 : l.bytesSent) != null
                              ? a
                              : 0,
                        }));
                    } catch (e) {}
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          var a = null,
            i = 0;
          for (var l of r) {
            var s,
              u = l.sent - ((s = T.get(l.id)) != null ? s : 0);
            u > i && ((i = u), (a = l));
          }
          for (var c of r) T.set(c.id, c.sent);
          if (a != null) {
            var d = a.rtt != null ? Math.round(a.rtt * 1e3) : null;
            d != null && D.record(a.id, d);
            var m = (e = D.formatStats(a.id)) != null ? e : "N/A";
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpStats] ",
                  " rtt=",
                  "ms (",
                  "), dtls=",
                  "",
                ])),
              a.id,
              d != null ? String(d) : "N/A",
              m,
              a.dtls,
            );
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      if (
        (L &&
          ((L = !1),
          R != null && (window.clearTimeout(R), (R = null)),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] Stopped WebRTC stats polling",
              ])),
          )),
        D.isPolling())
      ) {
        var e = D.stopPolling();
        (e != null &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] Call RTT summary: ",
                "",
              ])),
            e,
          ),
          T.clear(),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] Stopped RTT polling",
              ])),
          ));
      }
    }
    ((l.addConnectionSource = C),
      (l.removeConnectionSource = b),
      (l.removeConnectionFromRttStats = v));
  },
  98,
);
