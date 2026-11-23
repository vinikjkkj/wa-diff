__d(
  "WAWebWorkerWaNoiseInfo",
  [
    "WABase64",
    "WASignalKeys",
    "WAWebDbEncryptionKey",
    "WAWebUserPrefsCacheStorage",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = await s(),
        t = await u();
      if (!e || !t) return null;
      var n = await d(e.staticKeyPair.pubKey, t[1]),
        r = await d(e.staticKeyPair.privKey, t[2]);
      return o("WASignalKeys").makeKeyPairFromArrayBuffers(n, r);
    }
    function s() {
      return o(
        "WAWebUserPrefsCacheStorage",
      ).userPrefsCacheStorage.getItemFromCacheStorage(
        o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO,
      );
    }
    async function u() {
      var e = await c();
      return e
        ? e.map(function (e) {
            return new Uint8Array(o("WABase64").decodeB64(e));
          })
        : null;
    }
    function c() {
      return o(
        "WAWebUserPrefsCacheStorage",
      ).userPrefsCacheStorage.getItemFromCacheStorage(
        o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO_IV,
      );
    }
    async function d(e, t) {
      var n = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
        r = await self.crypto.subtle.decrypt(
          { iv: t, name: "AES-CBC" },
          n.key,
          e,
        );
      return r;
    }
    l.getWaNoiseInfo = e;
  },
  98,
);
