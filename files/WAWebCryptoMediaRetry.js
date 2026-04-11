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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
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
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield f(e),
            a = (n == null ? void 0 : n.slice()) || g(),
            i = s({ stanzaId: t }),
            l = yield o("WACryptoAesGcm").gcmEncrypt(r, a, i, t);
          return { ciphertext: l, iv: a };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield f(e),
              i = yield o("WACryptoAesGcm").gcmDecrypt(a, n, r, t);
            return o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsMmsRetry.pb").MediaRetryNotificationSpec,
              i,
            );
          },
        )),
        m.apply(this, arguments)
      );
    }
    var p = 12,
      _ = "WhatsApp Media Retry Notification";
    function f(e) {
      return o("WACryptoHkdf").extractAndExpand(e, _, 32);
    }
    function g() {
      var e = new Uint8Array(p);
      return (self.crypto.getRandomValues(e), e);
    }
    ((l.encryptServerErrorReceipt = u),
      (l.decryptMediaRetryNotification = d),
      (l.ENC_IV_SIZE = p));
  },
  98,
);
