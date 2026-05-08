__d(
  "WAWebScheduledMsgCrypto",
  [
    "WALogger",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMsgConstants",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      var e = new Uint8Array(
        o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_BYTES,
      );
      return (self.crypto.getRandomValues(e), e);
    }
    function d() {
      return r("WAWebPonyfillsCryptoRandomUUID")();
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return self.crypto.subtle.importKey(
            "raw",
            e,
            { name: "AES-GCM", length: 256 },
            !1,
            ["encrypt", "decrypt"],
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Uint8Array(
            o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_IV_BYTES,
          );
          self.crypto.getRandomValues(n);
          try {
            var a = yield m(t),
              i = yield self.crypto.subtle.encrypt(
                { name: "AES-GCM", iv: n },
                a,
                e,
              );
            return { encIv: n.buffer, encPayload: i };
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Failed to encrypt with RevealKey",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a = yield m(n),
              i = new Uint8Array(t),
              l = yield self.crypto.subtle.decrypt(
                { name: "AES-GCM", iv: i },
                a,
                e,
              );
            return l;
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Failed to decrypt with RevealKey",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return {
        conditionalRevealMessage: {
          conditionalRevealMessageType: o("WAWebProtobufsE2E.pb")
            .Message$ConditionalRevealMessage$ConditionalRevealMessageType
            .SCHEDULED_MESSAGE,
          encIv:
            t instanceof Uint8Array
              ? t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength)
              : t,
          encPayload:
            e instanceof Uint8Array
              ? e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
              : e,
          revealKeyId: n,
        },
      };
    }
    function C(t) {
      var n = t.conditionalRevealMessageType,
        r = t.encIv,
        a = t.encPayload,
        i = t.revealKeyId;
      return a == null || r == null || i == null
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] ConditionalRevealMessage missing fields",
              ])),
          ),
          null)
        : {
            conditionalRevealMessageType:
              n != null
                ? n
                : o("WAWebProtobufsE2E.pb")
                    .Message$ConditionalRevealMessage$ConditionalRevealMessageType
                    .UNKNOWN,
            encIv: r,
            encPayload: a,
            revealKeyId: i,
          };
    }
    ((l.generateRevealKey = c),
      (l.generateRevealKeyId = d),
      (l.encryptWithRevealKey = _),
      (l.decryptWithRevealKey = g),
      (l.buildConditionalRevealMessage = y),
      (l.parseConditionalRevealMessage = C));
  },
  98,
);
