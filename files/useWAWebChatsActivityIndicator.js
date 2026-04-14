__d(
  "useWAWebChatsActivityIndicator",
  ["WAWebChatCollection", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = function () {
          return o("WAWebChatCollection").ChatCollection.getUnreadCount();
        },
        t = s(e),
        n = t[0],
        r = t[1],
        a = function () {
          r(e());
        };
      return (
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add remove reset change:showUnreadInTitle",
          a,
        ),
        { unreadChatCount: n }
      );
    }
    l.useChatsActivityIndicator = u;
  },
  98,
);
