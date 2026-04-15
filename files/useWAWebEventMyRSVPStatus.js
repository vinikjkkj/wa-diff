__d(
  "useWAWebEventMyRSVPStatus",
  [
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
    "useWAWebEventResponses",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = o("react-compiler-runtime").c(2),
        r = o("useWAWebEventResponses").useEventResponses(e),
        a;
      n[0] !== r ? ((a = r.find(s)), (n[0] = r), (n[1] = a)) : (a = n[1]);
      var i = a;
      return (t = i == null ? void 0 : i.eventResponse) != null
        ? t
        : o("WAWebProtobufsE2E.pb")
            .Message$EventResponseMessage$EventResponseType.UNKNOWN;
    }
    function s(e) {
      return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
    }
    l.useEventMyRSVPStatus = e;
  },
  98,
);
