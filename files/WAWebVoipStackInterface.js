__d(
  "WAWebVoipStackInterface",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebEnvironment",
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
      p = null,
      _,
      f = null,
      g = "WAWebVoipStackInterfaceImpl",
      h = "wa_web_voip_stack_interface";
    function y() {
      return (
        f == null &&
          (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return r("WAWebEnvironment").isWindows
              ? (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
                o("WAWebABProps").getABPropConfigValue(
                  "web_voip_runtime_stack_selection_enabled",
                ) === !0)
              : !1;
          })()),
        f
      );
    }
    function C() {
      return g;
    }
    function b() {
      return h;
    }
    function v() {
      return (
        _ == null &&
          (_ = r("JSResourceForInteraction")(
            "WAWebVoipStackInterfaceLoadTelemetry",
          )
            .__setRef("WAWebVoipStackInterface")
            .load()
            .catch(function (e) {
              throw ((_ = null), e);
            })),
        _
      );
    }
    function S(t) {
      v()
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
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: getVoipStackInterface awaiting lazy bundle",
              ])),
          );
          var e = yield y();
          ((g = e
            ? "WAWebVoipStackInterfaceWindows"
            : "WAWebVoipStackInterfaceImpl"),
            (h = e
              ? "wa_web_voip_stack_interface_windows"
              : "wa_web_voip_stack_interface"));
          var t = e
              ? r("JSResourceForInteraction")("WAWebVoipStackInterfaceWindows")
                  .__setRef("WAWebVoipStackInterface")
                  .load()
              : r("JSResourceForInteraction")("WAWebVoipStackInterfaceImpl")
                  .__setRef("WAWebVoipStackInterface")
                  .load(),
            a = null,
            i = new (c || (c = n("Promise")))(function (e, t) {
              a = self.setTimeout(function () {
                ((a = null),
                  t(r("err")("voip stack interface load timed out")));
              }, m);
            });
          try {
            return yield (c || (c = n("Promise"))).race([t, i]);
          } finally {
            a != null && self.clearTimeout(a);
          }
        })),
        L.apply(this, arguments)
      );
    }
    var E = r("WAWebLazyLoadedRetriable")(R, d, {
      onAttemptFailure: function () {
        S(function (e) {
          e.logVoipStackInterfaceLoadAttemptFailure();
        });
      },
      onFinalFailure: function (t, n) {
        (S(function (e) {
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
              C(),
              b(),
              n,
            )
            .catching(t)
            .sendLogs("voip-stack-interface-lazy-load-failed"));
      },
      onRetrySuccess: function () {
        S(function (e) {
          e.logVoipStackInterfaceLoadRetrySuccess();
        });
      },
    });
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) return null;
          var e = yield E(),
            t = e.createWAWebVoipStackInterface,
            n = e.getVoipStackInterfaceImpl;
          if (n != null) return n();
          if (t == null)
            throw r("err")("voip stack interface module has no factory");
          return (p == null && (p = t()), p);
        })),
        I.apply(this, arguments)
      );
    }
    l.getVoipStackInterface = k;
  },
  98,
);
