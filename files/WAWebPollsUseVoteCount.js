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
      var t = o("react-compiler-runtime").c(8),
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
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["add", "remove", "reset"]), (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] !== l
        ? ((c = function () {
            return l.getVoteCount();
          }),
          (t[3] = l),
          (t[4] = c))
        : (c = t[4]);
      var d = r("useWAWebEventTargetValue")(l, u, c),
        m,
        p;
      return (
        t[5] !== n
          ? ((m = function () {
              o("WAWebAddonHydrationUtils").hydrateAddons({
                ids: [n],
                hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
              });
            }),
            (p = [n]),
            (t[5] = n),
            (t[6] = m),
            (t[7] = p))
          : ((m = t[6]), (p = t[7])),
        s(m, p),
        d
      );
    }
    l.useVoteCount = u;
  },
  98,
);
