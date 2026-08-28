__d(
  "CTXChatBuilderPartnerAppUtils",
  [
    "AdCampaignDestination",
    "AdsMessengerVisualEditorUtils",
    "AdsUEditorPartnerAppWelcomeMessageFlowUtils",
    "tryParseJSONMixed",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
      var e = null;
      if (t === r("AdCampaignDestination").WHATSAPP) {
        var i = o(
          "AdsMessengerVisualEditorUtils",
        ).getAppsSubscribedToWABAByWhatsAppPhoneNumber(n);
        ((i = i.filter(function (e) {
          return e.page_whatsapp_number === (a == null ? void 0 : a.toString());
        })),
          i.length === 1 && (e = i[0].subscribed_apps));
      } else
        ((e = o("AdsMessengerVisualEditorUtils").getMessagingApps(n)),
          (e = e.filter(function (e) {
            return (
              e.has_messenger_messaging_permission === !0 ||
              e.has_instagram_messaging_permission === !0
            );
          })),
          t !== r("AdCampaignDestination").INSTAGRAM_DIRECT &&
            (e = e.filter(function (e) {
              return e.ctd_support_only_for_ig_app === !1;
            })));
      return e;
    };
    function s(e) {
      var t = e.toUpperCase();
      return t === "INSTAGRAM" ? "INSTAGRAM_DIRECT" : t;
    }
    function u(e) {
      return e === r("AdCampaignDestination").WHATSAPP;
    }
    function c(e) {
      return (
        e === r("AdCampaignDestination").MESSENGER ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        e === r("AdCampaignDestination").ON_POST ||
        e === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER
      );
    }
    function d(e) {
      return (
        e != null &&
        e.length > 0 &&
        e.some(function (e) {
          return e.flow_data.length > 0;
        })
      );
    }
    function m(e, t) {
      return e == null || e.length === 0
        ? !1
        : e.some(function (e) {
            return e.flow_data.some(function (e) {
              var n,
                r,
                a = babelHelpers.extends({}, e, {
                  eligible_platforms:
                    (n = e.eligible_platforms) == null ? void 0 : n.map(s),
                  compatible_platforms:
                    (r = e.compatible_platforms) == null ? void 0 : r.map(s),
                });
              return o(
                "AdsUEditorPartnerAppWelcomeMessageFlowUtils",
              ).isFlowCompatibleWithDestinationType(a, t);
            });
          });
    }
    function p(e) {
      return e == null || e.length === 0
        ? !1
        : e.some(function (e) {
            var t = r("tryParseJSONMixed")(e.page_welcome_message_body);
            if (t != null && typeof t == "object") {
              var n = o(
                "AdsMessengerVisualEditorUtils",
              ).getWelcomeMessageDataType(t);
              return n === "JSON_SETUP";
            }
            return !1;
          });
    }
    function _(e) {
      if (e == null) return NaN;
      var t = Number(e);
      if (!isNaN(t)) return t < 1e10 ? t * 1e3 : t;
      var n = new Date(e);
      return isNaN(n.getTime()) ? NaN : n.getTime();
    }
    function f(e) {
      return e == null || e.type === "JSON_SETUP"
        ? e
        : { message_data: e, type: "JSON_SETUP" };
    }
    function g(e) {
      if (e == null) return e;
      var t;
      try {
        t = JSON.parse(e);
      } catch (t) {
        return e;
      }
      if (t == null || typeof t != "object" || t.type === "JSON_SETUP")
        return e;
      var n = { message_data: t, type: "JSON_SETUP" };
      return JSON.stringify(n);
    }
    ((l.getAppList = e),
      (l.normalizePlatformName = s),
      (l.isWhatsAppOnlyDestination = u),
      (l.isValidDestinationForPartnerAppConnector = c),
      (l.checkHasPartnerAppFlows = d),
      (l.checkHasCompatiblePartnerAppFlows = m),
      (l.checkHasJSONTemplates = p),
      (l.parseFlowTimestamp = _),
      (l.wrapInJSONSetupFormat = f),
      (l.wrapInJSONSetupFormatString = g));
  },
  98,
);
