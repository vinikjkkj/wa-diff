__d(
  "WAWebMdBadDeviceSentMessageWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDeviceType",
    "WAWebWamEnumDsmError",
    "WAWebWamEnumEditType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumRevokeType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        MdBadDeviceSentMessage: [
          2176,
          {
            dsmError: [2, o("WAWebWamEnumDsmError").DSM_ERROR],
            editType: [3, o("WAWebWamEnumEditType").EDIT_TYPE],
            encryptionType: [
              9,
              o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE,
            ],
            isLid: [4, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            mediaType: [5, o("WAWebWamEnumMediaType").MEDIA_TYPE],
            messageType: [6, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
            peerType: [1, o("WAWebWamEnumDeviceType").DEVICE_TYPE],
            revokeType: [7, o("WAWebWamEnumRevokeType").REVOKE_TYPE],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { MdBadDeviceSentMessage: [] },
    );
    l.MdBadDeviceSentMessageWamEvent = e;
  },
  98,
);
