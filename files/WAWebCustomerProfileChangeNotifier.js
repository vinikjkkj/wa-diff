__d(
  "WAWebCustomerProfileChangeNotifier",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map();
    function l(t, n) {
      var r = e.get(t),
        o = r != null ? r : new Set();
      return (
        r == null && e.set(t, o),
        o.add(n),
        function () {
          (o.delete(n), o.size === 0 && e.get(t) === o && e.delete(t));
        }
      );
    }
    function s(t) {
      var n = e.get(t);
      if (n != null) for (var r of Array.from(n)) r();
    }
    ((i.subscribeToCustomerProfileChanges = l),
      (i.notifyCustomerProfileChanged = s));
  },
  66,
);
