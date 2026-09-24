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
      var n = I();
      try {
        t.setItem(m, "" + Date.now() + _ + e);
      } catch (e) {
        o("WAWebCallLinkODS").logCallLinkAutoJoinRecordFailedODS();
        return;
      }
      (n && o("WAWebCallLinkODS").logCallLinkAutoJoinRecordDuplicatePressODS(),
        o("WAWebCallLinkODS").logCallLinkAutoJoinRecordedODS());
    }
    function g(e) {
      e === !0 &&
        o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS("links-disabled");
    }
    function h(e) {
      e === !0 &&
        o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS("existing-call");
    }
    function y() {
      o("WAWebCallLinkODS").logCallLinkAutoJoinJoinAttemptedODS();
    }
    function C() {
      I() && o("WAWebCallLinkODS").logCallLinkAutoJoinPendingAtStartupODS();
    }
    function b() {
      (I() &&
        o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS(
          "not-call-link-launch",
        ),
        R());
    }
    function v(e, t) {
      if (e !== !0) return !1;
      var n = T(L(), t);
      return (
        n !== "token-mismatch" && R(),
        n != null
          ? (S(n), o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS(n), !1)
          : (o("WAWebCallLinkODS").logCallLinkAutoJoinGrantedODS(), !0)
      );
    }
    function S(t) {
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
    function R() {
      try {
        r("WAWebSessionStorage") == null ||
          r("WAWebSessionStorage").removeItem(m);
      } catch (e) {}
    }
    function L() {
      var e = r("WAWebSessionStorage");
      if (e == null) return { available: !1, raw: null };
      try {
        return { available: !0, raw: e.getItem(m) };
      } catch (e) {
        return { available: !1, raw: null };
      }
    }
    function E(e) {
      var t = e.indexOf(_);
      if (t < 0) return null;
      var n = parseInt(e.slice(0, t), 10);
      return Number.isNaN(n) ? null : { recordedAt: n, token: e.slice(t + 1) };
    }
    function k(e) {
      var t = Date.now() - e;
      return t >= 0 && t < p;
    }
    function I() {
      var e = L();
      if (e.raw == null) return !1;
      var t = E(e.raw);
      return t != null && k(t.recordedAt);
    }
    function T(e, t) {
      if (!e.available) return "storage-read-failed";
      var n = e.raw;
      if (n == null) return "no-consent";
      var r = E(n);
      return r == null
        ? "malformed"
        : r.token !== t
          ? "token-mismatch"
          : k(r.recordedAt)
            ? null
            : "expired";
    }
    ((l.AUTO_JOIN_CONSENT_TTL_MS = p),
      (l.recordAutoJoinConsent = f),
      (l.reportAutoJoinRefusedByGate = g),
      (l.reportAutoJoinRefusedByExistingCall = h),
      (l.reportAutoJoinAttempted = y),
      (l.reportAutoJoinPendingAtStartup = C),
      (l.dropAutoJoinConsentAtLaunch = b),
      (l.consumeAutoJoinConsent = v),
      (l.clearAutoJoinConsent = R));
  },
  98,
);
