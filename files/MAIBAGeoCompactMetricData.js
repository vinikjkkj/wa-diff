__d(
  "MAIBAGeoCompactMetricData",
  ["MAIBAGeoRenderer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || e.trim() === "") return null;
      var t = Number(e);
      return Number.isFinite(t) ? t : null;
    }
    function s(e) {
      if (e == null || e === "") return [];
      var t = e.split(",").map(function (e) {
        return Number(e.trim());
      });
      return t.every(function (e) {
        return Number.isFinite(e);
      })
        ? t
        : [];
    }
    function u(e) {
      return e == null || e === ""
        ? []
        : e.split(",").map(function (e) {
            return e.trim();
          });
    }
    function c(t, n, r, o, a, i, l) {
      var c = e(n),
        d = e(r),
        m = s(a);
      return t == null || t === "" || c == null || d == null || m.length < 2
        ? null
        : {
            __typename: "XFBSparklineMetricObject",
            benchmark: e(l),
            dates: u(i),
            delta: d,
            entity_type: "EMBED",
            metric_value: c,
            sentiment: o === "" ? null : o,
            series: m,
            sparkline_label: t,
          };
    }
    function d(t) {
      var n,
        r = e((n = o("MAIBAGeoRenderer")).getString(t.current_value)),
        a = e(n.getString(t.max_value)),
        i = n.getString(t.label),
        l = n.getString(t.current_value_formatted);
      return r == null || a == null || i == null || i === "" || l == null
        ? null
        : {
            __typename: "XFBHeatBarObject",
            current_value: r,
            current_value_formatted: l,
            entity_type: "EMBED",
            heat_bar_label: i,
            max_value: a,
            min_value: e(o("MAIBAGeoRenderer").getString(t.min_value)),
            reached_value: e(o("MAIBAGeoRenderer").getString(t.reached_value)),
            sentiment: o("MAIBAGeoRenderer").getString(t.sentiment),
            target_value: e(o("MAIBAGeoRenderer").getString(t.target_value)),
            target_value_formatted: o("MAIBAGeoRenderer").getString(
              t.target_value_formatted,
            ),
          };
    }
    function m(e) {
      var t;
      return c(
        (t = o("MAIBAGeoRenderer")).getString(e.label),
        t.getString(e.value),
        t.getString(e.delta),
        t.getString(e.sentiment),
        t.getString(e.series),
        t.getString(e.dates),
        t.getString(e.benchmark),
      );
    }
    function p(e, t) {
      if (!Array.isArray(e)) return null;
      var n = e[t];
      return n == null ? null : o("MAIBAGeoRenderer").getPlainText(n);
    }
    function _(e) {
      if (!Array.isArray(e.metrics)) return null;
      var t = [];
      for (var n of e.metrics) {
        var r = c(
          p(n, 0),
          p(n, 1),
          p(n, 2),
          p(n, 3),
          p(n, 4),
          p(n, 5),
          p(n, 6),
        );
        if (r != null) {
          var o = r.benchmark,
            a = r.dates,
            i = r.delta,
            l = r.metric_value,
            s = r.sentiment,
            u = r.series,
            d = r.sparkline_label;
          t.push({
            benchmark: o,
            dates: a,
            delta: i,
            metric_value: l,
            sentiment: s,
            series: u,
            sparkline_label: d,
          });
        }
      }
      return t.length < 2
        ? null
        : {
            __typename: "XFBSparklineMetricGroupObject",
            entity_type: "EMBED",
            metrics: t,
          };
    }
    ((l.getHeatBarObject = d),
      (l.getSparklineMetricObject = m),
      (l.getSparklineMetricGroupObject = _));
  },
  98,
);
