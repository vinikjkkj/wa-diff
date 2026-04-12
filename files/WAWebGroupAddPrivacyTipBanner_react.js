__d(
  "WAWebGroupAddPrivacyTipBanner.react",
  ["fbt", "WAWebPrivacyTipBanner.react", "WAWebSettingsConst", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onAction;
      return u.jsx(r("WAWebPrivacyTipBanner.react"), {
        text: s._(/*BTDS*/ "Control who can add you to groups."),
        actionText: s._(/*BTDS*/ "Review privacy settings"),
        settingStep:
          o("WAWebSettingsConst").SettingsSteps.PrivacyVisiblityEditGroupAdd,
        onAction: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
