__d(
  "WAWebCryptoMediaRetry",
  [
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdf",
    "WALogger",
    "WAWebProtobufsMmsRetry.pb",
    "decodeProtobuf",
    "encodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "encodeServerErrorReceipt",
          ])),
      );
      var n = new (o("WABinary").Binary)();
      return (
        o("encodeProtobuf").encodeProtobuf(
          o("WAWebProtobufsMmsRetry.pb").ServerErrorReceiptSpec,
          t,
          n,
        ),
        n.readByteArrayView()
      );
    }
    async function c(e, t, n) {
      var r = await _(e),
        a = (n == null ? void 0 : n.slice()) || f(),
        i = u({ stanzaId: t }),
        l = await o("WACryptoAesGcm").gcmEncrypt(r, a, i, t);
      return { ciphertext: l, iv: a };
    }
    async function d(e) {
      var t = e.ciphertext,
        n = e.cryptoKey,
        a = e.iv,
        i = e.stanzaId,
        l = await _(n);
      try {
        var u = await o("WACryptoAesGcm").gcmDecrypt(l, a, t, i);
        return o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsMmsRetry.pb").MediaRetryNotificationSpec,
          u,
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "rmr decryption failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("rmr-decryption-failed", { sampling: 0.01 }),
          e
        );
      }
    }
    var m = 12,
      p = "WhatsApp Media Retry Notification";
    function _(e) {
      return o("WACryptoHkdf").extractAndExpand(e, p, 32);
    }
    function f() {
      var e = new Uint8Array(m);
      return (self.crypto.getRandomValues(e), e);
    }
    ((l.encryptServerErrorReceipt = c),
      (l.decryptMediaRetryNotification = d),
      (l.ENC_IV_SIZE = m));
  },
  98,
);
