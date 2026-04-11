__d(
  "WAWebCustomerManagerUserPrefs",
  ["WAWebCustomerManagerListViewColumns", "WAWebUICustomizationStore"],
  function (t, n, r, o, a, i, l) {
    var e = "customer_manager_visible_columns",
      s = new Set(o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS);
    function u(e) {
      if (!Array.isArray(e)) return null;
      var t = e.filter(function (e) {
        return typeof e == "string" && s.has(e);
      });
      if (t.length === 0) return null;
      var n = t;
      return n;
    }
    function c() {
      return o("WAWebUICustomizationStore").getCustomization(
        e,
        u,
        o("WAWebCustomerManagerListViewColumns").DEFAULT_VISIBLE_COLUMNS,
      );
    }
    function d(t) {
      o("WAWebUICustomizationStore").saveCustomization(e, [].concat(t));
    }
    ((l.getVisibleColumns = c), (l.saveVisibleColumns = d));
  },
  98,
);
