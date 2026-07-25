__d(
  "WAWebCoexV2WamClassification",
  [
    "WAWebCoexV2GatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (
        e == null ||
        t == null ||
        !o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e, t)
      )
        return null;
      var n = o("WAWebUserPrefsMeUser").isMeAccount(t);
      return {
        encryptionType: n
          ? o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE
              .SELF_COEX_V2
          : o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX_V2,
        e2eSenderType: n
          ? o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.MY_COEX_V2
          : o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.OTHER_COEX_V2,
      };
    }
    function s(t, n, r) {
      var a = e(t, r);
      return a != null
        ? { e2eSenderType: a.e2eSenderType, encryptionType: a.encryptionType }
        : n == null
          ? {}
          : {
              e2eSenderType: o("WAWebWamMsgUtils").getWamE2eSenderType(n),
              encryptionType: n.isHosted()
                ? o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX
                : null,
            };
    }
    ((l.getCoexV2RecvWamClassification = e),
      (l.getRecvWamE2eClassification = s));
  },
  98,
);
