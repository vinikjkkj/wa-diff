__d(
  "WAWebGroupCatchUpButton.react",
  [
    "fbt",
    "WAWebChatUnreadCount.react",
    "WAWebJumpToButtons.stylex",
    "WAWebMentionsRefreshedIcon.react",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "fbs",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.handleJumpToMention,
        n = e.unreadMentionCount,
        a = e.xstyle,
        i = r("fbs")._(
          /*BTDS*/ '_j{"*":"{count} \\u0040 messages","_1":"1 \\u0040 message"}',
          [r("fbs")._plural(n, "count")],
        );
      return u.jsxs(r("WAWebUnstyledButton.react"), {
        xstyle: [
          o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
          o("WAWebUISpacing").uiPadding.all10,
          a,
        ],
        dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
        onClick: t,
        "aria-label": s._(/*BTDS*/ "Scroll to mentions"),
        children: [
          u.jsx(o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon, {
            xstyle: o("WAWebJumpToButtons.stylex").styles.iconColor,
            width: 24,
            height: 24,
          }),
          u.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "pop",
            xstyle: o("WAWebJumpToButtons.stylex").styles.unreadRefreshed,
            children: u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
              count: n,
              ariaLabel: i.toString(),
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
