__d(
  "WAWebHandlePrivacySettingsNotification",
  ["WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "smbDataSharingSettingUpdate",
        { smbDataSharingSettingValue: e },
      );
    }
    l.handleSmbDataSharingSettingNotification = e;
  },
  98,
);
