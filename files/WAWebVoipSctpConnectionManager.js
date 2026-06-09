__d(
  "WAWebVoipSctpConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebNoop",
    "WAWebReleaseToEventLoop",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionSetup",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpDiagnostics",
    "WAWebVoipSctpOdsPortLogging",
    "WAWebVoipSctpStatsInstrumentation",
    "WAWebVoipStackInterface",
    "WAWebVoipTsLogger",
    "asyncToGeneratorRuntime",
    "justknobx",
    "nullthrows",
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
      z;
    function j() {
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
    function K(t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      if (n)
        try {
          Se(t);
        } catch (n) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Error cleaning up relay connection ",
                ": ",
                "",
              ])),
            t,
            n,
          );
        }
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
          if (
            n &&
            (n.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
              n.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
          ) {
            ae(e.id);
            return;
          }
          (n &&
            n.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
            be(e.id),
            yield me(e));
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t, n) {
      var a = r("justknobx")._("1929");
      $e(
        e,
        t,
        a
          ? n
          : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT,
      );
    }
    function J(e, t) {
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
    function Z(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t == null) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
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
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] Connection ",
              " state updated to Open (notified from pthread)",
            ])),
          e,
        ),
        o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
          "relay",
          j,
          o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThreadRaw,
        ),
        t.connectionTimeout &&
          (window.clearTimeout(t.connectionTimeout),
          (t.connectionTimeout = null)),
        o("WAWebVoipTsLogger").logIceConnectionComplete({
          relayId: t.relayId,
          ip: t.relayIp,
          port: t.relayPort,
        }),
        Te(e),
        ae(e));
    }
    function ee(e, t, n, r) {
      var a,
        i = e.id;
      if (
        !(
          e.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
          e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed
        )
      ) {
        var l = o("WAWebVoipSctpConnectionState").getCurrentRelayState().get(i),
          s =
            (a = o(
              "WAWebVoipSctpConnectionState",
            ).samePathReconnectAttempts.get(i)) != null
              ? a
              : 0;
        if (
          !o("WAWebVoipSctpConnectionState").isCleaningUp() &&
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
          var _ =
            (u = o("WAWebVoipSctpConnectionManagerConstants")
              .SAME_PATH_RECONNECT_BACKOFF_MS[s]) != null
              ? u
              : 0;
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
            _,
          ),
            ve(e, n));
          var f = function (n) {
            (n != null &&
              o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.delete(
                n,
              ),
              !o("WAWebVoipSctpConnectionState").isCleaningUp() &&
                Q(l, !1).catch(function (e) {
                  o("WALogger").ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
          if (_ > 0) {
            var g = window.setTimeout(function () {
              return f(g);
            }, _);
            o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.add(g);
          } else f(null);
        } else
          (o("WAWebVoipSctpConnectionState").isCleaningUp() ||
            (l == null
              ? o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
            ve(e, t));
      }
    }
    function te(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t == null) {
        o("WALogger").WARN(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] handleDataChannelErrored: connection not found for ",
              "",
            ])),
          e,
        );
        return;
      }
      (o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [DCThread] Connection ",
            " errored (notified from pthread)",
          ])),
        e,
      ),
        ee(
          t,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        ));
    }
    function ne(e) {
      ee(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function re(e, t) {
      if (t === "no_first_response_timeout" || t === "rx_stall_timeout") {
        var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
        if ((n == null ? void 0 : n.peerConnection) != null) {
          (o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
                te(e);
              }));
          return;
        }
      }
      te(e);
    }
    function oe(e) {
      return new (z || (z = n("Promise")))(function (t) {
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.set(e, t);
      });
    }
    function ae(e) {
      var t = o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.get(
        e,
      );
      t != null &&
        (t(),
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.delete(e));
    }
    function ie() {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WAWebVoipSctpConnectionState").setIsCleaningUp(!0),
            o("WAWebVoipSctpConnectionState").bumpStaggerGeneration());
          try {
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
              "relay",
            );
            var e = Array.from(
              o("WAWebVoipSctpConnectionState").sctpConnections.keys(),
            );
            (o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield o(
                "WAWebVoipSctpDataChannelThreadManager",
              ).stopDataChannelWorker());
            for (var t of e) K(t);
            (o("WAWebVoipSctpConnectionState").getCurrentRelayState().clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] All connections and relay state cleared",
                  ])),
              ));
          } finally {
            var n;
            for (var r of o("WAWebVoipSctpConnectionState")
              .pendingReconnectTimeouts)
              window.clearTimeout(r);
            (n = o(
              "WAWebVoipSctpConnectionState",
            )).pendingReconnectTimeouts.clear();
            for (var a of o(
              "WAWebVoipSctpConnectionState",
            ).connectionOpenedResolvers.values())
              a();
            (n.connectionOpenedResolvers.clear(),
              n.samePathReconnectAttempts.clear(),
              n.setIsCleaningUp(!1));
          }
        })),
        le.apply(this, arguments)
      );
    }
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebVoipSctpConnectionState").getStaggerGeneration();
          o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          );
          for (var r = 0; r < e.length; r++) {
            if (
              o("WAWebVoipSctpConnectionState").isCleaningUp() ||
              o("WAWebVoipSctpConnectionState").getStaggerGeneration() !== t
            )
              return;
            var a = e[r];
            o("WALogger").LOG(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Starting staggered connection ",
                  "/",
                  ": ",
                  "",
                ])),
              r + 1,
              e.length,
              a.id,
            );
            var i = oe(a.id);
            if ((Q(a, !1), r < e.length - 1)) {
              var l = new (z || (z = n("Promise")))(function (e) {
                window.setTimeout(
                  e,
                  o("WAWebVoipSctpConnectionManagerConstants")
                    .PER_CONNECTION_STAGGER_DELAY_MS,
                );
              });
              yield z.race([i, l]);
            }
          }
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("justknobx")._("5402") || 1e4;
          (o("WAWebVoipSctpConnectionState").setSctpTimeoutMs(t),
            o("WAWebVoipSctpConnectionState").setIceRestartRxInactivityMs(
              r("justknobx")._("5558") || t,
            ),
            o("WAWebVoipSctpConnectionState").bumpStaggerGeneration());
          var a = r("justknobx")._("1929"),
            i = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(
              e,
              {
                portOverride: function (t) {
                  return a
                    ? t
                    : o("WAWebVoipSctpConnectionManagerConstants")
                        .SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT;
                },
              },
            ),
            l = o("WAWebVoipSctpConnectionState").getCurrentRelayState();
          for (var s of l) {
            var u = s[0],
              c = s[1];
            i.has(u) ||
              (o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
                .CLOSE_OLD_CONNECTION_BEFORE_CALL_END &&
                K(u));
          }
          var d = [];
          for (var m of i) {
            var p = m[0],
              _ = m[1];
            (!l.has(p) ||
              !o("WAWebVoipSctpConnectionState").sctpConnections.has(p)) &&
              d.push(_);
          }
          if (
            (o("WAWebVoipSctpConnectionState").setCurrentRelayState(i),
            d.length > 0)
          ) {
            var f = r("justknobx")._("2412");
            f
              ? yield se(d)
              : yield (z || (z = n("Promise"))).all(
                  d.map(function (e) {
                    return Q(e, !1);
                  }),
                );
          }
        })),
        de.apply(this, arguments)
      );
    }
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
          t &&
          t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None
            ? ((t.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Connecting),
              (t.connectionStartTime = Date.now()),
              (t.relayId = e.relayId),
              (t.relayIp = e.ip),
              (t.relayPort = e.port),
              t.connectionTimeout &&
                (window.clearTimeout(t.connectionTimeout),
                (t.connectionTimeout = null)),
              o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] early conn->connecting ",
                    " buf=",
                    "",
                  ])),
                e.id,
                t.packetBuffer.bufferedBytes,
              ))
            : ((t = {
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
              o("WAWebVoipSctpConnectionState").sctpConnections.set(t.id, t));
          var n = t;
          t.connectionTimeout = window.setTimeout(function () {
            n.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
              (o("WALogger").WARN(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] Connection timeout (",
                    "ms) in Connecting state for ",
                    "",
                  ])),
                o("WAWebVoipSctpConnectionState").sctpConnectionTimeoutMs(),
                e.id,
              ),
              ve(n, "connection_timeout"));
          }, o("WAWebVoipSctpConnectionState").sctpConnectionTimeoutMs());
          var a = !1;
          if (
            (o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() ||
              (a = yield o(
                "WAWebVoipSctpDataChannelThreadManager",
              ).initDataChannelWorker(
                o("WAWebVoipSctpConnectionState").getSctpTimeoutMs(),
              )),
            o("WAWebVoipSctpConnectionState").isCleaningUp() ||
              (r("justknobx")._("360") &&
                o("WAWebVoipSctpConnectionManagerConstants").RELAY_VIP_IPS.has(
                  e.ip,
                ) &&
                (e.port = 3478),
              o("WAWebVoipTsLogger").logIceConnectionStart({
                relayId: e.relayId,
                ip: e.ip,
                port: e.port,
              }),
              o("WAWebVoipSctpOdsPortLogging").logIceStartedForPort(e.port),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              o("WAWebVoipSctpConnectionState").isCleaningUp()))
          )
            return (be(e.id), ae(e.id), !1);
          if (Ce(t))
            return (
              o("WALogger").WARN(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Aborting stale connect for ",
                    " after yield",
                  ])),
                e.id,
              ),
              ye(t),
              ae(e.id),
              !1
            );
          try {
            var i,
              l,
              s = r("justknobx")._("404"),
              u = {};
            if (
              s &&
              ((u.certificates = [
                yield RTCPeerConnection.generateCertificate({
                  name: "ECDSA",
                  namedCurve: "P-256",
                }),
              ]),
              Ce(t))
            )
              return (
                o("WALogger").WARN(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Aborting stale connect for ",
                      " after certificate generation",
                    ])),
                  e.id,
                ),
                ye(t),
                ae(e.id),
                !1
              );
            var c = Date.now(),
              d = new RTCPeerConnection(u),
              m = Date.now() - c;
            (m >
              o("WAWebVoipSctpConnectionManagerConstants")
                .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
              o("WALogger").WARN(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] slow RTCPeerConnection ctor ",
                    ": ",
                    "ms",
                  ])),
                e.id,
                m,
              ),
              (t.peerConnection = d),
              (d.onicecandidate = function (t) {
                t.candidate ||
                  o("WALogger").LOG(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] ICE gathering complete for ",
                        "",
                      ])),
                    e.id,
                  );
              }),
              o(
                "WAWebVoipSctpConnectionSetup",
              ).setupPeerConnectionStateHandlers(d, e.id),
              o("WAWebVoipSctpConnectionSetup").createAndSetupDataChannel(
                d,
                t,
                e,
              ));
            var p = Date.now(),
              _ = yield d.createOffer();
            yield d.setLocalDescription(_);
            var f = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(
              _.sdp || "",
              e,
            );
            if (
              (yield d.setRemoteDescription({ sdp: f, type: "answer" }), Ce(t))
            )
              return (
                o("WALogger").WARN(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Aborting stale connect for ",
                      " after setRemoteDescription",
                    ])),
                  e.id,
                ),
                ye(t),
                he(t),
                ge(d),
                d.close(),
                (t.peerConnection = null),
                ae(e.id),
                !1
              );
            var g = Date.now() - p;
            g >
              o("WAWebVoipSctpConnectionManagerConstants")
                .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
              o("WALogger").WARN(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Slow SDP negotiation for ",
                    ": ",
                    "ms",
                  ])),
                e.id,
                g,
              );
            var h = d.iceConnectionState,
              y =
                (i = (l = t.channel) == null ? void 0 : l.readyState) != null
                  ? i
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
                e.id,
                y,
                h,
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
              ve(t, "channel_creation_failed"),
              !1
            );
          }
        })),
        pe.apply(this, arguments)
      );
    }
    function _e(e) {
      var t,
        n,
        r = e.stats,
        a = "N/A";
      r.connectionReadyTime !== 0 &&
        e.connectionStartTime > 0 &&
        (a = (r.connectionReadyTime - e.connectionStartTime).toString());
      var i =
        (t =
          (n = o("WAWebVoipSctpConnectionState")
            .getCurrentRelayState()
            .get(e.id)) == null
            ? void 0
            : n.name) != null
          ? t
          : "N/A";
      (o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
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
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] stats bufB=",
              " bindT=",
              "ms",
            ])),
          e.packetBuffer.bufferedBytes,
          a,
        ));
    }
    function fe(e) {
      var t;
      ((e.onopen = t = r("WAWebNoop")),
        (e.onclose = t),
        (e.onmessage = t),
        (e.onerror = t));
    }
    function ge(e) {
      ((e.onicecandidate = r("WAWebNoop")),
        (e.oniceconnectionstatechange = r("WAWebNoop")),
        (e.onconnectionstatechange = r("WAWebNoop")));
    }
    function he(e) {
      var t = e.channel;
      t != null && (fe(t), t.close(), (e.channel = null));
    }
    function ye(e) {
      (e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null)),
        e.dtlsStallTimeout != null &&
          (window.clearTimeout(e.dtlsStallTimeout),
          (e.dtlsStallTimeout = null)));
    }
    function Ce(e) {
      return (
        o("WAWebVoipSctpConnectionState").isCleaningUp() ||
        o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e
      );
    }
    function be(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t) {
        (ye(t), he(t));
        var n = t.peerConnection;
        (n && (ge(n), n.close(), (t.peerConnection = null)),
          _e(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          (t.isReconnecting == null || !t.isReconnecting) &&
            (o("WAWebVoipSctpOdsPortLogging").logSctpConnectionCleanedUpForPort(
              t.relayPort,
            ),
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
    function ve(e, t) {
      e &&
        e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
        e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
        (o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Failing (closing) connection for ",
              ", reason: ",
              "",
            ])),
          e.id,
          t,
        ),
        o("WAWebVoipSctpOdsPortLogging").logSctpConnectionFailedForPort(
          e.relayPort,
        ),
        e.relayIp !== "" &&
          o("WAWebVoipTsLogger").logIceConnectionFailed(
            { relayId: e.relayId, ip: e.relayIp, port: e.relayPort },
            1,
          ),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        be(e.id),
        ae(e.id));
    }
    function Se(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        be(e),
        ae(e));
    }
    function Re(e, t, n) {
      var r,
        a,
        i = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      if (i) {
        if (i.channel == null || i.channel !== n) {
          o("WALogger").WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
          i.state ===
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
        ) {
          ((i.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
            (i.stats.connectionReadyTime = Date.now()),
            (i.isReconnecting = !1),
            i.connectionTimeout &&
              (window.clearTimeout(i.connectionTimeout),
              (i.connectionTimeout = null)),
            o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
              "relay",
              j,
              o("WAWebVoipSctpDataChannelThreadManager")
                .getDataChannelThreadRaw,
            ));
          var l =
              i.connectionStartTime > 0
                ? Date.now() - i.connectionStartTime
                : 0,
            s =
              (r =
                (a = o("WAWebVoipSctpConnectionState")
                  .getCurrentRelayState()
                  .get(t)) == null
                  ? void 0
                  : a.name) != null
                ? r
                : "N/A";
          (o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
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
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SCTP] ICE done id=",
                  " ip=",
                  " port=",
                  "",
                ])),
              i.relayId,
              i.relayIp,
              i.relayPort,
            ),
            o("WAWebVoipTsLogger").logIceConnectionComplete({
              relayId: i.relayId,
              ip: i.relayIp,
              port: i.relayPort,
            }),
            Te(t),
            ae(t));
        }
      }
    }
    function Le(e, t) {
      (o("WALogger").LOG(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] DataChannel closed for ",
            "",
          ])),
        t,
      ),
        Se(t));
    }
    function Ee(e, t) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id),
            i = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
          if (i.type !== "web" || !a) {
            o("WALogger").WARN(
              H ||
                (H = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] connection not found on sctp message for ",
                  "",
                ])),
              t.id,
            );
            return;
          }
          var l = yield o("WAWebVoipRelayConnectionUtils").dataToArrayBuffer(
            e.data,
          );
          if (l == null) {
            o("WALogger").ERROR(
              G ||
                (G = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Unexpected data type: ",
                  "",
                ])),
              typeof e.data,
            );
            return;
          }
          (a.stats.receivedPackets++,
            (a.stats.receivedBytes += l.byteLength),
            a.stats.firstResponseRecvTime === 0 &&
              (a.stats.firstResponseRecvTime = Date.now()),
            (a.lastRxPacketTime = Date.now()),
            a.hasReceivedFirstPacket || (a.hasReceivedFirstPacket = !0));
          var s = r("justknobx")._("1929"),
            u;
          if (s) {
            var c;
            u = (c = t.originalPort) != null ? c : t.port;
          } else
            ((n = t.originalPort) != null ? n : t.port) ===
            o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT
              ? (u = o("WAWebVoipSctpConnectionManagerConstants")
                  .SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT)
              : (u = o("WAWebVoipSctpConnectionManagerConstants")
                  .SctpConnectionConfig.FAUX_WEB_CLIENT_RELAY_PORT);
          yield i.handleOnTransportMessage(l, t.ip, u);
        })),
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t) {
      var n = o("WAWebVoipRelayConnectionUtils").inspectPacketType(t);
      if (n !== o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN)
        var r = o("WAWebVoipRelayConnectionUtils").bufferPacket(
          e.packetBuffer,
          t,
          e.stats,
          o("WAWebVoipSctpConnectionManagerConstants").MAX_BUFFER_BYTES,
        );
    }
    function Te(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (
        !(
          !t ||
          t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
          !t.channel
        )
      ) {
        for (var n = t.channel; t.packetBuffer.packets.length > 0; ) {
          var r = o(
              "WAWebVoipSctpDataChannelThreadManager",
            ).getDataChannelThread(),
            a = t.channelTransferred ? r != null : n.readyState === "open";
          if (!a) break;
          var i = o("WAWebVoipRelayConnectionUtils").shiftPacket(
            t.packetBuffer,
          );
          if (i != null) {
            var l = i.byteLength;
            try {
              if (t.channelTransferred && r != null) {
                var s = r.sendPacket(e, i);
                if (!s) {
                  t.stats.droppedPackets++;
                  break;
                }
              } else
                (n.send(i), t.stats.sentPackets++, (t.stats.sentBytes += l));
            } catch (e) {
              t.stats.droppedPackets++;
              break;
            }
          }
        }
        t.packetBuffer.packets.length;
      }
    }
    function De(e) {
      var t = {
        state: o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
        channel: null,
        peerConnection: null,
        packetBuffer: o("WAWebVoipRelayConnectionUtils").createPacketBuffer(),
        id: e,
        connectionTimeout: null,
        hasReceivedFirstPacket: !1,
        hasNonStunPacketSent: !1,
        lastRxPacketTime: 0,
        stats: o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
        isReconnecting: !1,
        sentMedia: !1,
        channelTransferred: !1,
        connectionStartTime: 0,
        relayId: 0,
        relayIp: "",
        relayPort: 0,
        iceConnectedTime: 0,
        dtlsStallTimeout: null,
      };
      return (
        (t.connectionTimeout = window.setTimeout(function () {
          t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
            (o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Early packet connection timeout (",
                  "ms) for ",
                  "",
                ])),
              o("WAWebVoipSctpConnectionState").sctpConnectionTimeoutMs(),
              e,
            ),
            ve(t, "early_packet_timeout"));
        }, o("WAWebVoipSctpConnectionState").sctpConnectionTimeoutMs())),
        o("WAWebVoipSctpConnectionState").sctpConnections.set(e, t),
        t
      );
    }
    function xe(e) {
      (e.hasNonStunPacketSent || (e.hasNonStunPacketSent = !0),
        e.sentMedia !== !0 && (e.sentMedia = !0));
    }
    function $e(e, t, n) {
      var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(t, n),
        a = o("WAWebVoipSctpConnectionState").sctpConnections.get(r);
      (a == null &&
        (o("WALogger").LOG(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] conn not found, creating early ",
              "",
            ])),
          r,
        ),
        (a = De(r))),
        a.stats.firstSendRequestTime === 0 &&
          (a.stats.firstSendRequestTime = Date.now()));
      var i =
          e instanceof SharedArrayBuffer ? new Uint8Array(e).slice().buffer : e,
        l = i.byteLength,
        s = o("WAWebVoipRelayConnectionUtils").inspectPacketType(i);
      if (
        s === o("WAWebVoipRelayConnectionUtils").PacketType.STUN_ALLOC &&
        a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        a.sentMedia === !0 &&
        !a.channelTransferred
      ) {
        var u = o("WAWebVoipSctpConnectionState").getIceRestartRxInactivityMs(),
          c = Date.now() - a.lastRxPacketTime;
        if (c > u) {
          (o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] STUN_ALLOC no rx ",
                "ms>",
                "ms, ICE restart ",
                "",
              ])),
            c,
            u,
            r,
          ),
            o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(
              a.packetBuffer,
            ),
            o("WAWebVoipRelayConnectionUtils").bufferPacket(
              a.packetBuffer,
              i,
              a.stats,
              o("WAWebVoipSctpConnectionManagerConstants").MAX_BUFFER_BYTES,
            ),
            o("WAWebVoipSctpConnectionSetup").restartIceProcess(a));
          return;
        }
      }
      if (a.channelTransferred) {
        var d = o(
          "WAWebVoipSctpDataChannelThreadManager",
        ).getDataChannelThread();
        if (d == null)
          (o("WALogger").WARN(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] transferred but inactive ",
                ", legacy path",
              ])),
            r,
          ),
            (a.channelTransferred = !1));
        else if (
          a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ) {
          var m = d.sendPacket(r, i);
          (m ||
            (a.stats.droppedPackets++,
            o("WALogger").WARN(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Failed to send packet for ",
                  ", pthread may be shutting down",
                ])),
              r,
            )),
            s === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN &&
              xe(a));
          return;
        }
        Ie(a, i);
        return;
      }
      if (
        a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        a.channel != null
      ) {
        try {
          (a.channel.send(i),
            a.stats.sentPackets++,
            (a.stats.sentBytes += l),
            s === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN &&
              xe(a));
        } catch (e) {}
        return;
      }
      Ie(a, i);
    }
    var Pe = o("WAWebVoipSctpConnectionSetup").setSctpSetupCallbacks({
      onChannelOpen: Re,
      onChannelClose: Le,
      onChannelMessage: Ee,
      onSamePathReconnect: ee,
      onIceConnectionFailed: ne,
      closeConnectionDataChannel: he,
      detachPeerConnectionHandlers: ge,
      failConnection: ve,
    });
    ((l.sendWAWebVoipDataToRelay = Y),
      (l.mergeWorkerStats = J),
      (l.handleDataChannelOpened = Z),
      (l.handleDataChannelErrored = re),
      (l.cleanupAllConnections = ie),
      (l.handleRelayListUpdate = ce));
  },
  98,
);
