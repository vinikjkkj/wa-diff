__d(
  "WALoadIdentitiesApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["identity"],
            "readonly",
            async function (e) {
              var n = await e.stores.identity.readIndex("userJid", [t]);
              return new Map(
                n.filter(Boolean).map(function (e) {
                  return [e.deviceJid, e.identity];
                }),
              );
            },
            o("WASignalDB").signalOp("loadIdentities"),
          );
      },
      s = function (t) {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["identity"],
            "readonly",
            async function (e) {
              var n = await Promise.all(
                  t.map(function (t) {
                    return e.stores.identity.readIndex("userJid", [t]);
                  }),
                ),
                r = new Map();
              for (var o of n)
                for (var a of o)
                  if (a != null) {
                    var i = r.get(a.userJid);
                    (i == null && (i = new Map()),
                      i.set(a.deviceJid, a.identity),
                      r.set(a.userJid, i));
                  }
              return r;
            },
            o("WASignalDB").signalOp("bulkLoadIdentities"),
          );
      };
    ((l.loadIdentities = e), (l.bulkLoadIdentities = s));
  },
  98,
);
