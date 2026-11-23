__d(
  "WAWebVoipTsLogger",
  ["WALogger", "WAWebBackendApi", "WAWebVoipStackInterface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = null;
    async function c() {
      if (u != null) return u;
      var e =
        await o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
      return ((u = e), u);
    }
    async function d() {
      var e, t, n;
      if (s != null) return s;
      var r = await c(),
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
        u =
          (t =
            r.getTsLoggerEventIdWebWebtransportConnectionComplete == null
              ? void 0
              : r.getTsLoggerEventIdWebWebtransportConnectionComplete()) != null
            ? t
            : null,
        d =
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
          WEB_WEBTRANSPORT_CONNECTION_COMPLETE: u,
          WEB_WEBTRANSPORT_CONNECTION_FAILED: d,
        };
      return ((s = m), m);
    }
    async function m(t, n, r) {
      r === void 0 && (r = !1);
      var a = o("WAWebVoipStackInterface").getCachedVoipStackInterface();
      if (!(a == null || a.type !== "web"))
        try {
          await a.logTsEventStringData(t, n, r);
        } catch (n) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [TsLogger] Error logging string event ",
                ": ",
                "",
              ])),
            t,
            n,
          );
        }
    }
    async function p() {
      ((u = null), (s = null));
    }
    function _(e) {
      return e.ip + ":" + e.port;
    }
    async function f(e) {
      var t = await d(),
        n = _(e);
      await m(t.WEB_SCTP_ICE_CONNECTION_START, n);
    }
    async function g(e) {
      var t = await d(),
        n = _(e);
      await m(t.WEB_SCTP_ICE_CONNECTION_COMPLETE, n);
    }
    async function h(e, t) {
      t === void 0 && (t = 1);
      var n = await d(),
        r = _(e) + "," + t;
      await m(n.WEB_SCTP_ICE_CONNECTION_FAILED, r);
    }
    async function y(e) {
      var t = await d(),
        n = t.WEB_WEBTRANSPORT_CONNECTION_START;
      n != null && (await m(n, e));
    }
    async function C(e) {
      var t = await d(),
        n = t.WEB_WEBTRANSPORT_CONNECTION_COMPLETE;
      n != null && (await m(n, e));
    }
    async function b(e, t) {
      t === void 0 && (t = 1);
      var n = await d(),
        r = n.WEB_WEBTRANSPORT_CONNECTION_FAILED;
      r != null && (await m(r, e + "," + t));
    }
    ((l.cleanup = p),
      (l.logIceConnectionStart = f),
      (l.logIceConnectionComplete = g),
      (l.logIceConnectionFailed = h),
      (l.logWebtransportConnectionStart = y),
      (l.logWebtransportConnectionComplete = C),
      (l.logWebtransportConnectionFailed = b));
  },
  98,
);
