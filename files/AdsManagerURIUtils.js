__d(
  "AdsManagerURIUtils",
  ["AdsManagerConstURIUtils", "URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a) {
      return new (e || (e = r("URI")))(
        o("AdsManagerConstURIUtils").getAdsManagerURI(t, n, a).toString(),
      );
    }
    function u(t, n, a) {
      return new (e || (e = r("URI")))(
        o("AdsManagerConstURIUtils").getXAdsCMControllerURI(t, n, a).toString(),
      );
    }
    function c(t, n, a) {
      return new (e || (e = r("URI")))(
        o("AdsManagerConstURIUtils")
          .getXAdsCMAccountSettingsPageURI(t, n, a)
          .toString(),
      );
    }
    ((l.getAdsManagerURI = s),
      (l.getXAdsCMControllerURI = u),
      (l.getXAdsCMAccountSettingsPageURI = c));
  },
  98,
);
