__d(
  "WAWebVoipWebLoadable",
  [
    "WACommonTaskScheduler",
    "WALogger",
    "WAWebABProps",
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
      u = 0,
      c = 20,
      d = null,
      m = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Loading VoIP WASM with AB prop-based variant selection",
                ])),
            ),
            _()
          );
        }),
        "voipWebWasmLoader",
      );
    function p(e, t) {
      return t
        ? {
            initialPthreadPoolSize: c,
            targetPoolSize: c,
            isDynamicPoolEnabled: !1,
          }
        : typeof e == "number" && e > 0
          ? {
              initialPthreadPoolSize: u,
              targetPoolSize: e,
              isDynamicPoolEnabled: !0,
            }
          : {
              initialPthreadPoolSize: c,
              targetPoolSize: c,
              isDynamicPoolEnabled: !1,
            };
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          (e = o("WAWebVoipQplHelpers")).voipInitQplAddPoint(
            e.VoipInitQplPoint.WAIT_OFFLINE_DELIVER_START,
          );
          try {
            yield o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd({ ignoreInit: !0 });
          } catch (e) {}
          (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.WAIT_OFFLINE_DELIVER_END,
          ),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_START,
            ));
          var t = o("WAWebVoipGatingUtils").isWebKitBrowser(),
            n = yield o("WAWebVoipWebWasmVariantLoader").loadVoipWasmVariant();
          (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_END,
          ),
            o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(n, "wasm_load"),
            o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
              ? yield r("WACommonTaskScheduler").yield()
              : yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var a = o("WAWebABProps").getABPropConfigValue(
              "web_voip_dynamic_thread_preallocate_count",
            ),
            i = p(a, t),
            l = i.initialPthreadPoolSize,
            u = i.isDynamicPoolEnabled,
            c = i.targetPoolSize;
          (t &&
            typeof a == "number" &&
            a > 0 &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ThreadPoolManager: dynamic pool disabled (WebKit TLS)",
                ])),
            ),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_START,
            ));
          var m = new (r("WAWebVoipThreadPoolManager"))(n, u, c);
          return (
            m.init(),
            (d = m),
            o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(m),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END,
            ),
            o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
              n,
              "thread_pool_setup",
            ),
            o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(l, u, t),
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              r("WAWebVoipSctpPrewarm")();
            }),
            n
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return d;
    }
    ((l.requireVoip = m), (l.getVoipThreadPoolManager = g));
  },
  98,
);
