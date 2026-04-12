__d(
  "WAWebMediaHubLoadingSkeletons.react",
  ["WAWebBox.react", "WAWebFlex.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = "x10fmoen-B",
      d = "x1xgfvj9-B",
      m = "xmo4utw-B",
      p = { width: "x5lhr3w", height: "x16ye13r", $$css: !0 },
      _ = { animationDelay: "xvo38ju", $$css: !0 },
      f = {
        container: {
          width: "xi83emq",
          height: "x1rcao0v",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
        overShadow: {
          width: "xymcp1x",
          height: "x127qqk8",
          borderStartStartRadius: "x175tud5",
          borderStartEndRadius: "x14zcg0b",
          borderEndEndRadius: "x1fa4axq",
          borderEndStartRadius: "xsbsmvu",
          transform: "xqjk9gv",
          background: "x164nj1r",
          position: "x10l6tqk",
          animationName: "x1m2z91j",
          animationDuration: "x1hpr77l",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "xa3vuyk",
          filter: "x1bs05mj",
          $$css: !0,
        },
        textShadow: {
          borderStartStartRadius: "x175tud5",
          borderStartEndRadius: "x14zcg0b",
          borderEndEndRadius: "x1fa4axq",
          borderEndStartRadius: "xsbsmvu",
          animationName: "xttja7m",
          background: "x164nj1r",
          animationDuration: "x1hpr77l",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "xa3vuyk",
          filter: "xj2j9hd",
          position: "x1n2onr6",
          top: "x13k8yb0",
          transform: "x5i6ehr",
          $$css: !0,
        },
        textShadowVert: {
          animationName: "x70id73",
          background: "xnukdne",
          animationDuration: "xmg6eyc",
          animationTimingFunction: "x1debuo4",
          top: "x13vifvy",
          insetInlineStart: "xpnintw",
          transform: "x105ttfm",
          height: "x130vq4z",
          width: "x75ztot",
          $$css: !0,
        },
        text: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        imageText: {
          bottom: "x1jn9clo",
          insetInlineStart: "xi5uv41",
          left: null,
          right: null,
          position: "x10l6tqk",
          $$css: !0,
        },
        overflow: { overflowX: "x6ikm8r", overflowY: "x10wlt62", $$css: !0 },
        listRoot: {
          width: "xh8yej3",
          boxSizing: "x9f619",
          height: "xy75621",
          $$css: !0,
        },
        dimension: function (t, n) {
          return [
            p,
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(n + "px"),
            },
          ];
        },
        roundedBox: {
          borderStartStartRadius: "x1fqc64z",
          borderStartEndRadius: "xs83zq4",
          borderEndEndRadius: "xt6ovg4",
          borderEndStartRadius: "x1ru8ea5",
          $$css: !0,
        },
        animationDelay: function (t) {
          return [
            _,
            {
              "--x-animationDelay": (function (e) {
                return typeof e == "number" ? e + "ms" : e != null ? e : void 0;
              })(t + "ms"),
            },
          ];
        },
        textContainer: { height: "x5yr21d", $$css: !0 },
      };
    function g(t) {
      var n = t.delay;
      return u.jsxs(r("WAWebBox.react"), {
        xstyle: f.container,
        children: [
          u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props([
                f.overShadow,
                f.animationDelay(n),
              ]),
            ),
          ),
          u.jsx(h, { xstyle: f.imageText, delay: n }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = t.delay,
        o = n === void 0 ? 0 : n,
        a = t.height,
        i = a === void 0 ? 10 : a,
        l = t.width,
        s = l === void 0 ? 100 : l,
        c = t.xstyle;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props([f.text, c, f.dimension(s, i)]),
          {
            children: u.jsx(
              "div",
              babelHelpers.extends(
                {},
                e.props([
                  f.textShadow,
                  f.animationDelay(o),
                  f.dimension(Math.max(30, s / 2), i * 5),
                ]),
              ),
            ),
          },
        ),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.delay,
        n = t === void 0 ? 0 : t;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        grow: 1,
        justify: "all",
        gap: 2,
        paddingBottom: 2,
        children: Array(5)
          .fill(null)
          .map(function (e, t) {
            return u.jsx(g, { delay: t * 200 + n }, t);
          }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(t) {
      var n = t.delay,
        o = n === void 0 ? 0 : n,
        a = t.height,
        i = a === void 0 ? 10 : a,
        l = t.width,
        s = l === void 0 ? 100 : l,
        c = t.xstyle;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props([
            f.text,
            f.roundedBox,
            c,
            f.dimension(s, i),
          ]),
          {
            children: u.jsx(
              "div",
              babelHelpers.extends(
                {},
                e.props([f.textShadow, f.textShadowVert, f.animationDelay(o)]),
              ),
            ),
          },
        ),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.delay,
        n = t === void 0 ? 0 : t;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        grow: 1,
        paddingStart: 20,
        paddingEnd: 20,
        xstyle: [f.overflow, f.listRoot],
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          gap: 16,
          children: [
            u.jsx(C, { delay: n, width: 48, height: 48 }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: f.textContainer,
              gap: 8,
              children: [
                u.jsx(C, { delay: n + 100, width: 720, height: 14 }),
                u.jsx(C, { delay: n + 100, width: 360, height: 14 }),
              ],
            }),
          ],
        }),
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.WAWebMediaHubLoadingText = h),
      (l.WAWebMediaHubMediaSkeletons = y),
      (l.WAWebMediaHubMediaListSkeletons = b));
  },
  98,
);
