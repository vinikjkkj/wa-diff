__d(
  "WebBloksTooltipUtils",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useLayoutEffect,
      c = s.useState;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(5),
        r;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { left: 0, top: 0, transform: "" }), (n[0] = r))
        : (r = n[0]);
      var a = c(r),
        i = a[0],
        l = a[1],
        s,
        d;
      return (
        n[1] !== e || n[2] !== t
          ? ((s = function () {
              var n,
                r,
                o =
                  (n = document.documentElement) == null
                    ? void 0
                    : n.getBoundingClientRect(),
                a =
                  e == null || (r = e.current) == null
                    ? void 0
                    : r.getBoundingClientRect();
              if (!(o == null || a == null)) {
                var i = a.x + a.width / 2,
                  s = t === "top" ? a.y - o.y : a.y - o.y + a.height,
                  u = "translate(-50%, " + (t === "top" ? "-100%" : "0%") + ")";
                l({ left: i, top: s, transform: u });
              }
            }),
            (d = [e, t]),
            (n[1] = e),
            (n[2] = t),
            (n[3] = s),
            (n[4] = d))
          : ((s = n[3]), (d = n[4])),
        u(s, d),
        i
      );
    }
    function m(e, t, n) {
      var r = o("react-compiler-runtime").c(8),
        a = c("center"),
        i = a[0],
        l = a[1],
        s = c(t),
        d = s[0],
        m = s[1],
        p,
        _;
      (r[0] !== e || r[1] !== n || r[2] !== t
        ? ((p = function () {
            var r,
              o,
              a =
                (r = document.documentElement) == null
                  ? void 0
                  : r.getBoundingClientRect(),
              i =
                e == null || (o = e.current) == null
                  ? void 0
                  : o.getBoundingClientRect();
            if (!(a == null || i == null)) {
              if (n === "shark-fin") {
                var s = a.x + a.width / 2,
                  u = i.x + i.width / 2;
                u > s ? l("right") : l("left");
              }
              if (t == null) {
                var c = a.y + a.height / 2,
                  d = i.y + i.height / 2;
                d > c ? m("top") : m("bottom");
              }
            }
          }),
          (_ = [n, t, e]),
          (r[0] = e),
          (r[1] = n),
          (r[2] = t),
          (r[3] = p),
          (r[4] = _))
        : ((p = r[3]), (_ = r[4])),
        u(p, _));
      var f;
      return (
        r[5] !== i || r[6] !== d
          ? ((f = [i, d]), (r[5] = i), (r[6] = d), (r[7] = f))
          : (f = r[7]),
        f
      );
    }
    function p(e) {
      return Math.sqrt(Math.pow(e, 2) + Math.pow(e, 2));
    }
    var _ = 12,
      f = p(_);
    function g(e) {
      return e == null
        ? null
        : { top: { bottom: "100%" }, bottom: { top: "100%" } }[e];
    }
    function h(e) {
      return {
        bottom: "0,100 50," + e + " 100,100",
        top: "0,0 50," + (100 - e) + " 100,0",
      };
    }
    function y(e) {
      return {
        left: {
          bottom: e + ",100 " + e + "," + e + " 100,100",
          top: e + ",0 " + e + "," + (100 - e) + " 100,0",
        },
        right: {
          bottom: "0,100 " + (100 - e) + "," + e + " " + (100 - e) + ",100",
          top: "0,0 " + (100 - e) + "," + (100 - e) + " " + (100 - e) + ",0",
        },
      };
    }
    function C(e, t, n, r) {
      return t == null
        ? null
        : n === "shark-fin" && e !== "center"
          ? y(r)[e][t]
          : h(r)[t];
    }
    ((l.useCalculatePositionStyle = d),
      (l.useCalculatePosition = m),
      (l.calculateHypotenuseFromEqualSides = p),
      (l.ARROW_SIZE = _),
      (l.TOOLTIP_HYPOTENUSE = f),
      (l.getPositionStyle = g),
      (l.getDefaultPolyLines = h),
      (l.getSharkFinPolyLines = y),
      (l.getArrowPolyLinePoints = C));
  },
  98,
);
