__d(
  "WAWebHandlePrivacySettingsNotification",
  ["WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      o("WAWebBackendApi").frontendFireAndForget(
        "smbDataSharingSettingUpdate",
        { smbDataSharingSettingValue: e, smbDataSharingSettingVersion: t },
      );
    }
    l.handleSmbDataSharingSettingNotification = e;
  },
  98,
);
