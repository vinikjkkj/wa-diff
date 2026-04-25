__d(
  "WAWebVoipWebLoadable",
  [
    "WACommonTaskScheduler",
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLazyLoadedRetriable",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipGatingUtils",
    "WAWebVoipQplHelpers",
    "WAWebVoipSctpPrewarm",
    "WAWebVoipThreadPoolManager",
    "WAWebVoipThreadPoolManagerRegistry",
    "WAWebVoipWebWasmVariantLoader",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 0,
      c = 20,
      d = null,
      m = null,
      p = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            d != null ||
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Loading VoIP WASM with AB prop-based variant selection",
                  ])),
              ),
              (d = f())),
            d
          );
        }),
        "voipWebWasmLoader",
      );
    function _(e, t) {
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
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
              ? yield r("WACommonTaskScheduler").yield()
              : yield o("WAPromiseDelays").releaseToEventLoop());
          var a = o("WAWebABProps").getABPropConfigValue(
              "web_voip_dynamic_thread_preallocate_count",
            ),
            i = _(a, t),
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
          var d = new (r("WAWebVoipThreadPoolManager"))(n, u, c);
          return (
            d.init(),
            (m = d),
            o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(d),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END,
            ),
            o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(l, u, t),
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              r("WAWebVoipSctpPrewarm")();
            }),
            n
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return m;
    }
    ((l.requireVoip = p), (l.getVoipThreadPoolManager = h));
  },
  98,
);
