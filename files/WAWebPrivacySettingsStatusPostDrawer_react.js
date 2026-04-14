__d(
  "WAWebPrivacySettingsStatusPostDrawer.react",
  [
    "WAWebModalManager",
    "WAWebStatusPrivacySettingOptionsDrawer.react",
    "WAWebStatusPrivacySettingUtils",
    "WAWebStatusSelectContactsModal.react",
    "WAWebUserPrefsStatusType",
    "react",
    "useWAWebStatusPrivacySettingConfig",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n,
        a = e.onClose,
        i = e.ref,
        l = o(
          "useWAWebStatusPrivacySettingConfig",
        ).useWAWebStatusPrivacySettingConfig(),
        u = l.setStatusPostingPrivacyConfig,
        c = l.statusPostingPrivacyConfig,
        d = (t = c == null ? void 0 : c.allowList) != null ? t : [],
        m = (n = c == null ? void 0 : c.denyList) != null ? n : [];
      return s.jsx(r("WAWebStatusPrivacySettingOptionsDrawer.react"), {
        ref: i,
        statusPostingPrivacyConfig: c,
        onContactClick: function () {
          o("WAWebStatusPrivacySettingUtils").handleContactClick(u, d, m);
        },
        onDenyListClick: function () {
          o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebStatusSelectContactsModal.react")
                .SelectStatusContactsModal,
              {
                list: m,
                setting: o("WAWebStatusSelectContactsModal.react")
                  .StatusPrivacySettingListType.DenyList,
                onConfirm: function (t) {
                  u({
                    setting: o("WAWebUserPrefsStatusType")
                      .StatusPrivacySettingType.DenyList,
                    allowList: d,
                    denyList: t,
                  });
                },
              },
            ),
          );
        },
        onAllowListClick: function () {
          o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebStatusSelectContactsModal.react")
                .SelectStatusContactsModal,
              {
                list: d,
                setting: o("WAWebStatusSelectContactsModal.react")
                  .StatusPrivacySettingListType.AllowList,
                onConfirm: function (t) {
                  u({
                    setting: o("WAWebUserPrefsStatusType")
                      .StatusPrivacySettingType.AllowList,
                    allowList: t,
                    denyList: m,
                  });
                },
              },
            ),
          );
        },
        onBack: a,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
