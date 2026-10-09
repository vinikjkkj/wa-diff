__d(
  "WAWebVoipSctpConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebReleaseToEventLoop",
    "WAWebVoipDtlsCertAcquire",
    "WAWebVoipGatingUtils",
    "WAWebVoipRelayConnectQpl",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpBufferDrain",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipSctpConnectionStats",
    "WAWebVoipSctpConnectionTeardown",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpDiagnostics",
    "WAWebVoipSctpFallbackFamilyOutcome",
    "WAWebVoipSctpInboundMessageHandler",
    "WAWebVoipSctpOdsPortLogging",
    "WAWebVoipSctpSendData",
    "WAWebVoipSctpStatsInstrumentation",
    "WAWebVoipSctpWarmStandby",
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
      ie = 1e4,
      le = 1e4;
    function se() {
      return 2 * ie;
    }
    var ue = !1;
    function ce() {
      o("WAWebVoipSctpWarmStandby").cleanupWebTransportSctpWarmStandby(Le);
    }
    function de() {
      o(
        "WAWebVoipSctpWarmStandby",
      ).resetWebTransportSctpWarmStandbyAtCallBoundary(Le);
    }
    function me(e) {
      return o(
        "WAWebVoipSctpWarmStandby",
      ).activateWebTransportSctpWarmStandbyForRelayList(e, Le);
    }
    var pe = 0,
      _e = 0,
      fe = !1;
    function ge() {
      fe = !0;
    }
    var he = new Set(),
      ye = new Set();
    function Ce(e) {
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
    function be(e) {
      he.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_succeeded",
        );
    }
    function ve(e) {
      he.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_exhausted",
        );
    }
    function Se() {
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
    function Re(t, n, r, a) {
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
      var g = d.transferChannel({
        channel: t,
        connectionId: r,
        ip: p,
        port: _,
      });
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
    function Le(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t)
        try {
          et(e);
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
    function Ee(e, t, n, r) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            (n === void 0 && (n = !1), r === void 0 && (r = !1));
            var a = "wa-web-call",
              i = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
            if (
              i &&
              (i.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
                i.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
            ) {
              Me(e.id);
              return;
            }
            (i &&
              i.state !==
                o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
              Je(e.id),
              yield Ke(e, a, t, n, r));
          },
        )),
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t, n) {
      var a = r("justknobx")._("1929");
      o("WAWebVoipSctpSendData").sendData({
        callbacks: {
          failConnection: Ze,
          getIceRestartRxInactivityMs: function () {
            return le;
          },
          getSctpConnectionTimeoutMs: function () {
            return se();
          },
          restartIceProcess: at,
        },
        data_: e,
        ip: t,
        port: a
          ? n
          : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT,
      });
    }
    function Te(e) {
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
        be(e),
        t.isWebTransportWarmStandby !== !0 &&
          (o(
            "WAWebVoipSctpFallbackFamilyOutcome",
          ).recordSctpFallbackFamilyOpened(t.relayIp),
          o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened()),
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
          Se,
          o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread,
        ),
        t.connectionTimeout != null &&
          t.connectionTimeout !== 0 &&
          (window.clearTimeout(t.connectionTimeout),
          (t.connectionTimeout = null)),
        o("WAWebVoipTsLogger").logIceConnectionComplete({
          relayId: t.relayId,
          ip: t.relayIp,
          port: t.relayPort,
        }),
        t.isWebTransportWarmStandby !== !0 &&
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
        if (e.isWebTransportWarmStandby === !0) {
          Ze(e, t);
          return;
        }
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
            Ze(e, n, !0));
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
                Ee(e != null ? e : c, "same_path_reconnect").catch(
                  function (e) {
                    (a && ve(i),
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
                  },
                ));
            }
          };
          if (h > 0) {
            var C = window.setTimeout(function () {
              return y(C);
            }, h);
            o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.add(C);
          } else y(null);
        } else
          (ue ||
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
              : (u && ve(i),
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
            Ze(e, t));
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
        Ce(t),
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
              xe(n);
            }));
        return;
      }
      xe(n);
    }
    function Ne(e) {
      return new (ae || (ae = n("Promise")))(function (t) {
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
      return Ae.apply(this, arguments);
    }
    function Ae() {
      return (
        (Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((ue = !0), pe++, _e++);
          try {
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
              "relay",
            );
            var e = Array.from(
              o("WAWebVoipSctpConnectionState").sctpConnections.keys(),
            );
            (o("WALogger").LOG(
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield o(
                "WAWebVoipSctpDataChannelThreadManager",
              ).stopDataChannelWorker());
            for (var t of e) Le(t);
            (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
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
              ye.clear(),
              o("WAWebVoipRelayConnectQpl").resetVoipRelayConnectQpl(),
              o(
                "WAWebVoipSctpWarmStandby",
              ).resetWebTransportSctpWarmStandbyAtCallBoundary(Le),
              (fe = !1),
              (ue = !1));
          }
        })),
        Ae.apply(this, arguments)
      );
    }
    function Fe(e, t) {
      return Oe.apply(this, arguments);
    }
    function Oe() {
      return (
        (Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = pe;
          (o("WALogger").LOG(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          ),
            yield Be(e, 0, n, t));
        })),
        Oe.apply(this, arguments)
      );
    }
    function Be(e, t, n, r) {
      return We.apply(this, arguments);
    }
    function We() {
      return (
        (We = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            if (!(t >= e.length) && !(ue || pe !== r)) {
              var i = e[t];
              if (i != null) {
                var l = i.isEarlyPacketRelayReconnect,
                  s = i.isWebTransportWarmStandby,
                  u = i.relayConnectionInfo;
                o("WALogger").LOG(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Starting staggered connection ",
                      "/",
                      ": ",
                      "",
                    ])),
                  t + 1,
                  e.length,
                  u.id,
                );
                var c = Ne(u.id);
                if ((Ee(u, a, l, s), t < e.length - 1)) {
                  var d = new (ae || (ae = n("Promise")))(function (e) {
                    window.setTimeout(
                      e,
                      o("WAWebVoipSctpConnectionManagerConstants")
                        .PER_CONNECTION_STAGGER_DELAY_MS,
                    );
                  });
                  yield ae.race([c, d]);
                }
                yield Be(e, t + 1, r, a);
              }
            }
          },
        )),
        We.apply(this, arguments)
      );
    }
    function qe(e, t, n) {
      !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None ||
        t.hasLoggedEarlyPacketRelayEligible === !0 ||
        ((t.hasLoggedEarlyPacketRelayEligible = !0),
        o("WAWebCoreActionsODS").logCallSctpEarlyPacketRelayEligible(n));
    }
    function Ue(e, t, n) {
      return (
        !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        (n &&
          t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None)
      );
    }
    function Ve(e, t) {
      return He.apply(this, arguments);
    }
    function He() {
      return (
        (He = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = (t == null ? void 0 : t.webTransportWarmStandby) === !0;
          if (
            !(
              a &&
              !(yield o(
                "WAWebVoipSctpWarmStandby",
              ).prepareWebTransportSctpWarmStandby())
            )
          ) {
            ((ie = r("justknobx")._("5402") || 1e4),
              (le = r("justknobx")._("5558") || ie));
            var i =
              o("WAWebVoipSctpConnectionState").currentRelayState.size === 0 ||
              fe
                ? "initial"
                : "mid_call_relay_update";
            ((fe = !1), pe++);
            var l = o(
                "WAWebVoipSctpWarmStandby",
              ).getWebTransportSctpWarmStandbyRelayState(e),
              s = o("WAWebVoipGatingUtils").isCurrentCallGroup(),
              u = s && e.enable_web_group_early_packet_relay_reconnect === !0;
            for (var c of o("WAWebVoipSctpConnectionState").currentRelayState) {
              var d = c[0],
                m = c[1];
              if (!l.has(d)) {
                var p = o("WAWebVoipSctpConnectionState").sctpConnections.get(
                  d,
                );
                o("WAWebVoipSctpConnectionManagerConstants")
                  .SctpConnectionConfig.CLOSE_OLD_CONNECTION_BEFORE_CALL_END ||
                (a && (p == null ? void 0 : p.isWebTransportWarmStandby) === !0)
                  ? Le(d)
                  : p != null &&
                    p.state !==
                      o("WAWebVoipRelayConnectionUtils").ConnectionState
                        .Failed &&
                    p.state !==
                      o("WAWebVoipRelayConnectionUtils").ConnectionState
                        .Closed &&
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
              qe(g, y, s);
              var C =
                u &&
                o("WAWebVoipSctpConnectionState").currentRelayState.has(g) &&
                (y == null ? void 0 : y.state) ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.None;
              Ue(g, y, u) &&
                _.push({
                  relayConnectionInfo: h,
                  isEarlyPacketRelayReconnect: C,
                  isWebTransportWarmStandby: a,
                });
            }
            o("WAWebVoipSctpConnectionState").currentRelayState.clear();
            for (var b of l) {
              var v = b[0],
                S = b[1];
              o("WAWebVoipSctpConnectionState").currentRelayState.set(v, S);
            }
            var R = t == null ? void 0 : t.connectionLimit,
              L =
                R != null && a
                  ? o(
                      "WAWebVoipSctpWarmStandby",
                    ).getWebTransportSctpWarmStandbyConnectionSlots(R)
                  : R,
              E = L == null ? _ : _.slice(0, L);
            if (E.length > 0) {
              o("WAWebVoipRelayConnectQpl").maybeStartVoipRelayConnectQpl(!a);
              var k =
                e.enable_web_relay_connection_stagger === !0 &&
                (t == null ? void 0 : t.bypassConnectionStagger) !== !0;
              k
                ? yield Fe(E, i)
                : yield (ae || (ae = n("Promise"))).all(
                    E.map(function (e) {
                      return Ee(
                        e.relayConnectionInfo,
                        i,
                        e.isEarlyPacketRelayReconnect,
                        e.isWebTransportWarmStandby,
                      );
                    }),
                  );
            }
          }
        })),
        He.apply(this, arguments)
      );
    }
    function Ge(e, t, n) {
      (n === void 0 && (n = !1),
        !n &&
          ((e.onopen = function (n) {
            lt(n, t.id, e);
          }),
          (e.onclose = function (e) {
            st(e, t.id);
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
              (Ce(),
                De(
                  a,
                  "data_channel_error",
                  "data_channel_error_reconnecting",
                  "[SCTP]",
                ));
            }
          })));
    }
    function ze(e) {
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
        o(
          "WAWebVoipSctpWarmStandby",
        ).shouldUseMainThreadForWebTransportSctp() ||
        o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled()
          ? o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] DC transfer disabled for ",
                  "",
                ])),
              a.id,
            )
          : (u = Re(s, t, a.id, n)),
        (t.channel = s),
        Ge(s, a, u),
        s
      );
    }
    function je(e, t, n) {
      var r = n != null ? " " + n : "";
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
          r,
        );
        var a = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
        a &&
          (n === "connected" &&
            ((a.iceConnectedTime = Date.now()),
            o("WAWebVoipSctpOdsPortLogging").logCallIceConnectedForPort(
              a.relayPort,
            ),
            o("WAWebVoipSctpOdsPortLogging").logCallDtlsStartedForPort(
              a.relayPort,
            ),
            a.dtlsStallTimeout != null &&
              window.clearTimeout(a.dtlsStallTimeout),
            (a.dtlsStallTimeout = window.setTimeout(function () {
              a.dtlsStallTimeout = null;
              var n = e.connectionState;
              if (n !== "connected") {
                var i = Date.now() - a.iceConnectedTime;
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
                  ie,
                  n,
                  t,
                  r,
                ),
                  o(
                    "WAWebVoipSctpOdsPortLogging",
                  ).logCallDtlsFailedStallForPort(a.relayPort),
                  De(a, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, ie))),
          n === "failed" &&
            (o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(
              a.relayPort,
            ),
            $e(a)));
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
            r,
          );
          var a = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
          if (a) {
            if (
              n === "connected" &&
              a.dtlsStallTimeout != null &&
              (window.clearTimeout(a.dtlsStallTimeout),
              (a.dtlsStallTimeout = null),
              o("WAWebVoipSctpOdsPortLogging").logCallDtlsConnectedForPort(
                a.relayPort,
              ),
              a.iceConnectedTime > 0)
            ) {
              var i = Date.now() - a.iceConnectedTime;
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
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
            (n === "connected" &&
              (o("WAWebVoipRelayConnectQpl").endVoipRelayConnectQplSuccess(
                a.isWebTransportWarmStandby !== !0,
              ),
              a.isEarlyPacketRelayReconnect === !0 &&
                a.hasLoggedEarlyPacketRelayReconnectConnected !== !0 &&
                ((a.hasLoggedEarlyPacketRelayReconnectConnected = !0),
                o(
                  "WAWebCoreActionsODS",
                ).logCallSctpEarlyPacketRelayReconnectEvent("pc_connected")),
              o("WAWebVoipSctpWarmStandby").notifyNativeRelayConnected(a)),
              n === "failed" &&
                o(
                  "WAWebVoipSctpOdsPortLogging",
                ).logCallDtlsFailedPcFailedForPort(a.relayPort));
          }
        }));
    }
    function Ke(e, t, n, r, o) {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (
        (Qe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
            (i &&
            i.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None
              ? ((i.isEarlyPacketRelayReconnect = r),
                (i.isWebTransportWarmStandby = a),
                (i.hasLoggedEarlyPacketRelayReconnectConnected = !1),
                (i.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Connecting),
                (i.connectionStartTime = Date.now()),
                (i.relayConnectionInfo = e),
                (i.relayId = e.relayId),
                (i.relayIp = e.ip),
                (i.relayPort = e.port),
                i.connectionTimeout != null &&
                  i.connectionTimeout !== 0 &&
                  (window.clearTimeout(i.connectionTimeout),
                  (i.connectionTimeout = null)),
                o("WALogger").LOG(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] early conn->connecting ",
                      " buf=",
                      "",
                    ])),
                  e.id,
                  i.packetBuffer.bufferedBytes,
                ))
              : ((i = {
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
                  isEarlyPacketRelayReconnect: r,
                  hasLoggedEarlyPacketRelayReconnectConnected: !1,
                  isWebTransportWarmStandby: a,
                }),
                a ||
                  o(
                    "WAWebVoipSctpFallbackFamilyOutcome",
                  ).recordSctpFallbackFamilyAttempt(i.relayIp),
                o("WAWebVoipSctpConnectionState").sctpConnections.set(i.id, i)),
              r &&
                o(
                  "WAWebCoreActionsODS",
                ).logCallSctpEarlyPacketRelayReconnectEvent("attempted"));
            var l = i;
            i.connectionTimeout = window.setTimeout(function () {
              l.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
                (o("WALogger").WARN(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] Connection timeout (",
                      "ms) in Connecting state for ",
                      "",
                    ])),
                  se(),
                  e.id,
                ),
                Ze(l, "connection_timeout"));
            }, se());
            var s = !1;
            if (
              (!o(
                "WAWebVoipSctpWarmStandby",
              ).shouldUseMainThreadForWebTransportSctp() &&
                !o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() &&
                (s = yield ut()),
              ue)
            )
              return (Je(e.id), Me(e.id), !1);
            (o("WAWebVoipTsLogger").logIceConnectionStart({
              relayId: e.relayId,
              ip: e.ip,
              port: e.port,
            }),
              o("WAWebVoipSctpOdsPortLogging").logCallIceStartedForPort(
                e.port,
              ));
            try {
              var u,
                c,
                d = {};
              if (
                ((d.certificates = [
                  yield o("WAWebVoipDtlsCertAcquire").acquireDtlsCert(n),
                ]),
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
                ue)
              )
                return (Je(e.id), Me(e.id), !1);
              if (Ye(i))
                return (
                  o("WALogger").WARN(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] Aborting stale connect for ",
                        " after certificate acquisition",
                      ])),
                    e.id,
                  ),
                  o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(i),
                  !1
                );
              var m = Date.now(),
                p = new RTCPeerConnection(d),
                _ = Date.now() - m;
              (_ >
                o("WAWebVoipSctpConnectionManagerConstants")
                  .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
                o("WALogger").WARN(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] slow RTCPeerConnection ctor ",
                      ": ",
                      "ms",
                    ])),
                  e.id,
                  _,
                ),
                (i.peerConnection = p),
                (p.onicecandidate = function (t) {
                  t.candidate ||
                    o("WALogger").LOG(
                      j ||
                        (j = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [SctpConnectionManager] ICE gathering complete for ",
                          "",
                        ])),
                      e.id,
                    );
                }),
                je(p, e.id),
                ze({
                  connection: i,
                  peerConnection: p,
                  relayConnectionInfo: e,
                }));
              var f = Date.now(),
                g = yield p.createOffer();
              yield p.setLocalDescription(g);
              var h = g.sdp || "",
                y = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(h, e);
              if (
                (yield p.setRemoteDescription({ sdp: y, type: "answer" }),
                Ye(i))
              )
                return (
                  o("WALogger").WARN(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] Aborting stale connect for ",
                        " after setRemoteDescription",
                      ])),
                    e.id,
                  ),
                  o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(i),
                  o(
                    "WAWebVoipSctpConnectionTeardown",
                  ).closeConnectionDataChannel(i),
                  o(
                    "WAWebVoipSctpConnectionTeardown",
                  ).detachPeerConnectionHandlers(p),
                  p.close(),
                  (i.peerConnection = null),
                  !1
                );
              var C = Date.now() - f;
              C >
                o("WAWebVoipSctpConnectionManagerConstants")
                  .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
                o("WALogger").WARN(
                  Q ||
                    (Q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Slow SDP negotiation for ",
                      ": ",
                      "ms",
                    ])),
                  e.id,
                  C,
                );
              var b = p.iceConnectionState,
                v =
                  (u = (c = i.channel) == null ? void 0 : c.readyState) != null
                    ? u
                    : "unknown";
              return (
                o("WALogger").LOG(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] SDP done ",
                      " DC=",
                      " ICE=",
                      "",
                    ])),
                  e.id,
                  v,
                  b,
                ),
                !0
              );
            } catch (e) {
              return (
                o("WALogger").ERROR(
                  Y ||
                    (Y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] createDataChannel failed: ",
                      "",
                    ])),
                  e,
                ),
                Ze(i, "channel_creation_failed"),
                !1
              );
            }
          },
        )),
        Qe.apply(this, arguments)
      );
    }
    function Xe(e) {
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
    function Ye(e) {
      return (
        ue || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e
      );
    }
    function Je(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t) {
        (o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t),
          o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t));
        var n = t.peerConnection;
        (n &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close(),
          (t.peerConnection = null)),
          Xe(t),
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
    function Ze(e, t, n) {
      (n === void 0 && (n = !1),
        e &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (n || ve(e.id),
          o("WALogger").LOG(
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
          Je(e.id),
          Me(e.id)));
    }
    function et(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        Je(e),
        Me(e));
    }
    function tt(e, t) {
      return Ye(e) || _e !== t;
    }
    function nt(e) {
      var t = e.connection,
        n = e.replacementPeerConnection,
        r = e.stage;
      if (
        (o("WALogger").WARN(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Aborting stale ICE restart for ",
              " at ",
              "",
            ])),
          t.id,
          r,
        ),
        o("WAWebCoreActionsODS").logCallSctpIceRestartAbortedStale(r),
        (t.isReconnecting = !1),
        o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t),
        o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id) === t)
      ) {
        (Je(t.id), rt(t.id));
        return;
      }
      (o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t),
        n != null &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close()),
        (t.peerConnection = null));
    }
    function rt(e) {
      var t = o("WAWebVoipSctpConnectionState").currentRelayState.get(e);
      ue ||
        t == null ||
        (o("WALogger").LOG(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Reconnecting ",
              " after aborted ICE restart",
            ])),
          e,
        ),
        Ee(t, "same_path_reconnect").catch(function (t) {
          o("WALogger").ERROR(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Reconnect after aborted ICE restart failed for ",
                ": ",
                "",
              ])),
            e,
            t,
          );
        }));
    }
    function ot(e) {
      ye.has(e) ||
        (ye.add(e),
        o("WALogger").WARN(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE restart skip: cleanup in progress ",
              "",
            ])),
          e,
        ),
        o(
          "WAWebCoreActionsODS",
        ).logCallSctpIceRestartSkippedCleanupInProgress());
    }
    function at(e) {
      return it.apply(this, arguments);
    }
    function it() {
      return (
        (it = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isReconnecting !== !0) {
            if (ue) {
              ot(e.id);
              return;
            }
            var t = _e;
            if (
              (o("WALogger").LOG(
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Restarting ICE process for connection ",
                    "",
                  ])),
                e.id,
              ),
              !e.hasNonStunPacketSent)
            ) {
              o("WALogger").WARN(
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
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
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
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
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
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
              var i;
              (o("WALogger").LOG(
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Closing previous connection for ",
                    "",
                  ])),
                e.id,
              ),
                window.clearTimeout(
                  (i = e.connectionTimeout) != null ? i : void 0,
                ),
                (e.connectionTimeout = null),
                o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(
                  e,
                ));
              var l = e.peerConnection;
              l &&
                (o(
                  "WAWebVoipSctpConnectionTeardown",
                ).detachPeerConnectionHandlers(l),
                l.close());
            }
            try {
              ((e.hasReceivedFirstPacket = !1), (e.sentMedia = !1));
              var s = {};
              if (
                ((s.certificates = [
                  yield o("WAWebVoipDtlsCertAcquire").acquireDtlsCert(
                    "ice_restart",
                  ),
                ]),
                tt(e, t))
              ) {
                nt({
                  connection: e,
                  replacementPeerConnection: null,
                  stage: "cert_acquire",
                });
                return;
              }
              var u = new RTCPeerConnection(s);
              ((e.peerConnection = u),
                (e.iceConnectedTime = 0),
                e.dtlsStallTimeout != null &&
                  (window.clearTimeout(e.dtlsStallTimeout),
                  (e.dtlsStallTimeout = null)),
                je(u, e.id, "(ICE restart)"),
                ze({
                  connection: e,
                  context: "ICE restart",
                  peerConnection: u,
                  relayConnectionInfo: n,
                }),
                (e.packetBuffer = a),
                e.isWebTransportWarmStandby !== !0 &&
                  o(
                    "WAWebVoipSctpFallbackFamilyOutcome",
                  ).recordSctpFallbackFamilyAttempt(e.relayIp),
                o("WAWebVoipSctpConnectionState").sctpConnections.set(e.id, e));
              var c = yield u.createOffer({ iceRestart: !1 });
              yield u.setLocalDescription(c);
              var d = c.sdp || "",
                m = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(d, n);
              if (
                (yield u.setRemoteDescription({ sdp: m, type: "answer" }),
                tt(e, t))
              ) {
                nt({
                  connection: e,
                  replacementPeerConnection: u,
                  stage: "negotiation",
                });
                return;
              }
              o("WALogger").LOG(
                re ||
                  (re = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart completed for connection ",
                    "",
                  ])),
                e.id,
              );
            } catch (t) {
              (o("WALogger").ERROR(
                oe ||
                  (oe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart failed for connection ",
                    ": ",
                    "",
                  ])),
                e.id,
                t,
              ),
                Ze(e, "ice_restart_failed"));
            }
          }
        })),
        it.apply(this, arguments)
      );
    }
    function lt(e, t, n) {
      var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      if (r) {
        var a, i;
        if (r.channel == null || r.channel !== n) {
          o("WALogger").WARN(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
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
          be(t),
          r.isWebTransportWarmStandby !== !0 &&
            (o(
              "WAWebVoipSctpFallbackFamilyOutcome",
            ).recordSctpFallbackFamilyOpened(r.relayIp),
            o(
              "WAWebVoipTransportFallbackTracker",
            ).notifySctpConnectionOpened()),
          r.connectionTimeout != null &&
            r.connectionTimeout !== 0 &&
            (window.clearTimeout(r.connectionTimeout),
            (r.connectionTimeout = null)),
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
            "relay",
            Se,
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
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
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
            F ||
              (F = babelHelpers.taggedTemplateLiteralLoose([
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
          r.isWebTransportWarmStandby !== !0 &&
            o("WAWebVoipSctpBufferDrain").drainBuffer(t),
          Me(t));
      }
    }
    function st(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      n &&
        (o("WALogger").LOG(
          O ||
            (O = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] DataChannel closed by relay for ",
              ", reconnecting",
            ])),
          t,
        ),
        Ce("remote_close"),
        De(n, "remote_close", "remote_close_reconnecting", "[SCTP]"));
    }
    function ut() {
      return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(
        function () {
          return ie;
        },
      );
    }
    ((l.markSctpEnteredViaWebTransportFallback = o(
      "WAWebVoipSctpFallbackFamilyOutcome",
    ).markSctpEnteredViaWebTransportFallback),
      (l.reportSctpFallbackFamilyOutcome = o(
        "WAWebVoipSctpFallbackFamilyOutcome",
      ).reportSctpFallbackFamilyOutcome),
      (l.resetSctpFallbackFamilyOutcome = o(
        "WAWebVoipSctpFallbackFamilyOutcome",
      ).resetSctpFallbackFamilyOutcome),
      (l.getSctpRelayDebugSummary = o(
        "WAWebVoipSctpConnectionStats",
      ).getSctpRelayDebugSummary),
      (l.mergeWorkerStats = o("WAWebVoipSctpConnectionStats").mergeWorkerStats),
      (l.cleanupWebTransportSctpWarmStandby = ce),
      (l.resetWebTransportSctpWarmStandbyAtCallBoundary = de),
      (l.activateWebTransportSctpWarmStandbyForRelayList = me),
      (l.markSctpCallIdentityChanged = ge),
      (l.sendWAWebVoipDataToRelay = Ie),
      (l.handleDataChannelOpened = Te),
      (l.handleDataChannelErrored = Pe),
      (l.cleanupAllConnections = we),
      (l.handleRelayListUpdate = Ve));
  },
  98,
);
