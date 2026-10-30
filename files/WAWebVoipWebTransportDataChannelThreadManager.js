__d(
  "WAWebVoipWebTransportDataChannelThreadManager",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebVoipPthreadHardening",
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
      d,
      m = null,
      p = null,
      _ = 0;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p;
          if (t != null) {
            if (t.isActive()) return !0;
            ((p = null), (m = null), _++, yield b(t));
          }
          var r = m;
          if (r == null) {
            var o = _;
            ((r = (d || (d = n("Promise"))).resolve().then(function () {
              return h(o, e);
            })),
              (m = r));
          }
          var a = yield r;
          return a == null || !a.isActive() ? (m === r && (m = null), !1) : !0;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportThread] Creating dedicated WebTransport pthread",
              ])),
          );
          var a;
          try {
            a = yield r("WAWebVoipWebTransportDataChannelThread").create(n);
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
              t === _ && (m = null),
              null
            );
          }
          return t !== _ || !a.isActive()
            ? (o(
                "WAWebVoipPthreadHardening",
              ).isVoipWorkerLifecycleHardeningEnabled()
                ? b(a)
                : yield b(a),
              null)
            : ((p = a), a);
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return p != null && p.isActive() ? p : null;
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.registerStateHandler(r("WAWebNoop"));
          try {
            yield e.shutdown();
          } catch (e) {
            if (e instanceof o("WACustomError").TimeoutError) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallWebtransportJsWorkerJoinTimeout(),
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportThread] pthread join timed out: ",
                      "",
                    ])),
                  String(e),
                ));
              return;
            }
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportThread] Failed to shut down pthread",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("webtransport-pthread-shutdown-failed");
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (_++, (m = null));
          var e = p;
          ((p = null), e != null && (yield b(e)));
        })),
        R.apply(this, arguments)
      );
    }
    ((l.initWebTransportDataChannelWorker = f),
      (l.getWebTransportDataChannelThread = C),
      (l.stopWebTransportDataChannelWorker = S));
  },
  98,
);
