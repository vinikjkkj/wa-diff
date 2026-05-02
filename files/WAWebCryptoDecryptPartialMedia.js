__d(
  "WAWebCryptoDecryptPartialMedia",
  ["Promise", "WALogger", "WATypedArraysConcat", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 16,
      p = 10;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ciphertext,
            n = e.iv,
            r = e.mediaKeys,
            a = r.encKey,
            i = { name: "AES-CBC", iv: n };
          try {
            var l = yield self.crypto.subtle
              .importKey("raw", new Uint8Array(a), "AES-CBC", !1, ["decrypt"])
              .catch(function (e) {
                throw (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptPartialMedia:decrypt importKey error: ",
                        "",
                      ])),
                    String(e),
                  ),
                  e
                );
              });
            return self.crypto.subtle.decrypt(i, l, t);
          } catch (e) {
            throw (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptPartialMedia:decrypt decrypt error: ",
                    "",
                  ])),
                String(e),
              ),
              e
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    var g = (function () {
      var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
        var n = t.ciphertext,
          r = t.mediaKeys,
          a = r.encKey,
          i = n instanceof Uint8Array ? n : new Uint8Array(n),
          l = { name: "AES-CBC", iv: i.slice(0 - m) };
        try {
          var u = yield self.crypto.subtle
              .importKey("raw", new Uint8Array(a), "AES-CBC", !1, ["encrypt"])
              .catch(function (t) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "decryptPartialMedia:getEncryptedPadding importKey error: ",
                      "",
                    ])),
                  String(t),
                );
              }),
            c = new Uint8Array([]);
          return self.crypto.subtle.encrypt(l, u, c);
        } catch (e) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "decryptPartialMedia:getEncryptedPadding encrypt error: ",
                "",
              ])),
            String(e),
          );
          return;
        }
      });
      return function (n) {
        return t.apply(this, arguments);
      };
    })();
    function h(e) {
      var t = e.ciphertext,
        r = e.mediaKeys,
        a = e.serverRangeStart,
        i = t instanceof Uint8Array ? t : new Uint8Array(t),
        l = a === 0,
        s = i.byteLength % m === 0,
        u = !s,
        c;
      return (
        l
          ? (c = new Uint8Array(r.iv))
          : ((c = i.slice(0, m)), (i = i.slice(m))),
        u && (i = i.slice(0, i.byteLength - p)),
        s
          ? g({ ciphertext: i, mediaKeys: r }).then(function (e) {
              return (
                (i = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                  i,
                  new Uint8Array(e),
                ])),
                { ciphertext: i, iv: c }
              );
            })
          : (d || (d = n("Promise"))).resolve({ ciphertext: i, iv: c })
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ciphertext,
            n = e.mediaKeys,
            r = yield h({ serverRangeStart: 0, ciphertext: t, mediaKeys: n }),
            o = r.ciphertext,
            a = r.iv;
          return _({ ciphertext: o, iv: a, mediaKeys: n });
        })),
        C.apply(this, arguments)
      );
    }
    ((l.BLOCK_SIZE = m),
      (l.HMAC_SIZE = p),
      (l.decrypt = _),
      (l.cleanupCiphertextAndIv = h),
      (l.decryptPartialMedia = y));
  },
  98,
);
