__d(
  "WAWebPollsUseVoteCount",
  [
    "WAWebAddonHydrationUtils",
    "WAWebMsgType",
    "WAWebPollsPollVoteCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.id,
        a;
      t[0] !== n
        ? ((a = o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getForParentAddressingModeInsensitive([n])),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = i[0],
        u;
      t[2] !== l
        ? ((u = function () {
            return l.getVoteCount();
          }),
          (t[2] = l),
          (t[3] = u))
        : (u = t[3]);
      var c = r("useWAWebEventTargetValue")(l, "add remove reset", u),
        d,
        m;
      return (
        t[4] !== n
          ? ((d = function () {
              o("WAWebAddonHydrationUtils").hydrateAddons({
                ids: [n],
                hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
              });
            }),
            (m = [n]),
            (t[4] = n),
            (t[5] = d),
            (t[6] = m))
          : ((d = t[5]), (m = t[6])),
        s(d, m),
        c
      );
    }
    l.useVoteCount = u;
  },
  98,
);
