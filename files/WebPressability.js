__d(
  "WebPressability",
  [
    "ReactContextMenuEvent.react",
    "ReactFocusEvent.react",
    "ReactHoverEvent.react",
    "ReactPressEvent.react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.disabled,
        r = t.onBlur,
        a = t.onContextMenu,
        i = t.onFocus,
        l = t.onFocusChange,
        s = t.onFocusVisibleChange,
        u = t.onHoverChange,
        c = t.onHoverEnd,
        d = t.onHoverMove,
        m = t.onHoverStart,
        p = t.onPressChange,
        _ = t.onPressEnd,
        f = t.onPressMove,
        g = t.onPressStart,
        h = t.preventContextMenu;
      (o("ReactHoverEvent.react").useHover(e, {
        disabled: n,
        onHoverChange: u,
        onHoverEnd: c,
        onHoverMove: d,
        onHoverStart: m,
      }),
        o("ReactPressEvent.react").usePress(e, {
          disabled: n,
          onPressChange: p,
          onPressEnd: _,
          onPressMove: f,
          onPressStart: g,
        }),
        o("ReactFocusEvent.react").useFocus(e, {
          disabled: n,
          onBlur: r,
          onFocus: i,
          onFocusChange: l,
          onFocusVisibleChange: s,
        }),
        o("ReactContextMenuEvent.react").useContextMenu(e, {
          disabled: n,
          onContextMenu: a,
          preventDefault: h || !1,
        }));
    }
    l.usePressability = e;
  },
  98,
);
