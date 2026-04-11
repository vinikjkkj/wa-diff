__d(
  "WAWebMmSignalSharingVerificationWithSignalDataEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMmDirectionFrom",
    "WAWebWamEnumOnePdSignalNotSharedReason",
    "WAWebWamEnumSignalCanceledReason",
    "WAWebWamEnumSignalMessageState",
    "WAWebWamEnumSignalMessageType",
    "WAWebWamEnumSignalOrigin",
    "WAWebWamEnumSignalSharingStatus",
    "WAWebWamEnumSignalSurface",
    "WAWebWamEnumSignalType",
    "WAWebWamEnumSpSignalNotSharedReason",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MmSignalSharingVerificationWithSignalDataEvent: [
            6856,
            {
              entSourceSubplatform: [1, e.TYPES.STRING],
              isCompanionDevice: [2, e.TYPES.BOOLEAN],
              isLatestConversionToken: [19, e.TYPES.BOOLEAN],
              isNetworkAvailable: [16, e.TYPES.BOOLEAN],
              isShimmingSignal: [17, e.TYPES.BOOLEAN],
              isUserDisclosed: [3, e.TYPES.BOOLEAN],
              isUserMatched: [4, e.TYPES.BOOLEAN],
              mmConversationDepth: [20, e.TYPES.INTEGER],
              mmConversationRepeat: [21, e.TYPES.INTEGER],
              mmDirectionFrom: [
                22,
                o("WAWebWamEnumMmDirectionFrom").MM_DIRECTION_FROM,
              ],
              mmSignalData: [5, e.TYPES.STRING],
              onePdSignalNotSharedReason: [
                6,
                o("WAWebWamEnumOnePdSignalNotSharedReason")
                  .ONE_PD_SIGNAL_NOT_SHARED_REASON,
              ],
              signalCanceledReason: [
                7,
                o("WAWebWamEnumSignalCanceledReason").SIGNAL_CANCELED_REASON,
              ],
              signalMessageState: [
                8,
                o("WAWebWamEnumSignalMessageState").SIGNAL_MESSAGE_STATE,
              ],
              signalMessageType: [
                9,
                o("WAWebWamEnumSignalMessageType").SIGNAL_MESSAGE_TYPE,
              ],
              signalOrigin: [10, o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN],
              signalSharingStatus: [
                11,
                o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS,
              ],
              signalSurface: [
                12,
                o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE,
              ],
              signalType: [13, o("WAWebWamEnumSignalType").SIGNAL_TYPE],
              signalTypeOrigin: [18, e.TYPES.STRING],
              spSignalNotSharedReason: [
                14,
                o("WAWebWamEnumSpSignalNotSharedReason")
                  .SP_SIGNAL_NOT_SHARED_REASON,
              ],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { MmSignalSharingVerificationWithSignalDataEvent: [] },
      );
    l.MmSignalSharingVerificationWithSignalDataEventWamEvent = s;
  },
  98,
);
