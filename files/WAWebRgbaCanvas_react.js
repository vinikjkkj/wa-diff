__d(
  "WAWebRgbaCanvas.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.height,
        r = e.rgbaBuffer,
        a = e.width,
        i = d(null),
        l = d(null),
        u,
        m;
      (t[0] !== r
        ? ((u = function () {
            var e = i.current,
              t = l.current;
            e &&
              t &&
              r &&
              (t.data.set(new Uint8Array(r)), e.putImageData(t, 0, 0));
          }),
          (m = [r]),
          (t[0] = r),
          (t[1] = u),
          (t[2] = m))
        : ((u = t[1]), (m = t[2])),
        c(u, m));
      var p;
      t[3] !== n || t[4] !== a
        ? ((p = function (t) {
            t
              ? ((i.current = t.getContext("2d")),
                (l.current = i.current.createImageData(a, n)))
              : ((i.current = null), (l.current = null));
          }),
          (t[3] = n),
          (t[4] = a),
          (t[5] = p))
        : (p = t[5]);
      var _ = p,
        f;
      return (
        t[6] !== _ ||
        t[7] !== e.className ||
        t[8] !== e.height ||
        t[9] !== e.onClick ||
        t[10] !== e.onMouseEnter ||
        t[11] !== e.onMouseLeave ||
        t[12] !== e.width
          ? ((f = s.jsx("canvas", {
              role: "button",
              className: e.className,
              width: e.width,
              height: e.height,
              onClick: e.onClick,
              onMouseEnter: e.onMouseEnter,
              onMouseLeave: e.onMouseLeave,
              ref: _,
            })),
            (t[6] = _),
            (t[7] = e.className),
            (t[8] = e.height),
            (t[9] = e.onClick),
            (t[10] = e.onMouseEnter),
            (t[11] = e.onMouseLeave),
            (t[12] = e.width),
            (t[13] = f))
          : (f = t[13]),
        f
      );
    }
    l.default = m;
  },
  98,
);
