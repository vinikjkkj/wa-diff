__d(
  "WAWebDBSharableEventMetadata",
  [
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "WAWebSharableEventInviteMessageRefreshJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      countGoing: 0,
      countMaybe: 0,
      countNotGoing: 0,
      countNoResponse: 0,
      totalInvitedCount: 0,
      lastInvitationUpdatedTsUsec: 0,
    };
    async function s(e, t) {
      var n = t.insertMissing;
      if (
        e.length === 0 ||
        !o("WAWebDBSharableEvent").canUseSharableEventStorage()
      )
        return [];
      var r = [];
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            [o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE],
            async function (t) {
              var o = t[0],
                a = o,
                i = c(e),
                l = new Map(
                  (
                    await a.bulkGet(
                      i.map(function (e) {
                        return e.eventId;
                      }),
                    )
                  )
                    .filter(Boolean)
                    .map(function (e) {
                      return [e.eventId, e];
                    }),
                );
              ((r = i.flatMap(function (e) {
                return d(e, l.get(e.eventId), n);
              })),
                r.length > 0 &&
                  (await a.bulkCreateOrReplace(
                    r.map(function (e) {
                      return e.row;
                    }),
                  )));
            },
          ),
        await o(
          "WAWebSharableEventInviteMessageRefreshJob",
        ).refreshSharableEventInviteMessages(
          r.map(function (e) {
            return e.row;
          }),
        ),
        r
      );
    }
    async function u(e) {
      if (
        e.size === 0 ||
        !o("WAWebDBSharableEvent").canUseSharableEventStorage()
      )
        return [];
      var t = [];
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            [o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE],
            async function (n) {
              var r = n[0],
                o = r,
                a = (await o.bulkGet(Array.from(e.keys()))).filter(Boolean);
              ((t = a.flatMap(function (t) {
                var n = e.get(t.eventId) === !0;
                return (t.isScheduledCall === !0) === n
                  ? []
                  : [babelHelpers.extends({}, t, { isScheduledCall: n })];
              })),
                t.length > 0 && (await o.bulkCreateOrReplace(t)));
            },
          ),
        t
      );
    }
    function c(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = t.get(e.eventId);
          (n == null || e.lastUpdatedTsUsec > n.lastUpdatedTsUsec) &&
            t.set(e.eventId, e);
        }),
        Array.from(t.values())
      );
    }
    function d(t, n, r) {
      return n == null
        ? r
          ? [{ previous: null, row: babelHelpers.extends({}, e, t) }]
          : []
        : t.lastUpdatedTsUsec <= n.lastUpdatedTsUsec
          ? []
          : [{ previous: n, row: babelHelpers.extends({}, t, p(n), m(n)) }];
    }
    function m(e) {
      return e.isScheduledCall == null
        ? {}
        : { isScheduledCall: e.isScheduledCall };
    }
    function p(e) {
      return {
        countGoing: e.countGoing,
        countMaybe: e.countMaybe,
        countNotGoing: e.countNotGoing,
        countNoResponse: e.countNoResponse,
        totalInvitedCount: e.totalInvitedCount,
        lastInvitationUpdatedTsUsec: e.lastInvitationUpdatedTsUsec,
      };
    }
    ((l.upsertSharableEventMetadataIfNewer = s),
      (l.updateSharableEventsScheduledCall = u));
  },
  98,
);
