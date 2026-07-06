__d(
  "WAWebPollHideVoterNamesLabel",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSIconIcVisibilityOffFilled.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        iconContainer: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          width: "xn6xy2s",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.isSingleOptionPoll,
        a = n ? void 0 : c.iconContainer,
        i;
      t[0] !== a
        ? ((i = u.jsx(r("WDSIconIcVisibilityOffFilled.react"), {
            width: 12,
            height: 12,
            xstyle: a,
            colorName: "contentDeemphasized",
          })),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx("span", {
            className: "x1pg5gke x1d3mw78 x1bvqhpb xaso8d8",
            children: s._(/*BTDS*/ "Voter names hidden"),
          })),
          (t[2] = l))
        : (l = t[2]);
      var d;
      return (
        t[3] !== i
          ? ((d = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: o("WDSPaddings.stylex").wdsPaddings.padding4,
              testid: "poll-hide-voter-names-label",
              children: [i, l],
            })),
            (t[3] = i),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = d;
  },
  226,
);
