__d(
  "WAWebVoipWebLoadable",
  [
    "JSResourceForInteraction",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLazyLoadedRetriable",
    "WAWebPonyfillsIdleCallback",
    "WAWebReleaseToEventLoop",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitReloadRecovery",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipPthreadHardening",
    "WAWebVoipQplHelpers",
    "WAWebVoipSctpPrewarm",
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
      _ = 0,
      f = 20,
      g = 5e3,
      h = 250,
      y = 2500,
      C = null,
      b = !1,
      v = null,
      S = !1,
      R = !1;
    function L() {
      var e = v;
      if (e != null) return e;
      var t = o("WAWebVoipWasmArtifactGating").selectVoipWasmArtifacts();
      return (
        (v = t),
        t.then(
          function (e) {
            S = e.useContentAddressedWasm;
          },
          function () {
            S = !1;
          },
        ),
        t
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield L();
          return e.useContentAddressedWasm;
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
      return !t.pinWorkerGlue ||
        !o(
          "WAWebVoipPthreadGlueFailureTracker",
        ).isPinnedWorkerGlueUnpinnedForPage()
        ? t
        : (R ||
            ((R = !0),
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
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield E();
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t = e.name + ": " + e.message;
      return t.includes(
        o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
      )
        ? !0
        : S
          ? t.toLowerCase().includes("unknown file path")
          : !1;
    }
    function $(e) {
      return (e.name + ": " + e.message).includes(
        o("WAWebVoipWasmArtifactSkewErrors")
          .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN,
      );
    }
    function P(e) {
      if (b || navigator.onLine === !1) return !0;
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
    var N = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Loading VoIP WASM with AB prop-based variant selection",
            ])),
        );
        var e = yield L();
        return w(I(e));
      }),
      "voipWebWasmLoader",
      {
        isTerminalError: x,
        onAttemptFailure: function (t, n) {
          (navigator.onLine === !1 && (b = !0),
            $(t) &&
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed(),
              o(
                "WAWebVoipPthreadGlueFailureTracker",
              ).markPinnedWorkerGlueUnpinnedForPage()));
        },
        onFinalFailure: function (t, n) {
          var e = P(t),
            r = x(t);
          if (
            ((b = !1),
            (v = null),
            (S = !1),
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
    function M(e, t) {
      return t
        ? {
            initialPthreadPoolSize: f,
            targetPoolSize: f,
            isDynamicPoolEnabled: !1,
          }
        : typeof e == "number" && e > 0
          ? {
              initialPthreadPoolSize: _,
              targetPoolSize: e,
              isDynamicPoolEnabled: !0,
            }
          : {
              initialPthreadPoolSize: f,
              targetPoolSize: f,
              isDynamicPoolEnabled: !1,
            };
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebVoipPthreadHardening").latchVoipPthreadHardeningLevel(
            function () {
              return o("WAWebABProps").getABPropConfigValue(
                "web_voip_pthread_hardening_level",
              );
            },
          );
          if (
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: pthread hardening level ",
                  "",
                ])),
              t,
            ),
            o("WAWebVoipQplHelpers").voipInitQplAnnotatePthreadHardening(t),
            !o("WAWebVoipGatingUtils").isGuestViewer())
          ) {
            var n;
            (n = o("WAWebVoipQplHelpers")).voipInitQplAddPoint(
              n.VoipInitQplPoint.WAIT_OFFLINE_DELIVER_START,
            );
            var a = !1;
            try {
              yield o("WAPromiseTimeout").promiseTimeout(
                o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd({ ignoreInit: !0 }),
                g,
              );
            } catch (e) {
              a = e instanceof o("WACustomError").TimeoutError;
            }
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint
                .WAIT_OFFLINE_DELIVER_END,
              { bool: { offline_delivery_wait_timed_out: a } },
            );
          }
          (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_START,
          ),
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
            ));
          try {
            var i = o("WAWebVoipGatingUtils").isWebKitBrowser();
            o("WAWebVoipQplHelpers").voipInitQplAnnotateWasmLoad({
              isContentAddressed: e.useContentAddressedWasm,
              isWebKit: i,
              pinWorkerGlue: e.pinWorkerGlue,
            });
            var l = F(e, i),
              s = yield o(
                "WAWebVoipInitReloadRecovery",
              ).observeVoipWasmLoaderPromise(
                o("WAWebVoipWebWasmVariantLoader").loadVoipWasmVariant(
                  e.useContentAddressedWasm,
                  e.pinWorkerGlue,
                ),
                l,
              );
            (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_END,
            ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(s, "wasm_load"),
              o(
                "WAWebVoipPthreadGlueFailureTracker",
              ).attachPthreadGlueFailureModule(s),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var u = o("WAWebABProps").getABPropConfigValue(
                "web_voip_dynamic_thread_preallocate_count",
              ),
              c = M(u, i),
              _ = c.initialPthreadPoolSize,
              f = c.isDynamicPoolEnabled,
              h = c.targetPoolSize;
            (i &&
              typeof u == "number" &&
              u > 0 &&
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
            var y = new (r("WAWebVoipThreadPoolManager"))(s, f, h);
            (y.init(),
              (C = y),
              o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(
                y,
              ),
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END,
              ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
                s,
                "thread_pool_setup",
              ),
              o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(_, f, i));
            var b = o("WAWebVoipGatingUtils").isAdaptiveSctpPrewarmV2Enabled(),
              v = o("WAWebVoipGatingUtils").isWebTransportEnabled();
            if (v) {
              var S = o(
                "WAWebVoipGatingUtils",
              ).isWebTransportFastSetupEnabled();
              (S || !b) &&
                o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                  function () {
                    (S &&
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
                        }),
                      b || r("WAWebVoipSctpPrewarm")({ force: !0 }));
                  },
                );
            } else
              !b &&
                !o("WAWebVoipGatingUtils").shouldSkipEagerSctpPrewarm() &&
                o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                  function () {
                    r("WAWebVoipSctpPrewarm")();
                  },
                );
            return s;
          } finally {
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
            );
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      var n = self.performance.now(),
        r = document.visibilityState;
      return function () {
        return {
          isContentAddressed: e.useContentAddressedWasm,
          isLoaderModuleLoaded: O(e.useContentAddressedWasm),
          isPinnedGlueUnpinned: o(
            "WAWebVoipPthreadGlueFailureTracker",
          ).isPinnedWorkerGlueUnpinnedForPage(),
          isWebKit: t,
          pinWorkerGlue: e.pinWorkerGlue,
          startVisibility: r,
          wasmFetchState: B(n),
        };
      };
    }
    function O(e) {
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
    function B(e) {
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
        : W(r.length)
          ? "unknown"
          : "not_seen";
    }
    function W(e) {
      return (
        Reflect.get(self, "__isresourcetimingbufferfull") === !0 ||
        e === h ||
        e >= y
      );
    }
    function q() {
      return C;
    }
    ((l.prefetchVoipWasmLoaderModule = T),
      (l.requireVoip = N),
      (l.getVoipThreadPoolManager = q));
  },
  98,
);
