__d(
  "WAWebDBSharableEventCreatorPushName",
  [
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "WAWebSchemaSharableEventCreatorPushName",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (
        e.length === 0 ||
        !o("WAWebDBSharableEvent").canUseSharableEventStorage()
      )
        return new Map();
      var t = await o("WAWebSchemaSharableEventCreatorPushName")
        .getSharableEventCreatorPushNameTable()
        .bulkGet(Array.from(new Set(e)));
      return new Map(
        t.filter(Boolean).map(function (e) {
          return [e.creatorLid, e];
        }),
      );
    }
    async function s(e) {
      if (!o("WAWebDBSharableEvent").canUseSharableEventStorage()) return !1;
      var t = !1;
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            [o("WAWebDBSharableEvent").SHARABLE_EVENT_CREATOR_PUSH_NAME_TABLE],
            async function (n) {
              var r = n[0],
                o = r,
                a = await o.get(e.creatorLid);
              (a != null && a.publishedTsUsec >= e.publishedTsUsec) ||
                (await o.createOrReplace(e), (t = !0));
            },
          ),
        t
      );
    }
    ((l.getSharableEventCreatorPushNames = e),
      (l.saveSharableEventCreatorPushNameIfNewer = s));
  },
  98,
);
