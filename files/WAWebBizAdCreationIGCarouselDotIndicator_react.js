__d(
  "WAWebBizAdCreationIGCarouselDotIndicator.react",
  ["WAWebFlex.react", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = {
        dotTrackerRow: {
          flexDirection: "x1q0g3np",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          columnGap: "x1trrmfo",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
        dot: {
          width: "x1v4s8kt",
          height: "xols6we",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          flexShrink: "x2lah0s",
          transition: "x1ah53aw",
          $$css: !0,
        },
        dotMedium: { transform: "x7tyawt", $$css: !0 },
        dotSmall: { transform: "x1pu0q3o", $$css: !0 },
        dotHidden: { transform: "x1f85oc2", opacity: "xg01cxk", $$css: !0 },
        dotSelected: { backgroundColor: "xv8op7z", $$css: !0 },
        dotUnselected: { backgroundColor: "x1t9q1nc", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(18),
        a = t.currentIndex,
        i = t.totalCount,
        l = p,
        s = Math.max(i - 3, 0),
        m = c(l(a - 1, 0, s)),
        _ = m[0],
        f = m[1],
        g;
      if (
        (n[0] !== _ || n[1] !== a || n[2] !== s
          ? ((g = _),
            a > _ + 2 ? (g = l(a - 2, 0, s)) : a < _ && (g = l(a, 0, s)),
            (n[0] = _),
            (n[1] = a),
            (n[2] = s),
            (n[3] = g))
          : (g = n[3]),
        g !== _ && f(g),
        i <= 1)
      )
        return null;
      if (i <= 5) {
        var h;
        n[4] !== i
          ? ((h = Array.from({ length: i })), (n[4] = i), (n[5] = h))
          : (h = n[5]);
        var y;
        return (
          n[6] !== a || n[7] !== h
            ? ((y = u.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: d.dotTrackerRow,
                children: h.map(function (e, t) {
                  return u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      {
                        0: {
                          className:
                            "x1v4s8kt xols6we xt8t1vi x1xc408v x129tdwq x15urzxu x2lah0s x1ah53aw x1t9q1nc",
                        },
                        1: {
                          className:
                            "x1v4s8kt xols6we xt8t1vi x1xc408v x129tdwq x15urzxu x2lah0s x1ah53aw xv8op7z",
                        },
                      }[(t === a) << 0],
                    ),
                    t,
                  );
                }),
              })),
              (n[6] = a),
              (n[7] = h),
              (n[8] = y))
            : (y = n[8]),
          y
        );
      }
      var C = g,
        b = i - (g + 3),
        v = C >= 2 && b < 2 ? "small" : "hidden",
        S = C >= 1 ? "medium" : "hidden",
        R = b >= 1 ? "medium" : "hidden",
        L = b >= 2 ? "small" : "hidden",
        E;
      n[9] !== v || n[10] !== S || n[11] !== R || n[12] !== L
        ? ((E = [v, S, "full", "full", "full", R, L]),
          (n[9] = v),
          (n[10] = S),
          (n[11] = R),
          (n[12] = L),
          (n[13] = E))
        : (E = n[13]);
      var k = E,
        I;
      return (
        n[14] !== g || n[15] !== a || n[16] !== k
          ? ((I = u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: d.dotTrackerRow,
              children: k.map(function (t, n) {
                var o = g - 2 + n,
                  i =
                    t === "medium"
                      ? d.dotMedium
                      : t === "small"
                        ? d.dotSmall
                        : t === "hidden"
                          ? d.dotHidden
                          : t === "full"
                            ? null
                            : (function () {
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    t,
                                );
                              })();
                return u.jsx(
                  "div",
                  babelHelpers.extends(
                    { "data-size": t },
                    (e || (e = r("stylex"))).props(
                      d.dot,
                      i,
                      o === a ? d.dotSelected : d.dotUnselected,
                    ),
                  ),
                  n,
                );
              }),
            })),
            (n[14] = g),
            (n[15] = a),
            (n[16] = k),
            (n[17] = I))
          : (I = n[17]),
        I
      );
    }
    function p(e, t, n) {
      return Math.max(t, Math.min(e, n));
    }
    l.default = m;
  },
  98,
);
