__d(
  "MAIBADataVizUtil",
  [
    "fbt",
    "$InternalEnum",
    "AdsCurrencyFormatter",
    "DateTime",
    "ExecutionEnvironment",
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
    "react",
    "useGeoChartAxisScale",
    "useGeoChartConfigContext",
    "useGeoChartContext",
    "useGeoChartDataEndPoint",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useMemo,
      _ = n("$InternalEnum").Mirrored([
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
      f = ["ad", "ad set", "campaign"],
      g = "Other",
      h = 16384,
      y = {
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
      C = new Set([
        y.NONE,
        y.DATE,
        y.STRING,
        y.STR,
        y.AD_OBJECT,
        y.AD_OBJECT_ALT,
        y.ASSET,
        y.ASSET_ALT,
      ]),
      b = s._(/*BTDS*/ ""),
      v = s._(/*BTDS*/ ""),
      S = s._(/*BTDS*/ ""),
      R = s._(/*BTDS*/ ""),
      L = s._(/*BTDS*/ ""),
      E = s._(/*BTDS*/ ""),
      k = s._(/*BTDS*/ ""),
      I = s._(/*BTDS*/ ""),
      T = s._(/*BTDS*/ ""),
      D = s._(/*BTDS*/ ""),
      x =
        '\n  .maiba-hover-sort [class*="useWebTableSortable"][class*="icon"] {\n    opacity: 0;\n    transition: opacity 0.15s ease;\n  }\n  .maiba-hover-sort [class*="useWebTableSortable"][class*="layout"]:hover [class*="useWebTableSortable"][class*="icon"] {\n    opacity: 1;\n  }\n  .maiba-hover-sort [aria-sort="ascending"] [class*="useWebTableSortable"][class*="icon"],\n  .maiba-hover-sort [aria-sort="descending"] [class*="useWebTableSortable"][class*="icon"] {\n    opacity: 1;\n  }\n';
    function $(e) {
      return e === _.LINE_CHART ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function P(e) {
      return e === _.HORIZONTAL_BAR_CHART ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function N(e) {
      return e === _.VERTICAL_BAR_CHART ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function M(e) {
      return e === _.TABLE ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function w(e) {
      return e === _.SCORECARD_DATA_CARD ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    var A = "% change vs. prior 7-day average";
    function F(e, t) {
      return e === _.SCORECARD_DATA_CARD && t === A ? s._(/*BTDS*/ "") : t;
    }
    var O = "Issues rendering data viz data in the GeoChart component",
      B = "Issues rendering data viz data in the GeoTable component",
      W = "Missing LLM data to populate data viz component";
    function q() {
      return r("gkx")("16646");
    }
    function U() {
      return r("gkx")("19223");
    }
    function V() {
      return r("gkx")("20805");
    }
    var H = o("ads-lib-formatters").createIntlPercentFormatter(2, !1);
    function G(e) {
      var t = e;
      return (
        (t = t.replace(/^[^0-9+\-.]+/, "")),
        (t = t.replace(/[^0-9.]+$/, "")),
        K(t)
      );
    }
    function z(e) {
      var t;
      return typeof e == "number"
        ? e
        : (t = o("ads-lib-formatters").parseNumber(e)) != null
          ? t
          : NaN;
    }
    function j(e, t) {
      var n = z(e);
      return Number.isFinite(n) ? t(n) : typeof e == "string" ? e : String(e);
    }
    function K(e) {
      var t = o("ads-lib-formatters").parseNumber(e);
      return t != null ? t : e;
    }
    function Q(e) {
      return e != null ? e : "N/A";
    }
    function X(e, t) {
      var n = t.toUpperCase();
      if (n === y.INTEGER || n === y.INT || n === y.FLOAT) return K(e);
      if (n === y.DATE) {
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
      } else if (n === y.PERCENTAGE) {
        var u = e;
        e.endsWith("%") && (u = e.slice(0, -1));
        var c = Number(u);
        return isNaN(c) ? e : c;
      } else if (n === y.CURRENCY) return G(e);
      return e;
    }
    function Y(e, t) {
      var n = t.toUpperCase();
      if (n === y.INTEGER || n === y.INT || n === y.FLOAT) {
        var r = K(e);
        return typeof r == "number" ? r : null;
      } else if (n === y.PERCENTAGE) {
        var o = e;
        e.endsWith("%") && (o = e.slice(0, -1));
        var a = Number(o);
        return isNaN(a) ? null : a;
      } else if (n === y.CURRENCY) {
        var i = G(e);
        return typeof i == "number" ? i : null;
      }
      return null;
    }
    function J() {
      return r("getMAIBAAccountCurrency")();
    }
    function Z(e, t) {
      var n = e.length > 0 && f.includes(e[0].primaryValue.toLowerCase());
      return n && t === 0 ? 2 : 1;
    }
    function ee(e) {
      var t = r("intlSummarizeNumber")(e, 2, "SHORT", "ROUND", "HIDE_IF_ZERO");
      return (t.includes(".") && (t = t.replace(/\.?0+$/, "")), t);
    }
    function te(e) {
      return /^[+-]?(?:\d+|\d+\.\d{1,2}|\.\d{1,2})$/.test(e.trim());
    }
    function ne(e) {
      return Number.isInteger(e) ? e.toFixed(0) : e.toFixed(2);
    }
    function re(e, t, n) {
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
    function oe(e) {
      return re(
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
    function ae(e) {
      return re(
        e,
        function (e) {
          return e.label;
        },
        function (e) {
          return e.composed_text_label;
        },
      );
    }
    function ie(e, t, n) {
      if (e.length === 0) return [];
      var r = e[0].type,
        o = e.slice(1),
        a = De(e),
        i = n != null && n < a.length ? a[n] : null,
        l =
          i == null
            ? o.map(function (e, t) {
                return t;
              })
            : o
                .map(function (e, t) {
                  return xe(e.metric_name, i) ? t : -1;
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
                var t = Q(e.values[0]),
                  o = Q(e.values[n + 1]);
                return [X(t, r), o !== "N/A" ? Y(o, i) : null];
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
    function le(e, t, n) {
      if (e.length === 0) return [];
      var r = De(e)[n != null ? n : 0];
      return t.flatMap(function (t) {
        if (t.metric_name != null && t.metric_name !== r) return [];
        var n = X(t.primary_value, e[0].type);
        return n == null ? [] : [{ label: t.label, primaryValue: n }];
      });
    }
    function se(e, t) {
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
              s = Q(n),
              u =
                (a = (i = e[r]) == null ? void 0 : i.type) != null
                  ? a
                  : y.STRING,
              c =
                s !== "N/A"
                  ? u.toUpperCase() === y.PERCENTAGE
                    ? s
                    : String(X(s, u))
                  : "N/A";
            return l != null
              ? { primaryValue: c, composedTextValue: [l] }
              : { primaryValue: c };
          });
        });
      return [n].concat(r);
    }
    function ue(e, t, n) {
      if (e != null) {
        var a = e.toUpperCase();
        if (a === y.DATE && t === _.TABLE)
          return function (e) {
            return r("DateTime")
              .create(Number(e), o("Timezone").UTC)
              .format("M d");
          };
        if (a === y.CURRENCY && t === _.TABLE)
          return function (e) {
            if (e === "N/A") return e;
            if (typeof e == "number")
              return r("AdsCurrencyFormatter").replaceWithSymbol(
                n != null ? n : J(),
                ne(e),
              );
            if (!te(e)) return e;
            var t = Number(e.trim());
            return Number.isFinite(t)
              ? r("AdsCurrencyFormatter").replaceWithSymbol(
                  n != null ? n : J(),
                  ne(t),
                )
              : e;
          };
        var i =
          a === y.PERCENTAGE ||
          a === y.CURRENCY ||
          a === y.INTEGER ||
          a === y.INT ||
          a === y.FLOAT;
        if (t === _.TABLE && i)
          return function (e) {
            return typeof e == "string" ? e : String(e);
          };
        if (a === y.PERCENTAGE)
          return function (e) {
            return j(e, function (e) {
              return H(e);
            });
          };
        if (a === y.CURRENCY) {
          var l = n != null ? n : J();
          return function (e) {
            return e === "N/A"
              ? e
              : j(e, function (e) {
                  return r("AdsCurrencyFormatter").replaceWithSymbol(l, ee(e));
                });
          };
        } else if (a === y.INTEGER || a === y.INT || a === y.FLOAT)
          return function (e) {
            return j(e, function (e) {
              return ee(e);
            });
          };
      }
    }
    function ce(e, t) {
      if ((e == null ? void 0 : e.toUpperCase()) === y.CURRENCY) {
        var n = t != null ? t : J();
        return function (e) {
          return j(e, function (e) {
            return r("AdsCurrencyFormatter").replaceWithSymbol(
              n,
              Number.isInteger(e) ? e.toFixed(0) : e.toFixed(2),
            );
          });
        };
      }
    }
    function de(e, t) {
      if (t === _.LINE_CHART) return !0;
      if (e.length <= 1 || e.length > 5) return !1;
      var n = e[0].type.toUpperCase(),
        r = e[1].type.toUpperCase();
      return !(
        n !== y.DATE ||
        C.has(r) ||
        e.slice(2).some(function (e) {
          return e.type.toUpperCase() !== r;
        })
      );
    }
    var me = 31;
    function pe(e, t, n) {
      if (t === _.HORIZONTAL_BAR_CHART || t === _.VERTICAL_BAR_CHART) return !0;
      if (e.length <= 1 || e.length > 4 || n.length > me) return !1;
      var r = e[0].type.toUpperCase(),
        o = e[1].type.toUpperCase();
      return !(
        (r !== y.STRING &&
          r !== y.STR &&
          r !== y.AD_OBJECT &&
          r !== y.AD_OBJECT_ALT &&
          r !== y.ASSET &&
          r !== y.ASSET_ALT) ||
        C.has(o) ||
        e.slice(2).some(function (e) {
          return e.type.toUpperCase() !== o;
        })
      );
    }
    function _e(e, t) {
      return e === _.TABLE ? !0 : !(t.length > me);
    }
    function fe(e, t, n) {
      if (t === _.SCORECARD_DATA_CARD) return !0;
      if (e.length < 2 || n.length === 0 || n.length > me) return !1;
      var r = e[0].type.toUpperCase(),
        o = e[1].type.toUpperCase();
      return !(!C.has(r) || C.has(o));
    }
    function ge(e, t, n, r, o, a) {
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
    function he(e, t, n, r) {
      var o = [];
      if (t == null) return o;
      for (var a = Array.from(t), i = 0; i < e.length; i++) {
        for (var l = e[i], s = [], u = 0; u < l.length; u++) {
          var c = l[u],
            d = c.length,
            m = c.offset,
            p = a.slice(m, m + d).join(""),
            _ = ge(
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
            f = ge(
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
    var ye = null;
    function Ce() {
      if (ye != null) return ye;
      for (var e = new Map(), t = 0; t < 12; t++) {
        var n = Date.UTC(2e3, t, 15);
        for (var r of ["short", "long"]) {
          var o = new Intl.DateTimeFormat(void 0, { month: r }).format(n);
          e.set(o.toLowerCase().replace(/\.$/, ""), t + 1);
        }
      }
      return ((ye = e), e);
    }
    function be(e) {
      var t = e.trim(),
        n = t.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (n)
        return (
          parseInt(n[1], 10) * 1e4 +
          parseInt(n[2], 10) * 100 +
          parseInt(n[3], 10)
        );
      var r = Ce(),
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
    function ve(e, t, n) {
      if ((n === void 0 && (n = 1), Ne(e) && Ne(t))) {
        var r = Me(e),
          o = Me(t);
        return r > o ? n : r < o ? -n : 0;
      }
      var a = be(e),
        i = be(t);
      return a != null && i != null
        ? a > i
          ? n
          : a < i
            ? -n
            : 0
        : e > t
          ? n
          : e < t
            ? -n
            : 0;
    }
    function Se(e, t) {
      return e.length < 1
        ? []
        : C.has(e[0].type.toUpperCase())
          ? t
          : t.slice().sort(function (e, t) {
              if (e.values.length === 0 || t.values.length === 0) return 0;
              var n = Number(e.values[0]),
                r = Number(t.values[0]);
              return !isNaN(n) && !isNaN(r) ? (n < r ? -1 : n > r ? 1 : 0) : 0;
            });
    }
    function Re(e, t) {
      return (
        t === void 0 && (t = !1),
        m(
          function (n, r) {
            var a = String(n),
              i = e == null ? void 0 : e.get(a);
            return i != null && i.content[0].entity_ranges.length > 0
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    { 0: {}, 1: { className: "x2b8uid" } }[!!t << 0],
                    {
                      children: c.jsx(
                        o("MAIBATableContentCell.react").ComposedTextContent,
                        { composedText: i.content, descriptions: null },
                      ),
                    },
                  ),
                )
              : null;
          },
          [e, t],
        )
      );
    }
    function Le(e, t, n, a) {
      var i,
        l,
        s,
        u = r("useGeoChartContext")(),
        c = u.contentRect,
        d = r("useGeoChartConfigContext")(),
        m = d.scaleY,
        _ = [c.top, c.bottom],
        f = (i = m == null ? void 0 : m(_)) != null ? i : _,
        g = r("useGeoChartConfigContext")(),
        h = g.isDescriptionUsedInKey,
        y = p(
          function () {
            var t = e.find(function (t) {
              return String(t.name) === String(e[0].name.toString());
            });
            return t != null ? [t] : [];
          },
          [e],
        ),
        C = r("useGeoChartDataEndPoint")(y)[
          o("GeoPrivateBaseChartUtils").getSafeNameKey(
            (l = e[0]) == null ? void 0 : l.name,
            (s = e[0]) == null ? void 0 : s.description,
            h,
          )
        ],
        b = C.max,
        v = C.min,
        S = p(
          function () {
            return [v, b];
          },
          [b, v],
        ),
        R = p(
          function () {
            return a != null ? a(S) : S;
          },
          [a, S],
        ),
        L = r("useGeoChartAxisScale")({ range: f, domain: R }),
        E = p(
          function () {
            var e = typeof n == "function" ? n(R) : n,
              t = Math.floor((R[1] - R[0]) / e),
              r = Math.max(1, isNaN(t) ? 0 : t),
              o = [];
            return ((o = L.ticks(r)), o);
          },
          [R, n, L],
        ),
        k = Math.max.apply(
          Math,
          E.map(function (e) {
            var n = t == null ? e : t(e);
            return n.toString().length;
          }),
        );
      return k;
    }
    function Ee(e) {
      return e === 1 ? -8 : e === 2 ? 1 : e === 3 ? 6 : e === 4 ? 13 : 8;
    }
    var ke = 6,
      Ie = 64;
    function Te(e, t) {
      if (!Number.isFinite(e) || e <= 0) return t;
      var n = Math.ceil((e * ke) / 2);
      return Math.min(Math.max(t, n), Ie);
    }
    function De(e) {
      var t = e.slice(1).map(function (e) {
        return e.metric_name == null ? g : e.metric_name;
      });
      return Array.from(new Set(t));
    }
    function xe(e, t) {
      return e === t || (e == null && t === g);
    }
    function $e(e, t, n) {
      var r, o;
      if (n == null) return e.length > 1 ? e[1].type : null;
      var a = t[n];
      return (r =
        (o = e.slice(1).find(function (e) {
          return xe(e.metric_name, a);
        })) == null
          ? void 0
          : o.type) != null
        ? r
        : null;
    }
    function Pe(e) {
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
    function Ne(e) {
      return /^((?:[\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20C1\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]|\uD807[\uDFDD-\uDFE0]|\uD838\uDEFF|\uD83B\uDCB0)-?[,0-9]+(\.[0-9]+)?%?|-?[,0-9]+(\.[0-9]+)?((?:[\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20C1\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]|\uD807[\uDFDD-\uDFE0]|\uD838\uDEFF|\uD83B\uDCB0)|%)?)$/.test(
        e.trim(),
      );
    }
    function Me(e) {
      return z(e.replace(/%/g, ""));
    }
    function we(e, t, n) {
      var a = [],
        i = e.map(function (e) {
          return Fe(e);
        });
      a.push(i.join(","));
      var l = t.map(function (e) {
        var t = e.map(function (e, t) {
          if (t === 0 && n === y.DATE) {
            var a = Ae(e),
              i = r("DateTime").create(a / 1e3, o("Timezone").UTC),
              l = i.toISOString().slice(0, 19);
            return l;
          } else return Fe(e);
        });
        return t.join(",");
      });
      return ((a = a.concat(l)), a);
    }
    function Ae(e) {
      if (/^\d+$/.test(e)) {
        var t = Number(e) * 1e3;
        return t;
      }
      var n = new Date(e),
        r = n.getTime();
      return Number.isNaN(r) ? NaN : r;
    }
    function Fe(e) {
      var t = e;
      return (
        t.length > 0 && /^[=+\-@\t\r]/.test(t) && (t = "'" + t),
        /[\",\n]/.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
      );
    }
    function Oe(t, n, o) {
      var a = t.map(function (e) {
          var t, n;
          return (t =
            (n = e.composed_text_label) == null ? void 0 : n.content[0].text) !=
            null
            ? t
            : e.label;
        }),
        i = n.map(function (e) {
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
        l = we(a, i, t[0].type),
        s = l.join("\n"),
        u = "\uFEFF" + s;
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var c = new Blob([u], { type: "text/csv;charset=utf-8" }),
          d = URL.createObjectURL(c),
          m = document.createElement("a");
        ((m.href = d),
          m.setAttribute("download", o),
          m.click(),
          URL.revokeObjectURL(d));
      }
    }
    function Be(t, n) {
      if (t.length !== 0) {
        var o = [];
        for (var a of t) {
          var i = a.map(function (e) {
            if (e.composedTextValue != null && e.composedTextValue.length > 0) {
              var t,
                n =
                  (t = e.composedTextValue[0].content[0]) == null
                    ? void 0
                    : t.text;
              return n != null ? Fe(n) : Fe(e.primaryValue);
            }
            return Fe(e.primaryValue);
          });
          o.push(i.join(","));
        }
        var l = o.join("\n"),
          s = "\uFEFF" + l;
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
          var u = new Blob([s], { type: "text/csv;charset=utf-8" }),
            c = URL.createObjectURL(u),
            d = document.createElement("a");
          ((d.href = c),
            d.setAttribute("download", n),
            d.click(),
            URL.revokeObjectURL(c));
        }
      }
    }
    function We(e, t) {
      if (e == null || t == null) return e;
      var n = t.length,
        r = t.offset;
      return n == null || r == null
        ? e
        : Array.from(e)
            .slice(r, r + n)
            .join("");
    }
    function qe(e) {
      if (e != null) {
        var t = e.content[0];
        if (
          (t == null ? void 0 : t.entity_ranges) == null ||
          t.entity_ranges.length <= 0
        )
          return e;
        var n = t.entity_ranges[0],
          r = We(t.text, n);
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
    function Ue(e, t, n) {
      return !n || t === _.TABLE
        ? e
        : e.map(function (e, t) {
            return t === 0
              ? e
              : babelHelpers.extends({}, e, {
                  composed_text_label: qe(e.composed_text_label),
                });
          });
    }
    function Ve(e, t, n) {
      var o;
      n === void 0 && (n = 0);
      var a = Math.max(e.offsetHeight, e.scrollHeight) + n,
        i = Math.max(e.offsetWidth, e.scrollWidth) + n,
        l =
          ((o = e.ownerDocument.defaultView) == null
            ? void 0
            : o.devicePixelRatio) || 1,
        s = i * l,
        u = a * l;
      return (
        (s > h || u > h) &&
          (r("FBLogger")("maiba").warn(
            "PNG export dimensions exceed canvas limits: width=%s, height=%s",
            s,
            u,
          ),
          (l = 1),
          (s = i),
          (u = a)),
        r("dom-to-image").toBlob(e, {
          bgcolor: "#ffffff",
          filter: t,
          height: u,
          maintainHiddenScrollbars: !0,
          quality: 1,
          style: {
            transform: "scale(" + l + ")",
            transformOrigin: "top left",
            background: "#ffffff",
            height: a + "px",
            width: i + "px",
          },
          width: s,
        })
      );
    }
    ((l.MAIBADataVizType = _),
      (l.SWAP_ACTION = b),
      (l.DEBUG_ACTION = v),
      (l.EXPORT_ACTION = S),
      (l.COPY_IMAGE_ACTION = R),
      (l.DOWNLOAD_CSV_ACTION = L),
      (l.SAVE_IMAGE_ACTION = E),
      (l.DOWNLOAD_DATA_ACTION = k),
      (l.OPEN_IN_ADS_REPORTING_ACTION = I),
      (l.CHART_OPTIONS_ACTION = T),
      (l.DATA_VIZ_ERROR_MESSAGE = D),
      (l.TABLE_HOVER_SORT_CSS = x),
      (l.getLineChartLabel = $),
      (l.getHorizontalBarChartLabel = P),
      (l.getVerticalBarChartLabel = N),
      (l.getTableLabel = M),
      (l.getScorecardDataCardLabel = w),
      (l.SCORECARD_DATA_CARD_DESCRIPTION = A),
      (l.getTranslatedDataVizDescription = F),
      (l.DATA_VIZ_ERROR_CHART_RENDER = O),
      (l.DATA_VIZ_ERROR_TABLE_RENDER = B),
      (l.DATA_VIZ_ERROR_MISSING_DATA = W),
      (l.getIsMAIBADataVizDebuggerAvailable = q),
      (l.getIsMAIBADataVizExportAvailable = U),
      (l.getIsMAIBAScorecardChartsV1Enabled = V),
      (l.parseLocalizedNumber = z),
      (l.getAccountCurrency = J),
      (l.getColumnProportion = Z),
      (l.extractComposedTextDataForCharts = oe),
      (l.extractComposedTextDataForLabels = ae),
      (l.parseChartData = ie),
      (l.parseChartHighlights = le),
      (l.parseTableData = se),
      (l.getDataVizMetricFormatter = ue),
      (l.getDataVizPrimaryFormatter = ce),
      (l.getLineChartSwapEligibility = de),
      (l.getBarChartSwapEligibility = pe),
      (l.getTableSwapEligibility = _e),
      (l.getScorecardDataCardSwapEligibility = fe),
      (l.parseAbraTableBlockData = he),
      (l.compareMAIBATableValues = ve),
      (l.sortLineChartData = Se),
      (l.useChartAxisRenderer = Re),
      (l.useMaxTickLabelLength = Le),
      (l.calculateGutterLeft = Ee),
      (l.calculateGutterRight = Te),
      (l.getMetrics = De),
      (l.getChartYAxisDataType = $e),
      (l.sortHorizontalBarChartData = Pe),
      (l.downloadStandardDataVizCSV = Oe),
      (l.downloadMarkdownTableCSV = Be),
      (l.getDataVizConfig = Ue),
      (l.captureDomElementAsBlob = Ve));
  },
  226,
);
