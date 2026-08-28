__d(
  "AdsInsightsAttributionSettingBreakdownUtils",
  [
    "AdsInsightsAttributionSetting",
    "AdsInsightsBreakdowns",
    "AdsInsightsBreakdownsSpec",
    "AdsInsightsField",
    "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
    "areEqual",
    "firstx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "attribution_setting_breakdown_key",
      u = function (t) {
        return r("justknobx")._("2023")
          ? !0
          : ![
              "app_custom_event.custom",
              "offline_conversion.custom",
              "offsite_conversion.custom",
            ].some(function (e) {
              return t.startsWith(e);
            });
      },
      c = [
        "1d_ev",
        "1d_view",
        "1d_click",
        "7d_click",
        "skan_view",
        "skan_click",
      ],
      d = [].concat(c, [
        "1d_ev_first_conversion",
        "1d_view_first_conversion",
        "1d_click_first_conversion",
        "7d_click_first_conversion",
      ]),
      m = [
        "1d_click_first_conversion",
        "1d_view_first_conversion",
        "1d_ev_first_conversion",
        "7d_click_first_conversion",
      ],
      p = [
        "1d_click",
        "7d_click",
        "1d_click_1d_ev",
        "1d_view_1d_click",
        "1d_view_1d_click_1d_ev",
        "7d_click_1d_ev",
        "1d_view_7d_click",
        "1d_view_7d_click_1d_ev",
      ],
      _ = "first_conversion",
      f = "other_conversions";
    function g(e, t) {
      var n = e === "FIRST_CONVERSION";
      return n &&
        o(
          "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
        ).shouldEnableMCOSupportForAttributionBreakdown()
        ? t === "1d_click"
          ? "1d_click_first_conversion"
          : t === "7d_click"
            ? "7d_click_first_conversion"
            : t === "1d_view"
              ? "1d_view_first_conversion"
              : t === "1d_ev"
                ? "1d_ev_first_conversion"
                : t
        : t;
    }
    function h(e) {
      var t = r("firstx")(e),
        n = t[r("AdsInsightsField").ATTRIBUTION_SETTING],
        o = t.conversion_count_setting;
      return p.includes(n)
        ? [
            babelHelpers.extends({}, t, {
              attribution_setting_breakdown_key: g(o, "1d_click"),
            }),
            babelHelpers.extends({}, t, {
              attribution_setting_breakdown_key: g(o, "7d_click"),
            }),
            babelHelpers.extends({}, t, {
              attribution_setting_breakdown_key: g(o, "1d_ev"),
            }),
            babelHelpers.extends({}, t, {
              attribution_setting_breakdown_key: g(o, "1d_view"),
            }),
          ]
        : n === "skan"
          ? [
              babelHelpers.extends({}, t, {
                attribution_setting_breakdown_key: "skan_view",
              }),
              babelHelpers.extends({}, t, {
                attribution_setting_breakdown_key: "skan_click",
              }),
            ]
          : [];
    }
    function y(e) {
      var t = r("firstx")(e),
        n = t[r("AdsInsightsField").ATTRIBUTION_SETTING];
      return p.includes(n)
        ? [
            babelHelpers.extends({}, t, {
              attribution_setting_breakdown_key: _,
            }),
            babelHelpers.extends({}, t, {
              attribution_setting_breakdown_key: f,
            }),
          ]
        : [];
    }
    function C(e) {
      var t = Number(e != null ? e : 0);
      return Number.isInteger(t) ? t : 0;
    }
    function b(e, t) {
      function n() {
        var e = 0;
        return (
          t.X1D_CLICK_FIRST_CONVERSION.getValue() != null &&
            (e += C(t.X1D_CLICK_FIRST_CONVERSION.getValue())),
          t.X1D_VIEW_FIRST_CONVERSION.getValue() != null &&
            (e += C(t.X1D_VIEW_FIRST_CONVERSION.getValue())),
          t.X1D_EVC_FIRST_CONVERSION.getValue() != null &&
            (e += C(t.X1D_EVC_FIRST_CONVERSION.getValue())),
          t.X7D_CLICK_FIRST_CONVERSION.getValue() != null &&
            (e += C(t.X7D_CLICK_FIRST_CONVERSION.getValue())),
          e
        );
      }
      if (e === _) return n() > 0 ? n() : null;
      if (e === f) {
        var r = t.ALL_CONVERSIONS.getValue(),
          o = n();
        if (r != null && o > 0) return C(r) - o;
      }
      return null;
    }
    function v(e) {
      return (
        e.indexOf("cost_per_result") === -1 &&
        (e.indexOf("results") !== -1 || e.indexOf("actions:") !== -1)
      );
    }
    function S(e, t) {
      e: {
        if (e === "1d_click" || e === "1d_click_first_conversion")
          return t.X1D_CLICK.getValue() != null
            ? C(t.X1D_CLICK.getValue())
            : null;
        if (e === "7d_click" || e === "7d_click_first_conversion") {
          var n = t.X7D_CLICK.getValue(),
            r = t.X1D_CLICK.getValue();
          return n != null ? C(n) - C(r) : null;
        }
        if (e === "1d_view" || e === "1d_view_first_conversion") {
          var o = t.X1D_EVC.getValue(),
            a = t.X1D_VIEW.getValue();
          return o != null && a != null ? C(a) - C(o) : a != null ? C(a) : null;
        }
        if (e === "1d_ev" || e === "1d_ev_first_conversion")
          return t.X1D_EVC.getValue() != null ? C(t.X1D_EVC.getValue()) : null;
        if (e === "skan_view")
          return t.SKAN_VIEW.getValue() != null
            ? C(t.SKAN_VIEW.getValue())
            : null;
        if (e === "skan_click") {
          var i = t.SKAN_VIEW.getValue(),
            l = t.SKAN_CLICK.getValue();
          return l != null ? C(l) - C(i) : null;
        }
        return null;
      }
    }
    function R(e) {
      var t = r("AdsInsightsAttributionSetting").cast(e);
      return (
        t != null &&
        [
          "7d_click",
          "1d_view_7d_click",
          "7d_click_1d_ev",
          "1d_view_7d_click_1d_ev",
        ].includes(t)
      );
    }
    function L(e) {
      var t = r("AdsInsightsAttributionSetting").cast(e);
      return (
        t != null &&
        [
          "1d_click",
          "1d_view_1d_click",
          "1d_view_1d_click_1d_ev",
          "1d_click_1d_ev",
        ].includes(t)
      );
    }
    function E(e) {
      var t = r("AdsInsightsAttributionSetting").cast(e);
      return (
        t != null &&
        [
          "1d_view_7d_click",
          "1d_view_7d_click_1d_ev",
          "1d_view_1d_click",
          "1d_view_1d_click_1d_ev",
        ].includes(t)
      );
    }
    function k(e) {
      var t = r("AdsInsightsAttributionSetting").cast(e);
      return (
        t != null &&
        [
          "7d_click_1d_ev",
          "1d_view_7d_click_1d_ev",
          "1d_click_1d_ev",
          "1d_view_1d_click_1d_ev",
        ].includes(t)
      );
    }
    function I(e) {
      var t = r("AdsInsightsAttributionSetting").cast(e);
      return t === "skan";
    }
    function T(e, t, n) {
      return (
        r("justknobx")._("5021") &&
        e !== "unit" &&
        t === "breakdown" &&
        n.some(function (e) {
          return r("AdsInsightsBreakdowns").isAttributionSettingBreakdown(e);
        }) &&
        o(
          "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
        ).shouldAccountSeeAttributionSettingBreakdownWithoutExposure()
      );
    }
    function D(t, n, a, i, l, s) {
      var u = T(t, n, a);
      return u
        ? (e || (e = r("areEqual")))(a, [
            o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns
              .ATTRIBUTION_SETTING,
          ])
          ? i != null
            ? S(t, i)
            : null
          : (e || (e = r("areEqual")))(a, [
                o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns
                  .CONVERSION_COUNT,
              ])
            ? l != null
              ? b(t, l)
              : null
            : s
        : s;
    }
    function x(t, n, a, i, l, s) {
      var u = T(t, n, a);
      return u
        ? (e || (e = r("areEqual")))(a, [
            o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns
              .ATTRIBUTION_SETTING,
          ])
          ? i != null
            ? S(t, i)
            : s
          : (e || (e = r("areEqual")))(a, [
                o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns
                  .CONVERSION_COUNT,
              ]) && l != null
            ? b(t, l)
            : s
        : s;
    }
    ((l.ATTRIBUTION_SETTING_BREAKDOWN_KEY = s),
      (l.isAttributionBreakdownMCOSupported = u),
      (l.ATTRIBUTION_WINDOW_BREAKDOWN_SUPPORTED_ATTRIBUTION_WINDOWS = c),
      (l.ATTRIBUTION_WINDOW_BREAKDOWN_SUPPORTED_ATTRIBUTION_WINDOWS_MCO = d),
      (l.CONVERSION_COUNT_BREAKDOWN_SUPPORTED_ATTRIBUTION_WINDOWS = m),
      (l.FIRST_CONVERSION_BREAKDOWN_KEY = _),
      (l.OTHER_CONVERSIONS_BREAKDOWN_KEY = f),
      (l.getAttributionSettingBreakdownRowKey = g),
      (l.getAttributionSettingBreakdownRows = h),
      (l.getConversionCountBreakdownRows = y),
      (l.getConversionCountBreakdownRowValue = b),
      (l.isColumnSupportAttributionSettingBreakdown = v),
      (l.getAttributionSettingBreakdownRowValue = S),
      (l.isX7DClickAttributionSetting = R),
      (l.isX1DClickAttributionSetting = L),
      (l.isX1DViewAttributionSetting = E),
      (l.isX1DEVCAttributionSetting = k),
      (l.isSKANAttributionSetting = I),
      (l.getAttributionSettingBreakdownPrimaryValue = D),
      (l.getAttributionSettingBreakdownBenchmarkValue = x));
  },
  98,
);
