__d(
  "WebBloksTooltipUtils",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useLayoutEffect,
      c = s.useState;
    function d(e, t) {
      var n = c({ left: 0, top: 0, transform: "" }),
        r = n[0],
        o = n[1];
      return (
        u(
          function () {
            var n,
              r,
              a =
                (n = document.documentElement) == null
                  ? void 0
                  : n.getBoundingClientRect(),
              i =
                e == null || (r = e.current) == null
                  ? void 0
                  : r.getBoundingClientRect();
            if (!(a == null || i == null)) {
              var l = i.x + i.width / 2,
                s = t === "top" ? i.y - a.y : i.y - a.y + i.height,
                u = "translate(-50%, " + (t === "top" ? "-100%" : "0%") + ")";
              o({ left: l, top: s, transform: u });
            }
          },
          [e, t],
        ),
        r
      );
    }
    function m(e, t, n) {
      var r = c("center"),
        o = r[0],
        a = r[1],
        i = c(t),
        l = i[0],
        s = i[1];
      return (
        u(
          function () {
            var r,
              o,
              i =
                (r = document.documentElement) == null
                  ? void 0
                  : r.getBoundingClientRect(),
              l =
                e == null || (o = e.current) == null
                  ? void 0
                  : o.getBoundingClientRect();
            if (!(i == null || l == null)) {
              if (n === "shark-fin") {
                var u = i.x + i.width / 2,
                  c = l.x + l.width / 2;
                c > u ? a("right") : a("left");
              }
              if (t == null) {
                var d = i.y + i.height / 2,
                  m = l.y + l.height / 2;
                m > d ? s("top") : s("bottom");
              }
            }
          },
          [n, t, e],
        ),
        [o, l]
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
