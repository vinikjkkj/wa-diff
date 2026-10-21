__d(
  "WAWebPrefetchHatchLinkedStatusOnLogin",
  ["WALogger", "WAWebHatchBackendGating", "WAWebHatchLinkedStatusManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1;
    function u() {
      s ||
        !o("WAWebHatchBackendGating").isHatchIntegrationEnabledOnBackend() ||
        ((s = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[hatch] prefetching linked status after login",
            ])),
        ),
        r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus());
    }
    l.maybePrefetchHatchLinkedStatusOnLogin = u;
  },
  98,
);
