__d(
  "WDSSpinnerElement.react",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = 20,
      d = 8,
      m = "x17qceat-B",
      p = "xnrop4s-B",
      _ = "xoslcoy-B",
      f = {
        animationIterationCount: "xa4qsjk",
        animationName: "xvma63k",
        animationTimingFunction: "x1esw782",
        transform: "xsqj5wx",
        animationDelay: "xvo38ju",
        animationDuration: "x1q3qbx4",
        transformOrigin: "xf6vlc6",
        $$css: !0,
      },
      g = {
        svgWrapper: {
          animationName: "x1e112to",
          animationDuration: "x1c74tu6",
          animationTimingFunction: "x1esw782",
          animationIterationCount: "xa4qsjk",
          zIndex: "xhtitgo",
          stroke: "x73je2i",
          $$css: !0,
        },
        rotate: {
          transform: "x9tu13d",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        stripStyle: function (t, n) {
          return [
            f,
            {
              "--x-transform":
                "rotate(" + (360 / d) * t + "deg)" != null
                  ? "rotate(" + (360 / d) * t + "deg)"
                  : void 0,
              "--x-animationDelay": (function (e) {
                return typeof e == "number" ? e + "ms" : e != null ? e : void 0;
              })("-" + (1 / d) * (d - t - 1) + "s"),
              "--x-transformOrigin": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(n / 2 + "px " + n / 2 + "px"),
            },
          ];
        },
      };
    function h(e) {
      if (e == null) return null;
      var t = Math.ceil(2 * c * Math.PI);
      return {
        strokeDasharray: t + " " + t,
        strokeDashoffset: t - (e / 100) * t,
      };
    }
    function y(t) {
      var n = t.size;
      return u.jsx("div", {
        className: "x1rg5ohu x1n2onr6",
        style: { width: n, height: n },
        children: Array.from(new Array(d)).map(function (t, o) {
          return u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(g.stripStyle(o, n)),
              {
                children: u.jsx("div", {
                  className:
                    "x1lliihq x10l6tqk xed5h26 x1502et5 xggx2qq x1bklw8v xtwfq29",
                  style: {
                    top: n / 12,
                    left: n / 2 - n / 20,
                    width: n / 10,
                    height: n / 3.6,
                  },
                }),
              },
            ),
            o,
          );
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.progress,
        n = e.stroke,
        r = e.strokeLinecap,
        o = r === void 0 ? "round" : r,
        a = e.viewBoxSide;
      return u.jsx(
        "circle",
        babelHelpers.extends(
          { style: h(t) },
          {
            0: {},
            4: { className: "x1owpc8m" },
            2: { className: "x37uqsb" },
            6: { className: "x37uqsb" },
            1: {
              className: "xu41xpa xmg6eyc x4hg4is xa4qsjk xbla1kb x1b0o3cz",
            },
            5: {
              className:
                "x1owpc8m xu41xpa xmg6eyc x4hg4is xa4qsjk xbla1kb x1b0o3cz",
            },
            3: {
              className:
                "x37uqsb xu41xpa xmg6eyc x4hg4is xa4qsjk xbla1kb x1b0o3cz",
            },
            7: {
              className:
                "x37uqsb xu41xpa xmg6eyc x4hg4is xa4qsjk xbla1kb x1b0o3cz",
            },
          }[
            ((o === "round") << 2) |
              ((o === "square") << 1) |
              ((t == null) << 0)
          ],
          { cx: a / 2, cy: a / 2, r: c, fill: "none", strokeWidth: n },
        ),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(t) {
      var n = t.platform,
        o = t.progress,
        a = t.size,
        i = t.stroke,
        l = t.strokeLinecap,
        s = t.xstyle;
      if (n === "iOS") return u.jsx(y, { size: a });
      var d = 2 * c + i,
        m = "0 0 " + d + " " + d;
      return u.jsxs(
        "svg",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            (o == null && g.svgWrapper) || g.rotate,
            s,
          ),
          {
            width: a - 4,
            height: a - 4,
            viewBox: m,
            "aria-hidden": !0,
            role: "status",
            children: [
              o != null
                ? u.jsx(C, {
                    stroke: i,
                    strokeLinecap: l,
                    progress: 100,
                    viewBoxSide: d,
                  })
                : null,
              u.jsx(C, {
                progress: o,
                stroke: i,
                strokeLinecap: l,
                viewBoxSide: d,
              }),
            ],
          },
        ),
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  98,
);
