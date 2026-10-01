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
      u = "idle",
      c = null,
      d = 0;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (u === "promoted" || u === "closed") return !1;
          var e = d;
          u === "idle" &&
            ((u = "preconnecting"),
            (e = ++d),
            (c = o(
              "WAWebVoipSctpDataChannelThreadManager",
            ).stopDataChannelWorker()));
          var t = c;
          if (t != null) {
            try {
              yield t;
            } catch (n) {
              return (
                c === t && e === d && g(),
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] Warm standby preparation failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(n))
                  .sendLogs("voip_sctp_warm_standby_preparation_failed"),
                !1
              );
            }
            c === t && (c = null);
          }
          return u === "preconnecting" && e === d;
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return u === "preconnecting" || u === "promoted";
    }
    function f() {
      ((u = "closed"), (c = null));
    }
    function g() {
      ((u = "idle"), (c = null));
    }
    function h(e) {
      f();
      for (var t of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var n = t[0],
          r = t[1];
        r.isWebTransportWarmStandby === !0 && e(n);
      }
    }
    function y(e) {
      (h(e), g());
    }
    function C(e) {
      var t = o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort();
      return o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e, {
        portOverride: function (n) {
          return t
            ? n
            : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
                .TRUE_WEB_CLIENT_RELAY_PORT;
        },
      });
    }
    function b(e, t) {
      var n = C(e);
      for (var r of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var a = r[0],
          i = r[1];
        i.isWebTransportWarmStandby === !0 && !n.has(a) && t(a);
      }
      return S();
    }
    function v(e) {
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
    function S() {
      var e = !1;
      for (var t of o("WAWebVoipSctpConnectionState").sctpConnections.values())
        if (t.isWebTransportWarmStandby === !0) {
          e = !0;
          break;
        }
      if (!e) return (u !== "promoted" && g(), !1);
      ((u = "promoted"), (c = null));
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
            "connected" && ((r = !0), R(s)),
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
    function R(t) {
      var n = t.id,
        a = t.relayIp,
        i = t.relayPort;
      a === "" ||
        t.isEarlyPacketRelayReconnect === !0 ||
        t.isWebTransportWarmStandby === !0 ||
        !r("justknobx")._("3110") ||
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
    ((l.prepareWebTransportSctpWarmStandby = m),
      (l.shouldUseMainThreadForWebTransportSctp = _),
      (l.closeWebTransportSctpWarmStandby = f),
      (l.resetWebTransportSctpWarmStandby = g),
      (l.cleanupWebTransportSctpWarmStandby = h),
      (l.resetWebTransportSctpWarmStandbyAtCallBoundary = y),
      (l.getWebTransportSctpWarmStandbyRelayState = C),
      (l.activateWebTransportSctpWarmStandbyForRelayList = b),
      (l.getWebTransportSctpWarmStandbyConnectionSlots = v),
      (l.activateWebTransportSctpWarmStandby = S),
      (l.notifyNativeRelayConnected = R));
  },
  98,
);
