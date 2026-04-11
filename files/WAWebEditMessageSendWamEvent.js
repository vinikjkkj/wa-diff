__d(
  "WAWebEditMessageSendWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEditType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          EditMessageSend: [
            3990,
            {
              editDuration: [1, e.TYPES.INTEGER],
              editType: [2, o("WAWebWamEnumEditType").EDIT_TYPE],
              mediaType: [8, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageSendResultIsTerminal: [3, e.TYPES.BOOLEAN],
              messageType: [4, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              resendCount: [5, e.TYPES.INTEGER],
              retryCount: [6, e.TYPES.INTEGER],
              typeOfGroup: [
                9,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { EditMessageSend: [] },
      );
    l.EditMessageSendWamEvent = s;
  },
  98,
);
