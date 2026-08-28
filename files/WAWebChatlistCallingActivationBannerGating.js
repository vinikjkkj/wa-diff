__d(
  "WAWebChatlistCallingActivationBannerGating",
  [
    "WAWebMobilePlatforms",
    "WAWebNux",
    "WAWebUserPrefsNuxPreferences",
    "WAWebVoipGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebVoipGatingUtils").isChatlistCallingBannerEnabled()
        ? !1
        : !o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync(
            o("WAWebNux").NuxSyncKey.WEB_CALLING_ACTIVATION_BANNER,
          );
    }
    l.shouldShowChatlistCallingActivationBanner = e;
  },
  98,
);
