__d(
  "WAWebSignupGating",
  ["WAWebABProps", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_agm_signup_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "inapp_signup_received_card_enabled",
      );
    }
    function u() {
      return r("justknobx")._("4714");
    }
    ((l.isSignupAGMEnabled = e),
      (l.isReceivedSignupPromptEnabled = s),
      (l.isSignupAGMCleanupEnabled = u));
  },
  98,
);
