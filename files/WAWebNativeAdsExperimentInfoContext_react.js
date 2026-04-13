__d(
  "WAWebNativeAdsExperimentInfoContext.react",
  ["FBLogger", "Promise", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useSyncExternalStore,
      p = { isEligibleForMVPQE2: !1 },
      _ = new Set();
    function f(e) {
      return (
        _.add(e),
        function () {
          _.delete(e);
        }
      );
    }
    function g() {
      _.forEach(function (e) {
        return e();
      });
    }
    function h(e) {
      ((p = e), g());
    }
    function y() {
      return p;
    }
    function C() {
      return (e || (e = n("Promise"))).resolve(null);
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(1),
        n = e.children,
        r;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = []), (t[0] = r))
          : (r = t[0]),
        d(v, r),
        n
      );
    }
    function v() {
      C().then(R).catch(S);
    }
    function S(e) {
      r("FBLogger")("wa_ctwa_web")
        .catching(e)
        .warn(
          "WAWebNativeAdsExperimentInfoContext: could not fetch native ads experiment info",
        );
    }
    function R(e) {
      e != null && h(e);
    }
    function L() {
      return m(f, y);
    }
    ((l.setNativeAdsExperimentInfo = h),
      (l.getNativeAdsExperimentInfo = y),
      (l.NativeAdsExperimentInfoProvider = b),
      (l.useNativeAdsExperimentInfo = L));
  },
  98,
);
