__d(
  "WAWebVoipWebLoadable",
  [
    "JSResourceForInteraction",
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBoolFunc",
    "WAWebCoreActionsODS",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLazyLoadedRetriable",
    "WAWebNoop",
    "WAWebPonyfillsIdleCallback",
    "WAWebReleaseToEventLoop",
    "WAWebVoipBootInitDecision",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitReloadRecovery",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipPthreadHardening",
    "WAWebVoipQplHelpers",
    "WAWebVoipThreadPoolManager",
    "WAWebVoipThreadPoolManagerRegistry",
    "WAWebVoipWasmArtifactGating",
    "WAWebVoipWasmArtifactRegistry",
    "WAWebVoipWasmArtifactSkewErrors",
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWebTransportDataChannelThreadManager",
    "WAWebVoipWebWasmVariantLoader",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 0,
      g = 20,
      h = 5e3,
      y = 250,
      C = 2500,
      b = null,
      v = !1,
      S = null,
      R = !1,
      L = !1;
    function E() {
      var e = S;
      if (e != null) return e;
      var t = o("WAWebVoipWasmArtifactGating").selectVoipWasmArtifacts();
      return (
        (S = t),
        t.then(
          function (e) {
            R = e.useContentAddressedWasm;
          },
          function () {
            R = !1;
          },
        ),
        t
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield E();
          return e.useContentAddressedWasm;
        })),
        I.apply(this, arguments)
      );
    }
    function T(t) {
      return !t.pinWorkerGlue ||
        !o(
          "WAWebVoipPthreadGlueFailureTracker",
        ).isPinnedWorkerGlueUnpinnedForPage()
        ? t
        : (L ||
            ((L = !0),
            o(
              "WAWebCoreActionsODS",
            ).logCallVoipInitWasmArtifactWorkerGlueUnpinnedFallback()),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: pinned worker glue unavailable; retrying with the unpinned worker bundle",
              ])),
          ),
          babelHelpers.extends({}, t, { pinWorkerGlue: !1 }));
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield k();
          if (e) {
            yield r("JSResourceForInteraction")(
              "WAWebVoipWebWasmLoader_ContentAddressed_internal",
            )
              .__setRef("WAWebVoipWebLoadable")
              .load();
            return;
          }
          yield r("JSResourceForInteraction")("WAWebVoipWebWasmLoader")
            .__setRef("WAWebVoipWebLoadable")
            .load();
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t = e.name + ": " + e.message;
      return t.includes(
        o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
      )
        ? !0
        : R
          ? t.toLowerCase().includes("unknown file path")
          : !1;
    }
    function P(e) {
      return (e.name + ": " + e.message).includes(
        o("WAWebVoipWasmArtifactSkewErrors")
          .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN,
      );
    }
    function N(e) {
      if (v || navigator.onLine === !1) return !0;
      var t = (e.name + ": " + e.message).toLowerCase();
      return (
        t.includes("bootload") ||
        t.includes("failed to load") ||
        t.includes("failed to fetch") ||
        t.includes("networkerror") ||
        t.includes("load timeout") ||
        t.includes("loadable:voipwebwasmloader")
      );
    }
    var M = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Loading VoIP WASM with AB prop-based variant selection",
            ])),
        );
        var e = yield E();
        return W(T(e));
      }),
      "voipWebWasmLoader",
      {
        isTerminalError: $,
        onAttemptFailure: function (t, n) {
          (navigator.onLine === !1 && (v = !0),
            P(t) &&
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed(),
              o(
                "WAWebVoipPthreadGlueFailureTracker",
              ).markPinnedWorkerGlueUnpinnedForPage()));
        },
        onFinalFailure: function (t, n) {
          var e = N(t),
            r = $(t);
          if (
            ((v = !1),
            (S = null),
            (R = !1),
            r &&
              o(
                "WAWebVoipInitReloadRecovery",
              ).markVoipWasmArtifactUnavailable(),
            e)
          ) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WASM module download abandoned after ",
                  " attempts (network/load failure): ",
                  "",
                ])),
              n,
              t.message,
            );
            return;
          }
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WASM module failed to load after ",
                  " attempts",
                ])),
              n,
            )
            .catching(t)
            .sendLogs("voip-wasm-load-exhausted");
        },
      },
    );
    function w(e, t) {
      return t
        ? {
            initialPthreadPoolSize: g,
            targetPoolSize: g,
            isDynamicPoolEnabled: !1,
          }
        : typeof e == "number" && e > 0
          ? {
              initialPthreadPoolSize: f,
              targetPoolSize: e,
              isDynamicPoolEnabled: !0,
            }
          : {
              initialPthreadPoolSize: g,
              targetPoolSize: g,
              isDynamicPoolEnabled: !1,
            };
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          (e = o("WAWebVoipQplHelpers")).voipInitQplAddPoint(
            e.VoipInitQplPoint.WAIT_OFFLINE_DELIVER_START,
          );
          var t = { callWaited: !1, isRunning: !0 },
            r = !1,
            a = !1;
          try {
            a = yield o("WAPromiseTimeout").promiseTimeout(
              (_ || (_ = n("Promise"))).race([
                o("WAWebEventsWaitForOfflineDeliveryEnd")
                  .waitForOfflineDeliveryEnd({ ignoreInit: !0 })
                  .then(o("WAWebBoolFunc").returnFalse),
                O(t).then(o("WAWebBoolFunc").returnTrue),
              ]),
              h,
            );
          } catch (e) {
            r = e instanceof o("WACustomError").TimeoutError;
          }
          ((t.isRunning = !1),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint
                .WAIT_OFFLINE_DELIVER_END,
              {
                bool: {
                  offline_delivery_wait_call_waited: t.callWaited,
                  offline_delivery_wait_skipped_for_call: a,
                  offline_delivery_wait_timed_out: r,
                },
              },
            ));
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
            return new (_ || (_ = n("Promise")))(r("WAWebNoop"));
          if (
            (yield o("WAWebVoipInitReloadRecovery").whenCallWaitsOnVoipInit(),
            !e.isRunning ||
              o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
          )
            return new (_ || (_ = n("Promise")))(r("WAWebNoop"));
          if (
            ((e.callWaited = !0),
            !o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled() ||
              o("WAWebABProps").getABPropConfigValue(
                "web_voip_skip_offline_wait_on_call_intent",
              ) !== !0)
          )
            return new (_ || (_ = n("Promise")))(r("WAWebNoop"));
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebVoipPthreadHardening").latchVoipPthreadHardeningLevel(
            function () {
              return o("WAWebABProps").getABPropConfigValue(
                "web_voip_pthread_hardening_level",
              );
            },
          );
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: pthread hardening level ",
                "",
              ])),
            t,
          ),
            o("WAWebVoipQplHelpers").voipInitQplAnnotatePthreadHardening(t),
            o("WAWebVoipGatingUtils").isGuestViewer() || (yield A()),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_START,
              {
                bool: {
                  wasm_load_focused: document.hasFocus(),
                  wasm_load_visible: !document.hidden,
                },
              },
            ),
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
            ));
          try {
            var n = o("WAWebVoipGatingUtils").isWebKitBrowser();
            o("WAWebVoipQplHelpers").voipInitQplAnnotateWasmLoad({
              isContentAddressed: e.useContentAddressedWasm,
              isWebKit: n,
              pinWorkerGlue: e.pinWorkerGlue,
            });
            var a = U(e, n),
              i = yield o(
                "WAWebVoipInitReloadRecovery",
              ).observeVoipWasmLoaderPromise(
                o("WAWebVoipWebWasmVariantLoader").loadVoipWasmVariant(
                  e.useContentAddressedWasm,
                  e.pinWorkerGlue,
                ),
                a,
              );
            (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_END,
            ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(i, "wasm_load"),
              o(
                "WAWebVoipPthreadGlueFailureTracker",
              ).attachPthreadGlueFailureModule(i),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var l = o("WAWebABProps").getABPropConfigValue(
                "web_voip_dynamic_thread_preallocate_count",
              ),
              s = w(l, n),
              u = s.initialPthreadPoolSize,
              c = s.isDynamicPoolEnabled,
              _ = s.targetPoolSize;
            (n &&
              typeof l == "number" &&
              l > 0 &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ThreadPoolManager: dynamic pool disabled (WebKit TLS)",
                  ])),
              ),
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint
                  .THREAD_POOL_SETUP_START,
              ),
              o("WAWebAppTracker").AppTracker.mark(
                o("WAWebAppTracker").AppTrackerType.VoipThreadPoolSetup,
              ));
            var f = new (r("WAWebVoipThreadPoolManager"))(i, c, _);
            return (
              f.init(),
              (b = f),
              o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(
                f,
              ),
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END,
              ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
                i,
                "thread_pool_setup",
              ),
              o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(u, c, n),
              o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                  function () {
                    o("WAWebVoipWebTransportDataChannelThreadManager")
                      .initWebTransportDataChannelWorker()
                      .catch(function (e) {
                        o("WALogger")
                          .ERROR(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: WebTransport pthread prewarm failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .sendLogs("webtransport-pthread-prewarm-failed");
                      });
                  },
                ),
              r("JSResourceForInteraction")("WAWebVoipSctpPrewarm")
                .__setRef("WAWebVoipWebLoadable")
                .preload(),
              i
            );
          } finally {
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
            );
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      var n = self.performance.now(),
        r = document.visibilityState;
      return function () {
        return {
          isContentAddressed: e.useContentAddressedWasm,
          isLoaderModuleLoaded: V(e.useContentAddressedWasm),
          isPinnedGlueUnpinned: o(
            "WAWebVoipPthreadGlueFailureTracker",
          ).isPinnedWorkerGlueUnpinnedForPage(),
          isWebKit: t,
          pinWorkerGlue: e.pinWorkerGlue,
          startVisibility: r,
          wasmFetchState: H(n),
        };
      };
    }
    function V(e) {
      return e
        ? r("JSResourceForInteraction")(
            "WAWebVoipWebWasmLoader_ContentAddressed_internal",
          )
            .__setRef("WAWebVoipWebLoadable")
            .getModuleIfRequired() != null
        : r("JSResourceForInteraction")("WAWebVoipWebWasmLoader")
            .__setRef("WAWebVoipWebLoadable")
            .getModuleIfRequired() != null;
    }
    function H(e) {
      if (typeof self.performance.getEntriesByType != "function")
        return "unknown";
      var t = o("WAWebVoipWasmArtifactRegistry").getSelectedVoipWasmUri();
      if (t == null) return "not_seen";
      var n = new URL(t, window.location.href).href,
        r = self.performance.getEntriesByType("resource");
      return r.some(function (t) {
        return t.name === n && t.startTime >= e;
      })
        ? "seen"
        : G(r.length)
          ? "unknown"
          : "not_seen";
    }
    function G(e) {
      return (
        Reflect.get(self, "__isresourcetimingbufferfull") === !0 ||
        e === y ||
        e >= C
      );
    }
    function z() {
      return b;
    }
    ((l.prefetchVoipWasmLoaderModule = D),
      (l.requireVoip = M),
      (l.getVoipThreadPoolManager = z));
  },
  98,
);
