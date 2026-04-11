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
      u = null,
      c = null,
      d = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            u != null ||
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Loading VoIP WASM with AB prop-based variant selection",
                  ])),
              ),
              (u = m())),
            u
          );
        }),
        "voipWebWasmLoader",
      );
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          var t = yield o(
            "WAWebVoipWebWasmVariantLoader",
          ).loadVoipWasmVariant();
          (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_LOAD_END,
          ),
            o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
              ? yield r("WACommonTaskScheduler").yield()
              : yield o("WAPromiseDelays").releaseToEventLoop());
          var n = o("WAWebABProps").getABPropConfigValue(
              "web_voip_dynamic_thread_preallocate_count",
            ),
            a = o("WAWebVoipGatingUtils").isWebKitBrowser(),
            i = n > 0 && !a;
          a &&
            n > 0 &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ThreadPoolManager: dynamic pool disabled (WebKit TLS)",
                ])),
            );
          var l = i ? n : 20;
          o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_START,
          );
          var u = new (r("WAWebVoipThreadPoolManager"))(t, i, l);
          return (
            u.init(),
            (c = u),
            o("WAWebVoipThreadPoolManagerRegistry").setVoipThreadPoolManager(u),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.THREAD_POOL_SETUP_END,
            ),
            o("WAWebVoipQplHelpers").voipInitQplAnnotateThreadPool(l, i, a),
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              r("WAWebVoipSctpPrewarm")();
            }),
            t
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return c;
    }
    ((l.requireVoip = d), (l.getVoipThreadPoolManager = _));
  },
  98,
);
