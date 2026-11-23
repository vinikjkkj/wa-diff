__d(
  "MAIBALWIAdChangeChannel",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = new Map(),
      s = new Set(),
      u = new Set();
    function c(e) {
      try {
        var t,
          n = (t = JSON.parse(e != null ? e : "")) == null ? void 0 : t.ad_ids;
        return Array.isArray(n)
          ? n.filter(function (e) {
              return typeof e == "string";
            })
          : [];
      } catch (e) {
        return [];
      }
    }
    function d(t, n) {
      if (!s.has(t)) {
        (s.add(t), (e += 1));
        for (var r of c(n)) l.set(r, e);
        u.forEach(function (e) {
          return e();
        });
      }
    }
    function m() {
      return e;
    }
    function p(e) {
      var t;
      return (t = l.get(e)) != null ? t : 0;
    }
    function _(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    ((i.publishMAIBALWIAdChange = d),
      (i.getLatestMAIBALWIAdChange = m),
      (i.getMAIBALWIAdChange = p),
      (i.subscribeToMAIBALWIAdChanges = _));
  },
  66,
);
