__d(
  "WAWebChatInfoMediaSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatMedia",
    "WAWebMediaGallery.react",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSIconIcPermMedia.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useState;
    function _(e, t) {
      var n = o("react-compiler-runtime").c(15),
        a = p(null),
        i = a[0],
        l = a[1],
        s = r("useWAWebUnmountSignal")(),
        u;
      n[0] !== e || n[1] !== t || n[2] !== s
        ? ((u = function () {
            o("WAWebChatMedia")
              .countAllMedia(e, t)
              .then(function (e) {
                s.aborted || l(e);
              });
          }),
          (n[0] = e),
          (n[1] = t),
          (n[2] = s),
          (n[3] = u))
        : (u = n[3]);
      var c = u,
        d;
      (n[4] !== c ? ((d = [c]), (n[4] = c), (n[5] = d)) : (d = n[5]), m(c, d));
      var _;
      n[6] !== e
        ? ((_ = e.getMediaMsgs()), (n[6] = e), (n[7] = _))
        : (_ = n[7]);
      var f;
      (n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["add", "remove"]), (n[8] = f))
        : (f = n[8]),
        o("useWAWebListener").useListener(_, f, c));
      var g;
      n[9] !== e
        ? ((g = e.getDocMsgs()), (n[9] = e), (n[10] = g))
        : (g = n[10]);
      var h;
      (n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = ["add", "remove"]), (n[11] = h))
        : (h = n[11]),
        o("useWAWebListener").useListener(g, h, c));
      var y;
      n[12] !== e
        ? ((y = e.getLinkMsgs()), (n[12] = e), (n[13] = y))
        : (y = n[13]);
      var C;
      return (
        n[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = ["add", "remove"]), (n[14] = C))
          : (C = n[14]),
        o("useWAWebListener").useListener(y, C, c),
        i
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.chat,
        r = e.threadId,
        a = _(n, r);
      if (a == null) {
        var i;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = u.jsx(o("WAWebSpinner.react").Spinner, {
                size: 16,
                stroke: 6,
              })),
              (t[0] = i))
            : (i = t[0]),
          i
        );
      }
      var l;
      if (t[1] !== a) {
        var c = s._(/*BTDS*/ '_j{"*":"{mediaCount}"}', [
          s._param("mediaCount", a, [0]),
        ]);
        ((l = u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
          color: "wdsContentDeemphasized",
          children: c,
        })),
          (t[1] = a),
          (t[2] = l));
      } else l = t[2];
      return l;
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.chat,
        a = e.onMediaGallery,
        i = e.threadId,
        l;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var c = s._(/*BTDS*/ "Media, links and docs");
        ((l = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: c,
        })),
          (t[0] = l));
      } else l = t[0];
      var d = l,
        m;
      t[1] !== n || t[2] !== i
        ? ((m = u.jsx(f, { chat: n, threadId: i })),
          (t[1] = n),
          (t[2] = i),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(r("WDSIconIcPermMedia.react"), {})), (t[4] = _))
        : (_ = t[4]);
      var g;
      t[5] !== a || t[6] !== p
        ? ((g = u.jsx(
            o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
            { testid: void 0, icon: _, onClick: a, title: d, side: p },
          )),
          (t[5] = a),
          (t[6] = p),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] !== n
        ? ((h = n.getMediaMsgs()), (t[8] = n), (t[9] = h))
        : (h = t[9]);
      var y;
      t[10] !== n || t[11] !== h || t[12] !== i
        ? ((y = u.jsx(r("WAWebMediaGallery.react"), {
            chat: n,
            mediaMsgs: h,
            theme: "chat-info",
            selectable: !1,
            isRefresh: !0,
            threadId: i,
          })),
          (t[10] = n),
          (t[11] = h),
          (t[12] = i),
          (t[13] = y))
        : (y = t[13]);
      var C;
      return (
        t[14] !== g || t[15] !== y
          ? ((C = u.jsxs(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              {
                titleTestId: "section-media",
                xstyle: o("WAWebUISpacing").uiPadding.horiz0,
                children: [g, y],
              },
            )),
            (t[14] = g),
            (t[15] = y),
            (t[16] = C))
          : (C = t[16]),
        C
      );
    }
    l.default = g;
  },
  226,
);
