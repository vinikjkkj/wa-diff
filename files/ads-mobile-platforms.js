__d(
  "ads-mobile-platforms",
  [
    "fbt",
    "AdsMobileDeviceTypes",
    "AdsTargetingDevicesAccessor",
    "StrSet",
    "ads-mobile-operating-systems",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = /(.*)_ver_(.*)/,
      c = [
        {
          name: s._(/*BTDS*/ "Smartphones"),
          id: (e = r("AdsMobileDeviceTypes")).ANDROID_SMARTPHONE,
        },
        { name: s._(/*BTDS*/ "Tablets"), id: e.ANDROID_TABLET },
      ],
      d = new (r("StrSet"))(
        c.map(function (e) {
          return e.id;
        }),
      ),
      m = [
        { name: s._(/*BTDS*/ "iPhone"), id: e.IPHONE },
        { name: s._(/*BTDS*/ "iPod"), id: e.IPOD },
        { name: s._(/*BTDS*/ "iPad"), id: e.IPAD },
      ],
      p = new (r("StrSet"))(
        m.map(function (e) {
          return e.id;
        }),
      );
    function _(e) {
      return e == null
        ? !1
        : p.contains(e) || o("AdsTargetingDevicesAccessor").isIOSDevice(e);
    }
    function f(e) {
      return e == null
        ? !1
        : d.contains(e) || o("AdsTargetingDevicesAccessor").isAndroidDevice(e);
    }
    var g = { ALL: "All", SPECIFIC: "Specific" };
    function h(e) {
      var t = Array.isArray(e) ? e[0] : e;
      if (r("isFalsey")(t)) return { os: null, version: null };
      var n = t.match(u);
      return n && n.length > 2
        ? { os: n[1], version: n[2] }
        : { os: t, version: null };
    }
    function y(e) {
      var t = !!(
          e.site_category &&
          e.site_category[0] ===
            o("ads-mobile-operating-systems").operatingSystems
              .FEATURE_DEPRECATED
        ),
        n = !!(
          e.user_device &&
          e.user_device[0] ===
            o("ads-mobile-operating-systems").operatingSystems.FEATURE
        );
      return t || n;
    }
    ((l.userOSRegex = u),
      (l.ANDROID_DEVICES = c),
      (l.IOS_DEVICES = m),
      (l.isIosDevice = _),
      (l.isAndroidDevice = f),
      (l.deviceAll = g),
      (l.splitOSVersion = h),
      (l.isTargetingFeaturePhones = y),
      (l.operatingSystems = o(
        "ads-mobile-operating-systems",
      ).operatingSystems));
  },
  226,
);
