__d(
  "WAWebInAppSignupInfoCache",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map();
    function l(t) {
      var n;
      return (n = e.get(t)) != null ? n : null;
    }
    function s(t, n) {
      var r;
      return babelHelpers.extends({}, (r = e.get(t)) != null ? r : {}, n, {
        id: t,
      });
    }
    function u(t) {
      e.set(t.id, t);
    }
    function c(t) {
      for (var n of t) e.set(n.id, n);
    }
    function d() {
      e.clear();
    }
    ((i.getInAppSignupInfo = l),
      (i.buildMergedInAppSignupInfoRow = s),
      (i.setInAppSignupInfo = u),
      (i.primeInAppSignupInfoCache = c),
      (i.clearInAppSignupInfoCache = d));
  },
  66,
);
