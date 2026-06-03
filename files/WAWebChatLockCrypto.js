__d(
  "WAWebChatLockCrypto",
  [
    "WACryptoUtils",
    "WALogger",
    "WAWebProtobufsUserPassword.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return o("WACryptoUtils").arrayBuffersEqual(e, t);
    }
    function u(e) {
      return e.transformer ===
        o("WAWebProtobufsUserPassword.pb").UserPassword$Transformer
          .PBKDF2_HMAC_SHA384
        ? {
            name: "PBKDF2",
            hash: "SHA-384",
            salt: e.salt,
            iterations: e.iterations,
          }
        : e.transformer ===
            o("WAWebProtobufsUserPassword.pb").UserPassword$Transformer
              .PBKDF2_HMAC_SHA512
          ? {
              name: "PBKDF2",
              hash: "SHA-512",
              salt: e.salt,
              iterations: e.iterations,
            }
          : e.transformer ===
              o("WAWebProtobufsUserPassword.pb").UserPassword$Transformer.NONE
            ? null
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e.transformer,
                );
              })();
    }
    function c(e, t) {
      switch (t) {
        case o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding.UTF8: {
          var n = new TextEncoder();
          return n.encode(e);
        }
        case o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding
          .UTF8_BROKEN: {
          var r = new TextEncoder(),
            a = r.encode(e),
            i = new Uint8Array(a.length * 2);
          a.forEach(function (e, t) {
            ((i[t * 2] = e < 128 ? 0 : 255), (i[t * 2 + 1] = e));
          });
          var l = new TextDecoder("utf-16be").decode(i);
          return r.encode(l);
        }
      }
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = u(t);
          if (n != null) {
            var r = c(e, t.encoding),
              o = yield self.crypto.subtle.importKey("raw", r, n.name, !1, [
                "deriveBits",
              ]);
            return self.crypto.subtle.deriveBits(n, o, t.data.byteLength * 8);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (n == null) return !1;
          var r = yield d(t, n);
          if (r == null) return !1;
          var a = s(r, n.data);
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatLock] comparing secret codes",
                ])),
            ),
            a
          );
        })),
        _.apply(this, arguments)
      );
    }
    ((l._deriveBitsFromSecretCode = d), (l.validateChatLockSecretCode = p));
  },
  98,
);
