__d(
  "AYMTClientSideLogging",
  [
    "AYMTTipDismissalNotifier",
    "AYMTTipImpressionNotifier",
    "AsyncRequest",
    "ThisControllerNoLongerExists",
    "XAYMTMultiTipAsyncClickControllerRouteBuilder",
    "XAYMTTipImpressionLoggerAsyncControllerRouteBuilder",
    "XAYMTTipTourCompleteLoggerAsyncControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = r("XAYMTTipImpressionLoggerAsyncControllerRouteBuilder").buildUri(
        {
          tip_id: e,
          channel_id: t != null ? t : void 0,
          extra_data: n != null ? n : void 0,
        },
      );
      (new (r("AsyncRequest"))()
        .setURI(a)
        .setAllowCrossPageTransition(!0)
        .send(),
        o("AYMTTipImpressionNotifier").notifyTipImpression(e));
    }
    function s(e, t, n) {
      var a = r("XAYMTMultiTipAsyncClickControllerRouteBuilder").buildUri({
        tip_id: e,
        channel_id: t != null ? t : void 0,
        target: "xout",
        handled_delete: !0,
        extra_data: n != null ? n : void 0,
      });
      (new (r("AsyncRequest"))()
        .setURI(a)
        .setAllowCrossPageTransition(!0)
        .send(),
        o("AYMTTipDismissalNotifier").notifyTipDismissal(e));
    }
    function u(e, t, n) {
      var o = r("XAYMTMultiTipAsyncClickControllerRouteBuilder").buildUri({
        tip_id: e,
        channel_id: t != null ? t : void 0,
        target: "click",
        extra_data: n != null ? n : void 0,
      });
      new (r("AsyncRequest"))()
        .setURI(o)
        .setAllowCrossPageTransition(!0)
        .send();
    }
    function c(e, t) {
      var n = o("ThisControllerNoLongerExists")
        .__DEADBUILDER__("12a2ms04p")
        .setString("tip_id", e)
        .setString("channel_id", t)
        .getURI();
      new (r("AsyncRequest"))()
        .setURI(n)
        .setAllowCrossPageTransition(!0)
        .send();
    }
    function d(e, t) {
      var n, o;
      if (e != null) {
        var a = r("XAYMTMultiTipAsyncClickControllerRouteBuilder").buildUri({
          tip_id: (n = e.tip_id) != null ? n : void 0,
          channel_id: (o = e.channel_id) != null ? o : void 0,
          aymt_data: JSON.stringify(e),
          target: "click",
          message: t != null ? t : void 0,
        });
        new (r("AsyncRequest"))()
          .setURI(a)
          .setAllowCrossPageTransition(!0)
          .send();
      }
    }
    function m(e, t) {
      var n, a;
      if (e != null) {
        var i = r(
          "XAYMTTipImpressionLoggerAsyncControllerRouteBuilder",
        ).buildUri({
          tip_id: (n = e.tip_id) != null ? n : void 0,
          channel_id: (a = e.channel_id) != null ? a : void 0,
          aymt_data: JSON.stringify(e),
          message: t != null ? t : void 0,
        });
        (new (r("AsyncRequest"))()
          .setURI(i)
          .setAllowCrossPageTransition(!0)
          .send(),
          o("AYMTTipImpressionNotifier").notifyTipImpression(e.tip_id));
      }
    }
    function p(e, t, n) {
      var a, i;
      if ((n === void 0 && (n = !0), e != null)) {
        var l = r("XAYMTMultiTipAsyncClickControllerRouteBuilder").buildUri({
          tip_id: (a = e.tip_id) != null ? a : void 0,
          channel_id: (i = e.channel_id) != null ? i : void 0,
          aymt_data: JSON.stringify(e),
          target: "xout",
          handled_delete: !0,
          message: t != null ? t : void 0,
        });
        (new (r("AsyncRequest"))()
          .setURI(l)
          .setAllowCrossPageTransition(!0)
          .send(),
          n && o("AYMTTipDismissalNotifier").notifyTipDismissal(e.tip_id));
      }
    }
    function _(e) {
      var t, n;
      if (e != null) {
        var o = r("XAYMTMultiTipAsyncClickControllerRouteBuilder").buildUri({
          tip_id: (t = e.tip_id) != null ? t : void 0,
          channel_id: (n = e.channel_id) != null ? n : void 0,
          aymt_data: JSON.stringify(e),
          target: "conversion",
        });
        new (r("AsyncRequest"))()
          .setURI(o)
          .setAllowCrossPageTransition(!0)
          .send();
      }
    }
    function f(e) {
      var t,
        n,
        o = r("XAYMTTipTourCompleteLoggerAsyncControllerRouteBuilder").buildUri(
          {
            tip_id: (t = e.tip_id) != null ? t : void 0,
            channel_id: (n = e.channel_id) != null ? n : void 0,
            aymt_data: JSON.stringify(e),
          },
        );
      new (r("AsyncRequest"))()
        .setURI(o)
        .setAllowCrossPageTransition(!0)
        .send();
    }
    function g(e, t) {
      var n,
        o,
        a = r("XAYMTTipImpressionLoggerAsyncControllerRouteBuilder").buildUri({
          tip_id: (n = e.tip_id) != null ? n : void 0,
          channel_id: (o = e.channel_id) != null ? o : void 0,
          aymt_data: JSON.stringify(e),
          reason: "tour_step",
          message: t.toString(),
        });
      new (r("AsyncRequest"))()
        .setURI(a)
        .setAllowCrossPageTransition(!0)
        .send();
    }
    ((l.logImpression = e),
      (l.logXout = s),
      (l.logClick = u),
      (l.logConversion = c),
      (l.logClickNew = d),
      (l.logImpressionNew = m),
      (l.logXoutNew = p),
      (l.logConversionNew = _),
      (l.logTourCompleteNew = f),
      (l.logTourStepImpressionNew = g));
  },
  98,
);
