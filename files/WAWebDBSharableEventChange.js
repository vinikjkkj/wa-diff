__d(
  "WAWebDBSharableEventChange",
  [
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "WAWebSchemaSharableEventChange",
    "WAWebSharableEventChangeFlags",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      return o("WAWebDBSharableEvent").canUseSharableEventStorage()
        ? o("WAWebSchemaSharableEventChange")
            .getSharableEventChangeTable()
            .all()
        : [];
    }
    async function s(e, t, n) {
      if (t === 0 || !o("WAWebDBSharableEvent").canUseSharableEventStorage())
        return null;
      var r = null;
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            [
              o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
              o("WAWebDBSharableEvent").SHARABLE_EVENT_CHANGE_TABLE,
            ],
            async function (a) {
              var i,
                l,
                s = a[0],
                u = a[1],
                c = s,
                d = u,
                m = await Promise.all([c.get(e), d.get(e)]),
                p = m[0],
                _ = m[1];
              if (p != null) {
                var f = {
                  eventId: e,
                  changeFlags: o(
                    "WAWebSharableEventChangeFlags",
                  ).mergeSharableEventChangeFlags(
                    (i = _ == null ? void 0 : _.changeFlags) != null ? i : 0,
                    t,
                  ),
                  lastChangeTsUsec: Math.max(
                    (l = _ == null ? void 0 : _.lastChangeTsUsec) != null
                      ? l
                      : 0,
                    n,
                  ),
                };
                (await d.createOrReplace(f), (r = f));
              }
            },
          ),
        r
      );
    }
    async function u(e, t) {
      if (!o("WAWebDBSharableEvent").canUseSharableEventStorage()) return !1;
      var n = !1;
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            [o("WAWebDBSharableEvent").SHARABLE_EVENT_CHANGE_TABLE],
            async function (r) {
              var o = r[0],
                a = o,
                i = await a.get(e);
              i == null ||
                i.lastChangeTsUsec > t ||
                (await a.remove(e), (n = !0));
            },
          ),
        n
      );
    }
    ((l.getSharableEventChanges = e),
      (l.recordSharableEventChange = s),
      (l.markSharableEventChangeSeen = u));
  },
  98,
);
