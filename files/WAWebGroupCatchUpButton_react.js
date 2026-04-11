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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.handleJumpToMention,
        a = e.unreadMentionCount,
        i = e.xstyle,
        l;
      t[0] !== a
        ? ((l = r("fbs")._(
            /*BTDS*/ '_j{"*":"{count} \\u0040 messages","_1":"1 \\u0040 message"}',
            [r("fbs")._plural(a, "count")],
          )),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        d;
      t[2] !== i
        ? ((d = [
            o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
            o("WAWebUISpacing").uiPadding.all10,
            i,
          ]),
          (t[2] = i),
          (t[3] = d))
        : (d = t[3]);
      var m, p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Scroll to mentions")),
          (p = u.jsx(
            o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon,
            {
              xstyle: o("WAWebJumpToButtons.stylex").styles.iconColor,
              width: 24,
              height: 24,
            },
          )),
          (t[4] = m),
          (t[5] = p))
        : ((m = t[4]), (p = t[5]));
      var _;
      t[6] !== c ? ((_ = c.toString()), (t[6] = c), (t[7] = _)) : (_ = t[7]);
      var f;
      t[8] !== _ || t[9] !== a
        ? ((f = u.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "pop",
            xstyle: o("WAWebJumpToButtons.stylex").styles.unreadRefreshed,
            children: u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
              count: a,
              ariaLabel: _,
            }),
          })),
          (t[8] = _),
          (t[9] = a),
          (t[10] = f))
        : (f = t[10]);
      var g;
      return (
        t[11] !== n || t[12] !== d || t[13] !== f
          ? ((g = u.jsxs(r("WAWebUnstyledButton.react"), {
              xstyle: d,
              dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
              onClick: n,
              "aria-label": m,
              children: [p, f],
            })),
            (t[11] = n),
            (t[12] = d),
            (t[13] = f),
            (t[14] = g))
          : (g = t[14]),
        g
      );
    }
    l.default = c;
  },
  226,
);
