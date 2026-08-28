__d(
  "AdsConversionWindowUtils",
  [
    "$InternalEnum",
    "AccountAttributionEvent",
    "AdCampaignConversionMultiEventProducts",
    "AdCampaignLJORollout",
    "AdsAccountUtils",
    "AdsCampaignConversionWindowPluginResolver",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsDeliveryAttributionUtils",
    "AdsEventsManagerSequencedConversionsCreationEligibilityUtils",
    "AdsODAXUtils",
    "AdsOptimizationUtils",
    "AdsPromotedObjectTypes",
    "AdsRBA28DAttributionWindowDeprecationUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "ONE_DAY_VIEW",
        "ONE_DAY_CLICK",
        "SEVEN_DAY_CLICK",
        "TWENTY_EIGHT_DAY_CLICK",
        "ONE_DAY_CLICK_OR_VIEW",
        "SEVEN_DAY_CLICK_OR_VIEW",
        "SEVEN_DAY_CLICK_ONE_DAY_VIEW",
        "TWENTY_EIGHT_DAY_CLICK_ONE_DAY_VIEW",
        "SKADNETWORK",
      ]),
      s = n("$InternalEnum").Mirrored([
        "NONE",
        "ONE_DAY",
        "SEVEN_DAYS",
        "FOURTEEN_DAYS",
        "TWENTY_EIGHT_DAYS",
      ]);
    function u(e) {
      return r("AdsAccountUtils").hasCapability(
        e,
        "CAN_USE_EXTEND_CONVERSION_WINDOW",
      );
    }
    function c(e, t, n, a, i) {
      var l = u(e);
      if (!l) return { ctConvWindowDays: null, vtConvWindowDays: null };
      var s =
          t != null ? o("AdsODAXUtils").maybeTranslateObjective(t, i, n) : t,
        c = r("AdsCampaignConversionWindowPluginResolver").resolve({
          objective: s,
          optimizationGoal: n,
          bidStrategy: a != null ? a : void 0,
          promotedObjectType: i,
        }),
        d = c.getDefaultClickConversionWindowForRBA(e),
        m = c.getDefaultViewConversionWindowForRBA(e),
        p = c.getDefaultEngagedVideoViewWindowForRBA(e);
      return { ctConvWindowDays: d, vtConvWindowDays: m, evcWindowDays: p };
    }
    function d(e, t, n, r, a, i, l, s, u, c) {
      var d = o("AdsODAXUtils").maybeTranslateObjective(t, r, n),
        p = o("AdsRBA28DAttributionWindowDeprecationUtils").getExperimentGroup(
          e,
        );
      return p === "vt_only"
        ? {
            ctConvWindowDays: m(e, d, n, r, a, i, l, s, u, c, t)
              .ctConvWindowDays,
          }
        : m(e, d, n, r, a, i, l, s, u, c, t);
    }
    function m(e, t, n, a, i, l, s, u, d, m, p) {
      var _ = c(e, t, n, i, a),
        f = _.ctConvWindowDays,
        g = _.vtConvWindowDays,
        h = _.evcWindowDays;
      if (f != null || g != null || h != null)
        return {
          ctConvWindowDays: f != null ? f : void 0,
          vtConvWindowDays: s === !0 ? 0 : g != null ? g : void 0,
          evcWindowDays: h != null ? h : void 0,
        };
      var y = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: t,
          promotedObjectType: a,
          destinationType: l,
        }),
        C = e != null;
      if (!C) {
        var b = o(
          "AdsDeliveryAttributionUtils",
        ).getDefaultAttributionSpecForCampaignFromAccount(e, y, n);
        if (b) {
          var v, S;
          return {
            ctConvWindowDays: (v = b.ctAttrWindowDays) != null ? v : void 0,
            vtConvWindowDays:
              s === !0 ? 0 : (S = b.vtAttrWindowDays) != null ? S : void 0,
          };
        }
      }
      var R = o(
        "AdsEventsManagerSequencedConversionsCreationEligibilityUtils",
      ).isSetupEligibleForSequencedEventCreation(p, a, n);
      if (
        (d ===
          r("AdCampaignConversionMultiEventProducts")
            .BANKING_AND_CREDIT_CARDS ||
          m === !0) &&
        R !== r("AdCampaignLJORollout").NO_ACCESS
      )
        return { ctConvWindowDays: 7, vtConvWindowDays: 0, evcWindowDays: 0 };
      var L = y.getDefaultConversionWindowLength(n, e || void 0),
        E = y.getDefaultViewConversionWindowLength(n, e || void 0, u),
        k = y.getDefaultEngagedVideoViewWindowLength(n, e || void 0, u, l);
      return {
        ctConvWindowDays: L,
        vtConvWindowDays: s === !0 ? 0 : E != null ? E : void 0,
        evcWindowDays:
          k != null &&
          (a === r("AdsPromotedObjectTypes").PIXEL ||
            a === r("AdsPromotedObjectTypes").MOBILE_APP ||
            a === r("AdsPromotedObjectTypes").PRODUCT_SET ||
            a === r("AdsPromotedObjectTypes").WEB_AND_APP)
            ? k
            : void 0,
      };
    }
    function p(e, t) {
      var n =
          t != null
            ? t
            : o("AdsOptimizationUtils").getDefaultAttributionWindowDays(),
        a = e.attribution_spec;
      return r("AdsCampaignRecordAccessors").attribution_spec.set(
        g(a ? a.toJS() : [], r("AccountAttributionEvent").CLICK_THROUGH, n),
        e,
      );
    }
    function _(e, t) {
      var n = e.attribution_spec;
      return t != null
        ? r("AdsCampaignRecordAccessors").attribution_spec.set(
            g(n ? n.toJS() : [], r("AccountAttributionEvent").VIEW_THROUGH, t),
            e,
          )
        : n != null && h(n.toJS())
          ? r("AdsCampaignRecordAccessors").attribution_spec.set(
              g(n.toJS(), r("AccountAttributionEvent").VIEW_THROUGH, 0),
              e,
            )
          : e;
    }
    function f(e, t) {
      var n = e.attribution_spec;
      return t != null
        ? r("AdsCampaignRecordAccessors").attribution_spec.set(
            g(
              n ? n.toJS() : [],
              r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW,
              t,
            ),
            e,
          )
        : n != null && h(n.toJS())
          ? r("AdsCampaignRecordAccessors").attribution_spec.set(
              g(n.toJS(), r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW, 0),
              e,
            )
          : e;
    }
    function g(e, t, n) {
      switch (t) {
        case r("AccountAttributionEvent").CLICK_THROUGH:
          return r("immutable").fromJS(y(e, n));
        case r("AccountAttributionEvent").VIEW_THROUGH:
          return r("immutable").fromJS(C(e, n));
        case r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW:
          return r("immutable").fromJS(b(e, n));
        default:
          return r("immutable").fromJS();
      }
    }
    function h(e) {
      var t = e.filter(function (e) {
        return e.event_type === r("AccountAttributionEvent").VIEW_THROUGH;
      });
      return t.length > 0 ? t[0].window_days : null;
    }
    function y(e, t) {
      var n = {
        event_type: r("AccountAttributionEvent").CLICK_THROUGH,
        window_days: t,
      };
      return e
        .filter(function (e) {
          return e.event_type !== r("AccountAttributionEvent").CLICK_THROUGH;
        })
        .concat([n]);
    }
    function C(e, t) {
      if (t == null)
        return e.filter(function (e) {
          return e.event_type !== r("AccountAttributionEvent").VIEW_THROUGH;
        });
      var n = {
        event_type: r("AccountAttributionEvent").VIEW_THROUGH,
        window_days: t,
      };
      return e
        .filter(function (e) {
          return e.event_type !== r("AccountAttributionEvent").VIEW_THROUGH;
        })
        .concat([n]);
    }
    function b(e, t) {
      if (t == null)
        return e.filter(function (e) {
          return (
            e.event_type !== r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW
          );
        });
      var n = {
        event_type: r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW,
        window_days: t,
      };
      return e
        .filter(function (e) {
          return (
            e.event_type !== r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW
          );
        })
        .concat([n]);
    }
    ((l.DropdownOptionType = e),
      (l.AttributionWindowDropdownOptionType = s),
      (l.canUseRBAPhase1 = u),
      (l.getDefaultConversionWindowExtended = c),
      (l.getDefaultConversionWindowMaybeExtended = d),
      (l.getDefaultConversionWindowMaybeExtendedPreExperiment = m),
      (l.setDefaultClickConversionWindow = p),
      (l.setDefaultViewConversionWindow = _),
      (l.setDefaultEngagedViewConversionWindow = f),
      (l.updateSingleAttrWindow = g),
      (l.getViewAttrWindowFromAttrSpec = h),
      (l.updateClickThroughAttributionWindow = y),
      (l.updateViewThroughAttributionWindow = C),
      (l.updateEngagedViewThroughAttributionWindow = b));
  },
  98,
);
