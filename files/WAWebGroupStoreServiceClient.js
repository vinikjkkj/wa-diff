__d(
  "WAWebGroupStoreServiceClient",
  ["WAWebGroupStoreService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        bulkGetGroupMetadata: function (n) {
          return e(o("WAWebGroupStoreService").GroupStoreService, function (e) {
            return e.bulkGetGroupMetadata(n);
          });
        },
        getGroupMetadataJob: function (n) {
          return e(o("WAWebGroupStoreService").GroupStoreService, function (e) {
            return e.getGroupMetadataJob(n);
          });
        },
        getGroupParticipantJob: function (n) {
          return e(o("WAWebGroupStoreService").GroupStoreService, function (e) {
            return e.getGroupParticipantJob(n);
          });
        },
        updateGroupParticipantTableWithoutDeviceSyncJob: function (n) {
          return e(o("WAWebGroupStoreService").GroupStoreService, function (e) {
            return e.updateGroupParticipantTableWithoutDeviceSyncJob(n);
          });
        },
        getGroupHistoryParticipantMetadataForGroup: function (n) {
          return e(o("WAWebGroupStoreService").GroupStoreService, function (e) {
            return e.getGroupHistoryParticipantMetadataForGroup(n);
          });
        },
        removeUnjoinedSubgroupMetadataFromStorage: function (n) {
          return e(o("WAWebGroupStoreService").GroupStoreService, function (e) {
            return e.removeUnjoinedSubgroupMetadataFromStorage(n);
          });
        },
      };
    }
    l.groupStoreServiceClient = e;
  },
  98,
);
