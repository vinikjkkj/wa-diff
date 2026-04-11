__d(
  "WAWebMarkUnreadMenuItem.react",
  [
    "fbt",
    "WAWebChatRefreshedIcon.react",
    "WAWebChatUnreadRefreshedIcon.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.disabled,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["unreadCount"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(e.chat, a),
        l;
      t[1] !== i.unreadCount || t[2] !== e.onMarkUnread
        ? ((l = e.onMarkUnread.bind(null, !i.unreadCount)),
          (t[1] = i.unreadCount),
          (t[2] = e.onMarkUnread),
          (t[3] = l))
        : (l = t[3]);
      var c = l,
        d = i.unreadCount
          ? o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon
          : o("WAWebChatUnreadRefreshedIcon.react").ChatUnreadRefreshedIcon,
        m;
      t[4] !== i.unreadCount
        ? ((m = i.unreadCount
            ? s._(/*BTDS*/ "Mark as read")
            : s._(/*BTDS*/ "Mark as unread")),
          (t[4] = i.unreadCount),
          (t[5] = m))
        : (m = t[5]);
      var p;
      return (
        t[6] !== n || t[7] !== c || t[8] !== d || t[9] !== m
          ? ((p = u.jsx(
              r("WDSMenuItem.react"),
              { Icon: d, title: m, onPress: c, testid: void 0, disabled: n },
              "MarkUnreadMenuItem",
            )),
            (t[6] = n),
            (t[7] = c),
            (t[8] = d),
            (t[9] = m),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    l.default = c;
  },
  226,
);
