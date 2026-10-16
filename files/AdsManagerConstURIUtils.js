__d(
  "AdsManagerConstURIUtils",
  [
    "AdsManagerReadRegions",
    "ExecutionEnvironment",
    "XAdsCMAccountSettingsPageControllerRouteBuilder",
    "XAdsCMControllerRouteBuilder",
    "XAdsPEControllerRouteBuilder",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      var o = r("XAdsPEControllerRouteBuilder").buildUri(
        babelHelpers.extends({}, n, {
          nav_entry_point: t != null ? t : void 0,
          nav_source: e,
        }),
      );
      return _(o);
    }
    function u(e, t, n) {
      var o = r("XAdsCMControllerRouteBuilder").buildUri(
        babelHelpers.extends({}, n, {
          nav_entry_point: t != null ? t : void 0,
          nav_source: e,
        }),
      );
      return _(o);
    }
    function c(e, t, n) {
      var o = r("XAdsCMAccountSettingsPageControllerRouteBuilder").buildUri(
        babelHelpers.extends({}, n, {
          nav_entry_point: t != null ? t : void 0,
          nav_source: e,
        }),
      );
      return _(o);
    }
    function d() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? window.location.host.includes("adsmanager")
        : !1;
    }
    function m(e) {
      return !!(
        d() &&
        !r("AdsManagerReadRegions").excluded_endpoints.some(function (t) {
          return e.includes(t);
        }) &&
        r("gkx")("1221")
      );
    }
    function p(e, t) {
      return (
        t === void 0 && (t = !0),
        !!(
          d() &&
          r("gkx")("13382") &&
          (r("AdsManagerReadRegions").excluded_endpoints.some(function (t) {
            return e.includes(t);
          }) ||
            !t)
        )
      );
    }
    function _(e) {
      return (
        m(e.toString())
          ? e.addQueryParam("ads_manager_read_regions", "true")
          : p(e.toString())
            ? e.addQueryParam("ads_manager_write_regions", "true")
            : (e.getQueryParam("ads_manager_read_regions") !== null ||
                e.getQueryParam("ads_manager_write_regions") !== null) &&
              (e.removeQueryParam("ads_manager_read_regions"),
              e.removeQueryParam("ads_manager_write_regions")),
        e
      );
    }
    ((l.getAdsManagerURI = s),
      (l.getXAdsCMControllerURI = u),
      (l.getXAdsCMAccountSettingsPageURI = c),
      (l.shouldRouteToAMReadRegions = m),
      (l.shouldRouteToAMWriteRegions = p));
  },
  98,
);
