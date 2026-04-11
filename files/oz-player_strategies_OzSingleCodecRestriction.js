__d(
  "oz-player/strategies/OzSingleCodecRestriction",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.applyRestriction = function (t) {
          if (t.length <= 0) return t.slice();
          var e = new Set(
              t.map(function (e) {
                return l(e);
              }),
            ),
            n = "av01",
            r = e.has(n) ? n : e.values().next().value;
          return r == null
            ? t.slice()
            : t.filter(function (e) {
                return l(e) === r;
              });
        }),
        e
      );
    })();
    function l(e) {
      return e.getMimeCodecs().replace(/\..*$/, "");
    }
    i.default = e;
  },
  66,
);
