__d(
  "WAWebOutContactBridgeApi",
  ["WAWebOutContactCollection", "WAWebOutContactModel"],
  function (t, n, r, o, a, i, l) {
    var e = {
      bulkUpsertOutContacts: function (t) {
        var e = t.contacts,
          n = e.map(function (e) {
            var t = e.firstName,
              n = e.fullName,
              o = e.id;
            return new (r("WAWebOutContactModel"))({
              id: o,
              fullName: n,
              firstName: t,
            });
          });
        o("WAWebOutContactCollection").OutContactCollection.add(n, {
          merge: !0,
        });
      },
      bulkRemoveOutContacts: function (t) {
        var e = t.ids;
        o("WAWebOutContactCollection").OutContactCollection.remove(e);
      },
    };
    l.OutContactBridgeApi = e;
  },
  98,
);
