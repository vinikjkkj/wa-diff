__d(
  "WAWebVoipCreateCallLink",
  [
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebVoipCreateCallLinkJob",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var u = yield o("WAWebVoipCreateCallLinkJob").createCallLinkJob({
            callType: t,
            eventStartTime: n,
            creatorUsername: i,
            requireApproval: r,
          });
          return u;
        })),
        s.apply(this, arguments)
      );
    }
    l.createCallLink = e;
  },
  98,
);
