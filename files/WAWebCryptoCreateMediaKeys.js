__d(
  "WAWebCryptoCreateMediaKeys",
  [
    "WABase64",
    "WACryptoHkdf",
    "WALogger",
    "WAWebCryptoMediaTypeInfo",
    "WAWebMiscErrors",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WAWebCryptoMediaTypeInfo").getMediaTypeInfo(t),
            i;
          try {
            i = o("WABase64").decodeB64(n);
          } catch (t) {
            r("gkx")("26258") ||
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "decodeB64: invalid base64 string ",
                    "",
                  ])),
                n,
              );
          }
          if (!n || !a || !i)
            throw new (o("WAWebMiscErrors").MediaEncryptionError)(
              "createKeys fail: !!mediakey: " +
                !!n +
                " info: " +
                a +
                " type: " +
                t,
            );
          var l = yield o("WACryptoHkdf").extractAndExpand(i, a, 112);
          if (!l || l.byteLength < 112)
            throw new (o("WAWebMiscErrors").MediaEncryptionError)(
              "computeMediaKeys: hkdf error",
            );
          return {
            iv: l.slice(0, 16),
            encKey: l.slice(16, 48),
            macKey: l.slice(48, 80),
            refKey: l.slice(80, 112),
          };
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
