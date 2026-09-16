__d(
  "WAWebCallLinkAutoJoinConsent",
  ["WALogger", "WATimeUtils", "WAWebCallLinkODS", "WAWebSessionStorage"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "wa_web_call_link_auto_join_consent",
      p = 2 * o("WATimeUtils").MINUTE_SECONDS * 1e3,
      _ = ":";
    function f(e) {
      var t = r("WAWebSessionStorage");
      if (t == null) {
        o("WAWebCallLinkODS").logCallLinkAutoJoinRecordFailedODS();
        return;
      }
      try {
        t.setItem(m, "" + Date.now() + _ + e);
      } catch (e) {
        o("WAWebCallLinkODS").logCallLinkAutoJoinRecordFailedODS();
        return;
      }
      o("WAWebCallLinkODS").logCallLinkAutoJoinRecordedODS();
    }
    function g(e, t) {
      if (e !== !0) return !1;
      var n = b(C(), t);
      return (
        n !== "token-mismatch" && y(),
        n != null
          ? (h(n), o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS(n), !1)
          : (o("WAWebCallLinkODS").logCallLinkAutoJoinGrantedODS(), !0)
      );
    }
    function h(t) {
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
        if (t === "storage-read-failed") {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: auto_join rejected \u2014 session storage could not be read",
                ])),
            )
            .sendLogs("call-link-auto-join-storage-read-failed");
          break e;
        }
        if (t === "token-mismatch") {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: auto_join rejected \u2014 recorded Join was for another call link",
                ])),
            )
            .sendLogs("call-link-auto-join-token-mismatch");
          break e;
        }
        if (t === "expired") {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: auto_join rejected \u2014 recorded Join expired",
                ])),
            )
            .sendLogs("call-link-auto-join-expired");
          break e;
        }
        if (t === "malformed") {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function y() {
      try {
        r("WAWebSessionStorage") == null ||
          r("WAWebSessionStorage").removeItem(m);
      } catch (e) {}
    }
    function C() {
      var e = r("WAWebSessionStorage");
      if (e == null) return { available: !1, raw: null };
      try {
        return { available: !0, raw: e.getItem(m) };
      } catch (e) {
        return { available: !1, raw: null };
      }
    }
    function b(e, t) {
      if (!e.available) return "storage-read-failed";
      var n = e.raw;
      if (n == null) return "no-consent";
      var r = n.indexOf(_);
      if (r < 0) return "malformed";
      var o = parseInt(n.slice(0, r), 10);
      if (Number.isNaN(o)) return "malformed";
      if (n.slice(r + 1) !== t) return "token-mismatch";
      var a = Date.now() - o;
      return a >= 0 && a < p ? null : "expired";
    }
    ((l.AUTO_JOIN_CONSENT_TTL_MS = p),
      (l.recordAutoJoinConsent = f),
      (l.consumeAutoJoinConsent = g),
      (l.clearAutoJoinConsent = y));
  },
  98,
);
