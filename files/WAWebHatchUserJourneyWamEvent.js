__d(
  "WAWebHatchUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumHatchActionType",
    "WAWebWamEnumHitlLegalLinkType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          HatchUserJourney: [
            7806,
            {
              aiSessionId: [1, e.TYPES.STRING],
              hatchActionType: [
                3,
                o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE,
              ],
              hitlIsMulti: [6, e.TYPES.BOOLEAN],
              hitlLegalLink: [
                7,
                o("WAWebWamEnumHitlLegalLinkType").HITL_LEGAL_LINK_TYPE,
              ],
              hitlTypes: [8, e.TYPES.STRING],
              rawBotEntryPoint: [5, e.TYPES.STRING],
              rawHitlAlwaysScope: [9, e.TYPES.STRING],
              rawHitlDecisionKind: [10, e.TYPES.STRING],
              unifiedSessionId: [4, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { HatchUserJourney: [] },
      );
    l.HatchUserJourneyWamEvent = s;
  },
  98,
);
