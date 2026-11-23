__d(
  "JSSelfProfilerUtils",
  [
    "CurrentUser",
    "FBLogger",
    "JSScheduler",
    "JSSelfProfilerConfig.experimental",
    "getErrorSafe",
    "renameFunctionWithStaticName_BeCareful",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ":",
      u = null;
    function c() {
      if (u == null) {
        var e;
        u =
          (e = r("JSSelfProfilerConfig.experimental").PROFILER_CONFIG) != null
            ? e
            : [];
      }
      return u;
    }
    var d = null;
    function m() {
      if (d == null) {
        var e;
        d =
          (e = c().find(function (e) {
            return e.app_id === "default";
          })) != null
            ? e
            : {
                app_id: "default",
                sample_interval: 10,
                max_buffer_size: 3e3,
                sample_rate: 0,
                disable_when_has_referrer: !1,
              };
      }
      return d;
    }
    function p() {
      var e,
        t = r("CurrentUser").getAppID(),
        n =
          (e = c().find(function (e) {
            return e.app_id === t;
          })) != null
            ? e
            : m();
      return {
        sampleInterval: n.sample_interval,
        maxBufferSize: n.max_buffer_size,
      };
    }
    function _(e, t) {
      if (t === "") return e;
      if (e == null || e === "") return t;
      if (t.includes(s))
        return (
          r("FBLogger")("JSSelfProfiler").warn(
            "addJSSPSampleMarker: marker %s contains %s the marker split character",
            t,
            s,
          ),
          e
        );
      var n = new Set(e.split(s));
      return (n.add(t), Array.from(n).sort().join(s));
    }
    function f(e, t) {
      var n = _(e.marker, t);
      n != null && (e.marker = n);
    }
    function g(e, t, n) {
      var r;
      e.metadata == null && (e.metadata = {});
      var o = e.metadata;
      o.jsspAnnotations = (r = o.jsspAnnotations) != null ? r : "{}";
      var a = JSON.parse(o.jsspAnnotations);
      ((a[t] = n), (o.jsspAnnotations = JSON.stringify(a, null, 0)));
    }
    function h(e, t) {
      var n = t.frames[e.frameId];
      return n == null ? void 0 : n.name;
    }
    function y(e) {
      var t = new Map();
      try {
        for (var n = 0; n < e.samples.length; n++) {
          for (
            var o = new Set(), a = e.samples[n], i = a.stackId;
            i != null && !o.has(i);
          )
            (o.add(i), (i = e.stacks[i].parentId));
          t.set(n, o.size);
        }
      } catch (e) {
        var l = r("getErrorSafe")(e);
        r("FBLogger")("JSSelfProfiler").warn(
          "getSampleIdToDepthsMap throws %s",
          l.message,
        );
      }
      return t;
    }
    function C(e) {
      var t = new Map();
      try {
        for (var n = 0; n < e.samples.length; n++)
          for (
            var o = new Set(), a = e.samples[n], i = a.stackId;
            i != null && !o.has(i);
          )
            (o.add(i), t.set(i, n), (i = e.stacks[i].parentId));
      } catch (e) {
        var l = r("getErrorSafe")(e);
        r("FBLogger")("JSSelfProfiler").warn(
          "getStackIdToSampleIdMap throws %s",
          l.message,
        );
      }
      return t;
    }
    function b(e, t) {
      for (var n of t) e.add(n);
      return e;
    }
    async function v(t) {
      return await new Promise(function (n) {
        (e || (e = o("JSScheduler"))).scheduleNormalPriCallback(function () {
          n(t());
        });
      });
    }
    function S(e, t) {
      var n = new Set(e);
      for (var r of t) n.add(r);
      return Array.from(n);
    }
    ((l.renameFunctionWithStaticName_BeCareful = r(
      "renameFunctionWithStaticName_BeCareful",
    )),
      (l.getProfilerInitConfig = p),
      (l.addMarkerToSample = f),
      (l.addAnnotationToTrace = g),
      (l.getStackFrameName = h),
      (l.getSampleIdToDepthsMap = y),
      (l.getStackIdToSampleIdMap = C),
      (l.mergeSets = b),
      (l.nextEventLoop = v),
      (l.mergeList = S));
  },
  98,
);
