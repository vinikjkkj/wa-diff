__d(
  "useWAWebEventMyRSVPStatus",
  ["WAWebProtobufsE2E.pb", "WAWebUserPrefsMeUser", "useWAWebEventResponses"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = o("useWAWebEventResponses").useEventResponses(e),
        r = n.find(function (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
        });
      return (t = r == null ? void 0 : r.eventResponse) != null
        ? t
        : o("WAWebProtobufsE2E.pb")
            .Message$EventResponseMessage$EventResponseType.UNKNOWN;
    }
    l.useEventMyRSVPStatus = e;
  },
  98,
);
