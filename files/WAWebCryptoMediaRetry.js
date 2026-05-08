__d(
  "WAWebCryptoMediaRetry",
  [
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdf",
    "WALogger",
    "WAWebProtobufsMmsRetry.pb",
    "asyncToGeneratorRuntime",
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
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield g(e),
            a = (n == null ? void 0 : n.slice()) || h(),
            i = u({ stanzaId: t }),
            l = yield o("WACryptoAesGcm").gcmEncrypt(r, a, i, t);
          return { ciphertext: l, iv: a };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = yield g(e);
            try {
              var l = yield o("WACryptoAesGcm").gcmDecrypt(i, n, a, t);
              return o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsMmsRetry.pb").MediaRetryNotificationSpec,
                l,
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
          },
        )),
        p.apply(this, arguments)
      );
    }
    var _ = 12,
      f = "WhatsApp Media Retry Notification";
    function g(e) {
      return o("WACryptoHkdf").extractAndExpand(e, f, 32);
    }
    function h() {
      var e = new Uint8Array(_);
      return (self.crypto.getRandomValues(e), e);
    }
    ((l.encryptServerErrorReceipt = c),
      (l.decryptMediaRetryNotification = m),
      (l.ENC_IV_SIZE = _));
  },
  98,
);
