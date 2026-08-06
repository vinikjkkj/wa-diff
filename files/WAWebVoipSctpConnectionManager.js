__d(
  "WAWebVoipSctpConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebReleaseToEventLoop",
    "WAWebVoipGatingUtils",
    "WAWebVoipRelayConnectQpl",
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
    "WAWebVoipStackInterface",
    "WAWebVoipTransportFallbackTracker",
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
      re,
      oe = 1e4,
      ae = 1e4;
    function ie() {
      return 2 * oe;
    }
    var le = !1,
      se = 0,
      ue = new Set();
    function ce(e) {
      (o("WAWebCoreActionsODS").logCallDataChannelRelayError(),
        e === "no_first_response_timeout"
          ? o(
              "WAWebCoreActionsODS",
            ).logCallDataChannelRelayErrorNoFirstResponseTimeout()
          : e === "remote_close"
            ? o("WAWebCoreActionsODS").logCallDataChannelRelayErrorRemoteClose()
            : e === "rx_stall_timeout"
              ? o(
                  "WAWebCoreActionsODS",
                ).logCallDataChannelRelayErrorRxStallTimeout()
              : o("WAWebCoreActionsODS").logCallDataChannelRelayErrorOnError());
    }
    function de(e) {
      ue.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_succeeded",
        );
    }
    function me(e) {
      ue.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_exhausted",
        );
    }
    function pe(t, n, r, a) {
      var i,
        l,
        c,
        d = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
      if (d == null || !d.isActive()) return !1;
      var m =
          (i = o("WAWebVoipSctpConnectionState").currentRelayState.get(r)) !=
          null
            ? i
            : n.relayConnectionInfo,
        p = (l = m == null ? void 0 : m.ip) != null ? l : "0.0.0.0",
        _ = (c = m == null ? void 0 : m.originalPort) != null ? c : 0,
        f = a != null ? " (" + a + ")" : "";
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [DCThread] Transferring channel for ",
            "",
            "",
          ])),
        r,
        f,
      );
      var g = d.transferChannel(t, r, p, _, !1);
      return (
        g
          ? ((n.channelTransferred = !0),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Channel ",
                  " transferred to pthread",
                  "",
                ])),
              r,
              f,
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
              f,
            )),
        g
      );
    }
    function _e(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t)
        try {
          Ve(e);
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
    function fe(e, t) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = "wa-web-call",
            r = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
          if (
            r &&
            (r.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
              r.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
          ) {
            Ee(e.id);
            return;
          }
          (r &&
            r.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
            qe(e.id),
            yield Fe(e, n));
        })),
        ge.apply(this, arguments)
      );
    }
    function he(e, t, n) {
      var a = r("justknobx")._("1929");
      o("WAWebVoipSctpSendData").sendData({
        callbacks: {
          failConnection: Ue,
          getIceRestartRxInactivityMs: function () {
            return ae;
          },
          getSctpConnectionTimeoutMs: function () {
            return ie();
          },
          restartIceProcess: He,
        },
        data_: e,
        ip: t,
        port: a
          ? n
          : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT,
      });
    }
    function ye(e, t) {
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
    function Ce(e) {
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
      t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
        (t.stats.connectionReadyTime = Date.now()),
        (t.isReconnecting = !1),
        de(e),
        o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened(),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] Connection ",
              " state updated to Open (notified from pthread)",
            ])),
          e,
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
        Ee(e));
    }
    function be(e, t, n, r) {
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
          s = e.relayConnectionInfo,
          u = l == null && s != null,
          c = l != null ? l : s,
          d =
            (a = o(
              "WAWebVoipSctpConnectionState",
            ).samePathReconnectAttempts.get(i)) != null
              ? a
              : 0;
        if (
          !le &&
          c != null &&
          d <
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS
        ) {
          var m;
          (u &&
            !ue.has(i) &&
            (ue.add(i),
            o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
              "transport_failed",
            )),
            o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.set(
              i,
              d + 1,
            ));
          var h =
            (m = o("WAWebVoipSctpConnectionManagerConstants")
              .SAME_PATH_RECONNECT_BACKOFF_MS[d]) != null
              ? m
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
            d + 1,
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS,
            h,
          ),
            Ue(e, n, !0));
          var y = function (n) {
            if (
              (n != null &&
                o(
                  "WAWebVoipSctpConnectionState",
                ).pendingReconnectTimeouts.delete(n),
              !le)
            ) {
              var e = o("WAWebVoipSctpConnectionState").currentRelayState.get(
                  i,
                ),
                a = e == null;
              (a
                ? (ue.has(i) ||
                    (ue.add(i),
                    o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                      "transport_failed",
                    )),
                  o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                    "reconnect_attempted",
                  ))
                : ue.delete(i),
                fe(e != null ? e : c, !1).catch(function (e) {
                  (a && me(i),
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
                    ));
                }));
            }
          };
          if (h > 0) {
            var C = window.setTimeout(function () {
              return y(C);
            }, h);
            o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.add(C);
          } else y(null);
        } else
          (le ||
            (c == null
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
                  d,
                )
              : (u && me(i),
                o("WALogger").LOG(
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
                  d,
                  o("WAWebVoipSctpConnectionManagerConstants")
                    .MAX_SAME_PATH_RECONNECT_ATTEMPTS,
                ))),
            Ue(e, t));
      }
    }
    function ve(e) {
      var t = e.id;
      o("WAWebVoipSctpConnectionState").sctpConnections.get(t) === e &&
        be(
          e,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        );
    }
    function Se(e) {
      be(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function Re(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (n == null) {
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
      if (
        (o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] Connection ",
              " errored (notified from pthread)",
            ])),
          e,
        ),
        ce(t),
        (t === "no_first_response_timeout" || t === "rx_stall_timeout") &&
          n.peerConnection != null)
      ) {
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
            .logPeerConnectionStatsForError({
              connectionId: e,
              errorReason: t,
              peerConnection: n.peerConnection,
              workerStats: n.stats,
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] Failed to collect getStats for ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t));
            })
            .finally(function () {
              ve(n);
            }));
        return;
      }
      ve(n);
    }
    function Le(e) {
      return new (re || (re = n("Promise")))(function (t) {
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.set(e, t);
      });
    }
    function Ee(e) {
      var t = o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.get(
        e,
      );
      t != null &&
        (t(),
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.delete(e));
    }
    function ke() {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((le = !0), se++);
          try {
            var e = Array.from(
              o("WAWebVoipSctpConnectionState").sctpConnections.keys(),
            );
            (o("WALogger").LOG(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield o(
                "WAWebVoipSctpDataChannelThreadManager",
              ).stopDataChannelWorker());
            for (var t of e) _e(t);
            (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
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
              ue.clear(),
              o("WAWebVoipRelayConnectQpl").resetVoipRelayConnectQpl(),
              (le = !1));
          }
        })),
        Ie.apply(this, arguments)
      );
    }
    function Te(e) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = se;
          (o("WALogger").LOG(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          ),
            yield xe(e, 0, t));
        })),
        De.apply(this, arguments)
      );
    }
    function xe(e, t, n) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            if (!(t >= e.length) && !(le || se !== r)) {
              var a = e[t];
              if (a != null) {
                o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Starting staggered connection ",
                      "/",
                      ": ",
                      "",
                    ])),
                  t + 1,
                  e.length,
                  a.id,
                );
                var i = Le(a.id);
                if ((fe(a, !1), t < e.length - 1)) {
                  var l = new (re || (re = n("Promise")))(function (e) {
                    window.setTimeout(
                      e,
                      o("WAWebVoipSctpConnectionManagerConstants")
                        .PER_CONNECTION_STAGGER_DELAY_MS,
                    );
                  });
                  yield re.race([i, l]);
                }
                yield xe(e, t + 1, r);
              }
            }
          },
        )),
        $e.apply(this, arguments)
      );
    }
    function Pe(e) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          ((oe = r("justknobx")._("5402") || 1e4),
            (ae = r("justknobx")._("5558") || oe),
            se++);
          var t = o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort(),
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
            if (!a.has(l))
              if (
                o("WAWebVoipSctpConnectionManagerConstants")
                  .SctpConnectionConfig.CLOSE_OLD_CONNECTION_BEFORE_CALL_END
              )
                _e(l);
              else {
                var u = o("WAWebVoipSctpConnectionState").sctpConnections.get(
                  l,
                );
                u != null &&
                  u.state !==
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
                  u.state !==
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
                  ((u.relayConnectionInfo = s),
                  o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                    "retained",
                  ));
              }
          }
          var c = [];
          for (var d of a) {
            var m = d[0],
              p = d[1];
            (!o("WAWebVoipSctpConnectionState").currentRelayState.has(m) ||
              !o("WAWebVoipSctpConnectionState").sctpConnections.has(m)) &&
              c.push(p);
          }
          o("WAWebVoipSctpConnectionState").currentRelayState.clear();
          for (var _ of a) {
            var f = _[0],
              g = _[1];
            o("WAWebVoipSctpConnectionState").currentRelayState.set(f, g);
          }
          if (c.length > 0) {
            o("WAWebVoipRelayConnectQpl").maybeStartVoipRelayConnectQpl();
            var h = e.enable_web_relay_connection_stagger === !0;
            h
              ? yield Te(c)
              : yield (re || (re = n("Promise"))).all(
                  c.map(function (e) {
                    return fe(e, !1);
                  }),
                );
          }
        })),
        Ne.apply(this, arguments)
      );
    }
    function Me(e, t, n) {
      (n === void 0 && (n = !1),
        !n &&
          ((e.onopen = function (n) {
            ze(n, t.id, e);
          }),
          (e.onclose = function (e) {
            je(e, t.id);
          }),
          (e.onmessage = function (e) {
            o("WAWebVoipSctpInboundMessageHandler").handleSctpChannelMessage(
              e,
              t,
            );
          }),
          (e.onerror = function (n) {
            o("WALogger").ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Data channel error for ",
                  ":",
                ])),
              t.id,
            );
            var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id);
            if (r != null && r.channel === e) {
              var a = r;
              (ce(),
                be(
                  a,
                  "data_channel_error",
                  "data_channel_error_reconnecting",
                  "[SCTP]",
                ));
            }
          })));
    }
    function we(e, t, n, r) {
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
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] DC transfer disabled for ",
                  "",
                ])),
              n.id,
            )
          : (s = pe(l, t, n.id, r)),
        (t.channel = l),
        Me(l, n, s),
        l
      );
    }
    function Ae(e, t, n) {
      var a = n != null ? " " + n : "";
      ((e.oniceconnectionstatechange = function () {
        var n = e.iceConnectionState;
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
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
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] DTLS stall: ICE connected ",
                      "ms ago (threshold=",
                      "ms) but PC state is '",
                      "' for ",
                      "",
                      "",
                    ])),
                  i,
                  oe,
                  n,
                  t,
                  a,
                ),
                  o(
                    "WAWebVoipSctpOdsPortLogging",
                  ).logCallDtlsFailedStallForPort(r.relayPort),
                  be(r, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, oe))),
          n === "failed" &&
            (o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(
              r.relayPort,
            ),
            Se(r)));
      }),
        (e.onconnectionstatechange = function () {
          var n = e.connectionState;
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
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
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
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
              o("WAWebVoipRelayConnectQpl").endVoipRelayConnectQplSuccess();
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
                        I ||
                          (I = babelHelpers.taggedTemplateLiteralLoose([
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
    function Fe(e, t) {
      return Oe.apply(this, arguments);
    }
    function Oe() {
      return (
        (Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
          n &&
          n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None
            ? ((n.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Connecting),
              (n.connectionStartTime = Date.now()),
              (n.relayConnectionInfo = e),
              (n.relayId = e.relayId),
              (n.relayIp = e.ip),
              (n.relayPort = e.port),
              n.connectionTimeout &&
                (window.clearTimeout(n.connectionTimeout),
                (n.connectionTimeout = null)),
              o("WALogger").LOG(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
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
                relayConnectionInfo: e,
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
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] Connection timeout (",
                    "ms) in Connecting state for ",
                    "",
                  ])),
                ie(),
                e.id,
              ),
              Ue(a, "connection_timeout"));
          }, ie());
          var i = !1;
          if (
            (o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() ||
              (i = yield Ke()),
            le ||
              (o("WAWebVoipTsLogger").logIceConnectionStart({
                relayId: e.relayId,
                ip: e.ip,
                port: e.port,
              }),
              o("WAWebVoipSctpOdsPortLogging").logCallIceStartedForPort(e.port),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              le))
          )
            return (qe(e.id), Ee(e.id), !1);
          if (We(n))
            return (
              o("WALogger").WARN(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
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
              We(n))
            )
              return (
                o("WALogger").WARN(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
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
              Ae(m, e.id),
              we(m, n, e));
            var _ = Date.now(),
              f = yield m.createOffer();
            yield m.setLocalDescription(f);
            var g = f.sdp || "",
              h = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(g, e);
            if (
              (yield m.setRemoteDescription({ sdp: h, type: "answer" }), We(n))
            )
              return (
                o("WALogger").WARN(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
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
                j ||
                  (j = babelHelpers.taggedTemplateLiteralLoose([
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
                K ||
                  (K = babelHelpers.taggedTemplateLiteralLoose([
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
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] createDataChannel failed: ",
                    "",
                  ])),
                e,
              ),
              Ue(n, "channel_creation_failed"),
              !1
            );
          }
        })),
        Oe.apply(this, arguments)
      );
    }
    function Be(e) {
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
        T ||
          (T = babelHelpers.taggedTemplateLiteralLoose([
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
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] stats bufB=",
              " bindT=",
              "ms",
            ])),
          e.packetBuffer.bufferedBytes,
          a,
        ));
    }
    function We(e) {
      return (
        le || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e
      );
    }
    function qe(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t) {
        (o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t),
          o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t));
        var n = t.peerConnection;
        (n &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close(),
          (t.peerConnection = null)),
          Be(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          (t.isReconnecting == null || !t.isReconnecting) &&
            (o(
              "WAWebVoipSctpOdsPortLogging",
            ).logCallSctpConnectionCleanedUpForPort(t.relayPort),
            o("WAWebVoipSctpConnectionState").sctpConnections.delete(e)));
      }
    }
    function Ue(e, t, n) {
      (n === void 0 && (n = !1),
        e &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (n || me(e.id),
          o("WALogger").LOG(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
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
          qe(e.id),
          Ee(e.id)));
    }
    function Ve(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        qe(e),
        Ee(e));
    }
    function He(e) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isReconnecting !== !0) {
            if (
              (o("WALogger").LOG(
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Restarting ICE process for connection ",
                    "",
                  ])),
                e.id,
              ),
              !e.hasNonStunPacketSent)
            ) {
              o("WALogger").WARN(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
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
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
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
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
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
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
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
                Ae(s, e.id, "(ICE restart)"),
                we(s, e, t, "ICE restart"),
                (e.packetBuffer = a),
                o("WAWebVoipSctpConnectionState").sctpConnections.set(e.id, e));
              var u = yield s.createOffer({ iceRestart: !1 });
              yield s.setLocalDescription(u);
              var c = u.sdp || "",
                d = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(c, t);
              (yield s.setRemoteDescription({ sdp: d, type: "answer" }),
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
                Ue(e, "ice_restart_failed"));
            }
          }
        })),
        Ge.apply(this, arguments)
      );
    }
    function ze(e, t, n) {
      var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      if (r) {
        var a, i;
        if (r.channel == null || r.channel !== n) {
          o("WALogger").WARN(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
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
          de(t),
          o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened(),
          r.connectionTimeout &&
            (window.clearTimeout(r.connectionTimeout),
            (r.connectionTimeout = null)));
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
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
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
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
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
          Ee(t));
      }
    }
    function je(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      n &&
        (o("WALogger").LOG(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] DataChannel closed by relay for ",
              ", reconnecting",
            ])),
          t,
        ),
        ce("remote_close"),
        be(n, "remote_close", "remote_close_reconnecting", "[SCTP]"));
    }
    function Ke() {
      return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(
        function () {
          return oe;
        },
      );
    }
    ((l.sendWAWebVoipDataToRelay = he),
      (l.mergeWorkerStats = ye),
      (l.handleDataChannelOpened = Ce),
      (l.handleDataChannelErrored = Re),
      (l.cleanupAllConnections = ke),
      (l.handleRelayListUpdate = Pe),
      (l.initDataChannelWorker = Ke));
  },
  98,
);
