__d(
  "WAWebLeadSublistChangeNotifier",
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
      for (var t of e) t();
    }
    ((i.subscribeToLeadSublistChanges = l), (i.notifyLeadSublistChanged = s));
  },
  66,
);
