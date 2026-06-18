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
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            o = yield d(e, t, n);
          return (r = o == null ? void 0 : o.proto) != null ? r : null;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i;
          try {
            i = yield o("WAWebScheduledMsgCrypto").decryptWithRevealKey(
              p(t),
              p(n),
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
          var l = new Uint8Array(i);
          try {
            return {
              proto: o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsE2E.pb").MessageSpec,
                l,
              ),
              protoBytes: l,
            };
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return e instanceof ArrayBuffer
        ? e
        : e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    }
    ((l.decryptAndDecodeRevealPayload = u),
      (l.decryptAndDecodeRevealPayloadWithBytes = d));
  },
  98,
);
