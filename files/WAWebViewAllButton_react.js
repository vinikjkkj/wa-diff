__d(
  "WAWebViewAllButton.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebVoipCallsTabPanelManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.ariaLabel,
        n = e.onAction,
        a = e.testId;
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: { enter: n, space: n },
        "aria-label": t.toString(),
        role: "button",
        "data-testid": void 0,
        children: u.jsx(r("WAWebChatCell.react"), {
          primary: s._(/*BTDS*/ "View all"),
          contextEnabled: o("WAWebBoolFunc").returnFalse,
          onClick: n,
          theme: "view-all",
          className: "x1rgrh6f x1v5yvga x1iikomf",
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      var e = function () {
          r("WAWebVoipCallsTabPanelManager").trigger("openFavoritesDrawer");
        },
        t = s._(/*BTDS*/ "View all favorites");
      return u.jsx(c, {
        ariaLabel: t,
        onAction: e,
        testId: "view-all-favorites-cell",
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      var e = function () {
          r("WAWebVoipCallsTabPanelManager").trigger(
            "openUpcomingEventsDrawer",
          );
        },
        t = s._(/*BTDS*/ "View all upcoming events");
      return u.jsx(c, {
        ariaLabel: t,
        onAction: e,
        testId: "view-all-upcoming-events-cell",
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ViewAllButton = c),
      (l.ViewAllFavoritesButton = d),
      (l.ViewAllUpcomingEventsButton = m));
  },
  226,
);
