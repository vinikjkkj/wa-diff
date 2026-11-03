__d(
  "WAWebVoipIdleColdPathPreload",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 5e3,
      m = 2e3,
      p = 6e4;
    function _(e) {
      f(e)
        .catch(R)
        .then(function (e) {
          return e == null ? b() : k(e);
        })
        .catch(L);
    }
    async function f(e) {
      var t, n;
      return (t = (n = g(e)) != null ? n : await y()) != null
        ? t
        : g(await o("WAWebVoipWasmArtifactGating").selectVoipWasmArtifacts());
    }
    function g(e) {
      return e.pinWorkerGlue
        ? o(
            "WAWebVoipBootInitDecision",
          ).isDeferredVoipBootEarlyModulePrefetchEnabled()
          ? h()
          : "disabled"
        : "unpinned";
    }
    function h() {
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
    async function y() {
      if (
        (await o(
          "WAWebVoipBackgroundWarmConditions",
        ).waitForCurrentOfflineDeliveryEnd(),
        document.hidden)
      )
        return null;
      if (C()) return "low_memory_visible";
      var e = Date.now() + d;
      return (
        await o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(d),
        o("WAWebVoipBackgroundWarmConditions").didFireOnTime(e)
          ? (await o(
              "WAWebVoipBackgroundWarmConditions",
            ).waitForCurrentOfflineDeliveryEnd(),
            null)
          : "late_timer"
      );
    }
    function C() {
      var e = o("WAWebBrowserApi").getMemClass();
      return e != null && e <= m;
    }
    async function b() {
      (I("started"), await v(), I("complete"));
    }
    function v() {
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
                    e.delete(r) && S(r, "failed"),
                    t
                  );
                },
              )
            );
          });
      return o("WAPromiseTimeout")
        .promiseTimeout(Promise.all(t), p)
        .catch(function (t) {
          throw (
            t instanceof o("WACustomError").TimeoutError &&
              (e.forEach(function (e) {
                return S(e, "timeout");
              }),
              e.clear()),
            t
          );
        });
    }
    function S(e, t) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o(
            "WAWebVoipIdleColdPathPreloadODS",
          ).logCallVoipIdleColdPathPreloadModuleFailure(e, t);
        },
      );
    }
    function R(t) {
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
    function L(e) {
      var t = E(e);
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
    function E(e) {
      return e instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError
        ? "chunk_failed"
        : e instanceof o("WACustomError").TimeoutError
          ? "timeout"
          : "failed";
    }
    function k(e) {
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
    function I(e) {
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
    l.preloadVoipColdPathAfterIdleWarm = _;
  },
  98,
);
