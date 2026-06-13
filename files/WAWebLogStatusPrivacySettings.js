__d(
  "WAWebLogStatusPrivacySettings",
  [
    "WAWebStatusPrivacySettingsWamEvent",
    "WAWebUserPrefsStatusType",
    "WAWebWamEnumSetting",
    "WAWebWamEnumStatusPrivacySettingsAction",
    "WAWebWamEnumStatusPrivacySettingsView",
    "WAWebWamEnumStatusPrivacySurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      new (o(
        "WAWebStatusPrivacySettingsWamEvent",
      ).StatusPrivacySettingsWamEvent)({
        statusPrivacySettingsAction: e.statusPrivacySettingsAction,
        statusPrivacySettingsView: o("WAWebWamEnumStatusPrivacySettingsView")
          .STATUS_PRIVACY_SETTINGS_VIEW.SETTINGS_BOTTOM_SHEET,
        statusPrivacySurface: e.statusPrivacySurface,
        setting: e.setting != null ? s(e.setting) : void 0,
        previousSetting:
          e.previousSetting != null ? s(e.previousSetting) : void 0,
        selectedListSize: e.selectedListSize,
        allowResharing: e.allowResharing,
      }).commit();
    }
    function s(e) {
      return e ===
        o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
        ? o("WAWebWamEnumSetting").SETTING.ALL_CONTACTS
        : e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList
          ? o("WAWebWamEnumSetting").SETTING.ALL_CONTACTS_EXCEPT
          : e ===
              o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
            ? o("WAWebWamEnumSetting").SETTING.ONLY_SHARE_WITH_CONTACTS
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.STATUS_PRIVACY_SETTINGS_ACTION = o(
      "WAWebWamEnumStatusPrivacySettingsAction",
    ).STATUS_PRIVACY_SETTINGS_ACTION),
      (l.STATUS_PRIVACY_SURFACE = o(
        "WAWebWamEnumStatusPrivacySurface",
      ).STATUS_PRIVACY_SURFACE),
      (l.logStatusPrivacySettingsEvent = e));
  },
  98,
);
