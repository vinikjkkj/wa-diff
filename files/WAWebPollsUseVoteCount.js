__d(
  "WAWebPollsUseVoteCount",
  [
    "WAWebAddonHydrationUtils",
    "WAWebMsgType",
    "WAWebPollsPollVoteCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["id"]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebModelValues").useModelValues(e, n),
        i = a.id,
        l;
      t[1] !== i
        ? ((l = o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getForParentAddressingModeInsensitive([i])),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var u = l,
        c = u[0],
        d;
      t[3] !== c
        ? ((d = function () {
            return c.getVoteCount();
          }),
          (t[3] = c),
          (t[4] = d))
        : (d = t[4]);
      var m = r("useWAWebEventTargetValue")(c, "add remove reset", d),
        p,
        _;
      return (
        t[5] !== i
          ? ((p = function () {
              o("WAWebAddonHydrationUtils").hydrateAddons({
                ids: [i],
                hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
              });
            }),
            (_ = [i]),
            (t[5] = i),
            (t[6] = p),
            (t[7] = _))
          : ((p = t[6]), (_ = t[7])),
        s(p, _),
        m
      );
    }
    l.useVoteCount = u;
  },
  98,
);
