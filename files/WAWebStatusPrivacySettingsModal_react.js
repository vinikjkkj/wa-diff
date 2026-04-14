__d(
  "WAWebStatusPrivacySettingsModal.react",
  [
    "fbt",
    "WAWebModal.react",
    "WAWebStatusPrivacySettingOptionsDrawer.react",
    "WAWebUserPrefsStatusType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClose,
        n = e.onSelectStatusPrivacyOption,
        a = e.ref,
        i = e.statusPostingPrivacyConfig;
      return u.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Tower,
        ref: a,
        ariaLabel: s._(/*BTDS*/ "Status privacy"),
        children: u.jsx(r("WAWebStatusPrivacySettingOptionsDrawer.react"), {
          statusPostingPrivacyConfig: i,
          onContactClick: function () {
            n(o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact);
          },
          onDenyListClick: function () {
            n(o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList);
          },
          onAllowListClick: function () {
            n(o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList);
          },
          isModal: !0,
          onClose: t,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
