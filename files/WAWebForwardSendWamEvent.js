__d(
  "WAWebForwardSendWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDisappearingChatInitiatorType",
    "WAWebWamEnumE2eCiphertextType",
    "WAWebWamEnumEphemeralityInitiatorType",
    "WAWebWamEnumEphemeralityTriggerActionType",
    "WAWebWamEnumForwardOrigin",
    "WAWebWamEnumForwardPickerOrigin",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageBizType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ForwardSend: [
            1728,
            {
              disappearingChatInitiator: [
                21,
                o("WAWebWamEnumDisappearingChatInitiatorType")
                  .DISAPPEARING_CHAT_INITIATOR_TYPE,
              ],
              e2eCiphertextType: [
                12,
                o("WAWebWamEnumE2eCiphertextType").E2E_CIPHERTEXT_TYPE,
              ],
              e2eCiphertextVersion: [11, e.TYPES.INTEGER],
              ephemeralityDuration: [18, e.TYPES.INTEGER],
              ephemeralityInitiator: [
                24,
                o("WAWebWamEnumEphemeralityInitiatorType")
                  .EPHEMERALITY_INITIATOR_TYPE,
              ],
              ephemeralityTriggerAction: [
                25,
                o("WAWebWamEnumEphemeralityTriggerActionType")
                  .EPHEMERALITY_TRIGGER_ACTION_TYPE,
              ],
              fastForwardEnabled: [5, e.TYPES.BOOLEAN],
              forwardOrigin: [
                28,
                o("WAWebWamEnumForwardOrigin").FORWARD_ORIGIN,
              ],
              forwardPickerOrigin: [
                27,
                o("WAWebWamEnumForwardPickerOrigin").FORWARD_PICKER_ORIGIN,
              ],
              isForwardedForward: [22, e.TYPES.BOOLEAN],
              isFrequentlyForwarded: [14, e.TYPES.BOOLEAN],
              mediaCaptionPresent: [10, e.TYPES.BOOLEAN],
              messageBizType: [
                26,
                o("WAWebWamEnumMessageBizType").MESSAGE_BIZ_TYPE,
              ],
              messageForwardAgeT: [4, e.TYPES.TIMER],
              messageIsFanout: [6, e.TYPES.BOOLEAN],
              messageIsFastForward: [3, e.TYPES.BOOLEAN],
              messageIsInternational: [9, e.TYPES.BOOLEAN],
              messageMediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageSendT: [13, e.TYPES.TIMER],
              messageType: [1, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              receiverDefaultDisappearingDuration: [20, e.TYPES.INTEGER],
              resendCount: [8, e.TYPES.INTEGER],
              retryCount: [7, e.TYPES.INTEGER],
              senderDefaultDisappearingDuration: [19, e.TYPES.INTEGER],
              typeOfGroup: [
                23,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
              wouldBeFrequentlyForwardedAt3: [16, e.TYPES.BOOLEAN],
              wouldBeFrequentlyForwardedAt4: [17, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ForwardSend: [] },
      );
    l.ForwardSendWamEvent = s;
  },
  98,
);
