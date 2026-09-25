__d(
  "WAWebCallLinkActionJourneyFields",
  [
    "WARandomHex",
    "WAWebCallUserJourneyGating",
    "WAWebGetSharedSessionId",
    "WAWebUserJourneyEventMs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WARandomHex").randomHex(16);
    }
    function s(e) {
      if (!o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
        return {};
      var t = {
          appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
          userJourneyFunnelId: e,
        },
        n = o("WAWebUserJourneyEventMs").userJourneyEventMs();
      return (n != null && (t.userJourneyEventMs = n), t);
    }
    ((l.newCallLinkActionFunnelId = e), (l.callLinkActionJourneyFields = s));
  },
  98,
);
