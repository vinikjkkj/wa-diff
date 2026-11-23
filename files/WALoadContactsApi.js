__d(
  "WALoadContactsApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["contacts"],
          "readonly",
          function (e) {
            return e.stores.contacts.bulkGet(t).then(function (e) {
              return new Map(
                e.filter(Boolean).map(function (e) {
                  return [
                    e.contactJid,
                    {
                      contactJid: e.contactJid,
                      dhash: e.dhash,
                      lastSyncTs: e.lastSyncTs,
                    },
                  ];
                }),
              );
            });
          },
          o("WASignalDB").signalOp("loadContacts"),
        );
    };
    l.loadContacts = e;
  },
  98,
);
