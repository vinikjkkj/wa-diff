__d(
  "WAWebVoipWebLoadable",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebAppTracker",
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
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWebWasmVariantLoader",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 0,
      m = 20,
      p = 5e3,
      _ = null,
      f = !1,
      g = null,
      h = !1;
    function y() {
      var e = g;
      if (e != null) return e;
      var t = o(
        "WAWebVoipWasmArtifactGating",
      ).shouldUseContentAddressedVoipWasm();
      return (
        (g = t),
        t.then(
          function (e) {
            h = e;
          },
          function () {
            h = !1;
          },
        ),
        t
      );
    }
    function C(e) {
      return h
        ? (e.name + ": " + e.message)
            .toLowerCase()
            .includes("unknown file path")
        : !1;
    }
    function b(e) {
      if (f || navigator.onLine === !1) return !0;
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
    var v = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Loading VoIP WASM with AB prop-based variant selection",
              ])),
          ),
          R(yield y())
        );
      }),
      "voipWebWasmLoader",
      {
        isTerminalError: C,
        onAttemptFailure: function (t, n) {
          navigator.onLine === !1 && (f = !0);
        },
        onFinalFailure: function (t, n) {
          var e = b(t),
            r = C(t);
          if (
            ((f = !1),
            (g = null),
            (h = !1),
            r &&
              o(
                "WAWebVoipInitReloadRecovery",
              ).markVoipWasmArtifactUnavailable(),
            e)
          ) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
    function S(e, t) {
      return t
        ? {
            initialPthreadPoolSize: m,
            targetPoolSize: m,
            isDynamicPoolEnabled: !1,
          }
        : typeof e == "number" && e > 0
          ? {
              initialPthreadPoolSize: d,
              targetPoolSize: e,
              isDynamicPoolEnabled: !0,
            }
          : {
              initialPthreadPoolSize: m,
              targetPoolSize: m,
              isDynamicPoolEnabled: !1,
            };
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                p,
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
                o("WAWebVoipWebWasmVariantLoader").loadVoipWasmVariant(e),
              );
            (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_END,
            ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(i, "wasm_load"),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var l = o("WAWebABProps").getABPropConfigValue(
                "web_voip_dynamic_thread_preallocate_count",
              ),
              s = S(l, a),
              u = s.initialPthreadPoolSize,
              d = s.isDynamicPoolEnabled,
              m = s.targetPoolSize;
            (a &&
              typeof l == "number" &&
              l > 0 &&
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
            var f = new (r("WAWebVoipThreadPoolManager"))(i, d, m);
            (f.init(),
              (_ = f),
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
              o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(u, d, a));
            var g =
              o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
              o("WAWebABProps").getABPropConfigValue(
                "enable_web_voip_webtransport_fallback",
              );
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
        L.apply(this, arguments)
      );
    }
    function E() {
      return _;
    }
    ((l.requireVoip = v), (l.getVoipThreadPoolManager = E));
  },
  98,
);
