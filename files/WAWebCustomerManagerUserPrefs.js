__d(
  "WAWebCustomerManagerUserPrefs",
  [
    "WAWebCustomerManagerCustomFieldTypes",
    "WAWebCustomerManagerGating",
    "WAWebCustomerManagerListViewColumns",
    "WAWebUICustomizationStore",
  ],
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
      if (typeof e != "string") return null;
      var t = p.get(e);
      if (t != null) return t;
      var n = o("WAWebCustomerManagerCustomFieldTypes").customFieldIdFromKey(e);
      return n != null
        ? o("WAWebCustomerManagerCustomFieldTypes").customFieldKey(n)
        : null;
    }
    function f(e) {
      if (!Array.isArray(e)) return null;
      var t = e.map(_).filter(function (e) {
        return e != null;
      });
      return t.length === 0 ? null : t;
    }
    function g(e) {
      if (!Array.isArray(e)) return null;
      var t = new Set(e),
        n = o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS.filter(
          function (e) {
            return t.has(e);
          },
        ),
        r = new Set(n);
      for (var a of e) {
        var i = _(a);
        i != null &&
          o("WAWebCustomerManagerCustomFieldTypes").customFieldIdFromKey(i) !=
            null &&
          !r.has(i) &&
          (r.add(i), n.push(i));
      }
      return n;
    }
    function h(t) {
      var n = o("WAWebUICustomizationStore").getCustomization(e, g, []);
      return n.includes(t);
    }
    function y() {
      var t = new Set(
        o("WAWebUICustomizationStore").getCustomization(e, g, []),
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
    function C(t, n) {
      var r = new Set(t),
        a = new Set(n != null ? n : []),
        i = []
          .concat(
            o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS,
            n != null ? n : [],
          )
          .filter(function (e) {
            return !r.has(e);
          }),
        l = o("WAWebUICustomizationStore").getCustomization(e, g, []);
      for (var s of l) {
        var u = o("WAWebCustomerManagerCustomFieldTypes").customFieldIdFromKey(
          s,
        );
        u != null &&
          !a.has(o("WAWebCustomerManagerCustomFieldTypes").customFieldKey(u)) &&
          !r.has(s) &&
          !i.includes(s) &&
          i.push(s);
      }
      o("WAWebUICustomizationStore").saveCustomization(e, i);
    }
    function b(e) {
      var t = f(e);
      if (t == null) return null;
      var n = new Set(t),
        r = o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS.filter(
          function (e) {
            return !n.has(e);
          },
        );
      return r.length === 0 ? t : [].concat(t, r);
    }
    function v() {
      return o("WAWebUICustomizationStore").getCustomization(
        s,
        b,
        o("WAWebCustomerManagerListViewColumns").ALL_COLUMN_KEYS,
      );
    }
    function S(e) {
      o("WAWebUICustomizationStore").saveCustomization(s, [].concat(e));
    }
    function R(e) {
      if (!Array.isArray(e) || e.length !== 2) return null;
      var t = e[0],
        n = e[1],
        r = o("WAWebCustomerManagerListViewColumns").SORTABLE_COLUMN_KEYS.find(
          function (e) {
            return e === t;
          },
        ),
        a =
          typeof t == "string" &&
          o("WAWebCustomerManagerGating").customerManagerCustomFieldsEnabled()
            ? o("WAWebCustomerManagerCustomFieldTypes").customFieldIdFromKey(t)
            : null,
        i =
          r != null
            ? r
            : a != null
              ? o("WAWebCustomerManagerCustomFieldTypes").customFieldKey(a)
              : null;
      return i == null || (n !== "asc" && n !== "desc")
        ? null
        : { direction: n, key: i };
    }
    function L() {
      return o("WAWebUICustomizationStore").getCustomization(u, R, null);
    }
    function E(e) {
      o("WAWebUICustomizationStore").saveCustomization(
        u,
        e == null ? null : [e.key, e.direction],
      );
    }
    function k(e) {
      if (!Array.isArray(e)) return null;
      var t = new Map();
      for (var n of e)
        if (Array.isArray(n)) {
          var r = n[0],
            o = n[1],
            a = _(r);
          a != null &&
            typeof o == "number" &&
            Number.isFinite(o) &&
            o > 0 &&
            t.set(a, o);
        }
      return Array.from(t);
    }
    function I() {
      return o("WAWebUICustomizationStore").getCustomization(c, k, []);
    }
    function T(e) {
      o("WAWebUICustomizationStore").saveCustomization(c, [].concat(e));
    }
    function D(e) {
      return e === "trial_halfway" || e === "trial_ending" ? e : null;
    }
    function x() {
      return o("WAWebUICustomizationStore").getCustomization(d, D, null);
    }
    function $(e) {
      o("WAWebUICustomizationStore").saveCustomization(d, e);
    }
    function P(e) {
      if (!Array.isArray(e) || e.length !== 3) return null;
      var t = e[0],
        n = e[1],
        r = e[2],
        o = D(t);
      return o != null && typeof n == "number" && typeof r == "string"
        ? { count: n, lastDay: r, stage: o }
        : null;
    }
    function N() {
      return o("WAWebUICustomizationStore").getCustomization(m, P, null);
    }
    function M(e) {
      var t = e.count,
        n = e.lastDay,
        r = e.stage;
      o("WAWebUICustomizationStore").saveCustomization(m, [r, t, n]);
    }
    function w() {
      (o("WAWebUICustomizationStore").saveCustomization(d, null),
        o("WAWebUICustomizationStore").saveCustomization(m, null));
    }
    ((l.isColumnHidden = h),
      (l.getVisibleColumns = y),
      (l.saveVisibleColumns = C),
      (l.getColumnOrder = v),
      (l.saveColumnOrder = S),
      (l.getSortConfig = L),
      (l.saveSortConfig = E),
      (l.getColumnWidths = I),
      (l.saveColumnWidths = T),
      (l.getDismissedTrialBanner = x),
      (l.saveDismissedTrialBanner = $),
      (l.getTrialBannerViewDays = N),
      (l.saveTrialBannerViewDays = M),
      (l.resetTrialBanner = w));
  },
  98,
);
