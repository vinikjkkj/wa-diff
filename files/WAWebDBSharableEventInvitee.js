__d(
  "WAWebDBSharableEventInvitee",
  [
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "WAWebSchemaSharableEventInvitee",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (
        e.length === 0 ||
        !o("WAWebDBSharableEvent").canUseSharableEventStorage()
      )
        return [];
      var t = [];
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            [
              o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
              o("WAWebDBSharableEvent").SHARABLE_EVENT_INVITEE_TABLE,
            ],
            async function (n) {
              var r = n[0],
                a = n[1],
                i = r,
                l = a,
                s = await u(
                  i,
                  e.map(function (e) {
                    return e.eventId;
                  }),
                ),
                d = e.filter(function (e) {
                  return s.has(e.eventId);
                }),
                m = new Map(
                  (
                    await l.bulkGet(
                      d.map(
                        o("WAWebSchemaSharableEventInvitee")
                          .createSharableEventInviteePrimaryKey,
                      ),
                    )
                  )
                    .filter(Boolean)
                    .map(function (e) {
                      return [c(e), e];
                    }),
                );
              ((t = d.flatMap(function (e) {
                var t,
                  n = m.get(c(e));
                return n != null && n.lastUpdatedTsSec > e.lastUpdatedTsSec
                  ? []
                  : [
                      babelHelpers.extends({}, e, {
                        createdTsSec:
                          (t = n == null ? void 0 : n.createdTsSec) != null
                            ? t
                            : e.createdTsSec,
                      }),
                    ];
              })),
                t.length > 0 && (await l.bulkCreateOrReplace(t)));
            },
          ),
        t
      );
    }
    async function s(e) {
      if (!o("WAWebDBSharableEvent").canUseSharableEventStorage()) return !1;
      var t = !1;
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            [
              o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
              o("WAWebDBSharableEvent").SHARABLE_EVENT_INVITEE_TABLE,
            ],
            async function (n) {
              var r = n[0],
                a = n[1],
                i = r,
                l = a,
                s = await Promise.all([
                  i.get(e.eventId),
                  l.get(
                    o(
                      "WAWebSchemaSharableEventInvitee",
                    ).createSharableEventInviteePrimaryKey(e),
                  ),
                ]),
                u = s[0],
                c = s[1];
              u == null || c != null || (await l.createOrReplace(e), (t = !0));
            },
          ),
        t
      );
    }
    async function u(e, t) {
      var n = await e.bulkGet(Array.from(new Set(t)));
      return new Set(
        n.filter(Boolean).map(function (e) {
          return e.eventId;
        }),
      );
    }
    function c(e) {
      return e.eventId + "|" + e.inviteeLid;
    }
    ((l.upsertSharableEventInvitees = e),
      (l.seedSharableEventInviteeIfAbsent = s));
  },
  98,
);
