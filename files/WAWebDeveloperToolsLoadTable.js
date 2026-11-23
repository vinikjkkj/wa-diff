__d(
  "WAWebDeveloperToolsLoadTable",
  [
    "$InternalEnum",
    "WAWebDeveloperToolsArrayUtils",
    "WAWebDeveloperToolsQueryTable",
    "WAWebModelStorageUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 15,
      s = n("$InternalEnum").Mirrored([
        "Includes",
        "Excludes",
        "Exact",
        "Regex",
        "Unset",
        "Bool",
        "NumIs",
        "NumIsNot",
        "NumGreaterThan",
        "NumLessThan",
        "IsEmpty",
        "DateIs",
        "DateTimeIs",
        "DateBefore",
        "DateAfter",
      ]),
      u = [s.Includes, s.Excludes, s.Exact, s.Regex],
      c = [s.NumIs, s.NumIsNot, s.NumGreaterThan, s.NumLessThan],
      d = [s.DateIs, s.DateTimeIs, s.DateBefore, s.DateAfter],
      m = s.Bool,
      p = [s.Unset, s.IsEmpty],
      _ = [].concat(p, [m], u, c, d),
      f = [
        "t",
        "ts",
        "tcTokenTimestamp",
        "tcTokenSenderTimestamp",
        "lastSuccessfulSyncEndTime",
        "phoneNumberCreatedAt",
        "timestamp",
        "subjectTime",
        "descTime",
        "creationTime",
      ],
      g = n("$InternalEnum").Mirrored(["Any", "All"]),
      h = ["type", "key", "value", "match"],
      y = ["type", "conditionKey", "conditions"],
      C = 1e3;
    async function b(t, n, r, a, i, l) {
      l === void 0 && (l = null);
      try {
        var s = await v(t, r, a, i);
        l != null && (s = $(s, l));
        var u = n * e,
          c = u + e,
          d = s.slice(u, c),
          m = s.length;
        return d && o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(d)
          ? { table: d, rowCount: m }
          : { table: null, rowCount: 0 };
      } catch (e) {
        return { table: null, rowCount: 0 };
      }
    }
    async function v(e, t, n, r) {
      var a = o("WAWebModelStorageUtils").getStorage().table(e),
        i = await a.all(),
        l = k(i, r),
        s = I(l, n);
      return P(s, t);
    }
    async function S(e) {
      var t = e.columns,
        n = e.columnToGroupBy,
        r = e.filters,
        o = e.groups,
        a = e.tableName,
        i = await v(a, t, r, o);
      return $(i, n);
    }
    function R(e) {
      var t = typeof e == "object" && e != null ? JSON.stringify(e) : String(e);
      return t.includes(",") ||
        t.includes('"') ||
        t.includes(`
`)
        ? '"' + t.replace(/\"/g, '""') + '"'
        : t;
    }
    async function L(e) {
      var t = e.columns,
        n = e.filters,
        r = e.groups,
        o = e.tableName,
        a = await v(o, t, n, r),
        i = t
          .filter(function (e) {
            return e.selected;
          })
          .map(function (e) {
            return e.name;
          }),
        l = [];
      (l.push(i.join(",")),
        a.forEach(function (e) {
          var t = i.map(function (t) {
            return R(e[t]);
          });
          l.push(t.join(","));
        }));
      var s = l.join(`
`);
      return new Blob([s], { type: "text/csv" });
    }
    async function E(e) {
      var t = e.columns,
        n = e.filters,
        r = e.groups,
        o = e.tableName,
        a = await v(o, t, n, r),
        i = t
          .filter(function (e) {
            return e.selected;
          })
          .map(function (e) {
            return e.name;
          }),
        l = a.map(function (e) {
          var t = {};
          for (var n of i) t[n] = e[n];
          return t;
        }),
        s = JSON.stringify(l, null, 2);
      return new Blob([s], { type: "application/json" });
    }
    function k(e, t) {
      var n = e;
      return (
        o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(t[0].conditions) &&
          (n = o("WAWebDeveloperToolsQueryTable").queryConditions(n, t[0])),
        o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(t[1].conditions) &&
          (n = o("WAWebDeveloperToolsQueryTable").queryConditions(n, t[1])),
        n
      );
    }
    function I(e, t) {
      return e.filter(function (e) {
        return t.every(function (t) {
          var n = t.key,
            r = t.match,
            o = t.value,
            a = e[n];
          return T(a, o, r);
        });
      });
    }
    function T(e, t, n) {
      var r,
        o =
          (r = t == null ? void 0 : t.toString().toLowerCase()) != null
            ? r
            : "",
        a = new RegExp((t == null ? void 0 : t.toString()) || "", "i"),
        i = String(e).toLowerCase(),
        l = typeof e == "number" ? new Date(e * C) : new Date();
      if (t == null || o === "") return !0;
      var u = new Date(t.toString());
      switch (n) {
        case s.Includes:
          return i.includes(o);
        case s.Excludes:
          return !i.includes(o);
        case s.Exact:
          return i === o;
        case s.Regex:
          return typeof e == "string" && a.test(e);
        case s.Bool:
          return typeof e == "boolean" && e === t;
        case s.NumIs:
          return typeof e == "number" && Number(e) === Number(t);
        case s.NumIsNot:
          return typeof e == "number" && Number(e) !== Number(t);
        case s.NumGreaterThan:
          return typeof e == "number" && Number(e) > Number(t);
        case s.NumLessThan:
          return typeof e == "number" && Number(e) < Number(t);
        case s.IsEmpty:
          return t === !0
            ? M(e == null ? void 0 : e.toString())
            : !M(e == null ? void 0 : e.toString());
        case s.DateIs:
          return D(l, u, !1);
        case s.DateTimeIs:
          return D(l, u, !0);
        case s.DateBefore:
          return typeof e == "number" && l < u;
        case s.DateAfter:
          return typeof e == "number" && l > u;
        case s.Unset:
          return !0;
      }
    }
    function D(e, t, n) {
      var r =
        e.getFullYear() === t.getFullYear() &&
        e.getMonth() === t.getMonth() &&
        e.getDate() === t.getDate();
      return n
        ? r &&
            e.getHours() === t.getHours() &&
            e.getMinutes() === t.getMinutes()
        : r;
    }
    async function x(e) {
      try {
        var t = o("WAWebModelStorageUtils").getStorage().table(e),
          n = await t.all(),
          r = N(n);
        return r.map(function (e) {
          var t = e.columnName,
            n = e.type;
          return { name: t, selected: !0, type: n };
        });
      } catch (e) {
        return [];
      }
    }
    function $(e, t) {
      var n = {};
      e.forEach(function (e) {
        var r = e[t],
          o = typeof r == "object" ? JSON.stringify(r) : String(r);
        (n[o] || (n[o] = { count: 0 }), n[o].count++);
      });
      var r = Object.entries(n).map(function (e) {
        var t = e[0],
          n = e[1];
        return babelHelpers.extends({ value: t }, n);
      });
      return r;
    }
    function P(e, t) {
      return e.map(function (e) {
        var n = Object.keys(e),
          r = t
            .filter(function (e) {
              var t = e.selected;
              return t;
            })
            .map(function (e) {
              var t = e.name;
              return t;
            }),
          o = n.filter(function (e) {
            return r.includes(e);
          }),
          a = o.reduce(function (t, n) {
            var r;
            return babelHelpers.extends({}, t, ((r = {}), (r[n] = e[n]), r));
          }, {});
        return a;
      });
    }
    function N(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          Object.entries(e).forEach(function (e) {
            var n = e[0],
              r = e[1];
            (t.get(n) == null || t.get(n) === "undefined") &&
              (f.includes(n) ? t.set(n, "date") : t.set(n, typeof r));
          });
        }),
        Array.from(t, function (e) {
          var t = e[0],
            n = e[1];
          return { columnName: t, type: n };
        })
      );
    }
    function M(e) {
      return e == null || e === "" || e === "undefined";
    }
    function w(e) {
      return String(e)
        .replace(/([A-Z])/g, " $1")
        .trim();
    }
    ((l.MAX_ROWS = e),
      (l.FilterMatch = s),
      (l.StringFilters = u),
      (l.NumberFilters = c),
      (l.DateFilters = d),
      (l.BoolFilter = m),
      (l.AllFilters = _),
      (l.MapKey = g),
      (l.RequiredRuleKeys = h),
      (l.RequiredGroupKeys = y),
      (l.loadTableRows = b),
      (l.genGroupByChartData = S),
      (l.genCSVfromTable = L),
      (l.genJSONfromTable = E),
      (l.executeQuery = k),
      (l.filterRows = I),
      (l.validateFilterMatch = T),
      (l.loadTableHeaders = x),
      (l.groupTableBy = $),
      (l.filterColumns = P),
      (l.formatFilterMatch = w));
  },
  98,
);
