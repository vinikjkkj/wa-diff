__d(
  "EBLoadMostRecentSelfMinosEpoch",
  ["EBDB", "EBMinosTypes", "WALongInt", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e,
          t,
          n = yield o("EBDB").getEBDB(),
          r = yield n.store("secure_encrypted_backups_epochs").readAll(),
          a = Array.from(r)
            .map(function (e) {
              var t = e.epochAnonIdBlob,
                n = e.epochHead,
                r = e.epochId,
                a = e.epochRootKeyBlob;
              return n == null
                ? null
                : {
                    epochFbId: o("EBMinosTypes").unsafeCastToEpochFbId(
                      r.toString(),
                    ),
                    epochHead: o("EBMinosTypes").unsafeCastToEpochHead(n),
                    epochNumber:
                      o(
                        "EBMinosTypes",
                      ).unsafeCastToBase64StringIntToEpochNumber(t),
                    exportRootKey:
                      o("EBMinosTypes").unsafeCastToExportRootKey(a),
                  };
            })
            .filter(Boolean)
            .sort(function (e, t) {
              return (
                o("WALongInt").numberOrThrowIfTooLarge(t.epochNumber) -
                o("WALongInt").numberOrThrowIfTooLarge(e.epochNumber)
              );
            }),
          i = a[0];
        if (i != null)
          return babelHelpers.extends({}, i, {
            previousEpochHead:
              (e = (t = a[1]) == null ? void 0 : t.epochHead) != null
                ? e
                : null,
          });
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    l.loadMostRecentSelfMinosEpoch = e;
  },
  98,
);
