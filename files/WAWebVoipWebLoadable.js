__d(
  "WAWebVoipWebLoadable",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebEnvironment",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLazyLoadedRetriable",
    "WAWebPonyfillsIdleCallback",
    "WAWebReleaseToEventLoop",
    "WAWebVoipGatingUtils",
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
      p = null,
      _ = !1;
    function f(e) {
      if (_ || navigator.onLine === !1) return !0;
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
    var g = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Loading VoIP WASM with AB prop-based variant selection",
              ])),
          ),
          y()
        );
      }),
      "voipWebWasmLoader",
      {
        onAttemptFailure: function (t, n) {
          navigator.onLine === !1 && (_ = !0);
        },
        onFinalFailure: function (t, n) {
          var e = f(t);
          if (((_ = !1), e)) {
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
    function h(e, t) {
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
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!r("WAWebEnvironment").isGuest) {
            var e;
            (e = o("WAWebVoipQplHelpers")).voipInitQplAddPoint(
              e.VoipInitQplPoint.WAIT_OFFLINE_DELIVER_START,
            );
            try {
              yield o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd({ ignoreInit: !0 });
            } catch (e) {}
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint
                .WAIT_OFFLINE_DELIVER_END,
            );
          }
          (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_START,
          ),
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
            ));
          try {
            var t = o("WAWebVoipGatingUtils").isWebKitBrowser(),
              n = yield o(
                "WAWebVoipWebWasmVariantLoader",
              ).loadVoipWasmVariant();
            (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_END,
            ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(n, "wasm_load"),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var a = o("WAWebABProps").getABPropConfigValue(
                "web_voip_dynamic_thread_preallocate_count",
              ),
              i = h(a, t),
              l = i.initialPthreadPoolSize,
              s = i.isDynamicPoolEnabled,
              u = i.targetPoolSize;
            (t &&
              typeof a == "number" &&
              a > 0 &&
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
            var d = new (r("WAWebVoipThreadPoolManager"))(n, s, u);
            return (
              d.init(),
              (p = d),
              o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(
                d,
              ),
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END,
              ),
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
                n,
                "thread_pool_setup",
              ),
              o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(l, s, t),
              o("WAWebVoipGatingUtils").shouldSkipEagerSctpPrewarm() ||
                o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                  function () {
                    r("WAWebVoipSctpPrewarm")();
                  },
                ),
              n
            );
          } finally {
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.VoipWasmLoad,
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return p;
    }
    ((l.requireVoip = g), (l.getVoipThreadPoolManager = b));
  },
  98,
);
