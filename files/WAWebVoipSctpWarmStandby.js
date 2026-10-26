__d(
  "WAWebVoipSctpWarmStandby",
  [
    "WALogger",
    "WAWebVoipGatingUtils",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpBufferDrain",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpFallbackFamilyOutcome",
    "WAWebVoipStackInterface",
    "WAWebVoipTransportFallbackTracker",
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
      _ = /^edgeray-[a-z0-9]+-\d+\.wt\.whatsapp\.com$/i,
      f = "idle",
      g = null,
      h = 0,
      y = !1;
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (f === "promoted" || f === "closed") return !1;
          var e = h;
          f === "idle" &&
            ((f = "preconnecting"),
            (e = ++h),
            (y = M()),
            (g = o(
              "WAWebVoipSctpDataChannelThreadManager",
            ).stopDataChannelWorker()));
          var t = g;
          if (t != null) {
            try {
              yield t;
            } catch (n) {
              return (
                g === t && e === h && L(),
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] Warm standby preparation failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(n))
                  .sendLogs("voip_sctp_warm_standby_preparation_failed"),
                !1
              );
            }
            g === t && (g = null);
          }
          return f === "preconnecting" && e === h;
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return !y && (f === "preconnecting" || f === "promoted");
    }
    function S() {
      return !(y && f === "preconnecting");
    }
    function R() {
      ((f = "closed"), (g = null));
    }
    function L() {
      ((f = "idle"), (g = null), (y = !1));
    }
    function E(e) {
      R();
      for (var t of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var n = t[0],
          r = t[1];
        r.isWebTransportWarmStandby === !0 && e(n);
      }
    }
    function k(e) {
      (E(e), L());
    }
    function I(e) {
      var t = o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort(),
        n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e, {
          portOverride: function (n) {
            return t
              ? n
              : o("WAWebVoipSctpConnectionManagerConstants")
                  .SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT;
          },
        });
      if (!t) return n;
      for (var r of n.values())
        T(r) &&
          (r.iceTcpPort = o(
            "WAWebVoipSctpConnectionManagerConstants",
          ).SctpConnectionConfig.WEB_PLATFORM_TCP_VIP_PORT);
      return n;
    }
    function T(e) {
      var t = e.clusterDomain,
        n = e.originalPort;
      return (
        n ===
          o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
            .FAUX_WEB_CLIENT_RELAY_PORT &&
        t != null &&
        _.test(t)
      );
    }
    function D(e, t) {
      var n = I(e);
      for (var r of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var a = r[0],
          i = r[1];
        i.isWebTransportWarmStandby === !0 && !n.has(a) && t(a);
      }
      return $();
    }
    function x(e) {
      var t = 0;
      for (var n of o("WAWebVoipSctpConnectionState").sctpConnections.values())
        n.isWebTransportWarmStandby === !0 &&
          n.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          n.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          t++;
      return Math.max(0, e - t);
    }
    function $() {
      var t = !1;
      for (var n of o("WAWebVoipSctpConnectionState").sctpConnections.values())
        if (n.isWebTransportWarmStandby === !0) {
          t = !0;
          break;
        }
      if (!t) return (f !== "promoted" && L(), !1);
      ((f = "promoted"), (g = null));
      var r = !1,
        a = !1;
      for (var i of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var l,
          s,
          u = i[0],
          c = i[1];
        c.isWebTransportWarmStandby === !0 &&
          (o(
            "WAWebVoipSctpFallbackFamilyOutcome",
          ).recordSctpFallbackFamilyAttempt(c.relayIp),
          (c.isWebTransportWarmStandby = !1),
          c.channelTransferred &&
            ((l = o(
              "WAWebVoipSctpDataChannelThreadManager",
            ).getDataChannelThread()) == null
              ? void 0
              : l.activateChannel(u)) !== !0 &&
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SCTP] Warm standby channel ",
                  " not activated on the DataChannel thread; its inbound stays dropped until its watchdog fails it",
                ])),
              u,
            ),
          ((s = c.peerConnection) == null ? void 0 : s.connectionState) ===
            "connected" && ((a = !0), N(c)),
          c.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
            ((a = !0),
            o(
              "WAWebVoipSctpFallbackFamilyOutcome",
            ).recordSctpFallbackFamilyOpened(c.relayIp),
            (r = !0),
            o("WAWebVoipSctpBufferDrain").drainBuffer(u)));
      }
      return (
        r &&
          o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened(),
        y &&
          o(
            "WAWebVoipSctpDataChannelThreadManager",
          ).hasDataChannelThreadOrPending() &&
          P(),
        a
      );
    }
    function P() {
      o("WAWebVoipSctpDataChannelThreadManager")
        .ensureDataChannelRingBuffer()
        .then(function (e) {
          !e &&
            o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread() !=
              null &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] Warm standby send ring did not start, sends stay on the main thread",
                  ])),
              )
              .sendLogs("voip_sctp_warm_standby_send_ring_not_started");
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SCTP] Warm standby send ring failed to start",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip_sctp_warm_standby_send_ring_failed");
        });
    }
    function N(e) {
      var t = e.id,
        n = e.relayIp,
        a = e.relayPort;
      n === "" ||
        e.isEarlyPacketRelayReconnect === !0 ||
        e.isWebTransportWarmStandby === !0 ||
        !w() ||
        o("WAWebVoipStackInterface")
          .getVoipStackInterface()
          .then(function (e) {
            if (e != null && e.type === "web")
              return e.markRelayConnected(n, a);
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] markRelayConnected failed for ",
                    "",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip_sctp_mark_relay_connected_failed");
          });
    }
    function M() {
      try {
        return r("justknobx")._("2253");
      } catch (e) {
        return (
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] standby-on-worker JK unavailable, using fallback=false: ",
                "",
              ])),
            String(e),
          ),
          !1
        );
      }
    }
    function w() {
      try {
        return r("justknobx")._("3110");
      } catch (e) {
        return (
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] elect relay JK unavailable, using fallback=true: ",
                "",
              ])),
            String(e),
          ),
          !0
        );
      }
    }
    ((l.prepareWebTransportSctpWarmStandby = C),
      (l.shouldUseMainThreadForWebTransportSctp = v),
      (l.shouldStartSctpSendRing = S),
      (l.closeWebTransportSctpWarmStandby = R),
      (l.resetWebTransportSctpWarmStandby = L),
      (l.cleanupWebTransportSctpWarmStandby = E),
      (l.resetWebTransportSctpWarmStandbyAtCallBoundary = k),
      (l.getWebTransportSctpWarmStandbyRelayState = I),
      (l.activateWebTransportSctpWarmStandbyForRelayList = D),
      (l.getWebTransportSctpWarmStandbyConnectionSlots = x),
      (l.activateWebTransportSctpWarmStandby = $),
      (l.notifyNativeRelayConnected = N));
  },
  98,
);
