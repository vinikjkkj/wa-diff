__d(
  "useWAWebChatsActivityIndicator",
  [
    "WAWebChatCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = o("react-compiler-runtime").c(3),
        t = c,
        n = s(t),
        r = n[0],
        a = n[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            a(t());
          }),
          (e[0] = i))
        : (i = e[0]);
      var l = i;
      o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "add remove reset change:showUnreadInTitle",
        l,
      );
      var u;
      return (
        e[1] !== r
          ? ((u = { unreadChatCount: r }), (e[1] = r), (e[2] = u))
          : (u = e[2]),
        u
      );
    }
    function c() {
      return o("WAWebChatCollection").ChatCollection.getUnreadCount();
    }
    l.useChatsActivityIndicator = u;
  },
  98,
);
