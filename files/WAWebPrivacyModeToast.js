__d(
  "WAWebPrivacyModeToast",
  [
    "WAWebPrivacyModeSettingsFBT",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 3e3;
    function c(e, t) {
      var n = e
        ? o("WAWebPrivacyModeSettingsFBT").privacyModeToastEnabled()
        : o("WAWebPrivacyModeSettingsFBT").privacyModeToastDisabled();
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, {
          msg: n,
          duration: u,
          action:
            t != null
              ? {
                  actionText: o(
                    "WAWebPrivacyModeSettingsFBT",
                  ).privacyModeToastUndo(),
                  onAction: t,
                }
              : void 0,
        }),
      );
    }
    l.showPrivacyModeToast = c;
  },
  98,
);
