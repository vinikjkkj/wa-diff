__d(
  "WAWebSignupGating",
  ["WAWebABProps", "WAWebBizGatingUtils", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("wa_web_agm_signup_enabled") &&
        o("WAWebBizGatingUtils").getFmxAgmEnabled()
      );
    }
    function s() {
      return r("justknobx")._("4714");
    }
    ((l.isSignupAGMEnabled = e), (l.isSignupAGMCleanupEnabled = s));
  },
  98,
);
