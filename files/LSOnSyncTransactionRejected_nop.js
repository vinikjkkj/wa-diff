__d(
  "LSOnSyncTransactionRejected.nop",
  ["LSIntEnum", "LSSyncError", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (r, a, i, l) {
        return (
          o("LSSyncError").recordSyncError(
            (s || (s = o("LSIntEnum"))).unwrapIntEnum(i),
            l,
          ),
          (e || (e = n("Promise"))).resolve()
        );
      };
    ((u.__nop_name__ = "LSOnSyncTransactionRejected"), (l.default = u));
  },
  98,
);
