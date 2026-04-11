__d(
  "WAWebMmSignalSharingVerificationEventWamEvent",
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
          MmSignalSharingVerificationEvent: [
            6554,
            {
              businessLidOrJid: [1, e.TYPES.STRING],
              collectionWindowId: [3, e.TYPES.STRING],
              deltaTimeReceived: [18, e.TYPES.INTEGER],
              entSourceSubplatform: [17, e.TYPES.STRING],
              isCompanionDevice: [16, e.TYPES.BOOLEAN],
              isIabRestore: [22, e.TYPES.BOOLEAN],
              isLatestConversionToken: [24, e.TYPES.BOOLEAN],
              isNetworkAvailable: [20, e.TYPES.BOOLEAN],
              isShimmingSignal: [21, e.TYPES.BOOLEAN],
              isUserDisclosed: [4, e.TYPES.BOOLEAN],
              mmConversationDepth: [25, e.TYPES.INTEGER],
              mmConversationRepeat: [26, e.TYPES.INTEGER],
              mmDirectionFrom: [
                27,
                o("WAWebWamEnumMmDirectionFrom").MM_DIRECTION_FROM,
              ],
              onePdSignalNotSharedReason: [
                5,
                o("WAWebWamEnumOnePdSignalNotSharedReason")
                  .ONE_PD_SIGNAL_NOT_SHARED_REASON,
              ],
              signalCanceledReason: [
                6,
                o("WAWebWamEnumSignalCanceledReason").SIGNAL_CANCELED_REASON,
              ],
              signalMessageState: [
                7,
                o("WAWebWamEnumSignalMessageState").SIGNAL_MESSAGE_STATE,
              ],
              signalMessageType: [
                8,
                o("WAWebWamEnumSignalMessageType").SIGNAL_MESSAGE_TYPE,
              ],
              signalOrigin: [9, o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN],
              signalSharingStatus: [
                10,
                o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS,
              ],
              signalSurface: [
                11,
                o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE,
              ],
              signalType: [12, o("WAWebWamEnumSignalType").SIGNAL_TYPE],
              signalTypeOrigin: [23, e.TYPES.STRING],
              spSignalNotSharedReason: [
                13,
                o("WAWebWamEnumSpSignalNotSharedReason")
                  .SP_SIGNAL_NOT_SHARED_REASON,
              ],
              templateId: [14, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { MmSignalSharingVerificationEvent: [] },
      );
    l.MmSignalSharingVerificationEventWamEvent = s;
  },
  98,
);
