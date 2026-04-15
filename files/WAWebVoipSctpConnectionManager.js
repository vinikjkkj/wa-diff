__d(
  "WAWebVoipSctpConnectionManager",
  [
    "Promise",
    "WACommonTaskScheduler",
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebVoipRelayConnectionUtils",
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
      ye = new Set([
        "157.240.24.133",
        "2a03:2880:f262:db:face:b00c:0:6749",
        "163.70.152.133",
        "2a03:2880:f202:db:face:b00c:0:6749",
        "57.144.115.57",
        "2a03:2880:f32f:139:face:b00c:0:6749",
        "157.240.197.133",
        "2a03:2880:f243:db:face:b00c:0:6749",
        "57.144.23.57",
        "2a03:2880:f332:139:face:b00c:0:6749",
        "157.240.14.129",
        "2a03:2880:f22c:1db:face:b00c:0:6749",
        "57.144.163.57",
        "2a03:2880:f351:139:face:b00c:0:6749",
        "57.144.197.57",
        "2a03:2880:f362:139:face:b00c:0:6749",
        "57.144.199.57",
        "2a03:2880:f363:139:face:b00c:0:6749",
      ]),
      Ce = {
        CLOSE_OLD_CONNECTION_BEFORE_CALL_END: !1,
        FAUX_WEB_CLIENT_RELAY_PORT: 3478,
        TRUE_WEB_CLIENT_RELAY_PORT: 3480,
        USE_AUTH_TOKEN_FOR_ICE: !0,
      },
      be = 1e4,
      ve = 1e4;
    function Se() {
      return 2 * be;
    }
    var Re = 500,
      Le = 256 * 1024,
      Ee = 3,
      ke = [1e3, 2e3, 3e3],
      Ie = new Map(),
      Te = new Set(),
      De = 500,
      xe = new Map(),
      $e = !1,
      Pe = 0,
      Ne = new Map();
    function Me() {
      var e = [];
      for (var t of Ne) {
        var n = t[0],
          r = t[1];
        r.peerConnection != null &&
          r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
          e.push({ connectionId: n, peerConnection: r.peerConnection });
      }
      return e;
    }
    var we = new Map(),
      Ae = null;
    function Fe(t, n, r, a) {
      var i,
        l,
        c = Ae;
      if (c == null || !c.isActive()) return !1;
      var d = we.get(r),
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
    function Oe(e) {
      var t = Ne.get(e);
      if (t)
        try {
          ct(e);
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
    function Be(e, t) {
      return We.apply(this, arguments);
    }
    function We() {
      return (
        (We = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = "wa-web-call",
            r = Ne.get(e.id);
          if (
            r &&
            (r.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
              r.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
          ) {
            Qe(e.id);
            return;
          }
          (r &&
            r.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
            st(e.id),
            yield at(e, n));
        })),
        We.apply(this, arguments)
      );
    }
    function qe(e, t, n) {
      var o = r("justknobx")._("1929");
      bt(e, t, o ? n : Ce.TRUE_WEB_CLIENT_RELAY_PORT);
    }
    function Ue(e, t) {
      var n = Ne.get(e);
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
    function Ve(e) {
      var t = Ne.get(e);
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
          Me,
          function () {
            return Ae;
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
        yt(e),
        Qe(e));
    }
    function He(e, t, n, r) {
      var a,
        i = e.id;
      if (
        !(
          e.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
          e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed
        )
      ) {
        var l = we.get(i),
          s = (a = Ie.get(i)) != null ? a : 0;
        if (!$e && l != null && s < Ee) {
          var u;
          Ie.set(i, s + 1);
          var c = (u = ke[s]) != null ? u : 0;
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
            Ee,
            c,
          ),
            ut(e, n));
          var d = function (n) {
            (n != null && Te.delete(n),
              !$e &&
                Be(l, !1).catch(function (e) {
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
            Te.add(m);
          } else d(null);
        } else
          ($e ||
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
                  Ee,
                )),
            ut(e, t));
      }
    }
    function Ge(e) {
      var t = Ne.get(e);
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
        He(
          t,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        ));
    }
    function ze(e) {
      He(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function je(e, t) {
      if (t === "no_first_response_timeout" || t === "rx_stall_timeout") {
        var n = Ne.get(e);
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
                Ge(e);
              }));
          return;
        }
      }
      Ge(e);
    }
    function Ke(e) {
      return new (he || (he = n("Promise")))(function (t) {
        xe.set(e, t);
      });
    }
    function Qe(e) {
      var t = xe.get(e);
      t != null && (t(), xe.delete(e));
    }
    function Xe() {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (($e = !0), Pe++);
          try {
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
              "relay",
            );
            var e = Array.from(Ne.keys());
            (o("WALogger").LOG(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield Tt());
            for (var t of e) Oe(t);
            (we.clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] All connections and relay state cleared",
                  ])),
              ));
          } finally {
            for (var n of Te) window.clearTimeout(n);
            Te.clear();
            for (var r of xe.values()) r();
            (xe.clear(), Ie.clear(), ($e = !1));
          }
        })),
        Ye.apply(this, arguments)
      );
    }
    function Je(e) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Pe;
          o("WALogger").LOG(
            W ||
              (W = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          );
          for (var r = 0; r < e.length; r++) {
            if ($e || Pe !== t) return;
            var a = e[r];
            o("WALogger").LOG(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Starting staggered connection ",
                  "/",
                  ": ",
                  "",
                ])),
              r + 1,
              e.length,
              a.id,
            );
            var i = Ke(a.id);
            if ((Be(a, !1), r < e.length - 1)) {
              var l = new (he || (he = n("Promise")))(function (e) {
                window.setTimeout(e, De);
              });
              yield he.race([i, l]);
            }
          }
        })),
        Ze.apply(this, arguments)
      );
    }
    function et(e) {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (
        (tt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          ((be = r("justknobx")._("5402") || 1e4),
            (ve = r("justknobx")._("5558") || be),
            Pe++);
          var t = r("justknobx")._("1929"),
            a = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(
              e,
              {
                portOverride: function (n) {
                  return t ? n : Ce.TRUE_WEB_CLIENT_RELAY_PORT;
                },
              },
            );
          for (var i of we) {
            var l = i[0],
              s = i[1];
            a.has(l) || (Ce.CLOSE_OLD_CONNECTION_BEFORE_CALL_END && Oe(l));
          }
          var u = [];
          for (var c of a) {
            var d = c[0],
              m = c[1];
            (!we.has(d) || !Ne.has(d)) && u.push(m);
          }
          if (((we = a), u.length > 0)) {
            var p = r("justknobx")._("2412");
            p
              ? yield Je(u)
              : yield (he || (he = n("Promise"))).all(
                  u.map(function (e) {
                    return Be(e, !1);
                  }),
                );
          }
        })),
        tt.apply(this, arguments)
      );
    }
    function nt(e, t, n) {
      (n === void 0 && (n = !1),
        !n &&
          ((e.onopen = function (e) {
            pt(e, t.id);
          }),
          (e.onclose = function (e) {
            _t(e, t.id);
          }),
          (e.onmessage = function (e) {
            ft(e, t);
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
            var n = Ne.get(t.id);
            n &&
              He(
                n,
                "data_channel_error",
                "data_channel_error_reconnecting",
                "[SCTP]",
              );
          })));
    }
    function rt(e, t, n, r) {
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
          : (s = Fe(l, t, n.id, r)),
        (t.channel = l),
        nt(l, n, s),
        l
      );
    }
    function ot(e, t, n) {
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
        var a = Ne.get(t);
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
                  be,
                  n,
                  t,
                  r,
                ),
                  a.relayPort === 3478
                    ? o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3478()
                    : o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3480(),
                  He(a, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, be))),
          n === "failed" &&
            (a.relayPort === 3478
              ? o("WAWebCoreActionsODS").logCallIceFailedPort3478()
              : o("WAWebCoreActionsODS").logCallIceFailedPort3480(),
            ze(a)));
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
          var a = Ne.get(t);
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
    function at(e, t) {
      return it.apply(this, arguments);
    }
    function it() {
      return (
        (it = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = Ne.get(e.id);
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
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
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
                iceCandidate: null,
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
              Ne.set(n.id, n));
          var a = n;
          n.connectionTimeout = window.setTimeout(function () {
            a.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
              (o("WALogger").WARN(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] Connection timeout (",
                    "ms) in Connecting state for ",
                    "",
                  ])),
                Se(),
                e.id,
              ),
              ut(a, "connection_timeout"));
          }, Se());
          var i = !1;
          if (
            (o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() ||
              (i = yield Lt()),
            $e ||
              (r("justknobx")._("360") && ye.has(e.ip) && (e.port = 3478),
              o("WAWebVoipTsLogger").logIceConnectionStart({
                relayId: e.relayId,
                ip: e.ip,
                port: e.port,
              }),
              e.port === 3478
                ? o("WAWebCoreActionsODS").logCallIceStartedPort3478()
                : o("WAWebCoreActionsODS").logCallIceStartedPort3480(),
              o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
                ? yield r("WACommonTaskScheduler").yield()
                : yield o("WAPromiseDelays").releaseToEventLoop(),
              $e))
          )
            return (st(e.id), Qe(e.id), !1);
          try {
            var l,
              s,
              u = r("justknobx")._("404"),
              c = {};
            u &&
              (c.certificates = [
                yield RTCPeerConnection.generateCertificate({
                  name: "ECDSA",
                  namedCurve: "P-256",
                }),
              ]);
            var d = Date.now(),
              m = new RTCPeerConnection(c),
              p = Date.now() - d;
            (p > Re &&
              o("WALogger").WARN(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] slow RTCPeerConnection ctor ",
                    ": ",
                    "ms",
                  ])),
                e.id,
                p,
              ),
              (n.peerConnection = m),
              (m.onicecandidate = function (t) {
                t.candidate
                  ? n &&
                    n.iceCandidate == null &&
                    (n.iceCandidate = t.candidate.candidate)
                  : o("WALogger").LOG(
                      G ||
                        (G = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [SctpConnectionManager] ICE gathering complete for ",
                          "",
                        ])),
                      e.id,
                    );
              }),
              ot(m, e.id),
              rt(m, n, e));
            var _ = Date.now(),
              f = yield m.createOffer();
            yield m.setLocalDescription(f);
            var g = f.sdp || "",
              h = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(g, e);
            yield m.setRemoteDescription({ sdp: h, type: "answer" });
            var y = Date.now() - _;
            y > Re &&
              o("WALogger").WARN(
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
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
                j ||
                  (j = babelHelpers.taggedTemplateLiteralLoose([
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
                K ||
                  (K = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] createDataChannel failed: ",
                    "",
                  ])),
                e,
              ),
              ut(n, "channel_creation_failed"),
              !1
            );
          }
        })),
        it.apply(this, arguments)
      );
    }
    function lt(e) {
      var t,
        n,
        r = e.stats,
        a = "N/A";
      r.connectionReadyTime !== 0 &&
        e.connectionStartTime > 0 &&
        (a = (r.connectionReadyTime - e.connectionStartTime).toString());
      var i =
        (t = (n = we.get(e.id)) == null ? void 0 : n.name) != null ? t : "N/A";
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
    function st(e) {
      var t = Ne.get(e);
      if (t) {
        var n;
        (t.connectionTimeout &&
          (window.clearTimeout(t.connectionTimeout),
          (t.connectionTimeout = null)),
          t.dtlsStallTimeout != null &&
            (window.clearTimeout(t.dtlsStallTimeout),
            (t.dtlsStallTimeout = null)),
          (n = t.channel) == null || n.close(),
          t.peerConnection &&
            (t.peerConnection.close(), (t.peerConnection = null)),
          lt(t),
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
            Ne.delete(e),
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionFromRttStats(
              e,
            ),
            Ne.size === 0 &&
              o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
                "relay",
              )));
      }
    }
    function ut(e, t) {
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
        st(e.id),
        Qe(e.id));
    }
    function ct(e) {
      var t = Ne.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        st(e),
        Qe(e));
    }
    function dt(e) {
      return mt.apply(this, arguments);
    }
    function mt() {
      return (
        (mt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isReconnecting !== !0) {
            if (
              (o("WALogger").LOG(
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Restarting ICE process for connection ",
                    "",
                  ])),
                e.id,
              ),
              !e.hasNonStunPacketSent)
            ) {
              o("WALogger").WARN(
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no non-STUN sent ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var t = we.get(e.id);
            if (!t) {
              o("WALogger").WARN(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
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
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no PC ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var a = e.packetBuffer;
            if (((e.isReconnecting = !0), e.peerConnection)) {
              var i;
              (o("WALogger").LOG(
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Closing previous connection for ",
                    "",
                  ])),
                e.id,
              ),
                window.clearTimeout(e.connectionTimeout),
                (e.connectionTimeout = null),
                (i = e.channel) == null || i.close());
              var l = e.peerConnection;
              l && l.close();
            }
            try {
              ((e.hasReceivedFirstPacket = !1), (e.sentMedia = !1));
              var s = {};
              r("justknobx")._("404") &&
                (s.certificates = [
                  yield RTCPeerConnection.generateCertificate({
                    name: "ECDSA",
                    namedCurve: "P-256",
                  }),
                ]);
              var u = new RTCPeerConnection(s);
              ((e.peerConnection = u),
                (e.iceConnectedTime = 0),
                e.dtlsStallTimeout != null &&
                  (window.clearTimeout(e.dtlsStallTimeout),
                  (e.dtlsStallTimeout = null)),
                ot(u, e.id, "(ICE restart)"),
                rt(u, e, t, "ICE restart"),
                (e.packetBuffer = a),
                Ne.set(e.id, e));
              var c = yield u.createOffer({ iceRestart: !1 }),
                d = c.sdp || "";
              if (e.iceCandidate != null) {
                var m;
                d = o("WAWebVoipRelayConnectionUtils").removeIceCandidates(d);
                var p = "a=" + ((m = e.iceCandidate) != null ? m : "") + "\r\n",
                  _ = "a=end-of-candidates\r\n";
                d += p + _;
              } else
                o("WALogger").WARN(
                  ee ||
                    (ee = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] No stored ICE candidate found for ",
                      "",
                    ])),
                  e.id,
                );
              yield u.setLocalDescription({ type: "offer", sdp: d });
              var f = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(d, t);
              (yield u.setRemoteDescription({ sdp: f, type: "answer" }),
                o("WALogger").LOG(
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] ICE restart completed for connection ",
                      "",
                    ])),
                  e.id,
                ));
            } catch (t) {
              (o("WALogger").ERROR(
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart failed for connection ",
                    ": ",
                    "",
                  ])),
                e.id,
                t,
              ),
                ut(e, "ice_restart_failed"));
            }
          }
        })),
        mt.apply(this, arguments)
      );
    }
    function pt(e, t) {
      var n = Ne.get(t);
      if (n) {
        var a, i;
        (r("nullthrows")(n.channel, "Unexpected null: connection.channel"),
          (n.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
          (n.stats.connectionReadyTime = Date.now()),
          (n.isReconnecting = !1),
          n.connectionTimeout &&
            (window.clearTimeout(n.connectionTimeout),
            (n.connectionTimeout = null)),
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
            "relay",
            Me,
            function () {
              return Ae;
            },
          ));
        var l =
            n.connectionStartTime > 0 ? Date.now() - n.connectionStartTime : 0,
          s =
            (a = (i = we.get(t)) == null ? void 0 : i.name) != null ? a : "N/A";
        (o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
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
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE done id=",
                " ip=",
                " port=",
                "",
              ])),
            n.relayId,
            n.relayIp,
            n.relayPort,
          ),
          o("WAWebVoipTsLogger").logIceConnectionComplete({
            relayId: n.relayId,
            ip: n.relayIp,
            port: n.relayPort,
          }),
          yt(t),
          Qe(t));
      }
    }
    function _t(e, t) {
      (o("WALogger").LOG(
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] DataChannel closed for ",
            "",
          ])),
        t,
      ),
        ct(t));
    }
    function ft(e, t) {
      return gt.apply(this, arguments);
    }
    function gt() {
      return (
        (gt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = Ne.get(t.id),
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
                re ||
                  (re = babelHelpers.taggedTemplateLiteralLoose([
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
              Ce.TRUE_WEB_CLIENT_RELAY_PORT
                ? (u = Ce.TRUE_WEB_CLIENT_RELAY_PORT)
                : (u = Ce.FAUX_WEB_CLIENT_RELAY_PORT);
            yield a.handleOnTransportMessage(l, t.ip, u);
          } else
            o("WALogger").WARN(
              oe ||
                (oe = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] connection not found on sctp message for ",
                  "",
                ])),
              t.id,
            );
        })),
        gt.apply(this, arguments)
      );
    }
    function ht(e, t) {
      var n = o("WAWebVoipRelayConnectionUtils").inspectPacketType(t);
      if (n !== o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN)
        var r = o("WAWebVoipRelayConnectionUtils").bufferPacket(
          e.packetBuffer,
          t,
          e.stats,
          Le,
        );
    }
    function yt(e) {
      var t = Ne.get(e);
      if (
        !(
          !t ||
          t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
          !t.channel
        )
      ) {
        for (var n = t.channel; t.packetBuffer.packets.length > 0; ) {
          var r = Ae,
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
    function Ct(e) {
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
        iceCandidate: null,
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
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Early packet connection timeout (",
                  "ms) for ",
                  "",
                ])),
              Se(),
              e,
            ),
            ut(t, "early_packet_timeout"));
        }, Se())),
        Ne.set(e, t),
        t
      );
    }
    function bt(e, t, n) {
      var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(t, n),
        a = Ne.get(r);
      (a == null &&
        (o("WALogger").LOG(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] conn not found, creating early ",
              "",
            ])),
          r,
        ),
        (a = Ct(r))),
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
        if (u > ve) {
          (o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] STUN_ALLOC no rx ",
                "ms>",
                "ms, ICE restart ",
                "",
              ])),
            u,
            ve,
            r,
          ),
            o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(
              a.packetBuffer,
            ),
            o("WAWebVoipRelayConnectionUtils").bufferPacket(
              a.packetBuffer,
              i,
              a.stats,
              Le,
            ),
            dt(a));
          return;
        }
      }
      if (a.channelTransferred) {
        var c = Ae;
        if (c == null || !c.isActive())
          (o("WALogger").WARN(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
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
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
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
        ht(a, i);
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
      ht(a, i);
    }
    var vt = null,
      St = null;
    function Rt() {
      if (St != null) return St;
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
          (St = !0));
      } catch (e) {
        St = !1;
      } finally {
        var r;
        (r = e) == null || r.close();
      }
      return (
        o("WALogger").LOG(
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] RTCDataChannel transfer supported: ",
              "",
            ])),
          String(St),
        ),
        St === !0
      );
    }
    function Lt() {
      return Et.apply(this, arguments);
    }
    function Et() {
      return (
        (Et = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_proxy_and_sctp_workers",
          );
          if (
            (o("WALogger").LOG(
              ae ||
                (ae = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] init shouldEnable=",
                  "",
                ])),
              String(e),
            ),
            !e)
          )
            return (
              o("WALogger").LOG(
                ie ||
                  (ie = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Disabled by ABProp, skipping pthread creation",
                  ])),
              ),
              !1
            );
          if (!Rt())
            return (
              o("WALogger").LOG(
                le ||
                  (le = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] no RTCDataChannel transfer support, skip",
                  ])),
              ),
              !1
            );
          if (Ae != null && Ae.isActive())
            return (
              o("WALogger").LOG(
                se ||
                  (se = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Thread already active, reusing existing pthread",
                  ])),
              ),
              !0
            );
          if (vt != null) {
            o("WALogger").LOG(
              ue ||
                (ue = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Awaiting existing pthread creation promise",
                ])),
            );
            try {
              var t, n;
              return (
                (Ae = yield vt),
                o("WALogger").LOG(
                  ce ||
                    (ce = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Existing promise resolved, thread active: ",
                      "",
                    ])),
                  String(
                    (t = (n = Ae) == null ? void 0 : n.isActive()) != null
                      ? t
                      : !1,
                  ),
                ),
                Ae != null && Ae.isActive()
              );
            } catch (e) {
              return (
                o("WALogger").LOG(
                  de ||
                    (de = babelHelpers.taggedTemplateLiteralLoose([
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
            me ||
              (me = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Initializing WASM pthread for RTCDataChannel I/O",
              ])),
          ),
            (vt = r("WAWebVoipSctpDataChannelThread").create()));
          try {
            var a, i, l;
            Ae = yield vt;
            var s = r("justknobx")._("1929");
            return (
              (a = Ae) == null || a.setRemoveRelayPortOverride(s),
              (i = Ae) == null || i.setSctpTimeoutMs(be),
              o("WALogger").LOG(
                pe ||
                  (pe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] WASM pthread created successfully",
                  ])),
              ),
              (l = Ae) == null || l.ping(),
              !0
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                _e ||
                  (_e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Failed to create WASM pthread: ",
                    "",
                  ])),
                e,
              ),
              (vt = null),
              !1
            );
          }
        })),
        Et.apply(this, arguments)
      );
    }
    function kt() {
      return Ae != null && Ae.isActive();
    }
    function It() {
      return Ae != null && Ae.isActive() ? Ae : null;
    }
    function Tt() {
      return Dt.apply(this, arguments);
    }
    function Dt() {
      return (
        (Dt = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (((vt = null), Ae == null || !Ae.isActive())) {
            Ae = null;
            return;
          }
          o("WALogger").LOG(
            fe ||
              (fe = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Shutting down WASM pthread",
              ])),
          );
          var e = Ae;
          ((Ae = null),
            yield e.shutdown(),
            o("WALogger").LOG(
              ge ||
                (ge = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] WASM pthread shutdown complete",
                ])),
            ));
        })),
        Dt.apply(this, arguments)
      );
    }
    ((l.sendWAWebVoipDataToRelay = qe),
      (l.mergeWorkerStats = Ue),
      (l.handleDataChannelOpened = Ve),
      (l.handleDataChannelErrored = je),
      (l.cleanupAllConnections = Xe),
      (l.handleRelayListUpdate = et),
      (l.initDataChannelWorker = Lt),
      (l.isDataChannelThreadActive = kt),
      (l.getDataChannelThread = It),
      (l.stopDataChannelWorker = Tt));
  },
  98,
);
