__d(
  "WAWebDesktopUpsellUtils",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebBrowserInfo",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "isWAWebFeatureDetectionAndroidTablet",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["WINDOWS", "MACOS"]),
      s,
      u,
      c = n("$InternalEnum").Mirrored(["Control", "Variant2", "Variant3"]);
    function d() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_growth_empty_state_upsell_variant_m1",
      );
      return e === 2 || e === 3;
    }
    function m() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_growth_empty_state_upsell_variant_m1",
      );
      return e === 2 ? c.Variant2 : e === 3 ? c.Variant3 : c.Control;
    }
    function p() {
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        f() == null &&
        _() &&
        r("justknobx")._("6837")
      );
    }
    function _() {
      var e;
      return (
        u != null ||
          (u =
            ((e = self.navigator.userAgentData) == null
              ? void 0
              : e.platform) === "Android" ||
            o(
              "isWAWebFeatureDetectionAndroidTablet",
            ).isWAWebFeatureDetectionAndroidOS()),
        u
      );
    }
    function f() {
      return (s !== void 0 || (s = g()), s);
    }
    function g() {
      var t = r("WAWebBrowserInfo")();
      switch (t.os.toLowerCase()) {
        case "windows":
          return e.WINDOWS;
        case "mac os":
          return e.MACOS;
      }
      return null;
    }
    var h = "8.0.0",
      y = 10,
      C = "12.0.0",
      b = null,
      v = null;
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t;
          if (r("WAWebEnvironment").isWindows) return !1;
          if (b != null) return b;
          var n = yield (e = self.navigator) == null ||
          (e = e.userAgentData) == null
            ? void 0
            : e.getHighEntropyValues(["platformVersion"]);
          if (
            (n == null ? void 0 : n.platformVersion) != null &&
            ((t = n.platform) == null ? void 0 : t.toLowerCase()) ===
              "windows" &&
            n.platformVersion != null
          )
            b = k(h, n.platformVersion) <= 0;
          else {
            var o = r("WAWebBrowserInfo")();
            b = o.os === "Windows" && parseInt(o.version, 10) >= y;
          }
          return b;
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t;
          if (r("WAWebEnvironment").isWindows) return !1;
          if (o("WAWebUA").UA.isSafari) return !0;
          if (v != null) return v;
          var n = yield (e = self.navigator) == null ||
          (e = e.userAgentData) == null
            ? void 0
            : e.getHighEntropyValues(["platformVersion"]);
          return (
            (n == null ? void 0 : n.platformVersion) != null &&
              ((t = n.platform) == null ? void 0 : t.toLowerCase()) ===
                "macos" &&
              n.platformVersion != null &&
              (v = k(C, n.platformVersion) <= 0),
            v != null ? v : !1
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return e.localeCompare(t, void 0, { numeric: !0, sensitivity: "base" });
    }
    ((l.UserDesktopOs = e),
      (l.EmptyStateUpsellBannerVariantEnum = c),
      (l.isEmptyStateUpsellBannerVariantEnabled = d),
      (l.getEmptyStateUpsellBannerVariant = m),
      (l.isAndroidAppUpsellEnabled = p),
      (l.getUserDesktopOs = f),
      (l.isWebUserOnSupportedWindowsOSForUWPAsync = S),
      (l.isWebUserOnSupportedMacOSForCatalystAsync = L));
  },
  98,
);
