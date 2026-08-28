__d(
  "AdsInsightsAttributionWindowUtil",
  [
    "fbt",
    "AdEvcRolloutUtils",
    "AdsDDAStrings",
    "AdsInsightsAttributionWindows",
    "AdsReportBuilderCompareAttributionWindowUtils",
    "intlList",
    "isFalsey",
    "memoizeStringOnly",
    "memoizeWithArgsWeak",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e) {
      var t = o("AdsInsightsAttributionWindows").getDays(e);
      return s._(
        /*BTDS*/ '_j{"*":{"Day":"{number} day","Days":"{number} days"}}',
        [
          s._param("number", t, [0]),
          s._enum(t === 1 ? "Day" : "Days", { Day: "Day", Days: "Days" }),
        ],
      );
    }
    function c(e) {
      if (o("AdsInsightsAttributionWindows").isDefault(e))
        return s._(/*BTDS*/ "Default");
      if (e === "inline") return s._(/*BTDS*/ "On ad");
      if (e === "dda") return o("AdsDDAStrings").DATA_DRIVEN_ATTRIBUTION_LABEL;
      var t = o("AdsInsightsAttributionWindows").getDays(e),
        n = o("AdsInsightsAttributionWindows").isClick(e);
      return s._(
        /*BTDS*/ '_j{"*":{"click":"{number_of_days} days click","view":"{number_of_days} days view"},"_1":{"click":"{number_of_days} day click","view":"{number_of_days} day view"}}',
        [
          s._plural(t),
          s._enum(n ? "click" : "view", { click: "click", view: "view" }),
          s._param("number_of_days", t),
        ],
      );
    }
    function d(e) {
      return o("AdsInsightsAttributionWindows").isDefault(e)
        ? s._(/*BTDS*/ "Multiple")
        : S(e);
    }
    function m(e) {
      if (o("AdsInsightsAttributionWindows").isDefault(e))
        return s._(/*BTDS*/ "Default");
      var t = o("AdsInsightsAttributionWindows").getDays(e);
      return s._(/*BTDS*/ "{number_of_days}-day", [
        s._param("number_of_days", t),
      ]);
    }
    function p(e) {
      return o("AdsInsightsAttributionWindows").isClick(e) ||
        o("AdsInsightsAttributionWindows").isAllClick(e) ||
        o("AdsInsightsAttributionWindows").isFirstClick(e)
        ? "click"
        : o("AdsInsightsAttributionWindows").isAttention(e)
          ? "attention"
          : o("AdsInsightsAttributionWindows").isView(e) ||
              o("AdsInsightsAttributionWindows").isAllView(e) ||
              o("AdsInsightsAttributionWindows").isFirstView(e)
            ? "view"
            : o("AdsInsightsAttributionWindows").isEVC(e)
              ? "engaged-view"
              : null;
    }
    function _(e) {
      if (o("AdsInsightsAttributionWindows").isDefault(e))
        return s._(/*BTDS*/ "Default");
      if (o("AdsInsightsAttributionWindows").isIncrementality(e))
        return s._(/*BTDS*/ "Incremental attribution");
      if (o("AdsInsightsAttributionWindows").isPassback(e))
        return s._(/*BTDS*/ "Custom attribution");
      if (e === "dda") return o("AdsDDAStrings").DATA_DRIVEN_ATTRIBUTION_LABEL;
      if (
        o("AdsInsightsAttributionWindows").isEVC(e) &&
        o("AdEvcRolloutUtils").isEligibleForCTRedef()
      )
        return s._(/*BTDS*/ "1-day engagement");
      var t = p(e);
      return t == null
        ? s._(/*BTDS*/ "{number_of_days}", [s._param("number_of_days", v(e))])
        : s._(
            /*BTDS*/ '_j{"attention":"{number_of_days} attention","click":"{number_of_days} click","view":"{number_of_days} view","engaged-view":"{number_of_days} engaged-view"}',
            [
              s._enum(t, {
                attention: "attention",
                click: "click",
                view: "view",
                "engaged-view": "engaged-view",
              }),
              s._param(
                "number_of_days",
                v(
                  o("AdsInsightsAttributionWindows").isFirstConversion(e)
                    ? o(
                        "AdsReportBuilderCompareAttributionWindowUtils",
                      ).convertFirstAndAllConversionToPlainConversion(e)
                    : e,
                ),
              ),
            ],
          );
    }
    function f(e, t) {
      if (
        r("isFalsey")(e) ||
        o("AdsInsightsAttributionWindows").isSKAN(e) ||
        o("AdsInsightsAttributionWindows").isIncrementality(e) ||
        o("AdsInsightsAttributionWindows").isPassback(e)
      )
        return null;
      if (e === "inline") return s._(/*BTDS*/ "On ad");
      if (e === "dda")
        return o("AdsDDAStrings").DATA_DRIVEN_ATTRIBUTION_WINDOW_TYPE_LABEL;
      if (t != null && t.length) {
        if (e !== "default") return v(e);
        var n = t.map(function (e) {
          return S(e);
        });
        return s._(/*BTDS*/ "{attributionWindowsList}", [
          s._param("attributionWindowsList", r("intlList")(n)),
        ]);
      } else return e !== "default" ? R(e) : null;
    }
    function g(e) {
      return e === "skan_view" ? "View" : e === "skan_click" ? "Click" : null;
    }
    function h(e) {
      switch (e) {
        case "skan_view":
          return "View, Postback 1";
        case "skan_click":
          return "Click, Postback 1";
        case "skan_view_second_postback":
          return "View, Postback 2";
        case "skan_click_second_postback":
          return "Click, Postback 2";
        case "skan_view_third_postback":
          return "View, Postback 3";
        case "skan_click_third_postback":
          return "Click, Postback 3";
      }
      return null;
    }
    function y(e) {
      return s._(/*BTDS*/ "{SKAN label} from SKAdNetwork", [
        s._param("SKAN label", g(e)),
      ]);
    }
    function C(e, t) {
      return s._(/*BTDS*/ "{View or Click}, SKAdNetwork", [
        s._param("View or Click", t === !0 ? h(e) : g(e)),
      ]);
    }
    var b = r("memoizeWithArgsWeak")(C),
      v = (e = r("memoizeStringOnly"))(m),
      S = e(_),
      R = e(u),
      L = e(c),
      E = e(d);
    ((l.getAttributionWindowType = p),
      (l.getAttributionWindowComboLabel = f),
      (l.getSKANLabelWithGK = y),
      (l.getSKANHeaderLabel = b),
      (l.getDayLabel = v),
      (l.getDayLabelWithAttributionType = S),
      (l.getDaysLabel = R),
      (l.getLabel = L),
      (l.getLabelCAW = E));
  },
  226,
);
