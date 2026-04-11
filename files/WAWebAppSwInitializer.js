__d(
  "WAWebAppSwInitializer",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebFeatureDetectionSwSupport",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebSwUpdater",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l,
            u = t.swScope,
            d = t.swScriptPath;
          if (f()) return p();
          if (
            !(
              !r("WAWebFeatureDetectionSwSupport").supported ||
              window.navigator.serviceWorker == null
            )
          ) {
            if (
              ((a = window.navigator.serviceWorker) != null &&
                a.controller &&
                (yield o("WAWebSwUpdater").updateSw()),
              !r("gkx")("26258") &&
                (i = window.navigator.serviceWorker) != null &&
                i.controller)
            ) {
              var m = yield window.navigator.serviceWorker.getRegistrations ==
              null
                ? void 0
                : window.navigator.serviceWorker.getRegistrations();
              if (m) {
                var _ = [];
                for (var g of m)
                  g.scope !==
                    window.location.origin + window.location.pathname &&
                    _.push(
                      g.unregister().catch(function (t) {
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "service-worker-unregistration-failure",
                              ])),
                          )
                          .catching(t)
                          .sendLogs("service-worker-unregistration-failure");
                      }),
                    );
                yield (c || (c = n("Promise"))).all(_);
              }
            }
            if (
              window.navigator.serviceWorker &&
              !((l = window.navigator.serviceWorker) != null && l.controller)
            )
              try {
                var h = r("WAWebEnvironment").isWindows
                    ? window.location.search
                    : "",
                  y = d + h;
                yield window.navigator.serviceWorker.register(y, {
                  scope: u,
                  updateViaCache: "all",
                });
              } catch (e) {
                var C = r("getErrorSafe")(e);
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "service-worker-registration-failure",
                      ])),
                  )
                  .catching(C)
                  .sendLogs("service-worker-registration-failure", {
                    sampling: 0.01,
                  });
              }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield (e = window.navigator.serviceWorker) == null ||
            e.getRegistrations == null
              ? void 0
              : e.getRegistrations();
          if (t) {
            var r = [];
            for (var a of t)
              r.push(
                a.unregister().catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "service-worker-unregistration-failure",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("service-worker-unregistration-failure");
                }),
              );
            yield (c || (c = n("Promise"))).all(r);
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_disable_sw_on_safari_pwa",
        ) &&
        o("WAWebUA").UA.isSafari &&
        o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()
      );
    }
    l.initializeSw = d;
  },
  98,
);
