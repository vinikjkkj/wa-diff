__d(
  "WAWebCtwaUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCtwaAdVariantType",
    "WAWebWamEnumCtwaChatCreationMode",
    "WAWebWamEnumCtwaUserJourneyOperationType",
    "WAWebWamEnumTrustBannerAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CtwaUserJourney: [
            3466,
            {
              adId: [1, e.TYPES.STRING],
              businessJid: [2, e.TYPES.STRING],
              ctwaAdVariant: [
                14,
                o("WAWebWamEnumCtwaAdVariantType").CTWA_AD_VARIANT_TYPE,
              ],
              ctwaChatCreationMode: [
                6,
                o("WAWebWamEnumCtwaChatCreationMode").CTWA_CHAT_CREATION_MODE,
              ],
              ctwaEventReason: [15, e.TYPES.STRING],
              ctwaUserJourneyMetadata: [12, e.TYPES.STRING],
              ctwaUserJourneyOperation: [
                3,
                o("WAWebWamEnumCtwaUserJourneyOperationType")
                  .CTWA_USER_JOURNEY_OPERATION_TYPE,
              ],
              elapsedTimeInMs: [13, e.TYPES.INTEGER],
              featureEnabled: [9, e.TYPES.STRING],
              icebreakersShown: [4, e.TYPES.BOOLEAN],
              sequenceNumber: [5, e.TYPES.INTEGER],
              threadCreationDate: [10, e.TYPES.STRING],
              threadEntryCount: [16, e.TYPES.INTEGER],
              threadIdHmac: [11, e.TYPES.STRING],
              trustBannerAction: [
                7,
                o("WAWebWamEnumTrustBannerAction").TRUST_BANNER_ACTION,
              ],
              trustBannerType: [8, e.TYPES.STRING],
              usyncMode: [17, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { CtwaUserJourney: [] },
      );
    l.CtwaUserJourneyWamEvent = s;
  },
  98,
);
