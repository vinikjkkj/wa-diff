__d(
  "WAWebContactManagerUserPrefs",
  ["WAWebContactManagerListViewColumns", "WAWebUICustomizationStore"],
  function (t, n, r, o, a, i, l) {
    var e = "customer_manager_hidden_columns",
      s = "customer_manager_column_order",
      u = "customer_manager_sort_config",
      c = "customer_manager_column_widths",
      d = new Map(
        o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS.map(
          function (e) {
            return [e, e];
          },
        ),
      );
    function m(e) {
      if (!Array.isArray(e)) return null;
      var t = e.filter(function (e) {
        return typeof e == "string" && d.has(e);
      });
      if (t.length === 0) return null;
      var n = t;
      return n;
    }
    function p(e) {
      if (!Array.isArray(e)) return null;
      var t = new Set(e);
      return o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS.filter(
        function (e) {
          return t.has(e);
        },
      );
    }
    function _() {
      var t = new Set(
        o("WAWebUICustomizationStore").getCustomization(e, p, []),
      );
      return o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS.filter(
        function (e) {
          return (
            o(
              "WAWebContactManagerListViewColumns",
            ).ALWAYS_VISIBLE_COLUMNS.includes(e) || !t.has(e)
          );
        },
      );
    }
    function f(t) {
      var n = new Set(t);
      o("WAWebUICustomizationStore").saveCustomization(
        e,
        o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS.filter(
          function (e) {
            return !n.has(e);
          },
        ),
      );
    }
    function g(e) {
      var t = m(e);
      if (t == null) return null;
      var n = new Set(t),
        r = o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS.filter(
          function (e) {
            return !n.has(e);
          },
        );
      return r.length === 0 ? t : [].concat(t, r);
    }
    function h() {
      return o("WAWebUICustomizationStore").getCustomization(
        s,
        g,
        o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS,
      );
    }
    function y(e) {
      o("WAWebUICustomizationStore").saveCustomization(s, [].concat(e));
    }
    function C(e) {
      if (!Array.isArray(e) || e.length !== 2) return null;
      var t = e[0],
        n = e[1],
        r = o("WAWebContactManagerListViewColumns").SORTABLE_COLUMN_KEYS.find(
          function (e) {
            return e === t;
          },
        );
      return r == null || (n !== "asc" && n !== "desc")
        ? null
        : { direction: n, key: r };
    }
    function b() {
      return o("WAWebUICustomizationStore").getCustomization(u, C, null);
    }
    function v(e) {
      o("WAWebUICustomizationStore").saveCustomization(
        u,
        e == null ? null : [e.key, e.direction],
      );
    }
    function S(e) {
      if (!Array.isArray(e)) return null;
      var t = new Map();
      for (var n of e)
        if (Array.isArray(n)) {
          var r = n[0],
            o = n[1],
            a = typeof r == "string" ? d.get(r) : void 0;
          a != null &&
            typeof o == "number" &&
            Number.isFinite(o) &&
            o > 0 &&
            t.set(a, o);
        }
      return Array.from(t);
    }
    function R() {
      return o("WAWebUICustomizationStore").getCustomization(c, S, []);
    }
    function L(e) {
      o("WAWebUICustomizationStore").saveCustomization(c, [].concat(e));
    }
    ((l.getVisibleColumns = _),
      (l.saveVisibleColumns = f),
      (l.getColumnOrder = h),
      (l.saveColumnOrder = y),
      (l.getSortConfig = b),
      (l.saveSortConfig = v),
      (l.getColumnWidths = R),
      (l.saveColumnWidths = L));
  },
  98,
);
