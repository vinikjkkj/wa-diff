__d(
  "WAWebLidStatusMigrationKeyUtils",
  ["WAWebLidStatusMigrationUtils", "WAWebMsgKey"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.remote.isStatus()
        ? new (r("WAWebMsgKey"))({
            fromMe: e.fromMe,
            remote: e.remote,
            id: e.id,
            participant: e.participant
              ? o("WAWebLidStatusMigrationUtils").matWidConvert(e.participant)
              : void 0,
          })
        : e;
    }
    l.matKeyConvert = e;
  },
  98,
);
