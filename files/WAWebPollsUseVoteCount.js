__d(
  "WAWebPollsUseVoteCount",
  [
    "WAWebAddonHydrationUtils",
    "WAWebMsgType",
    "WAWebPollsPollVoteCollection",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("useWAWebModelValues").useModelValues(e, ["id"]),
        n = t.id,
        a = o(
          "WAWebPollsPollVoteCollection",
        ).PollVoteCollection.getForParentAddressingModeInsensitive([n]),
        i = a[0],
        l = r("useWAWebEventTargetValue")(i, "add remove reset", function () {
          return i.getVoteCount();
        });
      return (
        s(
          function () {
            o("WAWebAddonHydrationUtils").hydrateAddons({
              ids: [n],
              hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            });
          },
          [n],
        ),
        l
      );
    }
    l.useVoteCount = u;
  },
  98,
);
