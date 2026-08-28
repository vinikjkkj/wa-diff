__d(
  "adsUEditorSlowSelectorsLogging",
  [
    "AdsSelectorALSitevarConfig",
    "FBLogger",
    "RSTLogForCrash",
    "err",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = "ads_manager_overfetching",
      u = 2e3;
    function c(e) {
      var t,
        n = (t = r("err")("").stack) != null ? t : "",
        o = n.length > u ? n.substring(0, u) + "... [truncated]" : n;
      return { context: e, stack: o };
    }
    function d(e, t) {
      r("gkx")("11447") &&
        o("RSTLogForCrash").logForCrash(
          s + "." + e,
          c(t),
          o("RSTLogForCrash").RSTLogMode.VALID_FOR_2_MINUTES,
          { immediateFlush: !0 },
        );
    }
    var m = 3;
    function p(e) {
      if (e.hasValueWithoutError()) {
        var t = e.getValueEnforcing().length;
        t > r("AdsSelectorALSitevarConfig").adgroupOverfetchThreshold &&
          (r("FBLogger")("ads_manager_overfetching").warn(
            "Loaded %s adgroups (threshold: %s) under the set of selected campaigns / campaign groups! This will likely cause performance problems due to loading so many adgroups",
            t,
            r("AdsSelectorALSitevarConfig").adgroupOverfetchThreshold,
          ),
          d(
            "checkAndLogAdgroupLoadObject",
            "numAdgroups: " +
              t +
              ", threshold: " +
              r("AdsSelectorALSitevarConfig").adgroupOverfetchThreshold,
          ));
      }
      if (e.hasError() && r("justknobx")._("2614")) {
        var n;
        r("FBLogger")("ads_manager_loadobject_error").warn(
          "Loaded adgroups with error: [%s]",
          (n = e.getError()) == null ? void 0 : n.message,
        );
      }
      return e;
    }
    function _(e) {
      if (e.hasValueWithoutError()) {
        var t = e.getValueEnforcing().length;
        t > r("AdsSelectorALSitevarConfig").adgroupOverfetchThreshold &&
          r("FBLogger")("ads_manager_overfetching_experimental").warn(
            "Loaded %s adgroup IDs (threshold: %s) under the set of selected campaigns / campaign groups! This will likely cause performance problems due to loading so many adgroup IDs",
            t,
            r("AdsSelectorALSitevarConfig").adgroupOverfetchThreshold,
          );
      }
      return e;
    }
    function f(t, n) {
      var o = t.length,
        a = t[0],
        i = a instanceof Object ? Object.keys(a).length : 256;
      o > e &&
        i > m &&
        r("FBLogger")("ads_manager_overfetching_experimental").warn(
          "Loaded %s on %s (threshold: %s)! This will likely cause performance problems due to loading so many objects. Object size: %s.",
          o,
          n,
          e,
          i,
        );
    }
    function g(t, n) {
      var o = t.length;
      o > e &&
        r("FBLogger")("ads_manager_overfetching_experimental").warn(
          "Loaded %s IDs on %s (threshold: %s)! This will likely cause performance problems due to loading so many IDs",
          o,
          n,
          e,
        );
    }
    function h(e, t) {
      var n,
        o,
        a = e.read(),
        i = (n = a == null ? void 0 : a.length) != null ? n : 0,
        l = a == null || (o = a[0]) == null ? void 0 : o.id;
      return (
        i > r("AdsSelectorALSitevarConfig").adgroupOverfetchThreshold &&
          (r("FBLogger")("ads_manager_overfetching").warn(
            "Loaded %s adgroups (threshold: %s) via relay %s query! This will likely cause performance problems due to loading so many adgroups. Example: %s",
            i,
            r("AdsSelectorALSitevarConfig").adgroupOverfetchThreshold,
            t === !0 ? "exec time" : "read time",
            l,
          ),
          d(
            "logAdgroupOverfetching",
            "length: " +
              i +
              ", threshold: " +
              r("AdsSelectorALSitevarConfig").adgroupOverfetchThreshold +
              ", isExecTime: " +
              String(t) +
              ", exampleId: " +
              String(l),
          )),
        e
      );
    }
    function y(e, t) {
      var n,
        o,
        a = e.read(),
        i = (n = a == null ? void 0 : a.length) != null ? n : 0,
        l = a == null || (o = a[0]) == null ? void 0 : o.id;
      return (
        i > r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold &&
          r("FBLogger")("ads_manager_overfetching_experimental").warn(
            "Loaded %s %s (threshold: %s) via relay query! This will likely cause performance problems due to loading so many objects. Example: %s",
            i,
            t,
            r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold,
            l,
          ),
        e
      );
    }
    function C(e, t) {
      var n,
        o,
        a = e.read(),
        i = (n = a == null ? void 0 : a.length) != null ? n : 0,
        l = a == null || (o = a[0]) == null ? void 0 : o.id;
      return (
        i > r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold &&
          (r("FBLogger")("ads_manager_overfetching").warn(
            "Loaded %s %s (threshold: %s) via relay query! This will likely cause performance problems due to loading so many objects. Example: %s",
            i,
            t,
            r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold,
            l,
          ),
          d(
            "logLiveResolverOverfetching",
            "objectType: " +
              t +
              ", length: " +
              i +
              ", threshold: " +
              r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold +
              ", exampleId: " +
              String(l),
          )),
        e
      );
    }
    function b(e) {
      if (e.hasValueWithoutError()) {
        var t = e.getValueEnforcing(),
          n = t.length;
        if (n > r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold) {
          var o = t[0].id;
          (r("FBLogger")("ads_manager_overfetching").warn(
            "Loaded %s campaigns (threshold: %s) under the set of selected campaign groups! This will likely cause performance problems due to loading so many campaigns. Example: %s",
            n,
            r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold,
            o,
          ),
            d(
              "checkAndLogCampaignError",
              "numCampaigns: " +
                n +
                ", threshold: " +
                r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold +
                ", exampleId: " +
                String(o),
            ));
        }
      }
      if (e.hasError() && r("justknobx")._("2713")) {
        var a;
        r("FBLogger")("ads_manager_loadobject_error").warn(
          "Loaded campaigns with error: [%s]",
          (a = e.getError()) == null ? void 0 : a.message,
        );
      }
      return e;
    }
    function v(e) {
      var t = e.size;
      if (t > r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold) {
        var n = e.keySeq().first();
        (r("FBLogger")("ads_manager_overfetching").warn(
          "Loaded %s campaigns (threshold: %s) from campaign store! This will likely cause performance problems due to loading so many campaigns. Example: %s",
          t,
          r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold,
          String(n),
        ),
          d(
            "checkAndLogCampaignStoreOverfetching",
            "numCampaigns: " +
              t +
              ", threshold: " +
              r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold +
              ", exampleId: " +
              String(n),
          ));
      }
      return e;
    }
    function S(t, n) {
      var o = t.length;
      return (
        o > e &&
          (r("FBLogger")("ads_manager_overfetching").warn(
            "Loaded %s dynamic %s (threshold: %s)! This will likely cause performance problems due to loading so many objects.",
            o,
            n,
            e,
          ),
          d(
            "checkAndLogDynamicObjectsOverfetching",
            "type: " + n + ", numIDs: " + o + ", threshold: " + e,
          )),
        t
      );
    }
    function R(e) {
      e != null &&
        e > r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold &&
        (r("FBLogger")("ads_manager_overfetching").warn(
          "Loaded %s campaigns (threshold: %s) from campaign relay store! This will likely cause performance problems due to loading so many campaigns.",
          e,
          r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold,
        ),
        d(
          "checkAndLogCampaignRelayStoreOverfetching",
          "numCampaigns: " +
            e +
            ", threshold: " +
            r("AdsSelectorALSitevarConfig").campaignOverfetchThreshold,
        ));
    }
    function L(e) {
      var t = e.size;
      if (t > r("AdsSelectorALSitevarConfig").adgroupOverfetchThreshold) {
        var n = e.keySeq().first();
        (r("FBLogger")("ads_manager_overfetching").warn(
          "Loaded %s adgroups (threshold: %s) from adgroup store! This will likely cause performance problems due to loading so many adgroups. Example: %s",
          t,
          r("AdsSelectorALSitevarConfig").adgroupOverfetchThreshold,
          String(n),
        ),
          d(
            "checkAndLogAdgroupStoreOverfetching",
            "numAdgroups: " +
              t +
              ", threshold: " +
              r("AdsSelectorALSitevarConfig").adgroupOverfetchThreshold +
              ", exampleId: " +
              String(n),
          ));
      }
      return e;
    }
    function E(t) {
      var n = t.size;
      if (n > e) {
        var o = t.keySeq().first();
        (r("FBLogger")("ads_manager_overfetching").warn(
          "Loaded %s campaign groups (threshold: %s) from campaign group store! This will likely cause performance problems due to loading so many campaign groups. Example: %s",
          n,
          e,
          String(o),
        ),
          d(
            "checkAndLogCampaignGroupStoreOverfetching",
            "numCampaignGroups: " +
              n +
              ", threshold: " +
              e +
              ", exampleId: " +
              String(o),
          ));
      }
      return t;
    }
    function k(e) {
      if (e.hasError() && r("justknobx")._("2715")) {
        var t;
        r("FBLogger")("ads_manager_loadobject_error").warn(
          "Loaded campaign groups with error: [%s]",
          (t = e.getError()) == null ? void 0 : t.message,
        );
      }
      return e;
    }
    ((l.checkAndLogAdgroupLoadObject = p),
      (l.checkAndLogAdgroupIDOverfetching = _),
      (l.checkAndLogObjectsOverfetching = f),
      (l.checkAndLogIDsOverfetching = g),
      (l.logAdgroupOverfetching = h),
      (l.logPromotablePagesLiveResolverOverfetching = y),
      (l.logLiveResolverOverfetching = C),
      (l.checkAndLogCampaignError = b),
      (l.checkAndLogCampaignStoreOverfetching = v),
      (l.checkAndLogDynamicObjectsOverfetching = S),
      (l.checkAndLogCampaignRelayStoreOverfetching = R),
      (l.checkAndLogAdgroupStoreOverfetching = L),
      (l.checkAndLogCampaignGroupStoreOverfetching = E),
      (l.checkAndLogCampaignGroupError = k));
  },
  98,
);
