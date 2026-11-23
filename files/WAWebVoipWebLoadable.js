__d(
  "WAWebVoipWebLoadable",
  [
    "JSResourceForInteraction",
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
    "WAWebReleaseToEventLoop",
    "WAWebVoipBootInitDecision",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitReliabilityGates",
    "WAWebVoipInitReloadRecovery",
    "WAWebVoipMainThreadLockFixes",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipPthreadHardening",
    "WAWebVoipQplHelpers",
    "WAWebVoipThreadPoolManager",
    "WAWebVoipThreadPoolManagerRegistry",
    "WAWebVoipWasmArtifactGating",
    "WAWebVoipWasmArtifactRecovery",
    "WAWebVoipWasmArtifactSkewErrors",
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWasmResourceTiming",
    "WAWebVoipWebTransportPthreadPrewarm",
    "WAWebVoipWebWasmVariantLoader",
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
      b = !1,
      v = !1,
      S = null;
    function R() {
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
    async function L() {
      var e = await R();
      return e.useContentAddressedWasm;
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
    async function k() {
      var e = await L();
      if (e) {
        await r("JSResourceForInteraction")(
          "WAWebVoipWebWasmLoader_ContentAddressed_internal",
        )
          .__setRef("WAWebVoipWebLoadable")
          .load();
        return;
      }
      await r("JSResourceForInteraction")("WAWebVoipWebWasmLoader")
        .__setRef("WAWebVoipWebLoadable")
        .load();
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
    function x(e) {
      return (
        !h &&
        navigator.onLine !== !1 &&
        (e.name + ": " + e.message).toLowerCase().includes("bootload")
      );
    }
    var $ = r("WAWebLazyLoadedRetriable")(
      async function () {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Loading VoIP WASM with AB prop-based variant selection",
            ])),
        );
        var e = E(await R());
        return ((b = e.pinWorkerGlue), w(e));
      },
      "voipWebWasmLoader",
      {
        isTerminalError: I,
        onAttemptFailure: function (t, n) {
          (navigator.onLine === !1 && (h = !0),
            T(t) &&
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed(),
              o(
                "WAWebVoipPthreadGlueFailureTracker",
              ).markPinnedWorkerGlueUnpinnedForPage()));
        },
        onFinalFailure: function (t, n) {
          var e = D(t),
            r = x(t),
            a = I(t),
            i = { error: t, isContentAddressed: C, pinWorkerGlue: b };
          if (
            ((h = !1),
            (y = null),
            (C = !1),
            (b = !1),
            (S = null),
            a &&
              (o(
                "WAWebVoipInitReloadRecovery",
              ).markVoipWasmArtifactUnavailable(),
              o("WAWebVoipWasmArtifactRecovery").armVoipWasmArtifactRecovery(
                i,
              )),
            r &&
              o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled() &&
              o("WAWebVoipInitReloadRecovery").markVoipChunkUnavailable(),
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
    async function N() {
      var e;
      (e = o("WAWebVoipQplHelpers")).voipInitQplAddPoint(
        e.VoipInitQplPoint.WAIT_OFFLINE_DELIVER_START,
      );
      var t = { callWaited: !1, isRunning: !0 },
        n = !1,
        r = !1;
      try {
        r = await o("WAPromiseTimeout").promiseTimeout(
          Promise.race([
            o("WAWebEventsWaitForOfflineDeliveryEnd")
              .waitForOfflineDeliveryEnd({ ignoreInit: !0 })
              .then(o("WAWebBoolFunc").returnFalse),
            M(t).then(o("WAWebBoolFunc").returnTrue),
          ]),
          f,
        );
      } catch (e) {
        n = e instanceof o("WACustomError").TimeoutError;
      }
      ((t.isRunning = !1),
        o("WAWebVoipQplHelpers").voipInitQplAddPoint(
          o("WAWebVoipQplHelpers").VoipInitQplPoint.WAIT_OFFLINE_DELIVER_END,
          {
            bool: {
              offline_delivery_wait_call_waited: t.callWaited,
              offline_delivery_wait_skipped_for_call: r,
              offline_delivery_wait_timed_out: n,
            },
          },
        ));
    }
    async function M(e) {
      if (o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
        return new Promise(r("WAWebNoop"));
      if (
        (await o("WAWebVoipInitReloadRecovery").whenCallWaitsOnVoipInit(),
        !e.isRunning ||
          o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
      )
        return new Promise(r("WAWebNoop"));
      if (
        ((e.callWaited = !0),
        !o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled() ||
          o("WAWebABProps").getABPropConfigValue(
            "web_voip_skip_offline_wait_on_call_intent",
          ) !== !0)
      )
        return new Promise(r("WAWebNoop"));
    }
    async function w(e) {
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
        o("WAWebVoipMainThreadLockFixes").readMainThreadLockFixAtBoot(),
        o("WAWebVoipGatingUtils").isGuestViewer() || (await N()),
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
        var a = self.performance.now(),
          i = O(a),
          l = A(e, n),
          s = await o(
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
          o("WAWebVoipWasmResourceTiming").getVoipWasmDownloadAnnotations(a),
        ),
          B(i),
          o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(s, "wasm_load"),
          o(
            "WAWebVoipPthreadGlueFailureTracker",
          ).attachPthreadGlueFailureModule(s),
          await o("WAWebReleaseToEventLoop").releaseToEventLoop());
        var u = o("WAWebABProps").getABPropConfigValue(
            "web_voip_dynamic_thread_preallocate_count",
          ),
          c = P(u, n),
          p = c.initialPthreadPoolSize,
          _ = c.isDynamicPoolEnabled,
          f = c.targetPoolSize;
        (n &&
          typeof u == "number" &&
          u > 0 &&
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: ThreadPoolManager: dynamic pool disabled (WebKit TLS)",
              ])),
          ),
          o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_START,
          ),
          o("WAWebAppTracker").AppTracker.mark(
            o("WAWebAppTracker").AppTrackerType.VoipThreadPoolSetup,
          ));
        var h = new (r("WAWebVoipThreadPoolManager"))(s, _, f);
        return (
          h.init(),
          (g = h),
          o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(h),
          o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END,
          ),
          o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
            s,
            "thread_pool_setup",
          ),
          o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(p, _, n),
          o(
            "WAWebVoipWebTransportPthreadPrewarm",
          ).scheduleWebTransportPthreadPrewarm(),
          r("JSResourceForInteraction")("WAWebVoipSctpPrewarm")
            .__setRef("WAWebVoipWebLoadable")
            .preload(),
          s
        );
      } finally {
        o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
        );
      }
    }
    function A(e, t) {
      var n = self.performance.now(),
        r = document.visibilityState;
      return function () {
        return {
          isContentAddressed: e.useContentAddressedWasm,
          isLoaderModuleLoaded: F(e.useContentAddressedWasm),
          isPinnedGlueUnpinned: o(
            "WAWebVoipPthreadGlueFailureTracker",
          ).isPinnedWorkerGlueUnpinnedForPage(),
          isWebKit: t,
          pinWorkerGlue: e.pinWorkerGlue,
          startVisibility: r,
          wasmFetchState: o(
            "WAWebVoipWasmResourceTiming",
          ).getVoipWasmFetchState(n),
        };
      };
    }
    function F(e) {
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
    function O(e) {
      var t = S != null ? S : e;
      return ((S = t), t);
    }
    function B(e) {
      var t = o("WAWebVoipQplHelpers").getVoipInitQplTriggeredAtMs();
      t != null &&
        o("WAWebVoipQplHelpers").voipInitQplAnnotateWasmPrefetch(
          o("WAWebVoipWasmResourceTiming").getVoipWasmPrefetchState(e, t),
        );
    }
    function W() {
      return g;
    }
    ((l.prefetchVoipWasmLoaderModule = k),
      (l.requireVoip = $),
      (l.getVoipThreadPoolManager = W));
  },
  98,
);
