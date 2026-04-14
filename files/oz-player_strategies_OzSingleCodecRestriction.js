__d(
  "oz-player/strategies/OzSingleCodecRestriction",
  ["vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.applyRestriction = function (t) {
          if ((r("vulture")("N4nIM_w3-xkqXi2z4SaCmSupJ3k="), t.length <= 0))
            return t.slice();
          var e = new Set(
              t.map(function (e) {
                return s(e);
              }),
            ),
            n = "av01",
            o = e.has(n) ? n : e.values().next().value;
          return o == null
            ? t.slice()
            : t.filter(function (e) {
                return s(e) === o;
              });
        }),
        e
      );
    })();
    function s(e) {
      return e.getMimeCodecs().replace(/\..*$/, "");
    }
    l.default = e;
  },
  98,
);
