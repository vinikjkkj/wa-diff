__d(
  "WAWebBizOrderGetFriendlyRandomIdAction",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = typeof BigInt == "function" ? BigInt : Number;
      return e(String(Date.now()) + Math.random().toFixed(4).slice(-4))
        .toString(36)
        .toUpperCase();
    }
    i.default = e;
  },
  66,
);
