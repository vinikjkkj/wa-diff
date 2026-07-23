__d(
  "CometHistoryManager",
  ["CometHistoryManagerStack", "buildCometHistory", "createRouteKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      var s = l != null ? l : r("buildCometHistory")();
      i != null &&
        s.setOnNavigationHandler(function () {
          f(function () {
            return i();
          });
        });
      var u = [],
        c = o("CometHistoryManagerStack").createStack(
          t,
          function () {
            return n(s);
          },
          a,
        );
      (s.setScrollRestoration(e.scrollRestorationBehavior),
        s.replaceState(t[0], t[2]));
      function d() {
        var e,
          t = u.splice(0, 1);
        (e = t[0]) == null || e.call(t);
      }
      function m(e) {
        var t = c.getCurrentEntry().index,
          n = e - t;
        s.go(n);
      }
      function p(e, t) {
        (c.getTopEntry().entry.routeStep > 0 &&
          !t &&
          u.push(function () {
            return m(c.getLastStepZeroEntry().index);
          }),
          u.push(function () {
            var n = c.getCurrentEntry().index;
            (c.pushAtIndex(n + 1, e, t), s.pushState(e[0], e[2]));
          }),
          d());
      }
      function _(e, t) {
        (c.getTopEntry().entry.routeStep > 0 &&
          !t &&
          u.push(function () {
            return m(c.getLastStepZeroEntry().index);
          }),
          u.push(function () {
            var n = c.getCurrentEntry().index;
            (c.pushAtIndex(n, e, t), s.replaceState(e[0], e[2]));
          }),
          d());
      }
      function f(e) {
        if (u.length > 0) return d();
        var t = c.getCurrentEntry(),
          n = c.getLastStepZeroEntry();
        (t.index < n.index &&
          c.getTopEntry().entry.routeStep > 0 &&
          (u.push(function () {
            return m(n.index);
          }),
          u.push(function () {
            var e = [].concat(n.entry.params);
            ((e[2] = "#"),
              c.pushAtIndex(n.index + 1, e, !0),
              s.pushState(e[0], e[2]),
              m(t.index));
          })),
          u.push(e),
          d());
      }
      function g() {
        return c.getCurrentEntry().entry.routeStep;
      }
      return {
        back: s.back,
        forward: s.forward,
        getCurrentRouteStep: g,
        getState: s.getState,
        go: s.go,
        pushState: p,
        replaceState: _,
      };
    }
    function s(e) {
      var t;
      return (t = e.getState()) != null ? t : { key: r("createRouteKey")() };
    }
    function u(e, t) {
      return e.key === t.key;
    }
    function c(t, n, r, o) {
      return e(t, n, s, u, r, o);
    }
    l.createHistoryManager = c;
  },
  98,
);
