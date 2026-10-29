__d(
  "WAWebSchemaSharableEvent",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addIndex,
        a = t.addUserDefinedPrimaryKey;
      e.add("sharable-event")
        .version(o("WAWebModelStorageVersions").sharableEventCreateTable(), [
          a("eventId"),
          n("name"),
          n("description"),
          n("startTsSec"),
          n("endTsSec"),
          n("reminderTsSec"),
          n("maxAdditionalGuests"),
          n("createdTsSec"),
          n("creatorLid"),
          n("status"),
          n("locationName"),
          n("locationAddress"),
          n("locationWebUrl"),
          n("locationLatitude"),
          n("locationLongitude"),
          n("coverImageHandle"),
          n("coverImageUrl"),
          n("isPresetCoverImage"),
          n("callLinkToken"),
          n("callLinkMediaType"),
          n("callLinkWaitingRoomEnabled"),
          n("lastUpdatedTsUsec"),
          n("countGoing"),
          n("countMaybe"),
          n("countNotGoing"),
          n("countNoResponse"),
          n("totalInvitedCount"),
          n("lastInvitationUpdatedTsUsec"),
          r("startTsSec"),
          r("callLinkToken"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("sharable-event");
    }
    ((l.addTable = e), (l.getSharableEventTable = s));
  },
  98,
);
