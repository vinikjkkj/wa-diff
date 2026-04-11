__d(
  "WAWebVoipTsLogger",
  ["WALogger", "WAWebBackendApi", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null,
      c = null;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (c != null) return c;
          var e =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          return ((c = e), c);
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (u != null) return u;
          var e = yield d(),
            t = e.getTsLoggerEventIdWebSctpIceConnectionStart(),
            n = e.getTsLoggerEventIdWebSctpIceConnectionComplete(),
            r = e.getTsLoggerEventIdWebSctpIceConnectionFailed();
          return (
            (u = {
              WEB_SCTP_ICE_CONNECTION_START: t,
              WEB_SCTP_ICE_CONNECTION_COMPLETE: n,
              WEB_SCTP_ICE_CONNECTION_FAILED: r,
            }),
            u
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (c != null)
            try {
              var t = yield d();
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          try {
            var r = yield d(),
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
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield f(), (c = null), (u = null));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return e.ip + ":" + e.port;
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield p(),
            n = v(e);
          yield h(t.WEB_SCTP_ICE_CONNECTION_START, n);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield p(),
            n = v(e);
          yield h(t.WEB_SCTP_ICE_CONNECTION_COMPLETE, n);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = 1);
          var n = yield p(),
            r = v(e) + "," + t;
          yield h(n.WEB_SCTP_ICE_CONNECTION_FAILED, r);
        })),
        I.apply(this, arguments)
      );
    }
    ((l.cleanup = C),
      (l.logIceConnectionStart = S),
      (l.logIceConnectionComplete = L),
      (l.logIceConnectionFailed = k));
  },
  98,
);
