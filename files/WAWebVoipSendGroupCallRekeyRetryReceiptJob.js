__d(
  "WAWebVoipSendGroupCallRekeyRetryReceiptJob",
  [
    "WADeprecatedSendIq",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebSignalStoreApi",
    "WAWebVoipSignalingEnums",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      n === void 0 && (n = 0);
      var a = await o(
        "WAWebSignalStoreApi",
      ).waSignalStore.getRegistrationInfo();
      if (!a) throw r("err")("No registration info found");
      var i = o("WAWap").wap(
        "receipt",
        {
          to: o("WAWebCommsWapMd").DEVICE_JID(t.peer_jid),
          id: o("WAWap").CUSTOM_STRING(e),
          type: o("WAWap").CUSTOM_STRING(
            o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS.GROUP_CALL,
          ),
        },
        o("WAWap").wap("enc_rekey", {
          "call-creator": o("WAWebCommsWapMd").DEVICE_JID(t.call_creator),
          "call-id": o("WAWap").CUSTOM_STRING(t.call_id),
          count: o("WAWap").INT(n + 1),
        }),
        o("WAWap").wap(
          "registration",
          null,
          o("WAWap").BIG_ENDIAN_CONTENT(a.registrationId),
        ),
      );
      o("WADeprecatedSendIq").deprecatedCastStanza(i);
    }
    l.default = e;
  },
  98,
);
