__d(
  "WAWebOrderPreservingHex",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.toString(16);
      return (t.length - 1).toString(16) + t;
    }
    function l(e) {
      return parseInt(e.substring(1), 16);
    }
    ((i.orderPreservingHex = e), (i.undoOrderPreservingHex = l));
  },
  66,
);
