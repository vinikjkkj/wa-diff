__d(
  "CometAdPrefsWAISTLogHooks",
  [
    "AdsTransparencyWAISTTypedLogger",
    "CometAdPrefsWAISTGlobalContext",
    "ODS",
    "WAISTEntrypoint",
    "WebSession",
    "getJSEnumSafe",
    "react",
    "useVisibilityObserver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useCallback,
      d = u.useRef;
    function m(e, t) {
      var n = d(!1),
        o = g({
          entity: "row",
          event: "impression",
          targetingData: e,
          targetingType: t,
        });
      return r("useVisibilityObserver")({
        onVisible: function () {
          n.current || ((n.current = !0), o());
        },
      });
    }
    function p(e, t) {
      var n = d(!1),
        o = g({
          entity: "detail_page",
          event: "impression",
          targetingData: e,
          targetingType: t,
        });
      return r("useVisibilityObserver")({
        onVisible: function () {
          n.current || ((n.current = !0), o());
        },
      });
    }
    function _(e, t, n, a, i, l) {
      (a === void 0 && (a = "waist_comet"), i === void 0 && (i = 0));
      var s = o("WebSession").getId(),
        u = o("CometAdPrefsWAISTGlobalContext").useWAISTEntrypoint(),
        m = l != null ? l : u,
        p = d(!1),
        _ = c(
          function () {
            var o = new (r("AdsTransparencyWAISTTypedLogger"))()
              .setAdID(e)
              .setAdvertiserID(t)
              .setEntity(n)
              .setEntryProduct(a)
              .setEvent("impression")
              .setSessionID(s)
              .setWaistVersion(i);
            if (m != null) {
              var l = r("getJSEnumSafe")(r("WAISTEntrypoint"), m);
              l != null && o.setWaistEntrypoint(l);
            }
            o.log();
          },
          [e, t, n, a, s, m, i],
        );
      return r("useVisibilityObserver")({
        onVisible: function () {
          p.current || ((p.current = !0), _());
        },
      });
    }
    function f(e) {
      var t = o("WebSession").getId(),
        n = d(!1),
        a = c(
          function () {
            new (r("AdsTransparencyWAISTTypedLogger"))()
              .setAdID(e)
              .setEntity("null_state_page")
              .setEntryProduct("waist_comet")
              .setEvent("impression")
              .setSessionID(t)
              .log();
          },
          [e, t],
        );
      return r("useVisibilityObserver")({
        onVisible: function () {
          n.current || ((n.current = !0), a());
        },
      });
    }
    function g(e) {
      var t = o("WebSession").getId(),
        n = o("CometAdPrefsWAISTGlobalContext").useAdId(),
        a = o("CometAdPrefsWAISTGlobalContext").useAdvertiserData(),
        i = o("CometAdPrefsWAISTGlobalContext").useWAISTVersion();
      return c(
        function () {
          var o;
          new (r("AdsTransparencyWAISTTypedLogger"))()
            .setAdID(n)
            .setAdvertiserID(a.advertiserID)
            .setEntity(e.entity)
            .setEntityID(e.entityID)
            .setEntryProduct((o = e.entryProduct) != null ? o : "waist_comet")
            .setEvent(e.event)
            .setParentEntity(e.parentEntity)
            .setSessionID(t)
            .setTargetingData(e.targetingData)
            .setTargetingType(e.targetingType)
            .setMessage(e.message)
            .setWaistVersion(i)
            .log();
        },
        [
          n,
          a.advertiserID,
          e.entity,
          e.entityID,
          e.entryProduct,
          e.event,
          e.message,
          e.parentEntity,
          e.targetingData,
          e.targetingType,
          t,
          i,
        ],
      );
    }
    function h(e, t, n, a) {
      var i = new (r("AdsTransparencyWAISTTypedLogger"))()
          .setAdID(e)
          .setEntryProduct(t)
          .setEvent("entry")
          .setWaistVersion(n),
        l = r("getJSEnumSafe")(r("WAISTEntrypoint"), a);
      (l != null && i.setWaistEntrypoint(l),
        i.log(),
        (s || (s = o("ODS"))).bumpEntityKey(
          6034,
          "waist_entry",
          n + "." + (t != null ? t : "unknown") + "." + a,
        ));
    }
    function y(e, t) {
      (s || (s = o("ODS"))).bumpEntityKey(
        68,
        "ads_preferences",
        "frontend_" + e + ".desktop." + t,
      );
    }
    function C(e, t) {
      (s || (s = o("ODS"))).bumpEntityKey(
        6354,
        "youth_ads",
        "frontend_" + e + ".fb_desktop." + t,
      );
    }
    function b(e, t) {
      (s || (s = o("ODS"))).bumpEntityKey(
        9505,
        "stated_teens_smoke_test",
        "waist_fb_comet_stated_teens." + e + "_" + t,
      );
    }
    function v(e, t) {
      var n = t === !0 ? "stated_teen" : "not_stated_teen";
      (s || (s = o("ODS"))).bumpEntityKey(
        9505,
        "predicted_vs_stated_teens",
        e + "." + n,
      );
    }
    ((l.useLandingPageRowImpressionLogCallback = m),
      (l.useDetailPageImpressionLogCallback = p),
      (l.useWAISTImpressionLogCallback = _),
      (l.useNullStateImpressionLogCallback = f),
      (l.useLogCallback = g),
      (l.logWAISTEntry = h),
      (l.logWaistODS = y),
      (l.logWaistYouthODS = C),
      (l.logStatedTeensODS = b),
      (l.logPredictedTeensODS = v));
  },
  98,
);
