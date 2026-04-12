__d(
  "WAWebBizAdCreationIGCarouselDotIndicator.react",
  ["WAWebFlex.react", "react", "stylex"],
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
      var n = t.currentIndex,
        a = t.totalCount,
        i = function (t, n, r) {
          return Math.max(n, Math.min(t, r));
        },
        l = Math.max(a - 3, 0),
        s = c(i(n - 1, 0, l)),
        m = s[0],
        p = s[1],
        _ = m;
      if (
        (n > m + 2 ? (_ = i(n - 2, 0, l)) : n < m && (_ = i(n, 0, l)),
        _ !== m && p(_),
        a <= 1)
      )
        return null;
      if (a <= 5)
        return u.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: d.dotTrackerRow,
          children: Array.from({ length: a }).map(function (e, t) {
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
                }[(t === n) << 0],
              ),
              t,
            );
          }),
        });
      var f = _,
        g = a - (_ + 3),
        h = [
          f >= 2 && g < 2 ? "small" : "hidden",
          f >= 1 ? "medium" : "hidden",
          "full",
          "full",
          "full",
          g >= 1 ? "medium" : "hidden",
          g >= 2 ? "small" : "hidden",
        ];
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: d.dotTrackerRow,
        children: h.map(function (t, o) {
          var a = _ - 2 + o,
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
                a === n ? d.dotSelected : d.dotUnselected,
              ),
            ),
            o,
          );
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
