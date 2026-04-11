__d(
  "WAWebCryptoDecryptMediaV2",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATypedArraysCast",
    "WAWebBackendWorkerClient",
    "WAWebCryptoDecryptMedia",
    "WAWebMiscErrors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 3e3;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ciphertextHmac,
            a = t.debugString,
            i = t.downloadQpl,
            l = t.expectedPlaintextHash,
            c = t.mediaKeys,
            d = yield o("WAPromiseTimeout")
              .promiseTimeout(
                o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
                u,
                "[media][crypto] compound worker bridge timed out",
              )
              .catch(function (e) {
                if (e instanceof o("WACustomError").TimeoutError) return null;
                throw e;
              });
          if (d == null)
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[media][crypto] compound bridge timeout, using main-thread fallback ",
                    "",
                  ])),
                { debugString: a },
              ),
              i == null || i.addPoint("compound_bridge_timeout_fallback"),
              r("WAWebCryptoDecryptMedia")({
                mediaKeys: c,
                ciphertextHmac: n,
                expectedPlaintextHash: l,
                debugString: a,
              })
            );
          var m = o("WATypedArraysCast").castTypedArrays(Uint8Array, n);
          try {
            var p = yield d.sendAndReceive(
              "media",
              "decryptMedia",
              {
                iv: c.iv,
                encKey: c.encKey,
                macKey: c.macKey,
                ciphertextHmac: m,
                expectedPlaintextHash: l != null ? l : null,
              },
              !1,
              void 0,
              void 0,
              [m.buffer],
            );
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptMedia: [",
                    "] success (compound)",
                  ])),
                a,
              ),
              p
            );
          } catch (e) {
            throw new (o("WAWebMiscErrors").MediaDecryptionError)(
              "decryptMedia: compound worker failed: " +
                (e instanceof Error ? e.message : String(e)),
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
