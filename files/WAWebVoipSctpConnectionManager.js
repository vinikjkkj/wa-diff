__d(
  "WAWebVoipSctpConnectionManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebReleaseToEventLoop",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpDataChannelThread",
    "WAWebVoipSctpDiagnostics",
    "WAWebVoipSctpStatsInstrumentation",
    "WAWebVoipStackInterface",
    "WAWebVoipTsLogger",
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
      ve = new Set([
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
      Se = {
        CLOSE_OLD_CONNECTION_BEFORE_CALL_END: !1,
        FAUX_WEB_CLIENT_RELAY_PORT: 3478,
        TRUE_WEB_CLIENT_RELAY_PORT: 3480,
        USE_AUTH_TOKEN_FOR_ICE: !0,
      },
      Re = 1e4,
      Le = 1e4;
    function Ee() {
      return 2 * Re;
    }
    var ke = 500,
      Ie = 256 * 1024,
      Te = 3,
      De = [1e3, 2e3, 3e3],
      xe = new Map(),
      $e = new Set(),
      Pe = 500,
      Ne = new Map(),
      Me = !1,
      we = 0,
      Ae = new Map();
    function Fe() {
      var e = [];
      for (var t of Ae) {
        var n = t[0],
          r = t[1];
        r.peerConnection != null &&
          r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
          e.push({ connectionId: n, peerConnection: r.peerConnection });
      }
      return e;
    }
    var Oe = new Map(),
      Be = null;
    function We(t, n, r, a) {
      var i,
        l,
        c = Be;
      if (c == null || !c.isActive()) return !1;
      var d = Oe.get(r),
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
    function qe(e) {
      var t = Ae.get(e);
      if (t)
        try {
          pt(e);
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
    async function Ue(e, t) {
      var n = "wa-web-call",
        r = Ae.get(e.id);
      if (
        r &&
        (r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
          r.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
      ) {
        Ye(e.id);
        return;
      }
      (r &&
        r.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
        dt(e.id),
        await ot(e, n));
    }
    function Ve(e, t, n) {
      var o = r("justknobx")._("1929");
      vt(e, t, o ? n : Se.TRUE_WEB_CLIENT_RELAY_PORT);
    }
    function He(e, t) {
      var n = Ae.get(e);
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
    function Ge(e) {
      var t = Ae.get(e);
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
          Fe,
          function () {
            return Be;
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
        Ct(e),
        Ye(e));
    }
    function ze(e, t, n, r) {
      var a,
        i = e.id;
      if (
        !(
          e.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
          e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed
        )
      ) {
        var l = Oe.get(i),
          s = (a = xe.get(i)) != null ? a : 0;
        if (!Me && l != null && s < Te) {
          var u;
          xe.set(i, s + 1);
          var c = (u = De[s]) != null ? u : 0;
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
            Te,
            c,
          ),
            mt(e, n));
          var d = function (n) {
            (n != null && $e.delete(n),
              !Me &&
                Ue(l, !1).catch(function (e) {
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
            $e.add(m);
          } else d(null);
        } else
          (Me ||
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
                  Te,
                )),
            mt(e, t));
      }
    }
    function je(e) {
      var t = Ae.get(e);
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
        ze(
          t,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        ));
    }
    function Ke(e) {
      ze(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function Qe(e, t) {
      if (t === "no_first_response_timeout" || t === "rx_stall_timeout") {
        var n = Ae.get(e);
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
                je(e);
              }));
          return;
        }
      }
      je(e);
    }
    function Xe(e) {
      return new Promise(function (t) {
        Ne.set(e, t);
      });
    }
    function Ye(e) {
      var t = Ne.get(e);
      t != null && (t(), Ne.delete(e));
    }
    async function Je() {
      ((Me = !0), we++);
      try {
        o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("relay");
        var e = Array.from(Ae.keys());
        (o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Cleaning up ",
              " connections",
            ])),
          e.length,
        ),
          await Tt());
        for (var t of e) qe(t);
        (Oe.clear(),
          o("WAWebVoipTsLogger").cleanup(),
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] All connections and relay state cleared",
              ])),
          ));
      } finally {
        for (var n of $e) window.clearTimeout(n);
        $e.clear();
        for (var r of Ne.values()) r();
        (Ne.clear(), xe.clear(), (Me = !1));
      }
    }
    async function Ze(e) {
      var t = we;
      o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] Staggered creation: ",
            " connections",
          ])),
        e.length,
      );
      for (var n = 0; n < e.length; n++) {
        if (Me || we !== t) return;
        var r = e[n];
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Starting staggered connection ",
              "/",
              ": ",
              "",
            ])),
          n + 1,
          e.length,
          r.id,
        );
        var a = Xe(r.id);
        if ((Ue(r, !1), n < e.length - 1)) {
          var i = new Promise(function (e) {
            window.setTimeout(e, Pe);
          });
          await Promise.race([a, i]);
        }
      }
    }
    async function et(e) {
      ((Re = r("justknobx")._("5402") || 1e4),
        (Le = r("justknobx")._("5558") || Re),
        we++);
      var t = r("justknobx")._("1929"),
        n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e, {
          portOverride: function (n) {
            return t ? n : Se.TRUE_WEB_CLIENT_RELAY_PORT;
          },
        });
      for (var a of Oe) {
        var i = a[0],
          l = a[1];
        n.has(i) || (Se.CLOSE_OLD_CONNECTION_BEFORE_CALL_END && qe(i));
      }
      var s = [];
      for (var u of n) {
        var c = u[0],
          d = u[1];
        (!Oe.has(c) || !Ae.has(c)) && s.push(d);
      }
      if (((Oe = n), s.length > 0)) {
        var m = r("justknobx")._("2412");
        m
          ? await Ze(s)
          : await Promise.all(
              s.map(function (e) {
                return Ue(e, !1);
              }),
            );
      }
    }
    function tt(e, t, n) {
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
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Data channel error for ",
                  ":",
                ])),
              t.id,
            );
            var n = Ae.get(t.id);
            n &&
              ze(
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
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] DC transfer disabled for ",
                  "",
                ])),
              n.id,
            )
          : (s = We(l, t, n.id, r)),
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
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE state->",
              " ",
              "",
              "",
            ])),
          n,
          t,
          r,
        );
        var a = Ae.get(t);
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
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] DTLS stall: ICE connected ",
                      "ms ago (threshold=",
                      "ms) but PC state is '",
                      "' for ",
                      "",
                      "",
                    ])),
                  i,
                  Re,
                  n,
                  t,
                  r,
                ),
                  a.relayPort === 3478
                    ? o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3478()
                    : o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3480(),
                  ze(a, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, Re))),
          n === "failed" &&
            (a.relayPort === 3478
              ? o("WAWebCoreActionsODS").logCallIceFailedPort3478()
              : o("WAWebCoreActionsODS").logCallIceFailedPort3480(),
            Ke(a)));
      }),
        (e.onconnectionstatechange = function () {
          var n = e.connectionState;
          o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] PC state->",
                " ",
                "",
                "",
              ])),
            n,
            t,
            r,
          );
          var a = Ae.get(t);
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
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
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
    async function ot(e, t) {
      var n = Ae.get(e.id);
      n && n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None
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
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
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
          Ae.set(n.id, n));
      var a = n;
      n.connectionTimeout = window.setTimeout(function () {
        a.state ===
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          (o("WALogger").WARN(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] Connection timeout (",
                "ms) in Connecting state for ",
                "",
              ])),
            Ee(),
            e.id,
          ),
          mt(a, "connection_timeout"));
      }, Ee());
      var i = !1;
      if (
        (o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() ||
          (i = await Et()),
        Me ||
          (r("justknobx")._("360") && ve.has(e.ip) && (e.port = 3478),
          o("WAWebVoipTsLogger").logIceConnectionStart({
            relayId: e.relayId,
            ip: e.ip,
            port: e.port,
          }),
          e.port === 3478
            ? o("WAWebCoreActionsODS").logCallIceStartedPort3478()
            : o("WAWebCoreActionsODS").logCallIceStartedPort3480(),
          await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
          Me))
      )
        return (dt(e.id), Ye(e.id), !1);
      if (ct(n))
        return (
          o("WALogger").WARN(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Aborting stale connect for ",
                " after yield",
              ])),
            e.id,
          ),
          ut(n),
          Ye(e.id),
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
            await RTCPeerConnection.generateCertificate({
              name: "ECDSA",
              namedCurve: "P-256",
            }),
          ]),
          ct(n))
        )
          return (
            o("WALogger").WARN(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Aborting stale connect for ",
                  " after certificate generation",
                ])),
              e.id,
            ),
            ut(n),
            Ye(e.id),
            !1
          );
        var d = Date.now(),
          m = new RTCPeerConnection(c),
          p = Date.now() - d;
        (p > ke &&
          o("WALogger").WARN(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
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
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE gathering complete for ",
                    "",
                  ])),
                e.id,
              );
          }),
          rt(m, e.id),
          nt(m, n, e));
        var _ = Date.now(),
          f = await m.createOffer();
        await m.setLocalDescription(f);
        var g = f.sdp || "",
          h = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(g, e);
        if ((await m.setRemoteDescription({ sdp: h, type: "answer" }), ct(n)))
          return (
            o("WALogger").WARN(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Aborting stale connect for ",
                  " after setRemoteDescription",
                ])),
              e.id,
            ),
            ut(n),
            st(n),
            lt(m),
            m.close(),
            (n.peerConnection = null),
            Ye(e.id),
            !1
          );
        var y = Date.now() - _;
        y > ke &&
          o("WALogger").WARN(
            F ||
              (F = babelHelpers.taggedTemplateLiteralLoose([
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
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
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
            B ||
              (B = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] createDataChannel failed: ",
                "",
              ])),
            e,
          ),
          mt(n, "channel_creation_failed"),
          !1
        );
      }
    }
    function at(e) {
      var t,
        n,
        r = e.stats,
        a = "N/A";
      r.connectionReadyTime !== 0 &&
        e.connectionStartTime > 0 &&
        (a = (r.connectionReadyTime - e.connectionStartTime).toString());
      var i =
        (t = (n = Oe.get(e.id)) == null ? void 0 : n.name) != null ? t : "N/A";
      (o("WALogger").LOG(
        W ||
          (W = babelHelpers.taggedTemplateLiteralLoose([
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
          q ||
            (q = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] stats bufB=",
              " bindT=",
              "ms",
            ])),
          e.packetBuffer.bufferedBytes,
          a,
        ));
    }
    function it(e) {
      var t;
      ((e.onopen = t = r("WAWebNoop")),
        (e.onclose = t),
        (e.onmessage = t),
        (e.onerror = t));
    }
    function lt(e) {
      ((e.onicecandidate = r("WAWebNoop")),
        (e.oniceconnectionstatechange = r("WAWebNoop")),
        (e.onconnectionstatechange = r("WAWebNoop")));
    }
    function st(e) {
      var t = e.channel;
      t != null && (it(t), t.close(), (e.channel = null));
    }
    function ut(e) {
      (e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null)),
        e.dtlsStallTimeout != null &&
          (window.clearTimeout(e.dtlsStallTimeout),
          (e.dtlsStallTimeout = null)));
    }
    function ct(e) {
      return Me || Ae.get(e.id) !== e;
    }
    function dt(e) {
      var t = Ae.get(e);
      if (t) {
        (ut(t), st(t));
        var n = t.peerConnection;
        (n && (lt(n), n.close(), (t.peerConnection = null)),
          at(t),
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
            Ae.delete(e),
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionFromRttStats(
              e,
            ),
            Ae.size === 0 &&
              o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
                "relay",
              )));
      }
    }
    function mt(e, t) {
      e &&
        e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
        e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
        (o("WALogger").LOG(
          U ||
            (U = babelHelpers.taggedTemplateLiteralLoose([
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
        dt(e.id),
        Ye(e.id));
    }
    function pt(e) {
      var t = Ae.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        dt(e),
        Ye(e));
    }
    async function _t(e) {
      if (e.isReconnecting !== !0) {
        if (
          (o("WALogger").LOG(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Restarting ICE process for connection ",
                "",
              ])),
            e.id,
          ),
          !e.hasNonStunPacketSent)
        ) {
          o("WALogger").WARN(
            H ||
              (H = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE restart skip: no non-STUN sent ",
                "",
              ])),
            e.id,
          );
          return;
        }
        var t = Oe.get(e.id);
        if (!t) {
          o("WALogger").WARN(
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
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
            z ||
              (z = babelHelpers.taggedTemplateLiteralLoose([
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
            j ||
              (j = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Closing previous connection for ",
                "",
              ])),
            e.id,
          ),
            window.clearTimeout(e.connectionTimeout),
            (e.connectionTimeout = null),
            st(e));
          var i = e.peerConnection;
          i && (lt(i), i.close());
        }
        try {
          ((e.hasReceivedFirstPacket = !1), (e.sentMedia = !1));
          var l = {};
          r("justknobx")._("404") &&
            (l.certificates = [
              await RTCPeerConnection.generateCertificate({
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
            rt(s, e.id, "(ICE restart)"),
            nt(s, e, t, "ICE restart"),
            (e.packetBuffer = a),
            Ae.set(e.id, e));
          var u = await s.createOffer({ iceRestart: !1 });
          await s.setLocalDescription(u);
          var c = u.sdp || "",
            d = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(c, t);
          (await s.setRemoteDescription({ sdp: d, type: "answer" }),
            o("WALogger").LOG(
              K ||
                (K = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] ICE restart completed for connection ",
                  "",
                ])),
              e.id,
            ));
        } catch (t) {
          (o("WALogger").ERROR(
            Q ||
              (Q = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] ICE restart failed for connection ",
                ": ",
                "",
              ])),
            e.id,
            t,
          ),
            mt(e, "ice_restart_failed"));
        }
      }
    }
    function ft(e, t, n) {
      var r = Ae.get(t);
      if (r) {
        var a, i;
        if (r.channel == null || r.channel !== n) {
          o("WALogger").WARN(
            X ||
              (X = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              Y ||
                (Y = babelHelpers.taggedTemplateLiteralLoose([
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
            Fe,
            function () {
              return Be;
            },
          ));
        var l =
            r.connectionStartTime > 0 ? Date.now() - r.connectionStartTime : 0,
          s =
            (a = (i = Oe.get(t)) == null ? void 0 : i.name) != null ? a : "N/A";
        (o("WALogger").LOG(
          J ||
            (J = babelHelpers.taggedTemplateLiteralLoose([
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
            Z ||
              (Z = babelHelpers.taggedTemplateLiteralLoose([
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
          Ct(t),
          Ye(t));
      }
    }
    function gt(e, t) {
      (o("WALogger").LOG(
        ee ||
          (ee = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] DataChannel closed for ",
            "",
          ])),
        t,
      ),
        pt(t));
    }
    async function ht(e, t) {
      var n = Ae.get(t.id),
        a = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        );
      if (a.type === "web" && n) {
        var i,
          l = await o("WAWebVoipRelayConnectionUtils").dataToArrayBuffer(
            e.data,
          );
        if (l == null) {
          o("WALogger").ERROR(
            te ||
              (te = babelHelpers.taggedTemplateLiteralLoose([
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
          Se.TRUE_WEB_CLIENT_RELAY_PORT
            ? (u = Se.TRUE_WEB_CLIENT_RELAY_PORT)
            : (u = Se.FAUX_WEB_CLIENT_RELAY_PORT);
        await a.handleOnTransportMessage(l, t.ip, u);
      } else
        o("WALogger").WARN(
          ne ||
            (ne = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] connection not found on sctp message for ",
              "",
            ])),
          t.id,
        );
    }
    function yt(e, t) {
      var n = o("WAWebVoipRelayConnectionUtils").inspectPacketType(t);
      if (n !== o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN)
        var r = o("WAWebVoipRelayConnectionUtils").bufferPacket(
          e.packetBuffer,
          t,
          e.stats,
          Ie,
        );
    }
    function Ct(e) {
      var t = Ae.get(e);
      if (
        !(
          !t ||
          t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
          !t.channel
        )
      ) {
        for (var n = t.channel; t.packetBuffer.packets.length > 0; ) {
          var r = Be,
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
    function bt(e) {
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
              re ||
                (re = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Early packet connection timeout (",
                  "ms) for ",
                  "",
                ])),
              Ee(),
              e,
            ),
            mt(t, "early_packet_timeout"));
        }, Ee())),
        Ae.set(e, t),
        t
      );
    }
    function vt(e, t, n) {
      var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(t, n),
        a = Ae.get(r);
      (a == null &&
        (o("WALogger").LOG(
          oe ||
            (oe = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] conn not found, creating early ",
              "",
            ])),
          r,
        ),
        (a = bt(r))),
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
        if (u > Le) {
          (o("WALogger").LOG(
            ae ||
              (ae = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] STUN_ALLOC no rx ",
                "ms>",
                "ms, ICE restart ",
                "",
              ])),
            u,
            Le,
            r,
          ),
            o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(
              a.packetBuffer,
            ),
            o("WAWebVoipRelayConnectionUtils").bufferPacket(
              a.packetBuffer,
              i,
              a.stats,
              Ie,
            ),
            _t(a));
          return;
        }
      }
      if (a.channelTransferred) {
        var c = Be;
        if (c == null || !c.isActive())
          (o("WALogger").WARN(
            ie ||
              (ie = babelHelpers.taggedTemplateLiteralLoose([
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
              le ||
                (le = babelHelpers.taggedTemplateLiteralLoose([
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
        yt(a, i);
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
      yt(a, i);
    }
    var St = null,
      Rt = null;
    function Lt() {
      if (Rt != null) return Rt;
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
          (Rt = !0));
      } catch (e) {
        Rt = !1;
      } finally {
        var r;
        (r = e) == null || r.close();
      }
      return (
        o("WALogger").LOG(
          se ||
            (se = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] RTCDataChannel transfer supported: ",
              "",
            ])),
          String(Rt),
        ),
        Rt === !0
      );
    }
    async function Et() {
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
      if (!Lt())
        return (
          o("WALogger").LOG(
            de ||
              (de = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] no RTCDataChannel transfer support, skip",
              ])),
          ),
          !1
        );
      if (Be != null && Be.isActive())
        return (
          o("WALogger").LOG(
            me ||
              (me = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Thread already active, reusing existing pthread",
              ])),
          ),
          !0
        );
      if (St != null) {
        o("WALogger").LOG(
          pe ||
            (pe = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] Awaiting existing pthread creation promise",
            ])),
        );
        try {
          var t, n;
          return (
            (Be = await St),
            o("WALogger").LOG(
              _e ||
                (_e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Existing promise resolved, thread active: ",
                  "",
                ])),
              String(
                (t = (n = Be) == null ? void 0 : n.isActive()) != null ? t : !1,
              ),
            ),
            Be != null && Be.isActive()
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
        (St = r("WAWebVoipSctpDataChannelThread").create()));
      try {
        var a, i, l;
        Be = await St;
        var s = r("justknobx")._("1929");
        return (
          (a = Be) == null || a.setRemoveRelayPortOverride(s),
          (i = Be) == null || i.setSctpTimeoutMs(Re),
          o("WALogger").LOG(
            he ||
              (he = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] WASM pthread created successfully",
              ])),
          ),
          (l = Be) == null || l.ping(),
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
          (St = null),
          !1
        );
      }
    }
    function kt() {
      return Be != null && Be.isActive();
    }
    function It() {
      return Be != null && Be.isActive() ? Be : null;
    }
    async function Tt() {
      if (((St = null), Be == null || !Be.isActive())) {
        Be = null;
        return;
      }
      o("WALogger").LOG(
        Ce ||
          (Ce = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [DCThread] Shutting down WASM pthread",
          ])),
      );
      var e = Be;
      ((Be = null),
        await e.shutdown(),
        o("WALogger").LOG(
          be ||
            (be = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] WASM pthread shutdown complete",
            ])),
        ));
    }
    ((l.sendWAWebVoipDataToRelay = Ve),
      (l.mergeWorkerStats = He),
      (l.handleDataChannelOpened = Ge),
      (l.handleDataChannelErrored = Qe),
      (l.cleanupAllConnections = Je),
      (l.handleRelayListUpdate = et),
      (l.initDataChannelWorker = Et),
      (l.isDataChannelThreadActive = kt),
      (l.getDataChannelThread = It),
      (l.stopDataChannelWorker = Tt));
  },
  98,
);
