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
      c = /^edgeray-[a-z0-9]+-\d+\.wt\.whatsapp\.com$/i,
      d = "idle",
      m = null,
      p = 0;
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (d === "promoted" || d === "closed") return !1;
          var e = p;
          d === "idle" &&
            ((d = "preconnecting"),
            (e = ++p),
            (m = o(
              "WAWebVoipSctpDataChannelThreadManager",
            ).stopDataChannelWorker()));
          var t = m;
          if (t != null) {
            try {
              yield t;
            } catch (n) {
              return (
                m === t && e === p && y(),
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] Warm standby preparation failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(n))
                  .sendLogs("voip_sctp_warm_standby_preparation_failed"),
                !1
              );
            }
            m === t && (m = null);
          }
          return d === "preconnecting" && e === p;
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return d === "preconnecting" || d === "promoted";
    }
    function h() {
      ((d = "closed"), (m = null));
    }
    function y() {
      ((d = "idle"), (m = null));
    }
    function C(e) {
      h();
      for (var t of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var n = t[0],
          r = t[1];
        r.isWebTransportWarmStandby === !0 && e(n);
      }
    }
    function b(e) {
      (C(e), y());
    }
    function v(e) {
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
        S(r) &&
          (r.iceTcpPort = o(
            "WAWebVoipSctpConnectionManagerConstants",
          ).SctpConnectionConfig.WEB_PLATFORM_TCP_VIP_PORT);
      return n;
    }
    function S(e) {
      var t = e.clusterDomain,
        n = e.originalPort;
      return (
        n ===
          o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
            .FAUX_WEB_CLIENT_RELAY_PORT &&
        t != null &&
        c.test(t)
      );
    }
    function R(e, t) {
      var n = v(e);
      for (var r of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var a = r[0],
          i = r[1];
        i.isWebTransportWarmStandby === !0 && !n.has(a) && t(a);
      }
      return E();
    }
    function L(e) {
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
    function E() {
      var e = !1;
      for (var t of o("WAWebVoipSctpConnectionState").sctpConnections.values())
        if (t.isWebTransportWarmStandby === !0) {
          e = !0;
          break;
        }
      if (!e) return (d !== "promoted" && y(), !1);
      ((d = "promoted"), (m = null));
      var n = !1,
        r = !1;
      for (var a of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var i,
          l = a[0],
          s = a[1];
        s.isWebTransportWarmStandby === !0 &&
          (o(
            "WAWebVoipSctpFallbackFamilyOutcome",
          ).recordSctpFallbackFamilyAttempt(s.relayIp),
          (s.isWebTransportWarmStandby = !1),
          ((i = s.peerConnection) == null ? void 0 : i.connectionState) ===
            "connected" && ((r = !0), k(s)),
          s.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
            ((r = !0),
            o(
              "WAWebVoipSctpFallbackFamilyOutcome",
            ).recordSctpFallbackFamilyOpened(s.relayIp),
            (n = !0),
            o("WAWebVoipSctpBufferDrain").drainBuffer(l)));
      }
      return (
        n &&
          o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened(),
        r
      );
    }
    function k(t) {
      var n = t.id,
        a = t.relayIp,
        i = t.relayPort;
      a === "" ||
        t.isEarlyPacketRelayReconnect === !0 ||
        t.isWebTransportWarmStandby === !0 ||
        !I() ||
        o("WAWebVoipStackInterface")
          .getVoipStackInterface()
          .then(function (e) {
            if (e != null && e.type === "web")
              return e.markRelayConnected(a, i);
          })
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] markRelayConnected failed for ",
                    "",
                  ])),
                n,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("voip_sctp_mark_relay_connected_failed");
          });
    }
    function I() {
      try {
        return r("justknobx")._("3110");
      } catch (e) {
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] elect relay JK unavailable, using fallback=true: ",
                "",
              ])),
            String(e),
          ),
          !0
        );
      }
    }
    ((l.prepareWebTransportSctpWarmStandby = _),
      (l.shouldUseMainThreadForWebTransportSctp = g),
      (l.closeWebTransportSctpWarmStandby = h),
      (l.resetWebTransportSctpWarmStandby = y),
      (l.cleanupWebTransportSctpWarmStandby = C),
      (l.resetWebTransportSctpWarmStandbyAtCallBoundary = b),
      (l.getWebTransportSctpWarmStandbyRelayState = v),
      (l.activateWebTransportSctpWarmStandbyForRelayList = R),
      (l.getWebTransportSctpWarmStandbyConnectionSlots = L),
      (l.activateWebTransportSctpWarmStandby = E),
      (l.notifyNativeRelayConnected = k));
  },
  98,
);
