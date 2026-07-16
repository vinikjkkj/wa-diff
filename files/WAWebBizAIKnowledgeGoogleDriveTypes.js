__d(
  "WAWebBizAIKnowledgeGoogleDriveTypes",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e.filter(function (e) {
        return e.sync_status === "SYNCING";
      }).length;
    }
    i.countSyncingGoogleDriveFiles = e;
  },
  66,
);
