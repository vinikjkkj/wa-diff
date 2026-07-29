__d(
  "WAWebPollHideVoterNamesLabel",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSIconIcVisibilityOffFilled.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          flex: "x3psx0u",
          paddingTop: "x1iorvi4",
          paddingBottom: "xjkvuk6",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.trailingSeparator,
        a,
        i,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("WDSIconIcVisibilityOffFilled.react"), {
            width: 12,
            height: 12,
            colorName: "contentDeemphasized",
          })),
          (i = { className: "x1pg5gke x1d3mw78 x1bvqhpb xaso8d8" }),
          (l = s._(/*BTDS*/ "Names hidden")),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : ((a = t[0]), (i = t[1]), (l = t[2]));
      var d;
      t[3] !== n
        ? ((d = n
            ? u.jsx("span", {
                className: "x135b78x x11lfxj5",
                children: "\xB7",
              })
            : null),
          (t[3] = n),
          (t[4] = d))
        : (d = t[4]);
      var m;
      return (
        t[5] !== d
          ? ((m = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: c.container,
              testid: "poll-hide-voter-names-label",
              children: [
                a,
                u.jsxs(
                  "span",
                  babelHelpers.extends({}, i, { children: [l, d] }),
                ),
              ],
            })),
            (t[5] = d),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    l.default = d;
  },
  226,
);
