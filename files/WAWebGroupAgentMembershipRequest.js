__d(
  "WAWebGroupAgentMembershipRequest",
  ["WAWebBotGroupGatingUtils", "WAWebBotUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return !e.isFbidBot() || !t.isFbidBot() || e.equals(t)
        ? !1
        : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e) !==
            o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t) &&
            o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    l.isAgentRequestIncompatibleWithJoinedAgent = e;
  },
  98,
);
