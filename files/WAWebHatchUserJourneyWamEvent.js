__d(
  "WAWebHatchUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumConnectorPermissionFlow",
    "WAWebWamEnumConnectorType",
    "WAWebWamEnumFeatureEntryPoint",
    "WAWebWamEnumHatchActionType",
    "WAWebWamEnumHitlLegalLinkType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          HatchUserJourney: [
            7806,
            {
              aiSessionId: [1, e.TYPES.STRING],
              connectorId: [12, e.TYPES.STRING],
              connectorPermissionDecisionType: [13, e.TYPES.STRING],
              connectorPermissionFlow: [
                14,
                o("WAWebWamEnumConnectorPermissionFlow")
                  .CONNECTOR_PERMISSION_FLOW,
              ],
              connectorPermissionType: [15, e.TYPES.STRING],
              connectorType: [
                16,
                o("WAWebWamEnumConnectorType").CONNECTOR_TYPE,
              ],
              dedupKey: [11, e.TYPES.INTEGER],
              featureEntryPoint: [
                17,
                o("WAWebWamEnumFeatureEntryPoint").FEATURE_ENTRY_POINT,
              ],
              hatchActionType: [
                3,
                o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE,
              ],
              hatchSubSurface: [18, o("WAWebWamEnumTsSurface").TS_SURFACE],
              hatchSurface: [19, o("WAWebWamEnumTsSurface").TS_SURFACE],
              hatchUserJourneyMetadata: [20, e.TYPES.STRING],
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
