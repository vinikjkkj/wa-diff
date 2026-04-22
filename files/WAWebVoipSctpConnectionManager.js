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
      he = new Set([
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
      ye = {
        CLOSE_OLD_CONNECTION_BEFORE_CALL_END: !1,
        FAUX_WEB_CLIENT_RELAY_PORT: 3478,
        TRUE_WEB_CLIENT_RELAY_PORT: 3480,
        USE_AUTH_TOKEN_FOR_ICE: !0,
      },
      Ce = 1e4,
      be = 1e4;
    function ve() {
      return 2 * Ce;
    }
    var Se = 500,
      Re = 256 * 1024,
      Le = 3,
      Ee = [1e3, 2e3, 3e3],
      ke = new Map(),
      Ie = new Set(),
      Te = 500,
      De = new Map(),
      xe = !1,
      $e = 0,
      Pe = new Map();
    function Ne() {
      var e = [];
      for (var t of Pe) {
        var n = t[0],
          r = t[1];
        r.peerConnection != null &&
          r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
          e.push({ connectionId: n, peerConnection: r.peerConnection });
      }
      return e;
    }
    var Me = new Map(),
      we = null;
    function Ae(t, n, r, a) {
      var i,
        l,
        c = we;
      if (c == null || !c.isActive()) return !1;
      var d = Me.get(r),
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
    function Fe(e) {
      var t = Pe.get(e);
      if (t)
        try {
          ut(e);
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
    function Oe(e, t) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = "wa-web-call",
            r = Pe.get(e.id);
          if (
            r &&
            (r.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
              r.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
          ) {
            Ke(e.id);
            return;
          }
          (r &&
            r.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
            lt(e.id),
            yield ot(e, n));
        })),
        Be.apply(this, arguments)
      );
    }
    function We(e, t, n) {
      var o = r("justknobx")._("1929");
      Ct(e, t, o ? n : ye.TRUE_WEB_CLIENT_RELAY_PORT);
    }
    function qe(e, t) {
      var n = Pe.get(e);
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
    function Ue(e) {
      var t = Pe.get(e);
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
          Ne,
          function () {
            return we;
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
        ht(e),
        Ke(e));
    }
    function Ve(e, t, n, r) {
      var a,
        i = e.id;
      if (
        !(
          e.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
          e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed
        )
      ) {
        var l = Me.get(i),
          s = (a = ke.get(i)) != null ? a : 0;
        if (!xe && l != null && s < Le) {
          var u;
          ke.set(i, s + 1);
          var c = (u = Ee[s]) != null ? u : 0;
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
            Le,
            c,
          ),
            st(e, n));
          var d = function (n) {
            (n != null && Ie.delete(n),
              !xe &&
                Oe(l, !1).catch(function (e) {
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
            Ie.add(m);
          } else d(null);
        } else
          (xe ||
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
                  Le,
                )),
            st(e, t));
      }
    }
    function He(e) {
      var t = Pe.get(e);
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
        Ve(
          t,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        ));
    }
    function Ge(e) {
      Ve(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function ze(e, t) {
      if (t === "no_first_response_timeout" || t === "rx_stall_timeout") {
        var n = Pe.get(e);
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
                He(e);
              }));
          return;
        }
      }
      He(e);
    }
    function je(e) {
      return new (ge || (ge = n("Promise")))(function (t) {
        De.set(e, t);
      });
    }
    function Ke(e) {
      var t = De.get(e);
      t != null && (t(), De.delete(e));
    }
    function Qe() {
      return Xe.apply(this, arguments);
    }
    function Xe() {
      return (
        (Xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((xe = !0), $e++);
          try {
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
              "relay",
            );
            var e = Array.from(Pe.keys());
            (o("WALogger").LOG(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield It());
            for (var t of e) Fe(t);
            (Me.clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] All connections and relay state cleared",
                  ])),
              ));
          } finally {
            for (var n of Ie) window.clearTimeout(n);
            Ie.clear();
            for (var r of De.values()) r();
            (De.clear(), ke.clear(), (xe = !1));
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
          var t = $e;
          o("WALogger").LOG(
            W ||
              (W = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          );
          for (var r = 0; r < e.length; r++) {
            if (xe || $e !== t) return;
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
            var i = je(a.id);
            if ((Oe(a, !1), r < e.length - 1)) {
              var l = new (ge || (ge = n("Promise")))(function (e) {
                window.setTimeout(e, Te);
              });
              yield ge.race([i, l]);
            }
          }
        })),
        Je.apply(this, arguments)
      );
    }
    function Ze(e) {
      return et.apply(this, arguments);
    }
    function et() {
      return (
        (et = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          ((Ce = r("justknobx")._("5402") || 1e4),
            (be = r("justknobx")._("5558") || Ce),
            $e++);
          var t = r("justknobx")._("1929"),
            a = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(
              e,
              {
                portOverride: function (n) {
                  return t ? n : ye.TRUE_WEB_CLIENT_RELAY_PORT;
                },
              },
            );
          for (var i of Me) {
            var l = i[0],
              s = i[1];
            a.has(l) || (ye.CLOSE_OLD_CONNECTION_BEFORE_CALL_END && Fe(l));
          }
          var u = [];
          for (var c of a) {
            var d = c[0],
              m = c[1];
            (!Me.has(d) || !Pe.has(d)) && u.push(m);
          }
          if (((Me = a), u.length > 0)) {
            var p = r("justknobx")._("2412");
            p
              ? yield Ye(u)
              : yield (ge || (ge = n("Promise"))).all(
                  u.map(function (e) {
                    return Oe(e, !1);
                  }),
                );
          }
        })),
        et.apply(this, arguments)
      );
    }
    function tt(e, t, n) {
      (n === void 0 && (n = !1),
        !n &&
          ((e.onopen = function (e) {
            mt(e, t.id);
          }),
          (e.onclose = function (e) {
            pt(e, t.id);
          }),
          (e.onmessage = function (e) {
            _t(e, t);
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
            var n = Pe.get(t.id);
            n &&
              Ve(
                n,
                "data_channel_error",
                "data_channel_error_reconnecting",
                "[SCTP]",
              );
          })));
    }
    function nt(e, t, n, r) {
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
          : (s = Ae(l, t, n.id, r)),
        (t.channel = l),
        tt(l, n, s),
        l
      );
    }
    function rt(e, t, n) {
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
        var a = Pe.get(t);
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
                  Ce,
                  n,
                  t,
                  r,
                ),
                  a.relayPort === 3478
                    ? o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3478()
                    : o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3480(),
                  Ve(a, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, Ce))),
          n === "failed" &&
            (a.relayPort === 3478
              ? o("WAWebCoreActionsODS").logCallIceFailedPort3478()
              : o("WAWebCoreActionsODS").logCallIceFailedPort3480(),
            Ge(a)));
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
          var a = Pe.get(t);
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
    function ot(e, t) {
      return at.apply(this, arguments);
    }
    function at() {
      return (
        (at = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = Pe.get(e.id);
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
              Pe.set(n.id, n));
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
                ve(),
                e.id,
              ),
              st(a, "connection_timeout"));
          }, ve());
          var i = !1;
          if (
            (o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() ||
              (i = yield Rt()),
            xe ||
              (r("justknobx")._("360") && he.has(e.ip) && (e.port = 3478),
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
              xe))
          )
            return (lt(e.id), Ke(e.id), !1);
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
            (p > Se &&
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
                t.candidate ||
                  o("WALogger").LOG(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] ICE gathering complete for ",
                        "",
                      ])),
                    e.id,
                  );
              }),
              rt(m, e.id),
              nt(m, n, e));
            var _ = Date.now(),
              f = yield m.createOffer();
            yield m.setLocalDescription(f);
            var g = f.sdp || "",
              h = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(g, e);
            yield m.setRemoteDescription({ sdp: h, type: "answer" });
            var y = Date.now() - _;
            y > Se &&
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
              st(n, "channel_creation_failed"),
              !1
            );
          }
        })),
        at.apply(this, arguments)
      );
    }
    function it(e) {
      var t,
        n,
        r = e.stats,
        a = "N/A";
      r.connectionReadyTime !== 0 &&
        e.connectionStartTime > 0 &&
        (a = (r.connectionReadyTime - e.connectionStartTime).toString());
      var i =
        (t = (n = Me.get(e.id)) == null ? void 0 : n.name) != null ? t : "N/A";
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
    function lt(e) {
      var t = Pe.get(e);
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
          it(t),
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
            Pe.delete(e),
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionFromRttStats(
              e,
            ),
            Pe.size === 0 &&
              o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
                "relay",
              )));
      }
    }
    function st(e, t) {
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
        lt(e.id),
        Ke(e.id));
    }
    function ut(e) {
      var t = Pe.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        lt(e),
        Ke(e));
    }
    function ct(e) {
      return dt.apply(this, arguments);
    }
    function dt() {
      return (
        (dt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var t = Me.get(e.id);
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
                rt(u, e.id, "(ICE restart)"),
                nt(u, e, t, "ICE restart"),
                (e.packetBuffer = a),
                Pe.set(e.id, e));
              var c = yield u.createOffer({ iceRestart: !1 });
              yield u.setLocalDescription(c);
              var d = c.sdp || "",
                m = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(d, t);
              (yield u.setRemoteDescription({ sdp: m, type: "answer" }),
                o("WALogger").LOG(
                  ee ||
                    (ee = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] ICE restart completed for connection ",
                      "",
                    ])),
                  e.id,
                ));
            } catch (t) {
              (o("WALogger").ERROR(
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart failed for connection ",
                    ": ",
                    "",
                  ])),
                e.id,
                t,
              ),
                st(e, "ice_restart_failed"));
            }
          }
        })),
        dt.apply(this, arguments)
      );
    }
    function mt(e, t) {
      var n = Pe.get(t);
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
            Ne,
            function () {
              return we;
            },
          ));
        var l =
            n.connectionStartTime > 0 ? Date.now() - n.connectionStartTime : 0,
          s =
            (a = (i = Me.get(t)) == null ? void 0 : i.name) != null ? a : "N/A";
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
          ht(t),
          Ke(t));
      }
    }
    function pt(e, t) {
      (o("WALogger").LOG(
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] DataChannel closed for ",
            "",
          ])),
        t,
      ),
        ut(t));
    }
    function _t(e, t) {
      return ft.apply(this, arguments);
    }
    function ft() {
      return (
        (ft = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = Pe.get(t.id),
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
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
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
              ye.TRUE_WEB_CLIENT_RELAY_PORT
                ? (u = ye.TRUE_WEB_CLIENT_RELAY_PORT)
                : (u = ye.FAUX_WEB_CLIENT_RELAY_PORT);
            yield a.handleOnTransportMessage(l, t.ip, u);
          } else
            o("WALogger").WARN(
              re ||
                (re = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] connection not found on sctp message for ",
                  "",
                ])),
              t.id,
            );
        })),
        ft.apply(this, arguments)
      );
    }
    function gt(e, t) {
      var n = o("WAWebVoipRelayConnectionUtils").inspectPacketType(t);
      if (n !== o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN)
        var r = o("WAWebVoipRelayConnectionUtils").bufferPacket(
          e.packetBuffer,
          t,
          e.stats,
          Re,
        );
    }
    function ht(e) {
      var t = Pe.get(e);
      if (
        !(
          !t ||
          t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
          !t.channel
        )
      ) {
        for (var n = t.channel; t.packetBuffer.packets.length > 0; ) {
          var r = we,
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
    function yt(e) {
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
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Early packet connection timeout (",
                  "ms) for ",
                  "",
                ])),
              ve(),
              e,
            ),
            st(t, "early_packet_timeout"));
        }, ve())),
        Pe.set(e, t),
        t
      );
    }
    function Ct(e, t, n) {
      var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(t, n),
        a = Pe.get(r);
      (a == null &&
        (o("WALogger").LOG(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] conn not found, creating early ",
              "",
            ])),
          r,
        ),
        (a = yt(r))),
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
        if (u > be) {
          (o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] STUN_ALLOC no rx ",
                "ms>",
                "ms, ICE restart ",
                "",
              ])),
            u,
            be,
            r,
          ),
            o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(
              a.packetBuffer,
            ),
            o("WAWebVoipRelayConnectionUtils").bufferPacket(
              a.packetBuffer,
              i,
              a.stats,
              Re,
            ),
            ct(a));
          return;
        }
      }
      if (a.channelTransferred) {
        var c = we;
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
        gt(a, i);
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
      gt(a, i);
    }
    var bt = null,
      vt = null;
    function St() {
      if (vt != null) return vt;
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
          (vt = !0));
      } catch (e) {
        vt = !1;
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
          String(vt),
        ),
        vt === !0
      );
    }
    function Rt() {
      return Lt.apply(this, arguments);
    }
    function Lt() {
      return (
        (Lt = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_proxy_and_sctp_workers",
          );
          if (
            (o("WALogger").LOG(
              oe ||
                (oe = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] init shouldEnable=",
                  "",
                ])),
              String(e),
            ),
            !e)
          )
            return (
              o("WALogger").LOG(
                ae ||
                  (ae = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Disabled by ABProp, skipping pthread creation",
                  ])),
              ),
              !1
            );
          if (!St())
            return (
              o("WALogger").LOG(
                ie ||
                  (ie = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] no RTCDataChannel transfer support, skip",
                  ])),
              ),
              !1
            );
          if (we != null && we.isActive())
            return (
              o("WALogger").LOG(
                le ||
                  (le = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Thread already active, reusing existing pthread",
                  ])),
              ),
              !0
            );
          if (bt != null) {
            o("WALogger").LOG(
              se ||
                (se = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Awaiting existing pthread creation promise",
                ])),
            );
            try {
              var t, n;
              return (
                (we = yield bt),
                o("WALogger").LOG(
                  ue ||
                    (ue = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Existing promise resolved, thread active: ",
                      "",
                    ])),
                  String(
                    (t = (n = we) == null ? void 0 : n.isActive()) != null
                      ? t
                      : !1,
                  ),
                ),
                we != null && we.isActive()
              );
            } catch (e) {
              return (
                o("WALogger").LOG(
                  ce ||
                    (ce = babelHelpers.taggedTemplateLiteralLoose([
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
            de ||
              (de = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Initializing WASM pthread for RTCDataChannel I/O",
              ])),
          ),
            (bt = r("WAWebVoipSctpDataChannelThread").create()));
          try {
            var a, i, l;
            we = yield bt;
            var s = r("justknobx")._("1929");
            return (
              (a = we) == null || a.setRemoveRelayPortOverride(s),
              (i = we) == null || i.setSctpTimeoutMs(Ce),
              o("WALogger").LOG(
                me ||
                  (me = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] WASM pthread created successfully",
                  ])),
              ),
              (l = we) == null || l.ping(),
              !0
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                pe ||
                  (pe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Failed to create WASM pthread: ",
                    "",
                  ])),
                e,
              ),
              (bt = null),
              !1
            );
          }
        })),
        Lt.apply(this, arguments)
      );
    }
    function Et() {
      return we != null && we.isActive();
    }
    function kt() {
      return we != null && we.isActive() ? we : null;
    }
    function It() {
      return Tt.apply(this, arguments);
    }
    function Tt() {
      return (
        (Tt = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (((bt = null), we == null || !we.isActive())) {
            we = null;
            return;
          }
          o("WALogger").LOG(
            _e ||
              (_e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Shutting down WASM pthread",
              ])),
          );
          var e = we;
          ((we = null),
            yield e.shutdown(),
            o("WALogger").LOG(
              fe ||
                (fe = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] WASM pthread shutdown complete",
                ])),
            ));
        })),
        Tt.apply(this, arguments)
      );
    }
    ((l.sendWAWebVoipDataToRelay = We),
      (l.mergeWorkerStats = qe),
      (l.handleDataChannelOpened = Ue),
      (l.handleDataChannelErrored = ze),
      (l.cleanupAllConnections = Qe),
      (l.handleRelayListUpdate = Ze),
      (l.initDataChannelWorker = Rt),
      (l.isDataChannelThreadActive = Et),
      (l.getDataChannelThread = kt),
      (l.stopDataChannelWorker = It));
  },
  98,
);
