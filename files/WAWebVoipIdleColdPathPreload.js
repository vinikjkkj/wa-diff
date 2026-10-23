__d(
  "WAWebVoipIdleColdPathPreload",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebStreamModel",
    "WAWebVoipBackendLoadable",
    "WAWebVoipBackgroundWarmConditions",
    "WAWebVoipBootInitDecision",
    "WAWebVoipChunkLoadFailFast",
    "WAWebVoipColdPathEarlyStart",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipIdleColdPathPreloadODS",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipQplHelpers",
    "WAWebVoipWasmArtifactGating",
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
      m = 5e3,
      p = 2e3,
      _ = 6e4;
    function f(e) {
      g(e)
        .catch(I)
        .then(function (e) {
          return e == null ? R() : x(e);
        })
        .catch(T);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          return (t = (n = y(e)) != null ? n : yield b()) != null
            ? t
            : y(
                yield o(
                  "WAWebVoipWasmArtifactGating",
                ).selectVoipWasmArtifacts(),
              );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return e.pinWorkerGlue
        ? o(
            "WAWebVoipBootInitDecision",
          ).isDeferredVoipBootEarlyModulePrefetchEnabled()
          ? C()
          : "disabled"
        : "unpinned";
    }
    function C() {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited()
        ? "inited"
        : o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight()
          ? "init_in_flight"
          : o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getDidVoipInitError()
            ? "init_errored"
            : o("WAWebStreamModel").Stream.isHardRefresh
              ? "hard_refresh"
              : navigator.onLine
                ? o("WAWebVoipBackgroundWarmConditions").isConstrainedNetwork()
                  ? "constrained_network"
                  : null
                : "offline";
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (yield o(
              "WAWebVoipBackgroundWarmConditions",
            ).waitForCurrentOfflineDeliveryEnd(),
            document.hidden)
          )
            return null;
          if (S()) return "low_memory_visible";
          var e = Date.now() + m;
          return (
            yield o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(m),
            o("WAWebVoipBackgroundWarmConditions").didFireOnTime(e)
              ? (yield o(
                  "WAWebVoipBackgroundWarmConditions",
                ).waitForCurrentOfflineDeliveryEnd(),
                null)
              : "late_timer"
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      var e = o("WAWebBrowserApi").getMemClass();
      return e != null && e <= p;
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ($("started"), yield E(), $("complete"));
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      var e = new Set(),
        t = o("WAWebVoipColdPathEarlyStart")
          .getVoipColdPathModuleLoads(
            !0,
            o("WAWebVoipBackendLoadable").requireVoipJsBackendFailFast,
          )
          .map(function (t) {
            var n = t.load,
              r = t.module;
            return (
              e.add(r),
              n().then(
                function () {
                  e.delete(r);
                },
                function (t) {
                  throw (
                    t instanceof
                      o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError &&
                      o("WAWebBackendApi").frontendFireAndForget(
                        "markVoipChunkUnavailable",
                      ),
                    e.delete(r) && k(r, "failed"),
                    t
                  );
                },
              )
            );
          });
      return o("WAPromiseTimeout")
        .promiseTimeout((d || (d = n("Promise"))).all(t), _)
        .catch(function (t) {
          throw (
            t instanceof o("WACustomError").TimeoutError &&
              (e.forEach(function (e) {
                return k(e, "timeout");
              }),
              e.clear()),
            t
          );
        });
    }
    function k(e, t) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o(
            "WAWebVoipIdleColdPathPreloadODS",
          ).logCallVoipIdleColdPathPreloadModuleFailure(e, t);
        },
      );
    }
    function I(t) {
      return (
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] idle_preload gate failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          },
        ),
        "gate_failed"
      );
    }
    function T(e) {
      var t = D(e);
      (o("WAWebVoipQplHelpers").voipInitQplRecordIdleColdPathPreloadState(t),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o(
              "WAWebVoipIdleColdPathPreloadODS",
            ).logCallVoipIdleColdPathPreload(t),
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] idle_preload failed reason=",
                      "",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(e)));
          },
        ));
    }
    function D(e) {
      return e instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError
        ? "chunk_failed"
        : e instanceof o("WACustomError").TimeoutError
          ? "timeout"
          : "failed";
    }
    function x(e) {
      (o("WAWebVoipQplHelpers").voipInitQplRecordIdleColdPathPreloadState(
        "skipped",
      ),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o(
              "WAWebVoipIdleColdPathPreloadODS",
            ).logCallVoipIdleColdPathPreloadSkip(e),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] idle_preload skip reason=",
                    "",
                  ])),
                e,
              ));
          },
        ));
    }
    function $(e) {
      (o("WAWebVoipQplHelpers").voipInitQplRecordIdleColdPathPreloadState(e),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o(
              "WAWebVoipIdleColdPathPreloadODS",
            ).logCallVoipIdleColdPathPreload(e),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] idle_preload ",
                    "",
                  ])),
                e,
              ));
          },
        ));
    }
    l.preloadVoipColdPathAfterIdleWarm = f;
  },
  98,
);
