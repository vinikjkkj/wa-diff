__d(
  "WAWebDBSharableEventInviteLinkToken",
  [
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "WAWebSchemaSharableEventInviteLinkToken",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t;
      return o("WAWebDBSharableEvent").canUseSharableEventStorage()
        ? (t = await o("WAWebSchemaSharableEventInviteLinkToken")
            .getSharableEventInviteLinkTokenTable()
            .get(e)) == null
          ? void 0
          : t.token
        : null;
    }
    async function s(e, t) {
      if (!o("WAWebDBSharableEvent").canUseSharableEventStorage()) return !1;
      var n = !1;
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            [
              o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
              o("WAWebDBSharableEvent").SHARABLE_EVENT_INVITE_LINK_TOKEN_TABLE,
            ],
            async function (r) {
              var o = r[0],
                a = r[1],
                i = o,
                l = a;
              (await i.get(e)) != null &&
                (await l.createOrReplace({ eventId: e, token: t }), (n = !0));
            },
          ),
        n
      );
    }
    async function u(e) {
      o("WAWebDBSharableEvent").canUseSharableEventStorage() &&
        (await o("WAWebSchemaSharableEventInviteLinkToken")
          .getSharableEventInviteLinkTokenTable()
          .remove(e));
    }
    ((l.getSharableEventInviteLinkToken = e),
      (l.saveSharableEventInviteLinkToken = s),
      (l.clearSharableEventInviteLinkToken = u));
  },
  98,
);
