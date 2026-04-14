__d(
  "WAWebGalleryMsg.react",
  ["cx", "WAWebClassnames", "react", "useWAWebHover"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef;
    function d(e) {
      var t,
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
        h = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = {}),
          (t._ak1e = g || l),
          (t._ak1f = a),
          (t._ak1g = n),
          (t._ak1d = !0),
          (t._aspq = !0),
          t),
        ),
        y = u.jsx("div", {
          "data-testid": void 0,
          ref: f,
          className: h,
          onClick: s,
          onMouseEnter: d,
          onMouseOver: p,
          onMouseLeave: m,
          children: r,
        });
      return u.jsxs(u.Fragment, { children: [y, i] });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
