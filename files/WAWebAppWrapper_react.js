__d(
  "WAWebAppWrapper.react",
  [
    "CometPlaceholder.react",
    "WAWebFBLogger",
    "WAWebHeroInteractionRouterRoot",
    "WAWebLocalStorage",
    "WAWebODS",
    "WAWebUserPrefsLoginKeys",
    "cr:16788",
    "cr:35042",
    "cr:7675",
    "deferredLoadComponent",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "requireDeferredForDisplay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect,
      c = r("requireDeferred")("WAWebOneTraceSetup").__setRef(
        "WAWebAppWrapper.react",
      ),
      d = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")("WAWebAppInitializer.react").__setRef(
          "WAWebAppWrapper.react",
        ),
      );
    function m() {
      (n("cr:16788") == null || n("cr:16788")(),
        u(function () {
          var e = document.querySelectorAll('link[rel="stylesheet"]');
          e.forEach(function (e) {
            e.addEventListener(
              "error",
              function () {
                r("WAWebODS").incr("web.app.cssLoadError");
              },
              { once: !0 },
            );
          });
        }, []));
      try {
        n("cr:7675") == null || n("cr:7675").setupCometJSUsageLogging();
        var e = !!(
          r("WAWebLocalStorage") != null &&
          r("WAWebLocalStorage").getItem(
            o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD,
          )
        );
        (r("WAWebHeroInteractionRouterRoot").startInitialLoad(
          e ? "root" : "login",
        ),
          c.load().then(function (e) {
            e();
          }),
          n("cr:35042") == null ||
            n("cr:35042").startRSTAfterPageLoadFromMainThread());
      } catch (e) {
        o("WAWebFBLogger")
          .WAWebFBLogger()
          .mustfix(
            "Failed to start HeroInteraction initial load or OneTrace setup. " +
              String(e),
          );
      }
      return s.jsx(r("WAWebHeroInteractionRouterRoot").Component, {
        defaultTracePolicy: "waweb.unknown",
        children: s.jsx("div", {
          id: "app",
          children: s.jsx(r("CometPlaceholder.react"), {
            fallback: s.jsx(p, {}),
            name: i.id,
            children: s.jsx(d, {}),
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx("div", {})), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.default = m;
  },
  98,
);
