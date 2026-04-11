__d(
  "memoizeWithArgs",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.prototype.hasOwnProperty;
    function l(t, n, r) {
      var o,
        a = function () {
          o || (o = {});
          var r = n.apply(void 0, arguments);
          return (e.call(o, r) || (o[r] = t.apply(void 0, arguments)), o[r]);
        };
      return a;
    }
    i.default = l;
  },
  66,
);
