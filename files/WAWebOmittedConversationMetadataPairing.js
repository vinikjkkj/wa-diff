__d(
  "WAWebOmittedConversationMetadataPairing",
  [
    "WAWebOmittedConversationMetadataStorageTypes",
    "WAWebSignalCommonUtils",
    "WAWebSignalConst",
    "WAWebSignalStoreApi",
    "WAWebUserUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = o("WAWebUserUtils").getMeDeviceLidOrThrow().toString(),
        t = await Promise.all([
          o("WAWebSignalStoreApi").waSignalStore.getMeta(
            o("WAWebSignalConst").META_KEYS.REG_ID,
          ),
          o("WAWebSignalStoreApi").waSignalStore.getMeta(
            o("WAWebSignalConst").META_KEYS.STATIC_PUBKEY,
          ),
        ]),
        n = t[0],
        a = t[1];
      if (typeof n != "number" || a == null)
        throw r("err")("Omitted metadata pairing credentials are unavailable");
      var i = await o("WAWebSignalCommonUtils").decryptRegistrationMaterial(a),
        l = await self.crypto.subtle.digest("SHA-256", i),
        s = Array.from(new Uint8Array(l), function (e) {
          return e.toString(16).padStart(2, "0");
        }).join("");
      return o(
        "WAWebOmittedConversationMetadataStorageTypes",
      ).asOmittedMetadataPairingId(e + ":" + n + ":" + s);
    }
    l.getOmittedMetadataPairingId = e;
  },
  98,
);
