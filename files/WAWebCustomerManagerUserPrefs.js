__d(
  "WAWebCustomerManagerUserPrefs",
  ["WAWebCustomerManagerListViewColumns", "WAWebUICustomizationStore"],
  function (t, n, r, o, a, i, l) {
    var e = "customer_manager_hidden_columns",
      s = "customer_manager_column_order",
      u = "customer_manager_sort_config",
      c = "customer_manager_column_widths",
      d = "customer_manager_dismissed_trial_banner",
      m = new Map(
        o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS.map(
          function (e) {
            return [e, e];
          },
        ),
      );
    function p(e) {
      if (!Array.isArray(e)) return null;
      var t = e
        .map(function (e) {
          return typeof e == "string" ? m.get(e) : null;
        })
        .filter(function (e) {
          return e != null;
        });
      return t.length === 0 ? null : t;
    }
    function _(e) {
      if (!Array.isArray(e)) return null;
      var t = new Set(e);
      return o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS.filter(
        function (e) {
          return t.has(e);
        },
      );
    }
    function f() {
      var t = new Set(
        o("WAWebUICustomizationStore").getCustomization(e, _, []),
      );
      return o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS.filter(
        function (e) {
          return (
            o(
              "WAWebCustomerManagerListViewColumns",
            ).ALWAYS_VISIBLE_COLUMNS.includes(e) || !t.has(e)
          );
        },
      );
    }
    function g(t) {
      var n = new Set(t);
      o("WAWebUICustomizationStore").saveCustomization(
        e,
        o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS.filter(
          function (e) {
            return !n.has(e);
          },
        ),
      );
    }
    function h(e) {
      var t = p(e);
      if (t == null) return null;
      var n = new Set(t),
        r = o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS.filter(
          function (e) {
            return !n.has(e);
          },
        );
      return r.length === 0 ? t : [].concat(t, r);
    }
    function y() {
      return o("WAWebUICustomizationStore").getCustomization(
        s,
        h,
        o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS,
      );
    }
    function C(e) {
      o("WAWebUICustomizationStore").saveCustomization(s, [].concat(e));
    }
    function b(e) {
      if (!Array.isArray(e) || e.length !== 2) return null;
      var t = e[0],
        n = e[1],
        r = o("WAWebCustomerManagerListViewColumns").SORTABLE_COLUMN_KEYS.find(
          function (e) {
            return e === t;
          },
        );
      return r == null || (n !== "asc" && n !== "desc")
        ? null
        : { direction: n, key: r };
    }
    function v() {
      return o("WAWebUICustomizationStore").getCustomization(u, b, null);
    }
    function S(e) {
      o("WAWebUICustomizationStore").saveCustomization(
        u,
        e == null ? null : [e.key, e.direction],
      );
    }
    function R(e) {
      if (!Array.isArray(e)) return null;
      var t = new Map();
      for (var n of e)
        if (Array.isArray(n)) {
          var r = n[0],
            o = n[1],
            a = typeof r == "string" ? m.get(r) : void 0;
          a != null &&
            typeof o == "number" &&
            Number.isFinite(o) &&
            o > 0 &&
            t.set(a, o);
        }
      return Array.from(t);
    }
    function L() {
      return o("WAWebUICustomizationStore").getCustomization(c, R, []);
    }
    function E(e) {
      o("WAWebUICustomizationStore").saveCustomization(c, [].concat(e));
    }
    function k(e) {
      return e === "trial_halfway" || e === "trial_ending" ? e : null;
    }
    function I() {
      return o("WAWebUICustomizationStore").getCustomization(d, k, null);
    }
    function T(e) {
      o("WAWebUICustomizationStore").saveCustomization(d, e);
    }
    ((l.getVisibleColumns = f),
      (l.saveVisibleColumns = g),
      (l.getColumnOrder = y),
      (l.saveColumnOrder = C),
      (l.getSortConfig = v),
      (l.saveSortConfig = S),
      (l.getColumnWidths = L),
      (l.saveColumnWidths = E),
      (l.getDismissedTrialBanner = I),
      (l.saveDismissedTrialBanner = T));
  },
  98,
);
