__d(
  "WAWebVoipColdPathEarlyStart",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebVoipBackendLoadable",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipQplHelpers",
    "WAWebVoipStackInterface",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t, n) {
      try {
        if (!p()) return;
        var a = _();
        (o("WAWebVoipQplHelpers").voipInitQplRecordEarlyStart(n),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] early_start trigger=",
                    " wasm_loader=",
                    "",
                  ])),
                t,
                a,
              );
            },
          ),
          m(a).forEach(function (e) {
            var n = e.load,
              r = e.module;
            g(t, r, n);
          }));
      } catch (e) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] early_start gate_failed trigger=",
                    "",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e));
          },
        );
      }
    }
    function m(e, t) {
      t === void 0 && (t = o("WAWebVoipBackendLoadable").requireVoipJsBackend);
      var n = [
        { load: t, module: "backend" },
        {
          load: o("WAWebVoipStackInterface").prefetchVoipStackInterfaceModule,
          module: "stack_interface",
        },
      ];
      return (e && n.push({ load: f, module: "wasm_loader" }), n);
    }
    function p() {
      return (
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInited() &&
        o("WAWebVoipGatingUtils").isCallingEnabled() &&
        o("WAWebVoipGatingUtils").isVoipDownloadEnabled() &&
        o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootEarlyModulePrefetchEnabled()
      );
    }
    function _() {
      return (
        o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd() ||
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_skip_offline_wait_on_call_intent",
        ) === !0
      );
    }
    function f() {
      return o("WAWebBackendApi").frontendSendAndReceive(
        "prefetchVoipWasmLoaderModule",
      );
    }
    function g(e, t, a) {
      (c || (c = n("Promise")))
        .resolve()
        .then(a)
        .catch(function (n) {
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] early_start failed trigger=",
                      " module=",
                      "",
                    ])),
                  e,
                  t,
                )
                .catching(r("getErrorSafe")(n));
            },
          );
        });
    }
    ((l.startVoipColdPathEarly = d), (l.getVoipColdPathModuleLoads = m));
  },
  98,
);
