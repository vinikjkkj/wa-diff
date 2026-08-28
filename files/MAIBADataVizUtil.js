__d(
  "MAIBADataVizUtil",
  [
    "fbt",
    "$InternalEnum",
    "AdsCurrencyFormatter",
    "DateTime",
    "FBLogger",
    "GeoPrivateBaseChartUtils",
    "MAIBAChartingFormatter",
    "MAIBATableContentCell.react",
    "Timezone",
    "ads-lib-formatters",
    "dom-to-image",
    "getMAIBAAccountCurrency",
    "gkx",
    "intlSummarizeNumber",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "useGeoChartAxisScale",
    "useGeoChartConfigContext",
    "useGeoChartContext",
    "useGeoChartDataEndPoint",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useMemo,
      p = n("$InternalEnum").Mirrored([
        "LINE_CHART",
        "HORIZONTAL_BAR_CHART",
        "VERTICAL_BAR_CHART",
        "TABLE",
        "SCORECARD_DATA_CARD",
        "SCORECARD_ISSUE_CARD",
        "SCORECARD_KPI_TILE",
        "SCORECARD_KPI_TILES_GRID",
        "FUNNEL_CHART",
      ]),
      _ = ["ad", "ad set", "campaign"],
      f = "Other",
      g = 16384,
      h = {
        NONE: "NONE",
        DATE: "DATE",
        CURRENCY: "CURRENCY",
        PERCENTAGE: "PERCENTAGE",
        INTEGER: "INTEGER",
        INT: "INT",
        FLOAT: "FLOAT",
        STRING: "STRING",
        STR: "STR",
        AD_OBJECT: "AD_OBJECT",
        AD_OBJECT_ALT: "AD_OBJECT_ALT",
        ASSET: "ASSET",
        ASSET_ALT: "ASSET_ALT",
      },
      y = new Set([
        h.NONE,
        h.DATE,
        h.STRING,
        h.STR,
        h.AD_OBJECT,
        h.AD_OBJECT_ALT,
        h.ASSET,
        h.ASSET_ALT,
      ]),
      C = s._(/*BTDS*/ "Swap"),
      b = s._(/*BTDS*/ "Debug"),
      v = s._(/*BTDS*/ "Export"),
      S = s._(/*BTDS*/ "Copy as Image"),
      R = s._(/*BTDS*/ "Download CSV"),
      L = s._(/*BTDS*/ "Save as PNG"),
      E = s._(/*BTDS*/ "Unable to load data. Please try again later."),
      k =
        '\n  .maiba-hover-sort [class*="useWebTableSortable"][class*="icon"] {\n    opacity: 0;\n    transition: opacity 0.15s ease;\n  }\n  .maiba-hover-sort [class*="useWebTableSortable"][class*="layout"]:hover [class*="useWebTableSortable"][class*="icon"] {\n    opacity: 1;\n  }\n  .maiba-hover-sort [aria-sort="ascending"] [class*="useWebTableSortable"][class*="icon"],\n  .maiba-hover-sort [aria-sort="descending"] [class*="useWebTableSortable"][class*="icon"] {\n    opacity: 1;\n  }\n';
    function I(e) {
      return e === p.LINE_CHART
        ? s._(/*BTDS*/ "Line (Default)")
        : s._(/*BTDS*/ "Line");
    }
    function T(e) {
      return e === p.HORIZONTAL_BAR_CHART
        ? s._(/*BTDS*/ "Horizontal Bar (Default)")
        : s._(/*BTDS*/ "Horizontal Bar");
    }
    function D(e) {
      return e === p.VERTICAL_BAR_CHART
        ? s._(/*BTDS*/ "Vertical Bar (Default)")
        : s._(/*BTDS*/ "Vertical Bar");
    }
    function x(e) {
      return e === p.TABLE
        ? s._(/*BTDS*/ "Table (Default)")
        : s._(/*BTDS*/ "Table");
    }
    function $(e) {
      return e === p.SCORECARD_DATA_CARD
        ? s._(/*BTDS*/ "Data Card (Default)")
        : s._(/*BTDS*/ "Data Card");
    }
    var P = "% change vs. prior 7-day average";
    function N(e, t) {
      return e === p.SCORECARD_DATA_CARD && t === P
        ? s._(/*BTDS*/ "\u0025 change vs. prior 7-day average")
        : t;
    }
    var M = "Issues rendering data viz data in the GeoChart component",
      w = "Issues rendering data viz data in the GeoTable component",
      A = "Missing LLM data to populate data viz component";
    function F() {
      return r("gkx")("16646");
    }
    function O() {
      return r("gkx")("19223");
    }
    function B() {
      return r("gkx")("20805");
    }
    var W = o("ads-lib-formatters").createIntlPercentFormatter(2, !1);
    function q(e) {
      var t = e;
      return (
        (t = t.replace(/^[^0-9+\-.]+/, "")),
        (t = t.replace(/[^0-9.]+$/, "")),
        H(t)
      );
    }
    function U(e) {
      var t;
      return typeof e == "number"
        ? e
        : (t = o("ads-lib-formatters").parseNumber(e)) != null
          ? t
          : NaN;
    }
    function V(e, t) {
      var n = U(e);
      return Number.isFinite(n) ? t(n) : typeof e == "string" ? e : String(e);
    }
    function H(e) {
      var t = o("ads-lib-formatters").parseNumber(e);
      return t != null ? t : e;
    }
    function G(e) {
      return e != null ? e : "N/A";
    }
    function z(e, t) {
      var n = t.toUpperCase();
      if (n === h.INTEGER || n === h.INT || n === h.FLOAT) return H(e);
      if (n === h.DATE) {
        var a = e,
          i = /^\d{4}-\d{2}-\d{2}$/;
        if (i.test(e)) {
          var l = r("DateTime").createFromISOString(e, o("Timezone").UTC),
            s = l.getUnixTimestamp() / 1e3;
          a = s.toString();
        }
        try {
          return (
            o("MAIBAChartingFormatter").dateTimeLabelFormatter(
              a,
              o("Timezone").UTC,
            ),
            a
          );
        } catch (e) {
          return (
            e instanceof Error
              ? r("FBLogger")("maiba_data_viz")
                  .catching(e)
                  .warn(
                    "MAIBA output an invalid date for xAxisLabelFormatter: date=%s",
                    a,
                  )
              : r("FBLogger")("MAIBA").warn(
                  "MAIBA output an invalid date for xAxisLabelFormatter: date=%s",
                  a,
                ),
            null
          );
        }
      } else if (n === h.PERCENTAGE) {
        var u = e;
        e.endsWith("%") && (u = e.slice(0, -1));
        var c = Number(u);
        return isNaN(c) ? e : c;
      } else if (n === h.CURRENCY) return q(e);
      return e;
    }
    function j(e, t) {
      var n = t.toUpperCase();
      if (n === h.INTEGER || n === h.INT || n === h.FLOAT) {
        var r = H(e);
        return typeof r == "number" ? r : null;
      } else if (n === h.PERCENTAGE) {
        var o = e;
        e.endsWith("%") && (o = e.slice(0, -1));
        var a = Number(o);
        return isNaN(a) ? null : a;
      } else if (n === h.CURRENCY) {
        var i = q(e);
        return typeof i == "number" ? i : null;
      }
      return null;
    }
    function K() {
      return r("getMAIBAAccountCurrency")();
    }
    function Q(e, t) {
      var n = e.length > 0 && _.includes(e[0].primaryValue.toLowerCase());
      return n && t === 0 ? 2 : 1;
    }
    function X(e) {
      var t = r("intlSummarizeNumber")(e, 2, "SHORT", "ROUND", "HIDE_IF_ZERO");
      return (t.includes(".") && (t = t.replace(/\.?0+$/, "")), t);
    }
    function Y(e) {
      return /^[+-]?(?:\d+|\d+\.\d{1,2}|\.\d{1,2})$/.test(e.trim());
    }
    function J(e) {
      return Number.isInteger(e) ? e.toFixed(0) : e.toFixed(2);
    }
    function Z(e, t, n) {
      if (e != null && e.length) {
        var r = new Map();
        for (var o of e) {
          var a = t(o),
            i = n(o);
          a != null && i != null && r.set(a, i);
        }
        return r;
      }
    }
    function ee(e) {
      return Z(
        e,
        function (e) {
          var t;
          return (t = e.values) == null ? void 0 : t[0];
        },
        function (e) {
          var t;
          return (t = e.composed_text_values) == null ? void 0 : t[0];
        },
      );
    }
    function te(e) {
      return Z(
        e,
        function (e) {
          return e.label;
        },
        function (e) {
          return e.composed_text_label;
        },
      );
    }
    function ne(e, t, n) {
      if (e.length === 0) return [];
      var r = e[0].type,
        o = e.slice(1),
        a = ve(e),
        i = n != null && n < a.length ? a[n] : null,
        l =
          i == null
            ? o.map(function (e, t) {
                return t;
              })
            : o
                .map(function (e, t) {
                  return Se(e.metric_name, i) ? t : -1;
                })
                .filter(function (e) {
                  return e !== -1;
                });
      return o
        .map(function (e, n) {
          var o,
            a = e.label,
            i = e.type,
            l = t
              .map(function (e) {
                var t = G(e.values[0]),
                  o = G(e.values[n + 1]);
                return [z(t, r), o !== "N/A" ? j(o, i) : null];
              })
              .filter(function (e) {
                return e[0] != null;
              })
              .map(function (e) {
                var t;
                return [(t = e[0]) != null ? t : 0, e[1]];
              }),
            s = (o = e.description) != null ? o : void 0;
          return {
            name: a,
            labels: [r, i],
            description: s,
            value: l,
            isPrediction: !1,
          };
        })
        .filter(function (e, t) {
          return l.includes(t);
        });
    }
    function re(e, t) {
      if (e.length === 0) return [];
      var n = e.map(function (e) {
          var t = e.composed_text_label;
          return t != null
            ? { primaryValue: e.label, composedTextValue: [t] }
            : { primaryValue: e.label };
        }),
        r = t.map(function (t) {
          return t.values.map(function (n, r) {
            var o,
              a,
              i,
              l = (o = t.composed_text_values) == null ? void 0 : o[r],
              s = G(n),
              u =
                s !== "N/A"
                  ? String(
                      z(
                        s,
                        (a = (i = e[r]) == null ? void 0 : i.type) != null
                          ? a
                          : h.STRING,
                      ),
                    )
                  : "N/A";
            return l != null
              ? { primaryValue: u, composedTextValue: [l] }
              : { primaryValue: u };
          });
        });
      return [n].concat(r);
    }
    function oe(e, t, n) {
      if (e != null) {
        var a = e.toUpperCase();
        if (a === h.DATE && t === p.TABLE)
          return function (e) {
            return r("DateTime")
              .create(Number(e), o("Timezone").UTC)
              .format("M d");
          };
        if (a === h.CURRENCY && t === p.TABLE)
          return function (e) {
            if (e === "N/A") return e;
            if (typeof e == "number")
              return r("AdsCurrencyFormatter").replaceWithSymbol(
                n != null ? n : K(),
                J(e),
              );
            if (!Y(e)) return e;
            var t = Number(e.trim());
            return Number.isFinite(t)
              ? r("AdsCurrencyFormatter").replaceWithSymbol(
                  n != null ? n : K(),
                  J(t),
                )
              : e;
          };
        var i =
          a === h.PERCENTAGE ||
          a === h.CURRENCY ||
          a === h.INTEGER ||
          a === h.INT ||
          a === h.FLOAT;
        if (t === p.TABLE && i)
          return function (e) {
            return typeof e == "string" ? e : String(e);
          };
        if (a === h.PERCENTAGE)
          return function (e) {
            return V(e, function (e) {
              return W(e);
            });
          };
        if (a === h.CURRENCY) {
          var l = n != null ? n : K();
          return function (e) {
            return e === "N/A"
              ? e
              : V(e, function (e) {
                  return r("AdsCurrencyFormatter").replaceWithSymbol(l, X(e));
                });
          };
        } else if (a === h.INTEGER || a === h.INT || a === h.FLOAT)
          return function (e) {
            return V(e, function (e) {
              return X(e);
            });
          };
      }
    }
    function ae(e, t) {
      if ((e == null ? void 0 : e.toUpperCase()) === h.CURRENCY) {
        var n = t != null ? t : K();
        return function (e) {
          return V(e, function (e) {
            return r("AdsCurrencyFormatter").replaceWithSymbol(
              n,
              Number.isInteger(e) ? e.toFixed(0) : e.toFixed(2),
            );
          });
        };
      }
    }
    function ie(e, t) {
      if (t === p.LINE_CHART) return !0;
      if (e.length <= 1 || e.length > 5) return !1;
      var n = e[0].type.toUpperCase(),
        r = e[1].type.toUpperCase();
      return !(
        n !== h.DATE ||
        y.has(r) ||
        e.slice(2).some(function (e) {
          return e.type.toUpperCase() !== r;
        })
      );
    }
    var le = 31;
    function se(e, t, n) {
      if (t === p.HORIZONTAL_BAR_CHART || t === p.VERTICAL_BAR_CHART) return !0;
      if (e.length <= 1 || e.length > 4 || n.length > le) return !1;
      var r = e[0].type.toUpperCase(),
        o = e[1].type.toUpperCase();
      return !(
        (r !== h.STRING &&
          r !== h.STR &&
          r !== h.AD_OBJECT &&
          r !== h.AD_OBJECT_ALT &&
          r !== h.ASSET &&
          r !== h.ASSET_ALT) ||
        y.has(o) ||
        e.slice(2).some(function (e) {
          return e.type.toUpperCase() !== o;
        })
      );
    }
    function ue(e, t) {
      return e === p.TABLE ? !0 : !(t.length > le);
    }
    function ce(e, t, n) {
      if (t === p.SCORECARD_DATA_CARD) return !0;
      if (e.length < 2 || n.length === 0 || n.length > le) return !1;
      var r = e[0].type.toUpperCase(),
        o = e[1].type.toUpperCase();
      return !(!y.has(r) || y.has(o));
    }
    function de(e, t, n, r, o, a) {
      var i = [];
      if (e != null)
        for (var l of e) {
          var s = r(l),
            u = o(l);
          if (s != null && u != null && !(s >= t + n) && !(t >= s + u)) {
            var c = Math.max(t, s),
              d = Math.min(t + n, s + u) - c;
            if (d > 0) {
              var m = a(l, d, c - t);
              i.push(m);
            }
          }
        }
      return i;
    }
    function me(e, t, n, r) {
      var o = [];
      if (t == null) return o;
      for (var a = Array.from(t), i = 0; i < e.length; i++) {
        for (var l = e[i], s = [], u = 0; u < l.length; u++) {
          var c = l[u],
            d = c.length,
            m = c.offset,
            p = a.slice(m, m + d).join(""),
            _ = de(
              n,
              m,
              d,
              function (e) {
                return e.offset;
              },
              function (e) {
                return e.length;
              },
              function (e, t, n) {
                return {
                  length: t,
                  offset: n,
                  entity: e.entity,
                  entity_type: e.entity_type,
                };
              },
            ),
            f = de(
              r,
              m,
              d,
              function (e) {
                return e.offset;
              },
              function (e) {
                return e.length;
              },
              function (e, t, n) {
                return { length: t, offset: n, inline_style: e.inline_style };
              },
            );
          if (_.length > 0 || f.length > 0) {
            var g = {
              content: [
                {
                  block_type: "UNSTYLED",
                  data: null,
                  depth: 0,
                  entity_ranges: _,
                  inline_style_ranges: f,
                  text: p,
                  media_alignment: null,
                  media_caption: null,
                },
              ],
            };
            s.push({ primaryValue: p, composedTextValue: [g] });
          } else s.push({ primaryValue: p });
        }
        o.push(s);
      }
      return o;
    }
    var pe = null;
    function _e() {
      if (pe != null) return pe;
      for (var e = new Map(), t = 0; t < 12; t++) {
        var n = Date.UTC(2e3, t, 15);
        for (var r of ["short", "long"]) {
          var o = new Intl.DateTimeFormat(void 0, { month: r }).format(n);
          e.set(o.toLowerCase().replace(/\.$/, ""), t + 1);
        }
      }
      return ((pe = e), e);
    }
    function fe(e) {
      var t = e.trim(),
        n = t.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (n)
        return (
          parseInt(n[1], 10) * 1e4 +
          parseInt(n[2], 10) * 100 +
          parseInt(n[3], 10)
        );
      var r = _e(),
        o = t.match(/^(\S+?)\.?\s+(\d{1,2})$/);
      if (o) {
        var a = r.get(o[1].toLowerCase());
        if (a != null) return a * 100 + parseInt(o[2], 10);
      }
      var i = t.match(/^(\d{1,2})\.?\s+(\S+?)\.?$/);
      if (i) {
        var l = r.get(i[2].toLowerCase());
        if (l != null) return l * 100 + parseInt(i[1], 10);
      }
      return null;
    }
    function ge(e, t, n) {
      if ((n === void 0 && (n = 1), Ee(e) && Ee(t))) {
        var o = ke(e),
          a = ke(t);
        return o > a ? n : o < a ? -n : 0;
      }
      if (r("justknobx")._("1277")) {
        var i = fe(e),
          l = fe(t);
        if (i != null && l != null) return i > l ? n : i < l ? -n : 0;
      }
      return e > t ? n : e < t ? -n : 0;
    }
    function he(e, t) {
      return e.length < 1
        ? []
        : y.has(e[0].type.toUpperCase())
          ? t
          : t.slice().sort(function (e, t) {
              if (e.values.length === 0 || t.values.length === 0) return 0;
              var n = Number(e.values[0]),
                r = Number(t.values[0]);
              return !isNaN(n) && !isNaN(r) ? (n < r ? -1 : n > r ? 1 : 0) : 0;
            });
    }
    function ye(e, t) {
      var n = o("react-compiler-runtime").c(3),
        r = t === void 0 ? !1 : t,
        a;
      return (
        n[0] !== e || n[1] !== r
          ? ((a = function (n, a) {
              var t = String(n),
                i = e == null ? void 0 : e.get(t);
              return i != null && i.content[0].entity_ranges.length > 0
                ? u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      { 0: {}, 1: { className: "x2b8uid" } }[!!r << 0],
                      {
                        children: u.jsx(
                          o("MAIBATableContentCell.react").ComposedTextContent,
                          { composedText: i.content, descriptions: null },
                        ),
                      },
                    ),
                  )
                : null;
            }),
            (n[0] = e),
            (n[1] = r),
            (n[2] = a))
          : (a = n[2]),
        a
      );
    }
    function Ce(e, t, n, a) {
      var i,
        l,
        s = o("react-compiler-runtime").c(30),
        u = r("useGeoChartContext")(),
        c = u.contentRect,
        d = r("useGeoChartConfigContext")(),
        m = d.scaleY,
        p;
      if (s[0] !== c.bottom || s[1] !== c.top || s[2] !== m) {
        var _,
          f = [c.top, c.bottom];
        ((p = (_ = m == null ? void 0 : m(f)) != null ? _ : f),
          (s[0] = c.bottom),
          (s[1] = c.top),
          (s[2] = m),
          (s[3] = p));
      } else p = s[3];
      var g = p,
        h = r("useGeoChartConfigContext")(),
        y = h.isDescriptionUsedInKey,
        C;
      if (s[4] !== e) {
        var b;
        (s[6] !== e[0]
          ? ((b = function (n) {
              return String(n.name) === String(e[0].name.toString());
            }),
            (s[6] = e[0]),
            (s[7] = b))
          : (b = s[7]),
          (C = e.find(b)),
          (s[4] = e),
          (s[5] = C));
      } else C = s[5];
      var v = C,
        S;
      s[8] !== v
        ? ((S = v != null ? [v] : []), (s[8] = v), (s[9] = S))
        : (S = s[9]);
      var R = S,
        L = r("useGeoChartDataEndPoint")(R)[
          o("GeoPrivateBaseChartUtils").getSafeNameKey(
            (i = e[0]) == null ? void 0 : i.name,
            (l = e[0]) == null ? void 0 : l.description,
            y,
          )
        ],
        E = L.max,
        k = L.min,
        I;
      s[10] !== E || s[11] !== k
        ? ((I = [k, E]), (s[10] = E), (s[11] = k), (s[12] = I))
        : (I = s[12]);
      var T = I,
        D;
      s[13] !== a || s[14] !== T
        ? ((D = a != null ? a(T) : T), (s[13] = a), (s[14] = T), (s[15] = D))
        : (D = s[15]);
      var x = D,
        $;
      s[16] !== x || s[17] !== g
        ? (($ = { range: g, domain: x }), (s[16] = x), (s[17] = g), (s[18] = $))
        : ($ = s[18]);
      var P = r("useGeoChartAxisScale")($),
        N;
      s[19] !== x || s[20] !== n
        ? ((N = typeof n == "function" ? n(x) : n),
          (s[19] = x),
          (s[20] = n),
          (s[21] = N))
        : (N = s[21]);
      var M = N,
        w = Math.floor((x[1] - x[0]) / M),
        A = Math.max(1, isNaN(w) ? 0 : w),
        F,
        O;
      (s[22] !== P || s[23] !== A
        ? ((O = P.ticks(A)), (s[22] = P), (s[23] = A), (s[24] = O))
        : (O = s[24]),
        (F = O));
      var B = F,
        W;
      if (s[25] !== t || s[26] !== B) {
        var q;
        (s[28] !== t
          ? ((q = function (n) {
              var e = t == null ? n : t(n);
              return e.toString().length;
            }),
            (s[28] = t),
            (s[29] = q))
          : (q = s[29]),
          (W = Math.max.apply(Math, B.map(q))),
          (s[25] = t),
          (s[26] = B),
          (s[27] = W));
      } else W = s[27];
      var U = W;
      return U;
    }
    function be(e) {
      return e === 1 ? -8 : e === 2 ? 1 : e === 3 ? 6 : e === 4 ? 13 : 8;
    }
    function ve(e) {
      var t = e.slice(1).map(function (e) {
        return e.metric_name == null ? f : e.metric_name;
      });
      return Array.from(new Set(t));
    }
    function Se(e, t) {
      return e === t || (e == null && t === f);
    }
    function Re(e, t, n) {
      var r, o;
      if (n == null) return e.length > 1 ? e[1].type : null;
      var a = t[n];
      return (r =
        (o = e.slice(1).find(function (e) {
          return Se(e.metric_name, a);
        })) == null
          ? void 0
          : o.type) != null
        ? r
        : null;
    }
    function Le(e) {
      if (e.length === 0) return e;
      var t = e[0];
      if (!t.value || t.value.length === 0) return e;
      var n = t.value.map(function (e, t) {
        var n;
        return { originalIndex: t, secondaryValue: (n = e[1]) != null ? n : 0 };
      });
      n.sort(function (e, t) {
        return t.secondaryValue - e.secondaryValue;
      });
      var r = n.map(function (e) {
        return e.originalIndex;
      });
      return e.map(function (e) {
        if (!e.value) return e;
        var t = r.map(function (t) {
          return e.value[t];
        });
        return babelHelpers.extends({}, e, { value: t });
      });
    }
    function Ee(e) {
      return /^((?:[\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20C1\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]|\uD807[\uDFDD-\uDFE0]|\uD838\uDEFF|\uD83B\uDCB0)-?[,0-9]+(\.[0-9]+)?%?|-?[,0-9]+(\.[0-9]+)?((?:[\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20C1\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]|\uD807[\uDFDD-\uDFE0]|\uD838\uDEFF|\uD83B\uDCB0)|%)?)$/.test(
        e.trim(),
      );
    }
    function ke(e) {
      return U(e.replace(/%/g, ""));
    }
    function Ie(e, t, n) {
      var a = [],
        i = e.map(function (e) {
          return De(e);
        });
      a.push(i.join(","));
      var l = t.map(function (e) {
        var t = e.map(function (e, t) {
          if (t === 0 && n === h.DATE) {
            var a = Te(e),
              i = r("DateTime").create(a / 1e3, o("Timezone").UTC),
              l = i.toISOString().slice(0, 19);
            return l;
          } else return De(e);
        });
        return t.join(",");
      });
      return ((a = a.concat(l)), a);
    }
    function Te(e) {
      if (/^\d+$/.test(e)) {
        var t = Number(e) * 1e3;
        return t;
      }
      var n = new Date(e),
        r = n.getTime();
      return Number.isNaN(r) ? NaN : r;
    }
    function De(e) {
      var t = e;
      return (
        t.length > 0 && /^[=+\-@\t\r]/.test(t) && (t = "'" + t),
        /[\",\n]/.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
      );
    }
    function xe(e, t, n) {
      var r = e.map(function (e) {
          var t, n;
          return (t =
            (n = e.composed_text_label) == null ? void 0 : n.content[0].text) !=
            null
            ? t
            : e.label;
        }),
        o = t.map(function (e) {
          var t, n;
          return (t =
            (n = e.composed_text_values) == null
              ? void 0
              : n.map(function (e) {
                  var t;
                  return (t = e.content[0].text) != null ? t : "";
                })) != null
            ? t
            : e.values;
        }),
        a = Ie(r, o, e[0].type),
        i = a.join("\n"),
        l = "\uFEFF" + i,
        s = new Blob([l], { type: "text/csv;charset=utf-8" }),
        u = URL.createObjectURL(s),
        c = document.createElement("a");
      ((c.href = u),
        c.setAttribute("download", n),
        c.click(),
        URL.revokeObjectURL(u));
    }
    function $e(e, t) {
      if (e.length !== 0) {
        var n = [];
        for (var r of e) {
          var o = r.map(function (e) {
            if (e.composedTextValue != null && e.composedTextValue.length > 0) {
              var t,
                n =
                  (t = e.composedTextValue[0].content[0]) == null
                    ? void 0
                    : t.text;
              return n != null ? De(n) : De(e.primaryValue);
            }
            return De(e.primaryValue);
          });
          n.push(o.join(","));
        }
        var a = n.join("\n"),
          i = "\uFEFF" + a,
          l = new Blob([i], { type: "text/csv;charset=utf-8" }),
          s = URL.createObjectURL(l),
          u = document.createElement("a");
        ((u.href = s),
          u.setAttribute("download", t),
          u.click(),
          URL.revokeObjectURL(s));
      }
    }
    function Pe(e, t) {
      if (e == null || t == null) return e;
      var n = t.length,
        r = t.offset;
      return n == null || r == null
        ? e
        : Array.from(e)
            .slice(r, r + n)
            .join("");
    }
    function Ne(e) {
      if (e != null) {
        var t = e.content[0];
        if (
          (t == null ? void 0 : t.entity_ranges) == null ||
          t.entity_ranges.length <= 0
        )
          return e;
        var n = t.entity_ranges[0],
          r = Pe(t.text, n);
        if (r == null) return e;
        var o = [
          babelHelpers.extends({}, n, {
            length: Array.from(r).length,
            offset: 0,
          }),
        ];
        return {
          content: [babelHelpers.extends({}, t, { entity_ranges: o, text: r })],
        };
      }
    }
    function Me(e, t, n) {
      return !n || t === p.TABLE
        ? e
        : e.map(function (e, t) {
            return t === 0
              ? e
              : babelHelpers.extends({}, e, {
                  composed_text_label: Ne(e.composed_text_label),
                });
          });
    }
    function we(e, t, n) {
      n === void 0 && (n = 0);
      var o = Math.max(e.offsetHeight, e.scrollHeight) + n,
        a = Math.max(e.offsetWidth, e.scrollWidth) + n,
        i = window.devicePixelRatio || 1,
        l = a * i,
        s = o * i;
      return (
        (l > g || s > g) &&
          (r("FBLogger")("maiba").warn(
            "PNG export dimensions exceed canvas limits: width=%s, height=%s",
            l,
            s,
          ),
          (i = 1),
          (l = a),
          (s = o)),
        r("dom-to-image").toBlob(e, {
          bgcolor: "#ffffff",
          filter: t,
          height: s,
          maintainHiddenScrollbars: !0,
          quality: 1,
          style: {
            transform: "scale(" + i + ")",
            transformOrigin: "top left",
            background: "#ffffff",
            height: o + "px",
            width: a + "px",
          },
          width: l,
        })
      );
    }
    ((l.MAIBADataVizType = p),
      (l.SWAP_ACTION = C),
      (l.DEBUG_ACTION = b),
      (l.EXPORT_ACTION = v),
      (l.COPY_IMAGE_ACTION = S),
      (l.DOWNLOAD_CSV_ACTION = R),
      (l.SAVE_IMAGE_ACTION = L),
      (l.DATA_VIZ_ERROR_MESSAGE = E),
      (l.TABLE_HOVER_SORT_CSS = k),
      (l.getLineChartLabel = I),
      (l.getHorizontalBarChartLabel = T),
      (l.getVerticalBarChartLabel = D),
      (l.getTableLabel = x),
      (l.getScorecardDataCardLabel = $),
      (l.SCORECARD_DATA_CARD_DESCRIPTION = P),
      (l.getTranslatedDataVizDescription = N),
      (l.DATA_VIZ_ERROR_CHART_RENDER = M),
      (l.DATA_VIZ_ERROR_TABLE_RENDER = w),
      (l.DATA_VIZ_ERROR_MISSING_DATA = A),
      (l.getIsMAIBADataVizDebuggerAvailable = F),
      (l.getIsMAIBADataVizExportAvailable = O),
      (l.getIsMAIBAScorecardChartsV1Enabled = B),
      (l.parseLocalizedNumber = U),
      (l.getAccountCurrency = K),
      (l.getColumnProportion = Q),
      (l.extractComposedTextDataForCharts = ee),
      (l.extractComposedTextDataForLabels = te),
      (l.parseChartData = ne),
      (l.parseTableData = re),
      (l.getDataVizMetricFormatter = oe),
      (l.getDataVizPrimaryFormatter = ae),
      (l.getLineChartSwapEligibility = ie),
      (l.getBarChartSwapEligibility = se),
      (l.getTableSwapEligibility = ue),
      (l.getScorecardDataCardSwapEligibility = ce),
      (l.parseAbraTableBlockData = me),
      (l.compareMAIBATableValues = ge),
      (l.sortLineChartData = he),
      (l.useChartAxisRenderer = ye),
      (l.useMaxTickLabelLength = Ce),
      (l.calculateGutterLeft = be),
      (l.getMetrics = ve),
      (l.getChartYAxisDataType = Re),
      (l.sortHorizontalBarChartData = Le),
      (l.downloadStandardDataVizCSV = xe),
      (l.downloadMarkdownTableCSV = $e),
      (l.getDataVizConfig = Me),
      (l.captureDomElementAsBlob = we));
  },
  226,
);
