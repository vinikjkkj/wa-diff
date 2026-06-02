__d(
  "WAWebAppSwInitializer",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebFeatureDetectionSwSupport",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebSwUpdater",
    "WAWebUA",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n,
        a,
        i,
        l = t.swScope,
        u = t.swScriptPath;
      if (m()) return d();
      if (
        !(
          !r("WAWebFeatureDetectionSwSupport").supported ||
          window.navigator.serviceWorker == null
        )
      ) {
        if (
          ((n = window.navigator.serviceWorker) != null &&
            n.controller &&
            (await o("WAWebSwUpdater").updateSw()),
          !r("gkx")("26258") &&
            (a = window.navigator.serviceWorker) != null &&
            a.controller)
        ) {
          var c = await (window.navigator.serviceWorker.getRegistrations == null
            ? void 0
            : window.navigator.serviceWorker.getRegistrations());
          if (c) {
            var p = [];
            for (var _ of c)
              _.scope !== window.location.origin + window.location.pathname &&
                p.push(
                  _.unregister().catch(function (t) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "service-worker-unregistration-failure",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t))
                      .sendLogs("service-worker-unregistration-failure");
                  }),
                );
            await Promise.all(p);
          }
        }
        if (
          window.navigator.serviceWorker &&
          !((i = window.navigator.serviceWorker) != null && i.controller)
        )
          try {
            var f = r("WAWebEnvironment").isWindows
                ? window.location.search
                : "",
              g = u + f;
            await window.navigator.serviceWorker.register(g, {
              scope: l,
              updateViaCache: "all",
            });
          } catch (e) {
            var h = r("getErrorSafe")(e);
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "service-worker-registration-failure",
                  ])),
              )
              .catching(h)
              .sendLogs("service-worker-registration-failure", {
                sampling: 0.01,
              });
          }
      }
    }
    async function d() {
      var e,
        t = await ((e = window.navigator.serviceWorker) == null ||
        e.getRegistrations == null
          ? void 0
          : e.getRegistrations());
      if (t) {
        var n = [];
        for (var a of t)
          n.push(
            a.unregister().catch(function (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "service-worker-unregistration-failure",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("service-worker-unregistration-failure");
            }),
          );
        await Promise.all(n);
      }
    }
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_disable_sw_on_safari_pwa",
        ) &&
        o("WAWebUA").UA.isSafari &&
        o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()
      );
    }
    l.initializeSw = c;
  },
  98,
);
