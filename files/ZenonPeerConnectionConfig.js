__d(
  "ZenonPeerConnectionConfig",
  ["ZenonBrowsers", "shouldUseInsertableStreams"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "stun:stun.fbsbx.com:3478";
    function s(e, t, n) {
      var r = { urls: e };
      return (
        t !== void 0 && n !== void 0 && ((r.username = t), (r.credential = n)),
        [r]
      );
    }
    var u = (function () {
        function t() {
          ((this.sslPort = ""),
            (this.tcpPort = ""),
            (this.turnIP = ""),
            (this.turnIP_6 = ""),
            (this.turnPassword = ""),
            (this.turnUsername = ""),
            (this.udpPort = ""));
        }
        var n = t.prototype;
        return (
          (n.setTurnCredentials = function (t) {
            ((this.turnIP = t.ip),
              (this.turnIP_6 = t.ip_6),
              (this.udpPort = t.udp_port),
              (this.tcpPort = t.tcp_port),
              (this.sslPort = t.ssl_tcp_port),
              (this.turnUsername = t.username),
              (this.turnPassword = t.password));
          }),
          (n.getConfigZenonPlatform = function () {
            var t = r("shouldUseInsertableStreams")(),
              n = "max-compat",
              o = this.turnIP === "",
              a;
            return (
              o
                ? (a = s([e]))
                : (a = s([e]).concat(
                    s(this.$1(), this.turnUsername, this.turnPassword),
                  )),
              { bundlePolicy: n, encodedInsertableStreams: t, iceServers: a }
            );
          }),
          (n.getConstraints = function (t) {
            t === void 0 && (t = !1);
            var e = !0;
            return (
              o("ZenonBrowsers").isChromium() &&
                o("ZenonBrowsers").webrtcVersion() < 57 &&
                t &&
                (e = !1),
              { mandatory: {}, optional: [{ DtlsSrtpKeyAgreement: e }] }
            );
          }),
          (n.$2 = function (t, n) {
            var e,
              r = t ? "[" + this.turnIP_6 + "]" : this.turnIP,
              o,
              a = n;
            switch (n) {
              case "tcp":
                o = this.tcpPort;
                break;
              case "udp":
                o = this.udpPort;
                break;
              case "ssl":
                ((o = this.sslPort), (a = "tcp"));
                break;
              default:
                ((o = this.udpPort), (a = null));
                break;
            }
            return r != null && r.length && (e = o) != null && e.length
              ? a != null && a.length > 0
                ? "turn:" + r + ":" + o + "?transport=" + a
                : "turn:" + r + ":" + o
              : null;
          }),
          (n.$1 = function () {
            return o("ZenonBrowsers").isFirefox() &&
              o("ZenonBrowsers").webrtcVersion() < 27
              ? [this.$2(!1)].filter(Boolean)
              : [
                  this.$2(!1, "udp"),
                  this.$2(!1, "tcp"),
                  this.$2(!1, "ssl"),
                  this.$2(!0, "udp"),
                  this.$2(!0, "tcp"),
                  this.$2(!0, "ssl"),
                ].filter(Boolean);
          }),
          t
        );
      })(),
      c = new u();
    l.default = c;
  },
  98,
);
