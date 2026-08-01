__d(
  "bind",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = Array.prototype.slice.call(arguments, 2);
      if (typeof t != "string")
        return Function.prototype.bind.apply(t, [e].concat(n));
      function r() {
        var r = n.concat(Array.prototype.slice.call(arguments));
        if (e[t]) return e[t].apply(e, r);
      }
      return (
        (r.toString = function () {
          return "bound lazily: " + e[t];
        }),
        r
      );
    }
    i.default = e;
  },
  66,
);
