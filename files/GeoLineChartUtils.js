__d(
  "GeoLineChartUtils",
  [
    "FBLogger",
    "GeoChartCoordinateUtils",
    "GeoDomID",
    "GeoLinearInterpolation",
    "GeoPrivateBaseChartUtils",
    "GeoPrivateChartVisibilityContext",
    "isTruthy",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useBoolean",
    "useGeoChartConfigContext",
    "useGeoChartContext",
    "useGeoChartData",
    "useGeoChartDataEndPoint",
    "useGeoChartDataGetInteractiveIndices",
    "useGeoChartGetColorForSeries",
    "useGeoDataVizTheme",
    "useGeoPrivateChartSeriesDataPrimaryValues",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["htmlFor"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useMemo,
      f = function (t) {
        return r("GeoLinearInterpolation");
      };
    function g(e, t, n) {
      var a = o("react-compiler-runtime").c(20),
        i = n === void 0 ? f : n,
        l = r("useGeoChartData")(),
        u = r("useGeoChartGetColorForSeries")(),
        d = u.getSeriesColor,
        m = r("useGeoChartContext")(),
        p = m.contentRect,
        _ = p.width,
        g = r("useGeoChartDataEndPoint")(l),
        h = r("useGeoPrivateChartSeriesDataPrimaryValues")(l),
        y = r("useGeoChartConfigContext")(),
        b = y.isDescriptionUsedInKey,
        S = r("useGeoDataVizTheme")(),
        R = S.selectStrokeWidth,
        L;
      a[0] !== R
        ? ((L = R({ density: "normal" })), (a[0] = R), (a[1] = L))
        : (L = a[1]);
      var I = L,
        T = r("useGeoTheme")(),
        x;
      a[2] !== T
        ? ((x = T.selectAnimation({ timing: "fade", duration: "fast" })),
          (a[2] = T),
          (a[3] = x))
        : (x = a[3]);
      var $ = x,
        P;
      a[4] !== h.length || a[5] !== _
        ? ((P = E(h.length, _)), (a[4] = h.length), (a[5] = _), (a[6] = P))
        : (P = a[6]);
      var N = D(P),
        M = v(e, t),
        w = M.callbackRef,
        A = M.isAnimationReady,
        F;
      if (
        a[7] !== w ||
        a[8] !== l ||
        a[9] !== $ ||
        a[10] !== N ||
        a[11] !== d ||
        a[12] !== e ||
        a[13] !== i ||
        a[14] !== A ||
        a[15] !== b ||
        a[16] !== h ||
        a[17] !== g ||
        a[18] !== I
      ) {
        var O = {},
          B = function (t) {
            var e,
              n = t.description,
              a = t.isPrediction,
              l = t.name,
              s = o("GeoPrivateBaseChartUtils").getSafeNameKey(l, n, b),
              u = i(t),
              c = g[s],
              m = c.max,
              p = c.min,
              _ = c.span;
            O[s] = {
              color: d(o("GeoPrivateBaseChartUtils").getColorNameKey(l, n, b)),
              path: [],
              isPrediction: r("isTruthy")(a),
            };
            var f = h.map(function (e, n) {
              var r = k(t, e),
                o = r[1];
              return isNaN(o)
                ? null
                : N({ secondaryValue: o, index: n, span: _, max: m, min: p });
            });
            (e = O[s].path).push.apply(
              e,
              o("GeoChartCoordinateUtils").buildLineToFromNullablePoints(u, f),
            );
          };
        for (var W of l) B(W);
        ((F = []),
          Object.keys(O).forEach(function (t, n) {
            F.push(
              O[t].path.map(function (o, a) {
                return c.createElement(
                  "path",
                  babelHelpers.extends(
                    {},
                    (s || (s = r("stylex"))).props(
                      A && e && [$, C.fadeIn],
                      !A && e && C.beforeAnimationStarts,
                    ),
                    {
                      d: o,
                      fill: "none",
                      key: n + "-" + a,
                      pointerEvents: "none",
                      ref: w,
                      stroke: O[t].color,
                      strokeDasharray: O[t].isPrediction ? "6 8" : void 0,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: I,
                    },
                  ),
                );
              }),
            );
          }),
          (a[7] = w),
          (a[8] = l),
          (a[9] = $),
          (a[10] = N),
          (a[11] = d),
          (a[12] = e),
          (a[13] = i),
          (a[14] = A),
          (a[15] = b),
          (a[16] = h),
          (a[17] = g),
          (a[18] = I),
          (a[19] = F));
      } else F = a[19];
      return F;
    }
    var h = "x18re5ia-B",
      y = "x1npa8st-B",
      C = {
        clipPath: {
          animationFillMode: "x10e4vud",
          animationName: "x1no39iu",
          $$css: !0,
        },
        fadeIn: {
          animationFillMode: "x10e4vud",
          animationName: "xqcmdr3",
          $$css: !0,
        },
        beforeAnimationStarts: { opacity: "xg01cxk", $$css: !0 },
      };
    function b(t) {
      var n = o("react-compiler-runtime").c(15),
        a = r("useGeoChartContext")(),
        i = a.rootRect,
        l = i.height,
        u = i.left,
        d = i.width,
        m = r("useGeoTheme")(),
        p = m.selectAnimation,
        _ = r("useGeoDataVizTheme")(),
        f = _.selectStrokeWidth,
        g;
      n[0] !== f
        ? ((g = f({ density: "scarce" })), (n[0] = f), (n[1] = g))
        : (g = n[1]);
      var h = g,
        y = p({ timing: "move", duration: "sluggish" }),
        b;
      n[2] !== t ? ((b = { id: t }), (n[2] = t), (n[3] = b)) : (b = n[3]);
      var v = o("GeoDomID").useApplyGeoDomIDsDirectly(b),
        S;
      if (n[4] !== v) {
        var R = v.htmlFor,
          L = babelHelpers.objectWithoutPropertiesLoose(v, e);
        ((S = L), (n[4] = v), (n[5] = S));
      } else S = n[5];
      var E = (s || (s = r("stylex"))).props(y, C.clipPath),
        k = h * 2 + l,
        I = d + 2 * h,
        T = u - h,
        D = "-" + h,
        x;
      n[6] !== E || n[7] !== k || n[8] !== I || n[9] !== T || n[10] !== D
        ? ((x = c.jsx(
            "rect",
            babelHelpers.extends({}, E, { height: k, width: I, x: T, y: D }),
          )),
          (n[6] = E),
          (n[7] = k),
          (n[8] = I),
          (n[9] = T),
          (n[10] = D),
          (n[11] = x))
        : (x = n[11]);
      var $;
      return (
        n[12] !== S || n[13] !== x
          ? (($ = c.jsx(
              "clipPath",
              babelHelpers.extends({}, S, { children: x }),
            )),
            (n[12] = S),
            (n[13] = x),
            (n[14] = $))
          : ($ = n[14]),
        $
      );
    }
    function v(e, t) {
      var n = o("react-compiler-runtime").c(7),
        a = r("useBoolean")(!1),
        i = a.setTrue,
        l = a.value,
        s;
      n[0] !== t || n[1] !== e || n[2] !== i
        ? ((s = function (r) {
            e &&
              r != null &&
              t != null &&
              (r.setAttribute("clip-path", L(t)), i());
          }),
          (n[0] = t),
          (n[1] = e),
          (n[2] = i),
          (n[3] = s))
        : (s = n[3]);
      var u = s,
        c;
      return (
        n[4] !== u || n[5] !== l
          ? ((c = { callbackRef: u, isAnimationReady: l }),
            (n[4] = u),
            (n[5] = l),
            (n[6] = c))
          : (c = n[6]),
        c
      );
    }
    function S() {
      var e = r("useGeoChartData")(),
        t = r("useGeoChartContext")(),
        n = t.contentRect.width,
        a = r("useGeoChartDataEndPoint")(e),
        i = r("useGeoPrivateChartSeriesDataPrimaryValues")(e),
        l = r("useGeoChartConfigContext")(),
        s = l.isDescriptionUsedInKey,
        u = r("useGeoDataVizTheme")(),
        d = u.selectStroke,
        m = u.selectStrokeWidth,
        p = m({ density: "normal" }),
        g = D(E(i.length, n));
      return _(
        function () {
          var t = {},
            n = function (n) {
              var e,
                r = n.description,
                l = n.name,
                u = o("GeoPrivateBaseChartUtils").getSafeNameKey(l, r, s),
                c = f(n),
                d = a[u],
                m = d.max,
                p = d.min,
                _ = d.span;
              t[u] = [];
              var h = new Array(i.length).fill(null),
                y = 0;
              (i.forEach(function (e, t) {
                var r = t + y,
                  o = k(n, e),
                  a = o[0],
                  l = o[1],
                  s = function (n) {
                    h[r + n] = g({
                      secondaryValue: 0,
                      index: t + n,
                      span: _,
                      max: m,
                      min: p,
                    });
                  };
                !isNaN(l) && l == null
                  ? (s(0), t > 0 && s(-1), t < i.length - 1 && s(1))
                  : h[r - 1] !== null && (h.splice(r + 1, 0, null), y++);
              }),
                (e = t[u]).push.apply(
                  e,
                  o("GeoChartCoordinateUtils").buildLineToFromNullablePoints(
                    c,
                    h,
                  ),
                ));
            };
          for (var r of e) n(r);
          var l = [];
          return (
            Object.keys(t).forEach(function (e, n) {
              l.push.apply(
                l,
                t[e].map(function (e, t) {
                  return c.jsx(
                    "path",
                    {
                      d: e,
                      fill: "none",
                      pointerEvents: "none",
                      stroke: d({ path: "tick" }),
                      strokeDasharray: "0 6",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: p,
                    },
                    n + "-" + t,
                  );
                }),
              );
            }),
            l
          );
        },
        [e, g, i, d, a, p, s],
      );
    }
    function R() {
      var e = o("react-compiler-runtime").c(12),
        t = r("useGeoChartData")(),
        n = r("useGeoChartContext")(),
        a = n.contentRect,
        i = a.left,
        l = a.width,
        s = r("useGeoChartDataEndPoint")(t),
        u = r("useGeoPrivateChartSeriesDataPrimaryValues")(t),
        d = r("useGeoChartConfigContext")(),
        m = d.isDescriptionUsedInKey,
        p = E(u.length, l),
        _ = r("useGeoChartGetColorForSeries")(),
        f = _.getSeriesColor,
        g = D(p),
        h = r("useGeoChartDataGetInteractiveIndices")(t),
        y;
      if (
        e[0] !== h ||
        e[1] !== t ||
        e[2] !== g ||
        e[3] !== f ||
        e[4] !== p ||
        e[5] !== m ||
        e[6] !== i ||
        e[7] !== u ||
        e[8] !== s
      ) {
        var C;
        (e[10] !== h
          ? ((C = function (t, n) {
              return {
                datum: [],
                key: t,
                hoverTargetX: 0,
                dataCircles: [],
                x: 0,
                isVisible: h.has(n),
              };
            }),
            (e[10] = h),
            (e[11] = C))
          : (C = e[11]),
          (y = u.map(C)),
          u.forEach(function (e, n) {
            var r = n * p + i;
            ((y[n].x = r), (y[n].hoverTargetX = Math.max(0, r - p / 2)));
            for (var o of t) {
              var a = o.interactiveValueIndices;
              if (a == null || a.has(n)) {
                var l = o.value.find(function (t) {
                  var n = t[0];
                  return e === n;
                });
                l != null &&
                  y[n].datum.push({
                    name: o.name,
                    primaryValue: l[0],
                    value: l[1],
                    index: n,
                    description: o.description,
                  });
              }
            }
          }));
        var b = function (t) {
          var e = t.description,
            n = t.interactiveValueIndices,
            r = t.name,
            a = o("GeoPrivateBaseChartUtils").getSafeNameKey(r, e, m),
            i = s[a],
            l = i.max,
            d = i.min,
            p = i.span;
          u.forEach(function (e, a) {
            if (n == null || n.has(a)) {
              var i = k(t, e),
                s = i[1],
                u = g({ secondaryValue: s, index: a, span: p, max: l, min: d });
              if (u == null || isNaN(u[1])) return;
              var _ = u[0],
                h = u[1],
                C = t.description,
                b = o("GeoPrivateBaseChartUtils").getSafeNameKey(r, C, m),
                v = b + "-" + e.toString();
              y[a].dataCircles.push(
                c.jsx(
                  x,
                  {
                    cx: _,
                    cy: h,
                    stroke: f(
                      o("GeoPrivateBaseChartUtils").getColorNameKey(r, C, m),
                    ),
                  },
                  v,
                ),
              );
            }
          });
        };
        for (var v of t) b(v);
        ((e[0] = h),
          (e[1] = t),
          (e[2] = g),
          (e[3] = f),
          (e[4] = p),
          (e[5] = m),
          (e[6] = i),
          (e[7] = u),
          (e[8] = s),
          (e[9] = y));
      } else y = e[9];
      return y;
    }
    function L(e) {
      return "url(#" + e + ")";
    }
    function E(e, t) {
      return e <= 1 ? t : t / (e - 1);
    }
    function k(e, t) {
      var n = e.name,
        o = e.value,
        a = o.find(function (e) {
          return String(e[0]) === String(t);
        });
      if (a == null)
        throw r("FBLogger")("GeodesicComponents").mustfixThrow(
          "Cannot find datum in series %s, for the primaryValue: %s",
          n.toString(),
          t.toString(),
        );
      return a;
    }
    function I(e, t) {
      var n;
      return (n = k(e, t)) == null ? void 0 : n[1];
    }
    function T(e) {
      return isNaN(e) || e == null;
    }
    function D(e) {
      var t = o("react-compiler-runtime").c(5),
        n = r("useGeoChartContext")(),
        a = n.contentRect,
        i = a.height,
        l = a.left,
        s = a.top,
        u;
      return (
        t[0] !== e || t[1] !== i || t[2] !== l || t[3] !== s
          ? ((u = function (n) {
              var t = n.index,
                r = n.max,
                o = n.min,
                a = n.secondaryValue,
                u = n.span;
              if (a == null) return null;
              var c = i;
              r !== o && (c = (r / (r - o)) * i);
              var d = u === 0 ? c + s : c - (a / u) * i + s,
                m = t * e + l;
              return [m, d];
            }),
            (t[0] = e),
            (t[1] = i),
            (t[2] = l),
            (t[3] = s),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.cx,
        a = e.cy,
        i = e.stroke,
        l = r("useGeoDataVizTheme")(),
        s = l.selectFill,
        u;
      t[0] !== s
        ? ((u = s({ context: "chart" })), (t[0] = s), (t[1] = u))
        : (u = t[1]);
      var d;
      return (
        t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== u
          ? ((d = c.jsx("circle", {
              cx: n,
              cy: a,
              fill: u,
              pointerEvents: "none",
              r: 4,
              stroke: i,
              strokeWidth: 3,
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = i),
            (t[5] = u),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    function $(e, t) {
      var n = o("react-compiler-runtime").c(17),
        a = r("useGeoChartData")(),
        i = r("useGeoChartContext")(),
        l = i.contentRect,
        u = l.width,
        d = r("useGeoChartDataEndPoint")(a),
        m = r("useGeoPrivateChartSeriesDataPrimaryValues")(a),
        _ = r("useGeoChartGetColorForSeries")(),
        f = _.getSeriesColor,
        g;
      n[0] !== m.length || n[1] !== u
        ? ((g = E(m.length, u)), (n[0] = m.length), (n[1] = u), (n[2] = g))
        : (g = n[2]);
      var h = D(g),
        y = r("useGeoChartConfigContext")(),
        b = y.isDescriptionUsedInKey,
        S = p(r("GeoPrivateChartVisibilityContext")),
        R = v(e, t),
        L = R.callbackRef,
        k = R.isAnimationReady,
        x = r("useGeoTheme")(),
        $;
      n[3] !== x
        ? (($ = x.selectAnimation({ timing: "fade", duration: "fast" })),
          (n[3] = x),
          (n[4] = $))
        : ($ = n[4]);
      var P = $,
        N;
      return (
        n[5] !== L ||
        n[6] !== a ||
        n[7] !== P ||
        n[8] !== h ||
        n[9] !== f ||
        n[10] !== e ||
        n[11] !== k ||
        n[12] !== S ||
        n[13] !== b ||
        n[14] !== m ||
        n[15] !== d
          ? ((N = []),
            a.forEach(function (t, n) {
              var a = t.description,
                i = t.name,
                l = o("GeoPrivateBaseChartUtils").getSafeNameKey(i, a, b),
                u = d[l],
                p = u.max,
                _ = u.min,
                g = u.span;
              m.forEach(function (l, u) {
                var d = I(t, l),
                  y = h({
                    secondaryValue: d,
                    index: u,
                    span: g,
                    max: p,
                    min: _,
                  });
                if (!(y == null || isNaN(y[1]))) {
                  var v = u > 0 ? I(t, m[u - 1]) : null,
                    R = T(v),
                    E =
                      u < (m == null ? void 0 : m.length) - 1
                        ? I(t, m[u + 1])
                        : null,
                    D = T(E);
                  if (R && D) {
                    var x = y[0],
                      $ = y[1];
                    N.push(
                      c.createElement(
                        "circle",
                        babelHelpers.extends(
                          {},
                          (s || (s = r("stylex"))).props(
                            k && S && [P, C.fadeIn],
                            !k && e && S && C.beforeAnimationStarts,
                          ),
                          {
                            cx: x,
                            cy: $,
                            fill: f(
                              o("GeoPrivateBaseChartUtils").getColorNameKey(
                                i,
                                a,
                                b,
                              ),
                            ),
                            key: n + "-" + l.toString() + "-circle",
                            pointerEvents: "none",
                            r: 3,
                            ref: L,
                          },
                        ),
                      ),
                    );
                  }
                }
              });
            }),
            (n[5] = L),
            (n[6] = a),
            (n[7] = P),
            (n[8] = h),
            (n[9] = f),
            (n[10] = e),
            (n[11] = k),
            (n[12] = S),
            (n[13] = b),
            (n[14] = m),
            (n[15] = d),
            (n[16] = N))
          : (N = n[16]),
        N
      );
    }
    ((l.useGeoChartLines = g),
      (l.useGeoLineChartDrawInClipPath = b),
      (l.useGeoNullDataRenderer = S),
      (l.useGeoChartLinesHoverTargets = R),
      (l.getGroupWidth = E),
      (l.getDatumFromSeriesByPrimaryValue = k),
      (l.useGetCoordinateFromValueAndSize = D),
      (l.DatumCircle = x),
      (l.useGeoSinglePointsRenderer = $));
  },
  98,
);
