__d(
  "WAWebCustomerProfileChangeNotifier",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map(),
      l = new Set();
    function s(t, n) {
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
    function u(e) {
      return (
        l.add(e),
        function () {
          l.delete(e);
        }
      );
    }
    function c(t) {
      var n = e.get(t);
      if (n != null) for (var r of Array.from(n)) r();
      for (var o of Array.from(l)) o(t);
    }
    ((i.subscribeToCustomerProfileChanges = s),
      (i.subscribeToAnyCustomerProfileChange = u),
      (i.notifyCustomerProfileChanged = c));
  },
  66,
);
