__d(
  "WAWebConversationMsgsMenuV2.react",
  [
    "WAWebChatGetters",
    "WAWebContactMenuDropdown.react",
    "WAWebConversationMenus",
    "WAWebConversationMsgsUtils",
    "WAWebNoop",
    "WDSMenu.react",
    "react",
    "react-compiler-runtime",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useMemo,
      m = u.useRef;
    function p(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.chat,
        a = e.onCancelSelect,
        i = e.onMenuReady,
        l = e.onSelect,
        u = e.scrollContainerRef,
        d = e.selectable,
        p = m(null),
        _,
        f;
      (t[0] !== u
        ? ((_ = function () {
            p.current = u;
          }),
          (f = [u]),
          (t[0] = u),
          (t[1] = _),
          (t[2] = f))
        : ((_ = t[1]), (f = t[2])),
        c(_, f));
      var g;
      e: {
        if (
          o(
            "WAWebConversationMsgsUtils",
          ).isSimplifiedChatConversationMenuEnabled(n)
        ) {
          var h;
          t[3] !== n || t[4] !== a || t[5] !== l || t[6] !== d
            ? ((h = o("WAWebConversationMenus").hybridMenu(n, l, a, d)),
              (t[3] = n),
              (t[4] = a),
              (t[5] = l),
              (t[6] = d),
              (t[7] = h))
            : (h = t[7]);
          var y = h,
            C;
          (t[8] !== y
            ? ((C = s.jsx(r("WDSMenu.react"), { children: y })),
              (t[8] = y),
              (t[9] = C))
            : (C = t[9]),
            (g = C));
          break e;
        } else if (o("WAWebChatGetters").getIsUser(n)) {
          var b;
          (t[10] !== n || t[11] !== l || t[12] !== u
            ? ((b = s.jsx(r("WAWebContactMenuDropdown.react"), {
                chat: n,
                toContextMenuManager: !0,
                onSelectMessages: l,
                enableChatThreadLogging: !1,
                onSearchChat: r("WAWebNoop"),
                container: u,
              })),
              (t[10] = n),
              (t[11] = l),
              (t[12] = u),
              (t[13] = b))
            : (b = t[13]),
            (g = b));
          break e;
        } else if (o("WAWebChatGetters").getIsGroup(n)) {
          var v;
          if (t[14] !== n || t[15] !== l || t[16] !== u) {
            var S = s.jsx(o("WAWebConversationMenus").GroupMenu, {
              chat: n,
              container: u,
              onSelect: l,
              onSearchChat: r("WAWebNoop"),
            });
            ((v = s.jsx(r("WDSMenu.react"), { children: S })),
              (t[14] = n),
              (t[15] = l),
              (t[16] = u),
              (t[17] = v));
          } else v = t[17];
          g = v;
          break e;
        } else if (o("WAWebChatGetters").getIsBroadcast(n)) {
          var R;
          t[18] !== n
            ? ((R = o("WAWebConversationMenus").broadcastMenu(n)),
              (t[18] = n),
              (t[19] = R))
            : (R = t[19]);
          var L = R,
            E;
          (t[20] !== L
            ? ((E = s.jsx(r("WDSMenu.react"), { children: L })),
              (t[20] = L),
              (t[21] = E))
            : (E = t[21]),
            (g = E));
          break e;
        }
        g = null;
      }
      var k = g,
        I;
      t[22] !== k
        ? ((I = { targetRef: p, menu: k, contextMenuArea: !0, enableUIM: !1 }),
          (t[22] = k),
          (t[23] = I))
        : (I = t[23]);
      var T = r("useWDSMenu")(I),
        D = T.menuPortal,
        x = T.openMenu,
        $,
        P;
      return (
        t[24] !== i || t[25] !== x
          ? (($ = function () {
              i(x);
            }),
            (P = [x, i]),
            (t[24] = i),
            (t[25] = x),
            (t[26] = $),
            (t[27] = P))
          : (($ = t[26]), (P = t[27])),
        c($, P),
        D
      );
    }
    l.ConversationMsgsMenuV2 = p;
  },
  98,
);
