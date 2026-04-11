__d(
  "WAWebMutationObserver",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = new MutationObserver(n);
      return (
        r.observe(e, t),
        function () {
          r.disconnect();
        }
      );
    }
    i.observeMutations = e;
  },
  66,
);
