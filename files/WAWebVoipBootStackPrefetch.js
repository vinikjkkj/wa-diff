__d(
  "WAWebVoipBootStackPrefetch",
  [
    "Promise",
    "WALogger",
    "WAWebABPropsCache",
    "WAWebBackendApi",
    "WAWebVoipBackendLoadable",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = null;
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
            !o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
          ) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] prefetch decision=skip reason=download_disabled",
                    ])),
                );
              },
            );
            return;
          }
          var e = o("WAWebVoipGatingUtils").isCallingEnabled(),
            t = e && o("WAWebVoipGatingUtils").isDeferredVoipBootInitEnabled(),
            n =
              t &&
              o(
                "WAWebVoipGatingUtils",
              ).isDeferredVoipBootEarlyModulePrefetchEnabled(),
            a = e && !t;
          if (
            (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] stack_prefetch start stack=",
                      " deferred=",
                      " early_modules=",
                      "",
                    ])),
                  a,
                  t,
                  n,
                );
              },
            ),
            n)
          )
            try {
              yield b("boot_prefetch");
            } catch (e) {
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger")
                    .WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] stack_prefetch incomplete early_modules=true",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                },
              );
              return;
            }
          else
            a && (yield o("WAWebVoipStackInterface").getVoipStackInterface());
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] stack_prefetch complete stack=",
                    " early_modules=",
                    "",
                  ])),
                a,
                n,
              );
            },
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(t) {
      var r = h;
      if (r != null)
        return (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] early_module_prefetch reuse source=",
                    "",
                  ])),
                t,
              );
            },
          ),
          r
        );
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] early_module_prefetch start source=",
                "",
              ])),
            t,
          );
        },
      );
      var a = (g || (g = n("Promise")))
        .all([
          S(t, "backend", o("WAWebVoipBackendLoadable").requireVoipJsBackend),
          S(
            t,
            "stack",
            o("WAWebVoipStackInterface").prefetchVoipStackInterfaceModule,
          ),
          S(t, "wasm_loader", function () {
            return o("WAWebBackendApi").frontendSendAndReceive(
              "prefetchVoipWasmLoaderModule",
            );
          }),
        ])
        .then(function (e) {
          var n,
            r = e[0],
            a = e[1],
            i = e[2],
            l = (n = r != null ? r : a) != null ? n : i;
          if (l != null) throw l;
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] early_module_prefetch complete source=",
                    "",
                  ])),
                t,
              );
            },
          );
        })
        .catch(function (e) {
          throw (h === a && (h = null), e);
        });
      return ((h = a), a);
    }
    function v() {
      h = null;
    }
    function S(e, t, a) {
      return (g || (g = n("Promise")))
        .resolve()
        .then(a)
        .then(function () {
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] early_module_prefetch ready source=",
                      " stage=",
                      "",
                    ])),
                  e,
                  t,
                );
              },
            ),
            null
          );
        })
        .catch(function (n) {
          var a = r("getErrorSafe")(n);
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] early_module_prefetch failed source=",
                        " stage=",
                        "",
                      ])),
                    e,
                    t,
                  )
                  .catching(a);
              },
            ),
            a
          );
        });
    }
    ((l.prefetchVoipStackFromBootGate = y),
      (l.prefetchDeferredVoipBootModules = b),
      (l.resetDeferredVoipBootModulePrefetchForTesting = v));
  },
  98,
);
