__d(
  "MAWKeychainCrypto",
  [
    "FBLogger",
    "MAWCryptoConsts",
    "MAWKeychainUtil",
    "MAWSubtleCrypto",
    "MAWWebInitDataHelpers",
    "WABase64",
    "getErrorSafe",
    "memoizeOneWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("MAWKeychainUtil").makeAAD(
      o("MAWCryptoConsts").VERSION,
      o("MAWCryptoConsts").CIPHER_ID,
    );
    function s(t, n) {
      var a = o("MAWKeychainUtil").getBufferWithRandomValuesFromLength(
          o("MAWCryptoConsts").AES_GCM_IV_LENGTH_IN_BYTES,
        ),
        i = e;
      return o("MAWSubtleCrypto")
        .MAWSubtleCrypto.encrypt(
          {
            additionalData: i,
            iv: new Uint8Array(a),
            name: o("MAWCryptoConsts").AES_GCM,
            tagLength: o("MAWCryptoConsts").AES_GCM_TAG_LENGTH,
          },
          t,
          n,
        )
        .then(function (e) {
          var t = o("MAWKeychainUtil").mergeBuffers([i, a, e]);
          return o("WABase64").encodeB64(t);
        })
        .catch(function (e) {
          var n = r("getErrorSafe")(e);
          throw r("FBLogger")("messenger_web")
            .catching(n)
            .mustfixThrow(
              "Failed to encryptDataToStringBuffer",
              typeof t,
              t.constructor.name,
            );
        });
    }
    async function u(e, t) {
      var n,
        r = new Uint8Array(o("WABase64").decodeB64(t)),
        a = r.subarray(
          0,
          (n = o("MAWCryptoConsts")).ADDITIONAL_DATA_LENGTH_IN_BYTES,
        ),
        i = r.subarray(
          n.ADDITIONAL_DATA_LENGTH_IN_BYTES,
          n.AES_GCM_IV_LENGTH_IN_BYTES + n.ADDITIONAL_DATA_LENGTH_IN_BYTES,
        ),
        l = r.subarray(
          n.AES_GCM_IV_LENGTH_IN_BYTES + n.ADDITIONAL_DATA_LENGTH_IN_BYTES,
        ),
        s = await o("MAWSubtleCrypto").MAWSubtleCrypto.decrypt(
          {
            additionalData: a,
            iv: i,
            name: n.AES_GCM,
            tagLength: n.AES_GCM_TAG_LENGTH,
          },
          e,
          l,
        );
      return s;
    }
    function c(e) {
      var t = o("MAWWebInitDataHelpers").getAccountKeysString(e);
      return t.map(function (e) {
        var t = o("MAWKeychainUtil").fromHexString(e);
        if (t == null)
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "Invalid value for account key. Is empty=" +
              String(e.length === 0) +
              ";",
          );
        return t.buffer;
      });
    }
    function d(e) {
      return Promise.all(
        c(e).map(function (e) {
          return o("MAWSubtleCrypto").MAWSubtleCrypto.importKey(
            "raw",
            e,
            { name: o("MAWCryptoConsts").AES_GCM },
            !1,
            ["encrypt", "decrypt"],
          );
        }),
      );
    }
    function m() {
      return o("WABase64").encodeB64(
        o("MAWKeychainUtil").getBufferWithRandomValuesFromLength(
          o("MAWCryptoConsts").HKDF_SEED_LENGTH_IN_BYTES,
        ),
      );
    }
    async function p(e) {
      var t = o("WABase64").decodeB64(e);
      try {
        var n = await o("MAWSubtleCrypto").MAWSubtleCrypto.importKey(
          "raw",
          t,
          { name: o("MAWCryptoConsts").HKDF },
          !1,
          ["deriveKey"],
        );
        return n;
      } catch (e) {
        var a = r("getErrorSafe")(e);
        throw (
          r("FBLogger")("messenger_web")
            .catching(a)
            .mustfix("Failed to importBrowserEncryptionKey"),
          a
        );
      }
    }
    function _() {
      return o("MAWKeychainUtil").getBufferWithRandomValuesFromLength(
        o("MAWCryptoConsts").HKDF_SEED_LENGTH_IN_BYTES,
      );
    }
    function f(e, t) {
      var n;
      return o("MAWSubtleCrypto")
        .MAWSubtleCrypto.deriveKey(
          {
            hash: { name: (n = o("MAWCryptoConsts")).SHA256 },
            info: n.HKDF_INFO,
            name: n.HKDF,
            salt: t,
          },
          e,
          { length: n.AES_GCM_KEY_LENGTH, name: n.AES_GCM },
          !0,
          ["encrypt", "decrypt"],
        )
        .then(function (e) {
          return o("MAWSubtleCrypto").MAWSubtleCrypto.exportKey("raw", e);
        });
    }
    function g(e) {
      var t = e.slice(0, o("MAWCryptoConsts").ADDITIONAL_DATA_LENGTH_IN_BYTES),
        n = new DataView(t).getUint8(0);
      if (n === 0) {
        var r,
          a = e.slice(
            (r = o("MAWCryptoConsts")).ADDITIONAL_DATA_LENGTH_IN_BYTES,
            r.ADDITIONAL_DATA_LENGTH_IN_BYTES * 2,
          );
        return {
          aadLengthInBytes:
            r.ADDITIONAL_DATA_LENGTH_IN_BYTES * 2 +
            r.EXTRA_ADDITIONAL_DATA_LENGTH_IN_BYTES,
          keyVersion: new DataView(a).getUint8(0),
          originRandomisedVersion: new DataView(e).getUint32(
            r.ADDITIONAL_DATA_LENGTH_IN_BYTES * 2,
            !0,
          ),
        };
      }
      return {
        aadLengthInBytes: o("MAWCryptoConsts").ADDITIONAL_DATA_LENGTH_IN_BYTES,
        keyVersion: n,
      };
    }
    function h(e) {
      return g(e);
    }
    var y = r("memoizeOneWithArgs")(function (e) {
      return d(e);
    });
    async function C(e) {
      var t = o("WABase64").decodeB64(e),
        n = await o("MAWSubtleCrypto").MAWSubtleCrypto.digest(
          o("MAWCryptoConsts").SHA256,
          t,
        );
      return o("WABase64").encodeB64(n);
    }
    ((l.ADDITIONAL_DATA = e),
      (l.encryptDataToStringBuffer = s),
      (l.decryptDataToArrayBuffer = u),
      (l.getAccountKeysBuffers = c),
      (l.genAccountKeys = d),
      (l.genBrowserEncryptionKeyString = m),
      (l.importBrowserEncryptionKey = p),
      (l.genDatabaseEncryptionSeed = _),
      (l.genDatabaseEncryptionKey = f),
      (l.getKeyVersionFromCipherDataString = h),
      (l.getAccountKeys = y),
      (l.generateHashString = C));
  },
  98,
);
