__d(
  "WAAlignChunkLengthsToMultipleOfAesBlockSize",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return parseInt((e + 15) / 16, 10) * 16;
    }
    function l(t, n) {
      for (var r = [], o = 0, a = 0, i = 0, l = 0; l < t.length; ++l)
        if (((o += t[l]), l === t.length - 1 && n != null && n > 0)) {
          o > a ? r.push(n - a) : (r.pop(), r.push(n - i));
          break;
        } else if (o > a) {
          var s = e(o - a);
          ((i = a), r.push(s), (a += s));
        }
      return r;
    }
    ((i.alignChunkSizeToMultipleAesBlockSize = e),
      (i.alignChunkLengthsToMultipleOfAesBlockSize = l));
  },
  66,
);
