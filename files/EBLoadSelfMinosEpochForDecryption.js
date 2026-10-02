__d(
  "EBLoadSelfMinosEpochForDecryption",
  ["EBDB", "EBMinosTypes", "WAResultOrError", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
        var t = yield o("EBDB").getEBDB(),
          n = yield t.store("secure_encrypted_backups_epochs").get(BigInt(e));
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
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    })();
    l.loadSelfMinosEpochForDecryption = e;
  },
  98,
);
