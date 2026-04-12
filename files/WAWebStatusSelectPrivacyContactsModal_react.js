__d(
  "WAWebStatusSelectPrivacyContactsModal.react",
  [
    "WAWebModalManager",
    "WAWebStatusSelectContactsModal.react",
    "WAWebUserPrefsStatusType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n,
        r = e.onBack,
        a = e.setStatusPostingPrivacyConfig,
        i = e.statusPostingPrivacyConfig,
        l = e.updatedSettings,
        u = (t = i == null ? void 0 : i.allowList) != null ? t : [],
        c = (n = i == null ? void 0 : i.denyList) != null ? n : [],
        d =
          l === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
            ? u
            : c,
        m =
          l === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
            ? o("WAWebStatusSelectContactsModal.react")
                .StatusPrivacySettingListType.AllowList
            : o("WAWebStatusSelectContactsModal.react")
                .StatusPrivacySettingListType.DenyList,
        p = function () {
          o("WAWebModalManager").ModalManager.existsSupportModal(function (e) {
            e
              ? o("WAWebModalManager").ModalManager.closeSupportModal()
              : o("WAWebModalManager").ModalManager.close();
          });
        };
      return s.jsx(
        o("WAWebStatusSelectContactsModal.react").SelectStatusContactsModal,
        {
          list: d,
          setting: m,
          onBack: r,
          onDismiss: p,
          onConfirm: function (t) {
            l ===
            o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
              ? a({
                  setting: o("WAWebUserPrefsStatusType")
                    .StatusPrivacySettingType.AllowList,
                  allowList: t,
                  denyList: c,
                })
              : a({
                  setting: o("WAWebUserPrefsStatusType")
                    .StatusPrivacySettingType.DenyList,
                  allowList: u,
                  denyList: t,
                });
          },
        },
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
