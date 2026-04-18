__d(
  "LWICometMessagingAppsSectionConstants",
  [
    "errorCode",
    "LWICometUnifiedCreationEligibilityChecker",
    "LWICometWhatsAppPageExperiments",
    "qex",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["MESSAGE_PAGE", "INSTAGRAM_MESSAGE", "WHATSAPP_MESSAGE"],
      u = "www.instagram.com",
      c = "https://fb.com/messenger_doc/",
      d = "https://api.whatsapp.com/send";
    function m(t) {
      return t != null && e.includes(t);
    }
    var p = {
        type: "MESSAGE_PAGE",
        value: { app_destination: "MESSENGER", link: c },
      },
      _ = {
        type: "WHATSAPP_MESSAGE",
        value: { app_destination: "WHATSAPP", link: d },
      },
      f = {
        app_destination: "INSTAGRAM_DIRECT",
        link: "https://www.instagram.com",
      };
    function g(e) {
      if (e == null) return null;
      var t = new URL("instagram://direct");
      return (t.searchParams.append("userid", e), t.href);
    }
    function h(e) {
      var t = g(e);
      return t != null
        ? {
            type: "INSTAGRAM_MESSAGE",
            value: babelHelpers.extends({}, f, { app_link: t, link: u }),
          }
        : null;
    }
    function y(e) {
      return e === "1" || e === "3";
    }
    function C(e) {
      return (r("vulture")("5fq9M0O_F2QKmgrZAx6olA6dmuU="), e === "2");
    }
    function b(e, t, n) {
      return !C(e) || t === "WHATSAPP_MESSAGE"
        ? !1
        : n === !0
          ? r("qex")._("1306") === !0
          : r("qex")._("1385") === !0;
    }
    var v = ["FACEBOOK", "INSTAGRAM", "MESSENGER"],
      S = ["FACEBOOK", "INSTAGRAM", "MESSENGER", "WHATSAPP"];
    function R(e, t, n) {
      return (
        o(
          "LWICometUnifiedCreationEligibilityChecker",
        ).assetFeedSpecHasMessagingAppDestination(e, n) || t === e
      );
    }
    function L(e, t, n) {
      n === void 0 && (n = !1);
      var r = R("INSTAGRAM_MESSAGE", e, t),
        o = R("MESSAGE_PAGE", e, t),
        a = R("WHATSAPP_MESSAGE", e, t),
        i = n ? S : v,
        l = i;
      return (
        a ||
          (l = i.filter(function (e) {
            return e !== "WHATSAPP";
          })),
        r && !o && !a
          ? l.filter(function (e) {
              return e === "INSTAGRAM";
            })
          : o
            ? l
            : l.filter(function (e) {
                return e !== "MESSENGER";
              })
      );
    }
    function E(e) {
      return (
        e.filter(function (e) {
          return m(e.type);
        }).length > 1
      );
    }
    function k(e, t, n, r, a) {
      return (
        o(
          "LWICometWhatsAppPageExperiments",
        ).canUseWhatsAppCTAMessagesObjectiveLWI() &&
        e === "AUTOMATIC" &&
        a &&
        (r === "POST_ENGAGEMENT" || r === "LINK_CLICKS") &&
        (n || t === "WHATSAPP_MESSAGE")
      );
    }
    function I(e) {
      return e === "PROMOTE_LOCAL_BUSINESS";
    }
    function T(e, t) {
      var n;
      return (
        e === "INSTAGRAM_MESSAGE"
          ? (n = {
              app_destination: "INSTAGRAM_DIRECT",
              app_link: g(t),
              link: u,
            })
          : e === "MESSAGE_PAGE"
            ? (n = { app_destination: "MESSENGER", link: c })
            : e === "WHATSAPP_MESSAGE" &&
              (n = { app_destination: "WHATSAPP", link: d }),
        { type: e, value: n }
      );
    }
    function D(e) {
      var t = [];
      if (e != null && (e == null ? void 0 : e.adgroupSpecs) != null) {
        var n,
          r,
          o,
          a = Object.values(e == null ? void 0 : e.adgroupSpecs)[0],
          i = a == null || (n = a.creative) == null ? void 0 : n.call_to_action,
          l =
            (r =
              a == null ||
              (o = a.creative) == null ||
              (o = o.asset_feed_spec) == null
                ? void 0
                : o.call_to_actions) != null
              ? r
              : [i];
        t = l.map(function (e) {
          if ((e == null ? void 0 : e.type) === "MESSAGE_PAGE")
            return "MESSENGER";
          if ((e == null ? void 0 : e.type) === "WHATSAPP_MESSAGE")
            return "WHATSAPP";
          if ((e == null ? void 0 : e.type) === "INSTAGRAM_MESSAGE")
            return "INSTAGRAM_DIRECT";
        });
      }
      return t;
    }
    var x = [2923009, 2923008, 2923011, 2923010, 2923016, 2923015],
      $ = [2446596, 2446978, 2446974, 2446862].concat(x);
    ((l.INSTAGRAM_LINK = u),
      (l.MESSENGER_LINK = c),
      (l.WHATSAPP_LINK = d),
      (l.isMessagingAppCTAType = m),
      (l.ASSET_FEED_SPEC_MESSENGER_CTA = p),
      (l.ASSET_FEED_SPEC_WHATSAPP_CTA = _),
      (l.getAppLinkInstagram = g),
      (l.getAssetFeedSpecInstagram = h),
      (l.isWhatsAppNumberBusiness = y),
      (l.isWhatsAppConsumerNumber = C),
      (l.shouldDisallowConsumerCTWASelection = b),
      (l.EFFECTIVE_PUBLISHER_PLATFORMS_DEFAULT_FOR_MESSAGES = v),
      (l.EFFECTIVE_PUBLISHER_PLATFORMS_WITH_WA_DEFAULT_FOR_MESSAGES = S),
      (l.getClientSideEffectivePublisherPlatformsForMessagesFromSpec = L),
      (l.ctaOptionsArrayHasMultipleMessagingDestinations = E),
      (l.showUnifiedCreationForPPE = k),
      (l.showUnifiedCreationForReachGoal = I),
      (l.getCallToActionFromType = T),
      (l.getMessagingAppsDestinationsFromCometSpec = D),
      (l.WhatsappSMBErrorCodes = $));
  },
  98,
);
