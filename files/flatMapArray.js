__d(
  "flatMapArray",
  [],
  function (t, n, r, o, a, i) {
    var e = Array.prototype.push;
    function l(t, n) {
      for (var r = [], o = 0; o < t.length; o++) {
        var a = n.call(t, t[o], o);
        if (Array.isArray(a)) e.apply(r, a);
        else if (a != null) {
          var i = new TypeError(
            'flatMapArray: Callback must return an array or null, received "' +
              a.toString() +
              '" instead',
          );
          throw (i.stack, i);
        }
      }
      return r;
    }
    i.default = l;
  },
  66,
);
