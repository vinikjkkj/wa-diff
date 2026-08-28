__d(
  "adsAPStringifyParams",
  [],
  function (t, n, r, o, a, i) {
    function e(t, n) {
      if ((n === void 0 && (n = !1), t === !0)) return "true";
      if (t === !1) return "false";
      switch (typeof t) {
        case "object":
          if (t == null) return null;
          if (t.toJSON && typeof t.toJSON == "function")
            return e(t.toJSON(), n);
          if (Array.isArray(t)) {
            for (var r = "[", o = t.length - 1, a = 0; a < o; a++)
              r += (e(t[a], !0) || "") + ",";
            return (o > -1 && (r += e(t[a], !0) || ""), r + "]");
          }
          var i =
            t.toString && typeof t.toString == "function" ? t.toString() : null;
          if (i === "[object Object]") {
            for (
              var l = Object.keys(t).sort(), s = l.length, u = "", c = 0;
              c < s;
            ) {
              var d = l[c],
                m = e(t[d], !1);
              (m != null &&
                (u && (u += ","), (u += JSON.stringify(d) + ":" + m)),
                c++);
            }
            return "{" + u + "}";
          } else return JSON.stringify(t);
        case "function":
        case "undefined":
          return n ? null : void 0;
        case "string":
          return JSON.stringify(t);
        default:
          return isFinite(t) ? t : null;
      }
    }
    i.default = e;
  },
  66,
);
