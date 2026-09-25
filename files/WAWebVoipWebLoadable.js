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
      h = null,
      y = !1,
      C = null,
      b = !1,
      v = !1;
    function S() {
      var e = C;
      if (e != null) return e;
      var t = o("WAWebVoipWasmArtifactGating").selectVoipWasmArtifacts();
      return (
        (C = t),
        t.then(
          function (e) {
            b = e.useContentAddressedWasm;
          },
          function () {
            b = !1;
          },
        ),
        t
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield S();
          return e.useContentAddressedWasm;
        })),
        L.apply(this, arguments)
      );
    }
    function E(t) {
      return !t.pinWorkerGlue ||
        !o(
          "WAWebVoipPthreadGlueFailureTracker",
        ).isPinnedWorkerGlueUnpinnedForPage()
        ? t
        : (v ||
            ((v = !0),
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
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield R();
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
        I.apply(this, arguments)
      );
    }
    function T(e) {
      var t = e.name + ": " + e.message;
      return t.includes(
        o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
      )
        ? !0
        : b
          ? t.toLowerCase().includes("unknown file path")
          : !1;
    }
    function D(e) {
      return (e.name + ": " + e.message).includes(
        o("WAWebVoipWasmArtifactSkewErrors")
          .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN,
      );
    }
    function x(e) {
      if (y || navigator.onLine === !1) return !0;
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
    var $ = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Loading VoIP WASM with AB prop-based variant selection",
            ])),
        );
        var e = yield S();
        return N(E(e));
      }),
      "voipWebWasmLoader",
      {
        isTerminalError: T,
        onAttemptFailure: function (t, n) {
          (navigator.onLine === !1 && (y = !0),
            D(t) &&
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed(),
              o(
                "WAWebVoipPthreadGlueFailureTracker",
              ).markPinnedWorkerGlueUnpinnedForPage()));
        },
        onFinalFailure: function (t, n) {
          var e = x(t),
            r = T(t);
          if (
            ((y = !1),
            (C = null),
            (b = !1),
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
    function P(e, t) {
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
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var i = o("WAWebVoipGatingUtils").isWebKitBrowser(),
              l = yield o(
                "WAWebVoipInitReloadRecovery",
              ).observeVoipWasmLoaderPromise(
                o("WAWebVoipWebWasmVariantLoader").loadVoipWasmVariant(
                  e.useContentAddressedWasm,
                  e.pinWorkerGlue,
                ),
              );
            (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_END,
            ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(l, "wasm_load"),
              o(
                "WAWebVoipPthreadGlueFailureTracker",
              ).attachPthreadGlueFailureModule(l),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var s = o("WAWebABProps").getABPropConfigValue(
                "web_voip_dynamic_thread_preallocate_count",
              ),
              u = P(s, i),
              c = u.initialPthreadPoolSize,
              _ = u.isDynamicPoolEnabled,
              f = u.targetPoolSize;
            (i &&
              typeof s == "number" &&
              s > 0 &&
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
            var y = new (r("WAWebVoipThreadPoolManager"))(l, _, f);
            (y.init(),
              (h = y),
              o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(
                y,
              ),
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END,
              ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
                l,
                "thread_pool_setup",
              ),
              o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(c, _, i));
            var C = o("WAWebVoipGatingUtils").isAdaptiveSctpPrewarmV2Enabled(),
              b = o("WAWebVoipGatingUtils").isWebTransportEnabled();
            if (b) {
              var v = o(
                "WAWebVoipGatingUtils",
              ).isWebTransportFastSetupEnabled();
              (v || !C) &&
                o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                  function () {
                    (v &&
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
                      C || r("WAWebVoipSctpPrewarm")({ force: !0 }));
                  },
                );
            } else
              !C &&
                !o("WAWebVoipGatingUtils").shouldSkipEagerSctpPrewarm() &&
                o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                  function () {
                    r("WAWebVoipSctpPrewarm")();
                  },
                );
            return l;
          } finally {
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return h;
    }
    ((l.prefetchVoipWasmLoaderModule = k),
      (l.requireVoip = $),
      (l.getVoipThreadPoolManager = w));
  },
  98,
);
