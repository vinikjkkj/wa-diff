__d(
  "CometTimeSpentBitArrayLogger",
  [
    "CometTS2BitArrayLogger",
    "ODS",
    "Random",
    "ServerTime",
    "TimeSpentArray",
    "TimeSpentImmediateActiveSecondsLogger",
    "TimeSpentWWWCometConfig.experimental",
    "WebSession",
    "WebTimeSpentBitArrayFalcoEvent",
    "cr:6036",
    "gkx",
    "isInIframe",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("gkx")("10809"),
      c = "",
      d = null;
    function m() {
      return u
        ? Math.floor((s || (s = r("performanceAbsoluteNow")))())
        : Date.now();
    }
    function p(e, t) {
      ((e.sid_raw = c),
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
    function _(e) {
      var t = g();
      t !== c && (o("TimeSpentArray").ship(), (c = t));
    }
    function f() {
      return d;
    }
    function g() {
      return (o("WebSession").extend(), o("WebSession").getId());
    }
    function h(e) {
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
    function y(t) {
      if (!(r("isInIframe")() && !h(t))) {
        d = t;
        var a = m();
        (n("cr:6036") == null ||
          n("cr:6036").addTimeSpentStartupPoint("time_spent_array_init_start"),
          o("TimeSpentArray").init(
            p,
            r("TimeSpentWWWCometConfig.experimental").CONFIG,
            a,
            _,
            f,
            { getOffsetMillis: o("ServerTime").getOffsetMillis, now: m },
          ),
          n("cr:6036") == null ||
            n("cr:6036").addTimeSpentStartupPoint("time_spent_array_init_end"),
          (c = g()),
          r("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(
            a,
          ));
        var i = 772;
        o("Random").coinflip(i) &&
          (e || (e = o("ODS"))).bumpEntityKey(
            2966,
            "ms.time_spent.qa.www",
            "time_spent.bits.js_initialized",
            i,
          );
      }
    }
    function C(e, t) {
      (o("TimeSpentArray").update(e, t),
        r("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(e));
    }
    function b(e) {
      d = e;
    }
    ((l.currentTimeInMS = m),
      (l.init = y),
      (l.updateTimeSpentArray = C),
      (l.changeEndpoint = b));
  },
  98,
);
