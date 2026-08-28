__d(
  "AdsGenericFilterSetUtil",
  [
    "invariant",
    "AdsGenericFilterFieldConfigUtil",
    "AdsGenericFilterFieldType",
    "FBLogger",
    "arrayContainsArray",
    "flattenArray",
    "getErrorSafe",
    "partitionArray",
    "unionArrays",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return e != null && r("arrayContainsArray")(e, t);
    }
    function u(e, t) {
      if (!e) return t;
      ((e.field.key === t.field.key && e.operator === t.operator) || s(0, 4035),
        (Array.isArray(e.value) && Array.isArray(t.value)) || s(0, 4036));
      var n = r("unionArrays")(e.value, t.value);
      return n.length ? new e.constructor(e.field, t.operator, n) : null;
    }
    function c(e, t) {
      if (!e) return null;
      var n = [],
        r = {};
      return (
        (e.field.key === t.field.key && e.operator === t.operator) ||
          s(0, 4037),
        t.value.forEach(function (e) {
          r[e] = !0;
        }),
        e.value.forEach(function (e) {
          Object.prototype.hasOwnProperty.call(r, e) || n.push(e);
        }),
        n.length ? new e.constructor(e.field, t.operator, n) : null
      );
    }
    function d(e, t, n) {
      var r = e.values.findIndex(function (e) {
        return e.field.key === t.key;
      });
      if (r === -1) return e;
      var o = e.values.slice(0),
        a = o[r],
        i = !1,
        l = a.value.filter(function (e) {
          var t = n.includes(e);
          return ((i = t || i), !t);
        });
      if (!i) return e;
      var s = new a.constructor(a.field, a.operator, l);
      return ((o[r] = s), new e.constructor(o));
    }
    function m(t, n) {
      if (t.key === n.key) return !0;
      if (t.values.length < n.values.length) return !1;
      var o = {},
        a = {},
        i = {},
        l = {};
      t.values.forEach(function (e) {
        var t = e.key,
          n = e.field.key;
        switch (e.operator) {
          case "IN":
          case "ALL":
          case "ANY":
            i[n] = e.value;
            break;
          case "NOT_IN":
          case "NONE":
            l[n] = e.value;
            break;
          default:
            ((o[t] = !0), (a[n] = !0));
        }
      });
      var s = !0;
      return (
        n.values.some(function (t) {
          var n = t.key,
            u = t.value,
            c = t.field,
            d = !t.isComplete();
          switch (t.operator) {
            case "IN":
            case "ALL":
            case "ANY":
              if (!e(i[c == null ? void 0 : c.toString()], u))
                return ((s = !1), !0);
              break;
            case "NOT_IN":
            case "NONE":
              if (!e(l[c == null ? void 0 : c.toString()], u))
                return ((s = !1), !0);
              break;
            default:
              if (
                o[n] ||
                (a[c == null ? void 0 : c.toString()] &&
                  (d || c.type === r("AdsGenericFilterFieldType").DATE_RANGE))
              )
                break;
              return ((s = !1), !0);
          }
        }),
        s
      );
    }
    function p(e, t) {
      if (e === void 0 || t === void 0) return !1;
      try {
        var n = e
            .substr(1, e.length - 2)
            .split(";")
            .map(function (e) {
              return JSON.parse(e);
            })
            .flat()
            .join(),
          o = t
            .substr(1, t.length - 2)
            .split(";")
            .map(function (e) {
              return JSON.parse(e);
            })
            .flat()
            .join();
        return n === o;
      } catch (e) {
        var a = r("getErrorSafe")(e);
        return (
          r("FBLogger")("ads")
            .catching(a)
            .mustfix("saved views filters comparison error"),
          !1
        );
      }
    }
    function _(e, t) {
      return e == t || (e != null && t != null && p(e.key, t.key));
    }
    function f(e, t) {
      return e == null && t == null
        ? !0
        : e != null && t != null
          ? _(e.getCompleteFilters(), t.getCompleteFilters())
          : !1;
    }
    function g(e, t, n) {
      var o = n || {},
        a = o.fieldsConfig,
        i = o.overwriteField,
        l = o.useFirstValue,
        s = new Map();
      (e.values.forEach(function (e) {
        var t = !1;
        if (a) {
          var n = r("AdsGenericFilterFieldConfigUtil").getConfigByFieldOrNull(
            a,
            e.field,
          );
          t = n ? n.allowDuplication : !1;
        }
        var o = t === !0 ? e.key : e.field.key;
        s.set(o, e);
      }),
        t.values.forEach(function (e) {
          var t,
            n = e.field.key;
          switch (e.operator) {
            case "IN":
            case "NOT_IN":
            case "ALL":
            case "ANY":
            case "NONE":
              if (
                (s.has(n) &&
                  ((t = s.get(n)) == null ? void 0 : t.operator) !==
                    e.operator &&
                  s.delete(n),
                i === !0)
              )
                (l === !0 && s.has(n)) || s.set(n, e);
              else {
                var r = u(s.get(n), e);
                r ? s.set(n, r) : s.delete(n);
              }
              break;
            default:
              (l === !0 && s.has(n)) || s.set(n, e);
          }
        }));
      var c = r("flattenArray")(
        r("partitionArray")(Array.from(s.values()), function (e) {
          return e.isComplete();
        }),
      );
      return new e.constructor(c);
    }
    function h(e, t) {
      if (!e || !t) return null;
      var n = new Map(),
        o = new Map(),
        a = {};
      (e.values.forEach(function (e) {
        var t = e.key,
          r = e.field.key;
        switch (e.operator) {
          case "IN":
          case "NOT_IN":
          case "ALL":
          case "ANY":
          case "NONE":
            n.set(r, e);
            break;
          default:
            (o.set(t, e), (a[r] = t));
        }
      }),
        t.values.forEach(function (e) {
          var t = e.key,
            i = e.field.key;
          switch (e.operator) {
            case "IN":
            case "NOT_IN":
            case "ALL":
            case "ANY":
            case "NONE":
              n.set(i, c(n.get(i), e));
              break;
            default:
              (o.delete(t),
                e.isComplete() || o.delete(a[i]),
                e.field.type === r("AdsGenericFilterFieldType").DATE_RANGE &&
                  o.delete(a[i]));
          }
        }));
      var i = []
        .concat(Array.from(n.values()), Array.from(o.values()))
        .filter(Boolean);
      return i.length ? new e.constructor(i) : null;
    }
    function y(e, t) {
      return e.values.filter(function (e) {
        var n;
        return (
          ((n = e.field) == null ? void 0 : n.key) != null &&
          e.field.key === (t == null ? void 0 : t.key)
        );
      });
    }
    function C(e, t) {
      var n = e.values.filter(function (e) {
        return e.field.key !== t.key;
      });
      return n.length ? new e.constructor(n) : null;
    }
    function b(e, t) {
      var n = t.map(function (e) {
          return e.key;
        }),
        r = e.values.filter(function (e) {
          return n.includes(e.field.key);
        });
      return r.length ? new e.constructor(r) : null;
    }
    function v(e, t) {
      var n = y(e, t);
      if (!n || n.length === 0) return null;
      n.length === 1 || s(0, 4038, t.key);
      var r = n[0];
      return r.value;
    }
    function S(e) {
      return e == null
        ? !1
        : e.values.some(function (e) {
            return !e.isComplete();
          });
    }
    function R(e) {
      if (e == null) return null;
      var t = e.values.filter(function (e) {
        return e.isComplete();
      });
      return t.length ? new e.constructor(t) : null;
    }
    ((l.excludeFiltersArrayValueByField = d),
      (l.contains = m),
      (l.matchesExactly = _),
      (l.completeMatchesExactly = f),
      (l.mergeByField = g),
      (l.exclude = h),
      (l.getFiltersByField = y),
      (l.excludeFiltersByField = C),
      (l.includeFiltersByFields = b),
      (l.getFilterValueByField = v),
      (l.containsIncomplete = S),
      (l.removeIncomplete = R));
  },
  98,
);
