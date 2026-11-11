__d(
  "WAWebPrefetchHatchLinkedStatusOnLogin",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebHatchBackendGating",
    "WAWebHatchLinkedStatusManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WATimeUtils").HOUR_MILLISECONDS * 4,
      c = !1,
      d = !1,
      m = !1;
    function p() {
      if (
        !(
          c ||
          !o("WAWebHatchBackendGating").isHatchIntegrationEnabledOnBackend()
        )
      ) {
        if (!o("WAWebCanonicalUtils").isCanonicalPresent()) {
          _();
          return;
        }
        ((c = !0),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[hatch] prefetching linked status after login",
              ])),
          ),
          r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus());
      }
    }
    function _() {
      if (!(d || !o("WAWebCanonicalGating").isCanonicalEnabled())) {
        d = !0;
        var e = self.setTimeout(f, u);
        o("WAWebCanonicalUtils")
          .waitForCanonicalPresent()
          .then(function () {
            (self.clearTimeout(e), (d = !1), p());
          });
      }
    }
    function f() {
      c ||
        m ||
        !o("WAWebHatchBackendGating").isHatchIntegrationEnabledOnBackend() ||
        ((m = !0),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[hatch] prefetching linked status without canonical credentials",
            ])),
        ),
        r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus());
    }
    l.maybePrefetchHatchLinkedStatusOnLogin = p;
  },
  98,
);
