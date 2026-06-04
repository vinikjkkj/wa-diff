__d(
  "WAWebVoipStackInterface",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "WAWebVoipStackInterfaceImpl",
      m = 3e4,
      p = "m#WAWebVoipStackInterfaceImpl",
      _ = "wa_web_voip_stack_interface",
      f;
    function g() {
      return (
        f == null &&
          (f = r("JSResourceForInteraction")(
            "WAWebVoipStackInterfaceLoadTelemetry",
          )
            .__setRef("WAWebVoipStackInterface")
            .load()
            .catch(function (e) {
              throw ((f = null), e);
            })),
        f
      );
    }
    function h(t) {
      g()
        .then(t)
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: stack interface load telemetry failed",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        });
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: getVoipStackInterface awaiting lazy bundle",
              ])),
          );
          var e = r("JSResourceForInteraction")("WAWebVoipStackInterfaceImpl")
              .__setRef("WAWebVoipStackInterface")
              .load(),
            t = null,
            a = new (c || (c = n("Promise")))(function (e, n) {
              t = self.setTimeout(function () {
                ((t = null),
                  n(r("err")("voip stack interface load timed out")));
              }, m);
            });
          try {
            return yield (c || (c = n("Promise"))).race([e, a]);
          } finally {
            t != null && self.clearTimeout(t);
          }
        })),
        C.apply(this, arguments)
      );
    }
    var b = r("WAWebLazyLoadedRetriable")(y, d, {
      onAttemptFailure: function () {
        h(function (e) {
          e.logVoipStackInterfaceLoadAttemptFailure();
        });
      },
      onFinalFailure: function (t, n) {
        (h(function (e) {
          e.logVoipStackInterfaceLoadRetryExhausted();
        }),
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: stack load failed comp=",
                  " mod=",
                  " res=",
                  " attempts=",
                  "",
                ])),
              d,
              p,
              _,
              n,
            )
            .catching(t)
            .sendLogs("voip-stack-interface-lazy-load-failed"));
      },
      onRetrySuccess: function () {
        h(function (e) {
          e.logVoipStackInterfaceLoadRetrySuccess();
        });
      },
    });
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) return null;
          var e = yield b(),
            t = e.getVoipStackInterfaceImpl;
          return t();
        })),
        S.apply(this, arguments)
      );
    }
    l.getVoipStackInterface = v;
  },
  98,
);
