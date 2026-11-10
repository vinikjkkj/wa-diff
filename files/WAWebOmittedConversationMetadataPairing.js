__d(
  "WAWebOmittedConversationMetadataPairing",
  [
    "Promise",
    "WAWebOmittedConversationMetadataStorageTypes",
    "WAWebSignalCommonUtils",
    "WAWebSignalConst",
    "WAWebSignalStoreApi",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().toString(),
            a = yield (e || (e = n("Promise"))).all([
              o("WAWebSignalStoreApi").waSignalStore.getMeta(
                o("WAWebSignalConst").META_KEYS.REG_ID,
              ),
              o("WAWebSignalStoreApi").waSignalStore.getMeta(
                o("WAWebSignalConst").META_KEYS.STATIC_PUBKEY,
              ),
            ]),
            i = a[0],
            l = a[1];
          if (typeof i != "number" || l == null)
            throw r("err")(
              "Omitted metadata pairing credentials are unavailable",
            );
          var s = yield o("WAWebSignalCommonUtils").decryptRegistrationMaterial(
              l,
            ),
            u = yield self.crypto.subtle.digest("SHA-256", s),
            c = Array.from(new Uint8Array(u), function (e) {
              return e.toString(16).padStart(2, "0");
            }).join("");
          return o(
            "WAWebOmittedConversationMetadataStorageTypes",
          ).asOmittedMetadataPairingId(t + ":" + i + ":" + c);
        })),
        u.apply(this, arguments)
      );
    }
    l.getOmittedMetadataPairingId = s;
  },
  98,
);
