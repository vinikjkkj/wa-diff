__d(
  "WAWebACSClient",
  [
    "ACSCachedTokenModule",
    "ACSClient",
    "ACSClientBuilderWasmV3",
    "WAWebACSServerProvider",
    "WAWebACSStorageManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t, n) {
      n === void 0 && (n = "");
      var r = d(t, n),
        a = e.get(r);
      return (
        a == null &&
          ((a = o("ACSClientBuilderWasmV3")
            .buildACSClient(
              t,
              n,
              new (o("WAWebACSServerProvider").WAWebACSServerProvider)(),
              new (o("WAWebACSStorageManager").WAWebACSStorageManager)(
                r,
                o("ACSCachedTokenModule").isCachedTokenRedeemable,
              ),
            )
            .catch(function (t) {
              throw (e.delete(r), t);
            })),
          e.set(r, a)),
        a
      );
    }
    async function u(e) {
      var t = await s(e);
      return o("ACSClient").fetchAndRedeem(t, new Uint8Array(0), !0);
    }
    function c(e) {
      new (o("WAWebACSStorageManager").WAWebACSStorageManager)(
        d(e),
        o("ACSCachedTokenModule").isCachedTokenRedeemable,
      ).clearStorage();
    }
    function d(e, t) {
      return (t === void 0 && (t = ""), e + ":" + t);
    }
    ((l.redeemWithAPTClient = u), (l.clearAPTClientStorage = c));
  },
  98,
);
