__d(
  "AdsManagerConstURIUtils",
  [
    "AdsManagerReadRegions",
    "XAdsCMAccountSettingsPageControllerRouteBuilder",
    "XAdsCMControllerRouteBuilder",
    "XAdsPEControllerRouteBuilder",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("XAdsPEControllerRouteBuilder").buildUri(
        babelHelpers.extends({}, n, {
          nav_entry_point: t != null ? t : void 0,
          nav_source: e,
        }),
      );
      return m(o);
    }
    function s(e, t, n) {
      var o = r("XAdsCMControllerRouteBuilder").buildUri(
        babelHelpers.extends({}, n, {
          nav_entry_point: t != null ? t : void 0,
          nav_source: e,
        }),
      );
      return m(o);
    }
    function u(e, t, n) {
      var o = r("XAdsCMAccountSettingsPageControllerRouteBuilder").buildUri(
        babelHelpers.extends({}, n, {
          nav_entry_point: t != null ? t : void 0,
          nav_source: e,
        }),
      );
      return m(o);
    }
    function c(e) {
      return !!(
        window.location.host.includes("adsmanager") &&
        !r("AdsManagerReadRegions").excluded_endpoints.some(function (t) {
          return e.includes(t);
        }) &&
        r("gkx")("1221")
      );
    }
    function d(e, t) {
      return (
        t === void 0 && (t = !0),
        !!(
          window.location.host.includes("adsmanager") &&
          r("gkx")("13382") &&
          (r("AdsManagerReadRegions").excluded_endpoints.some(function (t) {
            return e.includes(t);
          }) ||
            !t)
        )
      );
    }
    function m(e) {
      return (
        c(e.toString())
          ? e.addQueryParam("ads_manager_read_regions", "true")
          : d(e.toString())
            ? e.addQueryParam("ads_manager_write_regions", "true")
            : (e.getQueryParam("ads_manager_read_regions") !== null ||
                e.getQueryParam("ads_manager_write_regions") !== null) &&
              (e.removeQueryParam("ads_manager_read_regions"),
              e.removeQueryParam("ads_manager_write_regions")),
        e
      );
    }
    ((l.getAdsManagerURI = e),
      (l.getXAdsCMControllerURI = s),
      (l.getXAdsCMAccountSettingsPageURI = u),
      (l.shouldRouteToAMReadRegions = c),
      (l.shouldRouteToAMWriteRegions = d));
  },
  98,
);
