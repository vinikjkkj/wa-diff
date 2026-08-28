__d(
  "ZenonLastCallStore",
  ["ZenonAppProvider", "ZenonGenericLocalStorageStore", "ZenonLastCall"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "localstorage",
      s = 3,
      u = (function (t) {
        function n() {
          return (
            t.call(
              this,
              o("ZenonLastCall").STORAGE_KEY,
              e,
              o("ZenonLastCall").STORAGE_PREFIX,
            ) || this
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.isAllowedApp = function () {
            return o("ZenonAppProvider").isMessengerWebApp();
          }),
          (r.storeCallIdentifiers = function (t, n, r) {
            this.isAllowedApp() &&
              this.mutateLocalStorageObjects(
                function (e) {
                  var o, a;
                  return (
                    (a = {}),
                    (a[t] =
                      ((o = {}),
                      (o[n] = {
                        __d: r.toJSONString(),
                        __t: Date.now(),
                        __z: !0,
                      }),
                      o)),
                    a
                  );
                },
                s,
                !1,
                { peerID: t, signalingID: n },
              );
          }),
          n
        );
      })(r("ZenonGenericLocalStorageStore")),
      c = new u();
    l.ZenonLastCallStoreInstance = c;
  },
  98,
);
