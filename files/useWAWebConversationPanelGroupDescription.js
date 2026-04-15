__d(
  "useWAWebConversationPanelGroupDescription",
  [
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGroupGatingUtils",
    "WAWebMsgType",
    "WAWebUserPrefsGeneral",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e
        ? ((n = function () {
            return !o("WAWebChatGetters").getIsGroup(e) ||
              o("WAWebGroupGatingUtils").getGroupDescriptionLength() <= 0 ||
              o("WAWebUserPrefsGeneral").getSeenGroupDesc(e.id)
              ? !1
              : (o("WAWebUserPrefsGeneral").setSeenGroupDesc(e.id),
                e.unreadCount === 0
                  ? !e.msgs.some(c)
                  : !o("WAWebFrontendChatGetters").getShouldShowUnreadDivider(
                      e,
                    ));
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = s(n),
        a = r[0],
        i = r[1],
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            i(!1);
          }),
          (t[2] = l))
        : (l = t[2]);
      var u = l,
        d;
      return (
        t[3] !== a ? ((d = [a, u]), (t[3] = a), (t[4] = d)) : (d = t[4]),
        d
      );
    }
    function c(e) {
      return (
        e.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION &&
        e.type !== o("WAWebMsgType").MSG_TYPE.GP2
      );
    }
    l.default = u;
  },
  98,
);
