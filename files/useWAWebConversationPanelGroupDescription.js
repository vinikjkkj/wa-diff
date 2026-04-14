__d(
  "useWAWebConversationPanelGroupDescription",
  [
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGroupGatingUtils",
    "WAWebMsgType",
    "WAWebUserPrefsGeneral",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = s(function () {
          return !o("WAWebChatGetters").getIsGroup(e) ||
            o("WAWebGroupGatingUtils").getGroupDescriptionLength() <= 0 ||
            o("WAWebUserPrefsGeneral").getSeenGroupDesc(e.id)
            ? !1
            : (o("WAWebUserPrefsGeneral").setSeenGroupDesc(e.id),
              e.unreadCount === 0
                ? !e.msgs.some(function (e) {
                    return (
                      e.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION &&
                      e.type !== o("WAWebMsgType").MSG_TYPE.GP2
                    );
                  })
                : !o("WAWebFrontendChatGetters").getShouldShowUnreadDivider(e));
        }),
        n = t[0],
        r = t[1],
        a = function () {
          r(!1);
        };
      return [n, a];
    }
    l.default = u;
  },
  98,
);
