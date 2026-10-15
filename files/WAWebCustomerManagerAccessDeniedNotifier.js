__d(
  "WAWebCustomerManagerAccessDeniedNotifier",
  [],
  function (t, n, r, o, a, i) {
    var e = new Set();
    function l(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function s() {
      for (var t of Array.from(e)) t();
    }
    ((i.subscribeToCustomerManagerAccessDenied = l),
      (i.notifyCustomerManagerAccessDenied = s));
  },
  66,
);
