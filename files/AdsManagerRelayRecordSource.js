__d(
  "AdsManagerRelayRecordSource",
  ["Random", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("relay-runtime").RecordSource)();
    function s() {
      return e.size();
    }
    var u = 100;
    function c() {
      try {
        var t = e.getRecordIDs(),
          n = t.length;
        if (n === 0) return 0;
        if (n <= u) {
          var o = 0;
          for (var a of t) {
            var i = e.get(a);
            if (i != null) {
              var l;
              o += ((l = JSON.stringify(i)) != null ? l : "").length;
            }
          }
          return o;
        }
        for (var s = 0, c = 0; c < u; c++) {
          var d = Math.floor((c * n) / u),
            m = Math.floor(((c + 1) * n) / u),
            p = e.get(t[r("Random").intBetween(d, m - 1)]);
          if (p != null) {
            var _;
            s += (m - d) * ((_ = JSON.stringify(p)) != null ? _ : "").length;
          }
        }
        return Math.round(s);
      } catch (e) {
        return null;
      }
    }
    ((l.source = e),
      (l.getRelayRecordSourceSize = s),
      (l.getRelayStoreJsonLength = c));
  },
  98,
);
