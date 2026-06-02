__d(
  "WAWebVoipRelayAllCallsAction",
  [
    "WAWebUserPrefsGeneral",
    "WAWebVoipRelayAllCallsSettingSync",
    "WAWebVoipStackInterface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      o("WAWebUserPrefsGeneral").setUserPrivacySettings(
        babelHelpers.extends(
          {},
          o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
          { disallowAllP2p: e },
        ),
      );
      var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
      await (t == null ? void 0 : t.setHideMyIp(e));
    }
    async function s(t) {
      (await e(t),
        await r("WAWebVoipRelayAllCallsSettingSync").sendMutation(t));
    }
    ((l.setRelayAllCallsToUserPrefs = e), (l.setRelayAllCalls = s));
  },
  98,
);
