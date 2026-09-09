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
      ae = 8,
      ie = 1e4,
      le = 1e4;
    function se() {
      return 2 * ie;
    }
    var ue = !1;
    function ce(e) {
      return e.includes(":");
    }
    var de = (function () {
        function e() {
          ((this.$1 = !1), (this.$2 = !1), (this.$3 = !1), (this.$4 = !1));
        }
        var t = e.prototype;
        return (
          (t.markEnteredViaWtFallback = function () {
            this.$1 = !0;
          }),
          (t.recordAttempt = function (t) {
            t !== "" && ce(t) && (this.$3 = !0);
          }),
          (t.recordOpened = function (t) {
            t !== "" && (ce(t) ? (this.$4 = !0) : (this.$2 = !0));
          }),
          (t.isIpv4OnlyRecovery = function () {
            return this.$1 && this.$2 && this.$3 && !this.$4;
          }),
          e
        );
      })(),
      me = new de();
    function pe() {
      me.markEnteredViaWtFallback();
    }
    function _e() {
      me = new de();
    }
    function fe() {
      me.isIpv4OnlyRecovery() &&
        (o("WAWebCoreActionsODS").logCallSctpFallbackIpv4OnlyIpv6Failed(),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] WT fallback recovered on IPv4 only; every IPv6 relay failed",
            ])),
        ));
    }
    var ge = 0,
      he = new Set();
    function ye(e) {
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
    function Ce(e) {
      he.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_succeeded",
        );
    }
    function be(e) {
      he.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_exhausted",
        );
    }
    function ve() {
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
    function Se(e, t, n, r) {
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
    function Re(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t)
        try {
          Ze(e);
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
    function Le(e) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = "wa-web-call",
            n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
          if (
            n &&
            (n.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
              n.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
          ) {
            Me(e.id);
            return;
          }
          (n &&
            n.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
            Ye(e.id),
            yield je(e, t));
        })),
        Ee.apply(this, arguments)
      );
    }
    function ke(e, t, n) {
      var a = r("justknobx")._("1929");
      o("WAWebVoipSctpSendData").sendData({
        callbacks: {
          failConnection: Je,
          getIceRestartRxInactivityMs: function () {
            return le;
          },
          getSctpConnectionTimeoutMs: function () {
            return se();
          },
          restartIceProcess: et,
        },
        data_: e,
        ip: t,
        port: a
          ? n
          : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT,
      });
    }
    function Ie(e, t) {
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
    function Te(e) {
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
        Ce(e),
        me.recordOpened(t.relayIp),
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
          ve,
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
        Me(e));
    }
    function De(e, t, n, r) {
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
          !ue &&
          c != null &&
          d <
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS
        ) {
          var m;
          (u &&
            !he.has(i) &&
            (he.add(i),
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
            Je(e, n, !0));
          var y = function (n) {
            if (
              (n != null &&
                o(
                  "WAWebVoipSctpConnectionState",
                ).pendingReconnectTimeouts.delete(n),
              !ue)
            ) {
              var e = o("WAWebVoipSctpConnectionState").currentRelayState.get(
                  i,
                ),
                a = e == null;
              (a
                ? (he.has(i) ||
                    (he.add(i),
                    o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                      "transport_failed",
                    )),
                  o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                    "reconnect_attempted",
                  ))
                : he.delete(i),
                Le(e != null ? e : c).catch(function (e) {
                  (a && be(i),
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
          (ue ||
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
              : (u && be(i),
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
            Je(e, t));
      }
    }
    function xe(e) {
      var t = e.id;
      o("WAWebVoipSctpConnectionState").sctpConnections.get(t) === e &&
        De(
          e,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        );
    }
    function $e(e) {
      De(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function Pe(e, t) {
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
        ye(t),
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
              xe(n);
            }));
        return;
      }
      xe(n);
    }
    function Ne(e) {
      return new (oe || (oe = n("Promise")))(function (t) {
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.set(e, t);
      });
    }
    function Me(e) {
      var t = o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.get(
        e,
      );
      t != null &&
        (t(),
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.delete(e));
    }
    function we() {
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
        r = n.slice(0, ae).map(function (t) {
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
    function Ae() {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((ue = !0), ge++);
          try {
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
              "relay",
            );
            var e = Array.from(
              o("WAWebVoipSctpConnectionState").sctpConnections.keys(),
            );
            (o("WALogger").LOG(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield o(
                "WAWebVoipSctpDataChannelThreadManager",
              ).stopDataChannelWorker());
            for (var t of e) Re(t);
            (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
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
              he.clear(),
              o("WAWebVoipRelayConnectQpl").resetVoipRelayConnectQpl(),
              (ue = !1));
          }
        })),
        Fe.apply(this, arguments)
      );
    }
    function Oe(e) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ge;
          (o("WALogger").LOG(
            B ||
              (B = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          ),
            yield We(e, 0, t));
        })),
        Be.apply(this, arguments)
      );
    }
    function We(e, t, n) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            if (!(t >= e.length) && !(ue || ge !== r)) {
              var a = e[t];
              if (a != null) {
                o("WALogger").LOG(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Starting staggered connection ",
                      "/",
                      ": ",
                      "",
                    ])),
                  t + 1,
                  e.length,
                  a.id,
                );
                var i = Ne(a.id);
                if ((Le(a), t < e.length - 1)) {
                  var l = new (oe || (oe = n("Promise")))(function (e) {
                    window.setTimeout(
                      e,
                      o("WAWebVoipSctpConnectionManagerConstants")
                        .PER_CONNECTION_STAGGER_DELAY_MS,
                    );
                  });
                  yield oe.race([i, l]);
                }
                yield We(e, t + 1, r);
              }
            }
          },
        )),
        qe.apply(this, arguments)
      );
    }
    function Ue(e) {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          ((ie = r("justknobx")._("5402") || 1e4),
            (le = r("justknobx")._("5558") || ie),
            ge++);
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
                Re(l);
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
              ? yield Oe(c)
              : yield (oe || (oe = n("Promise"))).all(
                  c.map(function (e) {
                    return Le(e);
                  }),
                );
          }
        })),
        Ve.apply(this, arguments)
      );
    }
    function He(e, t, n) {
      (n === void 0 && (n = !1),
        !n &&
          ((e.onopen = function (n) {
            nt(n, t.id, e);
          }),
          (e.onclose = function (e) {
            rt(e, t.id);
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
              (ye(),
                De(
                  a,
                  "data_channel_error",
                  "data_channel_error_reconnecting",
                  "[SCTP]",
                ));
            }
          })));
    }
    function Ge(e) {
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
          : (u = Se(s, t, a.id, n)),
        (t.channel = s),
        He(s, a, u),
        s
      );
    }
    function ze(e, t, n) {
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
                  ie,
                  n,
                  t,
                  a,
                ),
                  o(
                    "WAWebVoipSctpOdsPortLogging",
                  ).logCallDtlsFailedStallForPort(r.relayPort),
                  De(r, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, ie))),
          n === "failed" &&
            (o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(
              r.relayPort,
            ),
            $e(r)));
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
    function je(e, t) {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
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
              me.recordAttempt(n.relayIp),
              o("WAWebVoipSctpConnectionState").sctpConnections.set(n.id, n));
          var r = n;
          n.connectionTimeout = window.setTimeout(function () {
            r.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
              (o("WALogger").WARN(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] Connection timeout (",
                    "ms) in Connecting state for ",
                    "",
                  ])),
                se(),
                e.id,
              ),
              Je(r, "connection_timeout"));
          }, se());
          var a = !1;
          if (
            (o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() ||
              (a = yield ot()),
            ue ||
              (o("WAWebVoipTsLogger").logIceConnectionStart({
                relayId: e.relayId,
                ip: e.ip,
                port: e.port,
              }),
              o("WAWebVoipSctpOdsPortLogging").logCallIceStartedForPort(e.port),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              ue))
          )
            return (Ye(e.id), Me(e.id), !1);
          if (Xe(n))
            return (
              o("WALogger").WARN(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
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
              Xe(n))
            )
              return (
                o("WALogger").WARN(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
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
                G ||
                  (G = babelHelpers.taggedTemplateLiteralLoose([
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
                    z ||
                      (z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] ICE gathering complete for ",
                        "",
                      ])),
                    e.id,
                  );
              }),
              ze(c, e.id),
              Ge({ connection: n, peerConnection: c, relayConnectionInfo: e }));
            var m = Date.now(),
              p = yield c.createOffer();
            yield c.setLocalDescription(p);
            var _ = p.sdp || "",
              f = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(_, e);
            if (
              (yield c.setRemoteDescription({ sdp: f, type: "answer" }), Xe(n))
            )
              return (
                o("WALogger").WARN(
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
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
                K ||
                  (K = babelHelpers.taggedTemplateLiteralLoose([
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
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] createDataChannel failed: ",
                    "",
                  ])),
                e,
              ),
              Je(n, "channel_creation_failed"),
              !1
            );
          }
        })),
        Ke.apply(this, arguments)
      );
    }
    function Qe(e) {
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
    function Xe(e) {
      return (
        ue || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e
      );
    }
    function Ye(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t) {
        (o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t),
          o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t));
        var n = t.peerConnection;
        (n &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close(),
          (t.peerConnection = null)),
          Qe(t),
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
    function Je(e, t, n) {
      (n === void 0 && (n = !1),
        e &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (n || be(e.id),
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
          Ye(e.id),
          Me(e.id)));
    }
    function Ze(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        Ye(e),
        Me(e));
    }
    function et(e) {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (
        (tt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isReconnecting !== !0) {
            if (
              (o("WALogger").LOG(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Restarting ICE process for connection ",
                    "",
                  ])),
                e.id,
              ),
              !e.hasNonStunPacketSent)
            ) {
              o("WALogger").WARN(
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
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
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
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
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no PC ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var r = e.packetBuffer;
            if (
              ((e.isReconnecting = !0),
              (e.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Connecting),
              e.peerConnection)
            ) {
              (o("WALogger").LOG(
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
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
              var a = e.peerConnection;
              a &&
                (o(
                  "WAWebVoipSctpConnectionTeardown",
                ).detachPeerConnectionHandlers(a),
                a.close());
            }
            try {
              ((e.hasReceivedFirstPacket = !1), (e.sentMedia = !1));
              var i = {};
              i.certificates = [
                yield RTCPeerConnection.generateCertificate({
                  name: "ECDSA",
                  namedCurve: "P-256",
                }),
              ];
              var l = new RTCPeerConnection(i);
              ((e.peerConnection = l),
                (e.iceConnectedTime = 0),
                e.dtlsStallTimeout != null &&
                  (window.clearTimeout(e.dtlsStallTimeout),
                  (e.dtlsStallTimeout = null)),
                ze(l, e.id, "(ICE restart)"),
                Ge({
                  connection: e,
                  context: "ICE restart",
                  peerConnection: l,
                  relayConnectionInfo: t,
                }),
                (e.packetBuffer = r),
                me.recordAttempt(e.relayIp),
                o("WAWebVoipSctpConnectionState").sctpConnections.set(e.id, e));
              var s = yield l.createOffer({ iceRestart: !1 });
              yield l.setLocalDescription(s);
              var u = s.sdp || "",
                c = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(u, t);
              (yield l.setRemoteDescription({ sdp: c, type: "answer" }),
                o("WALogger").LOG(
                  ne ||
                    (ne = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] ICE restart completed for connection ",
                      "",
                    ])),
                  e.id,
                ));
            } catch (t) {
              (o("WALogger").ERROR(
                re ||
                  (re = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart failed for connection ",
                    ": ",
                    "",
                  ])),
                e.id,
                t,
              ),
                Je(e, "ice_restart_failed"));
            }
          }
        })),
        tt.apply(this, arguments)
      );
    }
    function nt(e, t, n) {
      var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      if (r) {
        var a, i;
        if (r.channel == null || r.channel !== n) {
          o("WALogger").WARN(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
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
          Ce(t),
          o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened(),
          r.connectionTimeout &&
            (window.clearTimeout(r.connectionTimeout),
            (r.connectionTimeout = null)),
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
            "relay",
            ve,
            o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread,
          ));
        var l =
          r.connectionStartTime > 0 ? Date.now() - r.connectionStartTime : 0;
        me.recordOpened(r.relayIp);
        var s =
          (a =
            (i = o("WAWebVoipSctpConnectionState").currentRelayState.get(t)) ==
            null
              ? void 0
              : i.name) != null
            ? a
            : "N/A";
        (o("WALogger").LOG(
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
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
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
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
          Me(t));
      }
    }
    function rt(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      n &&
        (o("WALogger").LOG(
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] DataChannel closed by relay for ",
              ", reconnecting",
            ])),
          t,
        ),
        ye("remote_close"),
        De(n, "remote_close", "remote_close_reconnecting", "[SCTP]"));
    }
    function ot() {
      return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(
        function () {
          return ie;
        },
      );
    }
    ((l.markSctpEnteredViaWebTransportFallback = pe),
      (l.resetSctpFallbackFamilyOutcome = _e),
      (l.reportSctpFallbackFamilyOutcome = fe),
      (l.sendWAWebVoipDataToRelay = ke),
      (l.mergeWorkerStats = Ie),
      (l.handleDataChannelOpened = Te),
      (l.handleDataChannelErrored = Pe),
      (l.getSctpRelayDebugSummary = we),
      (l.cleanupAllConnections = Ae),
      (l.handleRelayListUpdate = Ue));
  },
  98,
);
