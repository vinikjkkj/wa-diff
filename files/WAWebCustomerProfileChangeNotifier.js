__d(
  "WAWebCustomerProfileChangeNotifier",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map(),
      l = new Set(),
      s = new Map();
    function u(t, n) {
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
    function c(e) {
      return (
        l.add(e),
        function () {
          l.delete(e);
        }
      );
    }
    function d(e, t) {
      var n = s.get(e);
      return ((n == null || t > n) && s.set(e, t), n != null && t > n);
    }
    function m(t) {
      var n = e.get(t);
      if (n != null) for (var r of Array.from(n)) r();
      for (var o of Array.from(l)) o(t);
    }
    ((i.subscribeToCustomerProfileChanges = u),
      (i.subscribeToAnyCustomerProfileChange = c),
      (i.noteCustomerProfileVersion = d),
      (i.notifyCustomerProfileChanged = m));
  },
  66,
);
