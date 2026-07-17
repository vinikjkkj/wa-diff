__d(
  "WAWebBizAIKnowledgeGoogleDriveTypes",
  ["countWhere"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r("countWhere")(e, function (e) {
        return e.sync_status === "SYNCING";
      });
    }
    l.countSyncingGoogleDriveFiles = e;
  },
  98,
);
