__d(
  "WAWebScheduledMsgCrypto",
  [
    "WALogger",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMsgConstants",
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
    async function m(e) {
      return self.crypto.subtle.importKey(
        "raw",
        e,
        { name: "AES-GCM", length: 256 },
        !1,
        ["encrypt", "decrypt"],
      );
    }
    async function p(t, n) {
      var a = new Uint8Array(
        o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_IV_BYTES,
      );
      self.crypto.getRandomValues(a);
      try {
        var i = await m(n),
          l = await self.crypto.subtle.encrypt(
            { name: "AES-GCM", iv: a },
            i,
            t,
          );
        return { encIv: a.buffer, encPayload: l };
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] Failed to encrypt with RevealKey",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          t
        );
      }
    }
    async function _(e, t, n) {
      try {
        var a = await m(n),
          i = new Uint8Array(t),
          l = await self.crypto.subtle.decrypt(
            { name: "AES-GCM", iv: i },
            a,
            e,
          );
        return l;
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] Failed to decrypt with RevealKey",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          e
        );
      }
    }
    function f(e, t, n) {
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
    function g(e) {
      var t = e.conditionalRevealMessageType,
        n = e.encIv,
        r = e.encPayload,
        a = e.revealKeyId;
      return r == null || n == null || a == null
        ? (o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] ConditionalRevealMessage missing fields",
              ])),
          ),
          null)
        : {
            conditionalRevealMessageType:
              t != null
                ? t
                : o("WAWebProtobufsE2E.pb")
                    .Message$ConditionalRevealMessage$ConditionalRevealMessageType
                    .UNKNOWN,
            encIv: n,
            encPayload: r,
            revealKeyId: a,
          };
    }
    ((l.generateRevealKey = c),
      (l.generateRevealKeyId = d),
      (l.encryptWithRevealKey = p),
      (l.decryptWithRevealKey = _),
      (l.buildConditionalRevealMessage = f),
      (l.parseConditionalRevealMessage = g));
  },
  98,
);
