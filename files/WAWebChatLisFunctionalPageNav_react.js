__d(
  "WAWebChatLisFunctionalPageNav.react",
  ["WAWebChatlistPageNavigation.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = e.selection,
        n = e.setSelectedChat,
        r = s(
          function (e) {
            o("WAWebChatlistPageNavigation.react").handlePageNavigation({
              event: e,
              direction: "down",
              selection: t,
              setSelectedChat: n,
            });
          },
          [t, n],
        ),
        a = s(
          function (e) {
            o("WAWebChatlistPageNavigation.react").handlePageNavigation({
              event: e,
              direction: "up",
              selection: t,
              setSelectedChat: n,
            });
          },
          [t, n],
        );
      return { handlePageDown: r, handlePageUp: a };
    }
    l.usePageNavigation = u;
  },
  98,
);
