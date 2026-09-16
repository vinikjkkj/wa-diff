__d(
  "WAWebContactManagerUserPrefs",
  ["WAWebContactManagerListViewColumns", "WAWebUICustomizationStore"],
  function (t, n, r, o, a, i, l) {
    var e = "customer_manager_hidden_columns",
      s = "customer_manager_column_order",
      u = new Set(o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS);
    function c(e) {
      if (!Array.isArray(e)) return null;
      var t = e.filter(function (e) {
        return typeof e == "string" && u.has(e);
      });
      if (t.length === 0) return null;
      var n = t;
      return n;
    }
    function d(e) {
      if (!Array.isArray(e)) return null;
      var t = new Set(e);
      return o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS.filter(
        function (e) {
          return t.has(e);
        },
      );
    }
    function m() {
      var t = new Set(
        o("WAWebUICustomizationStore").getCustomization(e, d, []),
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
    function p(t) {
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
    function _(e) {
      var t = c(e);
      if (t == null) return null;
      var n = new Set(t),
        r = o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS.filter(
          function (e) {
            return !n.has(e);
          },
        );
      return r.length === 0 ? t : [].concat(t, r);
    }
    function f() {
      return o("WAWebUICustomizationStore").getCustomization(
        s,
        _,
        o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS,
      );
    }
    function g(e) {
      o("WAWebUICustomizationStore").saveCustomization(s, [].concat(e));
    }
    ((l.getVisibleColumns = m),
      (l.saveVisibleColumns = p),
      (l.getColumnOrder = f),
      (l.saveColumnOrder = g));
  },
  98,
);
