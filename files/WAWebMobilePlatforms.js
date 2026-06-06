__d(
  "WAWebMobilePlatforms",
  ["WALogger", "WAWebEnvironment", "WAWebMobilePlatformPersistence"],
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
    async function m(e, t) {
      (t === void 0 && (t = !0),
        t &&
          (await o("WAWebMobilePlatformPersistence").setLastMobilePlatform(e)),
        (c = e),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Successfully writes platform to UserPrefs, platform: ",
              "",
            ])),
          e,
        ));
    }
    function p() {
      return c === u.SMBA || c === u.SMBI;
    }
    function _() {
      return c === u.ANDROID || c === u.SMBA;
    }
    function f() {
      return c === u.IPHONE || c === u.IPAD || c === u.SMBI;
    }
    ((l.PLATFORMS = u),
      (l.getMobilePlatform = d),
      (l.setMobilePlatform = m),
      (l.isSMB = p),
      (l.isAndroidPrimary = _),
      (l.isIOSPrimary = f));
  },
  98,
);
