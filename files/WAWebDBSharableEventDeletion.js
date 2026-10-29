__d(
  "WAWebDBSharableEventDeletion",
  [
    "Promise",
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t.length === 0 ||
            !o("WAWebDBSharableEvent").canUseSharableEventStorage() ||
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_INVITEE_TABLE,
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_CHANGE_TABLE,
                  o("WAWebDBSharableEvent")
                    .SHARABLE_EVENT_INVITE_LINK_TOKEN_TABLE,
                ],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (r) {
                      var o = r[0],
                        a = r[1],
                        i = r[2],
                        l = r[3],
                        s = o,
                        u = a,
                        c = i,
                        d = l;
                      yield (e || (e = n("Promise"))).all([
                        s.bulkRemove(t),
                        u.bulkRemoveByIndex(["eventId"], [].concat(t)),
                        c.bulkRemove(t),
                        d.bulkRemove(t),
                      ]);
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ));
        })),
        u.apply(this, arguments)
      );
    }
    l.deleteSharableEventsLocally = s;
  },
  98,
);
