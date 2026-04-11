__d(
  "WAWebStatusPrivacySettingUtils",
  [
    "fbt",
    "WALogger",
    "WAWebStatusPrivacySettingAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsStatusType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          try {
            (yield r(
              "WAWebStatusPrivacySettingAction",
            ).setStatusPrivacyContact(),
              t({
                setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                  .Contact,
                allowList: n,
                denyList: a,
              }));
          } catch (t) {
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "error: ",
                    "",
                  ])),
                String(r("getErrorSafe")(t).stack),
              )
              .sendLogs(
                "PrivacySettingsStatusPostDrawer:failed to set privacy settings",
              ),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Failed to update privacy settings. Please try again.",
                  ),
                }),
              ));
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.handleContactClick = d;
  },
  226,
);
