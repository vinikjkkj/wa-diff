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
    "WAWebVoipSctpIceTcpFallback",
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
      ie,
      le,
      se,
      ue,
      ce = 1e4,
      de = 1e4;
    function me() {
      return 2 * ce;
    }
    var pe = !1;
    function _e() {
      o("WAWebVoipSctpWarmStandby").cleanupWebTransportSctpWarmStandby(Te);
    }
    function fe() {
      o(
        "WAWebVoipSctpWarmStandby",
      ).resetWebTransportSctpWarmStandbyAtCallBoundary(Te);
    }
    function ge(e) {
      return o(
        "WAWebVoipSctpWarmStandby",
      ).activateWebTransportSctpWarmStandbyForRelayList(e, Te);
    }
    var he = 0,
      ye = 0,
      Ce = !1;
    function be() {
      Ce = !0;
    }
    var ve = new Set(),
      Se = new Set();
    function Re(e) {
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
    function Le(e) {
      ve.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_succeeded",
        );
    }
    function Ee(e) {
      ve.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_exhausted",
        );
    }
    function ke() {
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
    function Ie(t, n, r, a) {
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
    function Te(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
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
    function De(e, t, n, r) {
      return xe.apply(this, arguments);
    }
    function xe() {
      return (
        (xe = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              Be(e.id);
              return;
            }
            (i &&
              i.state !==
                o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
              lt(e.id),
              yield rt(e, a, t, n, r));
          },
        )),
        xe.apply(this, arguments)
      );
    }
    function $e(e, t, n) {
      var a = r("justknobx")._("1929");
      o("WAWebVoipSctpSendData").sendData({
        callbacks: {
          failConnection: st,
          getIceRestartRxInactivityMs: function () {
            return de;
          },
          getSctpConnectionTimeoutMs: function () {
            return me();
          },
          restartIceProcess: _t,
        },
        data_: e,
        ip: t,
        port: a
          ? n
          : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT,
      });
    }
    function Pe(e) {
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
        Le(e),
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
          ke,
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
        Be(e));
    }
    function Ne(e, t, n, r) {
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
          st(e, t);
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
          !pe &&
          c != null &&
          d <
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS
        ) {
          var m;
          (u &&
            !ve.has(i) &&
            (ve.add(i),
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
            st(e, n, !0));
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
                ? (ve.has(i) ||
                    (ve.add(i),
                    o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                      "transport_failed",
                    )),
                  o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                    "reconnect_attempted",
                  ))
                : ve.delete(i),
                De(e != null ? e : c, "same_path_reconnect").catch(
                  function (e) {
                    (a && Ee(i),
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
          (pe ||
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
              : (u && Ee(i),
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
            st(e, t));
      }
    }
    function Me(e) {
      var t = e.id;
      o("WAWebVoipSctpConnectionState").sctpConnections.get(t) === e &&
        Ne(
          e,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        );
    }
    function we(e) {
      Ne(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function Ae(e) {
      var t = function (t) {
        var e = o("WAWebVoipSctpConnectionState").currentRelayState.get(t);
        if (pe || e == null) return 1;
        (ut(t),
          o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.delete(t),
          De(e, "same_path_reconnect").catch(function (e) {
            o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SCTP] reopen failed for ",
                  ": ",
                  "",
                ])),
              t,
              e,
            );
          }));
      };
      for (var n of e) t(n);
    }
    function Fe(e, t) {
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
        Re(t),
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
              Me(n);
            }));
        return;
      }
      Me(n);
    }
    function Oe(e) {
      return new (ue || (ue = n("Promise")))(function (t) {
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.set(e, t);
      });
    }
    function Be(e) {
      var t = o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.get(
        e,
      );
      t != null &&
        (t(),
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.delete(e));
    }
    function We() {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((pe = !0), he++, ye++);
          try {
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
              "relay",
            );
            var e = Array.from(
              o("WAWebVoipSctpConnectionState").sctpConnections.keys(),
            );
            (o("WALogger").LOG(
              V ||
                (V = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield o(
                "WAWebVoipSctpDataChannelThreadManager",
              ).stopDataChannelWorker());
            for (var t of e) Te(t);
            (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] All connections and relay state cleared",
                  ])),
              ));
          } finally {
            (Ve(),
              o("WAWebVoipRelayConnectQpl").resetVoipRelayConnectQpl(),
              o(
                "WAWebVoipSctpWarmStandby",
              ).resetWebTransportSctpWarmStandbyAtCallBoundary(Te),
              o("WAWebVoipSctpIceTcpFallback").resetIceTcpFallback(),
              (Ce = !1),
              (pe = !1));
          }
        })),
        qe.apply(this, arguments)
      );
    }
    function Ue() {
      (he++, ye++);
      var e = Array.from(
        o("WAWebVoipSctpConnectionState").sctpConnections.values(),
      );
      o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] Closing ",
            " connections, call continues",
          ])),
        e.length,
      );
      for (var t of e) ((t.isReconnecting = !1), Te(t.id));
      (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
        Ve(),
        o(
          "WAWebVoipSctpWarmStandby",
        ).resetWebTransportSctpWarmStandbyAtCallBoundary(Te),
        o("WAWebVoipSctpIceTcpFallback").resetIceTcpFallbackRelayState());
    }
    function Ve() {
      for (var e of o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts)
        window.clearTimeout(e);
      o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.clear();
      for (var t of o(
        "WAWebVoipSctpConnectionState",
      ).connectionOpenedResolvers.values())
        t();
      (o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.clear(),
        o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.clear(),
        ve.clear(),
        Se.clear());
    }
    function He(e, t) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = he;
          (o("WALogger").LOG(
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          ),
            yield ze(e, 0, n, t));
        })),
        Ge.apply(this, arguments)
      );
    }
    function ze(e, t, n, r) {
      return je.apply(this, arguments);
    }
    function je() {
      return (
        (je = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            if (!(t >= e.length) && !(pe || he !== r)) {
              var i = e[t];
              if (i != null) {
                var l = i.isEarlyPacketRelayReconnect,
                  s = i.isWebTransportWarmStandby,
                  u = i.relayConnectionInfo;
                o("WALogger").LOG(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Starting staggered connection ",
                      "/",
                      ": ",
                      "",
                    ])),
                  t + 1,
                  e.length,
                  u.id,
                );
                var c = Oe(u.id);
                if ((De(u, a, l, s), t < e.length - 1)) {
                  var d = new (ue || (ue = n("Promise")))(function (e) {
                    window.setTimeout(
                      e,
                      o("WAWebVoipSctpConnectionManagerConstants")
                        .PER_CONNECTION_STAGGER_DELAY_MS,
                    );
                  });
                  yield ue.race([c, d]);
                }
                yield ze(e, t + 1, r, a);
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
    function Xe(e, t) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = (t == null ? void 0 : t.webTransportWarmStandby) === !0;
          if (
            !(
              r &&
              !(yield o(
                "WAWebVoipSctpWarmStandby",
              ).prepareWebTransportSctpWarmStandby())
            )
          ) {
            ((ce = Je()), (de = Ze(ce)));
            var a =
              o("WAWebVoipSctpConnectionState").currentRelayState.size === 0 ||
              Ce
                ? "initial"
                : "mid_call_relay_update";
            ((Ce = !1), he++);
            var i = o(
                "WAWebVoipSctpWarmStandby",
              ).getWebTransportSctpWarmStandbyRelayState(e),
              l = o("WAWebVoipGatingUtils").isCurrentCallGroup(),
              s = e.enable_web_group_early_packet_relay_reconnect === !0;
            for (var u of o("WAWebVoipSctpConnectionState").currentRelayState) {
              var c = u[0],
                d = u[1];
              if (!i.has(c)) {
                var m = o("WAWebVoipSctpConnectionState").sctpConnections.get(
                  c,
                );
                o("WAWebVoipSctpConnectionManagerConstants")
                  .SctpConnectionConfig.CLOSE_OLD_CONNECTION_BEFORE_CALL_END ||
                (r && (m == null ? void 0 : m.isWebTransportWarmStandby) === !0)
                  ? Te(c)
                  : m != null &&
                    m.state !==
                      o("WAWebVoipRelayConnectionUtils").ConnectionState
                        .Failed &&
                    m.state !==
                      o("WAWebVoipRelayConnectionUtils").ConnectionState
                        .Closed &&
                    ((m.relayConnectionInfo = d),
                    o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                      "retained",
                    ));
              }
            }
            var p = [];
            for (var _ of i) {
              var f = _[0],
                g = _[1],
                h = o("WAWebVoipSctpConnectionState").sctpConnections.get(f);
              Ke(f, h, l);
              var y =
                s &&
                o("WAWebVoipSctpConnectionState").currentRelayState.has(f) &&
                (h == null ? void 0 : h.state) ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.None;
              Qe(f, h, s) &&
                p.push({
                  relayConnectionInfo: g,
                  isEarlyPacketRelayReconnect: y,
                  isWebTransportWarmStandby: r,
                });
            }
            o("WAWebVoipSctpConnectionState").currentRelayState.clear();
            for (var C of i) {
              var b = C[0],
                v = C[1];
              o("WAWebVoipSctpConnectionState").currentRelayState.set(b, v);
            }
            o("WAWebVoipSctpIceTcpFallback").armIceTcpFallback(
              {
                getRelays: function () {
                  return o(
                    "WAWebVoipSctpConnectionState",
                  ).currentRelayState.values();
                },
                moveToIceTcp: Ae,
                moveBackToUdp: Ae,
              },
              r,
            );
            var S = t == null ? void 0 : t.connectionLimit,
              R =
                S != null && r
                  ? o(
                      "WAWebVoipSctpWarmStandby",
                    ).getWebTransportSctpWarmStandbyConnectionSlots(S)
                  : S,
              L = R == null ? p : p.slice(0, R);
            if (L.length > 0) {
              o("WAWebVoipRelayConnectQpl").maybeStartVoipRelayConnectQpl(!r);
              var E =
                e.enable_web_relay_connection_stagger === !0 &&
                (t == null ? void 0 : t.bypassConnectionStagger) !== !0;
              E
                ? yield He(L, a)
                : yield (ue || (ue = n("Promise"))).all(
                    L.map(function (e) {
                      return De(
                        e.relayConnectionInfo,
                        a,
                        e.isEarlyPacketRelayReconnect,
                        e.isWebTransportWarmStandby,
                      );
                    }),
                  );
            }
          }
        })),
        Ye.apply(this, arguments)
      );
    }
    function Je() {
      try {
        return r("justknobx")._("5402") || 1e4;
      } catch (e) {
        return (
          o("WALogger").WARN(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] timeout JK unavailable, using fallback=10000: ",
                "",
              ])),
            String(e),
          ),
          1e4
        );
      }
    }
    function Ze(e) {
      try {
        return r("justknobx")._("5558") || e;
      } catch (t) {
        return (
          o("WALogger").WARN(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE restart RX inactivity JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            e,
            String(t),
          ),
          e
        );
      }
    }
    function et(e, t, n) {
      (n === void 0 && (n = !1),
        !n &&
          ((e.onopen = function (n) {
            gt(n, t.id, e);
          }),
          (e.onclose = function (e) {
            ht(e, t.id);
          }),
          (e.onmessage = function (e) {
            o("WAWebVoipSctpInboundMessageHandler").handleSctpChannelMessage(
              e,
              t,
            );
          }),
          (e.onerror = function (n) {
            o("WALogger").ERROR(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Data channel error for ",
                  ":",
                ])),
              t.id,
            );
            var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id);
            if (r != null && r.channel === e) {
              var a = r;
              (Re(),
                Ne(
                  a,
                  "data_channel_error",
                  "data_channel_error_reconnecting",
                  "[SCTP]",
                ));
            }
          })));
    }
    function tt(e) {
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
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] DC transfer disabled for ",
                  "",
                ])),
              a.id,
            )
          : (u = Ie(s, t, a.id, n)),
        (t.channel = s),
        et(s, a, u),
        s
      );
    }
    function nt(e, t, n) {
      var r = n != null ? " " + n : "";
      ((e.oniceconnectionstatechange = function () {
        var n = e.iceConnectionState;
        o("WALogger").LOG(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
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
        (a &&
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
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
                  r,
                ),
                  o(
                    "WAWebVoipSctpOdsPortLogging",
                  ).logCallDtlsFailedStallForPort(a.relayPort),
                  Ne(a, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, ce))),
          n === "failed" &&
            (o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(
              a.relayPort,
            ),
            we(a))),
          o("WAWebVoipSctpIceTcpFallback").noteRelayIceState(t, n));
      }),
        (e.onconnectionstatechange = function () {
          var n = e.connectionState;
          o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
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
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
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
              (o("WAWebVoipSctpDiagnostics").logSelectedCandidatePair({
                connectionId: t,
                peerConnection: e,
              }),
              o("WAWebVoipRelayConnectQpl").endVoipRelayConnectQplSuccess(
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
          o("WAWebVoipSctpIceTcpFallback").noteRelayConnectionState(n);
        }));
    }
    function rt(e, t, n, r, o) {
      return ot.apply(this, arguments);
    }
    function ot() {
      return (
        (ot = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
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
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] Connection timeout (",
                      "ms) in Connecting state for ",
                      "",
                    ])),
                  me(),
                  e.id,
                ),
                st(l, "connection_timeout"));
            }, me());
            var s = !1;
            if (
              (!o(
                "WAWebVoipSctpWarmStandby",
              ).shouldUseMainThreadForWebTransportSctp() &&
                !o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() &&
                (s = yield yt()),
              pe)
            )
              return (lt(e.id), Be(e.id), !1);
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
                pe)
              )
                return (lt(e.id), Be(e.id), !1);
              if (it(i))
                return (
                  o("WALogger").WARN(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
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
                      Y ||
                        (Y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [SctpConnectionManager] ICE gathering complete for ",
                          "",
                        ])),
                      e.id,
                    );
                }),
                nt(p, e.id),
                tt({
                  connection: i,
                  peerConnection: p,
                  relayConnectionInfo: e,
                }));
              var f = Date.now(),
                g = yield p.createOffer();
              yield p.setLocalDescription(g);
              var h = g.sdp || "",
                y = o("WAWebVoipSctpIceTcpFallback").createRelayAnswerSdp(h, e);
              if (
                (yield p.setRemoteDescription({ sdp: y, type: "answer" }),
                it(i))
              )
                return (
                  o("WALogger").WARN(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
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
              o("WAWebVoipSctpIceTcpFallback").noteRelayIceStarted(me());
              var C = Date.now() - f;
              C >
                o("WAWebVoipSctpConnectionManagerConstants")
                  .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
                o("WALogger").WARN(
                  Z ||
                    (Z = babelHelpers.taggedTemplateLiteralLoose([
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
                  ee ||
                    (ee = babelHelpers.taggedTemplateLiteralLoose([
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
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] createDataChannel failed: ",
                      "",
                    ])),
                  e,
                ),
                st(i, "channel_creation_failed"),
                !1
              );
            }
          },
        )),
        ot.apply(this, arguments)
      );
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
        (t =
          (n = o("WAWebVoipSctpConnectionState").currentRelayState.get(e.id)) ==
          null
            ? void 0
            : n.name) != null
          ? t
          : "N/A";
      (o("WALogger").LOG(
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
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
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] stats bufB=",
              " bindT=",
              "ms",
            ])),
          e.packetBuffer.bufferedBytes,
          a,
        ));
    }
    function it(e) {
      return (
        pe || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e
      );
    }
    function lt(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t) {
        (o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t),
          o("WAWebVoipSctpConnectionTeardown").closeWorkerDataChannel(t),
          o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t));
        var n = t.peerConnection;
        (n &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close(),
          (t.peerConnection = null)),
          at(t),
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
    function st(e, t, n) {
      (n === void 0 && (n = !1),
        e &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (n || Ee(e.id),
          o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
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
          lt(e.id),
          Be(e.id)));
    }
    function ut(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        lt(e),
        Be(e));
    }
    function ct(e, t) {
      return it(e) || ye !== t;
    }
    function dt(e) {
      var t = e.connection,
        n = e.replacementPeerConnection,
        r = e.stage;
      if (
        (o("WALogger").WARN(
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
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
        (lt(t.id), mt(t.id));
        return;
      }
      (o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t),
        n != null &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close()),
        (t.peerConnection = null));
    }
    function mt(e) {
      var t = o("WAWebVoipSctpConnectionState").currentRelayState.get(e);
      pe ||
        t == null ||
        (o("WALogger").LOG(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Reconnecting ",
              " after aborted ICE restart",
            ])),
          e,
        ),
        De(t, "same_path_reconnect").catch(function (t) {
          o("WALogger").ERROR(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Reconnect after aborted ICE restart failed for ",
                ": ",
                "",
              ])),
            e,
            t,
          );
        }));
    }
    function pt(e) {
      Se.has(e) ||
        (Se.add(e),
        o("WALogger").WARN(
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE restart skip: cleanup in progress ",
              "",
            ])),
          e,
        ),
        o(
          "WAWebCoreActionsODS",
        ).logCallSctpIceRestartSkippedCleanupInProgress());
    }
    function _t(e) {
      return ft.apply(this, arguments);
    }
    function ft() {
      return (
        (ft = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isReconnecting !== !0) {
            if (pe) {
              pt(e.id);
              return;
            }
            var t = ye;
            if (
              (o("WALogger").LOG(
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Restarting ICE process for connection ",
                    "",
                  ])),
                e.id,
              ),
              !e.hasNonStunPacketSent)
            ) {
              o("WALogger").WARN(
                re ||
                  (re = babelHelpers.taggedTemplateLiteralLoose([
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
                oe ||
                  (oe = babelHelpers.taggedTemplateLiteralLoose([
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
                ae ||
                  (ae = babelHelpers.taggedTemplateLiteralLoose([
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
                ie ||
                  (ie = babelHelpers.taggedTemplateLiteralLoose([
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
                ct(e, t))
              ) {
                dt({
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
                nt(u, e.id, "(ICE restart)"),
                tt({
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
                m = o("WAWebVoipSctpIceTcpFallback").createRelayAnswerSdp(d, n);
              if (
                (yield u.setRemoteDescription({ sdp: m, type: "answer" }),
                ct(e, t))
              ) {
                dt({
                  connection: e,
                  replacementPeerConnection: u,
                  stage: "negotiation",
                });
                return;
              }
              o("WALogger").LOG(
                le ||
                  (le = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart completed for connection ",
                    "",
                  ])),
                e.id,
              );
            } catch (t) {
              (o("WALogger").ERROR(
                se ||
                  (se = babelHelpers.taggedTemplateLiteralLoose([
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
        ft.apply(this, arguments)
      );
    }
    function gt(e, t, n) {
      var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      if (r) {
        var a, i;
        if (r.channel == null || r.channel !== n) {
          o("WALogger").WARN(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
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
          Le(t),
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
            ke,
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
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
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
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
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
          Be(t));
      }
    }
    function ht(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      n &&
        (o("WALogger").LOG(
          U ||
            (U = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] DataChannel closed by relay for ",
              ", reconnecting",
            ])),
          t,
        ),
        Re("remote_close"),
        Ne(n, "remote_close", "remote_close_reconnecting", "[SCTP]"));
    }
    function yt() {
      return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(
        function () {
          return ce;
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
      (l.cleanupWebTransportSctpWarmStandby = _e),
      (l.resetWebTransportSctpWarmStandbyAtCallBoundary = fe),
      (l.activateWebTransportSctpWarmStandbyForRelayList = ge),
      (l.markSctpCallIdentityChanged = be),
      (l.sendWAWebVoipDataToRelay = $e),
      (l.handleDataChannelOpened = Pe),
      (l.handleDataChannelErrored = Fe),
      (l.cleanupAllConnections = We),
      (l.closeAllRelayConnections = Ue),
      (l.handleRelayListUpdate = Xe));
  },
  98,
);
