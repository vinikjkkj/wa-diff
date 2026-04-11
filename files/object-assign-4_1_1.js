__d(
  "object-assign-4.1.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      var e = Object.getOwnPropertySymbols,
        t = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable;
      function r(e) {
        if (e == null)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined",
          );
        return Object(e);
      }
      function o() {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5"))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          var r = Object.getOwnPropertyNames(t).map(function (e) {
            return t[e];
          });
          if (r.join("") !== "0123456789") return !1;
          var o = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              o[e] = e;
            }),
            Object.keys(Object.assign({}, o)).join("") ===
              "abcdefghijklmnopqrst"
          );
        } catch (e) {
          return !1;
        }
      }
      l.exports = o()
        ? Object.assign
        : function (o, a) {
            for (var i, l = r(o), s, u = 1; u < arguments.length; u++) {
              i = Object(arguments[u]);
              for (var c in i) t.call(i, c) && (l[c] = i[c]);
              if (e) {
                s = e(i);
                for (var d = 0; d < s.length; d++)
                  n.call(i, s[d]) && (l[s[d]] = i[s[d]]);
              }
            }
            return l;
          };
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
