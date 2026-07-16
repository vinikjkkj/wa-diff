__d(
  "WAWebContactManagerUserPrefs",
  ["WAWebContactManagerListViewColumns", "WAWebUICustomizationStore"],
  function (t, n, r, o, a, i, l) {
    var e = "customer_manager_visible_columns",
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
    function d() {
      return o("WAWebUICustomizationStore").getCustomization(
        e,
        c,
        o("WAWebContactManagerListViewColumns").DEFAULT_VISIBLE_COLUMNS,
      );
    }
    function m(t) {
      o("WAWebUICustomizationStore").saveCustomization(e, [].concat(t));
    }
    function p(e) {
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
    function _() {
      return o("WAWebUICustomizationStore").getCustomization(
        s,
        p,
        o("WAWebContactManagerListViewColumns").ALL_COLUMN_KEYS,
      );
    }
    function f(e) {
      o("WAWebUICustomizationStore").saveCustomization(s, [].concat(e));
    }
    ((l.getVisibleColumns = d),
      (l.saveVisibleColumns = m),
      (l.getColumnOrder = _),
      (l.saveColumnOrder = f));
  },
  98,
);
