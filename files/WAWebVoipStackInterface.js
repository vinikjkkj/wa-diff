__d(
  "WAWebVoipStackInterface",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebBackendApi",
    "WAWebEnvironment",
    "WAWebLazyLoadedRetriable",
    "WAWebVoipBootInitDecision",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipInitReliabilityGates",
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
      C = "wa_web_voip_stack_interface",
      b = !1,
      v = null;
    function S() {
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
    function R() {
      return y;
    }
    function L() {
      return C;
    }
    function E() {
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
    function k(t) {
      E()
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
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: getVoipStackInterface awaiting lazy bundle",
              ])),
          );
          var e = yield S();
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
              : D(),
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
        T.apply(this, arguments)
      );
    }
    function D() {
      if (
        !$() &&
        !o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled()
      )
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
                  var n = yield x(function () {
                    return o(
                      "WAWebVoipWaitForRequiredModule",
                    ).waitForRequiredModule(e, _);
                  });
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
    function x(e) {
      return o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled()
        ? (v != null || (v = e()), v)
        : e();
    }
    function $() {
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
    function P(e) {
      e &&
        o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled() &&
        o("WAWebBackendApi").frontendFireAndForget("markVoipChunkUnavailable");
    }
    var N = r("WAWebLazyLoadedRetriable")(I, p, {
      onAttemptFailure: function () {
        (navigator.onLine === !1 && (b = !0),
          k(function (e) {
            e.logVoipStackInterfaceLoadAttemptFailure();
          }));
      },
      onFinalFailure: function (t, n) {
        var e = !b && navigator.onLine !== !1;
        ((b = !1),
          k(function (e) {
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
              R(),
              L(),
              n,
            )
            .catching(t)
            .sendLogs("voip-stack-interface-lazy-load-failed"),
          P(e));
      },
      onRetrySuccess: function () {
        ((b = !1),
          k(function (e) {
            e.logVoipStackInterfaceLoadRetrySuccess();
          }));
      },
    });
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebVoipGatingUtils").isVoipDownloadEnabled() && (yield I());
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) return null;
          var e = yield N(),
            t = e.createWAWebVoipStackInterface,
            n = e.getVoipStackInterfaceImpl;
          if (n != null) return ((f = n()), O(f), f);
          if (t == null)
            throw r("err")("voip stack interface module has no factory");
          return (f == null && (f = t()), f);
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      e.type === "web" &&
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.markVoipWebStackCreated(Date.now());
    }
    function B() {
      return f;
    }
    ((l.prefetchVoipStackInterfaceModule = M),
      (l.getVoipStackInterface = A),
      (l.getCachedVoipStackInterface = B));
  },
  98,
);
