__d(
  "ZenonProductConnectFunnelStore",
  ["ZenonGenericLocalStorageStore", "ZenonProductConnectFunnelManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "localstorage",
      s = "RTC_PRODUCT_CONNECT_FUNNEL_",
      u = "product_connect_funnel",
      c = 3,
      d = (function (t) {
        function n() {
          return t.call(this, u, e, s) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.retrieveFunnel = function (t, n) {
            var e,
              o = this.getLocalStorageObjects(),
              a = (e = o[t]) == null ? void 0 : e[n];
            return a == null
              ? null
              : r("ZenonProductConnectFunnelManager").fromJsonString(a.__d);
          }),
          (o.storeFunnel = function (t, n, r) {
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
    l.ZenonProductConnectFunnelStoreInstance = m;
  },
  98,
);
