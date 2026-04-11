__d(
  "WAWebMemoizeWithClearUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t;
      return [
        function () {
          return (t || (t = [e()]), t[0]);
        },
        function () {
          t = null;
        },
      ];
    }
    i.memoizeWithClear = e;
  },
  66,
);
