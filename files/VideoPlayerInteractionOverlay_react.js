__d(
  "VideoPlayerInteractionOverlay.react",
  ["VideoPlayerHooks", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = s || (s = o("react")),
      d = {
        hiddenCursor: { cursor: "xjfk50j", $$css: !0 },
        pointer: { cursor: "x1ypdohk", $$css: !0 },
        root: {
          bottom: "x1ey2m1c",
          boxSizing: "x9f619",
          insetInlineEnd: "xtijo5x",
          insetInlineStart: "x1o0tod",
          position: "x10l6tqk",
          top: "x13vifvy",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(14),
        a = t.children,
        i = t.pressInteraction,
        l = t.ref,
        s = t.style,
        m = t.xstyle,
        p = i == null ? void 0 : i.handler,
        _ = i == null ? void 0 : i.onPressStart,
        f = i == null ? void 0 : i.onMouseEnter,
        g = i == null ? void 0 : i.onMouseLeave,
        h = (u || (u = o("VideoPlayerHooks"))).useIsFullscreen(),
        y = u.useIsMouseIdle(),
        C;
      n[0] !== h || n[1] !== y || n[2] !== p || n[3] !== m
        ? ((C = (e || (e = r("stylex")))(
            d.root,
            !!p && d.pointer,
            h && y && d.hiddenCursor,
            m,
          )),
          (n[0] = h),
          (n[1] = y),
          (n[2] = p),
          (n[3] = m),
          (n[4] = C))
        : (C = n[4]);
      var b;
      return (
        n[5] !== a ||
        n[6] !== f ||
        n[7] !== g ||
        n[8] !== p ||
        n[9] !== _ ||
        n[10] !== l ||
        n[11] !== s ||
        n[12] !== C
          ? ((b = c.jsx("div", {
              className: C,
              onClick: p,
              onMouseEnter: f,
              onMouseLeave: g,
              onPointerDown: _,
              ref: l,
              role: "presentation",
              style: s,
              children: a,
            })),
            (n[5] = a),
            (n[6] = f),
            (n[7] = g),
            (n[8] = p),
            (n[9] = _),
            (n[10] = l),
            (n[11] = s),
            (n[12] = C),
            (n[13] = b))
          : (b = n[13]),
        b
      );
    }
    var p = m;
    l.VideoPlayerInteractionOverlay = p;
  },
  98,
);
