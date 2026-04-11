__d(
  "WAWebSignupGating",
  ["WAWebABProps", "WAWebBizGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("wa_web_agm_signup_enabled") &&
        o("WAWebBizGatingUtils").getFmxAgmEnabled()
      );
    }
    l.isSignupAGMEnabled = e;
  },
  98,
);
