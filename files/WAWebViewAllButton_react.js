__d(
  "WAWebViewAllButton.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebVoipCallsTabPanelManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.ariaLabel,
        a = e.onAction,
        i = e.testId,
        l;
      t[0] !== a
        ? ((l = { enter: a, space: a }), (t[0] = a), (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] !== n ? ((c = n.toString()), (t[2] = n), (t[3] = c)) : (c = t[3]);
      var d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "View all")), (t[4] = d))
        : (d = t[4]);
      var m;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = "x1rgrh6f x1v5yvga x1iikomf"), (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== a
        ? ((p = u.jsx(r("WAWebChatCell.react"), {
            primary: d,
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            onClick: a,
            theme: "view-all",
            className: m,
          })),
          (t[6] = a),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== l || t[9] !== c || t[10] !== p || t[11] !== i
          ? ((_ = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: l,
              "aria-label": c,
              role: "button",
              "data-testid": void 0,
              children: p,
            })),
            (t[8] = l),
            (t[9] = c),
            (t[10] = p),
            (t[11] = i),
            (t[12] = _))
          : (_ = t[12]),
        _
      );
    }
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t = m,
        n;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var r = s._(/*BTDS*/ "View all favorites");
        ((n = u.jsx(c, {
          ariaLabel: r,
          onAction: t,
          testId: "view-all-favorites-cell",
        })),
          (e[0] = n));
      } else n = e[0];
      return n;
    }
    function m() {
      r("WAWebVoipCallsTabPanelManager").trigger("openFavoritesDrawer");
    }
    function p() {
      var e = o("react-compiler-runtime").c(1),
        t = _,
        n;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var r = s._(/*BTDS*/ "View all upcoming events");
        ((n = u.jsx(c, {
          ariaLabel: r,
          onAction: t,
          testId: "view-all-upcoming-events-cell",
        })),
          (e[0] = n));
      } else n = e[0];
      return n;
    }
    function _() {
      r("WAWebVoipCallsTabPanelManager").trigger("openUpcomingEventsDrawer");
    }
    ((l.ViewAllButton = c),
      (l.ViewAllFavoritesButton = d),
      (l.ViewAllUpcomingEventsButton = p));
  },
  226,
);
