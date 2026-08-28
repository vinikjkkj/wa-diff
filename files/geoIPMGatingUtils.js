__d(
  "geoIPMGatingUtils",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("14772");
    }
    function s() {
      return r("qex")._("2041") === !0 || r("gkx")("8831") || r("gkx")("11576");
    }
    function u() {
      return L() && r("qex")._("3268") === !0;
    }
    function c() {
      return (
        r("qex")._("2041") === !0 ||
        r("qex")._("2042") === !0 ||
        r("gkx")("11576") ||
        r("gkx")("11967")
      );
    }
    function d(e) {
      return L()
        ? e
          ? r("qex")._("21") === !0
          : r("qex")._("4699") === !0
        : r("gkx")("8871");
    }
    function m() {
      return r("gkx")("14773");
    }
    function p() {
      return r("gkx")("4833");
    }
    function _() {
      return r("gkx")("14774");
    }
    var f = "/adsmanager",
      g = "/adsreporting",
      h = "/business_locations",
      y = "/latest/business_home",
      C = "/billing_hub/",
      b = "/ads/manager/",
      v = [g, h, y, C, b];
    function S() {
      var e = window.location.pathname;
      return e.startsWith(f);
    }
    function R() {
      var e = window.location.pathname;
      return v.some(function (t) {
        return e.startsWith(t);
      });
    }
    function L() {
      return S() || R();
    }
    ((l.shouldShowNewBrandingStatusIcon = e),
      (l.shouldShowInfoDarkGrayColor = s),
      (l.shouldShowPrimaryLightGrayColor = u),
      (l.isInInfoColorGrayExperiment = c),
      (l.shouldShowFilledIcon = d),
      (l.shouldShowNewBrandingColors = m),
      (l.shouldShowOSRecolor = p),
      (l.shouldShowNewBrandingInfoIcon = _),
      (l.isAdsManagerTool = L));
  },
  98,
);
