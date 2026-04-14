__d(
  "WAWebNativeAdsExperimentInfoContext.react",
  ["FBLogger", "Promise", "react"],
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
      var t = e.children;
      return (
        d(function () {
          C()
            .then(function (e) {
              e != null && h(e);
            })
            .catch(function (e) {
              r("FBLogger")("wa_ctwa_web")
                .catching(e)
                .warn(
                  "WAWebNativeAdsExperimentInfoContext: could not fetch native ads experiment info",
                );
            });
        }, []),
        t
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return m(f, y);
    }
    ((l.setNativeAdsExperimentInfo = h),
      (l.getNativeAdsExperimentInfo = y),
      (l.NativeAdsExperimentInfoProvider = b),
      (l.useNativeAdsExperimentInfo = v));
  },
  98,
);
