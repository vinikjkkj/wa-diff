__d(
  "JSSPStackFrameFilterBase",
  [
    "FBLogger",
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = -1,
      s = (function (t) {
        function a() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getTraceAnnotation = function () {
            return "simplified";
          }),
          (i.getStackIdsToRemove = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  r("FBLogger")("JSSelfProfiler").warn(
                    "JSSPStackFrameFilterBase.getStackIdsToRemove should be overridden.",
                  ),
                  new Set()
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.transform = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                for (
                  var n = yield this.getStackIdsToRemove(t),
                    a = yield this.getSampleIdsWithFramesRemoved(t, n),
                    i = new Map(),
                    l = new Map(),
                    s = t.stacks,
                    u = [],
                    c = 0,
                    d = 0,
                    m = 0;
                  c < s.length;
                ) {
                  var p = s[c];
                  (n.has(c)
                    ? (p.parentId != null && l.set(c, p.parentId), ++m)
                    : (u.push(p), i.set(c, d++)),
                    ++c);
                }
                for (var _ of l.keys()) {
                  var f,
                    g = (f = l.get(_)) != null ? f : e;
                  if (g === e) {
                    l.delete(_);
                    continue;
                  }
                  for (var h = new Set(); l.has(g); ) {
                    var y = l.get(g);
                    if (y == null || y === e) {
                      l.delete(g);
                      break;
                    }
                    if (h.has(g)) break;
                    (h.add(g), (g = y));
                  }
                  g !== e ? l.set(_, g) : l.delete(_);
                }
                for (var C of l.keys()) {
                  var b,
                    v = (b = l.get(C)) != null ? b : e;
                  if (v === e) {
                    l.delete(C);
                    continue;
                  }
                  var S = i.get(v);
                  S != null ? l.set(C, S) : l.delete(C);
                }
                (u.forEach(function (t) {
                  if (t.parentId != null) {
                    if (i.has(t.parentId)) t.parentId = i.get(t.parentId);
                    else if (l.has(t.parentId)) {
                      var n = l.get(t.parentId);
                      n === e ? delete t.parentId : (t.parentId = n);
                    } else delete t.parentId;
                    t.parentId === e && delete t.parentId;
                  }
                }),
                  (t.stacks = u));
                var R = this.getTraceAnnotation();
                if (
                  ((t.samples = t.samples
                    .map(function (e, t) {
                      return (
                        a.has(t) &&
                          o("JSSelfProfilerUtils").addMarkerToSample(e, R),
                        e
                      );
                    })
                    .filter(function (e) {
                      return e.stackId != null && i.has(e.stackId);
                    })
                    .map(function (e) {
                      var t;
                      return (
                        (e.stackId = i.get((t = e.stackId) != null ? t : 0)),
                        e
                      );
                    })),
                  r("gkx")("962"))
                ) {
                  var L = ((m / s.length) * 100).toFixed(2);
                  "" + m + L;
                }
                return t;
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getSampleIdsWithFramesRemoved = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o("JSSelfProfilerUtils").getStackIdToSampleIdMap(e),
                  r = new Set();
                for (var a of t)
                  if (n.has(a)) {
                    var i;
                    r.add((i = n.get(a)) != null ? i : -1);
                  }
                return r;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = s;
  },
  98,
);
