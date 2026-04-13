__d(
  "WAWebChatLisFunctionalPageNav.react",
  ["WAWebChatlistPageNavigation.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.selection,
        r = e.setSelectedChat,
        a;
      t[0] !== n || t[1] !== r
        ? ((a = function (t) {
            o("WAWebChatlistPageNavigation.react").handlePageNavigation({
              event: t,
              direction: "down",
              selection: n,
              setSelectedChat: r,
            });
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a))
        : (a = t[2]);
      var i = a,
        l;
      t[3] !== n || t[4] !== r
        ? ((l = function (t) {
            o("WAWebChatlistPageNavigation.react").handlePageNavigation({
              event: t,
              direction: "up",
              selection: n,
              setSelectedChat: r,
            });
          }),
          (t[3] = n),
          (t[4] = r),
          (t[5] = l))
        : (l = t[5]);
      var s = l,
        u;
      return (
        t[6] !== i || t[7] !== s
          ? ((u = { handlePageDown: i, handlePageUp: s }),
            (t[6] = i),
            (t[7] = s),
            (t[8] = u))
          : (u = t[8]),
        u
      );
    }
    l.usePageNavigation = u;
  },
  98,
);
