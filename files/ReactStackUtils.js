__d(
  "ReactStackUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = n(e);
      if (r != null && t != null) {
        var o = r.indexOf(t);
        o >= 0 && r.splice(o);
      }
      return r;
    }
    i.getTrimmedReactStack = e;
  },
  66,
);
