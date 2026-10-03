__d(
  "WAWebContactManagerMetadataChangeNotifier",
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
    function s(t) {
      for (var n of e) n(t);
    }
    ((i.subscribeToContactManagerMetadataChanges = l),
      (i.notifyContactManagerMetadataChanged = s));
  },
  66,
);
