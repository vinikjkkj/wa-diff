__d(
  "MosUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e === 0 || t === 0) return 0;
      var n = e < t ? t : e,
        r = e < t ? e : t,
        o = n / r;
      return o > 16 / 9 ? Math.round(n / (16 / 9)) : r;
    }
    function l(e, t) {
      for (
        var n = null, r = null, o = null, a = null, i = 0;
        i < e.length;
        i++
      ) {
        var l = e[i].qualityLabel;
        if (l <= t) ((o = e[i].mosValue), (n = l));
        else {
          ((a = e[i].mosValue), (r = l));
          break;
        }
      }
      if (n === null && r === null) return 0;
      if (n === null && a !== null) return a;
      if (r === null && o !== null) return o;
      if (a !== null && o !== null && n !== null && r !== null) {
        var s = o + ((t - n) * (a - o)) / (r - n);
        return s < 0 ? 0 : s > 100 ? 100 : s;
      }
      return 0;
    }
    function s(e) {
      for (var t = e.split(","), n = [], r = 0; r < t.length; r++) {
        var o = t[r].split(":");
        if (o.length !== 2) return null;
        var a = Number(o[0]),
          i = Number(o[1]);
        if (isNaN(a) || isNaN(i)) return null;
        n.push({ qualityLabel: a, mosValue: i });
      }
      return n;
    }
    ((i.getQualityLabel = e), (i.getMosValue = l), (i.parsePlaybackMos = s));
  },
  66,
);
