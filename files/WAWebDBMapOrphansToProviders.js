__d(
  "WAWebDBMapOrphansToProviders",
  ["WAWebDBAddOnProviders"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new Map();
      for (var n of e) {
        var r,
          a = o("WAWebDBAddOnProviders").getProviderForAddOnType(n.type);
        if (a) {
          var i = (r = t.get(a)) != null ? r : [];
          (i.push(n), t.set(a, i));
        }
      }
      return t;
    }
    l.mapOrphansToProviders = e;
  },
  98,
);
