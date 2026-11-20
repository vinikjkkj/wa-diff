__d(
  "WAWebUpdateAllPrivacySettings",
  ["WAWebAccountSyncJob", "WAWebPhoneNumberSharingSettingsRefresh"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o(
          "WAWebPhoneNumberSharingSettingsRefresh",
        ).schedulePhoneNumberSharingSettingsRefresh(),
        o("WAWebAccountSyncJob").updatePrivacySettings()
      );
    }
    function s(e) {
      return (
        o(
          "WAWebPhoneNumberSharingSettingsRefresh",
        ).schedulePhoneNumberSharingSettingsRefresh(e),
        o("WAWebAccountSyncJob").forceUpdatePrivacySettings()
      );
    }
    ((l.updateAllPrivacySettings = e), (l.forceUpdateAllPrivacySettings = s));
  },
  98,
);
