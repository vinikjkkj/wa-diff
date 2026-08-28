__d(
  "ZenonLSE2EEStore",
  ["ZenonGenericLocalStorageStore", "ZenonLSE2EEStatsManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "localstorage",
      s = "RTC_LS_E2EE_STATS_",
      u = "ls_e2ee_stats",
      c = 3,
      d = (function (t) {
        function n() {
          return t.call(this, u, e, s) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.retrieveE2eeStats = function (t, n) {
            var e = this.getLocalStorageObjects(),
              o = e[t] ? e[t][n] : null;
            return o
              ? r("ZenonLSE2EEStatsManager").fromJsonString(o.__d)
              : null;
          }),
          (o.storeE2eeStats = function (t, n, r) {
            this.mutateLocalStorageObjects(
              function (e) {
                return (
                  e[t] || (e[t] = {}),
                  (e[t][n] = {
                    __d: r.toJsonString(),
                    __t: Date.now(),
                    __z: !0,
                  }),
                  e
                );
              },
              c,
              !1,
              { peerID: t, signalingID: n },
            );
          }),
          n
        );
      })(r("ZenonGenericLocalStorageStore")),
      m = new d();
    l.ZenonLSE2EEStoreInstance = m;
  },
  98,
);
