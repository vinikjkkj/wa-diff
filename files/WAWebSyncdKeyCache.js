__d(
  "WAWebSyncdKeyCache",
  ["WABase64", "WASyncdKeyTypes", "WAWebGetSyncKey", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = o("WABase64").encodeB64(o("WASyncdKeyTypes").fromSyncKeyId(t)),
            a = e.get(r);
          return a
            ? a.keyData
            : ((a =
                yield o("WAWebGetSyncKey").getSyncKeyInTransaction_DO_NOT_USE(
                  t,
                )),
              a && e.set(r, a),
              (n = a) == null ? void 0 : n.keyData);
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      e = new Map();
    }
    ((l.getKeyData = s), (l.clearSyncKeysCache = c));
  },
  98,
);
