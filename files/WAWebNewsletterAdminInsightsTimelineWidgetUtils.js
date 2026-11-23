__d(
  "WAWebNewsletterAdminInsightsTimelineWidgetUtils",
  ["sumBy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      for (var n = 0, r = 0; r < t; r++) n += e[r].data.length;
      return n;
    }
    function s(e) {
      return e.flatMap(u);
    }
    function u(e) {
      return e.data.map(c);
    }
    function c(e) {
      return r("sumBy")(e, function (e) {
        var t = e[1];
        return t;
      });
    }
    ((l.getChartColorOffset = e), (l.getDataSetsCumulativeSums = s));
  },
  98,
);
