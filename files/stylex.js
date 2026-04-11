__d(
  "stylex",
  [
    "CometStyleXSheet",
    "ExecutionEnvironment",
    "gkx",
    "stylex-inject",
    "stylex-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    !r("gkx")("21107") &&
      !(s || (s = r("ExecutionEnvironment"))).isInWorker &&
      o("CometStyleXSheet").rootStyleSheet.injectTheme();
    function u(e) {
      for (var t = e.reverse(), n = {}; t.length; ) {
        var r = t.pop();
        if (Array.isArray(r)) {
          for (var o = r.length - 1; o >= 0; o--) t.push(r[o]);
          continue;
        }
        var a = r;
        if (a != null && typeof a == "object")
          for (var i in a) {
            var l = a[i];
            if (typeof l == "string") n[i] = l;
            else if (typeof l == "object") {
              var s;
              ((n[i] = (s = n[i]) != null ? s : {}), Object.assign(n[i], l));
            }
          }
      }
      return n;
    }
    function c() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return u(t);
    }
    function d() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return (e || (e = o("stylex-runtime"))).legacyMerge(n);
    }
    ((d.compose = c),
      (d.create = (e || (e = o("stylex-runtime"))).legacyMerge.create),
      (d.firstThatWorks = e.legacyMerge.firstThatWorks),
      (d.inject = r("stylex-inject")),
      (d.keyframes = e.legacyMerge.keyframes),
      (d.props = e.legacyMerge.props),
      (d.defineConsts = e.legacyMerge.defineConsts),
      (d.defineVars = e.legacyMerge.defineVars),
      (d.createTheme = e.legacyMerge.createTheme),
      (d.viewTransitionClass = e.legacyMerge.viewTransitionClass),
      (d.positionTry = e.legacyMerge.positionTry),
      (d.types = e.legacyMerge.types),
      (d.when = e.legacyMerge.when),
      (d.defaultMarker = e.legacyMerge.defaultMarker),
      (d.defineMarker = e.legacyMerge.defineMarker));
    var m = d;
    l.default = m;
  },
  102,
);
