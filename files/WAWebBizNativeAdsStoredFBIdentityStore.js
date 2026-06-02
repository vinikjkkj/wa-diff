__d(
  "WAWebBizNativeAdsStoredFBIdentityStore",
  ["WAWebUserPrefsCTWA", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = o("WAWebUserPrefsCTWA").getFBIdentity(),
      c = new Set();
    function d(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function m() {
      ((u = o("WAWebUserPrefsCTWA").getFBIdentity()),
        c.forEach(function (e) {
          return e();
        }));
    }
    function p(e) {
      (o("WAWebUserPrefsCTWA").setFbIdentity(e), m());
    }
    function _() {
      (o("WAWebUserPrefsCTWA").clearFBIdentity(), m());
    }
    function f() {
      return u;
    }
    function g() {
      return s(d, f);
    }
    ((l.storeFBIdentity = p),
      (l.clearStoredFBIdentity = _),
      (l.useStoredFBIdentity = g));
  },
  98,
);
