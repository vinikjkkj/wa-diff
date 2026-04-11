__d(
  "WABidi",
  ["WABidiRangeData"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e, l;
    function s() {
      if (!e) {
        var t = n("WABidiRangeData").DATA,
          r = t.length / 2;
        ((e = new Int32Array(r)), (l = new Int32Array(r)));
        for (var o = 0, a = 0; o < r; o++, a += 2)
          ((e[o] = t[a] + (o === 0 ? 0 : e[o - 1])), (l[o] = t[a + 1]));
      }
    }
    function u(t) {
      s();
      for (var n = 0; n < t.length; n++) {
        var r = t.charCodeAt(n) | 0;
        if (55296 <= r && r < 56320) {
          if (++n === t.length) break;
          var o = t.charCodeAt(n);
          if (56320 <= o && o < 57344)
            r = 65536 + (((r & 1023) << 10) | (o & 1023));
          else continue;
        } else if (56320 <= r && r < 57344) continue;
        if (!(r < e[0])) {
          for (var a = e.length | 0, i = 0, u = (a - 1) | 0; i < u; ) {
            var c = (u + i) >> 1;
            if (e[c] > r) u = (c - 1) | 0;
            else if (e[c + 1] > r) {
              u = c;
              break;
            } else i = (c + 1) | 0;
          }
          var d = l[u],
            m = (e[u] + Math.abs(d)) | 0;
          if (r < m) return d < 0 ? "rtl" : "ltr";
        }
      }
    }
    i.dir = u;
  },
  66,
);
