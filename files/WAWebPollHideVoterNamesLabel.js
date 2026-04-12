__d(
  "WAWebPollHideVoterNamesLabel",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WDSIconIcVisibilityOffFilled.react",
    "react",
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
      var n = t.isSingleOptionPoll;
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: o("WAWebUISpacing").uiPadding.all4,
        testid: void 0,
        children: [
          c.jsx(r("WDSIconIcVisibilityOffFilled.react"), {
            width: 12,
            height: 12,
            xstyle: n ? void 0 : d.iconContainer,
            colorName: "contentDeemphasized",
          }),
          c.jsx(
            "span",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                d.label,
                o("WAWebUISpacing").uiPadding.start5,
              ),
              { children: s._(/*BTDS*/ "Voter names hidden") },
            ),
          ),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
