__d(
  "WAWebStatusPrivacySettingAction",
  [
    "WAWebStatusSetAndSyncPrivacy",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("WAWebUserPrefsStatus").getStatusPrivacySettingConfig();
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebStatusSetAndSyncPrivacy").setAndSyncStatusPrivacy({
            setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
              .AllowList,
            list: e,
          });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebStatusSetAndSyncPrivacy").setAndSyncStatusPrivacy({
            setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
              .DenyList,
            list: e,
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebStatusSetAndSyncPrivacy").setAndSyncStatusPrivacy({
            setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
              .Contact,
            list: [],
          });
        })),
        _.apply(this, arguments)
      );
    }
    var f = {
      getStatusPrivacySetting: e,
      setStatusPrivacyAllowList: u,
      setStatusPrivacyDenyList: d,
      setStatusPrivacyContact: p,
    };
    l.default = f;
  },
  98,
);
