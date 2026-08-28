__d(
  "AdsInsightsAttributionWindows",
  [
    "AccountAttributionEvent",
    "AdsInsightsAttributionWindow",
    "AdsInsightsAttributionWindowConfig",
    "adsMemoizeWithArgs",
    "getObjectValues",
    "justknobx",
    "memoize",
    "memoizeStringOnly",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("memoize")(function () {
        return r("getObjectValues")(r("AdsInsightsAttributionWindow"));
      });
    function d() {
      return ["1d_attention", "7d_attention", "28d_attention"];
    }
    function m() {
      return ["28d_click", "1d_view"];
    }
    function p() {
      return r("AdsInsightsAttributionWindowConfig").clickThroughWindows;
    }
    function _(e) {
      return r("nullthrows")(f(e));
    }
    function f(e) {
      return x()[e];
    }
    function g() {
      return ["dda"];
    }
    function h() {
      return r("AdsInsightsAttributionWindowConfig").defaultWindow;
    }
    function y() {
      return ["1d_ev", "1d_ev_all_conversions", "1d_ev_first_conversion"];
    }
    function C() {
      return r("AdsInsightsAttributionWindowConfig").inlineWindow;
    }
    function b() {
      return [
        "skan_click",
        "skan_click_second_postback",
        "skan_click_third_postback",
        "skan_view",
        "skan_view_second_postback",
        "skan_view_third_postback",
      ];
    }
    function v() {
      return [
        "incrementality",
        "incrementality_all_conversions",
        "incrementality_first_conversion",
      ];
    }
    function S() {
      return [
        "1d_click",
        "7d_click",
        "28d_click",
        "1d_view",
        "1d_ev",
        "1d_click_all_conversions",
        "7d_click_all_conversions",
        "28d_click_all_conversions",
        "1d_view_all_conversions",
        "1d_ev_all_conversions",
        "incrementality_all_conversions",
      ];
    }
    function R() {
      return [
        "1d_click_first_conversion",
        "7d_click_first_conversion",
        "28d_click_first_conversion",
        "1d_view_first_conversion",
        "1d_ev_first_conversion",
        "incrementality_first_conversion",
      ];
    }
    function L() {
      return [
        "1d_click_all_conversions",
        "7d_click_all_conversions",
        "28d_click_all_conversions",
      ];
    }
    function E() {
      return [
        "1d_click_first_conversion",
        "7d_click_first_conversion",
        "28d_click_first_conversion",
      ];
    }
    function k() {
      var e = [r("AdsInsightsAttributionWindowConfig").defaultWindow];
      return e.sort();
    }
    function I() {
      return r("AdsInsightsAttributionWindowConfig").viewThroughWindows;
    }
    function T() {
      return ["1d_view_all_conversions"];
    }
    function D() {
      return ["1d_view_first_conversion"];
    }
    function x() {
      return r("AdsInsightsAttributionWindowConfig").windowValues;
    }
    function $(e) {
      switch (e.event_type) {
        case r("AccountAttributionEvent").CLICK_THROUGH:
          switch (e.window_days) {
            case 1:
              return "1d_click";
            case 7:
              return "7d_click";
            case 28:
              return "28d_click";
            default:
              return null;
          }
        case r("AccountAttributionEvent").VIEW_THROUGH:
          switch (e.window_days) {
            case 1:
              return "1d_view";
            case 7:
              return "7d_view";
            case 28:
              return "28d_view";
            default:
              return null;
          }
        case r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW:
          switch (e.window_days) {
            case 1:
              return "1d_ev";
            default:
              return null;
          }
        default:
          return null;
      }
    }
    var P =
      ((e = {}),
      (e["1d_click"] = {
        event_type: (s = r("AccountAttributionEvent")).CLICK_THROUGH,
        window_days: 1,
      }),
      (e["7d_click"] = { event_type: s.CLICK_THROUGH, window_days: 7 }),
      (e["28d_click"] = { event_type: s.CLICK_THROUGH, window_days: 28 }),
      (e["1d_view"] = { event_type: s.VIEW_THROUGH, window_days: 1 }),
      (e["7d_view"] = { event_type: s.VIEW_THROUGH, window_days: 7 }),
      (e["28d_view"] = { event_type: s.VIEW_THROUGH, window_days: 28 }),
      (e["1d_ev"] = { event_type: s.ENGAGED_VIDEO_VIEW, window_days: 1 }),
      e);
    function N(e) {
      var t;
      return (t = P[e]) != null ? t : null;
    }
    function M(e) {
      var t = [],
        n = e == null ? void 0 : e.attribution_spec;
      return (
        n != null &&
          n.forEach(function (e) {
            var n = $(e);
            n && t.push(n);
          }),
        t.length === 0 ? m() : t
      );
    }
    var w = r("adsMemoizeWithArgs")(
      function (e) {
        return M(e);
      },
      function (e) {
        var t;
        return (t = e == null ? void 0 : e.account_id) != null ? t : "";
      },
      i.id,
    );
    function A() {
      return ["28d_click", "1d_view"];
    }
    var F = (u = r("memoizeStringOnly"))(function (e) {
        return d()
          .map(function (e) {
            return e;
          })
          .includes(e);
      }),
      O = u(function (e) {
        return p()
          .map(function (e) {
            return e;
          })
          .includes(e);
      }),
      B = u(function (e) {
        return L()
          .map(function (e) {
            return e;
          })
          .includes(e);
      }),
      W = u(function (e) {
        return E()
          .map(function (e) {
            return e;
          })
          .includes(e);
      }),
      q = u(function (e) {
        return e === r("AdsInsightsAttributionWindowConfig").defaultWindow;
      }),
      U = u(function (e) {
        return y()
          .map(function (e) {
            return e;
          })
          .includes(e);
      }),
      V = u(function (e) {
        return S()
          .map(function (e) {
            return e;
          })
          .includes(e);
      }),
      H = u(function (e) {
        return R()
          .map(function (e) {
            return e;
          })
          .includes(e);
      }),
      G = u(function (e) {
        return c().indexOf(e) !== -1;
      }),
      z = u(function (e) {
        return I()
          .map(function (e) {
            return e;
          })
          .includes(e);
      }),
      j = u(function (e) {
        return T()
          .map(function (e) {
            return e;
          })
          .includes(e);
      }),
      K = u(function (e) {
        return D()
          .map(function (e) {
            return e;
          })
          .includes(e);
      }),
      Q = u(function (e) {
        return b()
          .map(function (e) {
            return e;
          })
          .includes(e);
      }),
      X = u(function (e) {
        return v()
          .map(function (e) {
            return e;
          })
          .includes(e);
      });
    function Y() {
      return r("justknobx")._("5492") ? ["custom"] : ["28d_passback"];
    }
    var J = u(function (e) {
        return ["custom", "28d_passback"].includes(e);
      }),
      Z = u(function (e) {
        return e !== "dda";
      }),
      ee = r("adsMemoizeWithArgs")(
        function (e) {
          var t = [];
          for (var n of e) {
            var r = $(n);
            r && t.push(r);
          }
          return t;
        },
        function (e) {
          return e.join(",");
        },
        i.id,
      ),
      te = [
        "default",
        "1d_ev",
        "1d_ev_all_conversions",
        "1d_ev_first_conversion",
        "1d_view",
        "1d_view_all_conversions",
        "1d_view_first_conversion",
        "1d_click",
        "1d_click_all_conversions",
        "1d_click_first_conversion",
        "7d_click",
        "7d_click_all_conversions",
        "7d_click_first_conversion",
        "28d_click",
        "28d_click_all_conversions",
        "28d_click_first_conversion",
        "skan_view",
        "skan_view_second_postback",
        "skan_view_third_postback",
        "skan_click",
        "skan_click_second_postback",
        "skan_click_third_postback",
        "incrementality",
        "incrementality_all_conversions",
        "incrementality_first_conversion",
        "28d_passback",
        "custom",
      ];
    ((l.getIDs = c),
      (l.getAttentionIDs = d),
      (l.getFacebookDefaultIDs = m),
      (l.getClickIDs = p),
      (l.getDays = _),
      (l.getDaysOrNull = f),
      (l.getDataDrivenIDs = g),
      (l.getDefault = h),
      (l.getEVC = y),
      (l.getInline = C),
      (l.getSkanIDs = b),
      (l.getIncrementalityIDs = v),
      (l.getAllConversionIDs = S),
      (l.getFirstConversionIDs = R),
      (l.getAllConversionClickIDs = L),
      (l.getFirstConversionClickIDs = E),
      (l.getDefaultWindows = k),
      (l.getViewIDs = I),
      (l.getAllViewIDs = T),
      (l.getFirstViewIDs = D),
      (l.getWindowValues = x),
      (l.getWindowfromAttributionSpec = $),
      (l.getAttributionSpecFromWindow = N),
      (l.getDefaultWindowfromAccount = M),
      (l.getDefaultWindowfromAccountCached = w),
      (l.getSystemDefaultWindowCombination = A),
      (l.isAttention = F),
      (l.isClick = O),
      (l.isAllClick = B),
      (l.isFirstClick = W),
      (l.isDefault = q),
      (l.isEVC = U),
      (l.isAllConversion = V),
      (l.isFirstConversion = H),
      (l.isValid = G),
      (l.isView = z),
      (l.isAllView = j),
      (l.isFirstView = K),
      (l.isSKAN = Q),
      (l.isIncrementality = X),
      (l.getPassbackIDs = Y),
      (l.isPassback = J),
      (l.isSupportedForExport = Z),
      (l.getDefaultAttributionWindows = ee),
      (l.SUPPORTED_ATTRIBUTION_WINDOWS = te));
  },
  98,
);
