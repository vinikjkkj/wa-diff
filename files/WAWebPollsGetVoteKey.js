__d(
  "WAWebPollsGetVoteKey",
  ["WAWebLidMigrationUtils", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.parentMsgKey,
        n = e.sender,
        r = o("WAWebWidFactory").createWidFromWidLike(n);
      return (
        String(t) +
        "|" +
        String(o("WAWebLidMigrationUtils").toLid(r)) +
        "|" +
        String(o("WAWebLidMigrationUtils").toPn(r))
      );
    }
    l.getVoteKey = e;
  },
  98,
);
