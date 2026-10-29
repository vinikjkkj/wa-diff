__d(
  "WAWebResizeObserver.story",
  ["WAWebResizeObserver.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _() {
      var e = o("react-compiler-runtime").c(8),
        t = m(),
        n = p("initial content"),
        a = n[0],
        i = n[1],
        l;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            var e = function () {
              var n = t.current;
              n != null &&
                ((n.style.width = parseInt(n.style.width, 10) + 1 + "px"),
                (n.style.height = parseInt(n.style.height, 10) + 1 + "px"),
                parseInt(n.style.width, 10) < 160 &&
                  window.requestAnimationFrame(e));
            };
            e();
          }),
          (e[0] = l))
        : (l = e[0]);
      var u = l,
        c,
        _;
      (e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function () {
            u();
          }),
          (_ = [u]),
          (e[1] = c),
          (e[2] = _))
        : ((c = e[1]), (_ = e[2])),
        d(c, _));
      var f;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { width: 60, height: 40 }), (e[3] = f))
        : (f = e[3]);
      var g, h;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = "xul9jog x14y7qir x5yr21d x2b8uid xh8yej3"),
          (h = function (t) {
            return i(t.width + "x" + t.height);
          }),
          (e[4] = g),
          (e[5] = h))
        : ((g = e[4]), (h = e[5]));
      var y;
      return (
        e[6] !== a
          ? ((y = s.jsx("div", {
              style: f,
              ref: t,
              children: s.jsx(r("WAWebResizeObserver.react"), {
                className: g,
                onResize: h,
                children: a,
              }),
            })),
            (e[6] = a),
            (e[7] = y))
          : (y = e[7]),
        y
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(5),
        t = p("initial content"),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { width: 100, height: 100 }), (e[0] = i))
        : (i = e[0]);
      var l, u;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = "xul9jog x14y7qir x5yr21d x2b8uid xh8yej3"),
          (u = function (t) {
            return a(t.width + "x" + t.height);
          }),
          (e[1] = l),
          (e[2] = u))
        : ((l = e[1]), (u = e[2]));
      var c;
      return (
        e[3] !== n
          ? ((c = s.jsx("div", {
              style: i,
              children: s.jsx(r("WAWebResizeObserver.react"), {
                className: l,
                onResize: u,
                children: n,
              }),
            })),
            (e[3] = n),
            (e[4] = c))
          : (c = e[4]),
        c
      );
    }
    var g = {
      storyName: "WAWebResizeObserver",
      component: r("WAWebResizeObserver.react"),
      description: "Resize Observer component for ",
      examples: [
        {
          example: f,
          title: "Basic",
          description: "Calculates initial dimensionss on mount.",
        },
        {
          example: _,
          title: "Updates",
          description: "Updates content when the element changes sizes.",
        },
      ],
    };
    l.default = g;
  },
  98,
);
