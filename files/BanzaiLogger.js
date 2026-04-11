__d(
  "BanzaiLogger",
  ["cr:9989"],
  function (t, n, r, o, a, i, l) {
    function e(t) {
      return {
        log: function (r, o) {
          n("cr:9989").post("logger:" + r, o, t);
        },
        create: e,
      };
    }
    var s = e(),
      u = s;
    l.default = u;
  },
  98,
);
