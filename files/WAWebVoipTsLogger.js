__d(
  "WAWebVoipTsLogger",
  ["WALogger", "WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null,
      c = null;
    async function d() {
      if (c != null) return c;
      var e =
        await o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
      return ((c = e), c);
    }
    async function m() {
      var e, t, n;
      if (u != null) return u;
      var r = await d(),
        o = r.getTsLoggerEventIdWebSctpIceConnectionStart(),
        a = r.getTsLoggerEventIdWebSctpIceConnectionComplete(),
        i = r.getTsLoggerEventIdWebSctpIceConnectionFailed(),
        l =
          (e =
            r.getTsLoggerEventIdWebWebtransportConnectionStart == null
              ? void 0
              : r.getTsLoggerEventIdWebWebtransportConnectionStart()) != null
            ? e
            : null,
        s =
          (t =
            r.getTsLoggerEventIdWebWebtransportConnectionComplete == null
              ? void 0
              : r.getTsLoggerEventIdWebWebtransportConnectionComplete()) != null
            ? t
            : null,
        c =
          (n =
            r.getTsLoggerEventIdWebWebtransportConnectionFailed == null
              ? void 0
              : r.getTsLoggerEventIdWebWebtransportConnectionFailed()) != null
            ? n
            : null,
        m = {
          WEB_SCTP_ICE_CONNECTION_START: o,
          WEB_SCTP_ICE_CONNECTION_COMPLETE: a,
          WEB_SCTP_ICE_CONNECTION_FAILED: i,
          WEB_WEBTRANSPORT_CONNECTION_START: l,
          WEB_WEBTRANSPORT_CONNECTION_COMPLETE: s,
          WEB_WEBTRANSPORT_CONNECTION_FAILED: c,
        };
      return ((u = m), m);
    }
    async function p() {
      if (c != null)
        try {
          var t = await d();
          t.tsLoggerReset();
        } catch (t) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [TsLogger] Error resetting ts_logger: ",
                "",
              ])),
            t,
          );
        }
    }
    async function _(e, t, n) {
      n === void 0 && (n = !1);
      try {
        var r = await d(),
          a = r.tsLoggerLogEventStringData(e, t, n);
        return a === 0 || a === 70020;
      } catch (t) {
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [TsLogger] Error logging string event ",
                ": ",
                "",
              ])),
            e,
            t,
          ),
          !1
        );
      }
    }
    async function f() {
      (await p(), (c = null), (u = null));
    }
    function g(e) {
      return e.ip + ":" + e.port;
    }
    async function h(e) {
      var t = await m(),
        n = g(e);
      await _(t.WEB_SCTP_ICE_CONNECTION_START, n);
    }
    async function y(e) {
      var t = await m(),
        n = g(e);
      await _(t.WEB_SCTP_ICE_CONNECTION_COMPLETE, n);
    }
    async function C(e, t) {
      t === void 0 && (t = 1);
      var n = await m(),
        r = g(e) + "," + t;
      await _(n.WEB_SCTP_ICE_CONNECTION_FAILED, r);
    }
    async function b(e) {
      var t = await m(),
        n = t.WEB_WEBTRANSPORT_CONNECTION_START;
      n != null && (await _(n, e));
    }
    async function v(e) {
      var t = await m(),
        n = t.WEB_WEBTRANSPORT_CONNECTION_COMPLETE;
      n != null && (await _(n, e));
    }
    async function S(e, t) {
      t === void 0 && (t = 1);
      var n = await m(),
        r = n.WEB_WEBTRANSPORT_CONNECTION_FAILED;
      r != null && (await _(r, e + "," + t));
    }
    ((l.cleanup = f),
      (l.logIceConnectionStart = h),
      (l.logIceConnectionComplete = y),
      (l.logIceConnectionFailed = C),
      (l.logWebtransportConnectionStart = b),
      (l.logWebtransportConnectionComplete = v),
      (l.logWebtransportConnectionFailed = S));
  },
  98,
);
