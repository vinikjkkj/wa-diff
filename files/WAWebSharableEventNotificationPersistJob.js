__d(
  "WAWebSharableEventNotificationPersistJob",
  [
    "WAWebBackendApi",
    "WAWebDBSharableEventChange",
    "WAWebDBSharableEventDeletion",
    "WAWebDBSharableEventInvitee",
    "WAWebDBSharableEventMetadata",
    "WAWebSharableEventChangeFlags",
    "WAWebSharableEventInviteMessageRefreshJob",
    "WAWebSharableEventStorageEnums",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = await o(
          "WAWebDBSharableEventMetadata",
        ).upsertSharableEventMetadataIfNewer([e], { insertMissing: !0 }),
        r = n[0],
        a =
          r != null && r.previous == null && !c(e)
            ? await o("WAWebDBSharableEventChange").recordSharableEventChange(
                e.eventId,
                o("WAWebSharableEventChangeFlags").toSharableEventChangeFlags([
                  o("WAWebSharableEventStorageEnums").SharableEventChangeFlag
                    .NewEvent,
                ]),
                e.lastUpdatedTsUsec,
              )
            : null,
        i =
          t != null &&
          (await o(
            "WAWebDBSharableEventInvitee",
          ).seedSharableEventInviteeIfAbsent(t));
      (r == null && !i) ||
        o("WAWebBackendApi").frontendFireAndForget("applySharableEventUpdate", {
          events: r == null ? [] : [r.row],
          invitees: i && t != null ? [t] : [],
          unseenChanges: a == null ? [] : [a],
        });
    }
    async function s(e) {
      var t = await o(
          "WAWebDBSharableEventMetadata",
        ).upsertSharableEventMetadataIfNewer([e], { insertMissing: !1 }),
        n = t[0],
        r = n == null ? void 0 : n.previous;
      if (!(n == null || r == null)) {
        var a = c(e)
          ? null
          : await o("WAWebDBSharableEventChange").recordSharableEventChange(
              e.eventId,
              o(
                "WAWebSharableEventChangeFlags",
              ).computeSharableEventChangeFlags(r, n.row),
              e.lastUpdatedTsUsec,
            );
        o("WAWebBackendApi").frontendFireAndForget("applySharableEventUpdate", {
          events: [n.row],
          unseenChanges: a == null ? [] : [a],
        });
      }
    }
    async function u(e, t) {
      (await o("WAWebDBSharableEventDeletion").deleteSharableEventsLocally([e]),
        o("WAWebBackendApi").frontendFireAndForget("applySharableEventUpdate", {
          deletedEventIds: [e],
        }),
        await o(
          "WAWebSharableEventInviteMessageRefreshJob",
        ).markSharableEventInviteMessagesEnded([e], t));
    }
    function c(e) {
      return (
        e.creatorLid != null &&
        o("WAWebUserUtils").isSerializedWidMe(e.creatorLid)
      );
    }
    ((l.persistInvitedSharableEvent = e),
      (l.persistUpdatedSharableEvent = s),
      (l.deleteSharableEventFromNotification = u));
  },
  98,
);
