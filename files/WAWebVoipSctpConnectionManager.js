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
      ie,
      le,
      se,
      ue = 1e4,
      ce = 1e4;
    function de() {
      return 2 * ue;
    }
    var me = !1;
    function pe() {
      o("WAWebVoipSctpWarmStandby").cleanupWebTransportSctpWarmStandby(Ie);
    }
    function _e() {
      o(
        "WAWebVoipSctpWarmStandby",
      ).resetWebTransportSctpWarmStandbyAtCallBoundary(Ie);
    }
    function fe(e) {
      return o(
        "WAWebVoipSctpWarmStandby",
      ).activateWebTransportSctpWarmStandbyForRelayList(e, Ie);
    }
    var ge = 0,
      he = 0,
      ye = !1;
    function Ce() {
      ye = !0;
    }
    var be = new Set(),
      ve = new Set();
    function Se(e) {
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
    function Re(e) {
      be.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_succeeded",
        );
    }
    function Le(e) {
      be.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_exhausted",
        );
    }
    function Ee() {
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
    function ke(t, n, r, a) {
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
    function Ie(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t)
        try {
          lt(e);
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
    function Te(e, t, n, r) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              Fe(e.id);
              return;
            }
            (i &&
              i.state !==
                o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
              at(e.id),
              yield tt(e, a, t, n, r));
          },
        )),
        De.apply(this, arguments)
      );
    }
    function xe(e, t, n) {
      var a = r("justknobx")._("1929");
      o("WAWebVoipSctpSendData").sendData({
        callbacks: {
          failConnection: it,
          getIceRestartRxInactivityMs: function () {
            return ce;
          },
          getSctpConnectionTimeoutMs: function () {
            return de();
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
    function $e(e) {
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
        Re(e),
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
          Ee,
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
        Fe(e));
    }
    function Pe(e, t, n, r) {
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
          it(e, t);
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
          !me &&
          c != null &&
          d <
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS
        ) {
          var m;
          (u &&
            !be.has(i) &&
            (be.add(i),
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
            it(e, n, !0));
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
                ? (be.has(i) ||
                    (be.add(i),
                    o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                      "transport_failed",
                    )),
                  o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                    "reconnect_attempted",
                  ))
                : be.delete(i),
                Te(e != null ? e : c, "same_path_reconnect").catch(
                  function (e) {
                    (a && Le(i),
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
          (me ||
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
              : (u && Le(i),
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
            it(e, t));
      }
    }
    function Ne(e) {
      var t = e.id;
      o("WAWebVoipSctpConnectionState").sctpConnections.get(t) === e &&
        Pe(
          e,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        );
    }
    function Me(e) {
      Pe(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function we(e, t) {
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
        Se(t),
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
              Ne(n);
            }));
        return;
      }
      Ne(n);
    }
    function Ae(e) {
      return new (se || (se = n("Promise")))(function (t) {
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.set(e, t);
      });
    }
    function Fe(e) {
      var t = o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.get(
        e,
      );
      t != null &&
        (t(),
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.delete(e));
    }
    function Oe() {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((me = !0), ge++, he++);
          try {
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
              "relay",
            );
            var e = Array.from(
              o("WAWebVoipSctpConnectionState").sctpConnections.keys(),
            );
            (o("WALogger").LOG(
              U ||
                (U = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield o(
                "WAWebVoipSctpDataChannelThreadManager",
              ).stopDataChannelWorker());
            for (var t of e) Ie(t);
            (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] All connections and relay state cleared",
                  ])),
              ));
          } finally {
            (qe(),
              o("WAWebVoipRelayConnectQpl").resetVoipRelayConnectQpl(),
              o(
                "WAWebVoipSctpWarmStandby",
              ).resetWebTransportSctpWarmStandbyAtCallBoundary(Ie),
              (ye = !1),
              (me = !1));
          }
        })),
        Be.apply(this, arguments)
      );
    }
    function We() {
      (ge++, he++);
      var e = Array.from(
        o("WAWebVoipSctpConnectionState").sctpConnections.values(),
      );
      o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] Closing ",
            " connections, call continues",
          ])),
        e.length,
      );
      for (var t of e) ((t.isReconnecting = !1), Ie(t.id));
      (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
        qe(),
        o(
          "WAWebVoipSctpWarmStandby",
        ).resetWebTransportSctpWarmStandbyAtCallBoundary(Ie));
    }
    function qe() {
      for (var e of o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts)
        window.clearTimeout(e);
      o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.clear();
      for (var t of o(
        "WAWebVoipSctpConnectionState",
      ).connectionOpenedResolvers.values())
        t();
      (o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.clear(),
        o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.clear(),
        be.clear(),
        ve.clear());
    }
    function Ue(e, t) {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ge;
          (o("WALogger").LOG(
            H ||
              (H = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          ),
            yield He(e, 0, n, t));
        })),
        Ve.apply(this, arguments)
      );
    }
    function He(e, t, n, r) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            if (!(t >= e.length) && !(me || ge !== r)) {
              var i = e[t];
              if (i != null) {
                var l = i.isEarlyPacketRelayReconnect,
                  s = i.isWebTransportWarmStandby,
                  u = i.relayConnectionInfo;
                o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Starting staggered connection ",
                      "/",
                      ": ",
                      "",
                    ])),
                  t + 1,
                  e.length,
                  u.id,
                );
                var c = Ae(u.id);
                if ((Te(u, a, l, s), t < e.length - 1)) {
                  var d = new (se || (se = n("Promise")))(function (e) {
                    window.setTimeout(
                      e,
                      o("WAWebVoipSctpConnectionManagerConstants")
                        .PER_CONNECTION_STAGGER_DELAY_MS,
                    );
                  });
                  yield se.race([c, d]);
                }
                yield He(e, t + 1, r, a);
              }
            }
          },
        )),
        Ge.apply(this, arguments)
      );
    }
    function ze(e, t, n) {
      !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None ||
        t.hasLoggedEarlyPacketRelayEligible === !0 ||
        ((t.hasLoggedEarlyPacketRelayEligible = !0),
        o("WAWebCoreActionsODS").logCallSctpEarlyPacketRelayEligible(n));
    }
    function je(e, t, n) {
      return (
        !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        (n &&
          t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None)
      );
    }
    function Ke(e, t) {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (
        (Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = (t == null ? void 0 : t.webTransportWarmStandby) === !0;
          if (
            !(
              r &&
              !(yield o(
                "WAWebVoipSctpWarmStandby",
              ).prepareWebTransportSctpWarmStandby())
            )
          ) {
            ((ue = Xe()), (ce = Ye(ue)));
            var a =
              o("WAWebVoipSctpConnectionState").currentRelayState.size === 0 ||
              ye
                ? "initial"
                : "mid_call_relay_update";
            ((ye = !1), ge++);
            var i = o(
                "WAWebVoipSctpWarmStandby",
              ).getWebTransportSctpWarmStandbyRelayState(e),
              l = o("WAWebVoipGatingUtils").isCurrentCallGroup(),
              s = l && e.enable_web_group_early_packet_relay_reconnect === !0;
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
                  ? Ie(c)
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
              ze(f, h, l);
              var y =
                s &&
                o("WAWebVoipSctpConnectionState").currentRelayState.has(f) &&
                (h == null ? void 0 : h.state) ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.None;
              je(f, h, s) &&
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
                ? yield Ue(L, a)
                : yield (se || (se = n("Promise"))).all(
                    L.map(function (e) {
                      return Te(
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
        Qe.apply(this, arguments)
      );
    }
    function Xe() {
      try {
        return r("justknobx")._("5402") || 1e4;
      } catch (e) {
        return (
          o("WALogger").WARN(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] timeout JK unavailable, using fallback=10000: ",
                "",
              ])),
            String(e),
          ),
          1e4
        );
      }
    }
    function Ye(e) {
      try {
        return r("justknobx")._("5558") || e;
      } catch (t) {
        return (
          o("WALogger").WARN(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
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
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Data channel error for ",
                  ":",
                ])),
              t.id,
            );
            var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id);
            if (r != null && r.channel === e) {
              var a = r;
              (Se(),
                Pe(
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
        o(
          "WAWebVoipSctpWarmStandby",
        ).shouldUseMainThreadForWebTransportSctp() ||
        o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled()
          ? o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] DC transfer disabled for ",
                  "",
                ])),
              a.id,
            )
          : (u = ke(s, t, a.id, n)),
        (t.channel = s),
        Je(s, a, u),
        s
      );
    }
    function et(e, t, n) {
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
                  ue,
                  n,
                  t,
                  r,
                ),
                  o(
                    "WAWebVoipSctpOdsPortLogging",
                  ).logCallDtlsFailedStallForPort(a.relayPort),
                  Pe(a, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, ue))),
          n === "failed" &&
            (o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(
              a.relayPort,
            ),
            Me(a)));
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
    function tt(e, t, n, r, o) {
      return nt.apply(this, arguments);
    }
    function nt() {
      return (
        (nt = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
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
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] Connection timeout (",
                      "ms) in Connecting state for ",
                      "",
                    ])),
                  de(),
                  e.id,
                ),
                it(l, "connection_timeout"));
            }, de());
            var s = !1;
            if (
              (!o(
                "WAWebVoipSctpWarmStandby",
              ).shouldUseMainThreadForWebTransportSctp() &&
                !o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() &&
                (s = yield gt()),
              me)
            )
              return (at(e.id), Fe(e.id), !1);
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
                me)
              )
                return (at(e.id), Fe(e.id), !1);
              if (ot(i))
                return (
                  o("WALogger").WARN(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
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
                  Q ||
                    (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                      X ||
                        (X = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [SctpConnectionManager] ICE gathering complete for ",
                          "",
                        ])),
                      e.id,
                    );
                }),
                et(p, e.id),
                Ze({
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
                ot(i))
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
                  J ||
                    (J = babelHelpers.taggedTemplateLiteralLoose([
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
                  Z ||
                    (Z = babelHelpers.taggedTemplateLiteralLoose([
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
                  ee ||
                    (ee = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] createDataChannel failed: ",
                      "",
                    ])),
                  e,
                ),
                it(i, "channel_creation_failed"),
                !1
              );
            }
          },
        )),
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
        x ||
          (x = babelHelpers.taggedTemplateLiteralLoose([
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
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
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
        me || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e
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
          (n || Le(e.id),
          o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
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
          Fe(e.id)));
    }
    function lt(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        at(e),
        Fe(e));
    }
    function st(e, t) {
      return ot(e) || he !== t;
    }
    function ut(e) {
      var t = e.connection,
        n = e.replacementPeerConnection,
        r = e.stage;
      if (
        (o("WALogger").WARN(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
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
        (at(t.id), ct(t.id));
        return;
      }
      (o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t),
        n != null &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close()),
        (t.peerConnection = null));
    }
    function ct(e) {
      var t = o("WAWebVoipSctpConnectionState").currentRelayState.get(e);
      me ||
        t == null ||
        (o("WALogger").LOG(
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Reconnecting ",
              " after aborted ICE restart",
            ])),
          e,
        ),
        Te(t, "same_path_reconnect").catch(function (t) {
          o("WALogger").ERROR(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
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
      ve.has(e) ||
        (ve.add(e),
        o("WALogger").WARN(
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
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
            if (me) {
              dt(e.id);
              return;
            }
            var t = he;
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
              var i;
              (o("WALogger").LOG(
                ae ||
                  (ae = babelHelpers.taggedTemplateLiteralLoose([
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
                st(e, t))
              ) {
                ut({
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
                et(u, e.id, "(ICE restart)"),
                Ze({
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
                st(e, t))
              ) {
                ut({
                  connection: e,
                  replacementPeerConnection: u,
                  stage: "negotiation",
                });
                return;
              }
              o("WALogger").LOG(
                ie ||
                  (ie = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart completed for connection ",
                    "",
                  ])),
                e.id,
              );
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
            F ||
              (F = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
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
          Re(t),
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
            Ee,
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
          B ||
            (B = babelHelpers.taggedTemplateLiteralLoose([
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
            W ||
              (W = babelHelpers.taggedTemplateLiteralLoose([
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
          Fe(t));
      }
    }
    function ft(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      n &&
        (o("WALogger").LOG(
          q ||
            (q = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] DataChannel closed by relay for ",
              ", reconnecting",
            ])),
          t,
        ),
        Se("remote_close"),
        Pe(n, "remote_close", "remote_close_reconnecting", "[SCTP]"));
    }
    function gt() {
      return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(
        function () {
          return ue;
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
      (l.cleanupWebTransportSctpWarmStandby = pe),
      (l.resetWebTransportSctpWarmStandbyAtCallBoundary = _e),
      (l.activateWebTransportSctpWarmStandbyForRelayList = fe),
      (l.markSctpCallIdentityChanged = Ce),
      (l.sendWAWebVoipDataToRelay = xe),
      (l.handleDataChannelOpened = $e),
      (l.handleDataChannelErrored = we),
      (l.cleanupAllConnections = Oe),
      (l.closeAllRelayConnections = We),
      (l.handleRelayListUpdate = Ke));
  },
  98,
);
