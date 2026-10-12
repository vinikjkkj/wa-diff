__d(
  "WAWebVoipRelayAllCallsAction",
  [
    "WAWebUserPrefsGeneral",
    "WAWebVoipRelayAllCallsSettingSync",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          (o("WAWebUserPrefsGeneral").setUserPrivacySettings(
            babelHelpers.extends(
              {},
              o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
              { disallowAllP2p: e },
            ),
          ),
            yield (t = o(
              "WAWebVoipStackInterface",
            ).getCachedVoipStackInterface()) == null
              ? void 0
              : t.setHideMyIp(e));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (yield e(t),
            yield r("WAWebVoipRelayAllCallsSettingSync").sendMutation(t));
        })),
        c.apply(this, arguments)
      );
    }
    ((l.setRelayAllCallsToUserPrefs = e), (l.setRelayAllCalls = u));
  },
  98,
);
