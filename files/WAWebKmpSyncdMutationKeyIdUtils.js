__d(
  "WAWebKmpSyncdMutationKeyIdUtils",
  ["WASyncdKeyTypes", "WAWebKmpKotlinUtils", "wa-kmp-syncd-engine-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return new (o("wa-kmp-syncd-engine-api").KmpSyncdMutationKeyId)(
        o("WAWebKmpKotlinUtils").asKmpByteArray(
          o("WASyncdKeyTypes").fromSyncKeyId(e),
        ),
      );
    }
    function s(e) {
      return o("WASyncdKeyTypes").toSyncKeyId(
        o("WAWebKmpKotlinUtils").asUint8Array(e.bytes).buffer,
      );
    }
    function u(e) {
      return o("WASyncdKeyTypes").toSyncKeyData(
        o("WAWebKmpKotlinUtils").asUint8Array(e.keyData).buffer,
      );
    }
    function c(e) {
      return new (o("wa-kmp-syncd-engine-api").KmpSyncdMutationKeyData)(
        o("WAWebKmpKotlinUtils").asKmpByteArray(
          o("WASyncdKeyTypes").fromSyncKeyData(e),
        ),
      );
    }
    function d(t, n) {
      return new (o("wa-kmp-syncd-engine-api").KmpSyncdMutationKey)(e(t), c(n));
    }
    ((l.toKmpSyncdMutationKeyId = e),
      (l.toSyncdKeyId = s),
      (l.toSyncdKeyData = u),
      (l.toKmpSyncdMutationKey = d));
  },
  98,
);
