__d(
  "WAWebACSClient",
  [
    "ACSClient",
    "WAWebACSServerProvider",
    "WAWebACSStorageManager",
    "asyncToGeneratorRuntime",
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
          ((a = o("ACSClient").buildACSClient(
            t,
            n,
            new (o("WAWebACSServerProvider").WAWebACSServerProvider)(),
            new (o("WAWebACSStorageManager").WAWebACSStorageManager)(),
          )),
          e.set(r, a)),
        a
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield s(e);
          return o("ACSClient").fetchAndRedeem(t, new Uint8Array(0), !0);
        })),
        c.apply(this, arguments)
      );
    }
    l.redeemWithAPTClient = u;
  },
  98,
);
