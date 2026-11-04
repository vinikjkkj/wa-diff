__d(
  "JSSelfProfilerUtils",
  [
    "CurrentUser",
    "FBLogger",
    "JSScheduler",
    "JSSelfProfilerConfig.experimental",
    "Promise",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "renameFunctionWithStaticName_BeCareful",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = ":",
      c = null;
    function d() {
      if (c == null) {
        var e;
        c =
          (e = r("JSSelfProfilerConfig.experimental").PROFILER_CONFIG) != null
            ? e
            : [];
      }
      return c;
    }
    var m = null;
    function p() {
      if (m == null) {
        var e;
        m =
          (e = d().find(function (e) {
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
      return m;
    }
    function _() {
      var e,
        t = r("CurrentUser").getAppID(),
        n =
          (e = d().find(function (e) {
            return e.app_id === t;
          })) != null
            ? e
            : p();
      return {
        sampleInterval: n.sample_interval,
        maxBufferSize: n.max_buffer_size,
      };
    }
    function f(e, t) {
      if (t === "") return e;
      if (e == null || e === "") return t;
      if (t.includes(u))
        return (
          r("FBLogger")("JSSelfProfiler").warn(
            "addJSSPSampleMarker: marker %s contains %s the marker split character",
            t,
            u,
          ),
          e
        );
      var n = new Set(e.split(u));
      return (n.add(t), Array.from(n).sort().join(u));
    }
    function g(e, t) {
      var n = f(e.marker, t);
      n != null && (e.marker = n);
    }
    function h(e, t, n) {
      var r;
      e.metadata == null && (e.metadata = {});
      var o = e.metadata;
      o.jsspAnnotations = (r = o.jsspAnnotations) != null ? r : "{}";
      var a = JSON.parse(o.jsspAnnotations);
      ((a[t] = n), (o.jsspAnnotations = JSON.stringify(a, null, 0)));
    }
    function y(e, t) {
      var n = t.frames[e.frameId];
      return n == null ? void 0 : n.name;
    }
    function C(e) {
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
    function b(e) {
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
    function v(e, t) {
      for (var n of t) e.add(n);
      return e;
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return yield new (s || (s = n("Promise")))(function (n) {
            (e || (e = o("JSScheduler"))).scheduleNormalPriCallback(
              function () {
                n(t());
              },
            );
          });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      var n = new Set(e);
      for (var r of t) n.add(r);
      return Array.from(n);
    }
    ((l.renameFunctionWithStaticName_BeCareful = r(
      "renameFunctionWithStaticName_BeCareful",
    )),
      (l.getProfilerInitConfig = _),
      (l.addMarkerToSample = g),
      (l.addAnnotationToTrace = h),
      (l.getStackFrameName = y),
      (l.getSampleIdToDepthsMap = C),
      (l.getStackIdToSampleIdMap = b),
      (l.mergeSets = v),
      (l.nextEventLoop = S),
      (l.mergeList = L));
  },
  98,
);
