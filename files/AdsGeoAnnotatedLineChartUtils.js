__d(
  "AdsGeoAnnotatedLineChartUtils",
  [
    "AdsGeoAnnotatedLineChartIconsUtils",
    "GeoLineChartUtils",
    "GeoPrivateBaseChartUtils",
    "react",
    "react-compiler-runtime",
    "useGeoChartContext",
    "useGeoChartData",
    "useGeoChartDataEndPoint",
    "useGeoChartGetColorForSeries",
    "useGeoPrivateChartSeriesDataPrimaryValues",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e, t) {
      var n = o("react-compiler-runtime").c(13),
        a = r("useGeoChartData")(),
        i = r("useGeoChartContext")(),
        l = i.contentRect,
        u = l.left,
        c = l.width,
        m = r("useGeoChartDataEndPoint")(a),
        p = r("useGeoPrivateChartSeriesDataPrimaryValues")(a),
        _ = r("useGeoChartGetColorForSeries")(),
        f = _.getSeriesColor,
        g = r("useGeoTheme")(),
        h = g.selectIconColor,
        y;
      n[0] !== h
        ? ((y = h({ color: "default", isDisabled: !1 })),
          (n[0] = h),
          (n[1] = y))
        : (y = n[1]);
      var C = y,
        b = o("GeoLineChartUtils").getGroupWidth(p.length, c),
        v = o("GeoLineChartUtils").useGetCoordinateFromValueAndSize(b),
        S;
      if (
        n[2] !== a ||
        n[3] !== v ||
        n[4] !== f ||
        n[5] !== b ||
        n[6] !== e ||
        n[7] !== t ||
        n[8] !== u ||
        n[9] !== C ||
        n[10] !== p ||
        n[11] !== m
      ) {
        ((S = p.map(d)),
          p.forEach(function (e, t) {
            var n = t * b + u;
            ((S[t].x = n), (S[t].hoverTargetX = Math.max(0, n - b / 2)));
            for (var r of a) {
              var o = r.value.find(function (t) {
                var n = t[0];
                return e === n;
              });
              o != null &&
                S[t].datum.push({
                  name: r.name,
                  primaryValue: o[0],
                  value: o[1],
                  index: t,
                });
            }
          }));
        var R = function (r) {
          var n = r.name,
            a = o("GeoPrivateBaseChartUtils").getSafeNameKey(n),
            i = m[a],
            l = i.max,
            u = i.min,
            c = i.span;
          p.forEach(function (a, i) {
            var d,
              m,
              p,
              _ = o("GeoLineChartUtils").getDatumFromSeriesByPrimaryValue(r, a),
              g = _[1],
              h = v({ secondaryValue: g, index: i, span: 0, max: l, min: u });
            if (!(h == null || h.length === 0 || isNaN(h[1]))) {
              var y = v({
                secondaryValue: g,
                index: i,
                span: c,
                max: l,
                min: u,
              });
              if (!(y == null || y.length === 0 || isNaN(y[1]))) {
                var b = h[0],
                  R = h[1],
                  L = y[0],
                  E = y[1];
                ((d = S[i].dataIcons) == null ||
                  d.push(
                    o("AdsGeoAnnotatedLineChartIconsUtils").adsGeoChartMarker(
                      b,
                      R,
                      i,
                      e != null ? e : "edit-history",
                      o("AdsGeoAnnotatedLineChartIconsUtils").getIconPath(
                        e != null ? e : "edit-history",
                        C,
                      ),
                      0.55,
                      n.toString(),
                      t,
                    ),
                  ),
                  (m = S[i].dataIconsFill) == null ||
                    m.push(
                      o("AdsGeoAnnotatedLineChartIconsUtils").adsGeoChartMarker(
                        b,
                        R,
                        i,
                        e != null ? e : "edit-history",
                        o("AdsGeoAnnotatedLineChartIconsUtils").getIconPath(
                          e != null ? e : "edit-history",
                          C,
                        ),
                        1,
                        n.toString(),
                        t,
                      ),
                    ),
                  (p = S[i].dataCircles) == null ||
                    p.push(
                      s.jsx(
                        o("GeoLineChartUtils").DatumCircle,
                        { cx: L, cy: E, stroke: f(n) },
                        r.name.toString() + "-" + a.toString(),
                      ),
                    ));
              }
            }
          });
        };
        for (var L of a) R(L);
        ((n[2] = a),
          (n[3] = v),
          (n[4] = f),
          (n[5] = b),
          (n[6] = e),
          (n[7] = t),
          (n[8] = u),
          (n[9] = C),
          (n[10] = p),
          (n[11] = m),
          (n[12] = S));
      } else S = n[12];
      return S;
    }
    function d(e) {
      return {
        datum: [],
        key: e,
        hoverTargetX: 0,
        dataIcons: [],
        dataIconsFill: [],
        dataCircles: [],
        x: 0,
      };
    }
    function m(e) {
      return e == null ? null : new Date(e * 1e3).toDateString();
    }
    ((l.useAdsGeoAnnotatedChartLinesHoverTargets = c),
      (l.formatTimestampToDateTime = m));
  },
  98,
);
