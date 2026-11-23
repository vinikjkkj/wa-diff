__d(
  "WAWebPollsUseVoteCount",
  [
    "WAWebAddonHydrationUtils",
    "WAWebMsgType",
    "WAWebPollsPollVoteCollection",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o(
          "WAWebPollsPollVoteCollection",
        ).PollVoteCollection.getForParentAddressingModeInsensitive([e]),
        n = t[0],
        a = r("useWAWebEventTargetValue")(
          n,
          ["add", "remove", "reset"],
          function () {
            return n.getVoteCount();
          },
        );
      return (
        s(
          function () {
            o("WAWebAddonHydrationUtils").hydrateAddons({
              ids: [e],
              hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            });
          },
          [e],
        ),
        a
      );
    }
    l.useVoteCount = u;
  },
  98,
);
