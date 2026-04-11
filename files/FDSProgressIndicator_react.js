__d(
  "FDSProgressIndicator.react",
  [
    "BaseLoadingStateElement.react",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "xyg6gxy-B",
      c = {
        animateDot: {
          animationDuration: "x1c74tu6",
          animationIterationCount: "xa4qsjk",
          animationName: "xwp40e0",
          animationTimingFunction: "x147wac7",
          opacity: "xllgmg",
          transform: "x13kylt9",
          $$css: !0,
        },
        animationDelay300: { animationDelay: "x1x1c4bx", $$css: !0 },
        animationDelay600: { animationDelay: "x1nrwgbl", $$css: !0 },
        root: { display: "x78zum5", flexDirection: "x1q0g3np", $$css: !0 },
      },
      d = {
        default: {
          borderStartStartRadius: "xjwep3j",
          borderStartEndRadius: "x1t39747",
          borderEndEndRadius: "x1wcsgtt",
          borderEndStartRadius: "x1pczhz8",
          height: "xdk7pt",
          marginInlineEnd: "xnnr8r",
          marginInlineStart: "xwklpps",
          width: "x1xc55vz",
          $$css: !0,
        },
        small: {
          borderStartStartRadius: "xr9e8f9",
          borderStartEndRadius: "x1e4oeot",
          borderEndEndRadius: "x1ui04y5",
          borderEndStartRadius: "x6en5u8",
          height: "xqu0tyb",
          marginInlineEnd: "x1mpyi22",
          marginInlineStart: "xm2jcoa",
          width: "x51ohtg",
          $$css: !0,
        },
      },
      m = {
        media: { backgroundColor: "x14hiurz", $$css: !0 },
        primary: { backgroundColor: "xn25soc", $$css: !0 },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.disableLoadingStateTracker,
        a = e.overrideBGColorContext,
        i = e.size,
        l = e["aria-label"],
        u = e["aria-labelledby"],
        p = a === void 0 ? "primary" : a,
        _ = i === void 0 ? "default" : i,
        f = d[_],
        g = m[p],
        h;
      t[0] !== f || t[1] !== g
        ? ((h = [c.animateDot, f, g]), (t[0] = f), (t[1] = g), (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] !== y
        ? ((C = s.jsx(o("react-strict-dom").html.div, { style: y })),
          (t[3] = y),
          (t[4] = C))
        : (C = t[4]);
      var b;
      t[5] !== y
        ? ((b = s.jsx(o("react-strict-dom").html.div, {
            style: [y, c.animationDelay300],
          })),
          (t[5] = y),
          (t[6] = b))
        : (b = t[6]);
      var v;
      t[7] !== y
        ? ((v = s.jsx(o("react-strict-dom").html.div, {
            style: [y, c.animationDelay600],
          })),
          (t[7] = y),
          (t[8] = v))
        : (v = t[8]);
      var S;
      return (
        t[9] !== l ||
        t[10] !== u ||
        t[11] !== n ||
        t[12] !== C ||
        t[13] !== b ||
        t[14] !== v
          ? ((S = s.jsxs(r("BaseLoadingStateElement.react"), {
              "aria-label": l,
              "aria-labelledby": u,
              disableLoadingStateTracker: n,
              xstyle: c.root,
              children: [C, b, v],
            })),
            (t[9] = l),
            (t[10] = u),
            (t[11] = n),
            (t[12] = C),
            (t[13] = b),
            (t[14] = v),
            (t[15] = S))
          : (S = t[15]),
        S
      );
    }
    l.default = p;
  },
  98,
);
