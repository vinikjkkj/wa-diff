__d(
  "AdsODAXConversionEventsUtils",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsODAXObjectiveStrings",
    "AdsODAXUtils",
    "AdsOffsiteCLOUtil",
    "AppCustomEventType",
    "GeoBaseText.react",
    "SignalsWebsiteOptimizableConversionBaseTypeEnum",
    "geoMargin",
    "immutable",
    "intlList",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = f || (f = o("react")),
      h = r("immutable").Map(
        ((e = {}),
        (e[r("AppCustomEventType").FB_MOBILE_PURCHASE] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_INITIATED_CHECKOUT] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_ADD_PAYMENT_INFO] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_ADD_TO_CART] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_COMPLETE_REGISTRATION] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_LEADS,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_DONATE] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_AD_CLICK] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_AD_IMPRESSION] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_SPENT_CREDITS] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_SPENT_CREDITS] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_START_TRIAL] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_LEADS,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_SUBSCRIBE] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_LEADS,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_CONTENT_VIEW] = [
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_LEADS,
        ].filter(Boolean)),
        (e[r("AppCustomEventType").FB_MOBILE_TUTORIAL_COMPLETION] = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_CONTACT] = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_FIND_LOCATION] = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_SCHEDULE] = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_SUBMIT_APPLICATION] = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_LEVEL_ACHIEVED] = [
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_ACTIVATE_APP] = [
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_ADD_TO_WISHLIST] = [
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_SALES,
        ].filter(Boolean)),
        (e[r("AppCustomEventType").FB_MOBILE_CUSTOMIZE_PRODUCT] = [
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_RATE] = [
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (e[r("AppCustomEventType").FB_MOBILE_SEARCH] = [
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_LEADS,
        ].filter(Boolean)),
        (e[r("AppCustomEventType").FB_MOBILE_ACHIEVEMENT_UNLOCKED] = [
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        e),
      ),
      y = r("immutable").Map(
        ((u = {}),
        (u[r("AppCustomEventType").FB_MOBILE_PURCHASE] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_INITIATED_CHECKOUT] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_ADD_PAYMENT_INFO] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_ADD_TO_CART] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_COMPLETE_REGISTRATION] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_DONATE] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_AD_CLICK] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_AD_IMPRESSION] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_SPENT_CREDITS] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_SPENT_CREDITS] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_START_TRIAL] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_SUBSCRIBE] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_CONTENT_VIEW] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_TUTORIAL_COMPLETION] =
          r("AdsAPIObjectives").OUTCOME_LEADS),
        (u[r("AppCustomEventType").FB_MOBILE_CONTACT] =
          r("AdsAPIObjectives").OUTCOME_LEADS),
        (u[r("AppCustomEventType").FB_MOBILE_FIND_LOCATION] =
          r("AdsAPIObjectives").OUTCOME_LEADS),
        (u[r("AppCustomEventType").FB_MOBILE_SCHEDULE] =
          r("AdsAPIObjectives").OUTCOME_LEADS),
        (u[r("AppCustomEventType").FB_MOBILE_SUBMIT_APPLICATION] =
          r("AdsAPIObjectives").OUTCOME_LEADS),
        (u[r("AppCustomEventType").FB_MOBILE_LEVEL_ACHIEVED] =
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT),
        (u[r("AppCustomEventType").FB_MOBILE_ACTIVATE_APP] =
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT),
        (u[r("AppCustomEventType").FB_MOBILE_ADD_TO_WISHLIST] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_CUSTOMIZE_PRODUCT] =
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT),
        (u[r("AppCustomEventType").FB_MOBILE_RATE] =
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT),
        (u[r("AppCustomEventType").FB_MOBILE_SEARCH] =
          r("AdsAPIObjectives").OUTCOME_SALES),
        (u[r("AppCustomEventType").FB_MOBILE_ACHIEVEMENT_UNLOCKED] =
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT),
        u),
      ),
      C = r("immutable").Map(
        ((c = {}),
        (c[r("AdsAPIObjectives").OUTCOME_SALES] = [
          r("AppCustomEventType").FB_MOBILE_AD_CLICK,
          r("AppCustomEventType").FB_MOBILE_AD_IMPRESSION,
          r("AppCustomEventType").FB_MOBILE_ADD_PAYMENT_INFO,
          r("AppCustomEventType").FB_MOBILE_ADD_TO_CART,
          r("AppCustomEventType").FB_MOBILE_ADD_TO_WISHLIST,
          r("AppCustomEventType").FB_MOBILE_COMPLETE_REGISTRATION,
          r("AppCustomEventType").FB_MOBILE_CONTENT_VIEW,
          r("AppCustomEventType").FB_MOBILE_DONATE,
          r("AppCustomEventType").FB_MOBILE_INITIATED_CHECKOUT,
          r("AppCustomEventType").FB_MOBILE_PURCHASE,
          r("AppCustomEventType").FB_MOBILE_SPENT_CREDITS,
          r("AppCustomEventType").FB_MOBILE_START_TRIAL,
          r("AppCustomEventType").FB_MOBILE_SUBSCRIBE,
          r("AppCustomEventType").FB_MOBILE_SEARCH,
        ].filter(Boolean)),
        (c[r("AdsAPIObjectives").OUTCOME_LEADS] = [
          r("AppCustomEventType").FB_MOBILE_COMPLETE_REGISTRATION,
          r("AppCustomEventType").FB_MOBILE_CONTACT,
          r("AppCustomEventType").FB_MOBILE_CONTENT_VIEW,
          r("AppCustomEventType").FB_MOBILE_FIND_LOCATION,
          r("AppCustomEventType").FB_MOBILE_SCHEDULE,
          r("AppCustomEventType").FB_MOBILE_SEARCH,
          r("AppCustomEventType").FB_MOBILE_START_TRIAL,
          r("AppCustomEventType").FB_MOBILE_SUBMIT_APPLICATION,
          r("AppCustomEventType").FB_MOBILE_SUBSCRIBE,
          r("AppCustomEventType").FB_MOBILE_TUTORIAL_COMPLETION,
        ].filter(Boolean)),
        (c[r("AdsAPIObjectives").OUTCOME_ENGAGEMENT] = [
          r("AppCustomEventType").FB_MOBILE_ACHIEVEMENT_UNLOCKED,
          r("AppCustomEventType").FB_MOBILE_ACTIVATE_APP,
          r("AppCustomEventType").FB_MOBILE_AD_CLICK,
          r("AppCustomEventType").FB_MOBILE_AD_IMPRESSION,
          r("AppCustomEventType").FB_MOBILE_ADD_TO_WISHLIST,
          r("AppCustomEventType").FB_MOBILE_CONTACT,
          r("AppCustomEventType").FB_MOBILE_CONTENT_VIEW,
          r("AppCustomEventType").FB_MOBILE_CUSTOMIZE_PRODUCT,
          r("AppCustomEventType").FB_MOBILE_DONATE,
          r("AppCustomEventType").FB_MOBILE_FIND_LOCATION,
          r("AppCustomEventType").FB_MOBILE_LEVEL_ACHIEVED,
          r("AppCustomEventType").FB_MOBILE_RATE,
          r("AppCustomEventType").FB_MOBILE_SCHEDULE,
          r("AppCustomEventType").FB_MOBILE_SEARCH,
          r("AppCustomEventType").FB_MOBILE_SPENT_CREDITS,
          r("AppCustomEventType").FB_MOBILE_START_TRIAL,
          r("AppCustomEventType").FB_MOBILE_SUBMIT_APPLICATION,
          r("AppCustomEventType").FB_MOBILE_SUBSCRIBE,
          r("AppCustomEventType").FB_MOBILE_TUTORIAL_COMPLETION,
        ]),
        c),
      ),
      b = r("immutable").Map(
        ((d = {}),
        (d[r("AdsAPIObjectives").OUTCOME_LEADS] = [
          "COMPLETE_REGISTRATION",
          "CONTACT",
          "CONTENT_VIEW",
          "FIND_LOCATION",
          "LEAD",
          "SCHEDULE",
          "SEARCH",
          "START_TRIAL",
          "SUBMIT_APPLICATION",
          "SUBSCRIBE",
          "OTHER",
        ].filter(Boolean)),
        (d[r("AdsAPIObjectives").OUTCOME_SALES] = [
          "ADD_PAYMENT_INFO",
          "ADD_TO_CART",
          "ADD_TO_WISHLIST",
          "COMPLETE_REGISTRATION",
          "CONTENT_VIEW",
          "DONATE",
          "INITIATED_CHECKOUT",
          "PURCHASE",
          "SEARCH",
          "START_TRIAL",
          "SUBSCRIBE",
          "OTHER",
        ].filter(Boolean)),
        (d[r("AdsAPIObjectives").OUTCOME_ENGAGEMENT] = [
          "ADD_TO_WISHLIST",
          "CONTACT",
          "CONTENT_VIEW",
          "CUSTOMIZE_PRODUCT",
          "DONATE",
          "FIND_LOCATION",
          "SCHEDULE",
          "SEARCH",
          "START_TRIAL",
          "SUBMIT_APPLICATION",
          "SUBSCRIBE",
          "OTHER",
        ]),
        d),
      ),
      v = [].concat(
        (m = b.get(r("AdsAPIObjectives").OUTCOME_ENGAGEMENT)) != null ? m : [],
        [
          "ADD_PAYMENT_INFO",
          "ADD_TO_CART",
          "COMPLETE_REGISTRATION",
          "INITIATED_CHECKOUT",
          "PURCHASE",
        ],
      ),
      S = r("immutable").Map(
        ((p = {}),
        (p.OTHER = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_SALES,
        ]),
        (p.LEAD = [r("AdsAPIObjectives").OUTCOME_LEADS]),
        (p.CONTACT = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (p.COMPLETE_REGISTRATION = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_SALES,
        ]),
        (p.FIND_LOCATION = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (p.START_TRIAL = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_SALES,
        ]),
        (p.SUBSCRIBE = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_SALES,
        ]),
        (p.SUBMIT_APPLICATION = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (p.SCHEDULE = [
          r("AdsAPIObjectives").OUTCOME_LEADS,
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ]),
        (p.PURCHASE = [r("AdsAPIObjectives").OUTCOME_SALES]),
        (p.INITIATED_CHECKOUT = [r("AdsAPIObjectives").OUTCOME_SALES]),
        (p.ADD_TO_CART = [r("AdsAPIObjectives").OUTCOME_SALES]),
        (p.DONATE = [
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_SALES,
        ]),
        (p.ADD_PAYMENT_INFO = [r("AdsAPIObjectives").OUTCOME_SALES]),
        (p.CONTENT_VIEW = [
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_LEADS,
        ].filter(Boolean)),
        (p.ADD_TO_WISHLIST = [
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_SALES,
        ].filter(Boolean)),
        (p.CUSTOMIZE_PRODUCT = [r("AdsAPIObjectives").OUTCOME_ENGAGEMENT]),
        (p.SEARCH = [
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
          r("AdsAPIObjectives").OUTCOME_SALES,
          r("AdsAPIObjectives").OUTCOME_LEADS,
        ].filter(Boolean)),
        p),
      ),
      R = r("immutable").Map(
        ((_ = {}),
        (_.OTHER = r("AdsAPIObjectives").OUTCOME_SALES),
        (_.LEAD = r("AdsAPIObjectives").OUTCOME_LEADS),
        (_.CONTACT = r("AdsAPIObjectives").OUTCOME_LEADS),
        (_.COMPLETE_REGISTRATION = r("AdsAPIObjectives").OUTCOME_SALES),
        (_.FIND_LOCATION = r("AdsAPIObjectives").OUTCOME_LEADS),
        (_.START_TRIAL = r("AdsAPIObjectives").OUTCOME_SALES),
        (_.SUBSCRIBE = r("AdsAPIObjectives").OUTCOME_SALES),
        (_.SUBMIT_APPLICATION = r("AdsAPIObjectives").OUTCOME_LEADS),
        (_.SCHEDULE = r("AdsAPIObjectives").OUTCOME_LEADS),
        (_.PURCHASE = r("AdsAPIObjectives").OUTCOME_SALES),
        (_.INITIATED_CHECKOUT = r("AdsAPIObjectives").OUTCOME_SALES),
        (_.ADD_TO_CART = r("AdsAPIObjectives").OUTCOME_SALES),
        (_.DONATE = r("AdsAPIObjectives").OUTCOME_SALES),
        (_.ADD_PAYMENT_INFO = r("AdsAPIObjectives").OUTCOME_SALES),
        (_.CONTENT_VIEW = r("AdsAPIObjectives").OUTCOME_SALES),
        (_.ADD_TO_WISHLIST = r("AdsAPIObjectives").OUTCOME_SALES),
        (_.CUSTOMIZE_PRODUCT = r("AdsAPIObjectives").OUTCOME_ENGAGEMENT),
        (_.SEARCH = r("AdsAPIObjectives").OUTCOME_SALES),
        _),
      );
    function L(e, t) {
      var n;
      return e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        t === r("AdCampaignDestination").INSTAGRAM_LIVE
        ? v
        : (n = b.get(e)) != null
          ? n
          : [];
    }
    function E(e, t, n) {
      if (
        t == null ||
        !o("AdsODAXUtils").shouldShowOutcomeConversionChannelsSection(t)
      )
        return !0;
      var r = L(t, n);
      return e != null && r.includes(e);
    }
    function k(e, t) {
      var n;
      if (
        t == null ||
        !o("AdsODAXUtils").shouldShowOutcomeConversionChannelsSection(t)
      )
        return e;
      var r = (n = C.get(t)) != null ? n : [];
      return e.map(function (e) {
        return babelHelpers.extends({}, e, {
          shouldDisable: !r.includes(e.name),
        });
      });
    }
    function I(e) {
      var t = h.get(e);
      return t == null
        ? null
        : s._(
            /*BTDS*/ "This app event is only available for {objective list} objective.",
            [s._param("objective list", T(t))],
          );
    }
    function T(e) {
      return r("intlList")(
        e.map(function (e) {
          return String(
            o("AdsODAXObjectiveStrings").getObjectiveNameLowerCase(e),
          );
        }),
        r("intlList").CONJUNCTIONS.AND,
      );
    }
    function D(e, t, n, a, i, l) {
      (n === void 0 && (n = !1), a === void 0 && (a = !1));
      var u = S.get(e.conversionCategory),
        c = e.conversionType,
        d = t != null && L(t, l).includes(e.conversionCategory);
      if (u != null && (t == null || !u.includes(t)) && !a && !d)
        return s._(
          /*BTDS*/ "This conversion event is only available with {objective list} objective.",
          [s._param("objective list", T(u))],
        );
      if (
        n &&
        o("AdsOffsiteCLOUtil").disabledConversionEvents.includes(e.eventName) &&
        o("AdsOffsiteCLOUtil").canSeeOffsiteCLODisabledConversionEventsMessage()
      )
        return o("AdsOffsiteCLOUtil").canSeeOffsiteCLO()
          ? s._(
              /*BTDS*/ "This event is not yet available with Maximize Number of Qualified Leads performance goal.",
            )
          : s._(
              /*BTDS*/ "This event is not yet available with Find quality leads.",
            );
      if (n && i != null && o("AdsOffsiteCLOUtil").canSeeOffsiteCLO()) {
        var m = i.find(function (t) {
          return t.pixel_id === e.pixelID && t.event_name === e.eventName;
        });
        if (m == null || m.event_cvr === 0)
          return s._(
            /*BTDS*/ "This event isn\u2019t available because we haven\u2019t received enough conversion events that happen after a Lead in the last 28 days. If you track lead outcomes in your CRM, connect your CRM via Conversions API in Events Manager.",
          );
      } else if (n)
        return c ===
          r("SignalsWebsiteOptimizableConversionBaseTypeEnum").FUNNEL_PAIR
          ? s._(
              /*BTDS*/ "This funnel is only available with maximize number of conversions and standard attribution.",
            )
          : s._(
              /*BTDS*/ "You can't use this conversion event with your selected performance goal.",
            );
      return null;
    }
    function x(e, t, n, a, i, l) {
      if (
        (n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        t == null ||
          !o("AdsODAXUtils").shouldShowOutcomeConversionChannelsSection(t) ||
          e.conversionCategory == null)
      )
        return null;
      var s = D(e, t, n, a, i, l);
      return s == null
        ? null
        : g.jsx(r("GeoBaseText.react"), {
            color: "value",
            display: "block",
            size: "accent",
            xstyle: r("geoMargin").bottom8,
            children: s,
          });
    }
    ((x.displayName = x.name + " [from " + i.id + "]"),
      (l.APP_EVENT_TO_OUTCOMES_MAP = h),
      (l.APP_EVENT_TO_DEFAULT_OUTCOME_MAP = y),
      (l.OUTCOME_TO_APP_EVENTS_MAP = C),
      (l.OUTCOME_TO_CONVERSION_EVENTS_MAP = b),
      (l.OUTCOME_ENGAGEMENT_INSTAGRAM_LIVE_CONVERSION_EVENTS = v),
      (l.CONVERSION_EVENT_TO_OUTCOMES_MAP = S),
      (l.CONVERSION_EVENT_TO_DEFAULT_OUTCOME_MAP = R),
      (l.getSupportedConversionEventsForObjective = L),
      (l.isConversionCompatibleWithObjective = E),
      (l.getSupportedAppEvent = k),
      (l.getOutcomeAppEventAvailbilityContent = I),
      (l.getOutcomeAvailabilityContent = x));
  },
  226,
);
