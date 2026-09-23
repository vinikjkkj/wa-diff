__d(
  "WAWebContactManagerUserPrefs",
  ["WAWebContactManagerListViewColumns", "WAWebUICustomizationStore"],
  function (t, n, r, o, a, i, l) {
    var e = "customer_manager_hidden_columns",
      s = "customer_manager_column_order",
      u = "customer_manager_sort_config",
      c = new Set(o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS);
    function d(e) {
      if (!Array.isArray(e)) return null;
      var t = e.filter(function (e) {
        return typeof e == "string" && c.has(e);
      });
      if (t.length === 0) return null;
      var n = t;
      return n;
    }
    function m(e) {
      if (!Array.isArray(e)) return null;
      var t = new Set(e);
      return o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS.filter(
        function (e) {
          return t.has(e);
        },
      );
    }
    function p() {
      var t = new Set(
        o("WAWebUICustomizationStore").getCustomization(e, m, []),
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
    function _(t) {
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
    function f(e) {
      var t = d(e);
      if (t == null) return null;
      var n = new Set(t),
        r = o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS.filter(
          function (e) {
            return !n.has(e);
          },
        );
      return r.length === 0 ? t : [].concat(t, r);
    }
    function g() {
      return o("WAWebUICustomizationStore").getCustomization(
        s,
        f,
        o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS,
      );
    }
    function h(e) {
      o("WAWebUICustomizationStore").saveCustomization(s, [].concat(e));
    }
    function y(e) {
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
    function C() {
      return o("WAWebUICustomizationStore").getCustomization(u, y, null);
    }
    function b(e) {
      o("WAWebUICustomizationStore").saveCustomization(
        u,
        e == null ? null : [e.key, e.direction],
      );
    }
    ((l.getVisibleColumns = p),
      (l.saveVisibleColumns = _),
      (l.getColumnOrder = g),
      (l.saveColumnOrder = h),
      (l.getSortConfig = C),
      (l.saveSortConfig = b));
  },
  98,
);
