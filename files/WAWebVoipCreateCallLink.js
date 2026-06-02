__d(
  "WAWebVoipCreateCallLink",
  [
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebVoipCreateCallLinkJob",
    "WAWebVoipGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.callType,
        n = e.eventStartTime,
        r = e.requireApproval,
        a = o("WAWebContactCollection").ContactCollection.getMeContact(),
        i;
      if (a != null && o("WAWebVoipGatingUtils").usernameCallingEnabled()) {
        var l = o("WAWebLidMigrationUtils").toUserLid(a.id),
          s = o("WAWebFrontendContactGetters").getUsername(a);
        s != null && l != null && (i = s);
      }
      var u = await o("WAWebVoipCreateCallLinkJob").createCallLinkJob({
        callType: t,
        eventStartTime: n,
        creatorUsername: i,
        requireApproval: r,
      });
      return u;
    }
    l.createCallLink = e;
  },
  98,
);
