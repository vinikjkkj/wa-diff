__d(
  "CometTimeSpentBitArrayLogger",
  [
    "CometTS2BitArrayLogger",
    "ODS",
    "Random",
    "TimeSpentArray",
    "TimeSpentImmediateActiveSecondsLogger",
    "TimeSpentWWWCometConfig.experimental",
    "WebSession",
    "WebTimeSpentBitArrayFalcoEvent",
    "isInIframe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "",
      u = null;
    function c(e, t) {
      ((e.sid_raw = s),
        r("WebTimeSpentBitArrayFalcoEvent").logImmediately(function () {
          return {
            sid_raw: e.sid_raw,
            start_endpoint: e.start_endpoint,
            start_event: e.start_event,
            start_time: e.start_time,
            tos_array: e.tos_array,
            tos_cum: e.tos_cum,
            tos_id: e.tos_id,
            tos_len: e.tos_len,
            tos_seq: e.tos_seq,
          };
        }),
        o("CometTS2BitArrayLogger").log(e));
    }
    function d(e) {
      var t = p();
      t !== s && (o("TimeSpentArray").ship(), (s = t));
    }
    function m() {
      return u;
    }
    function p() {
      return (o("WebSession").extend(), o("WebSession").getId());
    }
    function _(e) {
      return !!(
        e === "XWorkPostPluginCometController" ||
        e === "XWorkGroupFeedPluginCometController" ||
        e === "XWorkMSTeamsAppFeedCometController" ||
        (e != null &&
          e.startsWith("comet.commerce_partner_hub.commerce_extension")) ||
        (e != null &&
          e.startsWith(
            "comet.commerce_partner_hub.whatsapp_utility_integration",
          )) ||
        (e != null && e.startsWith("shopify_app.")) ||
        (e != null && e.startsWith("shopify_whatsapp_app."))
      );
    }
    function f(t) {
      if (!(r("isInIframe")() && !_(t))) {
        u = t;
        var n = Date.now();
        (o("TimeSpentArray").init(
          c,
          r("TimeSpentWWWCometConfig.experimental").CONFIG,
          n,
          d,
          m,
        ),
          (s = p()),
          r("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(
            n,
          ));
        var a = 772;
        o("Random").coinflip(a) &&
          (e || (e = o("ODS"))).bumpEntityKey(
            2966,
            "ms.time_spent.qa.www",
            "time_spent.bits.js_initialized",
            a,
          );
      }
    }
    function g(e, t) {
      (o("TimeSpentArray").update(e, t),
        r("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(e));
    }
    function h(e) {
      u = e;
    }
    ((l.init = f), (l.updateTimeSpentArray = g), (l.changeEndpoint = h));
  },
  98,
);
