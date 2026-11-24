__d(
  "WAWebGroupStoreServiceWebLive",
  [
    "WAWebApiUnjoinedSubgroupMetadataStore",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupDatabaseJob",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupStoreService",
    "WebDi.Async",
    "WebDi.Fx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGroupStoreService").GroupStoreService.make(function* () {
      var e = {
        bulkGetGroupMetadata: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(t);
          });
        },
        getGroupMetadataJob: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebGroupDatabaseJob").getGroupMetadataJob(t);
          });
        },
        getGroupParticipantJob: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebGroupDatabaseJob").getGroupParticipantJob(t);
          });
        },
        updateGroupParticipantTableWithoutDeviceSyncJob: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o(
              "WAWebGroupDatabaseJob",
            ).updateGroupParticipantTableWithoutDeviceSyncJob(t);
          });
        },
        getGroupHistoryParticipantMetadataForGroup: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o(
              "WAWebGroupHistoryParticipantJob",
            ).getGroupHistoryParticipantMetadataForGroup(t);
          });
        },
        removeUnjoinedSubgroupMetadataFromStorage: function (t) {
          return o("WebDi.Fx").sync(function () {
            return o(
              "WAWebApiUnjoinedSubgroupMetadataStore",
            ).removeUnjoinedSubgroupMetadataFromStorage(t);
          });
        },
      };
      return e;
    });
    l.GroupStoreServiceWebLive = e;
  },
  98,
);
