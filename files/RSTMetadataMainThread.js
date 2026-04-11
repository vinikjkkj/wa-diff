__d(
  "RSTMetadataMainThread",
  [
    "CurrentCanonicalRoute",
    "CurrentUser",
    "Env",
    "MemoryUtils",
    "RSTAdsManagerUtilsMainThread",
    "RSTConfig",
    "RSTExternalLoggingDataStoreMainThread",
    "RSTInteractionDataMainThread",
    "RSTRecoverableUnresponsivenessTrackingMainThread",
    "RSTUtils",
    "SiteData",
    "performance",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      var e = Date.now(),
        t = babelHelpers.extends(
          {},
          o("RSTAdsManagerUtilsMainThread").getAdsAnnotations(),
        );
      m(t);
      var n = Date.now();
      return ((t.rstAnnotationsCollectedInMs = "" + (n - e)), t);
    }
    function c() {
      var e = babelHelpers.extends(
        {},
        o("RSTAdsManagerUtilsMainThread").getAdsAnnotations(),
      );
      return (r("RSTConfig").shouldCollectAdditionalMetadata() && y(e), e);
    }
    function d() {
      return r("RSTConfig").shouldCollectAdditionalMetadata()
        ? o(
            "RSTExternalLoggingDataStoreMainThread",
          ).loggingDataStore.getAllSpanData()
        : {};
    }
    function m(e) {
      r("RSTConfig").shouldCollectAdditionalMetadata() &&
        (g(e), C(e), b(e), y(e), p(e), h(e));
    }
    function p(e) {
      var t = o("RSTAdsManagerUtilsMainThread").getAdEntityIds();
      ((e.selectedAdIds = t.adIds.join(",")),
        (e.selectedAdSetIds = t.adsetIds.join(",")),
        (e.selectedCampaignIds = t.campaignIds.join(",")));
    }
    function _() {
      try {
        var e,
          t =
            (e = o(
              "RSTInteractionDataMainThread",
            ).getLastInteractionDataSinceLastMessageToWorker()) == null
              ? void 0
              : e.componentStack;
        return t != null ? t : [];
      } catch (e) {
        return [];
      }
    }
    function f() {
      try {
        var e,
          t =
            (e = o(
              "RSTInteractionDataMainThread",
            ).getLastInteractionDataSinceLastMessageToWorker()) == null
              ? void 0
              : e.componentContext;
        return t != null ? t : [];
      } catch (e) {
        return [];
      }
    }
    function g(e) {
      if (r("RSTConfig").SHOULD_COLLECT_RST_ANNOTATIONS_INTERACTION_DATA) {
        var t = o("RSTInteractionDataMainThread")
          .getInteractionDataSinceLastMessageToWorker()
          .map(function (e) {
            return e.componentName;
          })
          .filter(function (e) {
            return e != null;
          })
          .join(",");
        t !== "" && (e.interactedComponentsSinceLastResponsiveState = t);
        var n = f();
        n.length > 0 &&
          (e.interactedComponentContextSinceLastResponsiveState =
            n.join(" < "));
        var a = o("RSTInteractionDataMainThread")
          .getInteractionHistory()
          .map(function (e) {
            return e.componentName;
          })
          .filter(function (e) {
            return e != null;
          })
          .join(",");
        a !== "" && (e.interactedComponentHistory = a);
        var i = o("RSTInteractionDataMainThread")
          .getInteractionHistory()
          .map(function (e) {
            return o("RSTUtils").getInteractionDetail(e);
          })
          .filter(function (e) {
            return e != null;
          })
          .join(",");
        i !== "" && (e.interactionDetailHistory = i);
      }
    }
    function h(e) {
      ((e.crashDataOncall = r("RSTConfig").PROJECT_ONCALL),
        (e.crashLogger = r("RSTConfig").PROJECT_NAME));
    }
    function y(e) {
      if (r("RSTConfig").SHOULD_COLLECT_RST_ANNOTATIONS_LOG_FOR_CRASH) {
        var t = o(
            "RSTExternalLoggingDataStoreMainThread",
          ).loggingDataStore.getAll(),
          n = function (a) {
            r("RSTConfig").BLOCKED_ANNOTATION_KEYS.some(function (e) {
              return e.test(a);
            }) || (e[o("RSTUtils").getExternalAnnotationKey(a)] = t[a]);
          };
        for (var a of Object.keys(t)) n(a);
      }
    }
    function C(e) {
      var t = o("MemoryUtils").getCurrentMemory({ runGC: !1 }),
        n = t.jsHeapSizeLimit,
        r = t.totalJSHeapSize,
        a = t.usedJSHeapSize;
      (n != null && (e.js_heap_size_limit = n.toString()),
        a != null && (e.used_js_heap_size = a.toString()),
        r != null && (e.total_js_heap_size = r.toString()));
    }
    function b(e) {
      var t = o("RSTRecoverableUnresponsivenessTrackingMainThread").getStats();
      if (t != null)
        for (var n of Object.keys(t)) {
          var r = t[n];
          if (r != null) {
            var a = n.toLowerCase();
            for (var i of Object.keys(r)) {
              var l = r[i];
              l != null && (e[a + "-" + i] = l.toString());
            }
          }
        }
    }
    function v() {
      var t = document.URL,
        n = (e || (e = r("Env"))).brsid;
      try {
        var a, i, l, c;
        return {
          url: t,
          brsid: n,
          i1: (a = r("CurrentUser").getID()) != null ? a : "0",
          i2:
            (i = o("RSTAdsManagerUtilsMainThread").getAdAccountID()) != null
              ? i
              : "0",
          i3:
            (l = o("RSTAdsManagerUtilsMainThread").getBusinessID()) != null
              ? l
              : "0",
          cpp: (c = r("SiteData").push_phase) != null ? c : "unknown",
          cr: "" + r("SiteData").client_revision,
          rcs: _(),
          st: Math.floor(Date.now() - (s || (s = r("performance"))).now()),
          annotations: u(),
          spans: d(),
          ccrt: o("CurrentCanonicalRoute").getForGlobalLoggingOnly(),
        };
      } catch (e) {
        return { url: t, brsid: n, i1: "0", i2: "0", i3: "0" };
      }
    }
    function S() {
      var t = document.URL,
        n = (e || (e = r("Env"))).brsid;
      try {
        var a, i, l;
        return {
          url: t,
          brsid: n,
          i1: (a = r("CurrentUser").getID()) != null ? a : "0",
          i2:
            (i = o("RSTAdsManagerUtilsMainThread").getAdAccountID()) != null
              ? i
              : "0",
          i3:
            (l = o("RSTAdsManagerUtilsMainThread").getBusinessID()) != null
              ? l
              : "0",
          externalAnnotations: c(),
          spans: d(),
          isLightweight: !0,
        };
      } catch (e) {
        return { url: t, brsid: n, i1: "0", i2: "0", i3: "0" };
      }
    }
    ((l.getMainThreadMetadata = v),
      (l.getMainThreadMetadataWithExternalAnnotationsOnly = S));
  },
  98,
);
