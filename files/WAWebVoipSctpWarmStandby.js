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
      c = "idle",
      d = null,
      m = 0;
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (c === "promoted" || c === "closed") return !1;
          var e = m;
          c === "idle" &&
            ((c = "preconnecting"),
            (e = ++m),
            (d = o(
              "WAWebVoipSctpDataChannelThreadManager",
            ).stopDataChannelWorker()));
          var t = d;
          if (t != null) {
            try {
              yield t;
            } catch (n) {
              return (
                d === t && e === m && h(),
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
            d === t && (d = null);
          }
          return c === "preconnecting" && e === m;
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return c === "preconnecting" || c === "promoted";
    }
    function g() {
      ((c = "closed"), (d = null));
    }
    function h() {
      ((c = "idle"), (d = null));
    }
    function y(e) {
      g();
      for (var t of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var n = t[0],
          r = t[1];
        r.isWebTransportWarmStandby === !0 && e(n);
      }
    }
    function C(e) {
      (y(e), h());
    }
    function b(e) {
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
    function v(e, t) {
      var n = b(e);
      for (var r of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var a = r[0],
          i = r[1];
        i.isWebTransportWarmStandby === !0 && !n.has(a) && t(a);
      }
      return R();
    }
    function S(e) {
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
    function R() {
      var e = !1;
      for (var t of o("WAWebVoipSctpConnectionState").sctpConnections.values())
        if (t.isWebTransportWarmStandby === !0) {
          e = !0;
          break;
        }
      if (!e) return (c !== "promoted" && h(), !1);
      ((c = "promoted"), (d = null));
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
            "connected" && ((r = !0), L(s)),
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
    function L(t) {
      var n = t.id,
        a = t.relayIp,
        i = t.relayPort;
      a === "" ||
        t.isEarlyPacketRelayReconnect === !0 ||
        t.isWebTransportWarmStandby === !0 ||
        !E() ||
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
    function E() {
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
    ((l.prepareWebTransportSctpWarmStandby = p),
      (l.shouldUseMainThreadForWebTransportSctp = f),
      (l.closeWebTransportSctpWarmStandby = g),
      (l.resetWebTransportSctpWarmStandby = h),
      (l.cleanupWebTransportSctpWarmStandby = y),
      (l.resetWebTransportSctpWarmStandbyAtCallBoundary = C),
      (l.getWebTransportSctpWarmStandbyRelayState = b),
      (l.activateWebTransportSctpWarmStandbyForRelayList = v),
      (l.getWebTransportSctpWarmStandbyConnectionSlots = S),
      (l.activateWebTransportSctpWarmStandby = R),
      (l.notifyNativeRelayConnected = L));
  },
  98,
);
