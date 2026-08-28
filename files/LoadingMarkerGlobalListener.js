__d(
  "LoadingMarkerGlobalListener",
  [
    "invariant",
    "AdsSpeedConfig",
    "LoadingMarkerListener",
    "ShowLoadingMarkerMode",
    "UserTimingUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new (r("LoadingMarkerListener"))({
        generalRate: 0,
        cssStackRate: 0,
        contextRate: 0,
        reactStackRate: 0,
      }),
      u = [];
    function c(e) {
      u.forEach(function (t) {
        return t(e);
      });
    }
    var d = [];
    function m(e, t) {
      d.forEach(function (n) {
        return n(e, t);
      });
    }
    var p = [];
    function _(e) {
      p.forEach(function (t) {
        return t(e);
      });
    }
    var f = [];
    function g(e, t) {
      f.forEach(function (n) {
        return n(e, t);
      });
    }
    var h = e;
    function y(t) {
      (h === e || s(0, 1182),
        (h = t),
        t.subscribe(c, m),
        t.subscribeComponentLifeCycle(_, g),
        (o("ShowLoadingMarkerMode").isEnabled() ||
          o("AdsSpeedConfig").isDevToolsTimingEnabled()) &&
          b(
            function (t) {
              var e,
                n = (e = t.name) != null ? e : "[unknown]";
              (o("ShowLoadingMarkerMode").isEnabled() && "" + n,
                o("UserTimingUtils").measureStart(t.id));
            },
            function (t, n) {
              var e,
                r = (e = t.name) != null ? e : "[unknown]";
              (o("ShowLoadingMarkerMode").isEnabled() && "" + r,
                o("UserTimingUtils").measureEnd("\u23F3 " + r + " ", t.id));
            },
          ));
    }
    function C() {
      return h;
    }
    function b(e, t) {
      return (
        u.push(e),
        d.push(t),
        function () {
          var n = u.indexOf(e);
          n > -1 && u.splice(n, 1);
          var r = d.indexOf(t);
          r > -1 && d.splice(r, 1);
        }
      );
    }
    function v(e, t) {
      return (
        p.push(e),
        f.push(t),
        function () {
          if (e != null) {
            var n = p.indexOf(e);
            n > -1 && p.splice(n, 1);
          }
          if (t != null) {
            var r = f.indexOf(t);
            r > -1 && f.splice(r, 1);
          }
        }
      );
    }
    ((l.set = y),
      (l.get = C),
      (l.subscribe = b),
      (l.subscribeComponentLifeCycle = v));
  },
  98,
);
