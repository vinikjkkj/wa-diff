__d(
  "WAWebVoipBootHiddenPrewarm",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBrowserApi",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebStreamModel",
    "WAWebVoipBackendLoadable",
    "WAWebVoipBackgroundWarmConditions",
    "WAWebVoipBootInitDecision",
    "WAWebVoipChunkLoadFailFast",
    "WAWebVoipColdPathEarlyStart",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
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
      m,
      p,
      _,
      f = 6e4,
      g = 2e3,
      h = 6e4;
    function y(t) {
      var n = b();
      if (n != null)
        return (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmSkip(n),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] hidden_prewarm skip reason=",
                      "",
                    ])),
                  n,
                ));
            },
          ),
          r("WAWebNoop")
        );
      var a = new C(t);
      return (
        a.start(),
        function () {
          return a.stop();
        }
      );
    }
    var C = (function () {
      function e(e) {
        var t = this;
        ((this.$1 = 0),
          (this.$2 = !0),
          (this.$3 = !1),
          (this.$4 = !1),
          (this.$5 = !1),
          (this.$6 = null),
          (this.$8 = null),
          (this.$9 = function () {
            var e;
            (t.$1++, t.$12(), (e = t.$6) == null || e.stop(), t.$10());
          }),
          (this.$11 = function () {
            (self.removeEventListener("online", t.$11), (t.$5 = !1), t.$10());
          }),
          (this.$17 = function (e) {
            (t.stop(),
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmEnd(
                    "error",
                  ),
                    o("WALogger")
                      .WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [deferred-boot] hidden_prewarm failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)));
                },
              ));
          }),
          (this.$7 = e));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          (document.addEventListener("visibilitychange", this.$9),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                (o(
                  "WAWebCoreActionsODS",
                ).logCallVoipBootHiddenPrewarmWatching(),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] hidden_prewarm watching hidden=",
                        "",
                      ])),
                    String(document.hidden),
                  ));
              },
            ));
          try {
            this.$10();
          } catch (e) {
            throw (this.stop(), e);
          }
        }),
        (t.stop = function () {
          var e;
          ((this.$2 = !1),
            document.removeEventListener("visibilitychange", this.$9),
            self.removeEventListener("online", this.$11),
            this.$12(),
            (e = this.$6) == null || e.stop());
        }),
        (t.$10 = function () {
          var e = this;
          if (this.$13()) {
            if (
              !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
            ) {
              this.$14();
              return;
            }
            var t = this.$1,
              n = Date.now() + f,
              r = this.$15();
            this.$8 = self.setTimeout(function () {
              ((e.$8 = null), e.$16(t, n, r).catch(e.$17));
            }, f);
          }
        }),
        (t.$13 = function () {
          return (
            this.$2 &&
            document.hidden &&
            this.$8 == null &&
            !this.$3 &&
            !this.$5
          );
        }),
        (t.$14 = function () {
          var e = this;
          this.$4 ||
            ((this.$4 = !0),
            o("WAWebVoipBackgroundWarmConditions")
              .waitForCurrentOfflineDeliveryEnd()
              .then(function () {
                ((e.$4 = !1), e.$10());
              })
              .catch(this.$17));
        }),
        (t.$18 = function () {
          ((this.$5 = !0), self.addEventListener("online", this.$11));
        }),
        (t.$16 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              if (!(!this.$19(e) || this.$20() || this.$21(t, n))) {
                var r = Date.now(),
                  o = this.$15(),
                  a = yield this.$22();
                !a ||
                  this.$23(e) ||
                  this.$20() ||
                  this.$21(r, o) ||
                  (this.$24("started"), this.$7());
              }
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$22 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            this.$3 = !0;
            try {
              return (yield o("WAPromiseTimeout").promiseTimeout(I(), h), !0);
            } catch (e) {
              return (this.$25(e), !1);
            } finally {
              this.$3 = !1;
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$23 = function (t) {
          return this.$2
            ? this.$19(t)
              ? !1
              : (o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmLoad(
                    "visible",
                  ),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] hidden_prewarm wait reason=visible",
                        ])),
                    ));
                }),
                this.$10(),
                !0)
            : (this.$24("stopped"), !0);
        }),
        (t.$21 = function (t, n) {
          n.stop();
          var e = R(t, n.didRestart());
          return e == null
            ? !1
            : (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmRearm(
                    e,
                  ),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] hidden_prewarm rearm reason=",
                          "",
                        ])),
                      e,
                    ));
                },
              ),
              e === "offline" ? this.$18() : this.$10(),
              !0);
        }),
        (t.$19 = function (t) {
          return this.$2 && this.$1 === t && document.hidden;
        }),
        (t.$20 = function () {
          var e = v();
          return e == null ? !1 : (this.$24(e), !0);
        }),
        (t.$24 = function (t) {
          (this.stop(),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                (t !== "started" &&
                  t !== "stopped" &&
                  o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmEnd(t),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] hidden_prewarm end reason=",
                        "",
                      ])),
                    t,
                  ));
              },
            ));
        }),
        (t.$25 = function (t) {
          this.stop();
          var e = L(t);
          (e === "chunk_failed" &&
            o("WAWebBackendApi").frontendFireAndForget(
              "markVoipChunkUnavailable",
            ),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmLoad(e),
                  o("WALogger")
                    .WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] hidden_prewarm load_failed reason=",
                          "",
                        ])),
                      e,
                    )
                    .catching(r("getErrorSafe")(t)));
              },
            ));
        }),
        (t.$12 = function () {
          this.$8 != null && (self.clearTimeout(this.$8), (this.$8 = null));
        }),
        (t.$15 = function () {
          var e = o(
            "WAWebVoipBackgroundWarmConditions",
          ).watchForOfflineDeliveryRestart();
          return ((this.$6 = e), e);
        }),
        e
      );
    })();
    function b() {
      return k()
        ? "low_memory"
        : E()
          ? o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()
            ? "unsupported"
            : o("WAWebVoipBackgroundWarmConditions").isConstrainedNetwork()
              ? "constrained_network"
              : null
          : "disabled";
    }
    function v() {
      return E()
        ? o("WAWebStreamModel").Stream.isHardRefresh
          ? "hard_refresh"
          : o("WAWebVoipBackgroundWarmConditions").isConstrainedNetwork()
            ? "constrained_network"
            : S()
        : "disabled";
    }
    function S() {
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
            : null;
    }
    function R(e, t) {
      return o("WAWebVoipBackgroundWarmConditions").didFireOnTime(e)
        ? t
          ? "offline_delivery"
          : navigator.onLine
            ? null
            : "offline"
        : "late_timer";
    }
    function L(e) {
      return e instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError
        ? "chunk_failed"
        : e instanceof o("WACustomError").TimeoutError
          ? "timeout"
          : "failed";
    }
    function E() {
      return (
        o("WAWebVoipGatingUtils").isCallingEnabled() &&
        o("WAWebVoipGatingUtils").isVoipDownloadEnabled() &&
        o("WAWebVoipBootInitDecision").isDeferredVoipBootHiddenPrewarmEnabled()
      );
    }
    function k() {
      var e = o("WAWebBrowserApi").getMemClass();
      return e != null && e <= g;
    }
    function I() {
      return (_ || (_ = n("Promise"))).all(
        o("WAWebVoipColdPathEarlyStart")
          .getVoipColdPathModuleLoads(
            !0,
            o("WAWebVoipBackendLoadable").requireVoipJsBackendFailFast,
          )
          .map(function (e) {
            var t = e.load;
            return t();
          }),
      );
    }
    l.watchForHiddenVoipPrewarm = y;
  },
  98,
);
