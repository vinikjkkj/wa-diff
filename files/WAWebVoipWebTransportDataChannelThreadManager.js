__d(
  "WAWebVoipWebTransportDataChannelThreadManager",
  [
    "Promise",
    "WALogger",
    "WAWebNoop",
    "WAWebVoipWebTransportDataChannelThread",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = null,
      m = null,
      p = 0;
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = m;
          if (e != null) {
            if (e.isActive()) return !0;
            ((m = null), (d = null), p++, yield C(e));
          }
          var t = d;
          if (t == null) {
            var r = p;
            ((t = (c || (c = n("Promise"))).resolve().then(function () {
              return g(r);
            })),
              (d = t));
          }
          var o = yield t;
          return o == null || !o.isActive() ? (d === t && (d = null), !1) : !0;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportThread] Creating dedicated WebTransport pthread",
              ])),
          );
          var n;
          try {
            n = yield r("WAWebVoipWebTransportDataChannelThread").create();
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportThread] Failed to create pthread",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("webtransport-pthread-create-failed"),
              t === p && (d = null),
              null
            );
          }
          return t !== p || !n.isActive() ? (yield C(n), null) : ((m = n), n);
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return m != null && m.isActive() ? m : null;
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.registerStateHandler(r("WAWebNoop"));
          try {
            yield e.shutdown();
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportThread] Failed to shut down pthread",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("webtransport-pthread-shutdown-failed");
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (p++, (d = null));
          var e = m;
          ((m = null), e != null && (yield C(e)));
        })),
        S.apply(this, arguments)
      );
    }
    ((l.initWebTransportDataChannelWorker = _),
      (l.getWebTransportDataChannelThread = y),
      (l.stopWebTransportDataChannelWorker = v));
  },
  98,
);
