__d(
  "JSSPStackFrameFilterBase",
  ["FBLogger", "JSSPTraceBaseTransformer", "JSSelfProfilerUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = -1,
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getTraceAnnotation = function () {
            return "simplified";
          }),
          (a.getStackIdsToRemove = async function (t) {
            return (
              r("FBLogger")("JSSelfProfiler").warn(
                "JSSPStackFrameFilterBase.getStackIdsToRemove should be overridden.",
              ),
              new Set()
            );
          }),
          (a.transform = async function (n) {
            for (
              var t = await this.getStackIdsToRemove(n),
                a = await this.getSampleIdsWithFramesRemoved(n, t),
                i = new Map(),
                l = new Map(),
                s = n.stacks,
                u = [],
                c = 0,
                d = 0,
                m = 0;
              c < s.length;
            ) {
              var p = s[c];
              (t.has(c)
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
              (n.stacks = u));
            var R = this.getTraceAnnotation();
            if (
              ((n.samples = n.samples
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
            return n;
          }),
          (a.getSampleIdsWithFramesRemoved = async function (t, n) {
            var e = o("JSSelfProfilerUtils").getStackIdToSampleIdMap(t),
              r = new Set();
            for (var a of n)
              if (e.has(a)) {
                var i;
                r.add((i = e.get(a)) != null ? i : -1);
              }
            return r;
          }),
          n
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = s;
  },
  98,
);
