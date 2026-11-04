__d(
  "WAWebVoipTsLogger",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = null;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (u != null) return u;
          var e =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          return ((u = e), u);
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t, n;
          if (s != null) return s;
          var r = yield c(),
            o = r.getTsLoggerEventIdWebSctpIceConnectionStart(),
            a = r.getTsLoggerEventIdWebSctpIceConnectionComplete(),
            i = r.getTsLoggerEventIdWebSctpIceConnectionFailed(),
            l =
              (e =
                r.getTsLoggerEventIdWebWebtransportConnectionStart == null
                  ? void 0
                  : r.getTsLoggerEventIdWebWebtransportConnectionStart()) !=
              null
                ? e
                : null,
            u =
              (t =
                r.getTsLoggerEventIdWebWebtransportConnectionComplete == null
                  ? void 0
                  : r.getTsLoggerEventIdWebWebtransportConnectionComplete()) !=
              null
                ? t
                : null,
            d =
              (n =
                r.getTsLoggerEventIdWebWebtransportConnectionFailed == null
                  ? void 0
                  : r.getTsLoggerEventIdWebWebtransportConnectionFailed()) !=
              null
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          r === void 0 && (r = !1);
          var a = o("WAWebVoipStackInterface").getCachedVoipStackInterface();
          if (!(a == null || a.type !== "web"))
            try {
              yield a.logTsEventStringData(t, n, r);
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
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((u = null), (s = null));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return e.ip + ":" + e.port;
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield m(),
            n = y(e);
          yield _(t.WEB_SCTP_ICE_CONNECTION_START, n);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield m(),
            n = y(e);
          yield _(t.WEB_SCTP_ICE_CONNECTION_COMPLETE, n);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = 1);
          var n = yield m(),
            r = y(e) + "," + t;
          yield _(n.WEB_SCTP_ICE_CONNECTION_FAILED, r);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield m(),
            n = t.WEB_WEBTRANSPORT_CONNECTION_START;
          n != null && (yield _(n, e));
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield m(),
            n = t.WEB_WEBTRANSPORT_CONNECTION_COMPLETE;
          n != null && (yield _(n, e));
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = 1);
          var n = yield m(),
            r = n.WEB_WEBTRANSPORT_CONNECTION_FAILED;
          r != null && (yield _(r, e + "," + t));
        })),
        x.apply(this, arguments)
      );
    }
    ((l.cleanup = g),
      (l.logIceConnectionStart = C),
      (l.logIceConnectionComplete = v),
      (l.logIceConnectionFailed = R),
      (l.logWebtransportConnectionStart = E),
      (l.logWebtransportConnectionComplete = I),
      (l.logWebtransportConnectionFailed = D));
  },
  98,
);
