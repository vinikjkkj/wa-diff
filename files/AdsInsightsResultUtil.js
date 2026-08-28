__d(
  "AdsInsightsResultUtil",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsDDAStrings",
    "AdsInsightsAttributionWindowUtil",
    "AdsInsightsAttributionWindows",
    "AdsInsightsUnits",
    "AdsMultiDestinationReportingUtils",
    "GeoLink.react",
    "areEqual",
    "isEmpty",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = /^offsite_conversion\.custom\.(.*)$/,
      p = {},
      _ = (function () {
        function e(e) {
          this.unit = e;
        }
        var t = e.prototype;
        return (
          (t.getPluralUnitLabel = function () {
            return o("AdsInsightsUnits").getLabelOrNull(this.unit, !0);
          }),
          (t.getSingleUnitLabel = function () {
            return o("AdsInsightsUnits").getLabelOrNull(this.unit, !1);
          }),
          (t.getResultsUnitLabel = function (t) {
            return Number.isFinite(t) && t > 1
              ? this.getPluralUnitLabel()
              : this.getSingleUnitLabel();
          }),
          (t.getResultValuesUnitLabel = function (t) {
            var e = o("AdsInsightsUnits").getValueLabelOrNull(this.unit);
            if (e) return e;
            if (Number.isFinite(t))
              return o("AdsInsightsUnits").getDefaultValueLabel();
          }),
          (t.getCostPerResultUnitLabel = function (t) {
            var e = o("AdsInsightsUnits").getPerLabelOrNull(this.unit);
            if (e) return e;
            if (Number.isFinite(t))
              return o("AdsInsightsUnits").getDefaultPerLabel();
          }),
          (t.getCostPerResultUnitAndAttributionLabel = function (t, n, r, o) {
            var e = this.getCostPerResultUnitLabel(t),
              a = null;
            return (o && (a = L(n, r)), E(e, a, n));
          }),
          (t.getResultUnitAndAttributionLabel = function (t, n, r, o) {
            var e = this.getResultsUnitLabel(t),
              a = null;
            return (o && (a = L(n, r)), E(e, a, n));
          }),
          (t.getResultValueUnitAndAttributionLabel = function (t, n, r, o) {
            var e = this.getResultValuesUnitLabel(t),
              a = null;
            return (o && (a = L(n, r)), E(e, a, n));
          }),
          e
        );
      })(),
      f = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, t) || this), (r.customConversion = n), r);
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getPluralUnitLabel = function () {
            return this.getSingleUnitLabel();
          }),
          (n.getSingleUnitLabel = function () {
            return this.customConversion && this.customConversion.name;
          }),
          (n.getCostPerResultUnitLabel = function (t) {
            var e = this.customConversion && this.customConversion.name;
            return e
              ? s._(/*BTDS*/ "Per {custom_conversion_name}", [
                  s._param("custom_conversion_name", e),
                ])
              : Number.isFinite(t)
                ? o("AdsInsightsUnits").getDefaultPerLabel()
                : void 0;
          }),
          (n.getResultValuesUnitLabel = function (t) {
            var e = this.customConversion && this.customConversion.name;
            return e
              ? s._(/*BTDS*/ "Value, {custom_conversion_name}", [
                  s._param("custom_conversion_name", e),
                ])
              : Number.isFinite(t)
                ? o("AdsInsightsUnits").getDefaultValueLabel()
                : void 0;
          }),
          t
        );
      })(_),
      g = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, t) || this), (r.eventName = n), r);
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getPluralUnitLabel = function () {
            return this.getSingleUnitLabel();
          }),
          (n.getSingleUnitLabel = function () {
            return this.eventName;
          }),
          (n.getCostPerResultUnitLabel = function (t) {
            return s._(/*BTDS*/ "Per {custom_event_name}", [
              s._param("custom_event_name", this.eventName),
            ]);
          }),
          (n.getResultValuesUnitLabel = function (t) {
            return s._(/*BTDS*/ "Value, {custom_event_name}", [
              s._param("custom_event_name", this.eventName),
            ]);
          }),
          t
        );
      })(_),
      h = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, t, n) || this), (r.eventName = n), r);
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getPluralUnitLabel = function () {
            var e;
            return this.getPostConversionUnitLabel(
              (e = o("AdsInsightsUnits").getLabelOrNull(this.eventName, !0)) !=
                null
                ? e
                : this.eventName,
            );
          }),
          (n.getSingleUnitLabel = function () {
            var e;
            return (
              r("vulture")("jVys__eGN1NSxyJxu_w5pCdgD44="),
              this.getPostConversionUnitLabel(
                (e = o("AdsInsightsUnits").getLabelOrNull(
                  this.eventName,
                  !1,
                )) != null
                  ? e
                  : this.eventName,
              )
            );
          }),
          (n.getPostConversionUnitLabel = function (t) {
            return s._(
              /*BTDS*/ "Post-conversion {post_conversion_event_name}",
              [s._param("post_conversion_event_name", t)],
            );
          }),
          (n.getCostPerResultUnitLabel = function (t) {
            return s._(/*BTDS*/ "Per post-conversion");
          }),
          (n.getResultValuesUnitLabel = function (t) {
            return s._(/*BTDS*/ "Value, Post-conversion");
          }),
          t
        );
      })(g),
      y = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getPluralUnitLabel = function () {
            return this.getSingleUnitLabel();
          }),
          (n.getSingleUnitLabel = function () {
            return T();
          }),
          (n.getCostPerResultUnitLabel = function (t) {
            return this.getSingleUnitLabel();
          }),
          (n.getResultValuesUnitLabel = function (t) {
            return this.getSingleUnitLabel();
          }),
          t
        );
      })(_),
      C = "mixed",
      b = "unknown",
      v = "_multi_label";
    function S(e, t) {
      if (k(e)) return new f(e, t);
      if (I(e)) return new y(e);
      var n = new _(e);
      if (
        e.startsWith("custom_event_actions_add_meta_leads") ||
        e.startsWith("grouped_pixel_custom_conversions_meta_leads")
      ) {
        var r = o(
          "AdsMultiDestinationReportingUtils",
        ).isMDReportingMultiLabelQEOn()
          ? e.split(".")[0] + v
          : e.split(".")[0];
        n = new _(r);
      } else if (
        o("AdsMultiDestinationReportingUtils").isMDReportingAggActionType(e) &&
        o("AdsMultiDestinationReportingUtils").isMDReportingMultiLabelQEOn()
      )
        n = new _(e + v);
      else if (
        e.startsWith("offsite_purchase_add_20_s_calls") ||
        e.startsWith("offsite_lead_add_20_s_calls") ||
        e.startsWith("offsite_content_view_add_20_s_calls") ||
        e.startsWith("offsite_complete_registration_add_20_s_calls") ||
        e.startsWith("offsite_initiate_checkout_add_20_s_calls") ||
        e.startsWith("offsite_add_to_cart_add_20_s_calls")
      ) {
        var a = e.split(".")[0] + v;
        n = new _(a);
      }
      if (!n.getResultsUnitLabel()) {
        var i = e.split(".");
        (i.findIndex(function (e) {
          return e === "app_custom_event";
        }) === 0 &&
          i.length === 2 &&
          (n = new g(e, i[1])),
          i.findIndex(function (e) {
            return e === "fb_pixel_custom";
          }) === 1 &&
            i.length === 3 &&
            (n = new g(e, i[2])),
          e.startsWith("post_conversion_signal_custom_event_indicator") &&
            (n = new h(e, e.split(":")[1])));
      }
      return n;
    }
    function R(e, t) {
      if (t.length !== 0) {
        if (!p[e]) {
          var n = t.find(function (t) {
            return t.id === e;
          });
          p[e] = n;
        }
        return p[e];
      }
    }
    function L(e, t) {
      return o(
        "AdsInsightsAttributionWindowUtil",
      ).getAttributionWindowComboLabel(e, t);
    }
    function E(e, t, n) {
      var r,
        a = n != null && o("AdsInsightsAttributionWindows").isSKAN(n);
      return (
        e && t && !a
          ? (r =
              n === "dda"
                ? o("AdsDDAStrings").getIncrementalColumnLabel(e)
                : s._(/*BTDS*/ "{unit_label}: {attribution_window_label}", [
                    s._param("unit_label", e),
                    s._param("attribution_window_label", t),
                  ]))
          : e && (r = e),
        r
      );
    }
    function k(e) {
      return m.test(e);
    }
    function I(e) {
      return e === C;
    }
    function T() {
      return s._(/*BTDS*/ "Multiple conversions");
    }
    function D(e, t, n) {
      var o,
        a = (o = e == null ? void 0 : e.length) != null ? o : 0;
      return s._(
        /*BTDS*/ "Results for this campaign were added together across these attribution settings: {list of multiple attribution settings}{expand \/ collapse attribution settings options}",
        [
          s._param(
            "list of multiple attribution settings",
            a > 3 && t ? (e == null ? void 0 : e.slice(0, 1)) : e,
          ),
          s._param(
            "expand / collapse attribution settings options",
            a > 3
              ? t
                ? d.jsx(r("GeoLink.react"), {
                    onClick: n,
                    children: s._(
                      /*BTDS*/ "View {view x number more of attribution settings} more",
                      [
                        s._param(
                          "view x number more of attribution settings",
                          a - 3,
                        ),
                      ],
                    ),
                  })
                : d.jsx(r("GeoLink.react"), {
                    onClick: n,
                    children: s._(/*BTDS*/ "View less"),
                  })
              : null,
          ),
        ],
      );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e, t, n) {
      var o,
        a = (o = e == null ? void 0 : e.length) != null ? o : 0,
        i = 3;
      return s._(
        /*BTDS*/ "Result values for this campaign were added together across these attribution settings: {list of multiple attribution settings}{expand \/ collapse attribution settings options}",
        [
          s._param(
            "list of multiple attribution settings",
            a > i && t ? (e == null ? void 0 : e.slice(0, 1)) : e,
          ),
          s._param(
            "expand / collapse attribution settings options",
            a > i
              ? t
                ? d.jsx(r("GeoLink.react"), {
                    onClick: n,
                    children: s._(
                      /*BTDS*/ "View {view x number more of attribution settings} more",
                      [
                        s._param(
                          "view x number more of attribution settings",
                          a - i,
                        ),
                      ],
                    ),
                  })
                : d.jsx(r("GeoLink.react"), {
                    onClick: n,
                    children: s._(/*BTDS*/ "View less"),
                  })
              : null,
          ),
        ],
      );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e, t, n) {
      var o,
        a = (o = e == null ? void 0 : e.length) != null ? o : 0,
        i = 3;
      return s._(
        /*BTDS*/ "Result ROAS for this campaign were added together across these attribution settings: {list of multiple attribution settings}{expand \/ collapse attribution settings options}",
        [
          s._param(
            "list of multiple attribution settings",
            a > i && t ? (e == null ? void 0 : e.slice(0, 1)) : e,
          ),
          s._param(
            "expand / collapse attribution settings options",
            a > i
              ? t
                ? d.jsx(r("GeoLink.react"), {
                    onClick: n,
                    children: s._(
                      /*BTDS*/ "View {view x number more of attribution settings} more",
                      [
                        s._param(
                          "view x number more of attribution settings",
                          a - i,
                        ),
                      ],
                    ),
                  })
                : d.jsx(r("GeoLink.react"), {
                    onClick: n,
                    children: s._(/*BTDS*/ "View less"),
                  })
              : null,
          ),
        ],
      );
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e, t, n, r, o) {
      return (
        o === void 0 && (o = !1),
        t
          ? o
            ? S(t, n).getCostPerResultUnitAndAttributionLabel(
                r,
                "default",
                e,
                !0,
              )
            : S(t, n).getResultUnitAndAttributionLabel(r, "default", e, !0)
          : null
      );
    }
    function N(t) {
      return (
        (e || (e = r("areEqual")))(t, [r("AdsAPIObjectives").CONVERSIONS]) ||
        (e || (e = r("areEqual")))(t, [r("AdsAPIObjectives").APP_INSTALLS])
      );
    }
    function M(t) {
      var n = Object.keys(t);
      if ((u || (u = r("isEmpty")))(n)) return !1;
      if (n.length > 1) return !0;
      var o = n[0],
        a = Object.keys(t[o]);
      return N(n) && (a.length > 1 || (e || (e = r("areEqual")))(a, [C]));
    }
    ((l.MIXED_UNIT = C),
      (l.UNKNOWN_INDICATOR = b),
      (l.getUnit = S),
      (l.getCustomConversionConfig = R),
      (l.getAttributionWindowLabel = L),
      (l.mergeUnitAndAttributionLabel = E),
      (l.isCustomConversionUnit = k),
      (l.isMixedUnit = I),
      (l.getMixedUnitLabel = T),
      (l.getResultsNullStateContent = D),
      (l.getResultValuesNullStateContent = x),
      (l.getResultRoasNullStateContent = $),
      (l.getOptimizationResultAttributionText = P),
      (l.isMixedEnableObjective = N),
      (l.hasMultipleObjectives = M));
  },
  226,
);
