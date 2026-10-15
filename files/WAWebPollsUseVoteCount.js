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
        n;
      t[0] !== e
        ? ((n = o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getForParentAddressingModeInsensitive([e])),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var a = n,
        i = a[0],
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["add", "remove", "reset"]), (t[2] = l))
        : (l = t[2]);
      var u;
      t[3] !== i
        ? ((u = function () {
            return i.getVoteCount();
          }),
          (t[3] = i),
          (t[4] = u))
        : (u = t[4]);
      var c = r("useWAWebEventTargetValue")(i, l, u),
        d,
        m;
      return (
        t[5] !== e
          ? ((d = function () {
              o("WAWebAddonHydrationUtils").hydrateAddons({
                ids: [e],
                hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
              });
            }),
            (m = [e]),
            (t[5] = e),
            (t[6] = d),
            (t[7] = m))
          : ((d = t[6]), (m = t[7])),
        s(d, m),
        c
      );
    }
    l.useVoteCount = u;
  },
  98,
);
