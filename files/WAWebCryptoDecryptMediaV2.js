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
      u,
      c = 3e3;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ciphertextHmac,
            a = t.debugString,
            i = t.downloadQpl,
            l = t.expectedPlaintextHash,
            d = t.mediaKeys,
            m = o("WATypedArraysCast").castTypedArrays(Uint8Array, n),
            p = m.buffer;
          if (!(p instanceof ArrayBuffer))
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[media][crypto] shared ciphertext buffer, main-thread fallback ",
                      "",
                    ])),
                  { debugString: a },
                )
                .sendLogs("media-decrypt-v2-shared-ciphertext"),
              r("WAWebCryptoDecryptMedia")({
                mediaKeys: d,
                ciphertextHmac: m.slice(),
                expectedPlaintextHash: l,
                debugString: a,
              })
            );
          var _ = yield o("WAPromiseTimeout")
            .promiseTimeout(
              o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
              c,
              "[media][crypto] compound worker bridge timed out",
            )
            .catch(function (e) {
              if (e instanceof o("WACustomError").TimeoutError) return null;
              throw e;
            });
          if (_ == null)
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[media][crypto] bridge timeout, main-thread fallback ",
                    "",
                  ])),
                { debugString: a },
              ),
              i == null || i.addPoint("compound_bridge_timeout_fallback"),
              r("WAWebCryptoDecryptMedia")({
                mediaKeys: d,
                ciphertextHmac: n,
                expectedPlaintextHash: l,
                debugString: a,
              })
            );
          var f = null;
          try {
            var g = yield _.sendAndReceive(
              "media",
              "decryptMedia",
              {
                iv: d.iv,
                encKey: d.encKey,
                macKey: d.macKey,
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
                  ((f = self.performance.now()),
                    i == null || i.addPoint("compound_bridge_roundtrip_start"));
                },
              },
              void 0,
              [p],
            );
            if (f != null) {
              var h = self.performance.now() - f;
              i == null ||
                i.addPoint("compound_bridge_roundtrip_end", {
                  int: {
                    bridge_duration_ms: Math.round(
                      Math.max(0, h - g.workerDurationMs),
                    ),
                    bridge_round_trip_duration_ms: Math.round(h),
                    worker_duration_ms: Math.round(g.workerDurationMs),
                  },
                });
            }
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptMedia: [",
                    "] success (compound)",
                  ])),
                a,
              ),
              g.plaintext
            );
          } catch (e) {
            throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
              "decryptMedia: compound worker failed: " +
                (e instanceof Error ? e.message : String(e)),
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
