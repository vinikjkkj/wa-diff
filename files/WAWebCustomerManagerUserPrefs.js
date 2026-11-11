__d(
  "WAWebCustomerManagerUserPrefs",
  ["WAWebCustomerManagerListViewColumns", "WAWebUICustomizationStore"],
  function (t, n, r, o, a, i, l) {
    var e = "customer_manager_hidden_columns",
      s = "customer_manager_column_order",
      u = "customer_manager_sort_config",
      c = "customer_manager_column_widths",
      d = "customer_manager_dismissed_trial_banner",
      m = "customer_manager_trial_banner_view_days",
      p = new Map(
        o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS.map(
          function (e) {
            return [e, e];
          },
        ),
      );
    function _(e) {
      if (!Array.isArray(e)) return null;
      var t = e
        .map(function (e) {
          return typeof e == "string" ? p.get(e) : null;
        })
        .filter(function (e) {
          return e != null;
        });
      return t.length === 0 ? null : t;
    }
    function f(e) {
      if (!Array.isArray(e)) return null;
      var t = new Set(e);
      return o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS.filter(
        function (e) {
          return t.has(e);
        },
      );
    }
    function g() {
      var t = new Set(
        o("WAWebUICustomizationStore").getCustomization(e, f, []),
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
    function h(t) {
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
    function y(e) {
      var t = _(e);
      if (t == null) return null;
      var n = new Set(t),
        r = o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS.filter(
          function (e) {
            return !n.has(e);
          },
        );
      return r.length === 0 ? t : [].concat(t, r);
    }
    function C() {
      return o("WAWebUICustomizationStore").getCustomization(
        s,
        y,
        o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS,
      );
    }
    function b(e) {
      o("WAWebUICustomizationStore").saveCustomization(s, [].concat(e));
    }
    function v(e) {
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
    function S() {
      return o("WAWebUICustomizationStore").getCustomization(u, v, null);
    }
    function R(e) {
      o("WAWebUICustomizationStore").saveCustomization(
        u,
        e == null ? null : [e.key, e.direction],
      );
    }
    function L(e) {
      if (!Array.isArray(e)) return null;
      var t = new Map();
      for (var n of e)
        if (Array.isArray(n)) {
          var r = n[0],
            o = n[1],
            a = typeof r == "string" ? p.get(r) : void 0;
          a != null &&
            typeof o == "number" &&
            Number.isFinite(o) &&
            o > 0 &&
            t.set(a, o);
        }
      return Array.from(t);
    }
    function E() {
      return o("WAWebUICustomizationStore").getCustomization(c, L, []);
    }
    function k(e) {
      o("WAWebUICustomizationStore").saveCustomization(c, [].concat(e));
    }
    function I(e) {
      return e === "trial_halfway" || e === "trial_ending" ? e : null;
    }
    function T() {
      return o("WAWebUICustomizationStore").getCustomization(d, I, null);
    }
    function D(e) {
      o("WAWebUICustomizationStore").saveCustomization(d, e);
    }
    function x(e) {
      if (!Array.isArray(e) || e.length !== 3) return null;
      var t = e[0],
        n = e[1],
        r = e[2],
        o = I(t);
      return o != null && typeof n == "number" && typeof r == "string"
        ? { count: n, lastDay: r, stage: o }
        : null;
    }
    function $() {
      return o("WAWebUICustomizationStore").getCustomization(m, x, null);
    }
    function P(e) {
      var t = e.count,
        n = e.lastDay,
        r = e.stage;
      o("WAWebUICustomizationStore").saveCustomization(m, [r, t, n]);
    }
    function N() {
      (o("WAWebUICustomizationStore").saveCustomization(d, null),
        o("WAWebUICustomizationStore").saveCustomization(m, null));
    }
    ((l.getVisibleColumns = g),
      (l.saveVisibleColumns = h),
      (l.getColumnOrder = C),
      (l.saveColumnOrder = b),
      (l.getSortConfig = S),
      (l.saveSortConfig = R),
      (l.getColumnWidths = E),
      (l.saveColumnWidths = k),
      (l.getDismissedTrialBanner = T),
      (l.saveDismissedTrialBanner = D),
      (l.getTrialBannerViewDays = $),
      (l.saveTrialBannerViewDays = P),
      (l.resetTrialBanner = N));
  },
  98,
);
