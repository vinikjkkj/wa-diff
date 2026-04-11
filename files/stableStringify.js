__d(
  "stableStringify",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return (
        e !== null && Object.prototype.toString.call(e) === "[object Object]"
      );
    }
    function l(t, n) {
      n === void 0 && (n = !1);
      var r = Array.isArray(t),
        o = e(t);
      if (r || o) {
        var a = Object.keys(t);
        if (a.length) {
          for (var i = a.sort(), s = [], u = 0; u < i.length; u++) {
            var c = i[u],
              d = t[c];
            if (!(n && d == null && o)) {
              var m = void 0;
              (e(d) || Array.isArray(d)
                ? (m = l(d, n))
                : (m = JSON.stringify(d)),
                s.push(c + ":" + m));
            }
          }
          return r ? "[" + s.join(",") + "]" : "{" + s.join(",") + "}";
        }
      }
      return JSON.stringify(t);
    }
    i.default = l;
  },
  66,
);
