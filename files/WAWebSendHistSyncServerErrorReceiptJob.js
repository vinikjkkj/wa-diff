__d(
  "WAWebSendHistSyncServerErrorReceiptJob",
  [
    "WABase64",
    "WADeprecatedSendIq",
    "WAWap",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebCryptoMediaRetry",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var r,
        a = o("WABase64").decodeB64(n),
        i = await o("WAWebCryptoMediaRetry").encryptServerErrorReceipt(a, t),
        l = i.ciphertext,
        s = i.iv,
        u = (r = o("WAWap")).wap(
          "receipt",
          {
            type: "server-error",
            to: o("WAWebCommsWapMd").USER_JID(e),
            id: r.CUSTOM_STRING(t),
            category: "peer",
          },
          r.wap(
            "encrypt",
            null,
            r.wap("enc_p", null, l),
            r.wap("enc_iv", null, s),
          ),
        );
      return o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
        u,
        o("WAWebCommsAckParser").toCoreAckTemplate({
          id: t,
          class: "receipt",
          type: "server-error",
          from: e,
          participant: null,
        }),
      );
    }
    l.default = e;
  },
  98,
);
