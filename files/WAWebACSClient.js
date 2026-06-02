__d(
  "WAWebACSClient",
  [
    "ACSClient",
    "ACSClientBuilder",
    "WAWebACSServerProvider",
    "WAWebACSStorageManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t, n) {
      n === void 0 && (n = "");
      var r = t + ":" + n,
        a = e.get(r);
      return (
        a == null &&
          ((a = o("ACSClientBuilder").buildACSClient(
            t,
            n,
            new (o("WAWebACSServerProvider").WAWebACSServerProvider)(),
            new (o("WAWebACSStorageManager").WAWebACSStorageManager)(),
          )),
          e.set(r, a)),
        a
      );
    }
    async function u(e) {
      var t = await s(e);
      return o("ACSClient").fetchAndRedeem(t, new Uint8Array(0), !0);
    }
    l.redeemWithAPTClient = u;
  },
  98,
);
