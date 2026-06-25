__d(
  "WAWebVoipSctpConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebReleaseToEventLoop",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpBufferDrain",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipSctpConnectionTeardown",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpDiagnostics",
    "WAWebVoipSctpInboundMessageHandler",
    "WAWebVoipSctpOdsPortLogging",
    "WAWebVoipSctpSendData",
    "WAWebVoipSctpStatsInstrumentation",
    "WAWebVoipStackInterface",
    "WAWebVoipTsLogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      re = 1e4,
      oe = 1e4;
    function ae() {
      return 2 * re;
    }
    var ie = !1,
      le = 0;
    function se() {
      var e = [];
      for (var t of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var n = t[0],
          r = t[1];
        r.peerConnection != null &&
          r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
          e.push({ connectionId: n, peerConnection: r.peerConnection });
      }
      return e;
    }
    function ue(t, n, r, a) {
      var i,
        l,
        c = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
      if (c == null || !c.isActive()) return !1;
      var d = o("WAWebVoipSctpConnectionState").currentRelayState.get(r),
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
    function ce(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t)
        try {
          Fe(e);
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
    function de(e, t) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = "wa-web-call",
            r = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
          if (
            r &&
            (r.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
              r.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
          ) {
            ve(e.id);
            return;
          }
          (r &&
            r.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
            we(e.id),
            yield $e(e, n));
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e, t, n) {
      var a = r("justknobx")._("1929");
      o("WAWebVoipSctpSendData").sendData(
        e,
        t,
        a
          ? n
          : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT,
        {
          failConnection: Ae,
          getIceRestartRxInactivityMs: function () {
            return oe;
          },
          getSctpConnectionTimeoutMs: function () {
            return ae();
          },
          restartIceProcess: Oe,
        },
      );
    }
    function _e(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
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
    function fe(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
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
          se,
          o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread,
        ),
        t.connectionTimeout &&
          (window.clearTimeout(t.connectionTimeout),
          (t.connectionTimeout = null)),
        o("WAWebVoipTsLogger").logIceConnectionComplete({
          relayId: t.relayId,
          ip: t.relayIp,
          port: t.relayPort,
        }),
        o("WAWebVoipSctpBufferDrain").drainBuffer(e),
        ve(e));
    }
    function ge(e, t, n, r) {
      var a,
        i = e.id;
      if (
        !(
          e.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
          e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed
        )
      ) {
        var l = o("WAWebVoipSctpConnectionState").currentRelayState.get(i),
          s =
            (a = o(
              "WAWebVoipSctpConnectionState",
            ).samePathReconnectAttempts.get(i)) != null
              ? a
              : 0;
        if (
          !ie &&
          l != null &&
          s <
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS
        ) {
          var u;
          o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.set(
            i,
            s + 1,
          );
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
            Ae(e, n));
          var d = function (n) {
            (n != null &&
              o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.delete(
                n,
              ),
              !ie &&
                de(l, !1).catch(function (e) {
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
            o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.add(m);
          } else d(null);
        } else
          (ie ||
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
            Ae(e, t));
      }
    }
    function he(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
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
        o("WAWebCoreActionsODS").logCallDataChannelRelayError(),
        ge(
          t,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        ));
    }
    function ye(e) {
      ge(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function Ce(e, t) {
      if (t === "no_first_response_timeout" || t === "rx_stall_timeout") {
        var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
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
                he(e);
              }));
          return;
        }
      }
      he(e);
    }
    function be(e) {
      return new (ne || (ne = n("Promise")))(function (t) {
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.set(e, t);
      });
    }
    function ve(e) {
      var t = o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.get(
        e,
      );
      t != null &&
        (t(),
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.delete(e));
    }
    function Se() {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((ie = !0), le++);
          try {
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
              "relay",
            );
            var e = Array.from(
              o("WAWebVoipSctpConnectionState").sctpConnections.keys(),
            );
            (o("WALogger").LOG(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield o(
                "WAWebVoipSctpDataChannelThreadManager",
              ).stopDataChannelWorker());
            for (var t of e) ce(t);
            (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] All connections and relay state cleared",
                  ])),
              ));
          } finally {
            for (var n of o("WAWebVoipSctpConnectionState")
              .pendingReconnectTimeouts)
              window.clearTimeout(n);
            o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.clear();
            for (var r of o(
              "WAWebVoipSctpConnectionState",
            ).connectionOpenedResolvers.values())
              r();
            (o(
              "WAWebVoipSctpConnectionState",
            ).connectionOpenedResolvers.clear(),
              o(
                "WAWebVoipSctpConnectionState",
              ).samePathReconnectAttempts.clear(),
              (ie = !1));
          }
        })),
        Re.apply(this, arguments)
      );
    }
    function Le(e) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = le;
          o("WALogger").LOG(
            F ||
              (F = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          );
          for (var r = 0; r < e.length; r++) {
            if (ie || le !== t) return;
            var a = e[r];
            o("WALogger").LOG(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Starting staggered connection ",
                  "/",
                  ": ",
                  "",
                ])),
              r + 1,
              e.length,
              a.id,
            );
            var i = be(a.id);
            if ((de(a, !1), r < e.length - 1)) {
              var l = new (ne || (ne = n("Promise")))(function (e) {
                window.setTimeout(
                  e,
                  o("WAWebVoipSctpConnectionManagerConstants")
                    .PER_CONNECTION_STAGGER_DELAY_MS,
                );
              });
              yield ne.race([i, l]);
            }
          }
        })),
        Ee.apply(this, arguments)
      );
    }
    function ke(e) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          ((re = r("justknobx")._("5402") || 1e4),
            (oe = r("justknobx")._("5558") || re),
            le++);
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
          for (var i of o("WAWebVoipSctpConnectionState").currentRelayState) {
            var l = i[0],
              s = i[1];
            a.has(l) ||
              (o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
                .CLOSE_OLD_CONNECTION_BEFORE_CALL_END &&
                ce(l));
          }
          var u = [];
          for (var c of a) {
            var d = c[0],
              m = c[1];
            (!o("WAWebVoipSctpConnectionState").currentRelayState.has(d) ||
              !o("WAWebVoipSctpConnectionState").sctpConnections.has(d)) &&
              u.push(m);
          }
          o("WAWebVoipSctpConnectionState").currentRelayState.clear();
          for (var p of a) {
            var _ = p[0],
              f = p[1];
            o("WAWebVoipSctpConnectionState").currentRelayState.set(_, f);
          }
          if (u.length > 0) {
            var g = e.enable_web_relay_connection_stagger === !0;
            g
              ? yield Le(u)
              : yield (ne || (ne = n("Promise"))).all(
                  u.map(function (e) {
                    return de(e, !1);
                  }),
                );
          }
        })),
        Ie.apply(this, arguments)
      );
    }
    function Te(e, t, n) {
      (n === void 0 && (n = !1),
        !n &&
          ((e.onopen = function (n) {
            We(n, t.id, e);
          }),
          (e.onclose = function (e) {
            qe(e, t.id);
          }),
          (e.onmessage = function (e) {
            o("WAWebVoipSctpInboundMessageHandler").handleSctpChannelMessage(
              e,
              t,
            );
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
            var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id);
            n &&
              ge(
                n,
                "data_channel_error",
                "data_channel_error_reconnecting",
                "[SCTP]",
              );
          })));
    }
    function De(e, t, n, r) {
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
          : (s = ue(l, t, n.id, r)),
        (t.channel = l),
        Te(l, n, s),
        l
      );
    }
    function xe(e, t, n) {
      var a = n != null ? " " + n : "";
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
          a,
        );
        var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
        r &&
          (n === "connected" &&
            ((r.iceConnectedTime = Date.now()),
            o("WAWebVoipSctpOdsPortLogging").logCallIceConnectedForPort(
              r.relayPort,
            ),
            o("WAWebVoipSctpOdsPortLogging").logCallDtlsStartedForPort(
              r.relayPort,
            ),
            r.dtlsStallTimeout != null &&
              window.clearTimeout(r.dtlsStallTimeout),
            (r.dtlsStallTimeout = window.setTimeout(function () {
              r.dtlsStallTimeout = null;
              var n = e.connectionState;
              if (n !== "connected") {
                var i = Date.now() - r.iceConnectedTime;
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
                  re,
                  n,
                  t,
                  a,
                ),
                  o(
                    "WAWebVoipSctpOdsPortLogging",
                  ).logCallDtlsFailedStallForPort(r.relayPort),
                  ge(r, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, re))),
          n === "failed" &&
            (o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(
              r.relayPort,
            ),
            ye(r)));
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
            a,
          );
          var i = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
          if (i) {
            if (
              n === "connected" &&
              i.dtlsStallTimeout != null &&
              (window.clearTimeout(i.dtlsStallTimeout),
              (i.dtlsStallTimeout = null),
              o("WAWebVoipSctpOdsPortLogging").logCallDtlsConnectedForPort(
                i.relayPort,
              ),
              i.iceConnectedTime > 0)
            ) {
              var l = Date.now() - i.iceConnectedTime;
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] DTLS handshake completed in ",
                    "ms for ",
                    "",
                    "",
                  ])),
                l,
                t,
                a,
              );
            }
            if (n === "connected") {
              var s = i.relayIp,
                u = i.relayPort;
              s !== "" &&
                r("justknobx")._("3110") &&
                o("WAWebVoipStackInterface")
                  .getVoipStackInterface()
                  .then(function (e) {
                    if (e != null && e.type === "web")
                      return e.markRelayConnected(s, u);
                  })
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        k ||
                          (k = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [SCTP] markRelayConnected failed for ",
                            "",
                          ])),
                        t,
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("voip_sctp_mark_relay_connected_failed");
                  });
            }
            n === "failed" &&
              o("WAWebVoipSctpOdsPortLogging").logCallDtlsFailedPcFailedForPort(
                i.relayPort,
              );
          }
        }));
    }
    function $e(e, t) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
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
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
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
              o("WAWebVoipSctpConnectionState").sctpConnections.set(n.id, n));
          var a = n;
          n.connectionTimeout = window.setTimeout(function () {
            a.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
              (o("WALogger").WARN(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] Connection timeout (",
                    "ms) in Connecting state for ",
                    "",
                  ])),
                ae(),
                e.id,
              ),
              Ae(a, "connection_timeout"));
          }, ae());
          var i = !1;
          if (
            (o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() ||
              (i = yield Ue()),
            ie ||
              (o("WAWebVoipTsLogger").logIceConnectionStart({
                relayId: e.relayId,
                ip: e.ip,
                port: e.port,
              }),
              o("WAWebVoipSctpOdsPortLogging").logCallIceStartedForPort(e.port),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              ie))
          )
            return (we(e.id), ve(e.id), !1);
          if (Me(n))
            return (
              o("WALogger").WARN(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Aborting stale connect for ",
                    " after yield",
                  ])),
                e.id,
              ),
              o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(n),
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
              Me(n))
            )
              return (
                o("WALogger").WARN(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Aborting stale connect for ",
                      " after certificate generation",
                    ])),
                  e.id,
                ),
                o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(n),
                !1
              );
            var d = Date.now(),
              m = new RTCPeerConnection(c),
              p = Date.now() - d;
            (p >
              o("WAWebVoipSctpConnectionManagerConstants")
                .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
              o("WALogger").WARN(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
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
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] ICE gathering complete for ",
                        "",
                      ])),
                    e.id,
                  );
              }),
              xe(m, e.id),
              De(m, n, e));
            var _ = Date.now(),
              f = yield m.createOffer();
            yield m.setLocalDescription(f);
            var g = f.sdp || "",
              h = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(g, e);
            if (
              (yield m.setRemoteDescription({ sdp: h, type: "answer" }), Me(n))
            )
              return (
                o("WALogger").WARN(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Aborting stale connect for ",
                      " after setRemoteDescription",
                    ])),
                  e.id,
                ),
                o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(n),
                o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(
                  n,
                ),
                o(
                  "WAWebVoipSctpConnectionTeardown",
                ).detachPeerConnectionHandlers(m),
                m.close(),
                (n.peerConnection = null),
                !1
              );
            var y = Date.now() - _;
            y >
              o("WAWebVoipSctpConnectionManagerConstants")
                .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
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
              Ae(n, "channel_creation_failed"),
              !1
            );
          }
        })),
        Pe.apply(this, arguments)
      );
    }
    function Ne(e) {
      var t,
        n,
        r = e.stats,
        a = "N/A";
      r.connectionReadyTime !== 0 &&
        e.connectionStartTime > 0 &&
        (a = (r.connectionReadyTime - e.connectionStartTime).toString());
      var i =
        (t =
          (n = o("WAWebVoipSctpConnectionState").currentRelayState.get(e.id)) ==
          null
            ? void 0
            : n.name) != null
          ? t
          : "N/A";
      (o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
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
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] stats bufB=",
              " bindT=",
              "ms",
            ])),
          e.packetBuffer.bufferedBytes,
          a,
        ));
    }
    function Me(e) {
      return (
        ie || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e
      );
    }
    function we(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t) {
        (o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t),
          o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t));
        var n = t.peerConnection;
        (n &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close(),
          (t.peerConnection = null)),
          Ne(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          (t.isReconnecting == null || !t.isReconnecting) &&
            (o(
              "WAWebVoipSctpOdsPortLogging",
            ).logCallSctpConnectionCleanedUpForPort(t.relayPort),
            o("WAWebVoipSctpConnectionState").sctpConnections.delete(e),
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionFromRttStats(
              e,
            ),
            o("WAWebVoipSctpConnectionState").sctpConnections.size === 0 &&
              o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
                "relay",
              )));
      }
    }
    function Ae(e, t) {
      e &&
        e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
        e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
        (o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Failing (closing) connection for ",
              ", reason: ",
              "",
            ])),
          e.id,
          t,
        ),
        o("WAWebVoipSctpOdsPortLogging").logCallSctpConnectionFailedForPort(
          e.relayPort,
        ),
        e.relayIp !== "" &&
          o("WAWebVoipTsLogger").logIceConnectionFailed(
            { relayId: e.relayId, ip: e.relayIp, port: e.relayPort },
            1,
          ),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        we(e.id),
        ve(e.id));
    }
    function Fe(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        we(e),
        ve(e));
    }
    function Oe(e) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var t = o("WAWebVoipSctpConnectionState").currentRelayState.get(
              e.id,
            );
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
            if (
              ((e.isReconnecting = !0),
              (e.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Connecting),
              e.peerConnection)
            ) {
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
                o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(
                  e,
                ));
              var i = e.peerConnection;
              i &&
                (o(
                  "WAWebVoipSctpConnectionTeardown",
                ).detachPeerConnectionHandlers(i),
                i.close());
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
                xe(s, e.id, "(ICE restart)"),
                De(s, e, t, "ICE restart"),
                (e.packetBuffer = a),
                o("WAWebVoipSctpConnectionState").sctpConnections.set(e.id, e));
              var u = yield s.createOffer({ iceRestart: !1 });
              yield s.setLocalDescription(u);
              var c = u.sdp || "",
                d = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(c, t);
              (yield s.setRemoteDescription({ sdp: d, type: "answer" }),
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
                Ae(e, "ice_restart_failed"));
            }
          }
        })),
        Be.apply(this, arguments)
      );
    }
    function We(e, t, n) {
      var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      if (r) {
        var a, i;
        if (r.channel == null || r.channel !== n) {
          o("WALogger").WARN(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
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
            se,
            o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread,
          ));
        var l =
            r.connectionStartTime > 0 ? Date.now() - r.connectionStartTime : 0,
          s =
            (a =
              (i = o("WAWebVoipSctpConnectionState").currentRelayState.get(
                t,
              )) == null
                ? void 0
                : i.name) != null
              ? a
              : "N/A";
        (o("WALogger").LOG(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
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
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
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
          o("WAWebVoipSctpBufferDrain").drainBuffer(t),
          ve(t));
      }
    }
    function qe(e, t) {
      (o("WALogger").LOG(
        M ||
          (M = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] DataChannel closed for ",
            "",
          ])),
        t,
      ),
        Fe(t));
    }
    function Ue() {
      return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(
        function () {
          return re;
        },
      );
    }
    ((l.sendWAWebVoipDataToRelay = pe),
      (l.mergeWorkerStats = _e),
      (l.handleDataChannelOpened = fe),
      (l.handleDataChannelErrored = Ce),
      (l.cleanupAllConnections = Se),
      (l.handleRelayListUpdate = ke),
      (l.initDataChannelWorker = Ue));
  },
  98,
);
