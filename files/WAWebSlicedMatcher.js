__d(
  "WAWebSlicedMatcher",
  ["WAWebTimeSlicedRunner", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.sortResults != null ? e.sortResults(t) : t;
    }
    function s(e, t) {
      return e.isTimedOut() ? !0 : e.limit != null && t >= e.limit;
    }
    function u(t) {
      var n = [];
      for (var r of t.candidates) {
        if (s(t, n.length)) break;
        var o = t.matchOne(r);
        o != null && n.push(o);
      }
      return e(t, n);
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = Array.from(t.candidates),
            a = [];
          return (
            yield o("WAWebTimeSlicedRunner").runTimeSliced(
              r,
              function (e) {
                if (s(t, a.length)) return !1;
                var n = t.matchOne(e);
                n != null && a.push(n);
              },
              { signal: n },
            ),
            (n == null ? void 0 : n.aborted) === !0 ? [] : e(t, a)
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e();
          return n == null ? [] : c(n, t);
        })),
        p.apply(this, arguments)
      );
    }
    ((l.drainMatcherSync = u), (l.searchFuzzyAsync = m));
  },
  98,
);
