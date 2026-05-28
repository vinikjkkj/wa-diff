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
    function p() {
      return u;
    }
    function _() {
      return s(d, p);
    }
    ((l.notifyFBIdentityChanged = m), (l.useStoredFBIdentity = _));
  },
  98,
);
