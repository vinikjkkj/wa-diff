__d(
  "WAWebVoipSctpConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebReleaseToEventLoop",
    "WAWebVoipDtlsCertAcquire",
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
      se = 8,
      ue = 1e4,
      ce = 1e4;
    function de() {
      return 2 * ue;
    }
    var me = !1;
    function pe(e) {
      return e.includes(":");
    }
    var _e = (function () {
        function e() {
          ((this.$1 = !1), (this.$2 = !1), (this.$3 = !1), (this.$4 = !1));
        }
        var t = e.prototype;
        return (
          (t.markEnteredViaWtFallback = function () {
            this.$1 = !0;
          }),
          (t.recordAttempt = function (t) {
            t !== "" && pe(t) && (this.$3 = !0);
          }),
          (t.recordOpened = function (t) {
            t !== "" && (pe(t) ? (this.$4 = !0) : (this.$2 = !0));
          }),
          (t.isIpv4OnlyRecovery = function () {
            return this.$1 && this.$2 && this.$3 && !this.$4;
          }),
          e
        );
      })(),
      fe = new _e();
    function ge() {
      fe.markEnteredViaWtFallback();
    }
    function he() {
      fe = new _e();
    }
    function ye() {
      fe.isIpv4OnlyRecovery() &&
        (o("WAWebCoreActionsODS").logCallSctpFallbackIpv4OnlyIpv6Failed(),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] WT fallback recovered on IPv4 only; every IPv6 relay failed",
            ])),
        ));
    }
    var Ce = 0,
      be = 0,
      ve = !1;
    function Se() {
      ve = !0;
    }
    var Re = new Set(),
      Le = new Set();
    function Ee(e) {
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
    function ke(e) {
      Re.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_succeeded",
        );
    }
    function Ie(e) {
      Re.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_exhausted",
        );
    }
    function Te() {
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
    function De(e, t, n, r) {
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
    function xe(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t)
        try {
          st(e);
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
    function $e(e, t) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = "wa-web-call",
            r = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
          if (
            r &&
            (r.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
              r.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
          ) {
            qe(e.id);
            return;
          }
          (r &&
            r.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
            it(e.id),
            yield nt(e, n, t));
        })),
        Pe.apply(this, arguments)
      );
    }
    function Ne(e, t, n) {
      var a = r("justknobx")._("1929");
      o("WAWebVoipSctpSendData").sendData({
        callbacks: {
          failConnection: lt,
          getIceRestartRxInactivityMs: function () {
            return ce;
          },
          getSctpConnectionTimeoutMs: function () {
            return de();
          },
          restartIceProcess: pt,
        },
        data_: e,
        ip: t,
        port: a
          ? n
          : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT,
      });
    }
    function Me(e, t) {
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
    function we(e) {
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
        ke(e),
        fe.recordOpened(t.relayIp),
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
          Te,
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
        qe(e));
    }
    function Ae(e, t, n, r) {
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
          !me &&
          c != null &&
          d <
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS
        ) {
          var m;
          (u &&
            !Re.has(i) &&
            (Re.add(i),
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
            lt(e, n, !0));
          var y = function (n) {
            if (
              (n != null &&
                o(
                  "WAWebVoipSctpConnectionState",
                ).pendingReconnectTimeouts.delete(n),
              !me)
            ) {
              var e = o("WAWebVoipSctpConnectionState").currentRelayState.get(
                  i,
                ),
                a = e == null;
              (a
                ? (Re.has(i) ||
                    (Re.add(i),
                    o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                      "transport_failed",
                    )),
                  o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                    "reconnect_attempted",
                  ))
                : Re.delete(i),
                $e(e != null ? e : c, "same_path_reconnect").catch(
                  function (e) {
                    (a && Ie(i),
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
                  },
                ));
            }
          };
          if (p > 0) {
            var C = window.setTimeout(function () {
              return y(C);
            }, p);
            o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.add(C);
          } else y(null);
        } else
          (me ||
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
              : (u && Ie(i),
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
            lt(e, t));
      }
    }
    function Fe(e) {
      var t = e.id;
      o("WAWebVoipSctpConnectionState").sctpConnections.get(t) === e &&
        Ae(
          e,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        );
    }
    function Oe(e) {
      Ae(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function Be(e, t) {
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
        Ee(t),
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
              Fe(n);
            }));
        return;
      }
      Fe(n);
    }
    function We(e) {
      return new (le || (le = n("Promise")))(function (t) {
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.set(e, t);
      });
    }
    function qe(e) {
      var t = o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.get(
        e,
      );
      t != null &&
        (t(),
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.delete(e));
    }
    function Ue() {
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
        r = n.slice(0, se).map(function (t) {
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
    function Ve() {
      return He.apply(this, arguments);
    }
    function He() {
      return (
        (He = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((me = !0), Ce++, be++);
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
            for (var t of e) xe(t);
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
              Re.clear(),
              Le.clear(),
              o("WAWebVoipRelayConnectQpl").resetVoipRelayConnectQpl(),
              (ve = !1),
              (me = !1));
          }
        })),
        He.apply(this, arguments)
      );
    }
    function Ge(e, t) {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = Ce;
          (o("WALogger").LOG(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          ),
            yield je(e, 0, n, t));
        })),
        ze.apply(this, arguments)
      );
    }
    function je(e, t, n, r) {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            if (!(t >= e.length) && !(me || Ce !== r)) {
              var i = e[t];
              if (
                i != null &&
                !(
                  t > 0 &&
                  o("WAWebABProps").getABPropConfigValue(
                    "web_voip_relay_setup_yield_ipv4_first",
                  ) === !0 &&
                  (yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
                  me || Ce !== r)
                )
              ) {
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
                  i.id,
                );
                var l = We(i.id);
                if (($e(i, a), t < e.length - 1)) {
                  var s = new (le || (le = n("Promise")))(function (e) {
                    window.setTimeout(
                      e,
                      o("WAWebVoipSctpConnectionManagerConstants")
                        .PER_CONNECTION_STAGGER_DELAY_MS,
                    );
                  });
                  yield le.race([l, s]);
                }
                yield je(e, t + 1, r, a);
              }
            }
          },
        )),
        Ke.apply(this, arguments)
      );
    }
    function Qe(e, t, n) {
      !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None ||
        t.hasLoggedEarlyPacketRelayEligible === !0 ||
        ((t.hasLoggedEarlyPacketRelayEligible = !0),
        o("WAWebCoreActionsODS").logCallSctpEarlyPacketRelayEligible(n));
    }
    function Xe(e, t, n) {
      return (
        !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        (n &&
          t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None)
      );
    }
    function Ye(e, t) {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          ((ue = r("justknobx")._("5402") || 1e4),
            (ce = r("justknobx")._("5558") || ue));
          var a =
            o("WAWebVoipSctpConnectionState").currentRelayState.size === 0 || ve
              ? "initial"
              : "mid_call_relay_update";
          ((ve = !1), Ce++);
          var i = o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort(),
            l = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(
              e,
              {
                portOverride: function (t) {
                  return i
                    ? t
                    : o("WAWebVoipSctpConnectionManagerConstants")
                        .SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT;
                },
              },
            ),
            s = o("WAWebVoipGatingUtils").isCurrentCallGroup(),
            u = s && e.enable_web_group_early_packet_relay_reconnect === !0;
          for (var c of o("WAWebVoipSctpConnectionState").currentRelayState) {
            var d = c[0],
              m = c[1];
            if (!l.has(d))
              if (
                o("WAWebVoipSctpConnectionManagerConstants")
                  .SctpConnectionConfig.CLOSE_OLD_CONNECTION_BEFORE_CALL_END
              )
                xe(d);
              else {
                var p = o("WAWebVoipSctpConnectionState").sctpConnections.get(
                  d,
                );
                p != null &&
                  p.state !==
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
                  p.state !==
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
                  ((p.relayConnectionInfo = m),
                  o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                    "retained",
                  ));
              }
          }
          var _ = [];
          for (var f of l) {
            var g = f[0],
              h = f[1],
              y = o("WAWebVoipSctpConnectionState").sctpConnections.get(g);
            (Qe(g, y, s), Xe(g, y, u) && _.push(h));
          }
          o("WAWebVoipSctpConnectionState").currentRelayState.clear();
          for (var C of l) {
            var b = C[0],
              v = C[1];
            o("WAWebVoipSctpConnectionState").currentRelayState.set(b, v);
          }
          if (_.length > 0) {
            o("WAWebVoipRelayConnectQpl").maybeStartVoipRelayConnectQpl();
            var S =
              e.enable_web_relay_connection_stagger === !0 &&
              (t == null ? void 0 : t.bypassConnectionStagger) !== !0;
            S
              ? yield Ge(_, a)
              : yield (le || (le = n("Promise"))).all(
                  _.map(function (e) {
                    return $e(e, a);
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
              (Ee(),
                Ae(
                  a,
                  "data_channel_error",
                  "data_channel_error_reconnecting",
                  "[SCTP]",
                ));
            }
          })));
    }
    function et(e) {
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
          : (u = De(s, t, a.id, n)),
        (t.channel = s),
        Ze(s, a, u),
        s
      );
    }
    function tt(e, t, n) {
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
                  ue,
                  n,
                  t,
                  a,
                ),
                  o(
                    "WAWebVoipSctpOdsPortLogging",
                  ).logCallDtlsFailedStallForPort(r.relayPort),
                  Ae(r, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, ue))),
          n === "failed" &&
            (o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(
              r.relayPort,
            ),
            Oe(r)));
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
    function nt(e, t, n) {
      return rt.apply(this, arguments);
    }
    function rt() {
      return (
        (rt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
            r &&
            r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None
              ? ((r.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Connecting),
                (r.connectionStartTime = Date.now()),
                (r.relayConnectionInfo = e),
                (r.relayId = e.relayId),
                (r.relayIp = e.ip),
                (r.relayPort = e.port),
                r.connectionTimeout &&
                  (window.clearTimeout(r.connectionTimeout),
                  (r.connectionTimeout = null)),
                o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] early conn->connecting ",
                      " buf=",
                      "",
                    ])),
                  e.id,
                  r.packetBuffer.bufferedBytes,
                ))
              : ((r = {
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
                fe.recordAttempt(r.relayIp),
                o("WAWebVoipSctpConnectionState").sctpConnections.set(r.id, r));
            var a = r;
            r.connectionTimeout = window.setTimeout(function () {
              a.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
                (o("WALogger").WARN(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] Connection timeout (",
                      "ms) in Connecting state for ",
                      "",
                    ])),
                  de(),
                  e.id,
                ),
                lt(a, "connection_timeout"));
            }, de());
            var i = !1;
            if (
              (o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() ||
                (i = yield ht()),
              me)
            )
              return (it(e.id), qe(e.id), !1);
            (o("WAWebVoipTsLogger").logIceConnectionStart({
              relayId: e.relayId,
              ip: e.ip,
              port: e.port,
            }),
              o("WAWebVoipSctpOdsPortLogging").logCallIceStartedForPort(
                e.port,
              ));
            try {
              var l,
                s,
                u = {};
              if (
                ((u.certificates = [
                  yield o("WAWebVoipDtlsCertAcquire").acquireDtlsCert(n),
                ]),
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
                me)
              )
                return (it(e.id), qe(e.id), !1);
              if (at(r))
                return (
                  o("WALogger").WARN(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] Aborting stale connect for ",
                        " after certificate acquisition",
                      ])),
                    e.id,
                  ),
                  o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(r),
                  !1
                );
              var c = Date.now(),
                d = new RTCPeerConnection(u),
                m = Date.now() - c;
              (m >
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
                  m,
                ),
                (r.peerConnection = d),
                (d.onicecandidate = function (t) {
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
                tt(d, e.id),
                et({
                  connection: r,
                  peerConnection: d,
                  relayConnectionInfo: e,
                }));
              var p = Date.now(),
                _ = yield d.createOffer();
              yield d.setLocalDescription(_);
              var f = _.sdp || "",
                g = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(f, e);
              if (
                (yield d.setRemoteDescription({ sdp: g, type: "answer" }),
                at(r))
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
                  o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(r),
                  o(
                    "WAWebVoipSctpConnectionTeardown",
                  ).closeConnectionDataChannel(r),
                  o(
                    "WAWebVoipSctpConnectionTeardown",
                  ).detachPeerConnectionHandlers(d),
                  d.close(),
                  (r.peerConnection = null),
                  !1
                );
              var h = Date.now() - p;
              h >
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
                  h,
                );
              var y = d.iceConnectionState,
                C =
                  (l = (s = r.channel) == null ? void 0 : s.readyState) != null
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
                  C,
                  y,
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
                lt(r, "channel_creation_failed"),
                !1
              );
            }
          },
        )),
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
    function at(e) {
      return (
        me || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e
      );
    }
    function it(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t) {
        (o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t),
          o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t));
        var n = t.peerConnection;
        (n &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close(),
          (t.peerConnection = null)),
          ot(t),
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
    function lt(e, t, n) {
      (n === void 0 && (n = !1),
        e &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (n || Ie(e.id),
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
          it(e.id),
          qe(e.id)));
    }
    function st(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        it(e),
        qe(e));
    }
    function ut(e, t) {
      return at(e) || be !== t;
    }
    function ct(e, t, n) {
      if (
        (o("WALogger").WARN(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Aborting stale ICE restart for ",
              " at ",
              "",
            ])),
          e.id,
          t,
        ),
        o("WAWebCoreActionsODS").logCallSctpIceRestartAbortedStale(t),
        (e.isReconnecting = !1),
        o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(e),
        o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) === e)
      ) {
        (it(e.id), dt(e.id));
        return;
      }
      (o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(e),
        n != null &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close()),
        (e.peerConnection = null));
    }
    function dt(e) {
      var t = o("WAWebVoipSctpConnectionState").currentRelayState.get(e);
      me ||
        t == null ||
        (o("WALogger").LOG(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Reconnecting ",
              " after aborted ICE restart",
            ])),
          e,
        ),
        $e(t, "same_path_reconnect").catch(function (t) {
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
    function mt(e) {
      Le.has(e) ||
        (Le.add(e),
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
    function pt(e) {
      return _t.apply(this, arguments);
    }
    function _t() {
      return (
        (_t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isReconnecting !== !0) {
            if (me) {
              mt(e.id);
              return;
            }
            var t = be;
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
            var n = o("WAWebVoipSctpConnectionState").currentRelayState.get(
              e.id,
            );
            if (!n) {
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
            var r = e.peerConnection;
            if (!r) {
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
                  yield o("WAWebVoipDtlsCertAcquire").acquireDtlsCert(
                    "ice_restart",
                  ),
                ]),
                ut(e, t))
              ) {
                ct(e, "cert_acquire", null);
                return;
              }
              var s = new RTCPeerConnection(l);
              ((e.peerConnection = s),
                (e.iceConnectedTime = 0),
                e.dtlsStallTimeout != null &&
                  (window.clearTimeout(e.dtlsStallTimeout),
                  (e.dtlsStallTimeout = null)),
                tt(s, e.id, "(ICE restart)"),
                et({
                  connection: e,
                  context: "ICE restart",
                  peerConnection: s,
                  relayConnectionInfo: n,
                }),
                (e.packetBuffer = a),
                fe.recordAttempt(e.relayIp),
                o("WAWebVoipSctpConnectionState").sctpConnections.set(e.id, e));
              var u = yield s.createOffer({ iceRestart: !1 });
              yield s.setLocalDescription(u);
              var c = u.sdp || "",
                d = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(c, n);
              if (
                (yield s.setRemoteDescription({ sdp: d, type: "answer" }),
                ut(e, t))
              ) {
                ct(e, "negotiation", s);
                return;
              }
              o("WALogger").LOG(
                ae ||
                  (ae = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart completed for connection ",
                    "",
                  ])),
                e.id,
              );
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
                lt(e, "ice_restart_failed"));
            }
          }
        })),
        _t.apply(this, arguments)
      );
    }
    function ft(e, t, n) {
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
          ke(t),
          o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened(),
          r.connectionTimeout &&
            (window.clearTimeout(r.connectionTimeout),
            (r.connectionTimeout = null)),
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
            "relay",
            Te,
            o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread,
          ));
        var l =
          r.connectionStartTime > 0 ? Date.now() - r.connectionStartTime : 0;
        fe.recordOpened(r.relayIp);
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
          qe(t));
      }
    }
    function gt(e, t) {
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
        Ee("remote_close"),
        Ae(n, "remote_close", "remote_close_reconnecting", "[SCTP]"));
    }
    function ht() {
      return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(
        function () {
          return ue;
        },
      );
    }
    ((l.markSctpEnteredViaWebTransportFallback = ge),
      (l.resetSctpFallbackFamilyOutcome = he),
      (l.reportSctpFallbackFamilyOutcome = ye),
      (l.markSctpCallIdentityChanged = Se),
      (l.sendWAWebVoipDataToRelay = Ne),
      (l.mergeWorkerStats = Me),
      (l.handleDataChannelOpened = we),
      (l.handleDataChannelErrored = Be),
      (l.getSctpRelayDebugSummary = Ue),
      (l.cleanupAllConnections = Ve),
      (l.handleRelayListUpdate = Ye));
  },
  98,
);
