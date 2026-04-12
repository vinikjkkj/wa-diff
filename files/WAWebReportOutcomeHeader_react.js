__d(
  "WAWebReportOutcomeHeader.react",
  ["WAWebFlexBox.react", "WAWebReportPictograms.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.reportOutcome;
      return s.jsx(o("WAWebFlexBox.react").FlexRow, {
        align: "center",
        justify: "center",
        testid: void 0,
        children: s.jsx(r("WAWebReportPictograms.react"), { reportOutcome: t }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
