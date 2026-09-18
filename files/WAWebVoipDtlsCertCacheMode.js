__d(
  "WAWebVoipDtlsCertCacheMode",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      OFF: 0,
      RECONNECT_ONLY: 1,
      ALL: 2,
      ALL_WITH_PREWARM: 3,
    });
    function l(t) {
      var n;
      return (n = e.cast(t)) != null ? n : e.OFF;
    }
    function s(t, n) {
      return t === e.OFF
        ? !1
        : t === e.RECONNECT_ONLY
          ? n === "same_path_reconnect" || n === "ice_restart"
          : t === e.ALL || t === e.ALL_WITH_PREWARM
            ? !0
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
    }
    function u(t) {
      return t === e.OFF || t === e.RECONNECT_ONLY
        ? !1
        : t === e.ALL || t === e.ALL_WITH_PREWARM
          ? !0
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            })();
    }
    function c(t) {
      return t === e.ALL_WITH_PREWARM;
    }
    ((i.DtlsCertCacheMode = e),
      (i.dtlsCertCacheModeFromInt = l),
      (i.isCertReuseEnabledForPath = s),
      (i.canGenerateSharedCert = u),
      (i.isCertPrewarmEnabled = c));
  },
  66,
);
