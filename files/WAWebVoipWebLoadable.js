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
    "WAWebVoipWasmArtifactSkewErrors",
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWasmResourceTiming",
    "WAWebVoipWebTransportPthreadPrewarm",
    "WAWebVoipWebWasmVariantLoader",
    "asyncToGeneratorRuntime",
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
      v = !1,
      S = null;
    function R() {
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
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield R();
          return e.useContentAddressedWasm;
        })),
        E.apply(this, arguments)
      );
    }
    function k(t) {
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
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield L();
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t = e.name + ": " + e.message;
      return t.includes(
        o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
      )
        ? !0
        : b
          ? t.toLowerCase().includes("unknown file path")
          : !1;
    }
    function x(e) {
      return (e.name + ": " + e.message).includes(
        o("WAWebVoipWasmArtifactSkewErrors")
          .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN,
      );
    }
    function $(e) {
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
    var P = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Loading VoIP WASM with AB prop-based variant selection",
            ])),
        );
        var e = yield R();
        return O(k(e));
      }),
      "voipWebWasmLoader",
      {
        isTerminalError: D,
        onAttemptFailure: function (t, n) {
          (navigator.onLine === !1 && (y = !0),
            x(t) &&
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed(),
              o(
                "WAWebVoipPthreadGlueFailureTracker",
              ).markPinnedWorkerGlueUnpinnedForPage()));
        },
        onFinalFailure: function (t, n) {
          var e = $(t),
            r = D(t);
          if (
            ((y = !1),
            (C = null),
            (b = !1),
            (S = null),
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
    function N(e, t) {
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
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          (e = o("WAWebVoipQplHelpers")).voipInitQplAddPoint(
            e.VoipInitQplPoint.WAIT_OFFLINE_DELIVER_START,
          );
          var t = { callWaited: !1, isRunning: !0 },
            r = !1,
            a = !1;
          try {
            a = yield o("WAPromiseTimeout").promiseTimeout(
              (p || (p = n("Promise"))).race([
                o("WAWebEventsWaitForOfflineDeliveryEnd")
                  .waitForOfflineDeliveryEnd({ ignoreInit: !0 })
                  .then(o("WAWebBoolFunc").returnFalse),
                A(t).then(o("WAWebBoolFunc").returnTrue),
              ]),
              g,
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
            return new (p || (p = n("Promise")))(r("WAWebNoop"));
          if (
            (yield o("WAWebVoipInitReloadRecovery").whenCallWaitsOnVoipInit(),
            !e.isRunning ||
              o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
          )
            return new (p || (p = n("Promise")))(r("WAWebNoop"));
          if (
            ((e.callWaited = !0),
            !o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled() ||
              o("WAWebABProps").getABPropConfigValue(
                "web_voip_skip_offline_wait_on_call_intent",
              ) !== !0)
          )
            return new (p || (p = n("Promise")))(r("WAWebNoop"));
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
            o("WAWebVoipGatingUtils").isGuestViewer() || (yield M()),
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
              i = U(a),
              l = W(e, n),
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
              o("WAWebVoipWasmResourceTiming").getVoipWasmDownloadAnnotations(
                a,
              ),
            ),
              V(i),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(s, "wasm_load"),
              o(
                "WAWebVoipPthreadGlueFailureTracker",
              ).attachPthreadGlueFailureModule(s),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var u = o("WAWebABProps").getABPropConfigValue(
                "web_voip_dynamic_thread_preallocate_count",
              ),
              c = N(u, n),
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
                o("WAWebVoipQplHelpers").VoipInitQplPoint
                  .THREAD_POOL_SETUP_START,
              ),
              o("WAWebAppTracker").AppTracker.mark(
                o("WAWebAppTracker").AppTrackerType.VoipThreadPoolSetup,
              ));
            var g = new (r("WAWebVoipThreadPoolManager"))(s, _, f);
            return (
              g.init(),
              (h = g),
              o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(
                g,
              ),
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
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      var n = self.performance.now(),
        r = document.visibilityState;
      return function () {
        return {
          isContentAddressed: e.useContentAddressedWasm,
          isLoaderModuleLoaded: q(e.useContentAddressedWasm),
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
    function q(e) {
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
    function U(e) {
      var t = S != null ? S : e;
      return ((S = t), t);
    }
    function V(e) {
      var t = o("WAWebVoipQplHelpers").getVoipInitQplTriggeredAtMs();
      t != null &&
        o("WAWebVoipQplHelpers").voipInitQplAnnotateWasmPrefetch(
          o("WAWebVoipWasmResourceTiming").getVoipWasmPrefetchState(e, t),
        );
    }
    function H() {
      return h;
    }
    ((l.prefetchVoipWasmLoaderModule = I),
      (l.requireVoip = P),
      (l.getVoipThreadPoolManager = H));
  },
  98,
);
