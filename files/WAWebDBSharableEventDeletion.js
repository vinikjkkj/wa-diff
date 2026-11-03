__d(
  "WAWebDBSharableEventDeletion",
  [
    "Promise",
    "WATimeUtils",
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map();
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = o("WATimeUtils").monotonicTime();
          (t.forEach(function (e) {
            return s.set(e, r);
          }),
            !(
              t.length === 0 ||
              !o("WAWebDBSharableEvent").canUseSharableEventStorage()
            ) &&
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
                )));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      var n = s.get(e);
      return n != null && n >= t;
    }
    ((l.deleteSharableEventsLocally = u), (l.wasSharableEventDeletedSince = d));
  },
  98,
);
