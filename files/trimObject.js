__d(
  "trimObject",
  ["isEmpty", "isFalsey"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      if (r("isFalsey")(t)) return t;
      var o = JSON.stringify(t);
      if (o === void 0) return t;
      var a = JSON.parse(o);
      for (var i in a)
        if (Object.prototype.hasOwnProperty.call(a, i)) {
          var l = (n && n[i] === !0) === !0,
            u = a[i];
          if (u === "") l || delete a[i];
          else if (u instanceof Array) !l && u.length === 0 && delete a[i];
          else if (typeof u == "object") {
            var c = s(u, n && n[i] !== !0 ? n[i] : void 0);
            n || !(e || (e = r("isEmpty")))(c) ? (a[i] = c) : l || delete a[i];
          }
        }
      return a;
    }
    l.default = s;
  },
  98,
);
