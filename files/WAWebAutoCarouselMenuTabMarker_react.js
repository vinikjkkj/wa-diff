__d(
  "WAWebAutoCarouselMenuTabMarker.react",
  ["react", "react-compiler-runtime", "useWAWebPrevious"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.memo,
      c = "0.3s",
      d = null;
    function m(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.animate,
        a = e.offsetPx,
        i = e.selectedTabIndex,
        l = e.width,
        u = r("useWAWebPrevious")(i),
        c,
        d,
        m;
      (u === -1 && i !== u ? (m = !1) : (m = !!n),
        i !== -1
          ? ((d = "translateX(" + a + "px)"), (c = "2px"))
          : u !== -1 && i === -1 && (c = "0px"));
      var p;
      t[0] !== n || t[1] !== m
        ? ((p = {
            0: "x10l6tqk x1ey2m1c xu96u03 xnj6ddq x1hc1fzr xua3uq3 x1d8287x",
            2: "x10l6tqk x1ey2m1c xu96u03 xnj6ddq x1hc1fzr x1humd01 x1d8287x",
            1: "x10l6tqk x1ey2m1c xu96u03 xnj6ddq x1hc1fzr x12lomcl x1d8287x",
            3: "x10l6tqk x1ey2m1c xu96u03 xnj6ddq x1hc1fzr x12lomcl x1d8287x",
          }[(!!(!m && n) << 1) | (!!m << 0)]),
          (t[0] = n),
          (t[1] = m),
          (t[2] = p))
        : (p = t[2]);
      var _;
      t[3] !== c || t[4] !== d || t[5] !== l
        ? ((_ = { width: l, transform: d, height: c }),
          (t[3] = c),
          (t[4] = d),
          (t[5] = l),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== p || t[8] !== _
          ? ((f = s.jsx("div", { className: p, style: _ })),
            (t[7] = p),
            (t[8] = _),
            (t[9] = f))
          : (f = t[9]),
        f
      );
    }
    var p = u(m);
    l.default = p;
  },
  98,
);
