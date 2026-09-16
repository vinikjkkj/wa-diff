__d(
  "WAWebCallLinkAutoJoinConsent",
  ["WALogger", "WATimeUtils", "WAWebSessionStorage"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "wa_web_call_link_auto_join_consent",
      m = 2 * o("WATimeUtils").MINUTE_SECONDS * 1e3,
      p = ":";
    function _(e) {
      try {
        r("WAWebSessionStorage") == null ||
          r("WAWebSessionStorage").setItem(d, "" + Date.now() + p + e);
      } catch (e) {}
    }
    function f(e, t) {
      if (e !== !0) return !1;
      var n = C(y(), t);
      return (n !== "token-mismatch" && h(), n != null ? (g(n), !1) : !0);
    }
    function g(t) {
      e: {
        if (t === "no-consent") {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: auto_join rejected \u2014 no Join press recorded in this tab",
                ])),
            )
            .sendLogs("call-link-auto-join-no-consent");
          break e;
        }
        if (t === "token-mismatch") {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: auto_join rejected \u2014 recorded Join was for another call link",
                ])),
            )
            .sendLogs("call-link-auto-join-token-mismatch");
          break e;
        }
        if (t === "expired") {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: auto_join rejected \u2014 recorded Join expired",
                ])),
            )
            .sendLogs("call-link-auto-join-expired");
          break e;
        }
        if (t === "malformed") {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: auto_join rejected \u2014 stored Join record unreadable",
                ])),
            )
            .sendLogs("call-link-auto-join-malformed");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function h() {
      try {
        r("WAWebSessionStorage") == null ||
          r("WAWebSessionStorage").removeItem(d);
      } catch (e) {}
    }
    function y() {
      try {
        return r("WAWebSessionStorage") == null
          ? void 0
          : r("WAWebSessionStorage").getItem(d);
      } catch (e) {
        return null;
      }
    }
    function C(e, t) {
      if (e == null) return "no-consent";
      var n = e.indexOf(p);
      if (n < 0) return "malformed";
      var r = parseInt(e.slice(0, n), 10);
      if (Number.isNaN(r)) return "malformed";
      if (e.slice(n + 1) !== t) return "token-mismatch";
      var o = Date.now() - r;
      return o >= 0 && o < m ? null : "expired";
    }
    ((l.AUTO_JOIN_CONSENT_TTL_MS = m),
      (l.recordAutoJoinConsent = _),
      (l.consumeAutoJoinConsent = f),
      (l.clearAutoJoinConsent = h));
  },
  98,
);
