__d(
  "MAIBAGeoChartDataTransform",
  ["MAIBADataVizUtil", "MAIBAGeoRenderer", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      if (!Array.isArray(e)) return [];
      var t = [];
      for (var n of e) {
        var r = o("MAIBAGeoRenderer").getPlainText(n);
        r != null && t.push(r);
      }
      return t;
    }
    function c(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            var t = o("MAIBAGeoRenderer").getPlainText(e);
            if (t == null) return null;
            var n = parseFloat(t);
            return Number.isNaN(n) ? null : n;
          })
        : [];
    }
    function d(e, t) {
      if (!Array.isArray(e)) return "Series " + (t + 1);
      var n = e[t];
      if (n == null) return "Series " + (t + 1);
      var r = o("MAIBAGeoRenderer").getPlainText(n);
      return r != null ? r : "Series " + (t + 1);
    }
    function m(e, t) {
      if (!Array.isArray(e)) return null;
      var n = e[t];
      return n == null ? null : o("MAIBAGeoRenderer").getPlainText(n);
    }
    function p(e) {
      if (typeof e == "function") {
        var t = o("MAIBAGeoRenderer").getPlainText(e);
        return [t != null ? t : "", t != null ? t : ""];
      }
      if (!Array.isArray(e)) return ["", ""];
      var n = e[0] != null ? o("MAIBAGeoRenderer").getPlainText(e[0]) : null,
        r = e[1] != null ? o("MAIBAGeoRenderer").getPlainText(e[1]) : null;
      return [n != null ? n : "", r != null ? r : ""];
    }
    function _(e) {
      var t,
        n = u(e.axis),
        r = p(e.axis_label),
        a = r[0],
        i = r[1],
        l = e.series,
        s = e.series_labels,
        m = [];
      if (Array.isArray(l))
        for (
          var _ = function () {
              var e = l[f],
                t = c(e),
                r = d(s, f),
                o = n.map(function (e, n) {
                  var r = n < t.length ? t[n] : null;
                  return [e, r];
                });
              m.push({ name: r, labels: [a, i], value: o });
            },
            f = 0;
          f < l.length;
          f++
        )
          _();
      return {
        chartData: m,
        chartTitle:
          (t = o("MAIBAGeoRenderer").getPlainText(e.title)) != null ? t : "",
        chartDescription: o("MAIBAGeoRenderer").getText(e.description),
        primaryAxisLabel: a,
      };
    }
    function f(e) {
      var t = u(e.axis),
        n = p(e.axis_label),
        r = n[0],
        a = Array.isArray(e.series) ? e.series : [],
        i = e.series_labels,
        l = [{ primaryValue: r }].concat(
          a.map(function (e, t) {
            return { primaryValue: d(i, t) };
          }),
        ),
        s = t.map(function (e, t) {
          var n = [{ primaryValue: e }];
          for (var r of a) {
            var i = Array.isArray(r) ? r[t] : null,
              l = i != null ? o("MAIBAGeoRenderer").getPlainText(i) : null;
            n.push({ primaryValue: l != null ? l : "" });
          }
          return n;
        });
      return [l].concat(s);
    }
    function g(e, t) {
      var n = u(e.axis),
        r = p(e.axis_label),
        a = r[0],
        i = Array.isArray(e.series) ? e.series : [],
        l = e.series_labels,
        s = e.column_types,
        c = e.series_metric_names,
        _ = m(s, 0),
        f =
          _ != null && _ !== ""
            ? _.toUpperCase()
            : t === o("MAIBADataVizUtil").MAIBADataVizType.LINE_CHART
              ? "DATE"
              : "STRING",
        g = [{ label: a, type: f }].concat(
          i.map(function (e, t) {
            var n = m(s, t + 1),
              r = m(c, t);
            return babelHelpers.extends(
              {
                label: d(l, t),
                type: n != null && n !== "" ? n.toUpperCase() : "FLOAT",
              },
              r != null && r !== "" ? { metric_name: r } : {},
            );
          }),
        ),
        h = n.map(function (e, t) {
          var n = [e];
          for (var r of i) {
            var a = Array.isArray(r) ? r[t] : null,
              l = a != null ? o("MAIBAGeoRenderer").getPlainText(a) : null;
            n.push(l != null ? l : "");
          }
          return { values: n };
        });
      return { config: g, rawData: h };
    }
    ((l.buildChartAdapterData = _),
      (l.buildTableDataFromChart = f),
      (l.buildLegacyDataVizFromChart = g));
  },
  98,
);
