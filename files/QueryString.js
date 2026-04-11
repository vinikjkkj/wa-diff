__d(
  "QueryString",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = [];
      return (
        Object.keys(e)
          .sort()
          .forEach(function (n) {
            var r = e[n];
            if (r !== void 0) {
              if (r === null) {
                t.push(n);
                return;
              }
              t.push(
                encodeURIComponent(n) + "=" + encodeURIComponent(String(r)),
              );
            }
          }),
        t.join("&")
      );
    }
    function l(e, t) {
      t === void 0 && (t = !1);
      var n = {};
      if (e === "") return n;
      for (var r = e.split("&"), o = 0; o < r.length; o++) {
        var a = r[o].split("=", 2),
          i = decodeURIComponent(a[0]);
        if (t && Object.prototype.hasOwnProperty.call(n, i))
          throw new URIError("Duplicate key: " + i);
        n[i] = a.length === 2 ? decodeURIComponent(a[1]) : null;
      }
      return n;
    }
    function s(t, n) {
      return (
        t +
        (t.indexOf("?") !== -1 ? "&" : "?") +
        (typeof n == "string" ? n : e(n))
      );
    }
    var u = { encode: e, decode: l, appendToUrl: s };
    i.default = u;
  },
  66,
);
