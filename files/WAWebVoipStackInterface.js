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
    "WAWebVoipBootInitDecision",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipWaitForRequiredModule",
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
      d,
      m,
      p = "WAWebVoipStackInterfaceImpl",
      _ = 3e4,
      f = null,
      g,
      h = null,
      y = "WAWebVoipStackInterfaceImpl",
      C = "wa_web_voip_stack_interface";
    function b() {
      return (
        h == null &&
          (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return !r("WAWebEnvironment").isWindows ||
              (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
              o("WAWebVoipGatingUtils").isWinHybridPlusEnabled())
              ? !1
              : o("WAWebABProps").getABPropConfigValue(
                  "web_voip_runtime_stack_selection_enabled",
                ) === !0;
          })()),
        h
      );
    }
    function v() {
      return y;
    }
    function S() {
      return C;
    }
    function R() {
      return (
        g == null &&
          (g = r("JSResourceForInteraction")(
            "WAWebVoipStackInterfaceLoadTelemetry",
          )
            .__setRef("WAWebVoipStackInterface")
            .load()
            .catch(function (e) {
              throw ((g = null), e);
            })),
        g
      );
    }
    function L(t) {
      R()
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
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: getVoipStackInterface awaiting lazy bundle",
              ])),
          );
          var e = yield b();
          ((y = e
            ? "WAWebVoipStackInterfaceWindows"
            : "WAWebVoipStackInterfaceImpl"),
            (C = e
              ? "wa_web_voip_stack_interface_windows"
              : "wa_web_voip_stack_interface"));
          var t = e
              ? r("JSResourceForInteraction")("WAWebVoipStackInterfaceWindows")
                  .__setRef("WAWebVoipStackInterface")
                  .load()
              : I(),
            a = null,
            i = new (m || (m = n("Promise")))(function (e, t) {
              a = self.setTimeout(function () {
                ((a = null),
                  t(r("err")("voip stack interface load timed out")));
              }, _);
            });
          try {
            return yield (m || (m = n("Promise"))).race([t, i]);
          } finally {
            a != null && self.clearTimeout(a);
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      if (!T())
        return r("JSResourceForInteraction")("WAWebVoipStackInterfaceImpl")
          .__setRef("WAWebVoipStackInterface")
          .load();
      y = "WAWebVoipDeferredBootStackInterface";
      var e = r("JSResourceForInteraction")(
          "WAWebVoipDeferredBootStackInterface",
        ).__setRef("WAWebVoipStackInterface"),
        t = e.getModuleIfRequired();
      return t != null
        ? (m || (m = n("Promise"))).resolve(t)
        : e.load().catch(
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: stack interface bundle load rejected, waiting for its code",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t));
                  var n = yield o(
                    "WAWebVoipWaitForRequiredModule",
                  ).waitForRequiredModule(e, _);
                  if (n == null) throw t;
                  return n;
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
    }
    function T() {
      try {
        return o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: stack interface deferred-boot gate failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    var D = r("WAWebLazyLoadedRetriable")(E, p, {
      onAttemptFailure: function () {
        L(function (e) {
          e.logVoipStackInterfaceLoadAttemptFailure();
        });
      },
      onFinalFailure: function (t, n) {
        (L(function (e) {
          e.logVoipStackInterfaceLoadRetryExhausted();
        }),
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: stack load failed comp=",
                  " mod=",
                  " res=",
                  " attempts=",
                  "",
                ])),
              p,
              v(),
              S(),
              n,
            )
            .catching(t)
            .sendLogs("voip-stack-interface-lazy-load-failed"));
      },
      onRetrySuccess: function () {
        L(function (e) {
          e.logVoipStackInterfaceLoadRetrySuccess();
        });
      },
    });
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebVoipGatingUtils").isVoipDownloadEnabled() && (yield E());
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) return null;
          var e = yield D(),
            t = e.createWAWebVoipStackInterface,
            n = e.getVoipStackInterfaceImpl;
          if (n != null) return ((f = n()), M(f), f);
          if (t == null)
            throw r("err")("voip stack interface module has no factory");
          return (f == null && (f = t()), f);
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      e.type === "web" &&
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.markVoipWebStackCreated(Date.now());
    }
    function w() {
      return f;
    }
    ((l.prefetchVoipStackInterfaceModule = x),
      (l.getVoipStackInterface = P),
      (l.getCachedVoipStackInterface = w));
  },
  98,
);
