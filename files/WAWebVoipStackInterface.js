__d(
  "WAWebVoipStackInterface",
  [
    "JSResourceForInteraction",
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
      m = "WAWebVoipStackInterfaceImpl",
      p = 3e4,
      _ = null,
      f,
      g = null,
      h = "WAWebVoipStackInterfaceImpl",
      y = "wa_web_voip_stack_interface",
      C = !1,
      b = null;
    function v() {
      return (
        g == null &&
          (g = (async function () {
            return !r("WAWebEnvironment").isWindows ||
              (await o("WAWebABPropsCache").waitForABPropConfigsReady(),
              o("WAWebVoipGatingUtils").isWinHybridPlusEnabled())
              ? !1
              : o("WAWebABProps").getABPropConfigValue(
                  "web_voip_runtime_stack_selection_enabled",
                ) === !0;
          })()),
        g
      );
    }
    function S() {
      return h;
    }
    function R() {
      return y;
    }
    function L() {
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
    function E(t) {
      L()
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
    async function k() {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: getVoipStackInterface awaiting lazy bundle",
          ])),
      );
      var e = await v();
      ((h = e
        ? "WAWebVoipStackInterfaceWindows"
        : "WAWebVoipStackInterfaceImpl"),
        (y = e
          ? "wa_web_voip_stack_interface_windows"
          : "wa_web_voip_stack_interface"));
      var t = e
          ? r("JSResourceForInteraction")("WAWebVoipStackInterfaceWindows")
              .__setRef("WAWebVoipStackInterface")
              .load()
          : I(),
        n = null,
        a = new Promise(function (e, t) {
          n = self.setTimeout(function () {
            ((n = null), t(r("err")("voip stack interface load timed out")));
          }, p);
        });
      try {
        return await Promise.race([t, a]);
      } finally {
        n != null && self.clearTimeout(n);
      }
    }
    function I() {
      if (
        !D() &&
        !o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled()
      )
        return r("JSResourceForInteraction")("WAWebVoipStackInterfaceImpl")
          .__setRef("WAWebVoipStackInterface")
          .load();
      h = "WAWebVoipDeferredBootStackInterface";
      var e = r("JSResourceForInteraction")(
          "WAWebVoipDeferredBootStackInterface",
        ).__setRef("WAWebVoipStackInterface"),
        t = e.getModuleIfRequired();
      return t != null
        ? Promise.resolve(t)
        : e.load().catch(async function (t) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: stack interface bundle load rejected, waiting for its code",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
            var n = await T(function () {
              return o("WAWebVoipWaitForRequiredModule").waitForRequiredModule(
                e,
                p,
              );
            });
            if (n == null) throw t;
            return n;
          });
    }
    function T(e) {
      return o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled()
        ? (b != null || (b = e()), b)
        : e();
    }
    function D() {
      try {
        return o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: stack interface deferred-boot gate failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    function x(e) {
      e &&
        o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled() &&
        o("WAWebBackendApi").frontendFireAndForget("markVoipChunkUnavailable");
    }
    var $ = r("WAWebLazyLoadedRetriable")(k, m, {
      onAttemptFailure: function () {
        (navigator.onLine === !1 && (C = !0),
          E(function (e) {
            e.logVoipStackInterfaceLoadAttemptFailure();
          }));
      },
      onFinalFailure: function (t, n) {
        var e = !C && navigator.onLine !== !1;
        ((C = !1),
          E(function (e) {
            e.logVoipStackInterfaceLoadRetryExhausted();
          }),
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: stack load failed comp=",
                  " mod=",
                  " res=",
                  " attempts=",
                  "",
                ])),
              m,
              S(),
              R(),
              n,
            )
            .catching(t)
            .sendLogs("voip-stack-interface-lazy-load-failed"),
          x(e));
      },
      onRetrySuccess: function () {
        ((C = !1),
          E(function (e) {
            e.logVoipStackInterfaceLoadRetrySuccess();
          }));
      },
    });
    async function P() {
      o("WAWebVoipGatingUtils").isVoipDownloadEnabled() && (await k());
    }
    async function N() {
      if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) return null;
      var e = await $(),
        t = e.createWAWebVoipStackInterface,
        n = e.getVoipStackInterfaceImpl;
      if (n != null) return ((_ = n()), M(_), _);
      if (t == null)
        throw r("err")("voip stack interface module has no factory");
      return (_ == null && (_ = t()), _);
    }
    function M(e) {
      e.type === "web" &&
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.markVoipWebStackCreated(Date.now());
    }
    function w() {
      return _;
    }
    ((l.prefetchVoipStackInterfaceModule = P),
      (l.getVoipStackInterface = N),
      (l.getCachedVoipStackInterface = w));
  },
  98,
);
