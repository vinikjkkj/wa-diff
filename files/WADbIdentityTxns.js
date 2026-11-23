__d(
  "WADbIdentityTxns",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e.identity.bulkGet(t).then(function (e) {
        return e
          .map(function (e) {
            if (e != null) return { id: e.deviceJid, identity: e.identity };
          })
          .filter(Boolean);
      });
    }
    i.bulkGetIdentities = e;
  },
  66,
);
