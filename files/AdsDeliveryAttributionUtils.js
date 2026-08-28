__d(
  "AdsDeliveryAttributionUtils",
  ["AccountAttributionEvent", "AdsAttributionSpecSystemDefault"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case 1:
          return 1;
        case 7:
          return 7;
        case 14:
          return 14;
        case 28:
          return 28;
        default:
          return null;
      }
    }
    function s(e) {
      var t = c(e);
      return t != null;
    }
    function u(t) {
      var n = t == null ? void 0 : t.attribution_spec;
      if (n) {
        var o = n.find(function (e) {
          return e.event_type === r("AccountAttributionEvent").CLICK_THROUGH;
        });
        return e(o == null ? void 0 : o.window_days);
      }
      return null;
    }
    function c(t) {
      var n = t == null ? void 0 : t.attribution_spec;
      if (n) {
        var o = n.find(function (e) {
          return e.event_type === r("AccountAttributionEvent").VIEW_THROUGH;
        });
        return e(o == null ? void 0 : o.window_days);
      }
      return null;
    }
    function d(e, t, n) {
      var o = e == null ? void 0 : e.attribution_spec;
      if (!t.getShouldDefaultToAttributionSpec(n) || o == null) return null;
      var a = m(e),
        i = a.find(function (e) {
          return e.event_type === r("AccountAttributionEvent").CLICK_THROUGH;
        }),
        l = a.find(function (e) {
          return e.event_type === r("AccountAttributionEvent").VIEW_THROUGH;
        });
      return {
        ctAttrWindowDays: i ? i.window_days : 7,
        vtAttrWindowDays: l ? l.window_days : 0,
      };
    }
    function m(e) {
      var t = [
        {
          event_type: r("AccountAttributionEvent").CLICK_THROUGH,
          window_days: 7,
        },
      ];
      if (
        (t.push({
          event_type: r("AccountAttributionEvent").VIEW_THROUGH,
          window_days: 1,
        }),
        e == null)
      )
        return t;
      var n = e.attribution_spec,
        o = e.is_attribution_spec_system_default;
      if (n == null || n.length === 0) return t;
      var a = n.find(function (e) {
          return e.event_type === r("AccountAttributionEvent").CLICK_THROUGH;
        }),
        i = n.find(function (e) {
          return e.event_type === r("AccountAttributionEvent").VIEW_THROUGH;
        });
      return a &&
        i &&
        a.window_days ===
          r("AdsAttributionSpecSystemDefault").L4_ATT_DEFAULT_CT_WINDOW &&
        i.window_days ===
          r("AdsAttributionSpecSystemDefault").L4_ATT_DEFAULT_VT_WINDOW &&
        o !== !1
        ? t
        : p([1, 7], [1], n);
    }
    function p(e, t, n) {
      var o = n.find(function (e) {
          return e.event_type === r("AccountAttributionEvent").CLICK_THROUGH;
        }),
        a = n.find(function (e) {
          return e.event_type === r("AccountAttributionEvent").VIEW_THROUGH;
        }),
        i = [];
      if (o) {
        var l = _(o.window_days, e);
        l !== null &&
          i.push({
            event_type: r("AccountAttributionEvent").CLICK_THROUGH,
            window_days: l,
          });
      }
      if (a) {
        var s = _(a.window_days, t);
        s !== null &&
          i.push({
            event_type: r("AccountAttributionEvent").VIEW_THROUGH,
            window_days: s,
          });
      }
      return i;
    }
    function _(e, t) {
      for (var n = -1, r = 0, o = 0; o < t.length; ++o) {
        var a = Math.abs(t[o] - e);
        (a < n || n === -1) && ((n = a), (r = t[o]));
      }
      return r;
    }
    ((l.numberToConvWindowTypeTransformer = e),
      (l.getAccountHasViewAttribution = s),
      (l.getAccountClickAttributionSpec = u),
      (l.getAccountViewAttributionSpec = c),
      (l.getDefaultAttributionSpecForCampaignFromAccount = d),
      (l.getDefaultCampaignAttributionSpec = m),
      (l.findNearestWindowDays = _));
  },
  98,
);
