__d(
  "WAWebWWAIGating",
  [
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebMobilePlatforms",
    "WAWebWWAILogging",
    "WAWebWWAITransportRegistry",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      if (o("WAWebMobilePlatforms").isSMB()) return !1;
      try {
        if (o("WAWebABProps").getABPropConfigValue("ai_rewrite_enabled") !== !0)
          return !1;
      } catch (e) {
        return !1;
      }
      try {
        var e = o("WAWebABProps").getABPropConfigValue(
          "ai_rewrite_supported_languages",
        );
        if (
          typeof e == "string" &&
          e.trim().length > 0 &&
          !o("WAWebBotBaseGating").isDeviceLanguageInLanguages(e)
        )
          return !1;
      } catch (e) {}
      return o("WAWebWWAITransportRegistry").isTransportAvailable()
        ? !0
        : (o("WAWebWWAILogging").logTransportMissingOnce(), !1);
    }
    function s() {
      try {
        return (
          e() &&
          o("WAWebABProps").getABPropConfigValue(
            "ai_contextual_writing_help_enabled",
          ) === !0
        );
      } catch (e) {
        return !1;
      }
    }
    function u(t) {
      return t === "bot" || t === "newsletter" ? !1 : e();
    }
    ((l.isWWAIEnabled = e),
      (l.isContextualWritingHelpEnabled = s),
      (l.isWWAIEnabledForChat = u));
  },
  98,
);
