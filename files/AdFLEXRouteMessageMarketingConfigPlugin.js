__d(
  "AdFLEXRouteMessageMarketingConfigPlugin",
  [
    "AdsPERouteName",
    "meta-brand-two-dash-left-speech-bubble-filled-24",
    "meta-brand-two-dash-left-speech-bubble-outline-20",
    "meta-brand-two-dash-left-speech-bubble-outline-24",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getRoute: function (t) {
          switch (t) {
            case "L3":
              return r("AdsPERouteName").MESSAGE_CAMPAIGNS;
            case "L2":
              return r("AdsPERouteName").MESSAGE_SETS;
            case "L1":
              return r("AdsPERouteName").MESSAGES;
            case "MESSAGE_SETTINGS":
              return r("AdsPERouteName").MESSAGE_SETTINGS;
            case "MESSAGE_LANDING_PAGE":
              return r("AdsPERouteName").MESSAGE_LANDING_PAGE;
            case "PACKAGE_AD_CREATION":
              return r("AdsPERouteName").MESSAGE_CREATION_PACKAGE;
            default:
              return null;
          }
        },
        getNavStateForSection: function (n) {
          return (e.getRoute == null ? void 0 : e.getRoute(n)) != null
            ? { tool: "MANAGE_MESSAGES", section: n }
            : null;
        },
        leftNav: {
          icon: {
            icon: o("meta-brand-two-dash-left-speech-bubble-outline-24")
              .metaBrandTwoDashLeftSpeechBubbleOutline24,
          },
          iconDisabled: {
            icon: o("meta-brand-two-dash-left-speech-bubble-outline-20")
              .metaBrandTwoDashLeftSpeechBubbleOutline20,
            isDisabled: !0,
          },
          iconSelected: {
            icon: o("meta-brand-two-dash-left-speech-bubble-filled-24")
              .metaBrandTwoDashLeftSpeechBubbleFilled24,
            color: "blue",
          },
        },
        type: "flexRouteConfig",
        key: "marketingMessages",
        tool: "MANAGE_MESSAGES",
      },
      s = e;
    l.default = s;
  },
  98,
);
