__d(
  "WAWebCompanionsContactEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAddContactActionType",
    "WAWebWamEnumCompanionAddContactEventType",
    "WAWebWamEnumCompanionAddContactSource",
    "WAWebWamEnumCompanionContactSaveResult",
    "WAWebWamEnumCompanionWhatsappContactStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CompanionsContactEvent: [
            5718,
            {
              companionAddContactActionType: [
                1,
                o("WAWebWamEnumAddContactActionType").ADD_CONTACT_ACTION_TYPE,
              ],
              companionAddContactEventType: [
                2,
                o("WAWebWamEnumCompanionAddContactEventType")
                  .COMPANION_ADD_CONTACT_EVENT_TYPE,
              ],
              companionAddContactSessionId: [3, e.TYPES.STRING],
              companionAddContactSource: [
                4,
                o("WAWebWamEnumCompanionAddContactSource")
                  .COMPANION_ADD_CONTACT_SOURCE,
              ],
              companionContactSaveResult: [
                5,
                o("WAWebWamEnumCompanionContactSaveResult")
                  .COMPANION_CONTACT_SAVE_RESULT,
              ],
              companionFnameEdited: [6, e.TYPES.BOOLEAN],
              companionHasPhoneNumber: [11, e.TYPES.BOOLEAN],
              companionHasUsername: [12, e.TYPES.BOOLEAN],
              companionIsContactSyncToOs: [7, e.TYPES.BOOLEAN],
              companionLnameEdited: [8, e.TYPES.BOOLEAN],
              companionPhNumberAutofilled: [13, e.TYPES.BOOLEAN],
              companionPhNumberEdited: [9, e.TYPES.BOOLEAN],
              companionSyncSettingChanged: [10, e.TYPES.BOOLEAN],
              companionUsernameAutofilled: [14, e.TYPES.BOOLEAN],
              companionUsernameEdited: [15, e.TYPES.BOOLEAN],
              companionWhatsappContactStatus: [
                16,
                o("WAWebWamEnumCompanionWhatsappContactStatus")
                  .COMPANION_WHATSAPP_CONTACT_STATUS,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CompanionsContactEvent: [] },
      );
    l.CompanionsContactEventWamEvent = s;
  },
  98,
);
