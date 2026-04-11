__d(
  "WAWebMmSignalSharingVerificationFsEventWamEvent",
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
          MmSignalSharingVerificationFsEvent: [
            6798,
            {
              isCompanionDevice: [1, e.TYPES.BOOLEAN],
              isLatestConversionToken: [15, e.TYPES.BOOLEAN],
              isShimmingSignal: [13, e.TYPES.BOOLEAN],
              isUserDisclosed: [2, e.TYPES.BOOLEAN],
              mmConversationDepth: [16, e.TYPES.INTEGER],
              mmConversationRepeat: [17, e.TYPES.INTEGER],
              mmDirectionFrom: [
                18,
                o("WAWebWamEnumMmDirectionFrom").MM_DIRECTION_FROM,
              ],
              onePdSignalNotSharedReason: [
                3,
                o("WAWebWamEnumOnePdSignalNotSharedReason")
                  .ONE_PD_SIGNAL_NOT_SHARED_REASON,
              ],
              signalCanceledReason: [
                4,
                o("WAWebWamEnumSignalCanceledReason").SIGNAL_CANCELED_REASON,
              ],
              signalMessageState: [
                5,
                o("WAWebWamEnumSignalMessageState").SIGNAL_MESSAGE_STATE,
              ],
              signalMessageType: [
                6,
                o("WAWebWamEnumSignalMessageType").SIGNAL_MESSAGE_TYPE,
              ],
              signalOrigin: [7, o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN],
              signalSharingStatus: [
                8,
                o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS,
              ],
              signalSurface: [9, o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE],
              signalType: [10, o("WAWebWamEnumSignalType").SIGNAL_TYPE],
              signalTypeOrigin: [14, e.TYPES.STRING],
              spSignalNotSharedReason: [
                11,
                o("WAWebWamEnumSpSignalNotSharedReason")
                  .SP_SIGNAL_NOT_SHARED_REASON,
              ],
              threadIdHmac: [12, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MmSignalSharingVerificationFsEvent: [] },
      );
    l.MmSignalSharingVerificationFsEventWamEvent = s;
  },
  98,
);
