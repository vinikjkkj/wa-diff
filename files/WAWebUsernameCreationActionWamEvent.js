__d(
  "WAWebUsernameCreationActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationEntrypoint",
    "WAWebWamEnumUsernameCreationErrorMessage",
    "WAWebWamEnumUsernameCreationFlowType",
    "WAWebWamEnumUsernameLinkType",
    "WAWebWamEnumUsernameSource",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          UsernameCreationAction: [
            5224,
            {
              eligibleToLink: [14, e.TYPES.BOOLEAN],
              linkedAccountsFb: [10, e.TYPES.INTEGER],
              linkedAccountsIg: [11, e.TYPES.INTEGER],
              userJourneyEventMs: [17, e.TYPES.INTEGER],
              usernameCreationActionName: [
                2,
                o("WAWebWamEnumUsernameCreationActionName")
                  .USERNAME_CREATION_ACTION_NAME,
              ],
              usernameCreationCurrentScreen: [
                3,
                o("WAWebWamEnumUsernameCreationCurrentScreen")
                  .USERNAME_CREATION_CURRENT_SCREEN,
              ],
              usernameCreationDeepLinkCampaign: [15, e.TYPES.STRING],
              usernameCreationDeepLinkChannel: [16, e.TYPES.STRING],
              usernameCreationEntrypoint: [
                4,
                o("WAWebWamEnumUsernameCreationEntrypoint")
                  .USERNAME_CREATION_ENTRYPOINT,
              ],
              usernameCreationErrorCd: [7, e.TYPES.INTEGER],
              usernameCreationErrorMessage: [
                13,
                o("WAWebWamEnumUsernameCreationErrorMessage")
                  .USERNAME_CREATION_ERROR_MESSAGE,
              ],
              usernameCreationFlowType: [
                9,
                o("WAWebWamEnumUsernameCreationFlowType")
                  .USERNAME_CREATION_FLOW_TYPE,
              ],
              usernameCreationUsernameSessionId: [6, e.TYPES.STRING],
              usernameLinkType: [
                12,
                o("WAWebWamEnumUsernameLinkType").USERNAME_LINK_TYPE,
              ],
              usernameSource: [
                8,
                o("WAWebWamEnumUsernameSource").USERNAME_SOURCE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { UsernameCreationAction: [] },
      );
    l.UsernameCreationActionWamEvent = s;
  },
  98,
);
