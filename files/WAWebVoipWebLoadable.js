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
      p = 0,
      _ = 20,
      f = 5e3,
      g = null,
      h = !1,
      y = null,
      C = !1,
      b = !1;
    function v() {
      var e = y;
      if (e != null) return e;
      var t = o("WAWebVoipWasmArtifactGating").selectVoipWasmArtifacts();
      return (
        (y = t),
        t.then(
          function (e) {
            C = e.useContentAddressedWasm;
          },
          function () {
            C = !1;
          },
        ),
        t
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield v();
          return e.useContentAddressedWasm;
        })),
        R.apply(this, arguments)
      );
    }
    function L(t) {
      return !b || !t.pinWorkerGlue
        ? t
        : (o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGlueUnpinnedFallback(),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: pinned worker glue unavailable; retrying with the unpinned worker bundle",
              ])),
          ),
          babelHelpers.extends({}, t, { pinWorkerGlue: !1 }));
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield S();
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
      var t = e.name + ": " + e.message;
      return t.includes(
        o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
      )
        ? !0
        : C
          ? t.toLowerCase().includes("unknown file path")
          : !1;
    }
    function T(e) {
      return (e.name + ": " + e.message).includes(
        o("WAWebVoipWasmArtifactSkewErrors")
          .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN,
      );
    }
    function D(e) {
      if (h || navigator.onLine === !1) return !0;
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
    var x = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Loading VoIP WASM with AB prop-based variant selection",
            ])),
        );
        var e = yield v(),
          t = yield P(L(e));
        return ((b = !1), t);
      }),
      "voipWebWasmLoader",
      {
        isTerminalError: I,
        onAttemptFailure: function (t, n) {
          (navigator.onLine === !1 && (h = !0),
            T(t) &&
              ((b = !0),
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed()));
        },
        onFinalFailure: function (t, n) {
          var e = D(t),
            r = I(t);
          if (
            ((h = !1),
            (y = null),
            (C = !1),
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
    function $(e, t) {
      return t
        ? {
            initialPthreadPoolSize: _,
            targetPoolSize: _,
            isDynamicPoolEnabled: !1,
          }
        : typeof e == "number" && e > 0
          ? {
              initialPthreadPoolSize: p,
              targetPoolSize: e,
              isDynamicPoolEnabled: !0,
            }
          : {
              initialPthreadPoolSize: _,
              targetPoolSize: _,
              isDynamicPoolEnabled: !1,
            };
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebVoipGatingUtils").isGuestViewer()) {
            var t;
            (t = o("WAWebVoipQplHelpers")).voipInitQplAddPoint(
              t.VoipInitQplPoint.WAIT_OFFLINE_DELIVER_START,
            );
            var n = !1;
            try {
              yield o("WAPromiseTimeout").promiseTimeout(
                o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd({ ignoreInit: !0 }),
                f,
              );
            } catch (e) {
              n = e instanceof o("WACustomError").TimeoutError;
            }
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint
                .WAIT_OFFLINE_DELIVER_END,
              { bool: { offline_delivery_wait_timed_out: n } },
            );
          }
          (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_START,
          ),
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
            ));
          try {
            var a = o("WAWebVoipGatingUtils").isWebKitBrowser(),
              i = yield o(
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
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(i, "wasm_load"),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var l = o("WAWebABProps").getABPropConfigValue(
                "web_voip_dynamic_thread_preallocate_count",
              ),
              s = $(l, a),
              u = s.initialPthreadPoolSize,
              c = s.isDynamicPoolEnabled,
              p = s.targetPoolSize;
            (a &&
              typeof l == "number" &&
              l > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
            var _ = new (r("WAWebVoipThreadPoolManager"))(i, c, p);
            (_.init(),
              (g = _),
              o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(
                _,
              ),
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END,
              ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
                i,
                "thread_pool_setup",
              ),
              o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(u, c, a));
            var h = o("WAWebVoipGatingUtils").isWebTransportEnabled();
            return (
              h
                ? o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                    function () {
                      (o(
                        "WAWebVoipGatingUtils",
                      ).isWebTransportFastSetupEnabled() &&
                        o("WAWebVoipWebTransportDataChannelThreadManager")
                          .initWebTransportDataChannelWorker()
                          .catch(function (e) {
                            o("WALogger")
                              .ERROR(
                                m ||
                                  (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: WebTransport pthread prewarm failed",
                                  ])),
                              )
                              .catching(r("getErrorSafe")(e))
                              .sendLogs("webtransport-pthread-prewarm-failed");
                          }),
                        r("WAWebVoipSctpPrewarm")({ force: !0 }));
                    },
                  )
                : o("WAWebVoipGatingUtils").shouldSkipEagerSctpPrewarm() ||
                  o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                    function () {
                      r("WAWebVoipSctpPrewarm")();
                    },
                  ),
              i
            );
          } finally {
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
            );
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return g;
    }
    ((l.prefetchVoipWasmLoaderModule = E),
      (l.requireVoip = x),
      (l.getVoipThreadPoolManager = M));
  },
  98,
);
