__d(
  "WAWebNativeAdsMvpEligibilityModel",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = !1,
      u = new (r("WAWebEventEmitter"))();
    function c() {
      return { isQE2Eligible: p(), hasAdvertisedViaLWI: _(), isLoaded: C() };
    }
    function d(t) {
      ((e = t), (s = !0), u.trigger("updated", c()));
    }
    function m() {
      ((s = !0), u.trigger("updated", c()));
    }
    function p() {
      return e == null
        ? !1
        : !e.lifetime_native_ctwa_advertiser &&
            !e.is_page_asset_linked &&
            !e.is_pageless_asset_linked;
    }
    function _() {
      return e == null ? !1 : e.webclient_l90_ad_creator;
    }
    function f() {
      return e != null;
    }
    function g() {
      var t, n;
      return (t =
        (n = e) == null ? void 0 : n.lifetime_native_ctwa_advertiser) != null
        ? t
        : !1;
    }
    function h() {
      var t, n;
      return (t = (n = e) == null ? void 0 : n.is_page_asset_linked) != null
        ? t
        : !1;
    }
    function y() {
      var t, n;
      return (t = (n = e) == null ? void 0 : n.is_pageless_asset_linked) != null
        ? t
        : !1;
    }
    function C() {
      return s;
    }
    ((l.NativeAdsMvpEligibilityEventBus = u),
      (l.buildEligibilitySnapshot = c),
      (l.setNativeAdsMvpEligibility = d),
      (l.markEligibilityLoadFailed = m),
      (l.isQE2Eligible = p),
      (l.hasAdvertisedViaLWI = _),
      (l.hasEligibilityData = f),
      (l.lifetimeNativeCTWAAdvertiser = g),
      (l.isPageAssetLinked = h),
      (l.isPagelessAssetLinked = y),
      (l.isEligibilityDataLoaded = C));
  },
  98,
);
