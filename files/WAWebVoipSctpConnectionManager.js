__d(
  "WAWebVoipSctpConnectionManager",
  [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebODS",
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
    "WAWebVoipSctpFallbackFamilyOutcome",
    "WAWebVoipSctpIceTcpFallback",
    "WAWebVoipSctpInboundMessageHandler",
    "WAWebVoipSctpOdsPortLogging",
    "WAWebVoipSctpSendData",
    "WAWebVoipSctpStatsInstrumentation",
    "WAWebVoipSctpWarmStandby",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipTsLogger",
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
      (r("WAWebODS").incr("web.call.sctp.data_channel_relay_error"),
        e === "no_first_response_timeout"
          ? r("WAWebODS").incr(
              "web.call.sctp.data_channel_relay_error.no_first_response_timeout",
            )
          : e === "remote_close"
            ? r("WAWebODS").incr(
                "web.call.sctp.data_channel_relay_error.remote_close",
              )
            : e === "rx_stall_timeout"
              ? r("WAWebODS").incr(
                  "web.call.sctp.data_channel_relay_error.rx_stall_timeout",
                )
              : r("WAWebODS").incr(
                  "web.call.sctp.data_channel_relay_error.onerror",
                ));
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
        standby: n.isWebTransportWarmStandby === !0,
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
          nt(e);
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
    async function Te(e, t, n, r) {
      (n === void 0 && (n = !1), r === void 0 && (r = !1));
      var a = "wa-web-call",
        i = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
      if (
        i &&
        (i.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
          i.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
      ) {
        Fe(e.id);
        return;
      }
      (i &&
        i.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
        et(e.id),
        await Ye({
          channelLabel: a,
          isEarlyPacketRelayReconnect: n,
          isWebTransportWarmStandby: r,
          origin: t,
          relayConnectionInfo: e,
        }));
    }
    function De(e, t, n) {
      var a = r("justknobx")._("1929");
      o("WAWebVoipSctpSendData").sendData({
        callbacks: {
          failConnection: tt,
          getIceRestartRxInactivityMs: function () {
            return ce;
          },
          getSctpConnectionTimeoutMs: function () {
            return de();
          },
          restartIceProcess: lt,
        },
        data_: e,
        ip: t,
        port: a
          ? n
          : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT,
      });
    }
    function xe(e) {
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
    function $e(e, t, n, r) {
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
          tt(e, t);
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
            tt(e, n, !0));
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
            tt(e, t));
      }
    }
    function Pe(e) {
      var t = e.id;
      o("WAWebVoipSctpConnectionState").sctpConnections.get(t) === e &&
        $e(
          e,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        );
    }
    function Ne(e) {
      $e(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function Me(e) {
      var t = function (t) {
        var e = o("WAWebVoipSctpConnectionState").currentRelayState.get(t);
        if (me || e == null) return 1;
        (nt(t),
          o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.delete(t),
          Te(e, "same_path_reconnect").catch(function (e) {
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
    function we(e, t) {
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
        Se(t),
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
              Pe(n);
            }));
        return;
      }
      Pe(n);
    }
    function Ae(e) {
      return new Promise(function (t) {
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
    async function Oe() {
      ((me = !0), ge++, he++);
      try {
        o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("relay");
        var e = Array.from(
          o("WAWebVoipSctpConnectionState").sctpConnections.keys(),
        );
        (o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Cleaning up ",
              " connections",
            ])),
          e.length,
        ),
          await o(
            "WAWebVoipSctpDataChannelThreadManager",
          ).stopDataChannelWorker());
        for (var t of e) Ie(t);
        (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
          o("WAWebVoipTsLogger").cleanup(),
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] All connections and relay state cleared",
              ])),
          ));
      } finally {
        (We(),
          o("WAWebVoipRelayConnectQpl").resetVoipRelayConnectQpl(),
          o(
            "WAWebVoipSctpWarmStandby",
          ).resetWebTransportSctpWarmStandbyAtCallBoundary(Ie),
          o("WAWebVoipSctpIceTcpFallback").resetIceTcpFallback(),
          (ye = !1),
          (me = !1));
      }
    }
    function Be() {
      (ge++, he++);
      var e = Array.from(
        o("WAWebVoipSctpConnectionState").sctpConnections.values(),
      );
      o("WALogger").LOG(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] Closing ",
            " connections, call continues",
          ])),
        e.length,
      );
      for (var t of e) ((t.isReconnecting = !1), Ie(t.id));
      (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
        We(),
        o(
          "WAWebVoipSctpWarmStandby",
        ).resetWebTransportSctpWarmStandbyAtCallBoundary(Ie),
        o("WAWebVoipSctpIceTcpFallback").resetIceTcpFallbackRelayState());
    }
    function We() {
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
    async function qe(e, t) {
      var n = ge;
      (o("WALogger").LOG(
        E ||
          (E = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] Staggered creation: ",
            " connections",
          ])),
        e.length,
      ),
        await Ue(e, 0, n, t));
    }
    async function Ue(e, t, n, r) {
      if (!(t >= e.length) && !(me || ge !== n)) {
        var a = e[t];
        if (a != null) {
          var i = a.isEarlyPacketRelayReconnect,
            l = a.isWebTransportWarmStandby,
            s = a.relayConnectionInfo;
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Starting staggered connection ",
                "/",
                ": ",
                "",
              ])),
            t + 1,
            e.length,
            s.id,
          );
          var u = Ae(s.id);
          if ((Te(s, r, i, l), t < e.length - 1)) {
            var c = new Promise(function (e) {
              window.setTimeout(
                e,
                o("WAWebVoipSctpConnectionManagerConstants")
                  .PER_CONNECTION_STAGGER_DELAY_MS,
              );
            });
            await Promise.race([u, c]);
          }
          await Ue(e, t + 1, n, r);
        }
      }
    }
    function Ve(e, t, n) {
      !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None ||
        t.hasLoggedEarlyPacketRelayEligible === !0 ||
        ((t.hasLoggedEarlyPacketRelayEligible = !0),
        o("WAWebCoreActionsODS").logCallSctpEarlyPacketRelayEligible(n));
    }
    function He(e, t, n) {
      return (
        !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        (n &&
          t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None)
      );
    }
    async function Ge(e, t) {
      var n = (t == null ? void 0 : t.webTransportWarmStandby) === !0;
      if (
        !(
          n &&
          !(await o(
            "WAWebVoipSctpWarmStandby",
          ).prepareWebTransportSctpWarmStandby())
        )
      ) {
        ((ue = ze()), (ce = je(ue)));
        var r =
          o("WAWebVoipSctpConnectionState").currentRelayState.size === 0 || ye
            ? "initial"
            : "mid_call_relay_update";
        ((ye = !1), ge++);
        var a = o(
            "WAWebVoipSctpWarmStandby",
          ).getWebTransportSctpWarmStandbyRelayState(e),
          i = o("WAWebVoipGatingUtils").isCurrentCallGroup(),
          l = e.enable_web_group_early_packet_relay_reconnect === !0;
        for (var s of o("WAWebVoipSctpConnectionState").currentRelayState) {
          var u = s[0],
            c = s[1];
          if (!a.has(u)) {
            var d = o("WAWebVoipSctpConnectionState").sctpConnections.get(u);
            o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .CLOSE_OLD_CONNECTION_BEFORE_CALL_END ||
            (n && (d == null ? void 0 : d.isWebTransportWarmStandby) === !0)
              ? Ie(u)
              : d != null &&
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
          Ve(_, g, i);
          var h =
            l &&
            o("WAWebVoipSctpConnectionState").currentRelayState.has(_) &&
            (g == null ? void 0 : g.state) ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.None;
          He(_, g, l) &&
            m.push({
              relayConnectionInfo: f,
              isEarlyPacketRelayReconnect: h,
              isWebTransportWarmStandby: n,
            });
        }
        o("WAWebVoipSctpConnectionState").currentRelayState.clear();
        for (var y of a) {
          var C = y[0],
            b = y[1];
          o("WAWebVoipSctpConnectionState").currentRelayState.set(C, b);
        }
        o("WAWebVoipSctpIceTcpFallback").armIceTcpFallback(
          {
            getRelays: function () {
              return o(
                "WAWebVoipSctpConnectionState",
              ).currentRelayState.values();
            },
            moveToIceTcp: Me,
            moveBackToUdp: Me,
          },
          n,
        );
        var v = t == null ? void 0 : t.connectionLimit,
          S =
            v != null && n
              ? o(
                  "WAWebVoipSctpWarmStandby",
                ).getWebTransportSctpWarmStandbyConnectionSlots(v)
              : v,
          R = S == null ? m : m.slice(0, S);
        if (R.length > 0) {
          o("WAWebVoipRelayConnectQpl").maybeStartVoipRelayConnectQpl(!n);
          var L =
            e.enable_web_relay_connection_stagger === !0 &&
            (t == null ? void 0 : t.bypassConnectionStagger) !== !0;
          L
            ? await qe(R, r)
            : await Promise.all(
                R.map(function (e) {
                  return Te(
                    e.relayConnectionInfo,
                    r,
                    e.isEarlyPacketRelayReconnect,
                    e.isWebTransportWarmStandby,
                  );
                }),
              );
        }
      }
    }
    function ze() {
      try {
        return r("justknobx")._("5402") || 1e4;
      } catch (e) {
        return (
          o("WALogger").WARN(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] timeout JK unavailable, using fallback=10000: ",
                "",
              ])),
            String(e),
          ),
          1e4
        );
      }
    }
    function je(e) {
      try {
        return r("justknobx")._("5558") || e;
      } catch (t) {
        return (
          o("WALogger").WARN(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ke(e, t, n) {
      (n === void 0 && (n = !1),
        !n &&
          ((e.onopen = function (n) {
            st(n, t.id, e);
          }),
          (e.onclose = function (e) {
            ut(e, t.id);
          }),
          (e.onmessage = function (e) {
            o("WAWebVoipSctpInboundMessageHandler").handleSctpChannelMessage(
              e,
              t,
            );
          }),
          (e.onerror = function (n) {
            o("WALogger").ERROR(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Data channel error for ",
                  ":",
                ])),
              t.id,
            );
            var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id);
            if (r != null && r.channel === e) {
              var a = r;
              (Se(),
                $e(
                  a,
                  "data_channel_error",
                  "data_channel_error_reconnecting",
                  "[SCTP]",
                ));
            }
          })));
    }
    function Qe(e) {
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
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] DC transfer disabled for ",
                  "",
                ])),
              a.id,
            )
          : (u = ke(s, t, a.id, n)),
        (t.channel = s),
        Ke(s, a, u),
        s
      );
    }
    function Xe(e, t, n) {
      var r = n != null ? " " + n : "";
      ((e.oniceconnectionstatechange = function () {
        var n = e.iceConnectionState;
        o("WALogger").LOG(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
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
                  $e(a, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, ue))),
          n === "failed" &&
            (o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(
              a.relayPort,
            ),
            Ne(a))),
          o("WAWebVoipSctpIceTcpFallback").noteRelayIceState(t, n));
      }),
        (e.onconnectionstatechange = function () {
          var n = e.connectionState;
          o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
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
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
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
    async function Ye(e) {
      var t = e.channelLabel,
        n = e.isEarlyPacketRelayReconnect,
        r = e.isWebTransportWarmStandby,
        a = e.origin,
        i = e.relayConnectionInfo,
        l = o("WAWebVoipSctpConnectionState").sctpConnections.get(i.id);
      (l && l.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None
        ? ((l.isEarlyPacketRelayReconnect = n),
          (l.isWebTransportWarmStandby = r),
          (l.hasLoggedEarlyPacketRelayReconnectConnected = !1),
          (l.state = o(
            "WAWebVoipRelayConnectionUtils",
          ).ConnectionState.Connecting),
          (l.connectionStartTime = Date.now()),
          (l.relayConnectionInfo = i),
          (l.relayId = i.relayId),
          (l.relayIp = i.ip),
          (l.relayPort = i.port),
          l.connectionTimeout != null &&
            l.connectionTimeout !== 0 &&
            (window.clearTimeout(l.connectionTimeout),
            (l.connectionTimeout = null)),
          o("WALogger").LOG(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] early conn->connecting ",
                " buf=",
                "",
              ])),
            i.id,
            l.packetBuffer.bufferedBytes,
          ))
        : ((l = {
            state: o("WAWebVoipRelayConnectionUtils").ConnectionState
              .Connecting,
            channel: null,
            peerConnection: null,
            packetBuffer: o(
              "WAWebVoipRelayConnectionUtils",
            ).createPacketBuffer(),
            id: i.id,
            relayConnectionInfo: i,
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
            relayId: i.relayId,
            relayIp: i.ip,
            relayPort: i.port,
            iceConnectedTime: 0,
            dtlsStallTimeout: null,
            isEarlyPacketRelayReconnect: n,
            hasLoggedEarlyPacketRelayReconnectConnected: !1,
            isWebTransportWarmStandby: r,
          }),
          r ||
            o(
              "WAWebVoipSctpFallbackFamilyOutcome",
            ).recordSctpFallbackFamilyAttempt(l.relayIp),
          o("WAWebVoipSctpConnectionState").sctpConnections.set(l.id, l)),
        n &&
          o("WAWebCoreActionsODS").logCallSctpEarlyPacketRelayReconnectEvent(
            "attempted",
          ));
      var s = l;
      l.connectionTimeout = window.setTimeout(function () {
        s.state ===
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          (o("WALogger").WARN(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] Connection timeout (",
                "ms) in Connecting state for ",
                "",
              ])),
            de(),
            i.id,
          ),
          tt(s, "connection_timeout"));
      }, de());
      var u = !1;
      if (
        (!o(
          "WAWebVoipSctpWarmStandby",
        ).shouldUseMainThreadForWebTransportSctp() &&
          !o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() &&
          (u = await ct({
            withRing: o("WAWebVoipSctpWarmStandby").shouldStartSctpSendRing(),
          })),
        me)
      )
        return (et(i.id), Fe(i.id), !1);
      (o("WAWebVoipTsLogger").logIceConnectionStart({
        relayId: i.relayId,
        ip: i.ip,
        port: i.port,
      }),
        o("WAWebVoipSctpOdsPortLogging").logCallIceStartedForPort(i.port));
      try {
        var c,
          d,
          m = {};
        if (
          ((m.certificates = [
            await o("WAWebVoipDtlsCertAcquire").acquireDtlsCert(a),
          ]),
          await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
          me)
        )
          return (et(i.id), Fe(i.id), !1);
        if (Ze(l))
          return (
            o("WALogger").WARN(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Aborting stale connect for ",
                  " after certificate acquisition",
                ])),
              i.id,
            ),
            o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(l),
            !1
          );
        var p = Date.now(),
          _ = new RTCPeerConnection(m),
          f = Date.now() - p;
        (f >
          o("WAWebVoipSctpConnectionManagerConstants")
            .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
          o("WALogger").WARN(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] slow RTCPeerConnection ctor ",
                ": ",
                "ms",
              ])),
            i.id,
            f,
          ),
          (l.peerConnection = _),
          (_.onicecandidate = function (e) {
            e.candidate ||
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE gathering complete for ",
                    "",
                  ])),
                i.id,
              );
          }),
          Xe(_, i.id),
          Qe({ connection: l, peerConnection: _, relayConnectionInfo: i }));
        var g = Date.now(),
          h = await _.createOffer();
        await _.setLocalDescription(h);
        var y = h.sdp || "",
          C = o("WAWebVoipSctpIceTcpFallback").createRelayAnswerSdp(y, i);
        if ((await _.setRemoteDescription({ sdp: C, type: "answer" }), Ze(l)))
          return (
            o("WALogger").WARN(
              W ||
                (W = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Aborting stale connect for ",
                  " after setRemoteDescription",
                ])),
              i.id,
            ),
            o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(l),
            o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(l),
            o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(
              _,
            ),
            _.close(),
            (l.peerConnection = null),
            !1
          );
        o("WAWebVoipSctpIceTcpFallback").noteRelayIceStarted(de());
        var b = Date.now() - g;
        b >
          o("WAWebVoipSctpConnectionManagerConstants")
            .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
          o("WALogger").WARN(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Slow SDP negotiation for ",
                ": ",
                "ms",
              ])),
            i.id,
            b,
          );
        var v = _.iceConnectionState,
          S =
            (c = (d = l.channel) == null ? void 0 : d.readyState) != null
              ? c
              : "unknown";
        return (
          o("WALogger").LOG(
            U ||
              (U = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] SDP done ",
                " DC=",
                " ICE=",
                "",
              ])),
            i.id,
            S,
            v,
          ),
          !0
        );
      } catch (e) {
        return (
          o("WALogger").ERROR(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] createDataChannel failed: ",
                "",
              ])),
            e,
          ),
          tt(l, "channel_creation_failed"),
          !1
        );
      }
    }
    function Je(e) {
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
        H ||
          (H = babelHelpers.taggedTemplateLiteralLoose([
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
          G ||
            (G = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] stats bufB=",
              " bindT=",
              "ms",
            ])),
          e.packetBuffer.bufferedBytes,
          a,
        ));
    }
    function Ze(e) {
      return (
        me || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e
      );
    }
    function et(e) {
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
          Je(t),
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
    function tt(e, t, n) {
      (n === void 0 && (n = !1),
        e &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (n || Le(e.id),
          o("WALogger").LOG(
            z ||
              (z = babelHelpers.taggedTemplateLiteralLoose([
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
          et(e.id),
          Fe(e.id)));
    }
    function nt(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        et(e),
        Fe(e));
    }
    function rt(e, t) {
      return Ze(e) || he !== t;
    }
    function ot(e) {
      var t = e.connection,
        n = e.replacementPeerConnection,
        r = e.stage;
      if (
        (o("WALogger").WARN(
          j ||
            (j = babelHelpers.taggedTemplateLiteralLoose([
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
        (et(t.id), at(t.id));
        return;
      }
      (o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t),
        n != null &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close()),
        (t.peerConnection = null));
    }
    function at(e) {
      var t = o("WAWebVoipSctpConnectionState").currentRelayState.get(e);
      me ||
        t == null ||
        (o("WALogger").LOG(
          K ||
            (K = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Reconnecting ",
              " after aborted ICE restart",
            ])),
          e,
        ),
        Te(t, "same_path_reconnect").catch(function (t) {
          o("WALogger").ERROR(
            Q ||
              (Q = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Reconnect after aborted ICE restart failed for ",
                ": ",
                "",
              ])),
            e,
            t,
          );
        }));
    }
    function it(e) {
      ve.has(e) ||
        (ve.add(e),
        o("WALogger").WARN(
          X ||
            (X = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE restart skip: cleanup in progress ",
              "",
            ])),
          e,
        ),
        r("WAWebODS").incr(
          "web.call.sctp.ice_restart.skipped_cleanup_in_progress",
        ));
    }
    async function lt(e) {
      if (e.isReconnecting !== !0) {
        if (me) {
          it(e.id);
          return;
        }
        var t = he;
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
        var n = o("WAWebVoipSctpConnectionState").currentRelayState.get(e.id);
        if (!n) {
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
        var r = e.peerConnection;
        if (!r) {
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
            te ||
              (te = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Closing previous connection for ",
                "",
              ])),
            e.id,
          ),
            window.clearTimeout((i = e.connectionTimeout) != null ? i : void 0),
            (e.connectionTimeout = null),
            o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(e));
          var l = e.peerConnection;
          l &&
            (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(
              l,
            ),
            l.close());
        }
        try {
          ((e.hasReceivedFirstPacket = !1), (e.sentMedia = !1));
          var s = {};
          if (
            ((s.certificates = [
              await o("WAWebVoipDtlsCertAcquire").acquireDtlsCert(
                "ice_restart",
              ),
            ]),
            rt(e, t))
          ) {
            ot({
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
            Xe(u, e.id, "(ICE restart)"),
            Qe({
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
          var c = await u.createOffer({ iceRestart: !1 });
          await u.setLocalDescription(c);
          var d = c.sdp || "",
            m = o("WAWebVoipSctpIceTcpFallback").createRelayAnswerSdp(d, n);
          if (
            (await u.setRemoteDescription({ sdp: m, type: "answer" }), rt(e, t))
          ) {
            ot({
              connection: e,
              replacementPeerConnection: u,
              stage: "negotiation",
            });
            return;
          }
          o("WALogger").LOG(
            ne ||
              (ne = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] ICE restart completed for connection ",
                "",
              ])),
            e.id,
          );
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
            tt(e, "ice_restart_failed"));
        }
      }
    }
    function st(e, t, n) {
      var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      if (r) {
        var a, i;
        if (r.channel == null || r.channel !== n) {
          o("WALogger").WARN(
            oe ||
              (oe = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              ae ||
                (ae = babelHelpers.taggedTemplateLiteralLoose([
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
          ie ||
            (ie = babelHelpers.taggedTemplateLiteralLoose([
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
            le ||
              (le = babelHelpers.taggedTemplateLiteralLoose([
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
    function ut(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      n &&
        (o("WALogger").LOG(
          se ||
            (se = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] DataChannel closed by relay for ",
              ", reconnecting",
            ])),
          t,
        ),
        Se("remote_close"),
        $e(n, "remote_close", "remote_close_reconnecting", "[SCTP]"));
    }
    function ct(e) {
      return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(
        function () {
          return ue;
        },
        e,
      );
    }
    ((l.cleanupWebTransportSctpWarmStandby = pe),
      (l.resetWebTransportSctpWarmStandbyAtCallBoundary = _e),
      (l.activateWebTransportSctpWarmStandbyForRelayList = fe),
      (l.markSctpCallIdentityChanged = Ce),
      (l.sendWAWebVoipDataToRelay = De),
      (l.handleDataChannelOpened = xe),
      (l.handleDataChannelErrored = we),
      (l.cleanupAllConnections = Oe),
      (l.closeAllRelayConnections = Be),
      (l.handleRelayListUpdate = Ge));
  },
  98,
);
