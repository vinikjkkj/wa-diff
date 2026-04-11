__d(
  "WAWebNewsletterProducerInsightsLogger",
  [
    "WALogger",
    "WAWebChannelProducerInsightsNavigationWamEvent",
    "WAWebWamEnumActionTarget",
    "WAWebWamEnumChannelProducerInsightsActionType",
    "WAWebWamEnumChannelProducerInsightsSurface",
    "WAWebWamMediaMetricUtils",
    "err",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = (function () {
        function e(e) {
          var t = e.wid;
          ((this.$1 = 0),
            (this.$4 = o("WAWebWamMediaMetricUtils").generateMediaEventId()),
            (this.$5 = o(
              "WAWebWamEnumChannelProducerInsightsSurface",
            ).CHANNEL_PRODUCER_INSIGHTS_SURFACE.CHANNEL_INFO),
            (this.$3 = t.user));
        }
        var t = e.prototype;
        return (
          (t.log = function (t) {
            var e,
              n = t.actionTarget,
              r = t.actionType,
              a = t.entryPoint;
            ((this.$2 = a != null ? a : this.$2),
              new (o(
                "WAWebChannelProducerInsightsNavigationWamEvent",
              ).ChannelProducerInsightsNavigationWamEvent)({
                cid: this.$3,
                channelProducerInsightsSequenceNumber: this.$1,
                producerInsightsSessionId: this.$4,
                channelProducerInsightsActionType: r,
                channelProducerInsightsActionTarget: n,
                channelProducerInsightsEntryPoint:
                  (e = this.$2) != null ? e : void 0,
                channelProducerInsightsSurface: this.$5,
              }).commit(),
              (this.$1 += 1));
          }),
          (t.logClose = function () {
            (this.log({
              actionType: o("WAWebWamEnumChannelProducerInsightsActionType")
                .CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.CLOSE,
            }),
              (this.$5 = o(
                "WAWebWamEnumChannelProducerInsightsSurface",
              ).CHANNEL_PRODUCER_INSIGHTS_SURFACE.CHANNEL_INFO),
              (this.$2 = null));
          }),
          (t.logOpen = function (t) {
            var e = t.entryPoint,
              n = t.tab;
            (this.log({
              actionType: o("WAWebWamEnumChannelProducerInsightsActionType")
                .CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.OPEN,
              entryPoint: e,
            }),
              this.$6(n));
          }),
          (t.logNavigationTap = function (t) {
            (this.log({
              actionType: o("WAWebWamEnumChannelProducerInsightsActionType")
                .CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.NAVIGATION_TAP,
              actionTarget: m(t),
            }),
              this.$6(t));
          }),
          (t.logInfoIconTap = function (t) {
            this.log({
              actionType: o("WAWebWamEnumChannelProducerInsightsActionType")
                .CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.INFO_ICON_TAP,
              actionTarget: t,
            });
          }),
          (t.logHelpCentreClick = function (t) {
            this.log({
              actionType: o("WAWebWamEnumChannelProducerInsightsActionType")
                .CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.LINK_CLICK,
              actionTarget: t,
            });
          }),
          (t.$6 = function (t) {
            switch (t) {
              case "reach":
                this.$5 = o(
                  "WAWebWamEnumChannelProducerInsightsSurface",
                ).CHANNEL_PRODUCER_INSIGHTS_SURFACE.REACH_TAB;
                break;
              case "followers":
                this.$5 = o(
                  "WAWebWamEnumChannelProducerInsightsSurface",
                ).CHANNEL_PRODUCER_INSIGHTS_SURFACE.FOLLOWERS_TAB;
                break;
              case "growth":
                this.$5 = o(
                  "WAWebWamEnumChannelProducerInsightsSurface",
                ).CHANNEL_PRODUCER_INSIGHTS_SURFACE.GROWTH_TAB;
                break;
              default:
            }
          }),
          e
        );
      })(),
      d = u.createContext({
        log: function () {
          p();
        },
        logNavigationTap: function () {
          p();
        },
        logInfoIconTap: function () {
          p();
        },
        logHelpCentreClick: function () {
          p();
        },
        logOpen: function () {
          p();
        },
        logClose: function () {
          p();
        },
      });
    function m(e) {
      switch (e) {
        case "followers":
          return o("WAWebWamEnumActionTarget").ACTION_TARGET.FOLLOWERS_TAB;
        case "growth":
          return o("WAWebWamEnumActionTarget").ACTION_TARGET.GROWTH_TAB;
        default:
          return o("WAWebWamEnumActionTarget").ACTION_TARGET.GROWTH_TAB;
      }
    }
    function p() {
      if (
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[NewsletterProducerInsightsLogger] unimplemented",
              ])),
          )
          .sendLogs("newsletter-producer-insights-logger-unimplemented"),
        !r("gkx")("26258"))
      )
        throw r("err")("unimplemented");
    }
    ((l.NewsletterProducerInsightsLogger = c),
      (l.NewsletterProducerInsightsLoggerContext = d));
  },
  98,
);
