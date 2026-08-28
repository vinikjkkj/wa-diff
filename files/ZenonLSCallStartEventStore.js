__d(
  "ZenonLSCallStartEventStore",
  ["ZenonGenericLocalStorageStore", "ZenonLSCallStartEventManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "localstorage",
      s = "RTC_LS_CALL_START_",
      u = "ls_call_start",
      c = 3,
      d = (function (t) {
        function n() {
          return t.call(this, u, e, s) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.retrieveCallStartEventManager = function (t, n) {
            var e = this.getLocalStorageObjects(),
              o = e[t] ? e[t][n] : null;
            return o
              ? r("ZenonLSCallStartEventManager").fromJsonString(o.__d)
              : null;
          }),
          (o.storeCallStartEventManager = function (t, n, r) {
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
    l.ZenonLSCallStartEventStoreInstance = m;
  },
  98,
);
