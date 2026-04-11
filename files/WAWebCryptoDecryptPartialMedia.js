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
      p = 10,
      _ = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ciphertext,
            r = t.iv,
            a = t.mediaKeys,
            i = a.encKey,
            l = { name: "AES-CBC", iv: r };
          try {
            var u = yield self.crypto.subtle
              .importKey("raw", new Uint8Array(i), "AES-CBC", !1, ["decrypt"])
              .catch(function (t) {
                throw (
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptPartialMedia:decrypt importKey error: ",
                        "",
                      ])),
                    String(t),
                  ),
                  t
                );
              });
            return self.crypto.subtle.decrypt(l, u, n);
          } catch (e) {
            throw (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptPartialMedia:decrypt decrypt error: ",
                    "",
                  ])),
                String(e),
              ),
              e
            );
          }
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })(),
      f = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ciphertext,
            n = e.mediaKeys,
            r = n.encKey,
            a = t instanceof Uint8Array ? t : new Uint8Array(t),
            i = { name: "AES-CBC", iv: a.slice(0 - m) };
          try {
            var l = yield self.crypto.subtle
                .importKey("raw", new Uint8Array(r), "AES-CBC", !1, ["encrypt"])
                .catch(function (e) {
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptPartialMedia:getEncryptedPadding importKey error: ",
                        "",
                      ])),
                    String(e),
                  );
                }),
              s = new Uint8Array([]);
            return self.crypto.subtle.encrypt(i, l, s);
          } catch (e) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptPartialMedia:getEncryptedPadding encrypt error: ",
                  "",
                ])),
              String(e),
            );
            return;
          }
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      g = function (t) {
        var e = t.ciphertext,
          r = t.mediaKeys,
          a = t.serverRangeStart,
          i = e instanceof Uint8Array ? e : new Uint8Array(e),
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
            ? f({ ciphertext: i, mediaKeys: r }).then(function (e) {
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
      },
      h = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ciphertext,
            n = e.mediaKeys,
            r = yield g({ serverRangeStart: 0, ciphertext: t, mediaKeys: n }),
            o = r.ciphertext,
            a = r.iv;
          return _({ ciphertext: o, iv: a, mediaKeys: n });
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })();
    ((l.BLOCK_SIZE = m),
      (l.HMAC_SIZE = p),
      (l.decrypt = _),
      (l.cleanupCiphertextAndIv = g),
      (l.decryptPartialMedia = h));
  },
  98,
);
