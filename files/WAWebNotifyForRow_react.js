__d(
  "WAWebNotifyForRow.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChevronIcon.react",
    "WAWebNotifyForUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.chat,
        n = e.containerXstyle,
        r = e.onNotifyForClick,
        a = t.id.toString(),
        i = o("WAWebChatGetters").getIsGroup(t);
      if (
        (c(
          function () {
            i &&
              o(
                "WAWebNotifyForUtils",
              ).maybeAutoDefaultToHighlightsForLargeGroup(t);
          },
          [t, i],
        ),
        !i)
      )
        return null;
      var l = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: s._(/*BTDS*/ "Notify for"),
        }),
        d = o("WAWebNotifyForUtils").getNotifyForSetting(a),
        m = o("WAWebNotifyForUtils").getNotifyForLabel(d);
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        {
          testid: void 0,
          secondaryTitle: u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed,
            { title: m },
          ),
          title: u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: l },
          ),
          side: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            directional: !0,
            height: 21,
          }),
          onClick: r,
          containerXstyle: n,
        },
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
