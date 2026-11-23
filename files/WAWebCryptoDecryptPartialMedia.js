__d(
  "WAWebCryptoDecryptPartialMedia",
  ["WALogger", "WATypedArraysConcat"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 16,
      m = 10;
    async function p(t) {
      var n = t.ciphertext,
        r = t.iv,
        a = t.mediaKeys,
        i = a.encKey,
        l = { name: "AES-CBC", iv: r };
      try {
        var u = await self.crypto.subtle
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
    }
    var _ = async function (t) {
      var e = t.ciphertext,
        n = t.mediaKeys,
        r = n.encKey,
        a = e instanceof Uint8Array ? e : new Uint8Array(e),
        i = { name: "AES-CBC", iv: a.slice(0 - d) };
      try {
        var l = await self.crypto.subtle
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
    };
    function f(e) {
      var t = e.ciphertext,
        n = e.mediaKeys,
        r = e.serverRangeStart,
        a = t instanceof Uint8Array ? t : new Uint8Array(t),
        i = r === 0,
        l = a.byteLength % d === 0,
        s = !l,
        u;
      return (
        i
          ? (u = new Uint8Array(n.iv))
          : ((u = a.slice(0, d)), (a = a.slice(d))),
        s && (a = a.slice(0, a.byteLength - m)),
        l
          ? _({ ciphertext: a, mediaKeys: n }).then(function (e) {
              return (
                (a = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                  a,
                  new Uint8Array(e),
                ])),
                { ciphertext: a, iv: u }
              );
            })
          : Promise.resolve({ ciphertext: a, iv: u })
      );
    }
    async function g(e) {
      var t = e.ciphertext,
        n = e.mediaKeys,
        r = await f({ serverRangeStart: 0, ciphertext: t, mediaKeys: n }),
        o = r.ciphertext,
        a = r.iv;
      return p({ ciphertext: o, iv: a, mediaKeys: n });
    }
    ((l.BLOCK_SIZE = d),
      (l.HMAC_SIZE = m),
      (l.decrypt = p),
      (l.cleanupCiphertextAndIv = f),
      (l.decryptPartialMedia = g));
  },
  98,
);
