__d(
  "WAWebDesktopUpsellUtils",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebMiscBrowserUtils",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["WINDOWS", "MACOS"]),
      s,
      u = n("$InternalEnum").Mirrored(["Control", "Variant2", "Variant3"]),
      c = function () {
        var e = o("WAWebABProps").getABPropConfigValue(
          "wa_web_growth_empty_state_upsell_variant_m1",
        );
        return e === 2 || e === 3;
      };
    function d() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_growth_empty_state_upsell_variant_m1",
      );
      return e === 2 ? u.Variant2 : e === 3 ? u.Variant3 : u.Control;
    }
    function m() {
      return (s !== void 0 || (s = p()), s);
    }
    function p() {
      var t = r("WAWebMiscBrowserUtils").info();
      switch (t.os.toLowerCase()) {
        case "windows":
          return e.WINDOWS;
        case "mac os":
          return e.MACOS;
      }
      return null;
    }
    var _ = "8.0.0",
      f = 10,
      g = "12.0.0",
      h = null,
      y = null;
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t;
          if (r("WAWebEnvironment").isWindows) return !1;
          if (h != null) return h;
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
            h = R(_, n.platformVersion) <= 0;
          else {
            var o = r("WAWebMiscBrowserUtils").info();
            h = o.os === "Windows" && parseInt(o.version, 10) >= f;
          }
          return h;
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t;
          if (r("WAWebEnvironment").isWindows) return !1;
          if (o("WAWebUA").UA.isSafari && r("justknobx")._("3037")) return !0;
          if (y != null) return y;
          var n = yield (e = self.navigator) == null ||
          (e = e.userAgentData) == null
            ? void 0
            : e.getHighEntropyValues(["platformVersion"]);
          return (
            (n == null ? void 0 : n.platformVersion) != null &&
              ((t = n.platform) == null ? void 0 : t.toLowerCase()) ===
                "macos" &&
              n.platformVersion != null &&
              (y = R(g, n.platformVersion) <= 0),
            y != null ? y : !1
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return e.localeCompare(t, void 0, { numeric: !0, sensitivity: "base" });
    }
    ((l.UserDesktopOs = e),
      (l.EmptyStateUpsellBannerVariantEnum = u),
      (l.isEmptyStateUpsellBannerVariantEnabled = c),
      (l.getEmptyStateUpsellBannerVariant = d),
      (l.getUserDesktopOs = m),
      (l.isWebUserOnSupportedWindowsOSForUWPAsync = C),
      (l.isWebUserOnSupportedMacOSForCatalystAsync = v));
  },
  98,
);
