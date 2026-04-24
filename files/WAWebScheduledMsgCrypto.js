__d(
  "WAWebScheduledMsgCrypto",
  [
    "WALogger",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMsgConstants",
    "asyncToGeneratorRuntime",
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
            { name: "AES-CBC", length: 256 },
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
            var r = yield m(t),
              a = yield self.crypto.subtle.encrypt(
                { name: "AES-CBC", iv: n },
                r,
                e,
              );
            return { encIv: n.buffer, encPayload: a };
          } catch (e) {
            throw (
              e instanceof Error &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg] Failed to encrypt with RevealKey",
                      ])),
                  )
                  .catching(e),
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
            var r = yield m(n),
              a = new Uint8Array(t),
              i = yield self.crypto.subtle.decrypt(
                { name: "AES-CBC", iv: a },
                r,
                e,
              );
            return i;
          } catch (e) {
            throw (
              e instanceof Error &&
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg] Failed to decrypt with RevealKey",
                      ])),
                  )
                  .catching(e),
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
      var n = t.conditionalRevealMessage;
      if (n == null) return null;
      var r = n.conditionalRevealMessageType,
        a = n.encIv,
        i = n.encPayload,
        l = n.revealKeyId;
      return i == null || a == null || l == null
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] ConditionalRevealMessage missing fields",
              ])),
          ),
          null)
        : {
            conditionalRevealMessageType:
              r != null
                ? r
                : o("WAWebProtobufsE2E.pb")
                    .Message$ConditionalRevealMessage$ConditionalRevealMessageType
                    .UNKNOWN,
            encIv: a,
            encPayload: i,
            revealKeyId: l,
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
