__d(
  "WAWebConsumerBizInteractionJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumConsumerBizActionTargetEnum",
    "WAWebWamEnumConsumerBizActionTypeEnum",
    "WAWebWamEnumConsumerBizEntryPointEnum",
    "WAWebWamEnumConsumerBizFeatureEnum",
    "WAWebWamEnumConsumerBizSurfaceEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ConsumerBizInteractionJourney: [
            7760,
            {
              businessJid: [9, e.TYPES.STRING],
              consumerBizActionTarget: [
                1,
                o("WAWebWamEnumConsumerBizActionTargetEnum")
                  .CONSUMER_BIZ_ACTION_TARGET_ENUM,
              ],
              consumerBizActionType: [
                2,
                o("WAWebWamEnumConsumerBizActionTypeEnum")
                  .CONSUMER_BIZ_ACTION_TYPE_ENUM,
              ],
              consumerBizEntryPoint: [
                3,
                o("WAWebWamEnumConsumerBizEntryPointEnum")
                  .CONSUMER_BIZ_ENTRY_POINT_ENUM,
              ],
              consumerBizExtraAttributes: [4, e.TYPES.STRING],
              consumerBizFeature: [
                5,
                o("WAWebWamEnumConsumerBizFeatureEnum")
                  .CONSUMER_BIZ_FEATURE_ENUM,
              ],
              consumerBizSeqId: [6, e.TYPES.INTEGER],
              consumerBizSessionId: [7, e.TYPES.STRING],
              consumerBizSurface: [
                8,
                o("WAWebWamEnumConsumerBizSurfaceEnum")
                  .CONSUMER_BIZ_SURFACE_ENUM,
              ],
              sensitiveExtraAttributes: [10, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { ConsumerBizInteractionJourney: [] },
      );
    l.ConsumerBizInteractionJourneyWamEvent = s;
  },
  98,
);
