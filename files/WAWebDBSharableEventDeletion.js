__d(
  "WAWebDBSharableEventDeletion",
  ["WATimeUtils", "WAWebDBSharableEvent", "WAWebModelStorageUtils"],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    async function s(t) {
      var n = o("WATimeUtils").monotonicTime();
      (t.forEach(function (t) {
        return e.set(t, n);
      }),
        !(
          t.length === 0 ||
          !o("WAWebDBSharableEvent").canUseSharableEventStorage()
        ) &&
          (await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              [
                o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
                o("WAWebDBSharableEvent").SHARABLE_EVENT_INVITEE_TABLE,
                o("WAWebDBSharableEvent").SHARABLE_EVENT_CHANGE_TABLE,
                o("WAWebDBSharableEvent")
                  .SHARABLE_EVENT_INVITE_LINK_TOKEN_TABLE,
              ],
              async function (e) {
                var n = e[0],
                  r = e[1],
                  o = e[2],
                  a = e[3],
                  i = n,
                  l = r,
                  s = o,
                  u = a;
                await Promise.all([
                  i.bulkRemove(t),
                  l.bulkRemoveByIndex(["eventId"], [].concat(t)),
                  s.bulkRemove(t),
                  u.bulkRemove(t),
                ]);
              },
            )));
    }
    function u(t, n) {
      var r = e.get(t);
      return r != null && r >= n;
    }
    ((l.deleteSharableEventsLocally = s), (l.wasSharableEventDeletedSince = u));
  },
  98,
);
