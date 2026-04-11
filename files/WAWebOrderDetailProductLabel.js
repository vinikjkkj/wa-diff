__d(
  "WAWebOrderDetailProductLabel",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e
        .filter(Boolean)
        .slice(0, 10)
        .map(function (e) {
          return e.name;
        })
        .join(", ");
    }
    i.getOrderDetailProductLabel = e;
  },
  66,
);
