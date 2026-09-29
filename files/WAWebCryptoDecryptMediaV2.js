__d(
  "WAWebCryptoDecryptMediaV2",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATypedArraysCast",
    "WAWebBackendWorkerClient",
    "WAWebCryptoDecryptMedia",
    "WAWebMainThreadQplHandler",
    "WAWebMediaFileErrors",
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
                    "[media][crypto] bridge timeout, main-thread fallback ",
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
          var m = o("WATypedArraysCast").castTypedArrays(Uint8Array, n),
            p = null;
          try {
            var _ = yield d.sendAndReceive(
              "media",
              "decryptMedia",
              {
                iv: c.iv,
                encKey: c.encKey,
                macKey: c.macKey,
                ciphertextHmac: m,
                expectedPlaintextHash: l != null ? l : null,
                serializedDownloadQpl:
                  i == null
                    ? null
                    : o("WAWebMainThreadQplHandler").serializeQplForBridge(i),
              },
              !1,
              {
                onSend: function () {
                  ((p = self.performance.now()),
                    i == null || i.addPoint("compound_bridge_roundtrip_start"));
                },
              },
              void 0,
              [m.buffer],
            );
            if (p != null) {
              var f = self.performance.now() - p;
              i == null ||
                i.addPoint("compound_bridge_roundtrip_end", {
                  int: {
                    bridge_duration_ms: Math.round(
                      Math.max(0, f - _.workerDurationMs),
                    ),
                    bridge_round_trip_duration_ms: Math.round(f),
                    worker_duration_ms: Math.round(_.workerDurationMs),
                  },
                });
            }
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptMedia: [",
                    "] success (compound)",
                  ])),
                a,
              ),
              _.plaintext
            );
          } catch (e) {
            throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
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
