__d(
  "WAWebStatusPrivacySettingAction",
  [
    "WAWebStatusSetAndSyncPrivacy",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      return r("WAWebUserPrefsStatus").getStatusPrivacySettingConfig();
    }
    async function s(e) {
      return o("WAWebStatusSetAndSyncPrivacy").setAndSyncStatusPrivacy({
        setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
          .AllowList,
        list: e,
      });
    }
    async function u(e) {
      return o("WAWebStatusSetAndSyncPrivacy").setAndSyncStatusPrivacy({
        setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
          .DenyList,
        list: e,
      });
    }
    async function c() {
      return o("WAWebStatusSetAndSyncPrivacy").setAndSyncStatusPrivacy({
        setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact,
        list: [],
      });
    }
    var d = {
      getStatusPrivacySetting: e,
      setStatusPrivacyAllowList: s,
      setStatusPrivacyDenyList: u,
      setStatusPrivacyContact: c,
    };
    l.default = d;
  },
  98,
);
