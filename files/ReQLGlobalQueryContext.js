__d(
  "ReQLGlobalQueryContext",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {};
    function l(t) {
      return t.get(e);
    }
    function s(t, n) {
      t.set(e, n);
    }
    var u = { contents: void 0, withinSupportedContext: !1 };
    function c(e) {
      var t = u.withinSupportedContext;
      u.withinSupportedContext = !0;
      try {
        return e();
      } finally {
        u.withinSupportedContext = t;
      }
    }
    ((i.getDependencies = l),
      (i.setDependencies = s),
      (i.globalQueryContext = u),
      (i.runFromContextThatHandlesThrownPromise = c));
  },
  66,
);
