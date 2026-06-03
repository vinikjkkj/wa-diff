__d(
  "WAWebScheduledMsgDecryptInnerProto",
  [
    "WALogger",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMsgCrypto",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i;
          try {
            i = yield o("WAWebScheduledMsgCrypto").decryptWithRevealKey(
              d(t),
              d(n),
              a,
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] reveal payload decrypt failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("scheduled-msg-reveal-payload-decrypt-failed"),
              null
            );
          }
          try {
            return o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              new Uint8Array(i),
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] reveal payload decode failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("scheduled-msg-reveal-payload-decode-failed"),
              null
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return e instanceof ArrayBuffer
        ? e
        : e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    }
    l.decryptAndDecodeRevealPayload = u;
  },
  98,
);
