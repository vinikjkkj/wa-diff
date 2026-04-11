__d(
  "WAWebEphemeralSyncResponseSendWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDisappearingChatInitiatorType",
    "WAWebWamEnumEphemeralityInitiatorType",
    "WAWebWamEnumEphemeralityTriggerActionType",
    "WAWebWamEnumEsrFailureReasonType",
    "WAWebWamEnumEsrSendResultType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          EphemeralSyncResponseSend: [
            4778,
            {
              clientDisappearingModeInitiator: [
                1,
                o("WAWebWamEnumDisappearingChatInitiatorType")
                  .DISAPPEARING_CHAT_INITIATOR_TYPE,
              ],
              clientEphemeralityDuration: [2, e.TYPES.INTEGER],
              clientEphemeralityInitiator: [
                3,
                o("WAWebWamEnumEphemeralityInitiatorType")
                  .EPHEMERALITY_INITIATOR_TYPE,
              ],
              clientEphemeralitySettingTimestamp: [4, e.TYPES.INTEGER],
              clientEphemeralityTriggerAction: [
                5,
                o("WAWebWamEnumEphemeralityTriggerActionType")
                  .EPHEMERALITY_TRIGGER_ACTION_TYPE,
              ],
              esrDisappearingModeInitiator: [
                6,
                o("WAWebWamEnumDisappearingChatInitiatorType")
                  .DISAPPEARING_CHAT_INITIATOR_TYPE,
              ],
              esrEphemeralityDuration: [7, e.TYPES.INTEGER],
              esrEphemeralityInitiator: [
                8,
                o("WAWebWamEnumEphemeralityInitiatorType")
                  .EPHEMERALITY_INITIATOR_TYPE,
              ],
              esrEphemeralitySettingTimestamp: [9, e.TYPES.INTEGER],
              esrEphemeralityTriggerAction: [
                10,
                o("WAWebWamEnumEphemeralityTriggerActionType")
                  .EPHEMERALITY_TRIGGER_ACTION_TYPE,
              ],
              esrFailureReason: [
                11,
                o("WAWebWamEnumEsrFailureReasonType").ESR_FAILURE_REASON_TYPE,
              ],
              esrSendAttempt: [12, e.TYPES.INTEGER],
              esrSendResult: [
                13,
                o("WAWebWamEnumEsrSendResultType").ESR_SEND_RESULT_TYPE,
              ],
              isAGroup: [14, e.TYPES.BOOLEAN],
              messageDisappearingModeInitiator: [
                15,
                o("WAWebWamEnumDisappearingChatInitiatorType")
                  .DISAPPEARING_CHAT_INITIATOR_TYPE,
              ],
              messageEphemeralityDuration: [16, e.TYPES.INTEGER],
              messageEphemeralityInitiator: [
                17,
                o("WAWebWamEnumEphemeralityInitiatorType")
                  .EPHEMERALITY_INITIATOR_TYPE,
              ],
              messageEphemeralitySettingTimestamp: [18, e.TYPES.INTEGER],
              messageEphemeralityTriggerAction: [
                19,
                o("WAWebWamEnumEphemeralityTriggerActionType")
                  .EPHEMERALITY_TRIGGER_ACTION_TYPE,
              ],
              threadId: [20, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { EphemeralSyncResponseSend: [] },
      );
    l.EphemeralSyncResponseSendWamEvent = s;
  },
  98,
);
