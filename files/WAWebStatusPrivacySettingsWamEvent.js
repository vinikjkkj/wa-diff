__d(
  "WAWebStatusPrivacySettingsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumContactSuggestion",
    "WAWebWamEnumSetting",
    "WAWebWamEnumStatusPrivacySettingsAction",
    "WAWebWamEnumStatusPrivacySettingsView",
    "WAWebWamEnumStatusPrivacySurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusPrivacySettings: [
            3200,
            {
              allowForwarding: [10, e.TYPES.BOOLEAN],
              allowResharing: [9, e.TYPES.BOOLEAN],
              contactSuggestion: [
                12,
                o("WAWebWamEnumContactSuggestion").CONTACT_SUGGESTION,
              ],
              contactSuggestionsCount: [14, e.TYPES.INTEGER],
              lastSuccessfulRankingUpdate: [15, e.TYPES.INTEGER],
              previousSetting: [2, o("WAWebWamEnumSetting").SETTING],
              selectedContactsSize: [7, e.TYPES.INTEGER],
              selectedGroupsSize: [8, e.TYPES.INTEGER],
              selectedListSize: [3, e.TYPES.INTEGER],
              selectionPillPos: [13, e.TYPES.INTEGER],
              setting: [1, o("WAWebWamEnumSetting").SETTING],
              statusPostingSessionId: [6, e.TYPES.INTEGER],
              statusPrivacyLists: [16, e.TYPES.STRING],
              statusPrivacySettingsAction: [
                5,
                o("WAWebWamEnumStatusPrivacySettingsAction")
                  .STATUS_PRIVACY_SETTINGS_ACTION,
              ],
              statusPrivacySettingsView: [
                11,
                o("WAWebWamEnumStatusPrivacySettingsView")
                  .STATUS_PRIVACY_SETTINGS_VIEW,
              ],
              statusPrivacySurface: [
                4,
                o("WAWebWamEnumStatusPrivacySurface").STATUS_PRIVACY_SURFACE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusPrivacySettings: [] },
      );
    l.StatusPrivacySettingsWamEvent = s;
  },
  98,
);
