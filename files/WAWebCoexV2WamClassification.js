__d(
  "WAWebCoexV2WamClassification",
  [
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumMessageDropReasonType",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null || !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)
        ? null
        : o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
          ? o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
              .COEX_V2_INVALID_SENDER
          : o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
              .COEX_V2_RECV_UNSUPPORTED;
    }
    function s(e, t) {
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
    function u(e, t, n) {
      var r = s(e, n);
      return r != null
        ? { e2eSenderType: r.e2eSenderType, encryptionType: r.encryptionType }
        : t == null
          ? {}
          : {
              e2eSenderType: o("WAWebWamMsgUtils").getWamE2eSenderType(t),
              encryptionType: t.isHosted()
                ? o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX
                : null,
            };
    }
    ((l.getCoexV2ReceiveDropReason = e),
      (l.getCoexV2RecvWamClassification = s),
      (l.getRecvWamE2eClassification = u));
  },
  98,
);
