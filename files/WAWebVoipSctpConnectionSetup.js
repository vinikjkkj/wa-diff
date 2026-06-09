__d(
  "WAWebVoipSctpConnectionSetup",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpOdsPortLogging",
    "asyncToGeneratorRuntime",
    "err",
    "justknobx",
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
      R = null;
    function L(e) {
      R = e;
    }
    function E() {
      if (R == null) throw r("err")("SCTP setup callbacks not registered");
      return R;
    }
    function k(t, n, r, a) {
      var i,
        l,
        c = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
      if (c == null) return !1;
      var d = o("WAWebVoipSctpConnectionState").getCurrentRelayState().get(r),
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
    function I(e, t, n) {
      if (!n) {
        var r = E();
        ((e.onopen = function (n) {
          r.onChannelOpen(n, t.id, e);
        }),
          (e.onclose = function (e) {
            r.onChannelClose(e, t.id);
          }),
          (e.onmessage = function (e) {
            r.onChannelMessage(e, t);
          }),
          (e.onerror = function (e) {
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Data channel error for ",
                  ":",
                ])),
              t.id,
            );
            var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id);
            n &&
              r.onSamePathReconnect(
                n,
                "data_channel_error",
                "data_channel_error_reconnecting",
                "[SCTP]",
              );
          }));
      }
    }
    function T(e, t, n, r) {
      var a = babelHelpers.extends(
          {},
          o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS,
          { priority: "high" },
        ),
        i = e.createDataChannel("pre-negotiated", a);
      i.binaryType = "arraybuffer";
      var l = !1;
      return (
        o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled()
          ? o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] DC transfer disabled for ",
                  "",
                ])),
              n.id,
            )
          : (l = k(i, t, n.id, r)),
        (t.channel = i),
        I(i, n, l),
        i
      );
    }
    function D(e, t, n) {
      var r = n != null ? " " + n : "",
        a = E();
      ((e.oniceconnectionstatechange = function () {
        var n = e.iceConnectionState;
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE state->",
              " ",
              "",
              "",
            ])),
          n,
          t,
          r,
        );
        var i = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
        if (i) {
          if (n === "connected") {
            ((i.iceConnectedTime = Date.now()),
              o("WAWebVoipSctpOdsPortLogging").logIceConnectedForPort(
                i.relayPort,
              ),
              o("WAWebVoipSctpOdsPortLogging").logDtlsStartedForPort(
                i.relayPort,
              ),
              i.dtlsStallTimeout != null &&
                window.clearTimeout(i.dtlsStallTimeout));
            var l = o("WAWebVoipSctpConnectionState").getSctpTimeoutMs();
            i.dtlsStallTimeout = window.setTimeout(function () {
              i.dtlsStallTimeout = null;
              var n = e.connectionState;
              if (n !== "connected") {
                var s = Date.now() - i.iceConnectedTime;
                (o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] DTLS stall: ICE connected ",
                      "ms ago (threshold=",
                      "ms) but PC state is '",
                      "' for ",
                      "",
                      "",
                    ])),
                  s,
                  l,
                  n,
                  t,
                  r,
                ),
                  o("WAWebVoipSctpOdsPortLogging").logDtlsFailedStallForPort(
                    i.relayPort,
                  ),
                  a.onSamePathReconnect(
                    i,
                    "dtls_stall",
                    "dtls_stall_reconnecting",
                    "[SCTP]",
                  ));
              }
            }, l);
          }
          n === "failed" &&
            (o("WAWebVoipSctpOdsPortLogging").logIceFailedForPort(i.relayPort),
            a.onIceConnectionFailed(i));
        }
      }),
        (e.onconnectionstatechange = function () {
          var n = e.connectionState;
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] PC state->",
                " ",
                "",
                "",
              ])),
            n,
            t,
            r,
          );
          var a = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
          if (a) {
            if (
              n === "connected" &&
              a.dtlsStallTimeout != null &&
              (window.clearTimeout(a.dtlsStallTimeout),
              (a.dtlsStallTimeout = null),
              o("WAWebVoipSctpOdsPortLogging").logDtlsConnectedForPort(
                a.relayPort,
              ),
              a.iceConnectedTime > 0)
            ) {
              var i = Date.now() - a.iceConnectedTime;
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
              o("WAWebVoipSctpOdsPortLogging").logDtlsFailedPcFailedForPort(
                a.relayPort,
              );
          }
        }));
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isReconnecting !== !0) {
            if (
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Restarting ICE process for connection ",
                    "",
                  ])),
                e.id,
              ),
              !e.hasNonStunPacketSent)
            ) {
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no non-STUN sent ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var t = o("WAWebVoipSctpConnectionState")
              .getCurrentRelayState()
              .get(e.id);
            if (!t) {
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no relay info ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            if (!e.peerConnection) {
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no PC ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var n = e.packetBuffer,
              a = E();
            if (
              ((e.isReconnecting = !0),
              (e.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Connecting),
              e.peerConnection)
            ) {
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Closing previous connection for ",
                    "",
                  ])),
                e.id,
              ),
                window.clearTimeout(e.connectionTimeout),
                (e.connectionTimeout = null),
                a.closeConnectionDataChannel(e));
              var i = e.peerConnection;
              i && (a.detachPeerConnectionHandlers(i), i.close());
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
                D(s, e.id, "(ICE restart)"),
                T(s, e, t, "ICE restart"),
                (e.packetBuffer = n),
                o("WAWebVoipSctpConnectionState").sctpConnections.set(e.id, e));
              var u = yield s.createOffer({ iceRestart: !1 });
              yield s.setLocalDescription(u);
              var c = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(
                u.sdp || "",
                t,
              );
              (yield s.setRemoteDescription({ sdp: c, type: "answer" }),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] ICE restart completed for connection ",
                      "",
                    ])),
                  e.id,
                ));
            } catch (t) {
              (o("WALogger").ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart failed for connection ",
                    ": ",
                    "",
                  ])),
                e.id,
                t,
              ),
                a.failConnection(e, "ice_restart_failed"));
            }
          }
        })),
        $.apply(this, arguments)
      );
    }
    ((l.setSctpSetupCallbacks = L),
      (l.tryTransferChannelToThread = k),
      (l.createAndSetupDataChannel = T),
      (l.setupPeerConnectionStateHandlers = D),
      (l.restartIceProcess = x));
  },
  98,
);
