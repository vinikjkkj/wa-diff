__d(
  "JSSPReactFrameDedupFilter",
  [
    "JSSPStackFrameFilterBase",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.$JSSPReactFrameDedupFilter$p_1 = new Set(t)),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var r = t.prototype;
      return (
        (r.getStackIdsToRemove = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = new Set();
            return (
              o("JSSelfProfilerUtils").mergeSets(
                t,
                yield this.getStackIdsInBlockList(e),
              ),
              o("JSSelfProfilerUtils").mergeSets(
                t,
                yield this.getStackIdsInRepetitivePatterns(e),
              ),
              t
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.getStackIdsInBlockList = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            for (var t = new Set(), n = e.stacks, r = 0; r < n.length; ++r) {
              var a = n[r],
                i = o("JSSelfProfilerUtils").getStackFrameName(a, e);
              i != null &&
                this.$JSSPReactFrameDedupFilter$p_1.has(i) &&
                t.add(r);
            }
            return t;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.getStackIdsInRepetitivePatterns = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            for (
              var t = new Set(), n = e.samples, r = e.stacks, o = 0;
              o < n.length;
              ++o
            )
              for (
                var a,
                  i,
                  l = new Set(),
                  s = n[o],
                  u =
                    (a = r[(i = s.stackId) != null ? i : -1]) == null
                      ? void 0
                      : a.parentId;
                u != null;
              ) {
                var c, d, m, p, _, f, g, h, y, C, b, v, S, R;
                if (l.has(u)) break;
                var L = (c = r[u].frameId) != null ? c : -1,
                  E =
                    (d = (m = r[u]) == null ? void 0 : m.parentId) != null
                      ? d
                      : -2,
                  k =
                    (p = (_ = r[E]) == null ? void 0 : _.frameId) != null
                      ? p
                      : -3,
                  I =
                    (f = (g = r[E]) == null ? void 0 : g.parentId) != null
                      ? f
                      : -4,
                  T =
                    (h = (y = r[I]) == null ? void 0 : y.frameId) != null
                      ? h
                      : -5,
                  D =
                    (C = (b = r[I]) == null ? void 0 : b.parentId) != null
                      ? C
                      : -6,
                  x =
                    (v = (S = r[D]) == null ? void 0 : S.frameId) != null
                      ? v
                      : -7;
                if (L === T && k === x && L !== k) {
                  var $;
                  (t.add(u),
                    t.add(E),
                    l.add(E),
                    (u = ($ = r[u].parentId) != null ? $ : -1));
                }
                (l.add(u), (u = (R = r[u]) == null ? void 0 : R.parentId));
              }
            return t;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(r("JSSPStackFrameFilterBase"));
    l.default = e;
  },
  98,
);
