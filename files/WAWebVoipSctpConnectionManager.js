__d(
  "WAWebVoipSctpConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebReleaseToEventLoop",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpDataChannelThread",
    "WAWebVoipSctpDiagnostics",
    "WAWebVoipSctpStatsInstrumentation",
    "WAWebVoipStackInterface",
    "WAWebVoipTsLogger",
    "asyncToGeneratorRuntime",
    "justknobx",
    "nullthrows",
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
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne,
      re,
      oe,
      ae,
      ie,
      le,
      se,
      ue,
      ce,
      de,
      me,
      pe,
      _e,
      fe,
      ge,
      he,
      ye,
      Ce,
      be,
      ve,
      Se = 1e4,
      Re = 1e4;
    function Le() {
      return 2 * Se;
    }
    var Ee = new Map(),
      ke = new Set(),
      Ie = new Map(),
      Te = !1,
      De = 0,
      xe = new Map();
    function $e() {
      var e = [];
      for (var t of xe) {
        var n = t[0],
          r = t[1];
        r.peerConnection != null &&
          r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
          e.push({ connectionId: n, peerConnection: r.peerConnection });
      }
      return e;
    }
    var Pe = new Map(),
      Ne = null;
    function Me(t, n, r, a) {
      var i,
        l,
        c = Ne;
      if (c == null || !c.isActive()) return !1;
      var d = Pe.get(r),
        m = (i = d == null ? void 0 : d.ip) != null ? i : "0.0.0.0",
        p = (l = d == null ? void 0 : d.originalPort) != null ? l : 0,
        _ = a != null ? " (" + a + ")" : "";
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [DCThread] Transferring channel for ",
            "",
            "",
          ])),
        r,
        _,
      );
      var f = c.transferChannel(
        t,
        r,
        m,
        p,
        o("WAWebABProps").getABPropConfigValue(
          "voip_enable_webrtc_stats_polling",
        ),
      );
      return (
        f
          ? ((n.channelTransferred = !0),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Channel ",
                  " transferred to pthread",
                  "",
                ])),
              r,
              _,
            ))
          : ((n.channelTransferred = !1),
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Transfer failed for ",
                  "",
                  ", using main-thread handlers",
                ])),
              r,
              _,
            )),
        f
      );
    }
    function we(e) {
      var t = xe.get(e);
      if (t)
        try {
          mt(e);
        } catch (t) {
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Error cleaning up relay connection ",
                ": ",
                "",
              ])),
            e,
            t,
          );
        }
    }
    function Ae(e, t) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = "wa-web-call",
            r = xe.get(e.id);
          if (
            r &&
            (r.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
              r.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
          ) {
            ze(e.id);
            return;
          }
          (r &&
            r.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
            ct(e.id),
            yield nt(e, n));
        })),
        Fe.apply(this, arguments)
      );
    }
    function Oe(e, t, n) {
      var a = r("justknobx")._("1929");
      St(
        e,
        t,
        a
          ? n
          : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT,
      );
    }
    function Be(e, t) {
      var n = xe.get(e);
      n != null &&
        ((n.stats.sentPackets += t.sentPackets),
        (n.stats.sentBytes += t.sentBytes),
        (n.stats.receivedPackets += t.receivedPackets),
        (n.stats.receivedBytes += t.receivedBytes),
        t.firstSendTime > 0 &&
          n.stats.firstSendRequestTime === 0 &&
          (n.stats.firstSendRequestTime = t.firstSendTime),
        t.firstResponseRecvTime > 0 &&
          n.stats.firstResponseRecvTime === 0 &&
          (n.stats.firstResponseRecvTime = t.firstResponseRecvTime));
    }
    function We(e) {
      var t = xe.get(e);
      if (t == null) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] handleDataChannelOpened: connection not found for ",
              "",
            ])),
          e,
        );
        return;
      }
      (t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
        t.state !==
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting) ||
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
        (t.stats.connectionReadyTime = Date.now()),
        (t.isReconnecting = !1),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] Connection ",
              " state updated to Open (notified from pthread)",
            ])),
          e,
        ),
        o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
          "relay",
          $e,
          function () {
            return Ne;
          },
        ),
        t.connectionTimeout &&
          (window.clearTimeout(t.connectionTimeout),
          (t.connectionTimeout = null)),
        o("WAWebVoipTsLogger").logIceConnectionComplete({
          relayId: t.relayId,
          ip: t.relayIp,
          port: t.relayPort,
        }),
        bt(e),
        ze(e));
    }
    function qe(e, t, n, r) {
      var a,
        i = e.id;
      if (
        !(
          e.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
          e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed
        )
      ) {
        var l = Pe.get(i),
          s = (a = Ee.get(i)) != null ? a : 0;
        if (
          !Te &&
          l != null &&
          s <
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS
        ) {
          var u;
          Ee.set(i, s + 1);
          var c =
            (u = o("WAWebVoipSctpConnectionManagerConstants")
              .SAME_PATH_RECONNECT_BACKOFF_MS[s]) != null
              ? u
              : 0;
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: ",
                " Same-path reconnecting ",
                ", reason=",
                " (attempt ",
                "/",
                ", backoff=",
                "ms)",
              ])),
            r,
            i,
            t,
            s + 1,
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS,
            c,
          ),
            dt(e, n));
          var d = function (n) {
            (n != null && ke.delete(n),
              !Te &&
                Ae(l, !1).catch(function (e) {
                  o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ",
                        " Reconnect failed for ",
                        ", reason=",
                        ": ",
                        "",
                      ])),
                    r,
                    i,
                    t,
                    e,
                  );
                }));
          };
          if (c > 0) {
            var m = window.setTimeout(function () {
              return d(m);
            }, c);
            ke.add(m);
          } else d(null);
        } else
          (Te ||
            (l == null
              ? o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ",
                      " No relay info for ",
                      ", cannot same-path reconnect (attempts=",
                      ")",
                    ])),
                  r,
                  i,
                  s,
                )
              : o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ",
                      " Max same-path reconnect attempts reached for ",
                      " (attempts=",
                      "/",
                      ")",
                    ])),
                  r,
                  i,
                  s,
                  o("WAWebVoipSctpConnectionManagerConstants")
                    .MAX_SAME_PATH_RECONNECT_ATTEMPTS,
                )),
            dt(e, t));
      }
    }
    function Ue(e) {
      var t = xe.get(e);
      if (t == null) {
        o("WALogger").WARN(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] handleDataChannelErrored: connection not found for ",
              "",
            ])),
          e,
        );
        return;
      }
      (o("WALogger").LOG(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [DCThread] Connection ",
            " errored (notified from pthread)",
          ])),
        e,
      ),
        qe(
          t,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        ));
    }
    function Ve(e) {
      qe(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function He(e, t) {
      if (t === "no_first_response_timeout" || t === "rx_stall_timeout") {
        var n = xe.get(e);
        if ((n == null ? void 0 : n.peerConnection) != null) {
          (o("WALogger").WARN(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] Collecting getStats snapshot for ",
                ", reason=",
                "",
              ])),
            e,
            t,
          ),
            o("WAWebVoipSctpDiagnostics")
              .logPeerConnectionStatsForError(e, n.peerConnection, t, n.stats)
              .finally(function () {
                Ue(e);
              }));
          return;
        }
      }
      Ue(e);
    }
    function Ge(e) {
      return new (ve || (ve = n("Promise")))(function (t) {
        Ie.set(e, t);
      });
    }
    function ze(e) {
      var t = Ie.get(e);
      t != null && (t(), Ie.delete(e));
    }
    function je() {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((Te = !0), De++);
          try {
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
              "relay",
            );
            var e = Array.from(xe.keys());
            (o("WALogger").LOG(
              W ||
                (W = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield xt());
            for (var t of e) we(t);
            (Pe.clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] All connections and relay state cleared",
                  ])),
              ));
          } finally {
            for (var n of ke) window.clearTimeout(n);
            ke.clear();
            for (var r of Ie.values()) r();
            (Ie.clear(), Ee.clear(), (Te = !1));
          }
        })),
        Ke.apply(this, arguments)
      );
    }
    function Qe(e) {
      return Xe.apply(this, arguments);
    }
    function Xe() {
      return (
        (Xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = De;
          o("WALogger").LOG(
            U ||
              (U = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          );
          for (var r = 0; r < e.length; r++) {
            if (Te || De !== t) return;
            var a = e[r];
            o("WALogger").LOG(
              V ||
                (V = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Starting staggered connection ",
                  "/",
                  ": ",
                  "",
                ])),
              r + 1,
              e.length,
              a.id,
            );
            var i = Ge(a.id);
            if ((Ae(a, !1), r < e.length - 1)) {
              var l = new (ve || (ve = n("Promise")))(function (e) {
                window.setTimeout(
                  e,
                  o("WAWebVoipSctpConnectionManagerConstants")
                    .PER_CONNECTION_STAGGER_DELAY_MS,
                );
              });
              yield ve.race([i, l]);
            }
          }
        })),
        Xe.apply(this, arguments)
      );
    }
    function Ye(e) {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          ((Se = r("justknobx")._("5402") || 1e4),
            (Re = r("justknobx")._("5558") || Se),
            De++);
          var t = r("justknobx")._("1929"),
            a = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(
              e,
              {
                portOverride: function (n) {
                  return t
                    ? n
                    : o("WAWebVoipSctpConnectionManagerConstants")
                        .SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT;
                },
              },
            );
          for (var i of Pe) {
            var l = i[0],
              s = i[1];
            a.has(l) ||
              (o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
                .CLOSE_OLD_CONNECTION_BEFORE_CALL_END &&
                we(l));
          }
          var u = [];
          for (var c of a) {
            var d = c[0],
              m = c[1];
            (!Pe.has(d) || !xe.has(d)) && u.push(m);
          }
          if (((Pe = a), u.length > 0)) {
            var p = r("justknobx")._("2412");
            p
              ? yield Qe(u)
              : yield (ve || (ve = n("Promise"))).all(
                  u.map(function (e) {
                    return Ae(e, !1);
                  }),
                );
          }
        })),
        Je.apply(this, arguments)
      );
    }
    function Ze(e, t, n) {
      (n === void 0 && (n = !1),
        !n &&
          ((e.onopen = function (n) {
            ft(n, t.id, e);
          }),
          (e.onclose = function (e) {
            gt(e, t.id);
          }),
          (e.onmessage = function (e) {
            ht(e, t);
          }),
          (e.onerror = function (e) {
            o("WALogger").ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Data channel error for ",
                  ":",
                ])),
              t.id,
            );
            var n = xe.get(t.id);
            n &&
              qe(
                n,
                "data_channel_error",
                "data_channel_error_reconnecting",
                "[SCTP]",
              );
          })));
    }
    function et(e, t, n, r) {
      var a = "pre-negotiated",
        i = babelHelpers.extends(
          {},
          o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS,
          { priority: "high" },
        ),
        l = e.createDataChannel(a, i);
      l.binaryType = "arraybuffer";
      var s = !1;
      return (
        o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled()
          ? o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] DC transfer disabled for ",
                  "",
                ])),
              n.id,
            )
          : (s = Me(l, t, n.id, r)),
        (t.channel = l),
        Ze(l, n, s),
        l
      );
    }
    function tt(e, t, n) {
      var r = n != null ? " " + n : "";
      ((e.oniceconnectionstatechange = function () {
        var n = e.iceConnectionState;
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE state->",
              " ",
              "",
              "",
            ])),
          n,
          t,
          r,
        );
        var a = xe.get(t);
        a &&
          (n === "connected" &&
            ((a.iceConnectedTime = Date.now()),
            a.relayPort === 3478
              ? (o("WAWebCoreActionsODS").logCallIceConnectedPort3478(),
                o("WAWebCoreActionsODS").logCallDtlsStartedPort3478())
              : (o("WAWebCoreActionsODS").logCallIceConnectedPort3480(),
                o("WAWebCoreActionsODS").logCallDtlsStartedPort3480()),
            a.dtlsStallTimeout != null &&
              window.clearTimeout(a.dtlsStallTimeout),
            (a.dtlsStallTimeout = window.setTimeout(function () {
              a.dtlsStallTimeout = null;
              var n = e.connectionState;
              if (n !== "connected") {
                var i = Date.now() - a.iceConnectedTime;
                (o("WALogger").WARN(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] DTLS stall: ICE connected ",
                      "ms ago (threshold=",
                      "ms) but PC state is '",
                      "' for ",
                      "",
                      "",
                    ])),
                  i,
                  Se,
                  n,
                  t,
                  r,
                ),
                  a.relayPort === 3478
                    ? o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3478()
                    : o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3480(),
                  qe(a, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, Se))),
          n === "failed" &&
            (a.relayPort === 3478
              ? o("WAWebCoreActionsODS").logCallIceFailedPort3478()
              : o("WAWebCoreActionsODS").logCallIceFailedPort3480(),
            Ve(a)));
      }),
        (e.onconnectionstatechange = function () {
          var n = e.connectionState;
          o("WALogger").LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] PC state->",
                " ",
                "",
                "",
              ])),
            n,
            t,
            r,
          );
          var a = xe.get(t);
          if (a) {
            if (
              n === "connected" &&
              a.dtlsStallTimeout != null &&
              (window.clearTimeout(a.dtlsStallTimeout),
              (a.dtlsStallTimeout = null),
              a.relayPort === 3478
                ? o("WAWebCoreActionsODS").logCallDtlsConnectedPort3478()
                : o("WAWebCoreActionsODS").logCallDtlsConnectedPort3480(),
              a.iceConnectedTime > 0)
            ) {
              var i = Date.now() - a.iceConnectedTime;
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] DTLS handshake completed in ",
                    "ms for ",
                    "",
                    "",
                  ])),
                i,
                t,
                r,
              );
            }
            n === "failed" &&
              (a.relayPort === 3478
                ? o("WAWebCoreActionsODS").logCallDtlsFailedPcFailedPort3478()
                : o("WAWebCoreActionsODS").logCallDtlsFailedPcFailedPort3480());
          }
        }));
    }
    function nt(e, t) {
      return rt.apply(this, arguments);
    }
    function rt() {
      return (
        (rt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = xe.get(e.id);
          n &&
          n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None
            ? ((n.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Connecting),
              (n.connectionStartTime = Date.now()),
              (n.relayId = e.relayId),
              (n.relayIp = e.ip),
              (n.relayPort = e.port),
              n.connectionTimeout &&
                (window.clearTimeout(n.connectionTimeout),
                (n.connectionTimeout = null)),
              o("WALogger").LOG(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] early conn->connecting ",
                    " buf=",
                    "",
                  ])),
                e.id,
                n.packetBuffer.bufferedBytes,
              ))
            : ((n = {
                state: o("WAWebVoipRelayConnectionUtils").ConnectionState
                  .Connecting,
                channel: null,
                peerConnection: null,
                packetBuffer: o(
                  "WAWebVoipRelayConnectionUtils",
                ).createPacketBuffer(),
                id: e.id,
                connectionTimeout: null,
                hasReceivedFirstPacket: !1,
                hasNonStunPacketSent: !1,
                lastRxPacketTime: 0,
                stats: o(
                  "WAWebVoipRelayConnectionUtils",
                ).createEmptyConnectionStats(),
                isReconnecting: !1,
                sentMedia: !1,
                connectionStartTime: Date.now(),
                channelTransferred: !1,
                relayId: e.relayId,
                relayIp: e.ip,
                relayPort: e.port,
                iceConnectedTime: 0,
                dtlsStallTimeout: null,
              }),
              xe.set(n.id, n));
          var a = n;
          n.connectionTimeout = window.setTimeout(function () {
            a.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
              (o("WALogger").WARN(
                G ||
                  (G = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] Connection timeout (",
                    "ms) in Connecting state for ",
                    "",
                  ])),
                Le(),
                e.id,
              ),
              dt(a, "connection_timeout"));
          }, Le());
          var i = !1;
          if (
            (o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() ||
              (i = yield kt()),
            Te ||
              (o("WAWebVoipTsLogger").logIceConnectionStart({
                relayId: e.relayId,
                ip: e.ip,
                port: e.port,
              }),
              e.port === 3478
                ? o("WAWebCoreActionsODS").logCallIceStartedPort3478()
                : o("WAWebCoreActionsODS").logCallIceStartedPort3480(),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              Te))
          )
            return (ct(e.id), ze(e.id), !1);
          if (ut(n))
            return (
              o("WALogger").WARN(
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Aborting stale connect for ",
                    " after yield",
                  ])),
                e.id,
              ),
              st(n),
              ze(e.id),
              !1
            );
          try {
            var l,
              s,
              u = r("justknobx")._("404"),
              c = {};
            if (
              u &&
              ((c.certificates = [
                yield RTCPeerConnection.generateCertificate({
                  name: "ECDSA",
                  namedCurve: "P-256",
                }),
              ]),
              ut(n))
            )
              return (
                o("WALogger").WARN(
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Aborting stale connect for ",
                      " after certificate generation",
                    ])),
                  e.id,
                ),
                st(n),
                ze(e.id),
                !1
              );
            var d = Date.now(),
              m = new RTCPeerConnection(c),
              p = Date.now() - d;
            (p >
              o("WAWebVoipSctpConnectionManagerConstants")
                .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
              o("WALogger").WARN(
                K ||
                  (K = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] slow RTCPeerConnection ctor ",
                    ": ",
                    "ms",
                  ])),
                e.id,
                p,
              ),
              (n.peerConnection = m),
              (m.onicecandidate = function (t) {
                t.candidate ||
                  o("WALogger").LOG(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] ICE gathering complete for ",
                        "",
                      ])),
                    e.id,
                  );
              }),
              tt(m, e.id),
              et(m, n, e));
            var _ = Date.now(),
              f = yield m.createOffer();
            yield m.setLocalDescription(f);
            var g = f.sdp || "",
              h = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(g, e);
            if (
              (yield m.setRemoteDescription({ sdp: h, type: "answer" }), ut(n))
            )
              return (
                o("WALogger").WARN(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Aborting stale connect for ",
                      " after setRemoteDescription",
                    ])),
                  e.id,
                ),
                st(n),
                lt(n),
                it(m),
                m.close(),
                (n.peerConnection = null),
                ze(e.id),
                !1
              );
            var y = Date.now() - _;
            y >
              o("WAWebVoipSctpConnectionManagerConstants")
                .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
              o("WALogger").WARN(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Slow SDP negotiation for ",
                    ": ",
                    "ms",
                  ])),
                e.id,
                y,
              );
            var C = m.iceConnectionState,
              b =
                (l = (s = n.channel) == null ? void 0 : s.readyState) != null
                  ? l
                  : "unknown";
            return (
              o("WALogger").LOG(
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] SDP done ",
                    " DC=",
                    " ICE=",
                    "",
                  ])),
                e.id,
                b,
                C,
              ),
              !0
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] createDataChannel failed: ",
                    "",
                  ])),
                e,
              ),
              dt(n, "channel_creation_failed"),
              !1
            );
          }
        })),
        rt.apply(this, arguments)
      );
    }
    function ot(e) {
      var t,
        n,
        r = e.stats,
        a = "N/A";
      r.connectionReadyTime !== 0 &&
        e.connectionStartTime > 0 &&
        (a = (r.connectionReadyTime - e.connectionStartTime).toString());
      var i =
        (t = (n = Pe.get(e.id)) == null ? void 0 : n.name) != null ? t : "N/A";
      (o("WALogger").LOG(
        k ||
          (k = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SCTP] stats relay=",
            " id=",
            " txPkt=",
            " rxPkt=",
            " txB=",
            " rxB=",
            "",
          ])),
        i,
        e.id,
        r.sentPackets,
        r.receivedPackets,
        r.sentBytes,
        r.receivedBytes,
      ),
        o("WALogger").LOG(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] stats bufB=",
              " bindT=",
              "ms",
            ])),
          e.packetBuffer.bufferedBytes,
          a,
        ));
    }
    function at(e) {
      var t;
      ((e.onopen = t = r("WAWebNoop")),
        (e.onclose = t),
        (e.onmessage = t),
        (e.onerror = t));
    }
    function it(e) {
      ((e.onicecandidate = r("WAWebNoop")),
        (e.oniceconnectionstatechange = r("WAWebNoop")),
        (e.onconnectionstatechange = r("WAWebNoop")));
    }
    function lt(e) {
      var t = e.channel;
      t != null && (at(t), t.close(), (e.channel = null));
    }
    function st(e) {
      (e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null)),
        e.dtlsStallTimeout != null &&
          (window.clearTimeout(e.dtlsStallTimeout),
          (e.dtlsStallTimeout = null)));
    }
    function ut(e) {
      return Te || xe.get(e.id) !== e;
    }
    function ct(e) {
      var t = xe.get(e);
      if (t) {
        (st(t), lt(t));
        var n = t.peerConnection;
        (n && (it(n), n.close(), (t.peerConnection = null)),
          ot(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          (t.isReconnecting == null || !t.isReconnecting) &&
            (t.relayPort === 3478
              ? o(
                  "WAWebCoreActionsODS",
                ).logCallSctpConnectionCleanedUpPort3478()
              : t.relayPort === 3480 &&
                o(
                  "WAWebCoreActionsODS",
                ).logCallSctpConnectionCleanedUpPort3480(),
            xe.delete(e),
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionFromRttStats(
              e,
            ),
            xe.size === 0 &&
              o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
                "relay",
              )));
      }
    }
    function dt(e, t) {
      e &&
        e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
        e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
        (o("WALogger").LOG(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Failing (closing) connection for ",
              ", reason: ",
              "",
            ])),
          e.id,
          t,
        ),
        e.relayPort === 3478
          ? o("WAWebCoreActionsODS").logCallSctpConnectionFailedPort3478()
          : e.relayPort === 3480 &&
            o("WAWebCoreActionsODS").logCallSctpConnectionFailedPort3480(),
        e.relayIp !== "" &&
          o("WAWebVoipTsLogger").logIceConnectionFailed(
            { relayId: e.relayId, ip: e.relayIp, port: e.relayPort },
            1,
          ),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        ct(e.id),
        ze(e.id));
    }
    function mt(e) {
      var t = xe.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        ct(e),
        ze(e));
    }
    function pt(e) {
      return _t.apply(this, arguments);
    }
    function _t() {
      return (
        (_t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isReconnecting !== !0) {
            if (
              (o("WALogger").LOG(
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Restarting ICE process for connection ",
                    "",
                  ])),
                e.id,
              ),
              !e.hasNonStunPacketSent)
            ) {
              o("WALogger").WARN(
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no non-STUN sent ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var t = Pe.get(e.id);
            if (!t) {
              o("WALogger").WARN(
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no relay info ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var n = e.peerConnection;
            if (!n) {
              o("WALogger").WARN(
                re ||
                  (re = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no PC ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var a = e.packetBuffer;
            if (
              ((e.isReconnecting = !0),
              (e.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Connecting),
              e.peerConnection)
            ) {
              (o("WALogger").LOG(
                oe ||
                  (oe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Closing previous connection for ",
                    "",
                  ])),
                e.id,
              ),
                window.clearTimeout(e.connectionTimeout),
                (e.connectionTimeout = null),
                lt(e));
              var i = e.peerConnection;
              i && (it(i), i.close());
            }
            try {
              ((e.hasReceivedFirstPacket = !1), (e.sentMedia = !1));
              var l = {};
              r("justknobx")._("404") &&
                (l.certificates = [
                  yield RTCPeerConnection.generateCertificate({
                    name: "ECDSA",
                    namedCurve: "P-256",
                  }),
                ]);
              var s = new RTCPeerConnection(l);
              ((e.peerConnection = s),
                (e.iceConnectedTime = 0),
                e.dtlsStallTimeout != null &&
                  (window.clearTimeout(e.dtlsStallTimeout),
                  (e.dtlsStallTimeout = null)),
                tt(s, e.id, "(ICE restart)"),
                et(s, e, t, "ICE restart"),
                (e.packetBuffer = a),
                xe.set(e.id, e));
              var u = yield s.createOffer({ iceRestart: !1 });
              yield s.setLocalDescription(u);
              var c = u.sdp || "",
                d = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(c, t);
              (yield s.setRemoteDescription({ sdp: d, type: "answer" }),
                o("WALogger").LOG(
                  ae ||
                    (ae = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] ICE restart completed for connection ",
                      "",
                    ])),
                  e.id,
                ));
            } catch (t) {
              (o("WALogger").ERROR(
                ie ||
                  (ie = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart failed for connection ",
                    ": ",
                    "",
                  ])),
                e.id,
                t,
              ),
                dt(e, "ice_restart_failed"));
            }
          }
        })),
        _t.apply(this, arguments)
      );
    }
    function ft(e, t, n) {
      var r = xe.get(t);
      if (r) {
        var a, i;
        if (r.channel == null || r.channel !== n) {
          o("WALogger").WARN(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Error closing stale DataChannel for ",
                  ": ",
                  "",
                ])),
              t,
              e,
            );
          }
          return;
        }
        if (
          r.state !==
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
        )
          return;
        ((r.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
          (r.stats.connectionReadyTime = Date.now()),
          (r.isReconnecting = !1),
          r.connectionTimeout &&
            (window.clearTimeout(r.connectionTimeout),
            (r.connectionTimeout = null)),
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
            "relay",
            $e,
            function () {
              return Ne;
            },
          ));
        var l =
            r.connectionStartTime > 0 ? Date.now() - r.connectionStartTime : 0,
          s =
            (a = (i = Pe.get(t)) == null ? void 0 : i.name) != null ? a : "N/A";
        (o("WALogger").LOG(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] DC opened ",
              " relay=",
              " ",
              "ms",
            ])),
          t,
          s,
          l,
        ),
          o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE done id=",
                " ip=",
                " port=",
                "",
              ])),
            r.relayId,
            r.relayIp,
            r.relayPort,
          ),
          o("WAWebVoipTsLogger").logIceConnectionComplete({
            relayId: r.relayId,
            ip: r.relayIp,
            port: r.relayPort,
          }),
          bt(t),
          ze(t));
      }
    }
    function gt(e, t) {
      (o("WALogger").LOG(
        N ||
          (N = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] DataChannel closed for ",
            "",
          ])),
        t,
      ),
        mt(t));
    }
    function ht(e, t) {
      return yt.apply(this, arguments);
    }
    function yt() {
      return (
        (yt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = xe.get(t.id),
            a = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
          if (a.type === "web" && n) {
            var i,
              l = yield o("WAWebVoipRelayConnectionUtils").dataToArrayBuffer(
                e.data,
              );
            if (l == null) {
              o("WALogger").ERROR(
                le ||
                  (le = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Unexpected data type: ",
                    "",
                  ])),
                typeof e.data,
              );
              return;
            }
            (n.stats.receivedPackets++,
              (n.stats.receivedBytes += l.byteLength),
              n.stats.firstResponseRecvTime === 0 &&
                (n.stats.firstResponseRecvTime = Date.now()),
              (n.lastRxPacketTime = Date.now()),
              n.hasReceivedFirstPacket || (n.hasReceivedFirstPacket = !0));
            var s = r("justknobx")._("1929"),
              u;
            if (s) {
              var c;
              u = (c = t.originalPort) != null ? c : t.port;
            } else
              ((i = t.originalPort) != null ? i : t.port) ===
              o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
                .TRUE_WEB_CLIENT_RELAY_PORT
                ? (u = o("WAWebVoipSctpConnectionManagerConstants")
                    .SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT)
                : (u = o("WAWebVoipSctpConnectionManagerConstants")
                    .SctpConnectionConfig.FAUX_WEB_CLIENT_RELAY_PORT);
            yield a.handleOnTransportMessage(l, t.ip, u);
          } else
            o("WALogger").WARN(
              se ||
                (se = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] connection not found on sctp message for ",
                  "",
                ])),
              t.id,
            );
        })),
        yt.apply(this, arguments)
      );
    }
    function Ct(e, t) {
      var n = o("WAWebVoipRelayConnectionUtils").inspectPacketType(t);
      if (n !== o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN)
        var r = o("WAWebVoipRelayConnectionUtils").bufferPacket(
          e.packetBuffer,
          t,
          e.stats,
          o("WAWebVoipSctpConnectionManagerConstants").MAX_BUFFER_BYTES,
        );
    }
    function bt(e) {
      var t = xe.get(e);
      if (
        !(
          !t ||
          t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
          !t.channel
        )
      ) {
        for (var n = t.channel; t.packetBuffer.packets.length > 0; ) {
          var r = Ne,
            a = t.channelTransferred
              ? r != null && r.isActive()
              : n.readyState === "open";
          if (!a) break;
          var i = o("WAWebVoipRelayConnectionUtils").shiftPacket(
            t.packetBuffer,
          );
          if (i != null) {
            var l = i.byteLength;
            try {
              if (t.channelTransferred && r != null) {
                var s = r.sendPacket(e, i);
                if (!s) {
                  t.stats.droppedPackets++;
                  break;
                }
              } else
                (n.send(i), t.stats.sentPackets++, (t.stats.sentBytes += l));
            } catch (e) {
              t.stats.droppedPackets++;
              break;
            }
          }
        }
        t.packetBuffer.packets.length;
      }
    }
    function vt(e) {
      var t = {
        state: o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
        channel: null,
        peerConnection: null,
        packetBuffer: o("WAWebVoipRelayConnectionUtils").createPacketBuffer(),
        id: e,
        connectionTimeout: null,
        hasReceivedFirstPacket: !1,
        hasNonStunPacketSent: !1,
        lastRxPacketTime: 0,
        stats: o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
        isReconnecting: !1,
        sentMedia: !1,
        channelTransferred: !1,
        connectionStartTime: 0,
        relayId: 0,
        relayIp: "",
        relayPort: 0,
        iceConnectedTime: 0,
        dtlsStallTimeout: null,
      };
      return (
        (t.connectionTimeout = window.setTimeout(function () {
          t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
            (o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Early packet connection timeout (",
                  "ms) for ",
                  "",
                ])),
              Le(),
              e,
            ),
            dt(t, "early_packet_timeout"));
        }, Le())),
        xe.set(e, t),
        t
      );
    }
    function St(e, t, n) {
      var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(t, n),
        a = xe.get(r);
      (a == null &&
        (o("WALogger").LOG(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] conn not found, creating early ",
              "",
            ])),
          r,
        ),
        (a = vt(r))),
        a.stats.firstSendRequestTime === 0 &&
          (a.stats.firstSendRequestTime = Date.now()));
      var i =
          e instanceof SharedArrayBuffer ? new Uint8Array(e).slice().buffer : e,
        l = i.byteLength,
        s = o("WAWebVoipRelayConnectionUtils").inspectPacketType(i);
      if (
        s === o("WAWebVoipRelayConnectionUtils").PacketType.STUN_ALLOC &&
        a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        a.sentMedia === !0 &&
        !a.channelTransferred
      ) {
        var u = Date.now() - a.lastRxPacketTime;
        if (u > Re) {
          (o("WALogger").LOG(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] STUN_ALLOC no rx ",
                "ms>",
                "ms, ICE restart ",
                "",
              ])),
            u,
            Re,
            r,
          ),
            o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(
              a.packetBuffer,
            ),
            o("WAWebVoipRelayConnectionUtils").bufferPacket(
              a.packetBuffer,
              i,
              a.stats,
              o("WAWebVoipSctpConnectionManagerConstants").MAX_BUFFER_BYTES,
            ),
            pt(a));
          return;
        }
      }
      if (a.channelTransferred) {
        var c = Ne;
        if (c == null || !c.isActive())
          (o("WALogger").WARN(
            F ||
              (F = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] transferred but inactive ",
                ", legacy path",
              ])),
            r,
          ),
            (a.channelTransferred = !1));
        else if (
          a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ) {
          var d = c.sendPacket(r, i);
          (d ||
            (a.stats.droppedPackets++,
            o("WALogger").WARN(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Failed to send packet for ",
                  ", pthread may be shutting down",
                ])),
              r,
            )),
            s === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN &&
              (a.hasNonStunPacketSent || (a.hasNonStunPacketSent = !0),
              a.sentMedia !== !0 && (a.sentMedia = !0)));
          return;
        }
        Ct(a, i);
        return;
      }
      if (
        a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        a.channel != null
      ) {
        try {
          (a.channel.send(i),
            a.stats.sentPackets++,
            (a.stats.sentBytes += l),
            s === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN &&
              (a.hasNonStunPacketSent || (a.hasNonStunPacketSent = !0),
              a.sentMedia !== !0 && (a.sentMedia = !0)));
        } catch (e) {}
        return;
      }
      Ct(a, i);
    }
    var Rt = null,
      Lt = null;
    function Et() {
      if (Lt != null) return Lt;
      var e = null;
      try {
        e = new RTCPeerConnection();
        var t = e.createDataChannel("__transfer_probe__", {
            negotiated: !0,
            id: 0,
          }),
          n = new MessageChannel();
        (n.port1.postMessage({ ch: t }, [t]),
          n.port1.close(),
          n.port2.close(),
          (Lt = !0));
      } catch (e) {
        Lt = !1;
      } finally {
        var r;
        (r = e) == null || r.close();
      }
      return (
        o("WALogger").LOG(
          B ||
            (B = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] RTCDataChannel transfer supported: ",
              "",
            ])),
          String(Lt),
        ),
        Lt === !0
      );
    }
    function kt() {
      return It.apply(this, arguments);
    }
    function It() {
      return (
        (It = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_proxy_and_sctp_workers",
          );
          if (
            (o("WALogger").LOG(
              ue ||
                (ue = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] init shouldEnable=",
                  "",
                ])),
              String(e),
            ),
            !e)
          )
            return (
              o("WALogger").LOG(
                ce ||
                  (ce = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Disabled by ABProp, skipping pthread creation",
                  ])),
              ),
              !1
            );
          if (!Et())
            return (
              o("WALogger").LOG(
                de ||
                  (de = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] no RTCDataChannel transfer support, skip",
                  ])),
              ),
              !1
            );
          if (Ne != null && Ne.isActive())
            return (
              o("WALogger").LOG(
                me ||
                  (me = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Thread already active, reusing existing pthread",
                  ])),
              ),
              !0
            );
          if (Rt != null) {
            o("WALogger").LOG(
              pe ||
                (pe = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Awaiting existing pthread creation promise",
                ])),
            );
            try {
              var t, n;
              return (
                (Ne = yield Rt),
                o("WALogger").LOG(
                  _e ||
                    (_e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Existing promise resolved, thread active: ",
                      "",
                    ])),
                  String(
                    (t = (n = Ne) == null ? void 0 : n.isActive()) != null
                      ? t
                      : !1,
                  ),
                ),
                Ne != null && Ne.isActive()
              );
            } catch (e) {
              return (
                o("WALogger").LOG(
                  fe ||
                    (fe = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Existing promise rejected: ",
                      "",
                    ])),
                  String(e),
                ),
                !1
              );
            }
          }
          (o("WALogger").LOG(
            ge ||
              (ge = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Initializing WASM pthread for RTCDataChannel I/O",
              ])),
          ),
            (Rt = r("WAWebVoipSctpDataChannelThread").create()));
          try {
            var a, i, l;
            Ne = yield Rt;
            var s = r("justknobx")._("1929");
            return (
              (a = Ne) == null || a.setRemoveRelayPortOverride(s),
              (i = Ne) == null || i.setSctpTimeoutMs(Se),
              o("WALogger").LOG(
                he ||
                  (he = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] WASM pthread created successfully",
                  ])),
              ),
              (l = Ne) == null || l.ping(),
              !0
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                ye ||
                  (ye = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Failed to create WASM pthread: ",
                    "",
                  ])),
                e,
              ),
              (Rt = null),
              !1
            );
          }
        })),
        It.apply(this, arguments)
      );
    }
    function Tt() {
      return Ne != null && Ne.isActive();
    }
    function Dt() {
      return Ne != null && Ne.isActive() ? Ne : null;
    }
    function xt() {
      return $t.apply(this, arguments);
    }
    function $t() {
      return (
        ($t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (((Rt = null), Ne == null || !Ne.isActive())) {
            Ne = null;
            return;
          }
          o("WALogger").LOG(
            Ce ||
              (Ce = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Shutting down WASM pthread",
              ])),
          );
          var e = Ne;
          ((Ne = null),
            yield e.shutdown(),
            o("WALogger").LOG(
              be ||
                (be = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] WASM pthread shutdown complete",
                ])),
            ));
        })),
        $t.apply(this, arguments)
      );
    }
    ((l.sendWAWebVoipDataToRelay = Oe),
      (l.mergeWorkerStats = Be),
      (l.handleDataChannelOpened = We),
      (l.handleDataChannelErrored = He),
      (l.cleanupAllConnections = je),
      (l.handleRelayListUpdate = Ye),
      (l.initDataChannelWorker = kt),
      (l.isDataChannelThreadActive = Tt),
      (l.getDataChannelThread = Dt),
      (l.stopDataChannelWorker = xt));
  },
  98,
);
