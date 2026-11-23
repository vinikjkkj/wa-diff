__d(
  "WAWebDBSharableEventInvitationList",
  [
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "WAWebSchemaSharableEventInvitee",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return o("WAWebDBSharableEvent").canUseSharableEventStorage()
        ? o("WAWebSchemaSharableEventInvitee")
            .getSharableEventInviteeTable()
            .equals(["eventId"], e)
        : [];
    }
    async function s(e, t) {
      if (
        e.length === 0 ||
        !o("WAWebDBSharableEvent").canUseSharableEventStorage()
      )
        return [];
      var n = await o("WAWebSchemaSharableEventInvitee")
        .getSharableEventInviteeTable()
        .bulkGet(
          e.map(function (e) {
            return o(
              "WAWebSchemaSharableEventInvitee",
            ).createSharableEventInviteePrimaryKey({
              eventId: e,
              inviteeLid: t,
            });
          }),
        );
      return n.filter(Boolean);
    }
    async function u(e, t, n) {
      if (!o("WAWebDBSharableEvent").canUseSharableEventStorage()) return null;
      var r = null;
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            [
              o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
              o("WAWebDBSharableEvent").SHARABLE_EVENT_INVITEE_TABLE,
            ],
            async function (o) {
              var a = o[0],
                i = o[1],
                l = a,
                s = i,
                u = await l.get(e);
              if (
                !(
                  u == null ||
                  t.lastInvitationUpdatedTsUsec <= u.lastInvitationUpdatedTsUsec
                )
              ) {
                var c = babelHelpers.extends({}, u, t);
                (await l.createOrReplace(c),
                  await s.bulkRemoveByIndex(["eventId"], [e]),
                  n.length > 0 &&
                    (await s.bulkCreateOrReplace(
                      n.map(function (t) {
                        return babelHelpers.extends({}, t, { eventId: e });
                      }),
                    )),
                  (r = c));
              }
            },
          ),
        r
      );
    }
    ((l.getSharableEventInvitees = e),
      (l.getSharableEventInviteeRowsFor = s),
      (l.replaceSharableEventInvitationsIfNewer = u));
  },
  98,
);
