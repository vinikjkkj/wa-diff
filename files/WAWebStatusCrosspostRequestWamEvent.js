__d(
  "WAWebStatusCrosspostRequestWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCrosspostDestinationType",
    "WAWebWamEnumCrosspostOriginType",
    "WAWebWamEnumCrosspostResultType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPrivacySettingsValueType",
    "WAWebWamEnumStatusCrosspostShareTypeEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusCrosspostRequest: [
            4994,
            {
              cacSessionId: [1, e.TYPES.STRING],
              crosspostDestination: [
                2,
                o("WAWebWamEnumCrosspostDestinationType")
                  .CROSSPOST_DESTINATION_TYPE,
              ],
              crosspostErrorType: [3, e.TYPES.STRING],
              crosspostOrigin: [
                4,
                o("WAWebWamEnumCrosspostOriginType").CROSSPOST_ORIGIN_TYPE,
              ],
              defaultStatusPrivacySettings: [
                5,
                o("WAWebWamEnumPrivacySettingsValueType")
                  .PRIVACY_SETTINGS_VALUE_TYPE,
              ],
              isAutoCrosspostEnabledInSettings: [6, e.TYPES.BOOLEAN],
              isAutoCrossposted: [7, e.TYPES.BOOLEAN],
              statusCrossPostPerPostStatusPrivacySetting: [
                8,
                o("WAWebWamEnumPrivacySettingsValueType")
                  .PRIVACY_SETTINGS_VALUE_TYPE,
              ],
              statusCrosspostEntryPoint: [12, e.TYPES.STRING],
              statusCrosspostMediaType: [
                9,
                o("WAWebWamEnumMediaType").MEDIA_TYPE,
              ],
              statusCrosspostResult: [
                10,
                o("WAWebWamEnumCrosspostResultType").CROSSPOST_RESULT_TYPE,
              ],
              statusCrosspostShareType: [
                13,
                o("WAWebWamEnumStatusCrosspostShareTypeEnum")
                  .STATUS_CROSSPOST_SHARE_TYPE_ENUM,
              ],
              statusId: [11, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusCrosspostRequest: [] },
      );
    l.StatusCrosspostRequestWamEvent = s;
  },
  98,
);
