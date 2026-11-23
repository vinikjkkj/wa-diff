__d(
  "EBLoadSelfMinosEpochForDecryption",
  ["EBDB", "EBMinosTypes", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t) {
      var e = await o("EBDB").getEBDB(),
        n = await e.store("secure_encrypted_backups_epochs").get(BigInt(t));
      if (n == null)
        return o("WAResultOrError").makeError("no-self-epoch-found");
      var r = n.epochHead,
        a = n.epochRootKeyBlob;
      return r != null
        ? o("WAResultOrError").makeResult({
            exportEpochHead: o("EBMinosTypes").unsafeCastToEpochHead(r),
            exportRootKey: o("EBMinosTypes").unsafeCastToExportRootKey(a),
          })
        : o("WAResultOrError").makeResult({
            exportEpochHead: null,
            exportRootKey: o("EBMinosTypes").unsafeCastToExportRootKey(a),
          });
    };
    l.loadSelfMinosEpochForDecryption = e;
  },
  98,
);
