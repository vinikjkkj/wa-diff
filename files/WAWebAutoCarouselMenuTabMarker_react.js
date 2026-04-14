__d(
  "WAWebAutoCarouselMenuTabMarker.react",
  ["react", "useWAWebPrevious"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.memo,
      c = "0.3s",
      d = null;
    function m(e) {
      var t = e.animate,
        n = e.offsetPx,
        o = e.selectedTabIndex,
        a = e.width,
        i = r("useWAWebPrevious")(o),
        l,
        u,
        c;
      return (
        i === -1 && o !== i ? (c = !1) : (c = !!t),
        o !== -1
          ? ((u = "translateX(" + n + "px)"), (l = "2px"))
          : i !== -1 && o === -1 && (l = "0px"),
        s.jsx("div", {
          className: {
            0: "x10l6tqk x1ey2m1c xu96u03 xnj6ddq x1hc1fzr xua3uq3 x1d8287x",
            2: "x10l6tqk x1ey2m1c xu96u03 xnj6ddq x1hc1fzr x1humd01 x1d8287x",
            1: "x10l6tqk x1ey2m1c xu96u03 xnj6ddq x1hc1fzr x12lomcl x1d8287x",
            3: "x10l6tqk x1ey2m1c xu96u03 xnj6ddq x1hc1fzr x12lomcl x1d8287x",
          }[(!!(!c && t) << 1) | (!!c << 0)],
          style: { width: a, transform: u, height: l },
        })
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = u(m);
    l.default = p;
  },
  98,
);
