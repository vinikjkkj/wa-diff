__d(
  "WAWebVoipWasmIdleWarm",
  [
    "Promise",
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
      p,
      _ = 5e3,
      f = 3e4,
      g = 5e3,
      h = !1;
    function y(t) {
      h ||
        ((h = !0),
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
        C().catch(v));
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield S();
          var e = D();
          if (e != null) {
            (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState(
              "skipped",
            ),
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarmSkip(e),
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] wasm_idle_warm skip reason=",
                          "",
                        ])),
                      e,
                    ));
                },
              ));
            return;
          }
          var t = yield o(
              "WAWebVoipWasmArtifactGating",
            ).selectVoipWasmArtifacts(),
            n = o("WAWebVoipWasmFetchTarget").getVoipWasmFetchTarget(t);
          if (n == null) throw r("err")("VoIP WASM URL unavailable");
          (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState(
            "fetching",
          ),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarm("started"),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] wasm_idle_warm start content_addressed=",
                        "",
                      ])),
                    t.useContentAddressedWasm,
                  ));
              },
            ));
          var a = self.performance.now(),
            i = yield $(n),
            l = Math.round(self.performance.now() - a);
          (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState(
            "complete",
          ),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarm("complete"),
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] wasm_idle_warm complete bytes=",
                        " ms=",
                        "",
                      ])),
                    i,
                    l,
                  ));
              },
            ),
            o("WAWebVoipIdleColdPathPreload").preloadVoipColdPathAfterIdleWarm(
              t,
            ));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState("failed"),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarm("failed"),
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] wasm_idle_warm failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)));
          },
        ));
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o(
            "WAWebVoipBackgroundWarmConditions",
          ).waitForCurrentOfflineDeliveryEnd();
          var e = o(
              "WAWebVoipBackgroundWarmConditions",
            ).watchForOfflineDeliveryRestart(),
            t = yield L().finally(e.stop);
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
              S()
            );
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return document.hidden ? k(_) : (yield k(f)) && I();
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = Date.now() + e;
      return new (p || (p = n("Promise")))(function (n) {
        self.setTimeout(function () {
          return n(o("WAWebVoipBackgroundWarmConditions").didFireOnTime(t));
        }, e);
      });
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Date.now() + g;
          return (
            yield o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(g),
            o("WAWebVoipBackgroundWarmConditions").didFireOnTime(e)
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x()
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
    function x() {
      return (
        o("WAWebVoipGatingUtils").isCallingEnabled() &&
        o("WAWebVoipGatingUtils").isVoipDownloadEnabled() &&
        o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootEarlyModulePrefetchEnabled()
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.init,
            n = e.url,
            o = yield self.fetch(
              n,
              babelHelpers.extends({}, t, { priority: "low" }),
            );
          if (!o.ok) throw r("err")("VoIP WASM warm got HTTP " + o.status);
          var a = o.body;
          if (a == null) throw r("err")("VoIP WASM warm response has no body");
          return N(a.getReader(), 0);
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.read(),
            r = n.done,
            o = n.value;
          return r || o == null ? t : N(e, t + o.byteLength);
        })),
        M.apply(this, arguments)
      );
    }
    l.scheduleVoipWasmIdleWarm = y;
  },
  98,
);
