__d(
  "getMerResponsiveCascadingStyle",
  ["MerResponsiveBreakpoints", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = []
      .concat(o("MerResponsiveBreakpoints").BREAKPOINT_LOOKUP_SEQUENCE)
      .reverse();
    function s(t) {
      if (t.mobile == null)
        throw r("err")(
          "Responsive attribute requires mobile value as the default",
        );
      var n = t.mobile,
        o = { mobile: n, tablet: n, desktop: n, desktopLarge: n };
      return (
        e.forEach(function (e) {
          var r = e;
          t[r] != null ? ((o[r] = t[r]), (n = o[r])) : (o[r] = n);
        }),
        o
      );
    }
    l.default = s;
  },
  98,
);
