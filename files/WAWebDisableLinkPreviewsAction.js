__d(
  "WAWebDisableLinkPreviewsAction",
  ["WAWebDisableLinkPreviewsSync", "WAWebUserPrefsGeneral"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("WAWebUserPrefsGeneral").setUserPrivacySettings(
        babelHelpers.extends(
          {},
          o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
          { disableLinkPreviews: e },
        ),
      );
    }
    function s(t) {
      return (e(t), r("WAWebDisableLinkPreviewsSync").sendMutation(t));
    }
    ((l.setDisableLinkPreviewsToUserPrefs = e), (l.setDisableLinkPreviews = s));
  },
  98,
);
