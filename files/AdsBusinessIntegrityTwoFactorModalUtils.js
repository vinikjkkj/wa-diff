__d(
  "AdsBusinessIntegrityTwoFactorModalUtils",
  [
    "DOM",
    "ReactDOM_DEPRECATED",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")(
          "AdsBusinessIntegrityPostAuthenticationModal.react",
        ).__setRef("AdsBusinessIntegrityTwoFactorModalUtils"),
      ),
      c = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")(
          "AdsBusinessIntegrityAuthenticationModal.react",
        ).__setRef("AdsBusinessIntegrityTwoFactorModalUtils"),
      );
    function d(e) {
      (e === void 0 && (e = !0),
        o("ReactDOM_DEPRECATED").render_DEPRECATED(
          s.jsx(c, { showSuccessModalOnComplete: e }),
          r("DOM").create("div"),
        ));
    }
    function m() {
      o("ReactDOM_DEPRECATED").render_DEPRECATED(
        s.jsx(u, {}),
        r("DOM").create("div"),
      );
    }
    ((l.showAdsBusinessIntegrityAuthenticationModal = d),
      (l.showAdsBusinessIntegrityPostAuthenticationModal = m));
  },
  98,
);
