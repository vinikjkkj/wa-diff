__d(
  "WAWebVoipWasmIdleWarm",
  [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebVoipBackgroundWarmConditions",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipIdleColdPathPreload",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipQplHelpers",
    "WAWebVoipWasmArtifactGating",
    "WAWebVoipWasmFetchTarget",
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
      p = 5e3,
      _ = 3e4,
      f = 5e3,
      g = !1;
    function h(t) {
      g ||
        ((g = !0),
        o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState(
          "scheduled",
        ),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] wasm_idle_warm scheduled source=",
                  "",
                ])),
              t,
            );
          },
        ),
        y().catch(C));
    }
    async function y() {
      await b();
      var e = L();
      if (e != null) {
        (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState("skipped"),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarmSkip(e),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] wasm_idle_warm skip reason=",
                      "",
                    ])),
                  e,
                ));
            },
          ));
        return;
      }
      var t = await o("WAWebVoipWasmArtifactGating").selectVoipWasmArtifacts(),
        n = o("WAWebVoipWasmFetchTarget").getVoipWasmFetchTarget(t);
      if (n == null) throw r("err")("VoIP WASM URL unavailable");
      (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState("fetching"),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarm("started"),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] wasm_idle_warm start content_addressed=",
                    "",
                  ])),
                t.useContentAddressedWasm,
              ));
          },
        ));
      var a = self.performance.now(),
        i = await k(n),
        l = Math.round(self.performance.now() - a);
      (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState("complete"),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarm("complete"),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] wasm_idle_warm complete bytes=",
                    " ms=",
                    "",
                  ])),
                i,
                l,
              ));
          },
        ),
        o("WAWebVoipIdleColdPathPreload").preloadVoipColdPathAfterIdleWarm(t));
    }
    function C(e) {
      (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState("failed"),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarm("failed"),
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] wasm_idle_warm failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)));
          },
        ));
    }
    async function b() {
      await o(
        "WAWebVoipBackgroundWarmConditions",
      ).waitForCurrentOfflineDeliveryEnd();
      var e = o(
          "WAWebVoipBackgroundWarmConditions",
        ).watchForOfflineDeliveryRestart(),
        t = await v().finally(e.stop);
      if (!(t && !e.didRestart()))
        return (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] wasm_idle_warm rearm reason=",
                    "",
                  ])),
                t ? "offline_delivery" : "late_timer",
              );
            },
          ),
          b()
        );
    }
    async function v() {
      return document.hidden ? S(p) : (await S(_)) && R();
    }
    function S(e) {
      var t = Date.now() + e;
      return new Promise(function (n) {
        self.setTimeout(function () {
          return n(o("WAWebVoipBackgroundWarmConditions").didFireOnTime(t));
        }, e);
      });
    }
    async function R() {
      var e = Date.now() + f;
      return (
        await o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(f),
        o("WAWebVoipBackgroundWarmConditions").didFireOnTime(e)
      );
    }
    function L() {
      return E()
        ? o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
          ? "inited"
          : o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight()
            ? "init_in_flight"
            : navigator.onLine
              ? o("WAWebVoipBackgroundWarmConditions").isConstrainedNetwork()
                ? "constrained_network"
                : null
              : "offline"
        : "disabled";
    }
    function E() {
      return (
        o("WAWebVoipGatingUtils").isCallingEnabled() &&
        o("WAWebVoipGatingUtils").isVoipDownloadEnabled() &&
        o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootEarlyModulePrefetchEnabled()
      );
    }
    async function k(e) {
      var t = e.init,
        n = e.url,
        o = await self.fetch(
          n,
          babelHelpers.extends({}, t, { priority: "low" }),
        );
      if (!o.ok) throw r("err")("VoIP WASM warm got HTTP " + o.status);
      var a = o.body;
      if (a == null) throw r("err")("VoIP WASM warm response has no body");
      return I(a.getReader(), 0);
    }
    async function I(e, t) {
      var n = await e.read(),
        r = n.done,
        o = n.value;
      return r || o == null ? t : I(e, t + o.byteLength);
    }
    l.scheduleVoipWasmIdleWarm = h;
  },
  98,
);
