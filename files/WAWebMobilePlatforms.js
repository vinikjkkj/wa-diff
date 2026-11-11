__d(
  "WAWebMobilePlatforms",
  [
    "WALogger",
    "WAWebEnvironment",
    "WAWebInternalAccount",
    "WAWebMobilePlatformPersistence",
    "asyncToGeneratorRuntime",
    "cr:16728",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        ANDROID: "android",
        IPAD: "ipad",
        IPHONE: "iphone",
        SMBA: "smba",
        SMBI: "smbi",
      },
      c;
    function d() {
      return r("WAWebEnvironment").isGuest ? null : c;
    }
    function m() {
      var t = d();
      return (
        t == null &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to get primary platform",
              ])),
          ),
        t
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t === void 0 && (t = !0),
            o("WAWebInternalAccount").setInternalAccount(
              (n("cr:16728") == null
                ? void 0
                : n("cr:16728").isInternalPlatform(e)) === !0,
            ),
            t &&
              (yield o("WAWebMobilePlatformPersistence").setLastMobilePlatform(
                e,
              )),
            (c = e),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Successfully writes platform to UserPrefs, platform: ",
                  "",
                ])),
              e,
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return (
        d() != null &&
        !g() &&
        !o("WAWebInternalAccount").isInternalAccount() &&
        (h() || y())
      );
    }
    function g() {
      return c === u.SMBA || c === u.SMBI;
    }
    function h() {
      return (
        c === u.ANDROID ||
        c === u.SMBA ||
        (n("cr:16728") == null
          ? void 0
          : n("cr:16728").isAndroidPlatform(c)) === !0
      );
    }
    function y() {
      return (
        c === u.IPHONE ||
        c === u.IPAD ||
        c === u.SMBI ||
        (n("cr:16728") == null ? void 0 : n("cr:16728").isIOSPlatform(c)) === !0
      );
    }
    ((l.PLATFORMS = u),
      (l.getMaybeMobilePlatform = d),
      (l.getMobilePlatform = m),
      (l.setMobilePlatform = p),
      (l.isConsumerPrimary = f),
      (l.isSMB = g),
      (l.isAndroidPrimary = h),
      (l.isIOSPrimary = y));
  },
  98,
);
