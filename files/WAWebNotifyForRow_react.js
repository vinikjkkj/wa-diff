__d(
  "WAWebNotifyForRow.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChevronIcon.react",
    "WAWebNotifyForUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.chat,
        r = e.containerXstyle,
        a = e.onNotifyForClick,
        i = n.id.toString(),
        l;
      t[0] !== n
        ? ((l = o("WAWebChatGetters").getIsGroup(n)), (t[0] = n), (t[1] = l))
        : (l = t[1]);
      var d = l,
        m,
        p;
      if (
        (t[2] !== n || t[3] !== d
          ? ((m = function () {
              d &&
                o(
                  "WAWebNotifyForUtils",
                ).maybeAutoDefaultToHighlightsForLargeGroup(n);
            }),
            (p = [n, d]),
            (t[2] = n),
            (t[3] = d),
            (t[4] = m),
            (t[5] = p))
          : ((m = t[4]), (p = t[5])),
        c(m, p),
        !d)
      )
        return null;
      var _;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: s._(/*BTDS*/ "Notify for") },
          )),
          (t[6] = _))
        : (_ = t[6]);
      var f = _,
        g = o("WAWebNotifyForUtils").getNotifyForSetting(i),
        h = o("WAWebNotifyForUtils").getNotifyForLabel(g),
        y;
      t[7] !== h
        ? ((y = u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed,
            { title: h },
          )),
          (t[7] = h),
          (t[8] = y))
        : (y = t[8]);
      var C;
      t[9] !== f
        ? ((C = u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: f },
          )),
          (t[9] = f),
          (t[10] = C))
        : (C = t[10]);
      var b;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            directional: !0,
            height: 21,
          })),
          (t[11] = b))
        : (b = t[11]);
      var v;
      return (
        t[12] !== r || t[13] !== a || t[14] !== y || t[15] !== C
          ? ((v = u.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              {
                testid: void 0,
                secondaryTitle: y,
                title: C,
                side: b,
                onClick: a,
                containerXstyle: r,
              },
            )),
            (t[12] = r),
            (t[13] = a),
            (t[14] = y),
            (t[15] = C),
            (t[16] = v))
          : (v = t[16]),
        v
      );
    }
    l.default = d;
  },
  226,
);
