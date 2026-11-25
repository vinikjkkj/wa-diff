__d(
  "MAWTrackPendingOccamadilloThreads",
  [
    "Deferred",
    "LSDatabaseSingleton",
    "LSInitSyncCompleteSubscription",
    "LSIntEnum",
    "LSPlatformLsInitLog",
    "MAWMIC",
    "MAWMICSchema",
    "QuickPerformanceLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d =
        ((e = {}),
        (e[o("MAWMICSchema").ANNOTATIONS.occamadilloBatchesSentToWorker] = 0),
        (e[
          o("MAWMICSchema").ANNOTATIONS.occamadilloPendingThreadsAfterInitSync
        ] = 0),
        (e[o("MAWMICSchema").ANNOTATIONS.occamadilloDuplicateThreads] = 0),
        e);
    (function () {
      Object.keys(d).forEach(function (e) {
        o("MAWMIC").addIntAnnotation(e, 0);
      });
    })();
    function m(e) {
      o("MAWMIC").addIntAnnotation(e, ++d[e]);
    }
    var p = new (r("Deferred"))(),
      _ = new Set(),
      f = new Set(),
      g = new Set(),
      h = new Set();
    function y(e) {
      var t = e.callingSource;
      (h.add((c || (c = o("LSIntEnum"))).toNumber(t)),
        o("MAWMIC").addIntArrayAnnotation(
          o("MAWMICSchema").ANNOTATIONS.occamadilloCallingSources,
          Array.from(h),
        ));
    }
    var C = null;
    function b(e) {
      if (
        (o("MAWMIC").addPoint(o("MAWMICSchema").POINTS.thread_mapping_start),
        _.has(e))
      ) {
        m(o("MAWMICSchema").ANNOTATIONS.occamadilloDuplicateThreads);
        return;
      }
      (f.add(e),
        o("LSPlatformLsInitLog").LsSync.isRunning() && g.add(e),
        (C = (s || (s = r("QuickPerformanceLogger"))).currentTimestamp()),
        _.add(e),
        o("MAWMIC").addIntAnnotation("occamadilloThreadCount", _.size),
        o("LSPlatformLsInitLog").LsSync.hasEnded() &&
          m(
            o("MAWMICSchema").ANNOTATIONS
              .occamadilloPendingThreadsAfterInitSync,
          ));
    }
    function v() {
      o("MAWMIC").addBoolAnnotation("threadMappingAcked", !0);
    }
    async function S(e) {
      var t = await (u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
      (await o("LSInitSyncCompleteSubscription").maybeWaitForSyncGroup(
        t,
        (c || (c = o("LSIntEnum"))).ofNumber(95),
      ),
        f.delete(e),
        g.delete(e),
        o("MAWMIC").addIntAnnotation(
          "occamadilloCompleteThreadCount",
          _.size - f.size,
        ),
        L());
    }
    function R() {
      (p.resolve(), L());
    }
    function L() {
      if (
        (o("MAWMIC").addIntAnnotation("occamadilloThreadCount", _.size),
        o("LSPlatformLsInitLog").LsSync.hasEnded() && g.size === 0)
      ) {
        o("MAWMIC").addPoint(o("MAWMICSchema").POINTS.thread_mapping_end);
        return;
      }
      f.size === 0 &&
        o("MAWMIC").addPoint(o("MAWMICSchema").POINTS.thread_mapping_end);
    }
    ((l.markThreadPassedToNativeOp = y),
      (l.addPendingThread = b),
      (l.markBridgeCallAcked = v),
      (l.removePendingThread = S),
      (l.completeSync = R),
      (l.maybeEndOccamadilloThreadMapping = L));
  },
  98,
);
