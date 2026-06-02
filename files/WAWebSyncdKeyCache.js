__d(
  "WAWebSyncdKeyCache",
  ["WABase64", "WASyncdKeyTypes", "WAWebGetSyncKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    async function s(t) {
      var n,
        r = o("WABase64").encodeB64(o("WASyncdKeyTypes").fromSyncKeyId(t)),
        a = e.get(r);
      return a
        ? a.keyData
        : ((a =
            await o("WAWebGetSyncKey").getSyncKeyInTransaction_DO_NOT_USE(t)),
          a && e.set(r, a),
          (n = a) == null ? void 0 : n.keyData);
    }
    function u() {
      e = new Map();
    }
    ((l.getKeyData = s), (l.clearSyncKeysCache = u));
  },
  98,
);
