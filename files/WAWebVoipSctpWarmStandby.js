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
    async function C() {
      if (f === "promoted" || f === "closed") return !1;
      var t = h;
      f === "idle" &&
        ((f = "preconnecting"),
        (t = ++h),
        (y = N()),
        (g = o(
          "WAWebVoipSctpDataChannelThreadManager",
        ).stopDataChannelWorker()));
      var n = g;
      if (n != null) {
        try {
          await n;
        } catch (a) {
          return (
            g === n && t === h && R(),
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] Warm standby preparation failed",
                  ])),
              )
              .catching(r("getErrorSafe")(a))
              .sendLogs("voip_sctp_warm_standby_preparation_failed"),
            !1
          );
        }
        g === n && (g = null);
      }
      return f === "preconnecting" && t === h;
    }
    function b() {
      return !y && (f === "preconnecting" || f === "promoted");
    }
    function v() {
      return !(y && f === "preconnecting");
    }
    function S() {
      ((f = "closed"), (g = null));
    }
    function R() {
      ((f = "idle"), (g = null), (y = !1));
    }
    function L(e) {
      S();
      for (var t of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var n = t[0],
          r = t[1];
        r.isWebTransportWarmStandby === !0 && e(n);
      }
    }
    function E(e) {
      (L(e), R());
    }
    function k(e) {
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
        I(r) &&
          (r.iceTcpPort = o(
            "WAWebVoipSctpConnectionManagerConstants",
          ).SctpConnectionConfig.WEB_PLATFORM_TCP_VIP_PORT);
      return n;
    }
    function I(e) {
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
    function T(e, t) {
      var n = k(e);
      for (var r of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var a = r[0],
          i = r[1];
        i.isWebTransportWarmStandby === !0 && !n.has(a) && t(a);
      }
      return x();
    }
    function D(e) {
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
    function x() {
      var e = !1;
      for (var t of o("WAWebVoipSctpConnectionState").sctpConnections.values())
        if (t.isWebTransportWarmStandby === !0) {
          e = !0;
          break;
        }
      if (!e) return (f !== "promoted" && R(), !1);
      ((f = "promoted"), (g = null));
      var n = !1,
        r = !1;
      for (var a of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var i,
          l,
          u = a[0],
          c = a[1];
        c.isWebTransportWarmStandby === !0 &&
          (o(
            "WAWebVoipSctpFallbackFamilyOutcome",
          ).recordSctpFallbackFamilyAttempt(c.relayIp),
          (c.isWebTransportWarmStandby = !1),
          c.channelTransferred &&
            ((i = o(
              "WAWebVoipSctpDataChannelThreadManager",
            ).getDataChannelThread()) == null
              ? void 0
              : i.activateChannel(u)) !== !0 &&
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SCTP] Warm standby channel ",
                  " not activated on the DataChannel thread; its inbound stays dropped until its watchdog fails it",
                ])),
              u,
            ),
          ((l = c.peerConnection) == null ? void 0 : l.connectionState) ===
            "connected" && ((r = !0), P(c)),
          c.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
            ((r = !0),
            o(
              "WAWebVoipSctpFallbackFamilyOutcome",
            ).recordSctpFallbackFamilyOpened(c.relayIp),
            (n = !0),
            o("WAWebVoipSctpBufferDrain").drainBuffer(u)));
      }
      return (
        n &&
          o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened(),
        y &&
          o(
            "WAWebVoipSctpDataChannelThreadManager",
          ).hasDataChannelThreadOrPending() &&
          $(),
        r
      );
    }
    function $() {
      o("WAWebVoipSctpDataChannelThreadManager")
        .ensureDataChannelRingBuffer()
        .then(function (e) {
          !e &&
            o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread() !=
              null &&
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] Warm standby send ring did not start, sends stay on the main thread",
                  ])),
              )
              .sendLogs("voip_sctp_warm_standby_send_ring_not_started");
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SCTP] Warm standby send ring failed to start",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip_sctp_warm_standby_send_ring_failed");
        });
    }
    function P(e) {
      var t = e.id,
        n = e.relayIp,
        a = e.relayPort;
      n === "" ||
        e.isEarlyPacketRelayReconnect === !0 ||
        e.isWebTransportWarmStandby === !0 ||
        !M() ||
        o("WAWebVoipStackInterface")
          .getVoipStackInterface()
          .then(function (e) {
            if (e != null && e.type === "web")
              return e.markRelayConnected(n, a);
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] markRelayConnected failed for ",
                    "",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip_sctp_mark_relay_connected_failed");
          });
    }
    function N() {
      try {
        return r("justknobx")._("2253");
      } catch (e) {
        return (
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] standby-on-worker JK unavailable, using fallback=false: ",
                "",
              ])),
            String(e),
          ),
          !1
        );
      }
    }
    function M() {
      try {
        return r("justknobx")._("3110");
      } catch (e) {
        return (
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
      (l.shouldUseMainThreadForWebTransportSctp = b),
      (l.shouldStartSctpSendRing = v),
      (l.closeWebTransportSctpWarmStandby = S),
      (l.resetWebTransportSctpWarmStandby = R),
      (l.cleanupWebTransportSctpWarmStandby = L),
      (l.resetWebTransportSctpWarmStandbyAtCallBoundary = E),
      (l.getWebTransportSctpWarmStandbyRelayState = k),
      (l.activateWebTransportSctpWarmStandbyForRelayList = T),
      (l.getWebTransportSctpWarmStandbyConnectionSlots = D),
      (l.activateWebTransportSctpWarmStandby = x),
      (l.notifyNativeRelayConnected = P));
  },
  98,
);
