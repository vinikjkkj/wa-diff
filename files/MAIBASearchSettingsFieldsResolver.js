__d(
  "MAIBASearchSettingsFieldsResolver",
  [
    "AdsGenericFilterFieldConfigUtil",
    "AdsInsightsBreakdownEntries",
    "AdsPEFilterFieldConfig",
    "AdsPEFilterFields",
    "AdsPETypeaheadFilterDropdownUtils",
    "MAIBASearchSettingsFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "CURRENCY":
          return "currency";
        case "NUMBER":
        case "NUMBER_RANGE":
        case "NUMBER_SET":
        case "DURATION":
          return "number";
        case "PERCENTAGE":
          return "percentage";
        case "STRING_SET":
        case "BOOLEAN":
          return "enum";
        default:
          return "string";
      }
    }
    function s(t) {
      var n = r("AdsPEFilterFields")[t];
      if (n == null) return null;
      var o = r("AdsGenericFilterFieldConfigUtil").getConfigByFieldOrNull(
        r("AdsPEFilterFieldConfig"),
        n,
      );
      if (o == null) return null;
      var a = e(n.type),
        i = [];
      if (Array.isArray(o.operators))
        for (var l of o.operators)
          l != null && typeof l.operator == "string" && i.push(l.operator);
      var s = [],
        u = o.values;
      if (Array.isArray(u))
        for (var c of u)
          c != null &&
            typeof c == "object" &&
            typeof c.value == "string" &&
            s.push({ description: c.value, value: c.value });
      return {
        field_name: t,
        filter_operators: i,
        filter_value_format: a,
        filter_value_options: s,
      };
    }
    function u(e, t) {
      var n = o("AdsPETypeaheadFilterDropdownUtils").getColumnsWithFilters(e),
        a = new Set();
      for (var i of Object.values(n)) {
        var l = r("AdsPEFilterFields")[i];
        l != null && a.add(l.name);
      }
      var u = [];
      for (var c of t) {
        var d = s(c);
        d != null && u.push(d);
      }
      return u.filter(function (e) {
        return !!(
          a.has(e.field_name) ||
          e.filter_value_format === "enum" ||
          e.filter_value_format === "string"
        );
      });
    }
    function c() {
      return {
        l3: u("campaign", o("MAIBASearchSettingsFields").L3_FIELDS),
        l2: u("ad_set", o("MAIBASearchSettingsFields").L2_FIELDS),
        l1: u("ad", o("MAIBASearchSettingsFields").L1_FIELDS),
      };
    }
    function d() {
      var e = new Set(),
        t = ["campaign", "ad_set", "ad"];
      for (var n of t)
        for (var r of Object.keys(
          o("AdsPETypeaheadFilterDropdownUtils").getColumnsWithFilters(n),
        ))
          e.add(r);
      return Array.from(e).sort();
    }
    function m() {
      var e = [];
      for (var t of o("AdsInsightsBreakdownEntries").getAllEntries()) {
        var n = o("AdsInsightsBreakdownEntries").getConfigOrNull(t);
        if (!(n == null || n.breakdowns.length === 0)) {
          var r = String(n.name);
          r !== "" && e.push({ id: t, label: r });
        }
      }
      return e;
    }
    function p(e) {
      return e === "ad"
        ? "L1"
        : e === "ad_set"
          ? "L2"
          : e === "campaign"
            ? "L3"
            : null;
    }
    function _(e) {
      var t = c(),
        n = d(),
        r = function (t) {
          return t.map(function (e) {
            var t = e.filter_value_options.map(function (e) {
              return { value: e.value, description: e.description };
            });
            return {
              field_name: e.field_name,
              filter_operators: [].concat(e.filter_operators),
              filter_value_format: e.filter_value_format,
              filter_value_options: t,
            };
          });
        };
      return {
        breakdowns: m(),
        current_level: p(e),
        l1_filter_fields: r(t.l1),
        l2_filter_fields: r(t.l2),
        l3_filter_fields: r(t.l3),
        sorting_columns: [].concat(n),
      };
    }
    ((l.getResolvedSortingColumns = d),
      (l.getBreakdowns = m),
      (l.getSearchSettingsContext = _));
  },
  98,
);
