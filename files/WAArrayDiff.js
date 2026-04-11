__d(
  "WAArrayDiff",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n) {
        for (
          var e = t.length,
            r = n.length,
            o = Array(e + 1)
              .fill()
              .map(function () {
                return Array(r + 1).fill(0);
              }),
            a = 1;
          a < e + 1;
          a++
        )
          for (var i = 1; i < r + 1; i++)
            t[a - 1] === n[i - 1]
              ? (o[a][i] = o[a - 1][i - 1] + 1)
              : (o[a][i] = Math.max(o[a - 1][i], o[a][i - 1]));
        return o;
      },
      l = function (t, n, r) {
        for (
          var e = n.length,
            o = r.length,
            a = { sequence: [], indices1: [], indices2: [] };
          e !== 0 && o !== 0;
        ) {
          var i = n[e - 1] === r[o - 1];
          if (i)
            (a.sequence.unshift(n[e - 1]),
              a.indices1.unshift(e - 1),
              a.indices2.unshift(o - 1),
              --e,
              --o);
          else {
            var l = t[e][o - 1],
              s = t[e - 1][o];
            l > s ? --o : --e;
          }
        }
        return a;
      },
      s = function (n, r) {
        var t = e(n, r);
        return l(t, n, r);
      },
      u = function (t, n) {
        for (
          var e = 0, r = 0, o = t.length, a = n.length;
          e < o && e < a && t[e] === n[e];
        )
          e++;
        for (; r + e < o && r + e < a && t[o - 1 - r] === n[a - 1 - r]; ) r++;
        return { commonHead: e, commonTail: r };
      },
      c = function (t, n) {
        var e = { moved: [], inserted: [], removed: [] },
          r = t.length,
          o = n.length,
          a = u(t, n),
          i = a.commonHead,
          l = a.commonTail;
        if (i + l === r) {
          if (r === o) return e;
          for (var c = i; c < o - l; c++) e.inserted.push([n[c], c]);
          return e;
        }
        if (i + l === o) {
          for (var d = i; d < r - l; d++) e.removed.push([t[d], d]);
          return e;
        }
        for (
          var m = s(t.slice(i, r - l), n.slice(i, o - l)), p = i;
          p < r - l;
          p++
        )
          m.indices1.indexOf(p - i) < 0 && e.removed.push([t[p], p]);
        for (
          var _ = function (o) {
              var r = m.indices2.indexOf(o - i);
              if (r < 0) {
                var a = !1;
                (e.removed.forEach(function (r, i, l) {
                  var s = r[0],
                    u = r[1];
                  if (t[u] === n[o]) {
                    (e.moved.push([s, u, o]), l.splice(i, 1), (a = !0));
                    return;
                  }
                }),
                  a || e.inserted.push([n[o], o]));
              }
            },
            f = i;
          f < o - l;
          f++
        )
          _(f);
        return e;
      };
    i.findArrayDiff = c;
  },
  66,
);
