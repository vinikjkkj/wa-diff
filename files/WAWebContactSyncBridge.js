__d(
  "WAWebContactSyncBridge",
  ["WAWebLidAwareContactsDB", "WAWebSyncContactJob", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await r("WAWebLidAwareContactsDB").allPrimaryKeys();
      if (t.length > 0) {
        var n = t.map(o("WAWebWidFactory").createWid).filter(function (e) {
          return e.isEligibleForUSync();
        });
        return o("WAWebSyncContactJob").syncContactListInChunksJob(
          n,
          e,
          "full",
        );
      }
    }
    l.doFullContactSync = e;
  },
  98,
);
