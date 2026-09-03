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
    "WAWebVoipWebWasmVariantLoader",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 0,
      p = 20,
      _ = 5e3,
      f = null,
      g = !1,
      h = null,
      y = !1,
      C = !1;
    function b() {
      var e = h;
      if (e != null) return e;
      var t = o("WAWebVoipWasmArtifactGating").selectVoipWasmArtifacts();
      return (
        (h = t),
        t.then(
          function (e) {
            y = e.useContentAddressedWasm;
          },
          function () {
            y = !1;
          },
        ),
        t
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield b();
          return e.useContentAddressedWasm;
        })),
        S.apply(this, arguments)
      );
    }
    function R(t) {
      return !C || !t.pinWorkerGlue
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
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield v();
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = e.name + ": " + e.message;
      return t.includes(
        o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
      )
        ? !0
        : y
          ? t.toLowerCase().includes("unknown file path")
          : !1;
    }
    function I(e) {
      return (e.name + ": " + e.message).includes(
        o("WAWebVoipWasmArtifactSkewErrors")
          .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN,
      );
    }
    function T(e) {
      if (g || navigator.onLine === !1) return !0;
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
    var D = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Loading VoIP WASM with AB prop-based variant selection",
            ])),
        );
        var e = yield b(),
          t = yield $(R(e));
        return ((C = !1), t);
      }),
      "voipWebWasmLoader",
      {
        isTerminalError: k,
        onAttemptFailure: function (t, n) {
          (navigator.onLine === !1 && (g = !0),
            I(t) &&
              ((C = !0),
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed()));
        },
        onFinalFailure: function (t, n) {
          var e = T(t),
            r = k(t);
          if (
            ((g = !1),
            (h = null),
            (y = !1),
            (C = !1),
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
    function x(e, t) {
      return t
        ? {
            initialPthreadPoolSize: p,
            targetPoolSize: p,
            isDynamicPoolEnabled: !1,
          }
        : typeof e == "number" && e > 0
          ? {
              initialPthreadPoolSize: m,
              targetPoolSize: e,
              isDynamicPoolEnabled: !0,
            }
          : {
              initialPthreadPoolSize: p,
              targetPoolSize: p,
              isDynamicPoolEnabled: !1,
            };
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                _,
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
              s = x(l, a),
              u = s.initialPthreadPoolSize,
              c = s.isDynamicPoolEnabled,
              m = s.targetPoolSize;
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
            var p = new (r("WAWebVoipThreadPoolManager"))(i, c, m);
            (p.init(),
              (f = p),
              o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(
                p,
              ),
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END,
              ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
                i,
                "thread_pool_setup",
              ),
              o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(u, c, a));
            var g = o("WAWebVoipGatingUtils").isWebTransportEnabled();
            return (
              g
                ? o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                    function () {
                      r("WAWebVoipSctpPrewarm")({ force: !0 });
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
        P.apply(this, arguments)
      );
    }
    function N() {
      return f;
    }
    ((l.prefetchVoipWasmLoaderModule = L),
      (l.requireVoip = D),
      (l.getVoipThreadPoolManager = N));
  },
  98,
);
