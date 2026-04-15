__d(
  "WAWebGalleryMsg.react",
  ["cx", "WAWebClassnames", "react", "react-compiler-runtime", "useWAWebHover"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.active,
        r = e.children,
        a = e.current,
        i = e.footer,
        l = e.hover,
        s = e.onClick,
        d = e.onMouseEnter,
        m = e.onMouseLeave,
        p = e.onMouseOver,
        _ = e.testid,
        f = c(null),
        g = o("useWAWebHover").useWAWebHover(f),
        h = g || l,
        y;
      if (t[0] !== n || t[1] !== a || t[2] !== h) {
        var C;
        ((y = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((C = {}),
          (C._ak1e = h),
          (C._ak1f = a),
          (C._ak1g = n),
          (C._ak1d = !0),
          (C._aspq = !0),
          C),
        )),
          (t[0] = n),
          (t[1] = a),
          (t[2] = h),
          (t[3] = y));
      } else y = t[3];
      var b = y,
        v;
      t[4] !== r ||
      t[5] !== b ||
      t[6] !== s ||
      t[7] !== d ||
      t[8] !== m ||
      t[9] !== p ||
      t[10] !== _
        ? ((v = u.jsx("div", {
            "data-testid": void 0,
            ref: f,
            className: b,
            onClick: s,
            onMouseEnter: d,
            onMouseOver: p,
            onMouseLeave: m,
            children: r,
          })),
          (t[4] = r),
          (t[5] = b),
          (t[6] = s),
          (t[7] = d),
          (t[8] = m),
          (t[9] = p),
          (t[10] = _),
          (t[11] = v))
        : (v = t[11]);
      var S = v,
        R;
      return (
        t[12] !== i || t[13] !== S
          ? ((R = u.jsxs(u.Fragment, { children: [S, i] })),
            (t[12] = i),
            (t[13] = S),
            (t[14] = R))
          : (R = t[14]),
        R
      );
    }
    l.default = d;
  },
  98,
);
