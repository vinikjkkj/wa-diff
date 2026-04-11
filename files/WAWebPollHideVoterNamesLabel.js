__d(
  "WAWebPollHideVoterNamesLabel",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WDSIconIcVisibilityOffFilled.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        iconContainer: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          width: "xn6xy2s",
          $$css: !0,
        },
        label: {
          fontSize: "x1pg5gke",
          lineHeight: "x1d3mw78",
          color: "x1bvqhpb",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(5),
        a = t.isSingleOptionPoll,
        i = a ? void 0 : d.iconContainer,
        l;
      n[0] !== i
        ? ((l = c.jsx(r("WDSIconIcVisibilityOffFilled.react"), {
            width: 12,
            height: 12,
            xstyle: i,
            colorName: "contentDeemphasized",
          })),
          (n[0] = i),
          (n[1] = l))
        : (l = n[1]);
      var u;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = c.jsx(
            "span",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                d.label,
                o("WAWebUISpacing").uiPadding.start5,
              ),
              { children: s._(/*BTDS*/ "Voter names hidden") },
            ),
          )),
          (n[2] = u))
        : (u = n[2]);
      var m;
      return (
        n[3] !== l
          ? ((m = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: o("WAWebUISpacing").uiPadding.all4,
              testid: void 0,
              children: [l, u],
            })),
            (n[3] = l),
            (n[4] = m))
          : (m = n[4]),
        m
      );
    }
    l.default = m;
  },
  226,
);
