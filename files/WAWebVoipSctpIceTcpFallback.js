__d(
  "WAWebVoipSctpIceTcpFallback",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpIceTcpFallbackODS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 3e3,
      _ = 4e4,
      f = 6e3,
      g = 2,
      h = null,
      y = null,
      C = null,
      b = null,
      v = !1,
      S = !1,
      R = !1,
      L = null,
      E = !1,
      k = new Set(),
      I = 0,
      T = 0,
      D = new Set();
    function x(t, n) {
      var r = $(n.id);
      if (
        r !== o("WAWebVoipSctpConnectionManagerConstants").RelayIceTcpMode.Off
      ) {
        var a;
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE-TCP mode=",
              " ",
              " tcpPort=",
              "",
            ])),
          r,
          n.id,
          (a = n.iceTcpPort) != null ? a : "none",
        );
      }
      return o("WAWebVoipRelayConnectionUtils").createAnswerSdp(t, n, r);
    }
    function $(e) {
      return D.has(e)
        ? o("WAWebVoipSctpConnectionManagerConstants").RelayIceTcpMode.TcpOnly
        : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
            .RELAY_ICE_TCP_MODE;
    }
    function P(e, t) {
      t ||
        o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
          .RELAY_ICE_TCP_MODE ===
          o("WAWebVoipSctpConnectionManagerConstants").RelayIceTcpMode
            .TcpOnly ||
        h != null ||
        ((h = e), v && W());
    }
    function N() {
      ((S = !0), R && H("after_accept"));
    }
    function M(e) {
      (v || ((v = !0), (C = window.setTimeout(U, Math.min(e, _)))),
        h != null && W());
    }
    function w(e, t) {
      t === "connected" ? B(e) : t === "failed" && V();
    }
    function A(e) {
      e === "failed" && V();
    }
    function F() {
      (O(), (S = !1));
    }
    function O() {
      for (var e of [y, C, b]) e != null && window.clearTimeout(e);
      ((y = null),
        (C = null),
        (b = null),
        (h = null),
        (v = !1),
        (R = !1),
        (L = null),
        (E = !1),
        k.clear(),
        D.clear());
    }
    function B(e) {
      if (!D.has(e)) {
        E = !0;
        return;
      }
      var t = L;
      b != null &&
        t != null &&
        (window.clearTimeout(b),
        (b = null),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE-TCP fallback connected ",
              " after ",
              "ms",
            ])),
          e,
          Date.now() - T,
        ),
        o("WAWebVoipSctpIceTcpFallbackODS").logCallSctpIceTcpFallback(
          G(t).tcpConnected,
        ));
    }
    function W() {
      y != null || R || ((I = Date.now()), (y = window.setTimeout(q, p)));
    }
    function q() {
      ((y = null), (R = !0), S && H("after_accept"));
    }
    function U() {
      ((C = null), V());
    }
    function V() {
      S || H("before_accept");
    }
    function H(e) {
      var t = h;
      if (!(t == null || L != null || E || k.has(e))) {
        k.add(e);
        var n = G(e),
          r = n.fired,
          a = n.label,
          i = n.off,
          l = n.skipped,
          s = K(t.getRelays(), e === "after_accept");
        if (s.length === 0) {
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE-TCP fallback",
                " skipped: no relay has a TCP VIP",
              ])),
            a,
          ),
            o("WAWebVoipSctpIceTcpFallbackODS").logCallSctpIceTcpFallback(l));
          return;
        }
        var m = Date.now() - I;
        if (!z(e)) {
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE-TCP fallback",
                " off: no UDP relay connected within ",
                "ms, would retry ",
                " over TCP",
              ])),
            a,
            m,
            s.join(","),
          ),
            o("WAWebVoipSctpIceTcpFallbackODS").logCallSctpIceTcpFallback(i));
          return;
        }
        L = e;
        for (var p of s) D.add(p);
        ((T = Date.now()),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE-TCP fallback",
                ": no UDP relay connected within ",
                "ms, retrying ",
                " over TCP",
              ])),
            a,
            m,
            s.join(","),
          ),
          t.moveToIceTcp(s),
          o("WAWebVoipSctpIceTcpFallbackODS").logCallSctpIceTcpFallback(r),
          (b = window.setTimeout(function () {
            return j(e);
          }, f)));
      }
    }
    function G(e) {
      return e === "after_accept"
        ? {
            fired: "fired_after_accept",
            label: "",
            off: "off_after_accept",
            reverted: "reverted_after_accept",
            skipped: "skipped_no_tcp_vip_after_accept",
            tcpConnected: "tcp_connected_after_accept",
          }
        : e === "before_accept"
          ? {
              fired: "fired_before_accept",
              label: " before accept",
              off: "off_before_accept",
              reverted: "reverted_before_accept",
              skipped: "skipped_no_tcp_vip_before_accept",
              tcpConnected: "tcp_connected_before_accept",
            }
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function z(e) {
      return e === "after_accept"
        ? o("WAWebABProps").getABPropConfigValue(
            "web_voip_tcp_connection_fallback",
          )
        : e === "before_accept"
          ? o("WAWebABProps").getABPropConfigValue(
              "web_voip_tcp_connection_fallback_before_accept",
            )
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function j(e) {
      var t;
      b = null;
      var n = Array.from(D);
      (D.clear(),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE-TCP fallback: no TCP relay connected in ",
              "ms, returning ",
              " to UDP",
            ])),
          f,
          n.join(","),
        ),
        o("WAWebVoipSctpIceTcpFallbackODS").logCallSctpIceTcpFallback(
          G(e).reverted,
        ),
        (t = h) == null || t.moveBackToUdp(n));
    }
    function K(e, t) {
      var n = Array.from(e),
        r = Q(
          new Set(
            n.map(function (e) {
              return e.relayId;
            }),
          ).size,
          t,
        ),
        o = [],
        a = [];
      for (var i of n)
        if (i.iceTcpPort != null) {
          if (!o.includes(i.relayId)) {
            if (o.length >= r) continue;
            o.push(i.relayId);
          }
          a.push(i.id);
        }
      return a;
    }
    function Q(e, t) {
      return t && e > 1 ? Math.min(g, e - 1) : Math.min(g, e);
    }
    ((l.createRelayAnswerSdp = x),
      (l.armIceTcpFallback = P),
      (l.noteIceTcpFallbackCallAccepted = N),
      (l.noteRelayIceStarted = M),
      (l.noteRelayIceState = w),
      (l.noteRelayConnectionState = A),
      (l.resetIceTcpFallback = F),
      (l.resetIceTcpFallbackRelayState = O));
  },
  98,
);
