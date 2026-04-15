__d(
  "WAWebReportOutcomeHeader.react",
  [
    "WAWebFlexBox.react",
    "WAWebReportPictograms.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.reportOutcome,
        a;
      return (
        t[0] !== n
          ? ((a = s.jsx(o("WAWebFlexBox.react").FlexRow, {
              align: "center",
              justify: "center",
              testid: void 0,
              children: s.jsx(r("WAWebReportPictograms.react"), {
                reportOutcome: n,
              }),
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    l.default = u;
  },
  98,
);
