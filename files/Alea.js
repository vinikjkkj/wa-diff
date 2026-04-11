__d(
  "Alea",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = 4022871197,
        t = function (n) {
          for (var t = n.toString(), r = 0; r < t.length; r++) {
            e += t.charCodeAt(r);
            var o = 0.02519603282416938 * e;
            ((e = o >>> 0),
              (o -= e),
              (o *= e),
              (e = o >>> 0),
              (o -= e),
              (e += o * 4294967296));
          }
          return (e >>> 0) * 23283064365386963e-26;
        };
      return ((t.version = "Mash 0.9"), t);
    }
    function l() {
      for (
        var t = 0,
          n = 0,
          r = 0,
          o = 1,
          a = arguments.length,
          i = new Array(a),
          l = 0;
        l < a;
        l++
      )
        i[l] = arguments[l];
      var s = i.length > 0 ? i : [new Date()],
        u = e();
      ((t = u(" ")), (n = u(" ")), (r = u(" ")));
      for (var c = 0; c < s.length; c++)
        ((t -= u(s[c])),
          t < 0 && (t += 1),
          (n -= u(s[c])),
          n < 0 && (n += 1),
          (r -= u(s[c])),
          r < 0 && (r += 1));
      u = null;
      var d = function () {
        var e = 2091639 * t + o * 23283064365386963e-26;
        return ((t = n), (n = r), (r = e - (o = e | 0)), r);
      };
      return ((d.version = "Alea 0.9"), (d.args = s), d);
    }
    i.default = l;
  },
  66,
);
