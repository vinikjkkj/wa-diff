__d(
  "WAWebMobilePlatforms",
  [
    "WALogger",
    "WAWebEnvironment",
    "WAWebMobilePlatformPersistence",
    "asyncToGeneratorRuntime",
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
      return r("WAWebEnvironment").isGuest
        ? null
        : (c == null &&
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to get primary platform",
                ])),
            ),
          c);
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t === void 0 && (t = !0),
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
        p.apply(this, arguments)
      );
    }
    function _() {
      return c === u.SMBA || c === u.SMBI;
    }
    ((l.PLATFORMS = u),
      (l.getMobilePlatform = d),
      (l.setMobilePlatform = m),
      (l.isSMB = _));
  },
  98,
);
