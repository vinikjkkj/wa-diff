__d(
  "WAWebVoipSctpConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
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
    "WAWebVoipSctpStatsInstrumentation",
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
      oe,
      ae,
      ie,
      le,
      se,
      ue = 8,
      ce = 1e4,
      de = 1e4;
    function me() {
      return 2 * ce;
    }
    var pe = !1;
    function _e(e) {
      return e.includes(":");
    }
    var fe = (function () {
        function e() {
          ((this.$1 = !1), (this.$2 = !1), (this.$3 = !1), (this.$4 = !1));
        }
        var t = e.prototype;
        return (
          (t.markEnteredViaWtFallback = function () {
            this.$1 = !0;
          }),
          (t.recordAttempt = function (t) {
            t !== "" && _e(t) && (this.$3 = !0);
          }),
          (t.recordOpened = function (t) {
            t !== "" && (_e(t) ? (this.$4 = !0) : (this.$2 = !0));
          }),
          (t.isIpv4OnlyRecovery = function () {
            return this.$1 && this.$2 && this.$3 && !this.$4;
          }),
          e
        );
      })(),
      ge = new fe();
    function he() {
      ge.markEnteredViaWtFallback();
    }
    function ye() {
      ge = new fe();
    }
    function Ce() {
      ge.isIpv4OnlyRecovery() &&
        (o("WAWebCoreActionsODS").logCallSctpFallbackIpv4OnlyIpv6Failed(),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] WT fallback recovered on IPv4 only; every IPv6 relay failed",
            ])),
        ));
    }
    var be = 0,
      ve = 0,
      Se = new Set(),
      Re = new Set();
    function Le(e) {
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
    function Ee(e) {
      Se.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_succeeded",
        );
    }
    function ke(e) {
      Se.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_exhausted",
        );
    }
    function Ie() {
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
    function Te(e, t, n, r) {
      var a,
        i,
        l,
        d = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
      if (d == null || !d.isActive()) return !1;
      var m =
          (a = o("WAWebVoipSctpConnectionState").currentRelayState.get(n)) !=
          null
            ? a
            : t.relayConnectionInfo,
        p = (i = m == null ? void 0 : m.ip) != null ? i : "0.0.0.0",
        _ = (l = m == null ? void 0 : m.originalPort) != null ? l : 0,
        f = r != null ? " (" + r + ")" : "";
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [DCThread] Transferring channel for ",
            "",
            "",
          ])),
        n,
        f,
      );
      var g = d.transferChannel({
        channel: e,
        connectionId: n,
        enableStats: o("WAWebABProps").getABPropConfigValue(
          "voip_enable_webrtc_stats_polling",
        ),
        ip: p,
        port: _,
      });
      return (
        g
          ? ((t.channelTransferred = !0),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Channel ",
                  " transferred to pthread",
                  "",
                ])),
              n,
              f,
            ))
          : ((t.channelTransferred = !1),
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Transfer failed for ",
                  "",
                  ", using main-thread handlers",
                ])),
              n,
              f,
            )),
        g
      );
    }
    function De(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t)
        try {
          lt(e);
        } catch (t) {
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Error cleaning up relay connection ",
                ": ",
                "",
              ])),
            e,
            t,
          );
        }
    }
    function xe(e) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = "wa-web-call",
            n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
          if (
            n &&
            (n.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
              n.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
          ) {
            We(e.id);
            return;
          }
          (n &&
            n.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
            at(e.id),
            yield tt(e, t));
        })),
        $e.apply(this, arguments)
      );
    }
    function Pe(e, t, n) {
      var a = r("justknobx")._("1929");
      o("WAWebVoipSctpSendData").sendData({
        callbacks: {
          failConnection: it,
          getIceRestartRxInactivityMs: function () {
            return de;
          },
          getSctpConnectionTimeoutMs: function () {
            return me();
          },
          restartIceProcess: mt,
        },
        data_: e,
        ip: t,
        port: a
          ? n
          : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT,
      });
    }
    function Ne(e, t) {
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
    function Me(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t == null) {
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
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
        Ee(e),
        ge.recordOpened(t.relayIp),
        o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened(),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] Connection ",
              " state updated to Open (notified from pthread)",
            ])),
          e,
        ),
        o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
          "relay",
          Ie,
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
        We(e));
    }
    function we(e, t, n, r) {
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
          !pe &&
          c != null &&
          d <
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS
        ) {
          var m;
          (u &&
            !Se.has(i) &&
            (Se.add(i),
            o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
              "transport_failed",
            )),
            o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.set(
              i,
              d + 1,
            ));
          var p =
            (m = o("WAWebVoipSctpConnectionManagerConstants")
              .SAME_PATH_RECONNECT_BACKOFF_MS[d]) != null
              ? m
              : 0;
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            p,
          ),
            it(e, n, !0));
          var y = function (n) {
            if (
              (n != null &&
                o(
                  "WAWebVoipSctpConnectionState",
                ).pendingReconnectTimeouts.delete(n),
              !pe)
            ) {
              var e = o("WAWebVoipSctpConnectionState").currentRelayState.get(
                  i,
                ),
                a = e == null;
              (a
                ? (Se.has(i) ||
                    (Se.add(i),
                    o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                      "transport_failed",
                    )),
                  o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                    "reconnect_attempted",
                  ))
                : Se.delete(i),
                xe(e != null ? e : c).catch(function (e) {
                  (a && ke(i),
                    o("WALogger").ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
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
          if (p > 0) {
            var C = window.setTimeout(function () {
              return y(C);
            }, p);
            o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.add(C);
          } else y(null);
        } else
          (pe ||
            (c == null
              ? o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ",
                      " No relay info for ",
                      ", cannot same-path reconnect (attempts=",
                      ")",
                    ])),
                  r,
                  i,
                  d,
                )
              : (u && ke(i),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
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
            it(e, t));
      }
    }
    function Ae(e) {
      var t = e.id;
      o("WAWebVoipSctpConnectionState").sctpConnections.get(t) === e &&
        we(
          e,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        );
    }
    function Fe(e) {
      we(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function Oe(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (n == null) {
        o("WALogger").WARN(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] handleDataChannelErrored: connection not found for ",
              "",
            ])),
          e,
        );
        return;
      }
      if (
        (o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] Connection ",
              " errored (notified from pthread)",
            ])),
          e,
        ),
        Le(t),
        (t === "no_first_response_timeout" || t === "rx_stall_timeout") &&
          n.peerConnection != null)
      ) {
        (o("WALogger").WARN(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
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
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] Failed to collect getStats for ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t));
            })
            .finally(function () {
              Ae(n);
            }));
        return;
      }
      Ae(n);
    }
    function Be(e) {
      return new (se || (se = n("Promise")))(function (t) {
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.set(e, t);
      });
    }
    function We(e) {
      var t = o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.get(
        e,
      );
      t != null &&
        (t(),
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.delete(e));
    }
    function qe() {
      var e = Date.now(),
        t = Array.from(
          o("WAWebVoipSctpConnectionState").sctpConnections.values(),
        ),
        n = [].concat(
          t.filter(function (e) {
            return (
              e.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
            );
          }),
          t.filter(function (e) {
            return (
              e.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
            );
          }),
        ),
        r = n.slice(0, ue).map(function (t) {
          var n,
            r,
            a =
              (n = (r = t.relayConnectionInfo) == null ? void 0 : r.name) !=
              null
                ? n
                : "unknown",
            i =
              a +
              "@" +
              t.id +
              "(state=" +
              String(t.state) +
              ",open=" +
              String(
                t.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Open,
              ) +
              ",reconnecting=" +
              String(t.isReconnecting === !0);
          if (t.channelTransferred)
            return (
              i +
              ",stats=offthread,droppedPackets=" +
              String(t.stats.droppedPackets) +
              ")"
            );
          var l =
            t.lastRxPacketTime > 0 ? Math.max(0, e - t.lastRxPacketTime) : -1;
          return (
            i +
            ",stats=mainthread,rxAgeMs=" +
            String(l) +
            ",txPackets=" +
            String(t.stats.sentPackets) +
            ",rxPackets=" +
            String(t.stats.receivedPackets) +
            ",droppedPackets=" +
            String(t.stats.droppedPackets) +
            ")"
          );
        });
      return "total=" + String(t.length) + ";" + (r.join("|") || "none");
    }
    function Ue() {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((pe = !0), be++, ve++);
          try {
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
              "relay",
            );
            var e = Array.from(
              o("WAWebVoipSctpConnectionState").sctpConnections.keys(),
            );
            (o("WALogger").LOG(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield o(
                "WAWebVoipSctpDataChannelThreadManager",
              ).stopDataChannelWorker());
            for (var t of e) De(t);
            (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
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
              Se.clear(),
              Re.clear(),
              o("WAWebVoipRelayConnectQpl").resetVoipRelayConnectQpl(),
              (pe = !1));
          }
        })),
        Ve.apply(this, arguments)
      );
    }
    function He(e) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = be;
          (o("WALogger").LOG(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          ),
            yield ze(e, 0, t));
        })),
        Ge.apply(this, arguments)
      );
    }
    function ze(e, t, n) {
      return je.apply(this, arguments);
    }
    function je() {
      return (
        (je = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            if (!(t >= e.length) && !(pe || be !== r)) {
              var a = e[t];
              if (a != null) {
                o("WALogger").LOG(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Starting staggered connection ",
                      "/",
                      ": ",
                      "",
                    ])),
                  t + 1,
                  e.length,
                  a.id,
                );
                var i = Be(a.id);
                if ((xe(a), t < e.length - 1)) {
                  var l = new (se || (se = n("Promise")))(function (e) {
                    window.setTimeout(
                      e,
                      o("WAWebVoipSctpConnectionManagerConstants")
                        .PER_CONNECTION_STAGGER_DELAY_MS,
                    );
                  });
                  yield se.race([i, l]);
                }
                yield ze(e, t + 1, r);
              }
            }
          },
        )),
        je.apply(this, arguments)
      );
    }
    function Ke(e, t, n) {
      !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None ||
        t.hasLoggedEarlyPacketRelayEligible === !0 ||
        ((t.hasLoggedEarlyPacketRelayEligible = !0),
        o("WAWebCoreActionsODS").logCallSctpEarlyPacketRelayEligible(n));
    }
    function Qe(e, t, n) {
      return (
        !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        (n &&
          t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None)
      );
    }
    function Xe(e) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          ((ce = r("justknobx")._("5402") || 1e4),
            (de = r("justknobx")._("5558") || ce),
            be++);
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
            ),
            i = o("WAWebVoipGatingUtils").isCurrentCallGroup(),
            l = i && e.enable_web_group_early_packet_relay_reconnect === !0;
          for (var s of o("WAWebVoipSctpConnectionState").currentRelayState) {
            var u = s[0],
              c = s[1];
            if (!a.has(u))
              if (
                o("WAWebVoipSctpConnectionManagerConstants")
                  .SctpConnectionConfig.CLOSE_OLD_CONNECTION_BEFORE_CALL_END
              )
                De(u);
              else {
                var d = o("WAWebVoipSctpConnectionState").sctpConnections.get(
                  u,
                );
                d != null &&
                  d.state !==
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
                  d.state !==
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
                  ((d.relayConnectionInfo = c),
                  o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                    "retained",
                  ));
              }
          }
          var m = [];
          for (var p of a) {
            var _ = p[0],
              f = p[1],
              g = o("WAWebVoipSctpConnectionState").sctpConnections.get(_);
            (Ke(_, g, i), Qe(_, g, l) && m.push(f));
          }
          o("WAWebVoipSctpConnectionState").currentRelayState.clear();
          for (var h of a) {
            var y = h[0],
              C = h[1];
            o("WAWebVoipSctpConnectionState").currentRelayState.set(y, C);
          }
          if (m.length > 0) {
            o("WAWebVoipRelayConnectQpl").maybeStartVoipRelayConnectQpl();
            var b = e.enable_web_relay_connection_stagger === !0;
            b
              ? yield He(m)
              : yield (se || (se = n("Promise"))).all(
                  m.map(function (e) {
                    return xe(e);
                  }),
                );
          }
        })),
        Ye.apply(this, arguments)
      );
    }
    function Je(e, t, n) {
      (n === void 0 && (n = !1),
        !n &&
          ((e.onopen = function (n) {
            _t(n, t.id, e);
          }),
          (e.onclose = function (e) {
            ft(e, t.id);
          }),
          (e.onmessage = function (e) {
            o("WAWebVoipSctpInboundMessageHandler").handleSctpChannelMessage(
              e,
              t,
            );
          }),
          (e.onerror = function (n) {
            o("WALogger").ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Data channel error for ",
                  ":",
                ])),
              t.id,
            );
            var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id);
            if (r != null && r.channel === e) {
              var a = r;
              (Le(),
                we(
                  a,
                  "data_channel_error",
                  "data_channel_error_reconnecting",
                  "[SCTP]",
                ));
            }
          })));
    }
    function Ze(e) {
      var t = e.connection,
        n = e.context,
        r = e.peerConnection,
        a = e.relayConnectionInfo,
        i = "pre-negotiated",
        l = babelHelpers.extends(
          {},
          o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS,
          { priority: "high" },
        ),
        s = r.createDataChannel(i, l);
      s.binaryType = "arraybuffer";
      var u = !1;
      return (
        o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled()
          ? o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] DC transfer disabled for ",
                  "",
                ])),
              a.id,
            )
          : (u = Te(s, t, a.id, n)),
        (t.channel = s),
        Je(s, a, u),
        s
      );
    }
    function et(e, t, n) {
      var a = n != null ? " " + n : "";
      ((e.oniceconnectionstatechange = function () {
        var n = e.iceConnectionState;
        o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
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
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] DTLS stall: ICE connected ",
                      "ms ago (threshold=",
                      "ms) but PC state is '",
                      "' for ",
                      "",
                      "",
                    ])),
                  i,
                  ce,
                  n,
                  t,
                  a,
                ),
                  o(
                    "WAWebVoipSctpOdsPortLogging",
                  ).logCallDtlsFailedStallForPort(r.relayPort),
                  we(r, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, ce))),
          n === "failed" &&
            (o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(
              r.relayPort,
            ),
            Fe(r)));
      }),
        (e.onconnectionstatechange = function () {
          var n = e.connectionState;
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
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
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
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
                        T ||
                          (T = babelHelpers.taggedTemplateLiteralLoose([
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
    function tt(e, t) {
      return nt.apply(this, arguments);
    }
    function nt() {
      return (
        (nt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                G ||
                  (G = babelHelpers.taggedTemplateLiteralLoose([
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
              ge.recordAttempt(n.relayIp),
              o("WAWebVoipSctpConnectionState").sctpConnections.set(n.id, n));
          var r = n;
          n.connectionTimeout = window.setTimeout(function () {
            r.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
              (o("WALogger").WARN(
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] Connection timeout (",
                    "ms) in Connecting state for ",
                    "",
                  ])),
                me(),
                e.id,
              ),
              it(r, "connection_timeout"));
          }, me());
          var a = !1;
          if (
            (o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() ||
              (a = yield gt()),
            pe ||
              (o("WAWebVoipTsLogger").logIceConnectionStart({
                relayId: e.relayId,
                ip: e.ip,
                port: e.port,
              }),
              o("WAWebVoipSctpOdsPortLogging").logCallIceStartedForPort(e.port),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              pe))
          )
            return (at(e.id), We(e.id), !1);
          if (ot(n))
            return (
              o("WALogger").WARN(
                j ||
                  (j = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Aborting stale connect for ",
                    " after yield",
                  ])),
                e.id,
              ),
              o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(n),
              !1
            );
          try {
            var i,
              l,
              s = {};
            if (
              ((s.certificates = [
                yield RTCPeerConnection.generateCertificate({
                  name: "ECDSA",
                  namedCurve: "P-256",
                }),
              ]),
              ot(n))
            )
              return (
                o("WALogger").WARN(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Aborting stale connect for ",
                      " after certificate generation",
                    ])),
                  e.id,
                ),
                o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(n),
                !1
              );
            var u = Date.now(),
              c = new RTCPeerConnection(s),
              d = Date.now() - u;
            (d >
              o("WAWebVoipSctpConnectionManagerConstants")
                .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
              o("WALogger").WARN(
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] slow RTCPeerConnection ctor ",
                    ": ",
                    "ms",
                  ])),
                e.id,
                d,
              ),
              (n.peerConnection = c),
              (c.onicecandidate = function (t) {
                t.candidate ||
                  o("WALogger").LOG(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] ICE gathering complete for ",
                        "",
                      ])),
                    e.id,
                  );
              }),
              et(c, e.id),
              Ze({ connection: n, peerConnection: c, relayConnectionInfo: e }));
            var m = Date.now(),
              p = yield c.createOffer();
            yield c.setLocalDescription(p);
            var _ = p.sdp || "",
              f = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(_, e);
            if (
              (yield c.setRemoteDescription({ sdp: f, type: "answer" }), ot(n))
            )
              return (
                o("WALogger").WARN(
                  Y ||
                    (Y = babelHelpers.taggedTemplateLiteralLoose([
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
                ).detachPeerConnectionHandlers(c),
                c.close(),
                (n.peerConnection = null),
                !1
              );
            var g = Date.now() - m;
            g >
              o("WAWebVoipSctpConnectionManagerConstants")
                .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
              o("WALogger").WARN(
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Slow SDP negotiation for ",
                    ": ",
                    "ms",
                  ])),
                e.id,
                g,
              );
            var h = c.iceConnectionState,
              y =
                (i = (l = n.channel) == null ? void 0 : l.readyState) != null
                  ? i
                  : "unknown";
            return (
              o("WALogger").LOG(
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] SDP done ",
                    " DC=",
                    " ICE=",
                    "",
                  ])),
                e.id,
                y,
                h,
              ),
              !0
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] createDataChannel failed: ",
                    "",
                  ])),
                e,
              ),
              it(n, "channel_creation_failed"),
              !1
            );
          }
        })),
        nt.apply(this, arguments)
      );
    }
    function rt(e) {
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
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
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
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] stats bufB=",
              " bindT=",
              "ms",
            ])),
          e.packetBuffer.bufferedBytes,
          a,
        ));
    }
    function ot(e) {
      return (
        pe || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e
      );
    }
    function at(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t) {
        (o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t),
          o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t));
        var n = t.peerConnection;
        (n &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close(),
          (t.peerConnection = null)),
          rt(t),
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
    function it(e, t, n) {
      (n === void 0 && (n = !1),
        e &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (n || ke(e.id),
          o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
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
          at(e.id),
          We(e.id)));
    }
    function lt(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        at(e),
        We(e));
    }
    function st(e, t) {
      return ot(e) || ve !== t;
    }
    function ut(e) {
      (o("WALogger").WARN(
        P ||
          (P = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] Aborting stale ICE restart for ",
            " after certificate generation",
          ])),
        e.id,
      ),
        o("WAWebCoreActionsODS").logCallSctpIceRestartAbortedStale(),
        (e.isReconnecting = !1),
        o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(e),
        o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) === e &&
          (at(e.id), ct(e.id)));
    }
    function ct(e) {
      var t = o("WAWebVoipSctpConnectionState").currentRelayState.get(e);
      pe ||
        t == null ||
        (o("WALogger").LOG(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Reconnecting ",
              " after aborted ICE restart",
            ])),
          e,
        ),
        xe(t).catch(function (t) {
          o("WALogger").ERROR(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Reconnect after aborted ICE restart failed for ",
                ": ",
                "",
              ])),
            e,
            t,
          );
        }));
    }
    function dt(e) {
      Re.has(e) ||
        (Re.add(e),
        o("WALogger").WARN(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE restart skip: cleanup in progress ",
              "",
            ])),
          e,
        ),
        o(
          "WAWebCoreActionsODS",
        ).logCallSctpIceRestartSkippedCleanupInProgress());
    }
    function mt(e) {
      return pt.apply(this, arguments);
    }
    function pt() {
      return (
        (pt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isReconnecting !== !0) {
            if (pe) {
              dt(e.id);
              return;
            }
            var t = ve;
            if (
              (o("WALogger").LOG(
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Restarting ICE process for connection ",
                    "",
                  ])),
                e.id,
              ),
              !e.hasNonStunPacketSent)
            ) {
              o("WALogger").WARN(
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no non-STUN sent ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var n = o("WAWebVoipSctpConnectionState").currentRelayState.get(
              e.id,
            );
            if (!n) {
              o("WALogger").WARN(
                re ||
                  (re = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no relay info ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var r = e.peerConnection;
            if (!r) {
              o("WALogger").WARN(
                oe ||
                  (oe = babelHelpers.taggedTemplateLiteralLoose([
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
                ae ||
                  (ae = babelHelpers.taggedTemplateLiteralLoose([
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
              if (
                ((l.certificates = [
                  yield RTCPeerConnection.generateCertificate({
                    name: "ECDSA",
                    namedCurve: "P-256",
                  }),
                ]),
                st(e, t))
              ) {
                ut(e);
                return;
              }
              var s = new RTCPeerConnection(l);
              ((e.peerConnection = s),
                (e.iceConnectedTime = 0),
                e.dtlsStallTimeout != null &&
                  (window.clearTimeout(e.dtlsStallTimeout),
                  (e.dtlsStallTimeout = null)),
                et(s, e.id, "(ICE restart)"),
                Ze({
                  connection: e,
                  context: "ICE restart",
                  peerConnection: s,
                  relayConnectionInfo: n,
                }),
                (e.packetBuffer = a),
                ge.recordAttempt(e.relayIp),
                o("WAWebVoipSctpConnectionState").sctpConnections.set(e.id, e));
              var u = yield s.createOffer({ iceRestart: !1 });
              yield s.setLocalDescription(u);
              var c = u.sdp || "",
                d = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(c, n);
              (yield s.setRemoteDescription({ sdp: d, type: "answer" }),
                o("WALogger").LOG(
                  ie ||
                    (ie = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] ICE restart completed for connection ",
                      "",
                    ])),
                  e.id,
                ));
            } catch (t) {
              (o("WALogger").ERROR(
                le ||
                  (le = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart failed for connection ",
                    ": ",
                    "",
                  ])),
                e.id,
                t,
              ),
                it(e, "ice_restart_failed"));
            }
          }
        })),
        pt.apply(this, arguments)
      );
    }
    function _t(e, t, n) {
      var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      if (r) {
        var a, i;
        if (r.channel == null || r.channel !== n) {
          o("WALogger").WARN(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
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
          Ee(t),
          o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened(),
          r.connectionTimeout &&
            (window.clearTimeout(r.connectionTimeout),
            (r.connectionTimeout = null)),
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
            "relay",
            Ie,
            o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread,
          ));
        var l =
          r.connectionStartTime > 0 ? Date.now() - r.connectionStartTime : 0;
        ge.recordOpened(r.relayIp);
        var s =
          (a =
            (i = o("WAWebVoipSctpConnectionState").currentRelayState.get(t)) ==
            null
              ? void 0
              : i.name) != null
            ? a
            : "N/A";
        (o("WALogger").LOG(
          O ||
            (O = babelHelpers.taggedTemplateLiteralLoose([
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
            B ||
              (B = babelHelpers.taggedTemplateLiteralLoose([
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
          We(t));
      }
    }
    function ft(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      n &&
        (o("WALogger").LOG(
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] DataChannel closed by relay for ",
              ", reconnecting",
            ])),
          t,
        ),
        Le("remote_close"),
        we(n, "remote_close", "remote_close_reconnecting", "[SCTP]"));
    }
    function gt() {
      return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(
        function () {
          return ce;
        },
      );
    }
    ((l.markSctpEnteredViaWebTransportFallback = he),
      (l.resetSctpFallbackFamilyOutcome = ye),
      (l.reportSctpFallbackFamilyOutcome = Ce),
      (l.sendWAWebVoipDataToRelay = Pe),
      (l.mergeWorkerStats = Ne),
      (l.handleDataChannelOpened = Me),
      (l.handleDataChannelErrored = Oe),
      (l.getSctpRelayDebugSummary = qe),
      (l.cleanupAllConnections = Ue),
      (l.handleRelayListUpdate = Xe));
  },
  98,
);
