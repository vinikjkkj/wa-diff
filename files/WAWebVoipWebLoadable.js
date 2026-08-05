__d(
  "WAWebVoipWebLoadable",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebEnvironment",
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
      f = !1;
    function g(e) {
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
    var h = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Loading VoIP WASM with AB prop-based variant selection",
              ])),
          ),
          C()
        );
      }),
      "voipWebWasmLoader",
      {
        onAttemptFailure: function (t, n) {
          navigator.onLine === !1 && (f = !0);
        },
        onFinalFailure: function (t, n) {
          var e = g(t);
          if (((f = !1), e)) {
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
    function y(e, t) {
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
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!r("WAWebEnvironment").isGuest) {
            var e;
            (e = o("WAWebVoipQplHelpers")).voipInitQplAddPoint(
              e.VoipInitQplPoint.WAIT_OFFLINE_DELIVER_START,
            );
            var t = !1;
            try {
              yield o("WAPromiseTimeout").promiseTimeout(
                o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd({ ignoreInit: !0 }),
                p,
              );
            } catch (e) {
              t = e instanceof o("WACustomError").TimeoutError;
            }
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint
                .WAIT_OFFLINE_DELIVER_END,
              { bool: { offline_delivery_wait_timed_out: t } },
            );
          }
          (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_START,
          ),
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
            ));
          try {
            var n = o("WAWebVoipGatingUtils").isWebKitBrowser(),
              a = yield o(
                "WAWebVoipInitReloadRecovery",
              ).observeVoipWasmLoaderPromise(
                o("WAWebVoipWebWasmVariantLoader").loadVoipWasmVariant(),
              );
            (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_END,
            ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(a, "wasm_load"),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var i = o("WAWebABProps").getABPropConfigValue(
                "web_voip_dynamic_thread_preallocate_count",
              ),
              l = y(i, n),
              s = l.initialPthreadPoolSize,
              u = l.isDynamicPoolEnabled,
              d = l.targetPoolSize;
            (n &&
              typeof i == "number" &&
              i > 0 &&
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
            var m = new (r("WAWebVoipThreadPoolManager"))(a, u, d);
            (m.init(),
              (_ = m),
              o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(
                m,
              ),
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END,
              ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
                a,
                "thread_pool_setup",
              ),
              o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(s, u, n));
            var f =
              o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
              o("WAWebABProps").getABPropConfigValue(
                "enable_web_voip_webtransport_fallback",
              );
            return (
              f
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
              a
            );
          } finally {
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return _;
    }
    ((l.requireVoip = h), (l.getVoipThreadPoolManager = v));
  },
  98,
);
