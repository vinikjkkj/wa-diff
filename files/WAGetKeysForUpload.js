__d(
  "WAGetKeysForUpload",
  [
    "Promise",
    "WACryptoLibraryConfig",
    "WALoggerTag",
    "WAResultOrError",
    "WASignalKeys",
    "WATagsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WATagsLogger").TAGS([
        r("WALoggerTag").PrekeyGenerateAndUpload,
        r("WALoggerTag").SignedPrekey,
      ]);
    function c(t, r) {
      return (s || (s = n("Promise")))
        .all([t.storage.loadPreKeys(r), d()])
        .then(function (n) {
          var r = n[0],
            a = r.preKeys,
            i = r.signedPreKey,
            l = n[1],
            s = [];
          return (
            a.forEach(function (t) {
              var n = o("WASignalKeys").deserializePreKey(t);
              n == null
                ? u.ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to deserialize prekey received from the db",
                      ])),
                  )
                : s.push(n);
            }),
            o("WAResultOrError").makeResult(
              babelHelpers.extends({}, l != null ? l : {}, {
                regInfo: t.regInfo,
                keyType: o("WASignalKeys").KEY_TYPE,
                preKeys: s,
                signedPreKey: i,
              }),
            )
          );
        });
    }
    function d() {
      var e = o("WACryptoLibraryConfig").getCryptoLibraryConfig(),
        t = e.isPqKeysUploadEnabled,
        r = e.loadPqKeysForDigest;
      return t !== !0 || r == null
        ? (s || (s = n("Promise"))).resolve(null)
        : r();
    }
    l.getKeysForUpload = c;
  },
  98,
);
